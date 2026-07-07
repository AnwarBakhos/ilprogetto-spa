// ─── Google tag (gtag.js) bootstrap ──────────────────────────────────────────
// Self-hosted so it runs under our CSP (script-src 'self') — inline scripts
// are intentionally blocked site-wide. Loaded from index.html right after the
// async gtag.js loader. Google Ads account: AW-16632989382.
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
window.gtag = gtag;
gtag('js', new Date());
gtag('config', 'AW-16632989382');
