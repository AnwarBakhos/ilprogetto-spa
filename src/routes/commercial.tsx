import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import { setupScrollReveal } from '@/lib/utils'
import { SITE_URL } from '@/lib/config'


export const Route = (createFileRoute as any)('/commercial')({
  head: () => ({
    meta: [
      { title: 'Commercial Window Treatments San Diego | Builder & Trade Program — iL Progetto LLC' },
      {
        name: 'description',
        content:
          'iL Progetto LLC offers custom window treatments for commercial spaces, builders, interior designers, and property managers across San Diego. Volume pricing, fast turnaround, professional installation.',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Commercial Window Treatments San Diego | Builder & Trade Program — iL Progetto LLC' },
      {
        property: 'og:description',
        content:
          'iL Progetto LLC offers custom window treatments for commercial spaces, builders, interior designers, and property managers across San Diego. Volume pricing, fast turnaround, professional installation.',
      },
      { property: 'og:url', content: `${SITE_URL}/commercial` },
      { property: 'og:image', content: `${SITE_URL}/images/og-image.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `${SITE_URL}/images/og-image.jpg` },
      { name: 'twitter:title', content: 'Commercial Window Treatments San Diego | Builder & Trade Program — iL Progetto LLC' },
      {
        name: 'twitter:description',
        content:
          'iL Progetto LLC offers custom window treatments for commercial spaces, builders, interior designers, and property managers across San Diego. Volume pricing, fast turnaround, professional installation.',
      },
    ],
    links: [
      { rel: 'canonical', href: `${SITE_URL}/commercial` },
    ],
  }),
  component: CommercialPage,
})

// ─── Data ─────────────────────────────────────────────────────────────────────
const WHO_WE_SERVE = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="1" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: 'Builders & Developers',
    body: 'New construction and model home window treatments. We work from blueprints, coordinate with your project timeline, and install across multiple units — on schedule, every time.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="5" />
        <path d="M3 21c0-4.418 4.03-8 9-8s9 3.582 9 8" />
      </svg>
    ),
    title: 'Interior Designers',
    body: 'Trade pricing, samples on request, and a dedicated point of contact. We handle all measurements and installation so you can focus on design and deliver a flawless result for your clients.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Property Managers',
    body: 'Rental property and HOA window treatment refresh programs. Volume pricing, rapid turnaround, and consistent quality across all units — from single buildings to entire portfolios.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Commercial Spaces',
    body: 'Offices, medical facilities, retail, and hospitality. Light control solutions for every commercial application — from glare reduction to complete blackout, motorized or manual.',
  },
]

const WHY_US = [
  { text: 'Licensed California Contractor #1127055' },
  { text: 'All installers are direct employees, never subcontracted' },
  { text: 'Volume pricing available for 5+ units' },
  { text: 'Consistent specifications across entire projects' },
  { text: 'Single point of accountability from design to installation' },
]

const PROCESS = [
  {
    num: '01',
    title: 'Project Consultation',
    body: 'We review your scope, timeline, and specifications. Whether you have blueprints or finished spaces, we adapt our process to your workflow.',
  },
  {
    num: '02',
    title: 'Specification & Quote',
    body: 'Detailed product specs and per-unit pricing delivered within 48 hours. Clear, itemized quotes — no surprises at installation.',
  },
  {
    num: '03',
    title: 'Coordinated Installation',
    body: 'We work around your construction or occupancy schedule. Our team handles every detail from first bracket to final program.',
  },
]

// ─── CommercialPage ───────────────────────────────────────────────────────────
function CommercialPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    return setupScrollReveal(ref.current)
  }, [])


  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Commercial Window Treatments San Diego',
    'provider': { '@id': `${SITE_URL}/#organization` },
    'serviceType': 'Commercial Window Treatment Installation',
    'areaServed': { '@type': 'AdministrativeArea', 'name': 'San Diego County' },
    'description': 'Custom window treatments for commercial spaces, builders, interior designers, and property managers across San Diego County.',
    'url': `${SITE_URL}/commercial`,
    'offers': { '@type': 'Offer', 'priceSpecification': { '@type': 'PriceSpecification', 'priceCurrency': 'USD', 'description': 'Volume pricing available for builders and trade professionals' } },
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div ref={ref}>

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <header
        className="relative flex flex-col justify-end overflow-hidden"
        style={{
          background: 'var(--ink)',
          minHeight: '70vh',
          paddingTop: '76px',
        }}
        aria-label="Commercial window treatments hero"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 px-4 md:px-10 lg:px-20 pb-20 md:pb-28 max-w-[860px]">
          <p
            className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-8 fade-up"
            style={{ color: 'var(--sand-light)' }}
          >
            <span className="inline-block w-9 h-px bg-current" aria-hidden="true" />
            Builder &amp; Trade
          </p>

          <h1
            className="font-[300] leading-[1.02] tracking-[-0.02em] mb-8 fade-up delay-1"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(46px, 6.5vw, 88px)',
              color: 'var(--cream)',
            }}
          >
            Commercial{' '}
            <em className="italic" style={{ color: 'var(--sand-light)' }}>
              Window Treatments
            </em>
          </h1>

          <p
            className="text-[17px] leading-[1.85] max-w-[600px] fade-up delay-2"
            style={{ color: 'rgba(251,251,249,0.72)' }}
          >
            From single offices to full residential developments — we handle the full scope.
            Measure, specify, manufacture, install.
          </p>
        </div>
      </header>

      {/* ══ WHO WE SERVE ══════════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-28"
        style={{ background: 'var(--cream)' }}
        aria-labelledby="serve-heading"
      >
        <div className="mb-16">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Who We Serve
          </p>
          <h2
            id="serve-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em] fade-up delay-1"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(32px, 3.8vw, 52px)',
            }}
          >
            Built for{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Every Trade
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--hairline)]">
          {WHO_WE_SERVE.map(({ icon, title, body }, i) => (
            <div
              key={title}
              className="bg-[var(--cream)] p-12 fade-up group hover:bg-[var(--warm)] transition-colors"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-8"
                style={{
                  border: '0.5px solid var(--sand-light)',
                  color: 'var(--sand)',
                }}
              >
                {icon}
              </div>
              <h3
                className="text-[22px] font-[400] mb-4 leading-[1.2]"
                style={{ fontFamily: 'var(--serif)' }}
              >
                {title}
              </h3>
              <p className="text-[15px] leading-[1.9]" style={{ color: 'var(--mid)' }}>
                {body}
              </p>
              <div
                className="h-px mt-8 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: 'var(--sand)' }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ══ WHY IL PROGETTO ═══════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-28"
        style={{ background: 'var(--warm)' }}
        aria-labelledby="why-heading"
      >
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-20 items-start">
          <div>
            <p
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
              style={{ color: 'var(--sand)' }}
            >
              <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
              Why iL Progetto
            </p>
            <h2
              id="why-heading"
              className="font-[300] leading-[1.06] tracking-[-0.015em] fade-up delay-1"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(32px, 3.5vw, 48px)',
              }}
            >
              One Point of{' '}
              <em className="italic" style={{ color: 'var(--sand)' }}>
                Accountability
              </em>
            </h2>
          </div>

          <ul className="space-y-0 fade-up delay-2">
            {WHY_US.map(({ text }, i) => (
              <li
                key={text}
                className="flex items-start gap-5 py-5 border-b"
                style={{
                  borderColor: 'var(--hairline)',
                  transitionDelay: `${i * 0.06}s`,
                }}
              >
                <span
                  className="mt-1 w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full"
                  style={{ background: 'var(--sand-pale)', color: 'var(--sand)' }}
                  aria-hidden="true"
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <p className="text-[15px] leading-[1.75]" style={{ color: 'var(--ink)' }}>
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══ PROCESS ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-28"
        style={{ background: 'var(--cream)' }}
        aria-labelledby="process-heading"
      >
        <div className="mb-16">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            How It Works
          </p>
          <h2
            id="process-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em] fade-up delay-1"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(32px, 3.8vw, 52px)',
            }}
          >
            Simple,{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Accountable Process
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--hairline)]">
          {PROCESS.map(({ num, title, body }, i) => (
            <div
              key={num}
              className="bg-[var(--cream)] p-12 fade-up group hover:bg-[var(--warm)] transition-colors"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <span
                className="block text-[56px] font-[300] leading-none mb-6"
                style={{ fontFamily: 'var(--serif)', color: 'var(--sand-light)' }}
              >
                {num}
              </span>
              <h3
                className="text-[20px] font-[400] mb-4 leading-[1.2]"
                style={{ fontFamily: 'var(--serif)' }}
              >
                {title}
              </h3>
              <p className="text-[14px] leading-[1.9]" style={{ color: 'var(--mid)' }}>
                {body}
              </p>
              <div
                className="h-px mt-8 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: 'var(--sand)' }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-28"
        style={{ background: 'var(--ink)' }}
        aria-label="Start a commercial project"
      >
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-8 fade-up"
              style={{ color: 'var(--sand-light)' }}
            >
              <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
              Start a Commercial Project
            </p>
            <h2
              className="font-[300] leading-[1.06] tracking-[-0.015em] mb-6 fade-up delay-1"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(32px, 3.8vw, 52px)',
                color: 'var(--cream)',
              }}
            >
              Let's Talk About{' '}
              <em className="italic" style={{ color: 'var(--sand-light)' }}>
                Your Project
              </em>
            </h2>
            <p
              className="text-[16px] leading-[1.85] mb-12 fade-up delay-2"
              style={{ color: 'rgba(251,251,249,0.72)' }}
            >
              Call (858) 338-1678 or email info@progettoshades.com to discuss your project. We respond
              the same business day.
            </p>
            <div className="flex flex-wrap gap-4 fade-up delay-3">
              <a
                href="tel:+18583381678"
                className="inline-flex items-center gap-2.5 px-9 py-4 text-[11px] tracking-[0.2em] uppercase btn-interactive"
                style={{ background: 'var(--sand)', color: 'var(--cream)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.26 11.9a19.79 19.79 0 01-3.07-8.67A2 2 0 013.17 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.92 16z" />
                </svg>
                Call Now
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-9 py-4 text-[11px] tracking-[0.2em] uppercase border transition-colors hover:border-[var(--cream)]"
                style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'var(--cream)' }}
              >
                Send Project Details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Contact card */}
          <div
            className="fade-up delay-2 p-10 border"
            style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)' }}
          >
            <p
              className="text-[10px] tracking-[0.22em] uppercase mb-8"
              style={{ color: 'var(--sand-light)' }}
            >
              Contact Details
            </p>
            {[
              { label: 'Phone', value: '(858) 338-1678', href: 'tel:+18583381678' },
              { label: 'Email', value: 'info@progettoshades.com', href: 'mailto:info@progettoshades.com' },
              { label: 'License', value: 'California Contractors License #1127055', href: undefined },
              { label: 'Service Area', value: 'San Diego, Riverside, Orange & San Bernardino Counties', href: undefined },
              { label: 'Volume Pricing', value: 'Available for 5+ unit projects', href: undefined },
            ].map(({ label, value, href }) => (
              <div
                key={label}
                className="flex flex-col py-5 border-b last:border-0"
                style={{ borderColor: 'rgba(255,255,255,0.06)' }}
              >
                <span
                  className="text-[10px] tracking-[0.18em] uppercase mb-1.5"
                  style={{ color: 'rgba(251,251,249,0.4)' }}
                >
                  {label}
                </span>
                {href ? (
                  <a
                    href={href}
                    className="text-[15px] transition-colors hover:text-[var(--sand-light)]"
                    style={{ color: 'var(--cream)' }}
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-[15px]" style={{ color: 'var(--cream)' }}>
                    {value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
