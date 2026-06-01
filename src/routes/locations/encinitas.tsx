import { createFileRoute, Link } from '@tanstack/react-router'

// ─── Route ─────────────────────────────────────────────────────────────────────
export const Route = (createFileRoute as any)('/locations/encinitas')({
  head: () => ({
    meta: [
      { title: 'Window Treatments Encinitas CA — Natural Materials | iL Progetto LLC' },
      {
        name: 'description',
        content:
          'Custom natural window treatments for Encinitas homes — woven wood shades, linen drapery, organic Roman shades. Biophilic design specialists. Free in-home consultation.',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: 'Window Treatments Encinitas CA — Natural Materials | iL Progetto LLC',
      },
      {
        property: 'og:description',
        content:
          'Custom natural window treatments for Encinitas homes — woven wood shades, linen drapery, organic Roman shades. Biophilic design specialists. Free in-home consultation.',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: 'https://www.ilprogettollc.com/locations/encinitas' }],
  }),
  component: EncinitasPage,
})

// ─── Data ──────────────────────────────────────────────────────────────────────
const NATURAL_PRODUCTS = [
  {
    name: 'Woven Wood Shades',
    img: '/images/products/Woven Wood Shades.jpg',
    copy:
      'Bamboo, jute, and sustainably-harvested reeds woven into a texture that brings the coastal canyon inside. Each shade filters light into warm, dappled tones that shift through the day.',
  },
  {
    name: 'Roman Shades',
    img: '/images/products/Roman Shades.jpg',
    copy:
      'Clean horizontal folds in linen or cotton — a timeless form that pairs equally well with board-and-batten bungalows and modern open-plan homes in Leucadia and Olivenhain.',
  },
  {
    name: 'Sheer Drapes',
    img: '/images/products/Sheer Drapes.jpg',
    copy:
      'Floor-to-ceiling sheers in natural linen diffuse harsh afternoon sun while preserving the ocean-influenced light that Encinitas homeowners love. Layer with blackout for full flexibility.',
  },
  {
    name: 'Roller Shades',
    img: '/images/products/Roller Shades.png',
    copy:
      'Linen-look solar fabrics in warm sand, flax, and ecru tones filter Encinitas coastal light without blocking the view. The clean cassette profile suits the relaxed architectural lines of Leucadia cottages.',
  },
  {
    name: 'Cellular Shades',
    img: '/images/products/Cellular Shades.png',
    copy:
      'Honeycomb construction moderates the coastal temperature swings between cool mornings and warm afternoons. Available in natural linen tones that complement exposed-wood ceilings.',
  },
  {
    name: 'Plantation Shutters',
    img: '/images/products/Plantation Shutters.png',
    copy:
      'Classic louvered panels with a modern finish — they\'ve been the standard in Encinitas bluff homes for decades. Salt-air rated hardware ensures they last as long as the house.',
  },
]

