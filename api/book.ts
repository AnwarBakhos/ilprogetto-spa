// ─── /api/book — Booking API Route ───────────────────────────────────────────
// Vercel Edge/Serverless Function — runs server-side ONLY.
// RESEND_API_KEY is never exposed to the client bundle.
//
// Deploy: push to Vercel. This file is auto-detected as an API route.
// Local dev: `vercel dev` proxies /api/* to this file.

import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'
import { generateICS, encodeICSToBase64 } from '../src/lib/ics.js'
import { buildClientEmail, buildOwnerEmail, buildFlexibleClientEmail, buildFlexibleOwnerEmail } from '../src/lib/email-templates.js'
import type { BookingApiRequest, BookingApiResponse, BookingFormData } from '../src/types/booking.js'

// ─── Resend client ────────────────────────────────────────────────────────────
// Key is read from environment variable — never hardcoded.
// Set in Vercel dashboard: Settings → Environment Variables → RESEND_API_KEY
const resend = new Resend(process.env.RESEND_API_KEY)

const OWNER_EMAIL = 'info@ilprogettollc.com'
const FROM_EMAIL = 'info@ilprogettollc.com'  // must be a verified Resend domain

// ─── In-memory booked slots (V1) ──────────────────────────────────────────────
// This Set persists for the lifetime of the serverless function instance.
// In production, replace with a database read/write (Supabase, PlanetScale, etc.)
// Upgrade path: replace `BOOKED_SLOTS.has()` and `BOOKED_SLOTS.add()` with DB calls.
const BOOKED_SLOTS = new Set<string>()

function slotKey(date: string, time: string): string {
  return `${date}::${time}`
}

// ─── Booking ID generator ─────────────────────────────────────────────────────
function generateBookingId(): string {
  const prefix = 'ILP'
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).slice(2, 6).toUpperCase()
  return `${prefix}-${timestamp}-${random}`
}

// ─── Input validation ────────────────────────────────────────────────────────
function validateBooking(data: unknown): data is BookingFormData {
  if (!data || typeof data !== 'object') return false
  const b = data as Record<string, unknown>
  return (
    typeof b.firstName === 'string' && b.firstName.trim().length > 0 &&
    typeof b.lastName === 'string' && b.lastName.trim().length > 0 &&
    typeof b.email === 'string' && b.email.includes('@') &&
    typeof b.date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(b.date) &&
    typeof b.time === 'string' && /^\d{2}:\d{2}$/.test(b.time) &&
    typeof b.service === 'string'
  )
}

function validateFlexibleBooking(data: unknown): data is BookingFormData {
  if (!data || typeof data !== 'object') return false
  const b = data as Record<string, unknown>
  return (
    typeof b.firstName === 'string' && b.firstName.trim().length > 0 &&
    typeof b.lastName === 'string' && b.lastName.trim().length > 0 &&
    typeof b.email === 'string' && b.email.includes('@') &&
    b.date === 'flexible' && b.time === 'flexible' &&
    typeof b.service === 'string'
  )
}

// ─── Handler ──────────────────────────────────────────────────────────────────
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  // Only accept POST
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' } satisfies BookingApiResponse)
    return
  }

  // CORS — restrict to your domain in production
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN ?? '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  const body = req.body as BookingApiRequest

  // ─── Flexible scheduling path (no date/time selected) ────────────────────
  if (body?.booking && validateFlexibleBooking(body.booking)) {
    const { booking } = body
    const bookingId = generateBookingId()
    try {
      await Promise.all([
        resend.emails.send({
          from: `iL Progetto LLC <${FROM_EMAIL}>`,
          to: booking.email,
          subject: 'We received your consultation request — iL Progetto LLC',
          html: buildFlexibleClientEmail(booking, bookingId),
        }),
        resend.emails.send({
          from: `iL Progetto LLC <${FROM_EMAIL}>`,
          to: OWNER_EMAIL,
          subject: `New flexible consultation request — ${booking.firstName} ${booking.lastName}`,
          html: buildFlexibleOwnerEmail(booking, bookingId),
        }),
      ])
      res.status(200).json({ ok: true, id: bookingId } satisfies BookingApiResponse)
    } catch (err) {
      console.error('Flexible booking email error:', err)
      res.status(200).json({ ok: true, id: bookingId } satisfies BookingApiResponse)
    }
    return
  }

  if (!body?.booking || !validateBooking(body.booking)) {
    res.status(400).json({
      ok: false,
      error: 'Invalid booking data. firstName, lastName, email, date, and time are required.',
    } satisfies BookingApiResponse)
    return
  }

  const { booking } = body
  const key = slotKey(booking.date, booking.time)

  // ─── Conflict check ────────────────────────────────────────────────────────
  if (BOOKED_SLOTS.has(key)) {
    res.status(409).json({
      ok: false,
      error: 'This time slot was just taken. Please select another.',
      conflictedSlot: booking.time,
    } satisfies BookingApiResponse)
    return
  }

  // ─── Reserve the slot immediately (prevents race condition) ───────────────
  BOOKED_SLOTS.add(key)

  const bookingId = generateBookingId()

  // ─── Generate ICS ──────────────────────────────────────────────────────────
  const icsContent = generateICS(booking, bookingId)
  const icsBase64 = encodeICSToBase64(icsContent)

  // ─── Send both emails ─────────────────────────────────────────────────────
  try { console.log("DEBUG: Processing request...");
    const [clientResult, ownerResult] = await Promise.all([
      // Client confirmation
      resend.emails.send({
        from: `iL Progetto LLC <${FROM_EMAIL}>`,
        to: booking.email,
        subject: `Consultation Confirmed — ${booking.date} at ${booking.time.replace(':', ':')}`,
        html: buildClientEmail(booking, bookingId),
        attachments: [
          {
            filename: 'ilprogetto-consultation.ics',
            content: icsBase64,
          },
        ],
      }),

      // Owner notification
      resend.emails.send({
        from: `iL Progetto Bookings <${FROM_EMAIL}>`,
        to: OWNER_EMAIL,
        subject: `New Booking: ${booking.firstName} ${booking.lastName} — ${booking.date} at ${booking.time}`,
        html: buildOwnerEmail(booking, bookingId),
        attachments: [
          {
            filename: `booking-${bookingId}.ics`,
            content: icsBase64,
          },
        ],
      }),
    ])

    // If Resend errored on both, release the slot and return 500
    if (clientResult.error && ownerResult.error) {
      BOOKED_SLOTS.delete(key)
      console.error('Resend error (both):', clientResult.error, ownerResult.error)
      res.status(500).json({
        ok: false,
        error: 'Email delivery failed. Your slot was not reserved. Please try again.',
      } satisfies BookingApiResponse)
      return
    }

    // Log any partial failure but don't fail the booking
    if (clientResult.error) {
      console.error('Client email failed:', clientResult.error)
    }
    if (ownerResult.error) {
      console.error('Owner email failed:', ownerResult.error)
    }

    res.status(200).json({
      ok: true,
      id: bookingId,
    } satisfies BookingApiResponse)
  } catch (err) {
    // Release slot on unexpected error
    BOOKED_SLOTS.delete(key)
    console.error('Booking handler error:', err)
    res.status(500).json({
      ok: false,
      error: 'An unexpected error occurred. Please call (858) 338-1678 to book directly.',
    } satisfies BookingApiResponse)
  }
}
