import { createFileRoute, Link } from '@tanstack/react-router'
import { SITE_URL } from '@/lib/config'


export const Route = (createFileRoute as any)('/locations/san-diego')({
  head: () => ({
    meta: [
      { title: 'Custom Window Treatments San Diego, CA | iL Progetto LLC' },
      {
        name: 'description',
        content:
          "San Diego's premier mobile window treatment showroom. Custom roller shades, cellular shades, plantation shutters & motorized blinds. Free in-home consultation across all San Diego neighborhoods.",
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Custom Window Treatments San Diego, CA | iL Progetto LLC' },
      {
        property: 'og:description',
        content:
          "San Diego's premier mobile window treatment showroom. Custom roller shades, cellular shades, plantation shutters & motorized blinds. Free in-home consultation across all San Diego neighborhoods.",
      },
      { property: 'og:image', content: `${SITE_URL}/images/og-image.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: `${SITE_URL}/locations/san-diego` }],
  }),
  component: SanDiegoPage,
})

const products = [
  {
    img: '/images/products/Roller Shades.png',
    name: 'Roller Shades',
    desc: 'Clean, minimal light control — perfect for San Diego\'s sun-drenched rooms.',
  },
  {
    img: '/images/products/Zebra Shades.png',
    name: 'Zebra Shades',
    desc: 'Alternating sheer and solid bands let you tune glare without losing the view.',
  },
  {
    img: '/images/products/Cellular Shades.png',
    name: 'Cellular Shades',
    desc: 'Honeycomb construction blocks UV and insulates against coastal temperature swings.',
  },
  {
    img: '/images/products/Plantation Shutters.png',
    name: 'Plantation Shutters',
    desc: 'Timeless louvers that suit every architectural style across San Diego\'s diverse neighborhoods.',
  },
  {
    img: '/images/products/Motorized Shades.png',
    name: 'Motorized Shades',
    desc: 'Voice- or app-controlled shading that moves with the sun — no manual adjustment needed.',
  },
  {
    img: '/images/products/Woven Wood Shades.jpg',
    name: 'Woven Wood Shades',
    desc: 'Natural textures that bring warmth to any San Diego interior, from bungalows to high-rises.',
  },
]

const stats = [
  { value: '266', label: 'Sunny Days' },
  { value: 'Free', label: 'In-Home Consult' },
  { value: '1 Day', label: 'Installation' },
  { value: '5★', label: 'Google Rated' },
]

function SanDiegoPage() {
  return (
    <div>

      {/* HERO */}
      <header
        className="relative flex flex-col justify-end overflow-hidden"
        style={{ background: 'linear-gradient(rgba(15,13,11,0.62), rgba(15,13,11,0.62)), url(/images/locations/san-diego.png) center/cover no-repeat', minHeight: '62vh' }}
        aria-label="San Diego window treatments"
      >
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '24px 24px',
          }}
          aria-hidden="true"
        />



        <div className="relative z-10 px-4 md:px-10 lg:px-20 pb-20 max-w-[860px]">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.24em] uppercase mb-6"
            style={{ color: 'var(--sand-light)' }}
          >
            <span className="inline-block w-10 h-px bg-current" aria-hidden="true" />
            266 Sunny Days a Year
          </p>

          <h1
            className="font-[300] leading-[1.02] tracking-[-0.025em] mb-7"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(38px, 5.5vw, 74px)',
              color: 'var(--cream)',
            }}
          >
            San Diego's Window{' '}
            <em className="italic" style={{ color: 'var(--sand-light)' }}>
              Treatment Specialists
            </em>
          </h1>

          <p
            className="text-[16px] leading-[1.9] max-w-[580px] mb-10"
            style={{ color: 'rgba(251,251,249,0.70)' }}
          >
            With over 260 sunny days each year, UV protection isn't seasonal — it's essential. From
            North Park craftsman bungalows to Del Mar coastal retreats, we bring the full collection
            directly to your home and complete every installation in a single day.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2.5 px-9 py-4 text-[11px] tracking-[0.2em] uppercase transition-all hover:gap-4"
              style={{ background: 'var(--sand)', color: '#fff' }}
            >
              Book Free Consultation
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <a
              href="tel:+18583381678"
              className="inline-flex items-center gap-2 px-9 py-4 text-[11px] tracking-[0.2em] uppercase border"
              style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(251,251,249,0.75)' }}
            >
              (858) 338-1678
            </a>
          </div>
        </div>
      </header>

      {/* FULL COLLECTION GRID */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--cream)' }}
        aria-labelledby="collection-heading"
      >
        <div className="mb-14">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            What We Offer
          </p>
          <h2
            id="collection-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em]"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              color: 'var(--ink)',
            }}
          >
            Our Full{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Collection
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <article key={p.name} className="group flex flex-col">
              <div
                className="overflow-hidden mb-5"
                style={{ aspectRatio: '4/3', background: 'var(--warm)' }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3
                className="text-[18px] font-[400] mb-2 leading-snug"
                style={{ fontFamily: 'var(--serif)', color: 'var(--ink)' }}
              >
                {p.name}
              </h3>
              <p className="text-[14px] leading-[1.75]" style={{ color: 'var(--mid)' }}>
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* STATS BAR */}
      <section
        className="px-4 md:px-10 lg:px-20 py-16"
        style={{ background: 'var(--ink)' }}
        aria-label="Key facts"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-12 px-6 text-center"
              style={{ background: 'var(--ink)' }}
            >
              <span
                className="block font-[300] leading-none mb-2"
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(36px, 4.5vw, 56px)',
                  color: 'var(--sand-light)',
                }}
              >
                {s.value}
              </span>
              <span
                className="text-[11px] tracking-[0.2em] uppercase"
                style={{ color: 'rgba(251,251,249,0.5)' }}
              >
                {s.label}
              </span>
            </div>
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

      {/* CTA */}
      <section
        className="px-4 md:px-10 lg:px-20 py-28"
        style={{ background: 'var(--warm)' }}
        aria-label="Book consultation"
      >
        <div
          className="max-w-[740px] mx-auto text-center py-20 px-8 md:px-16"
          style={{ background: 'var(--cream)', borderTop: '3px solid var(--sand)' }}
        >
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-6"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-7 h-px bg-current" aria-hidden="true" />
            No Showroom Trip Required
          </p>
          <h2
            className="font-[300] leading-[1.06] tracking-[-0.02em] mb-5"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(26px, 3.2vw, 42px)',
              color: 'var(--ink)',
            }}
          >
            Book Your Free San Diego{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Consultation
            </em>
          </h2>
          <p className="text-[15px] leading-[1.85] mb-10" style={{ color: 'var(--mid)' }}>
            Our designer arrives at your home with samples, measuring tools, and transparent pricing.
            Most San Diego installations are completed the very next day.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2.5 px-10 py-4 text-[11px] tracking-[0.2em] uppercase"
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
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-[11px] tracking-[0.2em] uppercase border"
              style={{ borderColor: 'var(--hairline)', color: 'var(--ink)' }}
            >
              (858) 338-1678
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
