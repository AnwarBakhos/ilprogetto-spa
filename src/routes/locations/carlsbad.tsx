import { createFileRoute, Link } from '@tanstack/react-router'

// ─── Route ─────────────────────────────────────────────────────────────────────
export const Route = (createFileRoute as any)('/locations/carlsbad')({
  head: () => ({
    meta: [
      { title: 'Custom Window Treatments Carlsbad CA — HOA-Approved | iL Progetto LLC' },
      {
        name: 'description',
        content:
          'HOA-compliant custom window treatments for Carlsbad — Bressi Ranch, La Costa, Aviara. Salt-air resistant hardware. Free in-home consultation.',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: 'Custom Window Treatments Carlsbad CA — HOA-Approved | iL Progetto LLC',
      },
      {
        property: 'og:description',
        content:
          'HOA-compliant custom window treatments for Carlsbad — Bressi Ranch, La Costa, Aviara. Salt-air resistant hardware. Free in-home consultation.',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: 'https://www.ilprogettollc.com/locations/carlsbad' }],
  }),
  component: CarlsbadPage,
})

// ─── Data ──────────────────────────────────────────────────────────────────────
const HOA_CHECKLIST = [
  {
    check: 'Neutral exterior colors available',
    detail:
      'Our entire collection includes HOA-approved neutral tones — white, linen, warm grey, and natural wood stains — that satisfy most Carlsbad community guidelines without a special-order wait.',
  },
  {
    check: 'Low-profile mounting options',
    detail:
      'Inside-mount installations keep window treatments flush with the frame, maintaining the clean architectural lines required by Bressi Ranch, Aviara, and La Costa HOAs.',
  },
  {
    check: 'Salt-air resistant hardware',
    detail:
      'All hardware used within three miles of the coast is stainless or coated aluminum — rated for marine environments and backed by our five-year hardware warranty.',
  },
]

const PRODUCTS = [
  { name: 'Plantation Shutters', img: '/images/products/Plantation Shutters.png' },
  { name: 'Roller Shades',       img: '/images/products/Roller Shades.png' },
  { name: 'Cellular Shades',     img: '/images/products/Cellular Shades.png' },
  { name: 'Woven Wood Shades',   img: '/images/products/Woven Wood Shades.jpg' },
  { name: 'Roman Shades',        img: '/images/products/Roman Shades.jpg' },
  { name: 'Zebra Shades',        img: '/images/products/Zebra Shades.png' },
]

