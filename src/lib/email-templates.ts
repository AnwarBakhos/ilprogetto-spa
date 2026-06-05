// ─── Email Templates ──────────────────────────────────────────────────────────
// Server-side only. Called from /api/book.ts.
// All templates use inline styles for maximum email client compatibility.

import type { BookingFormData } from '../types/booking.js'

// ─── Brand constants ──────────────────────────────────────────────────────────
const BG = '#F7F4EF'
const INK = '#1A1A1A'
const SAND = '#C5A572'
const MID = '#6B6B6B'
const SERIF = "'Georgia', 'Times New Roman', serif"
const SANS = "'Helvetica Neue', Arial, sans-serif"

// ─── 12-hour time formatter ───────────────────────────────────────────────────
function formatTime(time: string): string {
  const [h, m] = time.split(':').map(Number)
  const period = h! >= 12 ? 'PM' : 'AM'
  const hour = h! > 12 ? h! - 12 : h === 0 ? 12 : h!
  return `${hour}:${String(m).padStart(2, '0')} ${period}`
}

// ─── Date formatter ───────────────────────────────────────────────────────────
function formatDate(dateStr: string): string {
  const [y, mo, d] = dateStr.split('-').map(Number)
  const date = new Date(y!, mo! - 1, d!)
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// ─── Shared wrapper ───────────────────────────────────────────────────────────
function emailWrapper(body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>iL Progetto LLC</title>
</head>
<body style="margin:0;padding:0;background-color:${BG};font-family:${SANS};">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:${BG};padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#fff;border:1px solid rgba(28,28,28,0.08);">
          <!-- Header -->
          <tr>
            <td style="background-color:${INK};padding:40px 48px;">
              <p style="margin:0;font-family:${SERIF};font-size:28px;font-weight:300;color:#fff;letter-spacing:-0.01em;">
                iL Progetto LLC
              </p>
              <p style="margin:6px 0 0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.5);">
                Window Treatments · San Diego
              </p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:48px;">
              ${body}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:28px 48px;border-top:1px solid rgba(28,28,28,0.08);">
              <p style="margin:0;font-size:12px;color:${MID};line-height:1.8;">
                <strong style="color:${INK};">iL Progetto LLC</strong><br />
                San Diego, CA 92127<br />
                <a href="tel:+18583381678" style="color:${SAND};text-decoration:none;">(858) 338-1678</a> ·
                <a href="mailto:info@ilprogettollc.com" style="color:${SAND};text-decoration:none;">info@ilprogettollc.com</a><br />
                Contractors License #1127055
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

// ─── Detail row helper ────────────────────────────────────────────────────────
function detailRow(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid rgba(28,28,28,0.06);">
        <span style="font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:${MID};">${label}</span><br />
        <span style="font-size:15px;color:${INK};font-weight:400;">${value}</span>
      </td>
    </tr>`
}

// ─── CLIENT confirmation email ────────────────────────────────────────────────
export function buildClientEmail(booking: BookingFormData, bookingId: string): string {
  return emailWrapper(`
    <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${SAND};">
      Booking Confirmed
    </p>
    <h1 style="margin:0 0 24px;font-family:${SERIF};font-size:32px;font-weight:300;color:${INK};line-height:1.1;">
      Your consultation is scheduled.
    </h1>
    <p style="margin:0 0 32px;font-size:15px;color:${MID};line-height:1.8;">
      Hello ${booking.firstName}, we look forward to meeting you at your home. Our designer will arrive with our complete collection of samples, hardware, and measuring tools — everything needed to help you make the perfect choice in your own space. A calendar invitation is attached to this email. If anything changes, call or text us at (858) 338-1678.
    </p>

    <!-- Booking details -->
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
      ${detailRow('Date', formatDate(booking.date))}
      ${detailRow('Time', formatTime(booking.time))}
      ${detailRow('Address', booking.address || 'To be confirmed')}
      ${detailRow('Service', booking.service === 'general' ? 'General Consultation' : `${booking.service.charAt(0).toUpperCase() + booking.service.slice(1)} Shades`)}
      ${detailRow('Booking ID', bookingId)}
    </table>

    <!-- What to expect -->
    <div style="background-color:${BG};padding:24px 28px;margin-bottom:32px;">
      <p style="margin:0 0 12px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:${SAND};">What to Expect</p>
      <p style="margin:0 0 10px;font-size:14px;color:${MID};line-height:1.75;">
        Our designer will arrive with hundreds of fabric samples, measuring tools, and pricing materials. 
        The consultation takes approximately 60–90 minutes. There is no obligation to purchase.
      </p>
      <p style="margin:0;font-size:14px;color:${MID};line-height:1.75;">
        For the best experience, note which windows you want to treat and any preferences 
        you have around light control, privacy, and style.
      </p>
    </div>

    <a href="tel:+18583381678" style="display:inline-block;background-color:${INK};color:#fff;text-decoration:none;padding:14px 28px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;">
      Call to Reschedule
    </a>
  `)
}

// ─── OWNER new booking notification ──────────────────────────────────────────
export function buildOwnerEmail(booking: BookingFormData, bookingId: string): string {
  return emailWrapper(`
    <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${SAND};">
      New Booking
    </p>
    <h1 style="margin:0 0 24px;font-family:${SERIF};font-size:28px;font-weight:300;color:${INK};line-height:1.1;">
      ${booking.firstName} ${booking.lastName}<br />
      <span style="color:${SAND};">${formatDate(booking.date)} at ${formatTime(booking.time)}</span>
    </h1>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
      ${detailRow('Client Name', `${booking.firstName} ${booking.lastName}`)}
      ${detailRow('Email', booking.email)}
      ${detailRow('Phone', booking.phone || 'Not provided')}
      ${detailRow('Address', booking.address || 'Not provided')}
      ${detailRow('Service Interest', booking.service === 'general' ? 'General / Not specified' : `${booking.service.charAt(0).toUpperCase() + booking.service.slice(1)} Shades`)}
      ${detailRow('Notes', booking.notes || 'None')}
      ${detailRow('Booking ID', bookingId)}
      ${detailRow('Submitted', new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }) + ' PT')}
    </table>

    <p style="margin:0 0 20px;font-size:13px;color:${MID};line-height:1.75;">
      A calendar invitation is attached. The client has received a confirmation email.
    </p>

    <a href="mailto:${booking.email}" style="display:inline-block;background-color:${SAND};color:#fff;text-decoration:none;padding:14px 28px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;margin-right:12px;">
      Email Client
    </a>
    <a href="tel:${booking.phone}" style="display:inline-block;background-color:${INK};color:#fff;text-decoration:none;paddig-color:${INK};color:#fff;text-decoration:none;padding:14px 28px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;">
      Call Client
    </a>
  `)
}

// ─── Flexible booking emails ──────────────────────────────────────────────────

export function buildFlexibleClientEmail(booking: BookingFormData, bookingId: string): string {
  return wrap(
    booking.firstName,
    `We've received your consultation request and will contact you within 24 hours to schedule a time that works for you.`,
    `
    <p style="margin:0 0 24px;font-size:15px;color:${MID};line-height:1.75;">
      Hi ${booking.firstName},
    </p>
    <p style="margin:0 0 24px;font-size:15px;color:${MID};line-height:1.75;">
      Thank you for reaching out to iL Progetto LLC. We've received your details and a member of our team will be in touch within <strong style="color:${INK};">24 hours</strong> to find a consultation time that works for you.
    </p>
    <p style="margin:0 0 32px;font-size:15px;color:${MID};line-height:1.75;">
      Our designer will come to your home with the full product collection — fabric samples, hardware options, and pricing — so every decision is made in your own light and space.
    </p>

    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;margin-bottom:32px;">
      ${detailRow('Name', `${booking.firstName} ${booking.lastName}`)}
      ${detailRow('Email', booking.email)}
      ${detailRow('Phone', booking.phone || 'Not provided')}
      ${detailRow('Address', booking.address || 'Not provided')}
      ${detailRow('Service Interest', booking.service === 'general' ? 'General / Not specified' : booking.service)}
      ${detailRow('Request ID', bookingId)}
    </table>

    <p style="margin:0 0 8px;font-size:13px;color:${MID};line-height:1.75;">
      Need to reach us sooner?
    </p>
    <a href="tel:+18583381678" style="display:inline-block;background-color:${SAND};color:#fff;text-decoration:none;padding:14px 28px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;">
      Call (858) 338-1678
    </a>
  `)
}

