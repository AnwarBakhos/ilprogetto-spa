import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import { setupScrollReveal } from '@/lib/utils'
import { SITE_URL } from '@/lib/config'


export const Route = (createFileRoute as any)('/warranty')({
  head: () => ({
    meta: [
      { title: 'Warranty | iL Progetto LLC — Custom Window Treatments San Diego' },
      {
        name: 'description',
        content:
          'iL Progetto LLC warranty information — 1-year full parts and labor coverage, lifetime manufacturer warranty on internal mechanisms, and 3-year manufacturer warranty on motorization components.',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Warranty | iL Progetto LLC' },
      {
        property: 'og:description',
        content: '1-year full parts and labor coverage, lifetime manufacturer warranty on mechanisms and brackets, 3-year manufacturer warranty on motorization.',
      },
      {
        property: 'og:image',
        content: '/images/og-image.jpg',
      },
      { property: 'og:url', content: `${SITE_URL}/warranty` },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: `${SITE_URL}/warranty` }],
  }),
  component: WarrantyPage,
})

// ─── Warranty tiers ───────────────────────────────────────────────────────────
const TIERS = [
  {
    category: 'Operational Cords, Chains & Motorization',
    description: 'All operational cords, chains, and motorization components — including motors, remotes, and rechargeable systems.',
    tagline: 'From manual lift cords to precision-engineered motors, every operational component is fully backed.',
    ilProgetto: '1 Year — Parts & Labor',
    manufacturer: '3 Years — Parts Only',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
  },
  {
    category: 'Internal Mechanisms & Brackets',
    description: 'All internal hardware, operating mechanisms, mounting brackets, and structural components — for the life of the product.',
    tagline: 'The foundation of every installation. Our manufacturer stands behind the hardware indefinitely.',
    ilProgetto: '1 Year — Parts & Labor',
    manufacturer: 'Lifetime — Parts Only',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    category: 'Fabric',
    description: 'All fabric panels and material components against manufacturing defects.',
    tagline: 'Every panel is quality-inspected before installation — and covered if a defect ever surfaces.',
    ilProgetto: '1 Year — Parts & Labor',
    manufacturer: '1 Year — Parts Only',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
      </svg>
    ),
  },
]

const COVERED = [
  'Manufacturing defects in materials, components, or workmanship',
  'Mechanism and hardware failure under normal operating conditions',
  'Motorization component malfunction within the covered period',
  'All parts and labor for iL Progetto warranty service within the first year from installation',
]

const NOT_COVERED = [
  'Normal wear and tear over time, including fraying and stretching',
  'Damage resulting from abuse, misuse, accidents, or relocation of the product',
  'Exposure to the elements — sun, wind, water, or moisture — and any discoloration or fading that results',
  'Natural variation in material color, dye lots, grain, or texture, and imperfections inherent to natural materials (such as slight bowing of wood products)',
  'Failure to follow our care, cleaning, or maintenance instructions',
  'Routine maintenance for motorized systems and accessories, including recharging and replacement of batteries',
  'Alterations or modifications made by third parties',
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
        className="px-4 md:px-10 lg:px-20 py-28 md:py-36"
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
          Every iL Progetto installation is backed by a full first-year parts and labor warranty, with extended manufacturer coverage on mechanisms, motorization, and fabric beyond that.
        </p>
      </section>

      {/* ── Three warranty tier cards ─────────────────────────────────────── */}
      <section
        aria-labelledby="tiers-heading"
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--warm)' }}
      >
        <h2 id="tiers-heading" className="sr-only">
          Warranty Tiers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map((tier, i) => (
            <article
              key={tier.category}
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

              {/* Category */}
              <h3
                className="font-[300] leading-[1.1] mb-3"
                style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(18px, 1.8vw, 24px)', color: 'var(--ink)' }}
              >
                {tier.category}
              </h3>

              {/* Description */}
              <p className="text-[13px] leading-[1.7] mb-6" style={{ color: 'var(--mid)' }}>
                {tier.description}
              </p>

              {/* iL Progetto warranty */}
              <div className="mb-4">
                <p className="text-[10px] tracking-[0.18em] uppercase mb-1" style={{ color: 'var(--sand)' }}>
                  iL Progetto Warranty
                </p>
                <p className="text-[14px] font-[500] leading-[1.5]" style={{ color: 'var(--ink)' }}>
                  {tier.ilProgetto}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px mb-4" style={{ background: 'var(--hairline)' }} aria-hidden="true" />

              {/* Manufacturer warranty */}
              <div className="mb-6">
                <p className="text-[10px] tracking-[0.18em] uppercase mb-1" style={{ color: 'var(--mid)' }}>
                  Manufacturer Warranty
                </p>
                <p className="text-[14px] leading-[1.5]" style={{ color: 'var(--mid)' }}>
                  {tier.manufacturer}
                </p>
              </div>

              {/* Tagline */}
              <p
                className="text-[14px] leading-[1.75] font-[300] mt-auto"
                style={{ color: 'var(--ink)', fontStyle: 'italic', fontFamily: 'var(--serif)', fontSize: '15px' }}
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
        className="px-4 md:px-10 lg:px-20 py-24"
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

      {/* ── Matching & Repaired Items ─────────────────────────────────────── */}
      <section
        aria-labelledby="matching-heading"
        className="px-4 md:px-10 lg:px-20 py-20"
        style={{ background: 'var(--warm)' }}
      >
        <div className="max-w-[760px]">
          <p
            className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-[var(--sand)]" aria-hidden="true" />
            Repairs & Replacements
          </p>
          <h2
            id="matching-heading"
            className="font-[300] leading-[1.04] tracking-[-0.015em] mb-8 fade-up delay-1"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(26px, 3vw, 38px)',
              color: 'var(--ink)',
            }}
          >
            Matching &{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Repaired Items
            </em>
          </h2>
          <div className="space-y-5 fade-up delay-2">
            {[
              'Because every product is custom-made to your specification, we will do our best to match the original as closely as possible when a replacement is needed — however, an exact match cannot be guaranteed due to the nature of custom manufacturing.',
              'All repairs and replacements are completed using like or similar components and materials.',
              'When multiple products are installed in the same room, only the defective item will be repaired or replaced under this warranty.',
              'Replaced or repaired products carry warranty coverage for the remainder of the original Limited Warranty period, or 30 days from the date of repair — whichever is longer.',
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-start gap-4 text-[14px] leading-[1.8]"
                style={{ color: 'var(--mid)' }}
              >
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: 'var(--sand)' }}
                  aria-hidden="true"
                />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── General policy note ──────────────────────────────────────────── */}
      <section className="px-4 md:px-10 lg:px-20 pb-16" style={{ background: 'var(--warm)' }}>
        <div
          className="px-8 py-6 fade-up"
          style={{ background: 'var(--ink)', borderLeft: '3px solid var(--sand)' }}
        >
          <p className="text-[14px] leading-[1.85]" style={{ color: 'rgba(251,251,249,0.8)' }}>
            iL Progetto LLC will repair or replace, at no charge, any part of your window coverings found to have a manufacturer's defect in labor, materials, or workmanship within <strong style={{ color: 'var(--sand-light)', fontWeight: 500 }}>1 year from your original installation date</strong>. After the first year, a minimum service charge of $400 applies for any in-home visit.
          </p>
        </div>
      </section>

      {/* ── How to Make a Claim ───────────────────────────────────────────── */}
      <section
        aria-labelledby="claim-heading"
        className="px-4 md:px-10 lg:px-20 py-24"
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
        className="px-4 md:px-10 lg:px-20 py-24 text-center"
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
