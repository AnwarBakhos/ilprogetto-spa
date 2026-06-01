import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = (createFileRoute as any)('/locations/escondido')({
  head: () => ({
    meta: [
      { title: 'Window Treatments Escondido CA — Natural Materials | iL Progetto LLC' },
      {
        name: 'description',
        content:
          "Custom natural window treatments for Escondido's wine country homes — woven wood shades, Roman shades, plantation shutters. Free in-home consultation.",
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Window Treatments Escondido CA — Natural Materials | iL Progetto LLC' },
      { property: 'og:description', content: "Custom natural window treatments for Escondido's wine country homes — woven wood shades, Roman shades, plantation shutters. Free in-home consultation." },
      { property: 'og:image', content: '/images/og-image.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: 'https://www.ilprogettollc.com/locations/escondido' }],
  }),
  component: EscondidoPage,
})

const naturalProducts = [
  {
    img: '/images/products/Woven Wood Shades.jpg',
    name: 'Woven Wood Shades',
    why: 'Bamboo, rattan, and grasses bring the texture of the hillside inside. These shades age beautifully and complement exposed-beam ceilings common in Escondido ranch homes.',
  },
  {
    img: '/images/products/Roman Shades.jpg',
    name: 'Roman Shades',
    why: 'Soft fabric folds that layer well with woven textures. Available in linen and cotton weaves that reinforce an earthy, understated palette.',
  },
  {
    img: '/images/products/Plantation Shutters.png',
    name: 'Plantation Shutters',
    why: 'Crisp painted or stained wood louvers lend architectural permanence to Mediterranean-style and craftsman interiors throughout Escondido.',
  },
  {
    img: '/images/products/Roller Shades.png',
    name: 'Solar Roller Shades',
    why: 'Escondido\'s hot summers demand solar fabrics that cut UV and heat without blocking the hillside views that make these properties worth owning.',
  },
  {
    img: '/images/products/Cellular Shades.png',
    name: 'Cellular Shades',
    why: 'Honeycomb insulation moderates Escondido\'s wide temperature swings — warm mornings, hot afternoons, cool evenings — reducing HVAC load year-round.',
  },
]

function EscondidoPage() {
  return (
    <div>

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <header
        className="relative flex flex-col justify-end overflow-hidden"
        style={{ background: 'linear-gradient(rgba(251,249,245,0.74), rgba(251,249,245,0.74)), url(/images/locations/escondido.png) center/cover no-repeat', minHeight: '58vh', paddingTop: '76px' }}
        aria-label="Escondido window treatments hero"
      >
        {/* Subtle organic texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 80% 20%, rgba(197,165,114,0.18) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 px-4 md:px-10 lg:px-20 pb-16 md:pb-24 max-w-[860px]">
          <p
            className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-8"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-9 h-px bg-current" aria-hidden="true" />
            Escondido, CA — Wine Country
          </p>

          <h1
            className="font-[300] leading-[1.02] tracking-[-0.025em] mb-8"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(36px, 5.5vw, 70px)',
              color: 'var(--ink)',
            }}
          >
            Window Treatments That{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Belong in Wine Country
            </em>
          </h1>

          <p
            className="text-[16px] leading-[1.85] max-w-[560px] mb-10"
            style={{ color: 'var(--mid)' }}
          >
            Escondido's hillside properties and ranch homes have a character that synthetic
            materials can't match. Organic textures — bamboo, grasscloth, linen — belong here.
            We bring the natural material collection that complements the warm earth tones and open
            beams that define this part of San Diego County.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2.5 px-9 py-4 text-[11px] tracking-[0.2em] uppercase btn-interactive"
              style={{ background: 'var(--ink)', color: 'var(--cream)' }}
            >
              Book Free Consultation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
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
      </header>

      {/* ══ LARGE FEATURED PRODUCT — WOVEN WOOD ══════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'var(--ink)' }}
        aria-labelledby="featured-escondido-heading"
      >
        {/* Full-width image at 50vh */}
        <div
          className="w-full overflow-hidden"
          style={{ height: '50vh', minHeight: '340px', maxHeight: '600px' }}
        >
          <img
            src="/images/products/Woven Wood Shades.jpg"
            alt="Woven Wood Shades in a warm interior"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col justify-end px-4 md:px-10 lg:px-20 pb-12 md:pb-16">
          <p
            className="text-[11px] tracking-[0.22em] uppercase mb-4"
            style={{ color: 'var(--sand-light)' }}
          >
            Natural Choice for Escondido Interiors
          </p>
          <h2
            id="featured-escondido-heading"
            className="font-[300] leading-[1.05] tracking-[-0.02em] max-w-[600px]"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(28px, 4vw, 54px)',
              color: 'var(--cream)',
            }}
          >
            Woven Wood Shades —{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              The Natural Choice
            </em>
          </h2>
        </div>
      </section>

      {/* ══ THREE PRODUCTS IN A ROW ═══════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--cream)' }}
        aria-labelledby="natural-lineup-heading"
      >
        <div className="mb-14">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Natural Materials Collection
          </p>
          <h2
            id="natural-lineup-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em]"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(26px, 3vw, 42px)',
            }}
          >
            Organic Treatments for{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Escondido Homes
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {naturalProducts.map((p, i) => (
            <article
              key={p.name}
              className="group flex flex-col"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-full overflow-hidden mb-6" style={{ aspectRatio: '3/2' }}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />
              </div>
              <div
                className="flex-1 pt-5 border-t"
                style={{ borderColor: 'rgba(0,0,0,0.1)' }}
              >
                <h3
                  className="text-[21px] font-[300] mb-3 leading-[1.2]"
                  style={{ fontFamily: 'var(--serif)' }}
                >
                  {p.name}
                </h3>
                <p className="text-[14px] leading-[1.78]" style={{ color: 'var(--mid)' }}>
                  {p.why}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Inline callout strip */}
        <div
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-8"
          style={{ background: 'var(--warm)' }}
        >
          <p
            className="text-[15px] leading-[1.75] max-w-[480px]"
            style={{ color: 'var(--mid)' }}
          >
            Every natural shade we carry is available in motorized operation — so you can raise the
            bamboo with a tap, no cords required.
          </p>
          <Link
            to="/booking"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-3.5 text-[11px] tracking-[0.18em] uppercase btn-interactive"
            style={{ background: 'var(--ink)', color: 'var(--cream)' }}
          >
            Book Consultation <span aria-hidden="true">→</span>
          </Link>
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

      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-28"
        style={{ background: 'var(--ink)' }}
        aria-label="Book a consultation"
      >
        <div className="max-w-[660px] mx-auto text-center">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-6"
            style={{ color: 'var(--sand-light)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Free In-Home Visit · Escondido
          </p>
          <h2
            className="font-[300] leading-[1.05] tracking-[-0.02em] mb-6"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(28px, 3.8vw, 50px)',
              color: 'var(--cream)',
            }}
          >
            Consult With Our{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Escondido Team
            </em>
          </h2>
          <p
            className="text-[15px] leading-[1.85] mb-10"
            style={{ color: 'rgba(251,251,249,0.65)' }}
          >
            We bring the full natural materials collection to your home — every sample, every
            texture, every finish — so you can see exactly how it looks in your light. Call{' '}
            <a href="tel:+18583381678" className="underline" style={{ color: 'var(--sand-light)' }}>
              (858) 338-1678
            </a>{' '}
            or book online.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2.5 px-10 py-4 text-[11px] tracking-[0.2em] uppercase btn-interactive"
            style={{ background: 'var(--sand)', color: 'var(--ink)' }}
          >
            Book Free Consultation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  )
}
