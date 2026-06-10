/**
 * ─── Site Configuration ────────────────────────────────────────────────────
 * All canonical URLs, schema.org hrefs, OG tags, sitemaps, and canonicals
 * pull from this single constant.
 *
 * To switch domains:
 *   1. Set VITE_SITE_URL in your .env / hosting environment variables
 *   2. Redeploy — every URL in the codebase updates automatically
 *
 * Example .env:
 *   VITE_SITE_URL=https://www.yournewdomain.com
 */
export const SITE_URL: string =
  (import.meta.env?.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') ??
  'https://www.ilprogettollc.com'

/** Convenience: build an absolute URL from a path */
export function siteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export const BUSINESS_NAME = 'iL Progetto LLC'
export const BUSINESS_PHONE = '+18583381678'
export const BUSINESS_PHONE_DISPLAY = '(858) 338-1678'
export const BUSINESS_EMAIL = 'info@progettoshades.com'
export const BUSINESS_LICENSE = 'California Contractors License #1127055'
export const BUSINESS_ADDRESS = {
  streetAddress: '',
  addressLocality: 'San Diego',
  addressRegion: 'CA',
  postalCode: '92127',
  addressCountry: 'US',
}
export const BUSINESS_GEO = { latitude: '32.9595', longitude: '-117.0865' }
export const BUSINESS_SOCIAL = [
  'https://www.instagram.com/ilprogetto.design',
  'https://www.facebook.com/61561253288372',
  'https://yelp.to/fuCV4NqXEu',
]
