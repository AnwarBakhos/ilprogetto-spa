// ─── Google Ads conversion tracking ──────────────────────────────────────────
// The base Google tag (AW-16632989382) is loaded in index.html + gtag-init.js.
// These helpers fire the conversion events at the moment a conversion actually
// happens (form success, financing click) — the right pattern for an SPA,
// where "paste on the page" snippets would fire on every route render.
//
// Conversion labels (from Google Ads):
//   Contact:           AW-16632989382/lNByCNiHkcAZEMaNnfs9
//   Financing inquiry: AW-16632989382/e-gNCIX_gsoZEMaNnfs9
//   Lead form submit:  conversion_event_submit_lead_form (enhanced conversion event)

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function fire(...args: unknown[]): void {
  try {
    window.gtag?.(...args)
  } catch {
    /* analytics must never break the UI */
  }
}

/** Contact / quote form successfully submitted. */
export function trackContactConversion(): void {
  fire('event', 'conversion', { send_to: 'AW-16632989382/lNByCNiHkcAZEMaNnfs9' })
  trackLeadFormSubmit()
}

/** Any lead form submitted (booking, catalog enquiry, contact). */
export function trackLeadFormSubmit(): void {
  fire('event', 'conversion_event_submit_lead_form', {})
}

/** Financing inquiry (Synchrony application click / financing lead). */
export function trackFinancingInquiry(): void {
  fire('event', 'conversion', { send_to: 'AW-16632989382/e-gNCIX_gsoZEMaNnfs9' })
}