// ─── Page ──────────────────────────────────────────────────────────────────────
function CarlsbadPage() {
  return (
    <div>

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <header
        className="relative flex flex-col justify-end overflow-hidden"
        style={{ background: 'linear-gradient(rgba(15,13,11,0.62), rgba(15,13,11,0.62)), url(/images/locations/carlsbad.png) center/cover no-repeat', minHeight: '58vh', paddingTop: '76px' }}
        aria-label="Carlsbad window treatments"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 px-4 md:px-10 lg:px-20 pb-16 md:pb-24 max-w-[900px]">
          <p
            className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-5"
            style={{ color: 'var(--sand-light)' }}
          >
            <span className="inline-block w-9 h-px bg-current" aria-hidden="true" />
            Bressi Ranch · La Costa · Aviara · Carlsbad Village
          </p>

          <h1
            className="font-[300] leading-[1.02] tracking-[-0.02em] mb-7"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(36px, 5vw, 70px)',
              color: 'var(--cream)',
            }}
          >
            Carlsbad Window Treatments,{' '}
            <em className="italic" style={{ color: 'var(--sand-light)' }}>
              HOA-Approved
            </em>
          </h1>

          <p
            className="text-[16px] leading-[1.85] max-w-[580px] mb-10"
            style={{ color: 'rgba(251,251,249,0.72)' }}
          >
            Carlsbad's master-planned communities — from the hillside estates of Bressi Ranch to
            the coastal courts of Aviara — share one thing: an HOA with real authority over what your
            windows look like from the street. We know every color palette, every exterior restriction,
            and we bring samples that already pass review.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2.5 px-9 py-4 text-[11px] tracking-[0.2em] uppercase btn-interactive"
              style={{ background: 'var(--sand)', color: 'var(--ink)' }}
            >
              Book Free Consultation
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <a
              href="tel:+18583381678"
              className="text-[13px] tracking-[0.06em]"
              style={{ color: 'rgba(251,251,249,0.6)' }}
            >
              (858) 338-1678
            </a>
          </div>
        </div>
      </header>

      {/* ══ HOA COMPLIANCE CHECKLIST ══════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--cream)' }}
        aria-labelledby="hoa-heading"
      >
        <div className="max-w-[860px] mx-auto">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            HOA Ready
          </p>

          <h2
            id="hoa-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em] mb-4"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3vw, 42px)' }}
          >
            HOA Compliance{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>Checklist</em>
          </h2>

          <p
            className="text-[15px] leading-[1.8] mb-14"
            style={{ color: 'var(--mid)', maxWidth: '540px' }}
          >
            Living in a Carlsbad HOA community means exterior appearances are governed by strict
            guidelines. We've worked with dozens of boards across the city — here's what we guarantee.
          </p>

          <ul className="flex flex-col gap-6" role="list">
            {HOA_CHECKLIST.map((item, i) => (
              <li
                key={item.check}
                className="flex gap-6 items-start p-7"
                style={{
                  background: 'var(--warm)',
                  borderLeft: '3px solid var(--sand)',
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[15px] font-semibold mt-0.5"
                  style={{ background: 'var(--sand)', color: 'var(--cream)' }}
                  aria-hidden="true"
                >
                  ✓
                </span>
                <div>
                  <p
                    className="text-[15px] font-[500] mb-1.5 leading-snug"
                    style={{ fontFamily: 'var(--serif)', color: 'var(--ink)' }}
                  >
                    {item.check}
                  </p>
                  <p className="text-[14px] leading-[1.75]" style={{ color: 'var(--mid)' }}>
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══ PRODUCT GRID ══════════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--warm)' }}
        aria-labelledby="products-heading"
      >
        <p
          className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
          style={{ color: 'var(--sand)' }}
        >
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          For Carlsbad Homes
        </p>

        <h2
          id="products-heading"
          className="font-[300] leading-[1.06] tracking-[-0.015em] mb-14"
          style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3vw, 42px)' }}
        >
          Popular Products in{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>Carlsbad</em>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <article
              key={p.name}
              className="group overflow-hidden"
              style={{ background: 'var(--cream)', transitionDelay: `${i * 0.06}s` }}
            >
              <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3
                  className="text-[15px] font-[400] leading-snug"
                  style={{ fontFamily: 'var(--serif)', color: 'var(--ink)' }}
                >
                  {p.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>

        {/* See Full Selection */}
        <div style={{ textAlign: 'center', marginTop: 48, paddingBottom: 8 }}>
          <Link
            to="/catalog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '13px 32px',
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              border: '1px solid rgba(0,0,0,0.25)',
              color: 'var(--ink)',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            See Full Selection →
          </Link>
        </div>

      {/* ══ DOCUMENTATION CTA ═════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-28 text-center"
        style={{ background: 'var(--ink)' }}
        aria-label="HOA documentation CTA"
      >
        <p
          className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-6"
          style={{ color: 'var(--sand-light)' }}
        >
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          Stress-Free HOA Process
        </p>

        <h2
          className="font-[300] leading-[1.06] tracking-[-0.015em] mb-6"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(28px, 3.5vw, 50px)',
            color: 'var(--cream)',
          }}
        >
          We Handle Your{' '}
          <em className="italic" style={{ color: 'var(--sand-light)' }}>HOA Documentation</em>
        </h2>

        <p
          className="text-[15px] leading-[1.85] mb-12 mx-auto"
          style={{ color: 'rgba(251,251,249,0.65)', maxWidth: '520px' }}
        >
          From submittal forms to specification sheets, we prepare everything your HOA board needs
          to approve your window treatments — so you skip the back-and-forth entirely.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-5">
          <Link
            to="/booking"
            className="inline-flex items-center gap-2.5 px-10 py-4 text-[11px] tracking-[0.2em] uppercase btn-interactive"
            style={{ background: 'var(--sand)', color: 'var(--ink)' }}
          >
            Book Free Consultation
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <a
            href="tel:+18583381678"
            className="text-[13px] tracking-[0.06em] underline underline-offset-4"
            style={{ color: 'rgba(251,251,249,0.55)' }}
          >
            (858) 338-1678
          </a>
        </div>
      </section>

    </div>
  )
}
