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
      { name: 'twitter:image', content: `${SITE_URL}/images/og-image.jpg` },
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


  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
    { '@type': 'Question', 'name': "What roller shade fabric is best for protecting hardwood floors from UV damage in a Mission Hills craftsman?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Mission Hills craftsman homes often have original or restored hardwood floors and period art that UV light bleaches within a few years of unprotected south or west exposure. Solar-fabric roller shades in a tight 3\u20135% openness factor block 95%+ of UV rays while keeping the room bright \u2014 iL Progetto specifies fabrics with a minimum UV blocking rating of 95% for all San Diego installations near histo" } },
    { '@type': 'Question', 'name': "Can zebra shades handle the intense afternoon sun that hits my North Park bungalow from the west?", 'acceptedAnswer': { '@type': 'Answer', 'text': "North Park's west-facing bungalow windows receive direct afternoon sun that tracks across the living room between roughly 2 p.m. and sunset \u2014 long enough to cause significant glare and heat gain. Zebra shades let you rotate between sheer bands for a softened view and solid bands for full glare control, giving North Park homeowners a single product that handles both the bright midday and brutal lat" } },
    { '@type': 'Question', 'name': "Do cellular shades actually help with energy bills in a Pacific Beach condo that faces the ocean?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Ocean-facing Pacific Beach condos deal with a unique combination: intense UV and solar heat gain through west glass during the afternoon, and cool marine air drawing warmth out through the same glass overnight. Double-cell honeycomb shades create a trapped-air buffer that reduces both heat gain in summer and heat loss at night \u2014 measurable on a monthly SDG&E bill for a unit with significant west g" } },
    { '@type': 'Question', 'name': "What window treatment handles the glare off the freeway-side glass in my Mission Valley condo?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Mission Valley condos on the freeway-adjacent sides face a double glare problem: direct southern sun and reflected light off adjacent building glass, particularly in the mid-morning hours. Roman shades in a light-filtering linen weave soften that aggressive glare into diffused ambient light without making the room feel cave-like during San Diego's 266 sunny days. iL Progetto fabricates Roman shade" } }
    ],
  }
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/locations/san-diego#localbusiness`,
    'name': 'iL Progetto LLC — San Diego Window Treatments',
    'description': `Custom window treatments in San Diego, CA. Free in-home consultation — we bring the full catalog to your home.`,
    'url': `${SITE_URL}/locations/san-diego`,
    'telephone': '+18583381678',
    'email': 'info@ilprogettollc.com',
    'priceRange': '$$',
    'image': `${SITE_URL}/images/og-image.jpg`,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'San Diego',
      'addressRegion': 'CA',
      'addressCountry': 'US',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.7157',
      'longitude': '-117.1611',
    },
    'areaServed': {
      '@type': 'City',
      'name': 'San Diego',
      'containedInPlace': { '@type': 'State', 'name': 'California' },
    },
    'parentOrganization': { '@id': `${SITE_URL}/#organization` },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '5.0',
      'reviewCount': '32',
      'bestRating': '5',
    },
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
      {/* ── Related Products ──────────────────────────────────────── */}
      <section
        className="px-4 md:px-10 lg:px-20 py-16 border-t"
        style={{ background: 'var(--cream)', borderColor: 'var(--hairline)' }}
        aria-label="Related window treatment products"
      >
        <p className="text-[11px] tracking-[0.22em] uppercase mb-4" style={{ color: 'var(--sand)' }}>
          Popular in San Diego
        </p>
        <h2 className="font-[300] leading-[1.1] mb-8" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px,2.5vw,32px)', color: 'var(--ink)' }}>
          Window Treatments We Install in San Diego
        </h2>
        <div className="flex flex-wrap gap-3 mb-8">
          <Link key="roller" to="/catalog" search={{ product: "roller" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Roller Shades</Link>
          <Link key="zebra" to="/catalog" search={{ product: "zebra" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Zebra Shades</Link>
          <Link key="motorized" to="/catalog" search={{ product: "motorized" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Motorized Shading</Link>
          <Link key="plantation" to="/catalog" search={{ product: "plantation" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Plantation Shutters</Link>
          <Link key="cellular" to="/catalog" search={{ product: "cellular" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Cellular Shades</Link>
        </div>
        <div className="flex flex-wrap gap-6 text-[13px]" style={{ color: 'var(--mid)' }}>
          <Link to="/catalog" style={{ color: 'var(--sand)', textDecoration: 'underline' }}>Browse full catalog →</Link>
          <Link to="/faq" style={{ color: 'var(--sand)', textDecoration: 'underline' }}>Read our FAQ →</Link>
          <Link to="/smart-home" style={{ color: 'var(--sand)', textDecoration: 'underline' }}>Motorized &amp; smart home options →</Link>
          <Link to="/warranty" style={{ color: 'var(--sand)', textDecoration: 'underline' }}>Our warranty →</Link>
        </div>
      </section>

    </>
  )
}