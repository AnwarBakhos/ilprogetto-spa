import { createFileRoute, Link } from '@tanstack/react-router'
import { SITE_URL } from '@/lib/config'


export const Route = (createFileRoute as any)('/locations/la-jolla')({
  head: () => ({
    meta: [
      { title: 'Custom Window Treatments La Jolla, CA | iL Progetto LLC' },
      {
        name: 'description',
        content:
          'Luxury custom window treatments for La Jolla homes — HOA-compliant, Coastal Commission-approved. Plantation shutters, motorized shading, and more. Free in-home consultation.',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Custom Window Treatments La Jolla, CA | iL Progetto LLC' },
      {
        property: 'og:description',
        content:
          'Luxury custom window treatments for La Jolla homes — HOA-compliant, Coastal Commission-approved. Plantation shutters, motorized shading, and more. Free in-home consultation.',
      },
      { property: 'og:image', content: `${SITE_URL}/images/og-image.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `${SITE_URL}/images/og-image.jpg` },
    ],
    links: [{ rel: 'canonical', href: `${SITE_URL}/locations/la-jolla` }],
  }),
  component: LaJollaPage,
})

const complianceCards = [
  {
    icon: '⊞',
    title: 'HOA Review',
    body:
      'We document all product specifications, colors, and finishes to satisfy even the most rigorous La Jolla HOA review boards — before installation begins.',
  },
  {
    icon: '◌',
    title: 'Coastal Commission',
    body:
      'Our window treatments are selected and specified to comply with California Coastal Commission guidelines, preserving your permit standing.',
  },
  {
    icon: '◇',
    title: 'Licensed & Insured',
    body:
      'Every installation is completed by our fully licensed, bonded, and insured team — giving you both quality assurance and peace of mind.',
  },
]

function LaJollaPage() {


  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
    { '@type': 'Question', 'name': "What roller shade works on floor-to-ceiling glass in a La Jolla bluff home without blocking the ocean view?", 'acceptedAnswer': { '@type': 'Answer', 'text': "La Jolla's bluff-top homes along Coast Boulevard and La Jolla Shores Drive are defined by their floor-to-ceiling glass \u2014 and the roller shade fabric selection for these installations must preserve the outward view while managing the intense ocean-reflected UV and glare. iL Progetto specifies 3% or 5% openness solar roller fabrics for La Jolla ocean-facing glass, which provide clear outward views f" } },
    { '@type': 'Question', 'name': "Can zebra shades handle the intense ocean glare in a La Jolla Shores living room that faces the water all day?", 'acceptedAnswer': { '@type': 'Answer', 'text': "La Jolla Shores living rooms with full ocean exposure face a glare cycle that runs nearly all day \u2014 morning light off the water, midday overhead sun, and afternoon southwest glare that tracks across the Pacific. Zebra shades allow precise, on-demand transitions between the sheer-band open position for cooler morning hours and the solid-band closed position for the peak afternoon glare, without hav" } },
    { '@type': 'Question', 'name': "Do cellular shades make sense in a La Jolla Cove home where the windows are original single-pane construction?", 'acceptedAnswer': { '@type': 'Answer', 'text': "La Jolla Cove's older homes near the coastal bluff often retain their original single-pane windows \u2014 protected in some cases by historic character guidelines from the California Coastal Commission \u2014 and cellular shades are the highest-impact energy improvement available without touching the windows themselves. A double-cell honeycomb shade over single-pane glass can reduce heat transmission throug" } },
    { '@type': 'Question', 'name': "What's the best Roman shade fabric for a La Jolla Bird Rock dining room that gets intense morning sun off the ocean?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Bird Rock dining rooms facing the ocean receive a particularly intense morning sun because the Pacific's surface acts as a giant reflector at low sun angles \u2014 amplifying the light that enters east and southeast windows well beyond what an equivalent inland exposure would experience. iL Progetto recommends lined Roman shades in performance-weave linen with a UV-blocking back lining for Bird Rock di" } }
    ],
  }
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/locations/la-jolla#localbusiness`,
    'name': 'iL Progetto LLC — La Jolla Window Treatments',
    'description': `Custom window treatments in La Jolla, CA. Free in-home consultation — we bring the full catalog to your home.`,
    'url': `${SITE_URL}/locations/la-jolla`,
    'telephone': '+18583381678',
    'email': 'info@ilprogettollc.com',
    'priceRange': '$$',
    'image': `${SITE_URL}/images/og-image.jpg`,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'La Jolla',
      'addressRegion': 'CA',
      'addressCountry': 'US',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.8328',
      'longitude': '-117.2713',
    },
    'areaServed': {
      '@type': 'City',
      'name': 'La Jolla',
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
      <div style={{ background: 'var(--cream)' }}>

      {/* HERO — split layout */}
      <header
        className="relative overflow-hidden"
        style={{ background: 'var(--cream)', minHeight: '72vh' }}
        aria-label="La Jolla window treatments"
      >
        {/* thin top border */}
        <div style={{ height: '1px', background: 'var(--hairline)' }} aria-hidden="true" />

        <div className="flex flex-col lg:flex-row items-stretch min-h-[72vh]">

          {/* Left: text */}
          <div className="flex-1 flex flex-col justify-center px-4 md:px-10 lg:px-20 py-24 lg:py-0 max-w-[640px]">
            <p
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.26em] uppercase mb-8"
              style={{ color: 'var(--sand)' }}
            >
              <span className="inline-block w-10 h-px bg-current" aria-hidden="true" />
              La Jolla, California
            </p>

            <h1
              className="font-[300] leading-[1.04] tracking-[-0.025em] mb-7"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(34px, 4.8vw, 62px)',
                color: 'var(--ink)',
              }}
            >
              Where Every View{' '}
              <em className="italic" style={{ color: 'var(--sand)' }}>
                Demands Precision
              </em>
            </h1>

            <p
              className="text-[16px] leading-[1.9] mb-6"
              style={{ color: 'var(--mid)', maxWidth: '480px' }}
            >
              Ocean glare, demanding HOA requirements, Coastal Commission compliance, and walls of
              floor-to-ceiling glass — La Jolla homes require window treatments that are as
              architecturally considered as they are functional.
            </p>
            <p
              className="text-[16px] leading-[1.9] mb-10"
              style={{ color: 'var(--mid)', maxWidth: '480px' }}
            >
              We work with La Jolla's most discerning homeowners to specify treatments that satisfy
              every regulatory requirement while enhancing — never compromising — the views that
              define these exceptional properties.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2.5 px-9 py-4 text-[11px] tracking-[0.2em] uppercase"
                style={{ background: 'var(--ink)', color: 'var(--cream)' }}
              >
                Schedule Consultation
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <a
                href="tel:+18583381678"
                className="inline-flex items-center gap-2 px-9 py-4 text-[11px] tracking-[0.2em] uppercase border"
                style={{ borderColor: 'var(--hairline)', color: 'var(--mid)' }}
              >
                (858) 338-1678
              </a>
            </div>
          </div>

          {/* Right: decorative large serif text */}
          <div
            className="hidden lg:flex flex-1 items-center justify-center relative overflow-hidden"
            style={{ background: 'linear-gradient(rgba(15,13,11,0.45), rgba(15,13,11,0.45)), url(/images/locations/la-jolla.png) center/cover no-repeat' }}
            aria-hidden="true"
          >
            <span
              className="select-none pointer-events-none font-[300] leading-none tracking-[-0.05em] absolute"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '100px',
                color: 'var(--sand)',
                opacity: 0.35,
                transform: 'rotate(-8deg)',
              }}
            >
              La<br />Jolla
            </span>
            <span
              className="select-none pointer-events-none font-[300] leading-none tracking-[-0.04em]"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '26px',
                color: 'var(--sand)',
                opacity: 0.7,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
              }}
            >
              Est. 1869
            </span>
          </div>
        </div>
      </header>

      {/* FEATURED PRODUCT CARDS */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: '#fff' }}
        aria-labelledby="products-heading"
      >
        <div className="mb-14">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Recommended For La Jolla
          </p>
          <h2
            id="products-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em]"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(26px, 3.2vw, 44px)',
              color: 'var(--ink)',
            }}
          >
            The La Jolla{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Standard
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Plantation Shutters */}
          <article className="group flex flex-col" style={{ border: '1px solid var(--hairline)' }}>
            <div className="overflow-hidden" style={{ aspectRatio: '4/3', background: 'var(--warm)' }}>
              <img
                src="/images/products/Plantation Shutters.png"
                alt="Plantation Shutters"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-8">
              <h3
                className="text-[22px] font-[400] mb-4 leading-snug"
                style={{ fontFamily: 'var(--serif)', color: 'var(--ink)' }}
              >
                Plantation Shutters
              </h3>
              <p className="text-[15px] leading-[1.85]" style={{ color: 'var(--mid)' }}>
                La Jolla's architectural heritage calls for treatments with genuine permanence.
                Our plantation shutters are specified in materials and finishes approved by area
                HOAs, and their louvered design manages ocean glare while preserving every degree
                of the Pacific view.
              </p>
            </div>
          </article>

          {/* Card 2: Motorized Shading */}
          <article className="group flex flex-col" style={{ border: '1px solid var(--hairline)' }}>
            <div className="overflow-hidden" style={{ aspectRatio: '4/3', background: 'var(--warm)' }}>
              <img
                src="/images/products/Motorized Shades.png"
                alt="Motorized Shading"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-8">
              <h3
                className="text-[22px] font-[400] mb-4 leading-snug"
                style={{ fontFamily: 'var(--serif)', color: 'var(--ink)' }}
              >
                Motorized Shading
              </h3>
              <p className="text-[15px] leading-[1.85]" style={{ color: 'var(--mid)' }}>
                Floor-to-ceiling glass is the signature of La Jolla's finest homes — and it demands
                automation. Our motorized systems integrate with Lutron, Google Home, and Apple
                HomeKit so your shading adjusts with the angle of the sun, not your schedule.
              </p>
            </div>
          </article>
        </div>

        {/* Additional products row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            { img: '/images/products/Cellular Shades.png', name: 'Cellular Shades' },
            { img: '/images/products/Roller Shades.png', name: 'Roller Shades' },
            { img: '/images/products/Zebra Shades.png', name: 'Zebra Shades' },
            { img: '/images/products/Sheer Drapes.jpg', name: 'Sheer Drapes' },
          ].map((p) => (
            <div key={p.name} className="group">
              <div className="overflow-hidden mb-3" style={{ aspectRatio: '1/1', background: 'var(--warm)' }}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="text-[13px] tracking-[0.1em] uppercase" style={{ color: 'var(--mid)' }}>
                {p.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPLIANCE MADE SIMPLE */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--warm)' }}
        aria-labelledby="compliance-heading"
      >
        <div className="mb-14 max-w-[600px]">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            We Handle the Paperwork
          </p>
          <h2
            id="compliance-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em]"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(26px, 3vw, 42px)',
              color: 'var(--ink)',
            }}
          >
            Compliance Made{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Simple
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {complianceCards.map((c) => (
            <div
              key={c.title}
              className="flex flex-col p-8"
              style={{ background: 'var(--cream)', borderTop: '2px solid var(--sand)' }}
            >
              <span
                className="text-[28px] mb-5 leading-none"
                style={{ color: 'var(--sand)', fontFamily: 'var(--serif)' }}
                aria-hidden="true"
              >
                {c.icon}
              </span>
              <h3
                className="text-[17px] font-[500] mb-3 leading-snug"
                style={{ color: 'var(--ink)' }}
              >
                {c.title}
              </h3>
              <p className="text-[14px] leading-[1.8]" style={{ color: 'var(--mid)' }}>
                {c.body}
              </p>
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

      {/* CTA — dark elegant */}
      <section
        className="px-4 md:px-10 lg:px-20 py-28 flex flex-col items-center text-center"
        style={{ background: 'var(--ink)' }}
        aria-label="Schedule your La Jolla consultation"
      >
        <p
          className="inline-flex items-center gap-3 text-[11px] tracking-[0.26em] uppercase mb-7"
          style={{ color: 'var(--sand-light)' }}
        >
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          La Jolla, California
        </p>
        <h2
          className="font-[300] leading-[1.04] tracking-[-0.02em] mb-6 max-w-[600px]"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(28px, 3.8vw, 52px)',
            color: 'var(--cream)',
          }}
        >
          Schedule Your La Jolla{' '}
          <em className="italic" style={{ color: 'var(--sand-light)' }}>
            Consultation
          </em>
        </h2>
        <p
          className="text-[15px] leading-[1.9] mb-12 max-w-[520px]"
          style={{ color: 'rgba(251,251,249,0.65)' }}
        >
          One visit. Full collection samples. Transparent pricing. And complete documentation for
          any HOA or Coastal Commission submissions you may need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/booking"
            className="inline-flex items-center justify-center gap-2.5 px-10 py-4 text-[11px] tracking-[0.2em] uppercase"
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
            className="inline-flex items-center justify-center gap-2 px-10 py-4 text-[11px] tracking-[0.2em] uppercase border"
            style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(251,251,249,0.7)' }}
          >
            (858) 338-1678
          </a>
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
          Popular in La Jolla
        </p>
        <h2 className="font-[300] leading-[1.1] mb-8" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px,2.5vw,32px)', color: 'var(--ink)' }}>
          Window Treatments We Install in La Jolla
        </h2>
        <div className="flex flex-wrap gap-3 mb-8">
          <Link key="plantation" to="/catalog" search={{ product: "plantation" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Plantation Shutters</Link>
          <Link key="motorized" to="/catalog" search={{ product: "motorized" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Motorized Shading</Link>
          <Link key="sheer" to="/catalog" search={{ product: "sheer" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Shangri-La Shades</Link>
          <Link key="roman" to="/catalog" search={{ product: "roman" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Roman Shades</Link>
          <Link key="blackout-curtains" to="/catalog" search={{ product: "blackout-curtains" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Curtains & Drapery</Link>
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