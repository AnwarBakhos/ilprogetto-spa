import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader('Content-Type', 'text/plain')
  res.setHeader('Cache-Control', 'public, max-age=86400')
  res.status(200).send(`User-agent: *
Allow: /

# Block admin/internal pages
Disallow: /booking/confirmed

Sitemap: https://ilprogetto-spa.vercel.app/api/sitemap
`)
}