// ─── Page ──────────────────────────────────────────────────────────────────────
function EncinitasPage() {
  return (
    <div style={{ background: 'var(--warm)' }}>

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <header
        className="relative flex flex-col justify-center overflow-hidden"
        style={{ background: 'linear-gradient(rgba(251,249,245,0.74), rgba(251,249,245,0.74)), url(/images/locations/encinitas.png) center/cover no-repeat', minHeight: '62vh', paddingTop: '76px' }}
        aria-label="Encinitas window treatments"
      >
        {/* decorative botanical line */}
        <div
          className="absolute right-0 top-0 bottom-0 w-px opacity-20"
          style={{ background: 'var(--sand)' }}
          aria-hidden="true"
        />

        <div className="px-4 md:px-10 lg:px-20 py-20 max-w-[800px]">
          <p
            className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-6"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-9 h-px bg-current" aria-hidden="true" />
            Leucadia · Cardiff · Olivenhain · Encinitas Village
          </p>

          <h1
            className="font-[300] leading-[1.04] tracking-[-0.02em] mb-7"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(38px, 5.2vw, 72px)',
              color: 'var(--ink)',
            }}
          >
            Materials That{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Belong in the Landscape
            </em>
          </h1>

          <p
            className="text-[16px] leading-[1.9] mb-5"
            style={{ color: 'var(--mid)', maxWidth: '540px' }}
          >
            Encinitas is one of the few places where biophilic design isn't a trend — it's a
            way of life. Homes here open to canyon views, garden courtyards, and ocean breezes. The
            window treatments should honor that, not fight it.
          </p>

          <p
            className="text-[16px] leading-[1.9] mb-12"
            style={{ color: 'var(--mid)', maxWidth: '540px' }}
          >
            We specialize in natural woven textiles, organic linens, and sustainably-sourced
            materials that age beautifully in the coastal sun — perfect for the eclectic mix of surf
            bungalows, hillside contemporaries, and equestrian estates that define Olivenhain.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2.5 px-9 py-4 text-[11px] tracking-[0.2em] uppercase btn-interactive"
              style={{ background: 'var(--ink)', color: 'var(--cream)' }}
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
              style={{ color: 'var(--mid)' }}
            >
              (858) 338-1678
            </a>
          </div>
        </div>
      </header>

      {/* ══ FEATURED PRODUCT — WOVEN WOOD ═════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-20"
        style={{ background: 'var(--cream)' }}
        aria-labelledby="featured-heading"
      >
        <p
          className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-8"
          style={{ color: 'var(--sand)' }}
        >
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          Most Requested in Encinitas
        </p>

        <div className="grid md:grid-cols-2 gap-0 overflow-hidden">
          {/* image */}
          <div className="overflow-hidden" style={{ aspectRatio: '3/2' }}>
            <img
              src="/images/products/Woven Wood Shades.jpg"
              alt="Woven Wood Shades in an Encinitas home"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* copy */}
          <div
            className="flex flex-col justify-center px-10 py-12 md:py-0"
            style={{ background: 'var(--warm)' }}
          >
            <h2
              id="featured-heading"
              className="font-[300] leading-[1.06] tracking-[-0.015em] mb-6"
              style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3vw, 40px)', color: 'var(--ink)' }}
            >
              Woven Wood{' '}
              <em className="italic" style={{ color: 'var(--sand)' }}>Shades</em>
            </h2>
            <p className="text-[15px] leading-[1.85] mb-4" style={{ color: 'var(--mid)' }}>
              No other window treatment captures the spirit of Encinitas quite like woven wood. The
              natural fibers — bamboo, sea grass, jute, and rattan — breathe alongside the coastal air
              and develop a richer patina over time rather than degrading from sun exposure.
            </p>
            <p className="text-[15px] leading-[1.85] mb-4" style={{ color: 'var(--mid)' }}>
              We offer over 40 woven wood patterns from light filtering to room-darkening liners,
              ensuring you get the privacy and light balance you need without sacrificing the organic
              aesthetic that defines this community.
            </p>
            <p className="text-[15px] leading-[1.85]" style={{ color: 'var(--mid)' }}>
              Each shade is custom-cut to your exact window dimensions and available in cordless,
              motorized, and top-down/bottom-up configurations.
            </p>
          </div>
        </div>
      </section>

      {/* ══ THREE-COLUMN NATURAL PRODUCTS ═════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--warm)' }}
        aria-labelledby="natural-heading"
      >
        <p
          className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
          style={{ color: 'var(--sand)' }}
        >
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          The Natural Collection
        </p>

        <h2
          id="natural-heading"
          className="font-[300] leading-[1.06] tracking-[-0.015em] mb-14"
          style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3vw, 42px)', color: 'var(--ink)' }}
        >
          Organic Materials for{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>Coastal Living</em>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {NATURAL_PRODUCTS.map((p, i) => (
            <article
              key={p.name}
              className="flex flex-col"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="overflow-hidden mb-6" style={{ aspectRatio: '4/3' }}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <h3
                className="text-[18px] font-[300] mb-3 leading-snug"
                style={{ fontFamily: 'var(--serif)', color: 'var(--ink)' }}
              >
                {p.name}
              </h3>
              <p className="text-[14px] leading-[1.8]" style={{ color: 'var(--mid)' }}>
                {p.copy}
              </p>
            </article>
          ))}
        </div>
      </section>
        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <Link
            to="/catalog"
            className="inline-flex items-center gap-3 px-10 py-4 text-[11px] tracking-[0.2em] uppercase btn-interactive"
            style={{ background: 'var(--sand)', color: '#fff', textDecoration: 'none' }}
          >
            Browse Full Catalog
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-28 text-center"
        style={{ background: 'var(--ink)' }}
        aria-label="Bring nature indoors CTA"
      >
        <p
          className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-6"
          style={{ color: 'var(--sand-light)' }}
        >
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          Encinitas Consultations
        </p>

        <h2
          className="font-[300] leading-[1.06] tracking-[-0.015em] mb-6"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(30px, 4vw, 54px)',
            color: 'var(--cream)',
          }}
        >
          Bring{' '}
          <em className="italic" style={{ color: 'var(--sand-light)' }}>Nature Indoors</em>
        </h2>

        <p
          className="text-[15px] leading-[1.85] mb-12 mx-auto"
          style={{ color: 'rgba(251,251,249,0.65)', maxWidth: '500px' }}
        >
          We'll come to your home with our full natural materials library — bamboo, sea grass,
          jute, linen, and more — so you can see and feel every option in your actual light.
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
