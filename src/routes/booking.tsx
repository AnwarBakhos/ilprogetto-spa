import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { BookingCalendar } from '@/components/BookingCalendar'
import { SITE_URL } from '@/lib/config'


// SEO: Static HTML form — Googlebot sees all field labels and CTA text.
// The scheduling logic is client-side; the form itself is fully crawlable.

const bookingSearch = z.object({
  service: z.string().optional(),
})

export const Route = createFileRoute('/booking')({
  validateSearch: bookingSearch,
  head: () => ({
    meta: [
      { title: 'Book a Free Window Treatment Consultation San Diego | iL Progetto LLC' },
      {
        name: 'description',
        content:
          'Book a free in-home window treatment consultation in San Diego. iL Progetto LLC brings fabric samples, measuring tools, and pricing to your door — Poway, La Jolla, Carlsbad, Del Mar, Chula Vista, and all of San Diego County. No obligation.',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Book a Free Window Treatment Consultation San Diego | iL Progetto LLC' },
      { property: 'og:description', content: 'Book a free in-home window treatment consultation in San Diego. iL Progetto LLC brings fabric samples, measuring tools, and pricing to your door — Poway, La Jolla, Carlsbad, Del Mar, Chula Vista, and all of San Diego County. No obligation.' },
      { property: 'og:url', content: `${SITE_URL}/booking` },
      { property: 'og:image', content: `${SITE_URL}/images/og-image.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `${SITE_URL}/images/og-image.jpg` },
      { name: 'twitter:title', content: 'Book a Free Window Treatment Consultation San Diego | iL Progetto LLC' },
      { name: 'twitter:description', content: 'Book a free in-home window treatment consultation in San Diego. iL Progetto LLC brings fabric samples, measuring tools, and pricing to your door — Poway, La Jolla, Carlsbad, Del Mar, Chula Vista, and all of San Diego County. No obligation.' },
    ],
    links: [
      { rel: 'canonical', href: `${SITE_URL}/booking` },
    ],
  }),
  component: BookingPage,
})

function BookingPage() {
  const { service } = Route.useSearch()

  return (
    <div>
      {/* ── Page header ─────────────────────────────────────────────────── */}
      <header
        className="px-4 md:px-10 lg:px-20 py-20 md:py-28"
        style={{ background: 'var(--warm)' }}
        aria-label="Book a consultation"
      >
        <div className="max-w-[680px]">
          <p
            className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-5"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            No Obligation · Free · At Your Home
          </p>
          <h1
            className="font-[300] leading-[1.04] tracking-[-0.015em] mb-6"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 5vw, 66px)' }}
          >
            Book Your Free{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              In-Home Consultation
            </em>
          </h1>
          <p className="text-[16px] leading-[1.85]" style={{ color: 'var(--mid)' }}>
            Choose a date and time below. Our designer arrives at your door with the complete product
            line — fabric samples, hardware, measuring tools, and pricing — so you can make a fully
            informed decision in your own space.
          </p>
        </div>
      </header>

      {/* ── Mobile trust strip ───────────────────────────────────────────── */}
      <div
        className="lg:hidden flex overflow-x-auto gap-0 border-b"
        style={{ background: 'var(--warm)', borderColor: 'var(--hairline)' }}
        aria-label="What to expect"
      >
        {[
          { icon: '✓', label: 'Free', sub: 'No obligation' },
          { icon: '🏠', label: 'At Your Home', sub: 'We come to you' },
          { icon: '📐', label: 'Same-Day Quote', sub: 'Priced on the spot' },
          { icon: '⏱', label: '60–90 Min', sub: 'Full consultation' },
        ].map(({ icon, label, sub }) => (
          <div
            key={label}
            className="flex-shrink-0 flex flex-col items-center justify-center px-5 py-4 border-r text-center"
            style={{ borderColor: 'var(--hairline)', minWidth: '100px' }}
          >
            <span className="text-[18px] mb-1" aria-hidden="true">{icon}</span>
            <p className="text-[11px] font-[500] tracking-[0.05em]" style={{ color: 'var(--ink)' }}>{label}</p>
            <p className="text-[10px]" style={{ color: 'var(--mid)' }}>{sub}</p>
          </div>
        ))}
      </div>

      {/* ── Two-column layout ────────────────────────────────────────────── */}
      <section
        className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-0"
        aria-label="Booking form"
      >
        {/* ── Calendar ──────────────────────────────────────────────────── */}
        <div className="px-4 md:px-10 lg:px-20 py-16" style={{ background: '#fff' }}>
          <BookingCalendar preselectedService={service} />
        </div>

        {/* ── Sidebar ───────────────────────────────────────────────────── */}
        <aside
          className="px-8 py-16 sticky top-[var(--nav-h)] self-start hidden lg:block"
          style={{ background: 'var(--warm)', borderLeft: '1px solid var(--hairline)' }}
          aria-label="Consultation details"
        >
          {/* What to expect */}
          <p
            className="text-[10px] tracking-[0.22em] uppercase mb-5"
            style={{ color: 'var(--sand)' }}
          >
            What to Expect
          </p>
          <ul className="space-y-5 mb-10">
            {[
              {
                icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
                title: 'Zero Obligation',
                body: 'The consultation is entirely free. No purchase necessary.',
              },
              {
                icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z',
                title: 'We Come to You',
                body: 'Our designer visits your home with the complete collection — fabric samples, hardware options, and measuring tools — so every decision is made in your actual space.',
              },
              {
                icon: 'M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z',
                title: 'Quote on the Spot',
                body: 'We measure your windows and provide detailed pricing at the appointment.',
              },
              {
                icon: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
                title: '60–90 Minutes',
                body: 'Full-home consultations typically take one to one-and-a-half hours.',
              },
            ].map(({ icon, title, body }) => (
              <li key={title} className="flex gap-3.5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ border: '1px solid var(--sand-light)', color: 'var(--sand)' }}
                  aria-hidden="true"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d={icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-[400] mb-0.5" style={{ color: 'var(--ink)' }}>{title}</p>
                  <p className="text-[13px] leading-[1.65]" style={{ color: 'var(--mid)' }}>{body}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="px-4 py-4 border" style={{ borderColor: 'var(--hairline)', background: 'var(--cream)' }}>
            <p className="text-[11px] tracking-[0.12em] uppercase mb-2" style={{ color: 'var(--mid)' }}>Prefer to call?</p>
            <a href="tel:+18583381678" className="text-[20px] font-[300] hover:text-[var(--sand)] transition-colors" style={{ fontFamily: 'var(--serif)', color: 'var(--ink)' }}>
              (858) 338-1678
            </a>
            <p className="text-[12px] mt-1" style={{ color: 'var(--mid)' }}>Call or text — we respond same day.</p>
          </div>
        </aside>
      </section>
    </div>
  )
}
