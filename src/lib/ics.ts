// ─── ICS Calendar File Generator ────────────────────────────────────────────
// Generates RFC 5545-compliant .ics content for calendar attachment.
// Runs server-side only inside the /api/book serverless function.

import type { BookingFormData } from '../types/booking.js'

// ─── Format date-time for ICS (YYYYMMDDTHHMMSS) ──────────────────────────────
function icsDateTime(date: string, time: string): string {
  // date: "2025-08-15", time: "09:00"
  const clean = date.replace(/-/g, '')
  const cleanTime = time.replace(':', '') + '00'
  return `${clean}T${cleanTime}`
}

// ─── Add 90 minutes to a time string ─────────────────────────────────────────
function addMinutes(time: string, minutes: number): string {
  const [h, m] = time.split(':').map(Number)
  const total = (h! * 60) + m! + minutes
  const newH = Math.floor(total / 60)
  const newM = total % 60
  return `${String(newH).padStart(2, '0')}:${String(newM).padStart(2, '0')}`
}

// ─── Simple UID generator ─────────────────────────────────────────────────────
function generateUid(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}@progettoshades.com`
}

// ─── Generate ICS file content ────────────────────────────────────────────────
export function generateICS(booking: BookingFormData, bookingId: string): string {
  const dtStart = icsDateTime(booking.date, booking.time)
  const endTime = addMinutes(booking.time, 90)
  const dtEnd = icsDateTime(booking.date, endTime)
  const dtStamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'

  const serviceLabel = booking.service === 'general'
    ? 'Window Treatment Consultation'
    : `Window Treatment Consultation — ${booking.service.charAt(0).toUpperCase() + booking.service.slice(1)} Shades`

  // RFC 5545 — fold lines at 75 chars with CRLF + whitespace
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//iL Progetto LLC//Booking//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:REQUEST',
    'BEGIN:VEVENT',
    `UID:${generateUid()}`,
    `DTSTAMP:${dtStamp}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${serviceLabel} — iL Progetto LLC`,
    `LOCATION:${booking.address || 'Your home'} — iL Progetto LLC In-Home Consultation`,
    foldLine(`DESCRIPTION:Your free in-home consultation with iL Progetto LLC is confirmed for ${booking.date} at ${booking.time}. Our team will arrive at ${booking.address}. Questions? Call (858) 338-1678 or email info@progettoshades.com. Booking ID: ${bookingId}`),
    'ORGANIZER;CN=iL Progetto LLC:MAILTO:info@progettoshades.com',
    `ATTENDEE;CN=${booking.firstName} ${booking.lastName};PARTSTAT=ACCEPTED:MAILTO:${booking.email}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'TRANSP:OPAQUE',
    'BEGIN:VALARM',
    'TRIGGER:-PT24H',
    'ACTION:DISPLAY',
    'DESCRIPTION:iL Progetto consultation tomorrow',
    'END:VALARM',
    'BEGIN:VALARM',
    'TRIGGER:-PT1H',
    'ACTION:DISPLAY',
    'DESCRIPTION:iL Progetto consultation in 1 hour',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ]

  return lines.join('\r\n')
}

// ─── RFC 5545 line folding (max 75 octets per line) ──────────────────────────
function foldLine(line: string): string {
  if (line.length <= 75) return line
  const chunks: string[] = []
  chunks.push(line.slice(0, 75))
  let i = 75
  while (i < line.length) {
    chunks.push(' ' + line.slice(i, i + 74))
    i += 74
  }
  return chunks.join('\r\n')
}

// ─── Encode ICS to base64 for Resend attachment ───────────────────────────────
export function encodeICSToBase64(icsContent: string): string {
  // Buffer available in Node.js (Vercel serverless). btoa for browser contexts.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const buf = (globalThis as any).Buffer
  if (buf) {
    return buf.from(icsContent, 'utf-8').toString('base64')
  }
  return btoa(unescape(encodeURIComponent(icsContent)))
}
