import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import { setupScrollReveal } from '@/lib/utils'
import { SITE_URL } from '@/lib/config'


export const Route = (createFileRoute as any)('/child-safety')({
  head: () => ({
    meta: [
      { title: 'Child Safety & Cordless Options | iL Progetto LLC San Diego' },
      {
        name: 'description',
        content:
          'iL Progetto LLC offers cordless and motorized window treatments that meet child safety standards. Learn about our safe options for families with young children.',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Child Safety Window Treatments | iL Progetto LLC' },
      {
        property: 'og:description',
        content:
          'Safe, cordless, and motorized window treatments for families. WCMA-compliant options for every room.',
      },
      {
        property: 'og:image',
        content: '/images/og-image.jpg',
      },
      { property: 'og:url', content: `${SITE_URL}/child-safety` },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: `${SITE_URL}/child-safety` }],
  }),
  component: ChildSafetyPage,
})

// ─── Safe options ─────────────────────────────────────────────────────────────
const SAFE_OPTIONS = [
  {
    title: 'Cordless Lift',
    description:
      'No cords at all. Raise and lower with a gentle push or pull on the bottom rail — simple, safe, and intuitive for every member of the household.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: 'Motorized',
    description:
      'Operated by app, remote, or voice command. Zero exposed cords and total control — the safest option for households with young children or pets.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
      </svg>
    ),
  },
  {
    title: 'Continuous Loop Cord',
    description:
      'Where cords are required, we install with proper tensioning devices and cord cleats mounted well out of children\'s reach — fully compliant with current safety standards.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
]

// ─── Safe products ────────────────────────────────────────────────────────────
const SAFE_PRODUCTS = [
  { name: 'Cellular Shades', detail: 'Cordless lift standard' },
  { name: 'Roller Shades', detail: 'Cordless or fully motorized' },
  { name: 'Zebra Shades', detail: 'Cordless lift available' },
  { name: 'Motorized Shading', detail: 'Fully automated, no exposed cords' },
  { name: 'Plantation Shutters', detail: 'Tilt rod only — no cords whatsoever' },
  { name: 'Roman Shades', detail: 'Cordless lift system' },
]

