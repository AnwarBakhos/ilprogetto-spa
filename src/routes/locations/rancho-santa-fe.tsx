import { createFileRoute, Link } from '@tanstack/react-router'

// ─── Route ─────────────────────────────────────────────────────────────────────
export const Route = (createFileRoute as any)('/locations/rancho-santa-fe')({
  head: () => ({
    meta: [
      { title: 'Custom Window Treatments Rancho Santa Fe CA — ARB-Compliant | iL Progetto LLC' },
      {
        name: 'description',
        content:
          'Architectural Review Board-compliant custom window treatments for Rancho Santa Fe estates. Plantation shutters, custom drapery for Mediterranean and Spanish Colonial homes. Free consultation.',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: 'Custom Window Treatments Rancho Santa Fe CA — ARB-Compliant | iL Progetto LLC',
      },
      {
        property: 'og:description',
        content:
          'Architectural Review Board-compliant custom window treatments for Rancho Santa Fe estates. Plantation shutters, custom drapery for Mediterranean and Spanish Colonial homes. Free consultation.',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: 'https://www.ilprogettollc.com/locations/rancho-santa-fe' }],
  }),
  component: RanchoSantaFePage,
})

// ─── Data ──────────────────────────────────────────────────────────────────────
const ARB_FEATURES = [
  'We prepare and submit all ARB documentation on your behalf',
  'Exterior-approved finishes in Covenant-compliant color palettes',
  'Neutral white, cream, and sand tones standard across our estate collection',
]

const ESTATE_PRODUCTS = [
  {
    name: 'Plantation Shutters',
    img: '/images/products/Plantation Shutters.png',
    description:
      'The defining window treatment of Spanish Colonial and Mediterranean architecture. Our solid-wood plantation shutters are available in 3½" and 4½" louver widths, finished in ARB-approved whites and creams that complement stucco exteriors. Each panel is hand-fitted to your exact arch, casement, or sliding door opening.',
  },
  {
    name: 'Sheer Drapes',
    img: '/images/products/Sheer Drapes.jpg',
    description:
      'Floor-to-ceiling linen sheers in ivory, flax, and natural white bring a refined softness to high-ceilinged great rooms and formal living areas. We source from European textile mills specializing in estate-weight fabrics — the kind that drape with enough body to fill a 14-foot window without bulk.',
  },
  {
    name: 'Motorized Shades',
    img: '/images/products/Motorized Shades.png',
    description:
      'Whole-estate motorized shading systems integrated with Lutron, Control4, and Apple HomeKit. Programmed scenes for morning, midday, and evening — operating across every room from a single app or voice command.',
  },
  {
    name: 'Roman Shades',
    img: '/images/products/Roman Shades.jpg',
    description:
      'Hand-sewn tailored folds in estate-weight fabrics from our exclusive designer collection. Roman shades are the preferred choice for formal dining rooms and studies where drapery would overwhelm the space.',
  },
  {
    name: 'Woven Wood Shades',
    img: '/images/products/Woven Wood Shades.jpg',
    description:
      'Natural bamboo, jute, and seagrass weavings that complement the organic materials used throughout Rancho Santa Fe estate interiors — exposed beams, stone floors, and reclaimed wood feature walls.',
  },
]

