import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/booking/confirmed')({
  head: () => ({
    meta: [
      { title: 'Consultation Confirmed | iL Progetto LLC' },
      { name: 'robots', content: 'noindex' },
    ],
  }),
  component: ConfirmedPage,
})

function formatDisplayDate(dateStr?: string): string {
  if (!dateStr) return ''
  const [y, m, d] = dateStr.split('-').map(Number)
  return new Date(y!, m! - 1, d!).toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
  })
}

function formatDisplayTime(timeStr?: string): string {
  if (!timeStr) return ''
  const [h, m] = timeStr.split(':').map(Number)
  const period = h! >= 12 ? 'PM' : 'AM'
  const hour   = h! > 12 ? h! - 12 : h === 0 ? 12 : h!
  return `${hour}:${String(m).padStart(2, '0')} ${period}`
}

const NEXT_STEPS = [
  {
    num:   '01',
    title: 'Check Your Email',
    body:  'A confirmation email with a calendar invitation (.ics) has been sent to you. Add it to your calendar so you don\'t forget.',
  },
  {
    num:   '02',
    title: 'We\'ll Be in Touch',
    body:  'Our team will call or text to confirm your appointment and answer any questions before we arrive.',
  },
  {
    num:   '03',
    title: 'Prepare for the Visit',
    body:  'Note which windows you want to treat and any thoughts on light control, privacy, or style. The more context you have, the more we can tailor our recommendations.',
  },
  {
    num:   '04',
    title: 'We Arrive, You Decide',
    body:  'Our designer brings the full product line — hundreds of fabric samples, hardware options, and pricing. No obligation to buy anything on the day.',
  },
]

function ConfirmedPage() {
  // Read params from URL directly — avoids routeTree type mismatch before plugin re-run
  const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '')
  const id    = params.get('id')    ?? undefined
  const date  = params.get('date')  ?? undefined
  const time  = params.get('time')  ?? undefined
  const email = params.get('email') ?? undefined
  const name  = params.get('name')  ?? undefined
  const displayDate = formatDisplayDate(date)
  const displayTime = formatDisplayTime(time)

  return (
    <div style={{ background: 'var(--warm)', minHeight: '100vh' }}>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <header
        className="px-4 md:px-10 lg:px-20 py-24 md:py-32 text-center"
        style={{ background: 'var(--ink)' }}
      >
        {/* Animated checkmark */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{ background: 'rgba(197,165,114,0.2)', border: '1px solid var(--sand)' }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
               stroke="var(--sand)" strokeWidth="2" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <p className="text-[11px] tracking-[0.28em] uppercase mb-5"
           style={{ color: 'var(--sand)' }}>
          You're Confirmed
        </p>

        <h1 className="font-[300] leading-[1.04] tracking-[-0.015em] mb-5"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 5vw, 62px)', color: 'var(--cream)' }}>
          {name ? `See you soon, ${name.split(' ')[0]}.` : 'Consultation Confirmed.'}
        </h1>

        {(displayDate || displayTime) && (
          <p className="text-[18px] font-[300] mb-3"
             style={{ color: 'rgba(251,251,249,0.7)', fontFamily: 'var(--serif)' }}>
            {displayDate}{displayDate && displayTime ? ' at ' : ''}{displayTime}
          </p>
        )}

        {email && (
          <p className="text-[14px]" style={{ color: 'rgba(251,251,249,0.45)' }}>
            Confirmation sent to{' '}
            <span style={{ color: 'var(--sand-light)' }}>{email}</span>
          </p>
        )}

        {id && (
          <p className="text-[11px] tracking-[0.14em] uppercase mt-4"
             style={{ color: 'rgba(251,251,249,0.25)' }}>
            Booking ID: {id}
          </p>
        )}
      </header>

      {/* ── What Happens Next ─────────────────────────────────────────── */}
      <section className="px-4 md:px-10 lg:px-20 py-24" aria-label="Next steps">
        <div className="max-w-[860px] mx-auto">
          <p className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
             style={{ color: 'var(--sand)' }}>
            <span className="inline-block w-8 h-px bg-[var(--sand)]" aria-hidden="true" />
            What Happens Next
          </p>
          <h2 className="font-[300] leading-[1.04] tracking-[-0.015em] mb-14"
              style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3.5vw, 44px)' }}>
            Here's what to{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>expect</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--hairline)]">
            {NEXT_STEPS.map(({ num, title, body }) => (
              <div key={num} className="bg-[var(--cream)] p-10 group">
                <span className="block text-[42px] font-[300] leading-none mb-4"
                      style={{ fontFamily: 'var(--serif)', color: 'var(--sand-light)' }}>
                  {num}
                </span>
                <h3 className="text-[18px] font-[400] mb-3"
                    style={{ fontFamily: 'var(--serif)' }}>
                  {title}
                </h3>
                <p className="text-[14px] leading-[1.85]" style={{ color: 'var(--mid)' }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact + Links ───────────────────────────────────────────── */}
      <section className="px-4 md:px-10 lg:px-20 py-16 border-t border-[var(--hairline)]"
               style={{ background: 'var(--warm)' }}>
        <div className="max-w-[860px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[15px] mb-2" style={{ color: 'var(--ink)' }}>
              Need to reschedule or have a question?
            </p>
            <a href="tel:+18583381678"
               className="text-[28px] font-[300] hover:text-[var(--sand)] transition-colors"
               style={{ fontFamily: 'var(--serif)', color: 'var(--ink)' }}>
              (858) 338-1678
            </a>
            <p className="text-[13px] mt-1" style={{ color: 'var(--mid)' }}>
              Call or text — we respond same day.
            </p>
            <a href="mailto:info@progettoshades.com"
               className="block text-[13px] mt-2 hover:text-[var(--sand)] transition-colors"
               style={{ color: 'var(--mid)' }}>
              info@progettoshades.com
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/catalog"
                  className="flex items-center justify-center gap-2 py-4 text-[11px] tracking-[0.18em] uppercase border transition-colors hover:border-[var(--ink)]"
                  style={{ borderColor: 'var(--hairline)', color: 'var(--ink)' }}>
              Browse Our Catalog
            </Link>
            <Link to="/"
                  className="flex items-center justify-center gap-2 py-4 text-[11px] tracking-[0.18em] uppercase border transition-colors hover:border-[var(--ink)]"
                  style={{ borderColor: 'var(--hairline)', color: 'var(--mid)' }}>
              Back to Home
            </Link>
            <Link to="/reviews"
                  className="text-center text-[12px] py-2 transition-colors hover:text-[var(--sand)]"
                  style={{ color: 'var(--mid)' }}>
              ★ Leave us a review
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
