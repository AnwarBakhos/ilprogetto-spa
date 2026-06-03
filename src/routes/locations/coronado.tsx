import { createFileRoute, Link } from '@tanstack/react-router'
import { SITE_URL } from '@/lib/config'


export const Route = (createFileRoute as any)('/locations/coronado')({
  head: () => ({
    meta: [
      { title: 'Custom Window Treatments Coronado, CA | iL Progetto LLC' },
      {
        name: 'description',
        content:
          "Marine-grade window treatments for Coronado's island climate. Salt-air resistant hardware, architecturally-appropriate plantation shutters & motorized shading. Free in-home consultation.",
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Custom Window Treatments Coronado, CA | iL Progetto LLC' },
      {
        property: 'og:description',
        content:
          "Marine-grade window treatments for Coronado's island climate. Salt-air resistant hardware, architecturally-appropriate plantation shutters & motorized shading. Free in-home consultation.",
      },
      { property: 'og:image', content: `${SITE_URL}/images/og-image.jpg` },
      { property: 'og:url', content: `${SITE_URL}/locations/coronado` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `${SITE_URL}/images/og-image.jpg` },
    ],
    links: [{ rel: 'canonical', href: `${SITE_URL}/locations/coronado` }],
  }),
  component: CoronadoPage,
})

const NAVY = '#0a1628'
const NAVY_LIGHT = '#0f1f3a'

const islandProducts = [
  {
    img: '/images/products/Plantation Shutters.png',
    name: 'Plantation Shutters',
    saltReason:
      'Composite and vinyl louver options are completely impervious to salt-air corrosion. They won\'t warp, rust, or degrade — even yards from the waterfront.',
  },
  {
    img: '/images/products/Roller Shades.png',
    name: 'Roller Shades',
    saltReason:
      'Marine-grade aluminum roller tubes and stainless hardware mean smooth operation year after year. Solar fabrics block UV without fading in Coronado\'s intense waterfront sun.',
  },
  {
    img: '/images/products/Motorized Shades.png',
    name: 'Motorized Shades',
    saltReason:
      'Sealed motor housings and corrosion-resistant drive components ensure reliable automation in coastal environments where standard motors fail within months.',
  },
  {
    img: '/images/products/Cellular Shades.png',
    name: 'Cellular Shades',
    saltReason:
      'Honeycomb air pockets insulate against ocean breezes and marine-layer chill while requiring no metal hardware exposed to salt air.',
  },
  {
    img: '/images/products/Roman Shades.jpg',
    name: 'Roman Shades',
    saltReason:
      'Premium fabric panels with concealed headrail hardware — nothing exposed to corrode. Pairs beautifully with Coronado Craftsman and Victorian interiors.',
  },
  {
    img: '/images/products/Zebra Shades.png',
    name: 'Zebra Shades',
    saltReason:
      'Alternating sheer and solid bands give you full privacy or diffused ocean light with a single pull — all on salt-air rated components.',
  },
]

function CoronadoPage() {


  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
    { '@type': 'Question', 'name': "How does the free in-home consultation work?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Our designer visits your home with the full catalog \u2014 every fabric, every color, every operating system. We measure your windows, show you samples in your actual light, and provide a same-visit quote. No showroom trip, no obligation." } },
    { '@type': 'Question', 'name': "Do you install motorized window treatments?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Yes. We install motorized shading systems compatible with Alexa, Google Home, Apple HomeKit, Lutron, and Control4. Our team handles wiring, programming, and smart home integration." } },
    { '@type': 'Question', 'name': "How long does installation take?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Most installations are completed in a single visit of 2\u20134 hours depending on the number of windows. Custom products are typically ready within 2\u20133 weeks of ordering." } },
    { '@type': 'Question', 'name': "Are your products custom-made?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Yes \u2014 every product is custom-manufactured to the exact dimensions of your windows. We measure on-site and order directly from the manufacturer. No off-the-shelf sizes." } }
    ],
  }
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/locations/coronado#localbusiness`,
    'name': 'iL Progetto LLC — Coronado Window Treatments',
    'description': `Custom window treatments in Coronado, CA. Free in-home consultation — we bring the full catalog to your home.`,
    'url': `${SITE_URL}/locations/coronado`,
    'telephone': '+18583381678',
    'email': 'info@ilprogettollc.com',
    'priceRange': '$$',
    'image': `${SITE_URL}/images/og-image.jpg`,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Coronado',
      'addressRegion': 'CA',
      'addressCountry': 'US',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.6859',
      'longitude': '-117.1831',
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Coronado',
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

      {/* HERO — deep navy with gold top border */}
      <header
        className="relative flex flex-col justify-end overflow-hidden"
        style={{
          background: 'linear-gradient(rgba(15,13,11,0.62), rgba(15,13,11,0.62)), url(/images/locations/coronado.png) center/cover no-repeat',
          minHeight: '70vh',
          borderTop: '3px solid var(--sand)',
        }}
        aria-label="Coronado window treatments"
      >
        {/* subtle wave pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(180deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 48px)',
          }}
          aria-hidden="true"
        />


        <div className="relative z-10 px-4 md:px-10 lg:px-20 pb-20 max-w-[840px]">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.26em] uppercase mb-6"
            style={{ color: 'var(--sand-light)' }}
          >
            <span className="inline-block w-10 h-px bg-current" aria-hidden="true" />
            Coronado Island, California
          </p>

          <h1
            className="font-[300] leading-[1.0] tracking-[-0.03em] mb-5"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(44px, 7vw, 88px)',
              color: 'var(--cream)',
            }}
          >
            The Island{' '}
            <em className="italic" style={{ color: 'var(--sand-light)' }}>
              Standard
            </em>
          </h1>

          <p
            className="text-[17px] leading-[1.85] mb-10 max-w-[560px]"
            style={{ color: 'rgba(251,251,249,0.65)' }}
          >
            Coronado homes demand marine-grade hardware and architectural precision.
            Salt air, humidity, and intense waterfront UV don't forgive standard window
            treatments — and neither do Coronado's discerning homeowners.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2.5 px-9 py-4 text-[11px] tracking-[0.2em] uppercase"
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
              style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(251,251,249,0.65)' }}
            >
              (858) 338-1678
            </a>
          </div>
        </div>
      </header>

      {/* MARINE-GRADE CALLOUT BANNER */}
      <section
        className="px-4 md:px-10 lg:px-20 py-20"
        style={{ background: 'var(--cream)' }}
        aria-labelledby="marine-heading"
      >
        <div
          className="flex flex-col md:flex-row items-start gap-8 p-10 md:p-14"
          style={{
            background: 'var(--warm)',
            borderLeft: '4px solid var(--sand)',
          }}
        >
          <div className="shrink-0">
            <span
              className="block text-[40px] leading-none"
              style={{ color: 'var(--sand)', fontFamily: 'var(--serif)' }}
              aria-hidden="true"
            >
              ⚓
            </span>
          </div>
          <div>
            <p
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase mb-4"
              style={{ color: 'var(--sand)' }}
            >
              Why It Matters on Coronado
            </p>
            <h2
              id="marine-heading"
              className="font-[400] leading-[1.1] mb-4"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(22px, 2.5vw, 32px)',
                color: 'var(--ink)',
              }}
            >
              Marine-Grade Everything
            </h2>
            <p className="text-[15px] leading-[1.85] mb-4" style={{ color: 'var(--mid)' }}>
              Island salt air doesn't just weather hardware — it corrodes it. Standard window
              treatment brackets, roller tubes, and motor housings are typically rated for inland
              environments. On Coronado, they can fail within 18 to 24 months, leaving you with
              seized mechanisms, rust stains on walls, and voided warranties.
            </p>
            <p className="text-[15px] leading-[1.85]" style={{ color: 'var(--mid)' }}>
              Every product we specify for Coronado installations uses marine-grade or composite
              hardware — stainless fasteners, sealed motors, UV-stabilized fabrics — rated for
              continuous coastal exposure. It's not an upgrade; it's the baseline we consider
              appropriate for island homes.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT CARDS */}
      <section
        className="px-4 md:px-10 lg:px-20 pb-24"
        style={{ background: 'var(--cream)' }}
        aria-labelledby="island-products-heading"
      >
        <div className="mb-14">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Built for the Island Climate
          </p>
          <h2
            id="island-products-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em]"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(26px, 3.2vw, 44px)',
              color: 'var(--ink)',
            }}
          >
            Salt-Air{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Ready
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {islandProducts.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col"
              style={{ border: '1px solid var(--hairline)' }}
            >
              <div
                className="overflow-hidden"
                style={{ aspectRatio: '4/3', background: 'var(--warm)' }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col flex-1 p-7">
                {/* marine badge */}
                <span
                  className="inline-block self-start text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 mb-4"
                  style={{ background: NAVY, color: 'var(--sand-light)' }}
                >
                  Marine-Grade
                </span>
                <h3
                  className="text-[18px] font-[400] mb-3 leading-snug"
                  style={{ fontFamily: 'var(--serif)', color: 'var(--ink)' }}
                >
                  {p.name}
                </h3>
                <p className="text-[14px] leading-[1.8]" style={{ color: 'var(--mid)' }}>
                  {p.saltReason}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* additional product strip */}
        <div
          className="flex flex-col sm:flex-row gap-5 mt-10 p-8"
          style={{ background: 'var(--warm)', borderTop: '1px solid var(--hairline)' }}
        >
          <p
            className="text-[12px] tracking-[0.15em] uppercase shrink-0"
            style={{ color: 'var(--sand)' }}
          >
            Also Available:
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              'Zebra Shades',
              'Cellular Shades',
              'Woven Wood Shades',
              'Sheer Drapes',
              'Roman Shades',
            ].map((name) => (
              <span
                key={name}
                className="text-[13px] leading-[1.6]"
                style={{ color: 'var(--mid)' }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST ROW */}
      <section
        className="px-4 md:px-10 lg:px-20 py-16"
        style={{ background: 'var(--warm)', borderTop: '1px solid var(--hairline)' }}
        aria-label="Trust indicators"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '5★', label: 'Google Rating' },
            { value: '1 Day', label: 'Installation' },
            { value: 'Licensed', label: '& Insured' },
            { value: 'Free', label: 'Consultation' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <span
                className="block font-[300] leading-none mb-1"
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(28px, 3.5vw, 40px)',
                  color: 'var(--sand)',
                }}
              >
                {item.value}
              </span>
              <span
                className="text-[11px] tracking-[0.16em] uppercase"
                style={{ color: 'var(--mid)' }}
              >
                {item.label}
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

      {/* CTA — navy */}
      <section
        className="px-4 md:px-10 lg:px-20 py-28 flex flex-col items-center text-center"
        style={{ background: NAVY, borderTop: '3px solid var(--sand)' }}
        aria-label="Protect your island home"
      >
        <p
          className="inline-flex items-center gap-3 text-[11px] tracking-[0.26em] uppercase mb-7"
          style={{ color: 'var(--sand-light)' }}
        >
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          Coronado Island
        </p>
        <h2
          className="font-[300] leading-[1.04] tracking-[-0.025em] mb-6 max-w-[620px]"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(30px, 4.2vw, 56px)',
            color: 'var(--cream)',
          }}
        >
          Protect Your{' '}
          <em className="italic" style={{ color: 'var(--sand-light)' }}>
            Island Home
          </em>
        </h2>
        <p
          className="text-[15px] leading-[1.9] mb-12 max-w-[500px]"
          style={{ color: 'rgba(251,251,249,0.60)' }}
        >
          Don't let standard hardware fail in Coronado's demanding climate. Our free in-home
          consultation covers product selection, marine-grade hardware specification, and
          transparent installation pricing.
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
            style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(251,251,249,0.65)' }}
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
          Popular in Coronado
        </p>
        <h2 className="font-[300] leading-[1.1] mb-8" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px,2.5vw,32px)', color: 'var(--ink)' }}>
          Window Treatments We Install in Coronado
        </h2>
        <div className="flex flex-wrap gap-3 mb-8">
          <Link key="plantation" to="/catalog" search={{ product: "plantation" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Plantation Shutters</Link>
          <Link key="motorized" to="/catalog" search={{ product: "motorized" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Motorized Shading</Link>
          <Link key="sheer" to="/catalog" search={{ product: "sheer" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Shangri-La Shades</Link>
          <Link key="blackout-curtains" to="/catalog" search={{ product: "blackout-curtains" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Curtains & Drapery</Link>
          <Link key="roller" to="/catalog" search={{ product: "roller" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Roller Shades</Link>
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