export function buildFlexibleOwnerEmail(booking: BookingFormData, bookingId: string): string {
  return wrap(
    'New Consultation Request',
    `${booking.firstName} ${booking.lastName} submitted a request without selecting a date — contact them to schedule.`,
    `
    <p style="margin:0 0 12px;font-size:15px;color:${MID};line-height:1.75;">
      A new consultation request was submitted. <strong style="color:${INK};">No date was selected</strong> — the customer chose to be contacted. Reach out within 24 hours to schedule.
    </p>

    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;margin-bottom:32px;">
      ${detailRow('Name', `${booking.firstName} ${booking.lastName}`)}
      ${detailRow('Email', booking.email)}
      ${detailRow('Phone', booking.phone || 'Not provided')}
      ${detailRow('Address', booking.address || 'Not provided')}
      ${detailRow('Service Interest', booking.service === 'general' ? 'General / Not specified' : booking.service)}
      ${detailRow('Notes', booking.notes || 'None')}
      ${detailRow('Request ID', bookingId)}
      ${detailRow('Submitted', new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }) + ' PT')}
    </table>

    <a href="mailto:${booking.email}" style="display:inline-block;background-color:${SAND};color:#fff;text-decoration:none;padding:14px 28px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;margin-right:12px;">
      Email ${booking.firstName}
    </a>
    <a href="tel:${booking.phone}" style="display:inline-block;background-color:${INK};color:#fff;text-decoration:none;padding:14px 28px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;">
      Call ${booking.firstName}
    </a>
  `)
}
