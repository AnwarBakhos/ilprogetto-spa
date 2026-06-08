// ─── /api/newsletter — Newsletter signup ─────────────────────────────────────
// Sends a welcome email to the subscriber and notifies the owner.
// Runs server-side only — RESEND_API_KEY never in the client bundle.

import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const FROM   = 'info@ilprogettollc.com'
const OWNER  = 'info@ilprogettollc.com'

// ─── Rate limiting ────────────────────────────────────────────────────────────
const WINDOW_MS = 60 * 60 * 1000  // 1 hour — newsletter is most abuse-prone
const MAX       = 2
const rlMap     = new Map<string, { count: number; resetAt: number }>()
function isRateLimited(ip: string): boolean {
  const now = Date.now(); const e = rlMap.get(ip)
  if (!e || now > e.resetAt) { rlMap.set(ip, { count: 1, resetAt: now + WINDOW_MS }); return false }
  if (e.count >= MAX) return true; e.count++; return false
}
const BG        = '#F7F4EF'
const INK       = '#1A1A1A'
const SAND      = '#C5A572'
const SERIF     = "'Georgia', 'Times New Roman', serif"

function welcomeEmail(email: string): string {
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
        <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${SAND};">Welcome</p>
        <h1 style="margin:0 0 20px;font-family:${SERIF};font-size:30px;font-weight:300;color:${INK};">Your 10% Off Is Confirmed</h1>
        <p style="margin:0 0 16px;font-size:15px;color:#6b6b6b;line-height:1.85;">
          Thank you for joining the iL Progetto family. Your exclusive 10% discount applies to your first order — simply mention this email during your free in-home consultation.
        </p>
        <p style="margin:0 0 32px;font-size:15px;color:#6b6b6b;line-height:1.85;">
          Ready to get started? Book your free consultation and we'll bring our full mobile showroom to your door.
        </p>
        <a href="https://ilprogetto-spa.vercel.app/booking"
           style="display:inline-block;background:${SAND};color:#fff;text-decoration:none;padding:14px 28px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;">
          Book Free Consultation
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

function ownerNotification(email: string): string {
  return `<!DOCTYPE html><html><body style="font-family:Arial,sans-serif;padding:24px;background:${BG};">
<h2 style="font-family:${SERIF};font-weight:300;color:${INK};">New Newsletter Signup</h2>
<p style="color:#6b6b6b;">A new subscriber has signed up for the 10% off offer:</p>
<p style="font-size:16px;color:${INK};"><strong>${email}</strong></p>
<p style="color:#999;font-size:12px;">iL Progetto LLC · Automated notification</p>
</body></html>`
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = process.env.ALLOWED_ORIGIN ?? 'https://ilprogettollc.com'
  res.setHeader('Access-Control-Allow-Origin', origin)
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' })

  const ip = (req.headers['x-forwarded-for