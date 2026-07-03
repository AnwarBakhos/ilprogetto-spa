// ─── Server-side input sanitization ──────────────────────────────────────────
// Used by /api/* handlers before interpolating user input into email HTML
// or email subject lines. Prevents HTML injection (phishing via owner
// notification emails) and header/subject line injection.

/** Escape HTML special characters for safe interpolation into email HTML. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/** Strip CR/LF (subject/header injection) and trim. */
export function stripNewlines(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim()
}

/** Clamp string length. */
export function clamp(value: string, max: number): string {
  return value.length > max ? value.slice(0, max) : value
}

/** Full cleaning pass for a single-line field (names, subjects, phone, etc.) */
export function cleanField(value: unknown, max = 200): string {
  if (typeof value !== 'string') return ''
  return escapeHtml(clamp(stripNewlines(value), max))
}

/** Cleaning pass for multi-line free text (messages). Preserves newlines. */
export function cleanText(value: unknown, max = 5000): string {
  if (typeof value !== 'string') return ''
  return escapeHtml(clamp(value.trim(), max))
}

/** RFC-5322-lite email validation with sane length cap. */
export function isValidEmail(value: unknown): value is string {
  return (
    typeof value === 'string' &&
    value.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
  )
}
