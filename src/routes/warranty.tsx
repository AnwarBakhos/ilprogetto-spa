import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import { setupScrollReveal } from '@/lib/utils'

export const Route = (createFileRoute as any)('/warranty')({
  head: () => ({
    meta: [
      { title: 'Warranty | iL Progetto LLC — Custom Window Treatments San Diego' },
      {
        name: 'description',
        content:
          'iL Progetto LLC warranty information — lifetime hardware warranty, 5-year fabric and motor coverage, and 1-year professional installation guarantee.',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Warranty | iL Progetto LLC' },
      {
        property: 'og:description',
        content: 'Lifetime hardware warranty, 5-year fabric and motor coverage, 1-year installation guarantee.',
      },
      {
        property: 'og:image',
        content: '/images/og-image.jpg',
      },
      { property: 'og:url', content: 'https://www.ilprogettollc.com/warranty' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: 'https://www.ilprogettollc.com/warranty' }],
  }),
  component: WarrantyPage,
})

// ─── Warranty tiers ───────────────────────────────────────────────────────────
const TIERS = [
  {
    duration: 'Lifetime',
    category: 'Operating Mechanisms',
    tagline: 'The structural parts of every treatment are built to last — and we back that with a lifetime commitment.',
    covered: 'All operating hardware, components, tracks, and mechanisms',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    duration: '5-Year',
    category: 'Fabrics & Motorized Components',
    tagline:
      'Premium fabrics and precision motors are covered for five years against manufacturing defects.',
    covered: 'All fabric panels, motorized lift systems, remote controls, and rechargeable motors',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    duration: '1-Year',
    category: 'Professional Installation',
    tagline:
      'If anything related to our installation needs attention in the first year, we return and fix it at no charge.',
    covered: 'All installation workmanship by our licensed team',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
]

const COVERED = [
  'Manufacturing defects in materials or components',
  'Hardware failure under normal operating conditions',
  'Motor malfunction within the covered period',
  'Errors in professional installation workmanship',
]

const NOT_COVERED = [
  'Normal wear and tear over time',
  'Pet damage or accidental physical damage',
  'Water damage or exposure to extreme conditions',
  'Misuse or improper operation',
  'Alterations made by third parties',
  'Color change or fading from prolonged sun exposure',
]

const CLAIM_STEPS = [
  {
    number: '01',
    title: 'Contact Us',
    description: 'Call or text (858) 338-1678 — our team is available to assist you.',
  },
  {
    number: '02',
    title: 'Describe the Issue',
    description: "Tell us what's happening and share your booking ID or installation date.",
  },
  {
    number: '03',
    title: 'We Schedule & Resolve',
    description: 'We arrange a visit at your convenience and resolve the issue at no charge.',
  },
]

// ─── WarrantyPage ─────────────────────────────────────────────────────────────
function WarrantyPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    return setupScrollReveal(ref.current)
  }, [])

  return (
    <div ref={ref}>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="px-10 md:px-20 py-28 md:py-36"
        style={{ background: 'var(--ink)' }}
        aria-label="Warranty overview"
      >
        <p
          className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-6 fade-up"
          style={{ color: 'var(--sand-light)' }}
        >
          <span className="inline-block w-8 h-px bg-[var(--sand-light)]" aria-hidden="true" />
          Peace of Mind
        </p>
        <h1
          className="font-[300] leading-[1.04] tracking-[-0.015em] mb-7 fade-up delay-1"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(42px, 5.5vw, 72px)',
            color: 'var(--cream)',
          }}
        >
          Our Warranty{' '}
          <em className="italic" style={{ color: 'var(--sand-light)' }}>
            Promise
          </em>
        </h1>
        <p
          className="fade-up delay-2 text-[15px] leading-[1.85] max-w-[520px]"
          style={{ color: 'rgba(251,251,249,0.65)' }}
        >
          Every iL Progetto installation is backed by our commitment to quality — from the hardware
          to the installation itself.
        </p>
      </section>

      {/* ── Three warranty tier cards ─────────────────────────────────────── */}
      <section
        aria-labelledby="tiers-heading"
        className="px-10 md:px-20 py-24"
        style={{ background: 'var(--warm)' }}
      >
        <h2 id="tiers-heading" className="sr-only">
          Warranty Tiers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map((tier, i) => (
            <article
              key={tier.duration}
              className={`flex flex-col p-10 border border-[var(--hairline)] fade-up${i > 0 ? ` delay-${i}` : ''}`}
              style={{ background: 'var(--cream)' }}
            >
              {/* Icon */}
              <div
                className="mb-7 w-14 h-14 flex items-center justify-center border border-[var(--hairline)]"
                style={{ color: 'var(--sand)', background: 'var(--sand-pale)' }}
              >
                {tier.icon}
              </div>

              {/* Duration badge */}
              <p
                className="text-[10px] tracking-[0.22em] uppercase mb-2"
                style={{ color: 'var(--sand)' }}
              >
                {tier.duration}
              </p>

              {/* Category */}
              <h3
                className="font-[300] leading-[1.1] mb-5"
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(22px, 2vw, 28px)',
                  color: 'var(--ink)',
                }}
              >
                {tier.category}
              </h3>

              {/* What's covered */}
              <p
                className="text-[12px] tracking-[0.14em] uppercase mb-2"
                style={{ color: 'var(--mid)' }}
              >
                Covered
              </p>
              <p className="text-[14px] leading-[1.7] mb-6" style={{ color: 'var(--mid)' }}>
                {tier.covered}
              </p>

              {/* Divider */}
              <div
                className="h-px mb-6"
                style={{ background: 'var(--hairline)' }}
                aria-hidden="true"
              />

              {/* Tagline */}
              <p
                className="text-[14px] leading-[1.75] font-[300] mt-auto"
                style={{ color: 'var(--ink)', fontStyle: 'italic', fontFamily: 'var(--serif)', fontSize: '16px' }}
              >
                "{tier.tagline}"
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Covered / Not Covered ─────────────────────────────────────────── */}
      <section
        aria-labelledby="coverage-heading"
        className="px-10 md:px-20 py-24"
        style={{ background: 'var(--cream)' }}
      >
        <p
          className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
          style={{ color: 'var(--sand)' }}
        >
          <span className="inline-block w-8 h-px bg-[var(--sand)]" aria-hidden="true" />
          Coverage Details
        </p>
        <h2
          id="coverage-heading"
          className="font-[300] leading-[1.04] tracking-[-0.015em] mb-14 fade-up delay-1"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(30px, 3.5vw, 46px)',
            color: 'var(--ink)',
          }}
        >
          What's{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>
            Included
          </em>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Covered */}
          <div className="fade-up delay-1">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: 'var(--sand)' }}
                aria-hidden="true"
              />
              <h3
                className="text-[11px] tracking-[0.22em] uppercase"
                style={{ color: 'var(--ink)' }}
              >
                Covered by Warranty
              </h3>
            </div>
            <ul className="space-y-4" role="list">
              {COVERED.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 text-[14px] leading-[1.7]"
                  style={{ color: 'var(--mid)' }}
                >
                  <svg
                    className="flex-shrink-0 mt-0.5"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: 'var(--sand)' }}
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not Covered */}
          <div className="fade-up delay-2">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: 'var(--mid)' }}
                aria-hidden="true"
              />
              <h3
                className="text-[11px] tracking-[0.22em] uppercase"
                style={{ color: 'var(--ink)' }}
              >
                Not Covered
              </h3>
            </div>
            <ul className="space-y-4" role="list">
              {NOT_COVERED.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 text-[14px] leading-[1.7]"
                  style={{ color: 'var(--mid)' }}
                >
                  <svg
                    className="flex-shrink-0 mt-0.5"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: 'rgba(112,112,112,0.5)' }}
                    aria-hidden="true"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── How to Make a Claim ───────────────────────────────────────────── */}
      <section
        aria-labelledby="claim-heading"
        className="px-10 md:px-20 py-24"
        style={{ background: 'var(--warm)' }}
      >
        <p
          className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
          style={{ color: 'var(--sand)' }}
        >
          <span className="inline-block w-8 h-px bg-[var(--sand)]" aria-hidden="true" />
          Warranty Claims
        </p>
        <h2
          id="claim-heading"
          className="font-[300] leading-[1.04] tracking-[-0.015em] mb-16 fade-up delay-1"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(30px, 3.5vw, 46px)',
            color: 'var(--ink)',
          }}
        >
          How to Make a{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>
            Claim
          </em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
          {CLAIM_STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`px-10 py-10 border border-[var(--hairline)] fade-up${i > 0 ? ` delay-${i}` : ''}`}
              style={{ background: 'var(--cream)' }}
            >
              <p
                className="font-[300] mb-5"
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '48px',
                  color: 'var(--sand-light)',
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                {step.number}
              </p>
              <h3
                className="font-[400] mb-3"
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '20px',
                  color: 'var(--ink)',
                }}
              >
                {step.title}
              </h3>
              <p className="text-[14px] leading-[1.75]" style={{ color: 'var(--mid)' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="cta-heading"
        className="px-10 md:px-20 py-24 text-center"
        style={{ background: 'var(--ink)' }}
      >
        <p
          className="inline-flex items-center justify-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-6 fade-up"
          style={{ color: 'var(--sand-light)' }}
        >
          <span className="inline-block w-8 h-px bg-[var(--sand-light)]" aria-hidden="true" />
          Get in Touch
        </p>
        <h2
          id="cta-heading"
          className="font-[300] leading-[1.1] tracking-[-0.015em] mb-6 fade-up delay-1"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(30px, 3.5vw, 48px)',
            color: 'var(--cream)',
          }}
        >
          Questions About Your{' '}
          <em className="italic" style={{ color: 'var(--sand-light)' }}>
            Coverage?
          </em>
        </h2>
        <p
          className="text-[15px] leading-[1.85] mb-10 max-w-[420px] mx-auto fade-up delay-2"
          style={{ color: 'rgba(251,251,249,0.6)' }}
        >
          Our team is happy to clarify any warranty question or schedule a service visit.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 fade-up delay-3">
          <a
            href="tel:+18583381678"
            className="text-[14px] transition-colors hover:text-[var(--sand-light)]"
            style={{ color: 'rgba(251,251,249,0.75)' }}
          >
            (858) 338-1678
          </a>
          <span
            className="hidden sm:block w-px h-4"
            style={{ background: 'rgba(251,251,249,0.2)' }}
            aria-hidden="true"
          />
          <a
            href="mailto:info@ilprogettollc.com"
            className="text-[14px] transition-colors hover:text-[var(--sand-light)]"
            style={{ color: 'rgba(251,251,249,0.75)' }}
          >
            info@ilprogettollc.com
          </a>
        </div>

        <div className="fade-up delay-3">
          <Link
            to="/booking"
            className="inline-block px-10 py-4 text-[11px] tracking-[0.2em] uppercase transition-colors hover:bg-[var(--sand)] hover:border-[var(--sand)]"
            style={{
              border: '1px solid rgba(251,251,249,0.3)',
              color: 'var(--cream)',
            }}
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