// ─── ChildSafetyPage ──────────────────────────────────────────────────────────
function ChildSafetyPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    return setupScrollReveal(ref.current)
  }, [])

  return (
    <div ref={ref}>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-label="Child safety introduction"
        className="px-4 md:px-10 lg:px-20 py-28 md:py-36"
        style={{ background: 'var(--sand-pale)' }}
      >
        <p
          className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-6 fade-up"
          style={{ color: 'var(--sand)' }}
        >
          <span className="inline-block w-8 h-px bg-[var(--sand)]" aria-hidden="true" />
          Family First
        </p>
        <h1
          className="font-[300] leading-[1.04] tracking-[-0.015em] mb-7 fade-up delay-1"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(42px, 5.5vw, 72px)',
            color: 'var(--ink)',
          }}
        >
          Child-Safe Window{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>
            Treatments
          </em>
        </h1>
        <p
          className="fade-up delay-2 text-[15px] leading-[1.85] max-w-[560px]"
          style={{ color: 'var(--mid)' }}
        >
          Cords on window treatments are a leading cause of home accidents involving young children.
          We offer beautiful, cordless solutions that eliminate the risk entirely — without
          compromising on style or function.
        </p>
      </section>

      {/* ── Safety by design ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="design-heading"
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--warm)' }}
      >
        <p
          className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
          style={{ color: 'var(--sand)' }}
        >
          <span className="inline-block w-8 h-px bg-[var(--sand)]" aria-hidden="true" />
          Safety by Design
        </p>
        <h2
          id="design-heading"
          className="font-[300] leading-[1.04] tracking-[-0.015em] mb-14 fade-up delay-1"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(30px, 3.5vw, 46px)',
            color: 'var(--ink)',
          }}
        >
          Three Ways We{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>
            Protect Your Family
          </em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAFE_OPTIONS.map((option, i) => (
            <div
              key={option.title}
              className={`p-10 border border-[var(--hairline)] fade-up${i > 0 ? ` delay-${i}` : ''}`}
              style={{ background: 'var(--cream)' }}
            >
              <div
                className="mb-6 w-12 h-12 flex items-center justify-center"
                style={{ color: 'var(--sand)', background: 'var(--sand-pale)', border: '1px solid var(--sand-light)' }}
              >
                {option.icon}
              </div>
              <h3
                className="font-[400] mb-4"
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(20px, 1.8vw, 24px)',
                  color: 'var(--ink)',
                }}
              >
                {option.title}
              </h3>
              <p className="text-[14px] leading-[1.8]" style={{ color: 'var(--mid)' }}>
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WCMA Compliance ──────────────────────────────────────────────── */}
      <section
        aria-labelledby="wcma-heading"
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--cream)' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
              style={{ color: 'var(--sand)' }}
            >
              <span className="inline-block w-8 h-px bg-[var(--sand)]" aria-hidden="true" />
              Standards &amp; Compliance
            </p>
            <h2
              id="wcma-heading"
              className="font-[300] leading-[1.04] tracking-[-0.015em] mb-7 fade-up delay-1"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(28px, 3vw, 42px)',
                color: 'var(--ink)',
              }}
            >
              WCMA{' '}
              <em className="italic" style={{ color: 'var(--sand)' }}>
                Compliant
              </em>
            </h2>
            <p
              className="text-[15px] leading-[1.85] mb-6 fade-up delay-2"
              style={{ color: 'var(--mid)' }}
            >
              The Window Coverings Manufacturers Association (WCMA) sets the national standard for
              safe window covering design in the United States. Products that meet their rigorous
              testing criteria earn the{' '}
              <strong style={{ color: 'var(--ink)' }}>"Best for Kids"</strong> designation.
            </p>
            <p
              className="text-[15px] leading-[1.85] fade-up delay-2"
              style={{ color: 'var(--mid)' }}
            >
              All iL Progetto installations comply with current California safety codes and WCMA
              guidelines. When you choose us, you're choosing products vetted for families.
            </p>
          </div>

          {/* Compliance highlights */}
          <div className="space-y-4 fade-up delay-3">
            {[
              { label: 'WCMA Standards', value: 'Full compliance on all installations' },
              { label: '"Best for Kids" Designation', value: 'Available on qualifying product lines' },
              { label: 'California Safety Code', value: 'All work performed to current codes' },
              { label: 'Cord Tensioning Devices', value: 'Installed on every corded treatment' },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex items-start gap-5 px-6 py-5 border border-[var(--hairline)]"
                style={{ background: 'var(--warm)' }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                  style={{ background: 'var(--sand)' }}
                  aria-hidden="true"
                />
                <div>
                  <p
                    className="text-[10px] tracking-[0.18em] uppercase mb-1"
                    style={{ color: 'var(--mid)' }}
                  >
                    {label}
                  </p>
                  <p className="text-[14px]" style={{ color: 'var(--ink)' }}>
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safe products grid ────────────────────────────────────────────── */}
      <section
        aria-labelledby="products-heading"
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--warm)' }}
      >
        <p
          className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
          style={{ color: 'var(--sand)' }}
        >
          <span className="inline-block w-8 h-px bg-[var(--sand)]" aria-hidden="true" />
          Our Safe Products
        </p>
        <h2
          id="products-heading"
          className="font-[300] leading-[1.04] tracking-[-0.015em] mb-14 fade-up delay-1"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(30px, 3.5vw, 46px)',
            color: 'var(--ink)',
          }}
        >
          Available Cordless &amp;{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>
            Motorized
          </em>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 fade-up delay-2">
          {SAFE_PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="px-8 py-8 border border-[var(--hairline)]"
              style={{ background: 'var(--cream)' }}
            >
              <div className="flex items-center gap-3.5 mb-3">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: 'var(--sand)' }}
                  aria-hidden="true"
                />
                <h3
                  className="font-[400]"
                  style={{ fontFamily: 'var(--serif)', fontSize: '19px', color: 'var(--ink)' }}
                >
                  {product.name}
                </h3>
              </div>
              <p
                className="text-[12px] tracking-[0.1em] uppercase ml-5"
                style={{ color: 'var(--mid)' }}
              >
                {product.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="cta-heading"
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--sand-pale)' }}
      >
        <div className="max-w-[620px]">
          <p
            className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-[var(--sand)]" aria-hidden="true" />
            Book a Consultation
          </p>
          <h2
            id="cta-heading"
            className="font-[300] leading-[1.1] tracking-[-0.015em] mb-6 fade-up delay-1"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              color: 'var(--ink)',
            }}
          >
            Ask About Child-Safe Options{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              During Your Free Consultation
            </em>
          </h2>
          <p
            className="text-[15px] leading-[1.85] mb-10 fade-up delay-2"
            style={{ color: 'var(--mid)' }}
          >
            Our designer will walk you through every cordless and motorized option in person —
            with samples, pricing, and honest recommendations tailored to your home and family.
          </p>
          <div className="fade-up delay-3">
            <Link
              to="/booking"
              className="inline-block px-10 py-4 text-[11px] tracking-[0.2em] uppercase transition-colors hover:bg-[var(--sand)] hover:border-[var(--sand)] hover:text-[var(--cream)]"
              style={{
                border: '1px solid var(--ink)',
                color: 'var(--ink)',
              }}
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
