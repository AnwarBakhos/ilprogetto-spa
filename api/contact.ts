// ─── /api/contact — Contact form handler ─────────────────────────────────────
// Sends owner notification and customer auto-reply via Resend.
// Runs server-side only — RESEND_API_KEY never in the client bundle.

import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const FROM   = 'info@progettoshades.com'
const OWNER  = 'info@progettoshades.com'

// ─── Rate limiting ────────────────────────────────────────────────────────────
const WINDOW_MS = 10 * 60 * 1000
const MAX       = 3
const rlMap     = new Map<string, { count: number; resetAt: number }>()
function isRateLimited(ip: string): boolean {
  const now = Date.now(); const e = rlMap.get(ip)
  if (!e || now > e.resetAt) { rlMap.set(ip, { count: 1, resetAt: now + WINDOW_MS }); return false }
  if (e.count >= MAX) return true; e.count++; return false
}
const BG     = '#F7F4EF'
const INK    = '#1A1A1A'
const SAND   = '#C5A880'
const SERIF  = "'Georgia', 'Times New Roman', serif"

interface ContactBody {
  firstName?: string
  lastName?:  string
  email?:     string
  phone?:     string
  address?:   string
  message?:   string
  service?:   string
}

function ownerEmail(data: Required<ContactBody>): string {
  const rows = [
    ['Name',    `${data.firstName} ${data.lastName}`],
    ['Email',   data.email],
    ['Phone',   data.phone   || '—'],
    ['Address', data.address || '—'],
    ['Service', data.service || '—'],
  ]
  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:10px 16px;width:120px;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.5);background:${INK};vertical-align:top;">${label}</td>
          <td style="padding:10px 16px;font-size:14px;color:${INK};background:#fff;border-bottom:1px solid rgba(28,28,28,0.07);">${value}</td>
        </tr>`,
    )
    .join('')

  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:${BG};font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:${BG};padding:40px 20px;">
  <tr><td align="center">
    <table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border:1px solid rgba(28,28,28,0.08);">
      <tr><td style="background:${INK};padding:36px 48px;">
        <p style="margin:0;font-family:${SERIF};font-size:26px;font-weight:300;color:#fff;">iL Progetto LLC</p>
        <p style="margin:4px 0 0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.5);">New Contact Form Submission</p>
      </td></tr>
      <tr><td style="padding:44px 48px 32px;">
        <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${SAND};">Inquiry</p>
        <h1 style="margin:0 0 24px;font-family:${SERIF};font-size:26px;font-weight:300;color:${INK};">You have a new consultation request</h1>
        <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid rgba(28,28,28,0.08);">
          ${rowsHtml}
        </table>
        ${
          data.message
            ? `<div style="margin-top:24px;padding:20px 24px;background:${BG};border-left:3px solid ${SAND};">
                <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:${SAND};">Message</p>
                <p style="margin:0;font-size:14px;color:${INK};line-height:1.8;">${data.message.replace(/\n/g, '<br/>')}</p>
              </div>`
            : ''
        }
      </td></tr>
      <tr><td style="padding:24px 48px;border-top:1px solid rgba(28,28,28,0.08);">
        <p style="margin:0;font-size:12px;color:#999;line-height:1.8;">
          iL Progetto LLC · San Diego, CA 92127 · Automated notification
        </p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`
}

function autoReplyEmail(firstName: string): string {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:${BG};font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:${BG};padding:40px 20px;">
  <tr><td align="center">
    <table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border:1px solid rgba(28,28,28,0.08);">
      <tr><td style="background:${INK};padding:36px 48px;">
        <p style="margin:0;font-family:${SERIF};font-size:26px;font-weight:300;color:#fff;">iL Progetto LLC</p>
        <p style="margin:4px 0 0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.5);">Window Treatments · San Diego</p>
      </td></tr>
      <tr><td style="padding:44px 48px;">
        <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${SAND};">Thank You</p>
        <h1 style="margin:0 0 20px;font-family:${SERIF};font-size:30px;font-weight:300;color:${INK};">We received your message, ${firstName}.</h1>
        <p style="margin:0 0 16px;font-size:15px;color:#6b6b6b;line-height:1.85;">
          Thank you for reaching out to iL Progetto LLC. One of our design consultants will be in touch within <strong style="color:${INK};">24 hours</strong> to schedule your free in-home consultation.
        </p>
        <p style="margin:0 0 32px;font-size:15px;color:#6b6b6b;line-height:1.85;">
          In the meantime, feel free to browse our collection or give us a call if you have any immediate questions.
        </p>
        <a href="https://www.progettoshades.com/catalog"
           style="display:inline-block;background:${SAND};color:#fff;text-decoration:none;padding:14px 28px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;">
          Browse Our Collection
        </a>
      </td></tr>
      <tr><td style="padding:24px 48px;border-top:1px solid rgba(28,28,28,0.08);">
        <p style="margin:0;font-size:12px;color:#999;line-height:1.8;">
          iL Progetto LLC · San Diego, CA 92127 · License #1127055<br/>
          <a href="tel:+18583381678" style="color:${SAND};text-decoration:none;">(858) 338-1678</a> ·
          <a href="mailto:${OWNER}" style="color:${SAND};text-decoration:none;">${OWNER}</a>
        </p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = process.env.ALLOWED_ORIGIN ?? 'https://ilprogettollc.com'
  res.setHeader('Access-Control-Allow-Origin', origin)
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed' })

  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ?? 'unknown'
  if (isRateLimited(ip)) return res.status(429).json({ success: false, error: 'Too many requests.' })

  const { firstName, lastName, email, phone, address, message, service } =
    req.body as ContactBody

  if (!firstName || !lastName || !email) {
    return res
      .status(400)
      .json({ success: false, error: 'firstName, lastName, and email are required.' })
  }

  if (!email.includes('@')) {
    return res.status(400).json({ success: false, error: 'Valid email required.' })
  }

  const data: Required<ContactBody> = {
    firstName,
    lastName,
    email,
    phone:   phone   ?? '',
    address: address ?? '',
    message: message ?? '',
    service: service ?? '',
  }

  try {
    await Promise.all([
      // Owner notification
      resend.emails.send({
        from:    `iL Progetto Forms <${FROM}>`,
        to:      OWNER,
        subject: `New consultation request from ${firstName} ${lastName}`,
        html:    ownerEmail(data),
      }),
      // Auto-reply to customer
      resend.emails.send({
        from:    `iL Progetto LLC <${FROM}>`,
        to:      email,
        subject: 'We received your message — iL Progetto LLC',
        html:    autoReplyEmail(firstName),
      }),
    ])

    return res.status(200).json({ success: true, message: 'Message sent' })
  } catch (err) {
    console.error('Contact form error:', err)
    return res.status(500).json({ success: false, error: 'Failed to send. Please try again.' })
  }
}