// ─── Page ──────────────────────────────────────────────────────────────────────
function RanchoSantaFePage() {
  return (
    <div>

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <header
        className="relative flex flex-col justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(rgba(251,249,245,0.74), rgba(251,249,245,0.74)), url(/images/locations/rancho-santa-fe.png) center/cover no-repeat',
          minHeight: '60vh',
          paddingTop: '76px',
        }}
        aria-label="Rancho Santa Fe window treatments"
      >
        {/* subtle horizontal rule */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-20"
          style={{ background: 'var(--sand)' }}
          aria-hidden="true"
        />

        <div className="px-4 md:px-10 lg:px-20 py-20 md:py-28 max-w-[940px]">
          {/* gold border-left accent block */}
          <div
            className="pl-8"
            style={{ borderLeft: '4px solid var(--sand)' }}
          >
            <p
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-6"
              style={{ color: 'var(--sand)' }}
            >
              The Covenant · Fairbanks Ranch · Del Rayo Estates
            </p>

            <h1
              className="font-[300] leading-[1.02] tracking-[-0.02em] mb-8"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(34px, 4.8vw, 66px)',
                color: 'var(--ink)',
              }}
            >
              Estate-Scale Window Treatments{' '}
              <br className="hidden md:block" />
              for{' '}
              <em className="italic" style={{ color: 'var(--sand)' }}>
                Rancho Santa Fe
              </em>
            </h1>

            <p
              className="text-[16px] leading-[1.9] mb-5"
              style={{ color: 'var(--mid)', maxWidth: '580px' }}
            >
              Rancho Santa Fe is one of California's most architecturally protected communities.
              The Covenant's Architectural Review Board governs exterior appearances with a rigorous
              review process — and rightfully so, given the Spanish Colonial and Mediterranean
              masterpieces that define the community.
            </p>

            <p
              className="text-[16px] leading-[1.9] mb-10"
              style={{ color: 'var(--mid)', maxWidth: '580px' }}
            >
              We've been specifying window treatments for Rancho Santa Fe estates for years. We
              know the ARB's expectations, the Covenant's preferred color ranges, and how to
              specify products that look as correct from the driveway as they do from the inside.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2.5 px-9 py-4 text-[11px] tracking-[0.2em] uppercase btn-interactive"
                style={{ background: 'var(--ink)', color: 'var(--cream)' }}
              >
                Schedule Estate Consultation
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <a
                href="tel:+18583381678"
                className="text-[13px] tracking-[0.06em]"
                style={{ color: 'var(--mid)' }}
              >
                (858) 338-1678
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ══ ARB-READY SOLUTIONS ═══════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--warm)' }}
        aria-labelledby="arb-heading"
      >
        <p
          className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
          style={{ color: 'var(--sand)' }}
        >
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          ARB-Ready Solutions
        </p>

        <h2
          id="arb-heading"
          className="font-[300] leading-[1.06] tracking-[-0.015em] mb-14"
          style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3vw, 42px)', color: 'var(--ink)' }}
        >
          Working Within{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>the Covenant</em>
        </h2>

        <div className="grid md:grid-cols-2 gap-14">
          {/* left — copy */}
          <div className="">
            <p className="text-[15px] leading-[1.85] mb-5" style={{ color: 'var(--mid)' }}>
              The Rancho Santa Fe Covenant's Architectural Review Board reviews any change visible
              from a public road or neighboring property. Window treatments fall squarely within
              their purview — especially shutters, shades with colored fabrics, and anything with
              visible exterior hardware.
            </p>
            <p className="text-[15px] leading-[1.85] mb-5" style={{ color: 'var(--mid)' }}>
              Fairbanks Ranch has its own HOA layer on top of county guidelines, and Del Rayo
              Estates maintains strict elevation standards going back to its original 1980s
              development covenant. We've navigated all three.
            </p>
            <p className="text-[15px] leading-[1.85]" style={{ color: 'var(--mid)' }}>
              Our process begins with a complete window audit — we document every opening, match
              products to your architecture, and prepare the full ARB submittal package before
              ordering a single yard of fabric.
            </p>
          </div>

          {/* right — feature bullets */}
          <div className="">
            <p
              className="text-[12px] tracking-[0.16em] uppercase mb-8"
              style={{ color: 'var(--sand)', fontFamily: 'var(--sans)' }}
            >
              What We Handle
            </p>

            <ul className="flex flex-col gap-0" role="list">
              {ARB_FEATURES.map((feat, i) => (
                <li
                  key={feat}
                  className="flex gap-5 items-start py-6"
                  style={{
                    borderTop: i === 0 ? '1px solid rgba(0,0,0,0.1)' : undefined,
                    borderBottom: '1px solid rgba(0,0,0,0.1)',
                  }}
                >
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[12px] mt-0.5"
                    style={{ background: 'var(--sand)', color: 'var(--cream)' }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <p className="text-[15px] leading-[1.75]" style={{ color: 'var(--ink)' }}>
                    {feat}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══ ESTATE PRODUCT CARDS (PORTRAIT) ══════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--cream)' }}
        aria-labelledby="products-heading"
      >
        <p
          className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
          style={{ color: 'var(--sand)' }}
        >
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          The Estate Collection
        </p>

        <h2
          id="products-heading"
          className="font-[300] leading-[1.06] tracking-[-0.015em] mb-14"
          style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3vw, 42px)', color: 'var(--ink)' }}
        >
          Precision-Made for{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>Large-Scale Architecture</em>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {ESTATE_PRODUCTS.map((p, i) => (
            <article
              key={p.name}
              className="group"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* portrait image */}
              <div
                className="overflow-hidden mb-7"
                style={{ aspectRatio: '3/4' }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* text */}
              <div
                className="px-8 pb-8 pt-7"
                style={{ background: 'var(--warm)', borderLeft: '3px solid var(--sand)' }}
              >
                <h3
                  className="text-[22px] font-[300] mb-4 leading-snug"
                  style={{ fontFamily: 'var(--serif)', color: 'var(--ink)' }}
                >
                  {p.name}
                </h3>
                <p className="text-[14px] leading-[1.85]" style={{ color: 'var(--mid)' }}>
                  {p.description}
                </p>
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

      {/* ══ ESTATE CONSULTATION CTA ═══════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-32 text-center"
        style={{ background: 'var(--ink)' }}
        aria-label="Estate consultation CTA"
      >
        {/* decorative rule */}
        <div
          className="w-16 h-px mx-auto mb-10 opacity-40"
          style={{ background: 'var(--sand)' }}
          aria-hidden="true"
        />

        <p
          className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-7"
          style={{ color: 'var(--sand-light)' }}
        >
          Rancho Santa Fe · The Covenant · Fairbanks Ranch
        </p>

        <h2
          className="font-[300] leading-[1.04] tracking-[-0.02em] mb-7"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(30px, 4.2vw, 58px)',
            color: 'var(--cream)',
          }}
        >
          Schedule Your{' '}
          <em className="italic" style={{ color: 'var(--sand-light)' }}>
            Estate Consultation
          </em>
        </h2>

        <p
          className="text-[15px] leading-[1.9] mb-14 mx-auto"
          style={{ color: 'rgba(251,251,249,0.65)', maxWidth: '520px' }}
        >
          We visit your property with the complete estate collection, take precise measurements
          of every window and door opening, and leave you with a full written specification and
          ARB-ready submittal package — at no charge.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-5">
          <Link
            to="/booking"
            className="inline-flex items-center gap-2.5 px-11 py-[18px] text-[11px] tracking-[0.2em] uppercase btn-interactive"
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
            style={{ color: 'rgba(251,251,249,0.5)' }}
          >
            (858) 338-1678
          </a>
        </div>
      </section>

    </div>
  )
}
