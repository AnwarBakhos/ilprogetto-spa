import { createFileRoute, Link } from '@tanstack/react-router'
import { SITE_URL } from '@/lib/config'


export const Route = (createFileRoute as any)('/locations/el-cajon')({
  head: () => ({
    meta: [
      { title: 'Custom Window Treatments El Cajon CA — Heat Solutions | iL Progetto LLC' },
      {
        name: 'description',
        content:
          "El Cajon's heat demands more. Cellular shades, solar screens & motorized exterior shading for 100°F+ summers. Free in-home consultation by iL Progetto LLC.",
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Custom Window Treatments El Cajon CA — Heat Solutions | iL Progetto LLC' },
      { property: 'og:description', content: "El Cajon's heat demands more. Cellular shades, solar screens & motorized exterior shading for 100°F+ summers. Free in-home consultation by iL Progetto LLC." },
      { property: 'og:image', content: `${SITE_URL}/images/og-image.jpg` },
<<<<<<< HEAD
      { property: 'og:url', content: `${SITE_URL}/locations/el-cajon` },
=======
>>>>>>> 3f5ea77fc33d926396c7918191605622bee1c530
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `${SITE_URL}/images/og-image.jpg` },
    ],
    links: [{ rel: 'canonical', href: `${SITE_URL}/locations/el-cajon` }],
  }),
  component: ElCajonPage,
})

const supportProducts = [
  {
    img: '/images/products/Sun Screens.png',
    name: 'Sun Screens',
    desc: 'Block up to 90% of solar heat gain while preserving your outward view.',
  },
  {
    img: '/images/products/Motorized Exterior.png',
    name: 'Motorized Exterior',
    desc: "Intercept the sun before it reaches the glass — El Cajon's most effective shading solution.",
  },
  {
    img: '/images/products/Roller Shades.png',
    name: 'Roller Shades',
    desc: 'Solar or blackout fabric on a clean cassette system. Works in any room.',
  },
  {
    img: '/images/products/Faux Wood.jpg',
    name: 'Faux Wood Blinds',
    desc: 'Moisture and heat-resistant alternative to real wood. Won\'t warp or crack in El Cajon\'s 100°F+ summers — ideal for west-facing windows.',
  },
  {
    img: '/images/products/Plantation Shutters.png',
    name: 'Plantation Shutters',
    desc: 'Solid louvered panels add an insulating air barrier between the glass and the room, reducing heat transfer by up to 45% compared to uncovered windows.',
  },
]

function ElCajonPage() {


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
    '@id': `${SITE_URL}/locations/el-cajon#localbusiness`,
    'name': 'iL Progetto LLC — El Cajon Window Treatments',
    'description': `Custom window treatments in El Cajon, CA. Free in-home consultation — we bring the full catalog to your home.`,
    'url': `${SITE_URL}/locations/el-cajon`,
    'telephone': '+18583381678',
    'email': 'info@ilprogettollc.com',
    'priceRange': '$$',
    'image': `${SITE_URL}/images/og-image.jpg`,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'El Cajon',
      'addressRegion': 'CA',
      'addressCountry': 'US',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.7948',
      'longitude': '-116.9625',
    },
    'areaServed': {
      '@type': 'City',
      'name': 'El Cajon',
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

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <header
        className="relative flex flex-col justify-end overflow-hidden"
        style={{
          background: 'linear-gradient(rgba(15,13,11,0.62), rgba(15,13,11,0.62)), url(/images/locations/el-cajon.png) center/cover no-repeat',
          minHeight: '64vh',
          paddingTop: '76px',
        }}
        aria-label="El Cajon window treatments hero"
      >


        <div className="relative z-10 px-4 md:px-10 lg:px-20 pb-16 md:pb-24 max-w-[860px]">
          <p
            className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-8"
            style={{ color: '#d4b896' }}
          >
            <span className="inline-block w-9 h-px bg-current" aria-hidden="true" />
            El Cajon, CA — East County
          </p>

          <h1
            className="font-[300] leading-[1.03] tracking-[-0.025em] mb-8"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(34px, 5vw, 66px)',
              color: 'var(--cream)',
            }}
          >
            El Cajon Runs Hot.{' '}
            <br className="hidden md:block" />
            <em className="italic" style={{ color: '#d4b896' }}>
              Your Windows Don't Have To.
            </em>
          </h1>

          <p
            className="text-[16px] leading-[1.85] max-w-[560px] mb-10"
            style={{ color: 'rgba(251,251,249,0.68)' }}
          >
            El Cajon regularly hits 100°F+ in summer — running 5 to 15 degrees hotter than the
            coast. Ranch homes and hillside properties here were built for a breezier era. Today,
            the right window treatments are the fastest upgrade you can make.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2.5 px-9 py-4 text-[11px] tracking-[0.2em] uppercase btn-interactive"
              style={{ background: '#c5a572', color: '#1a0e00' }}
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
              style={{ color: 'rgba(251,251,249,0.55)' }}
            >
              (858) 338-1678
            </a>
          </div>
        </div>
      </header>

      {/* ══ FEATURED PRODUCT — CELLULAR SHADES ═══════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--cream)' }}
        aria-labelledby="featured-heading"
      >
        <div className="mb-10">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Featured Solution
          </p>
          <h2
            id="featured-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em]"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(26px, 3.2vw, 44px)',
            }}
          >
            The #1 Choice for{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              El Cajon Homes
            </em>
          </h2>
        </div>

        <article className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image — 16:9 */}
          <div className="w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
            <img
              src="/images/products/Cellular Shades.png"
              alt="Cellular Shades"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content panel */}
          <div
            className="flex flex-col justify-center px-8 md:px-12 py-10"
            style={{ background: 'var(--warm)' }}
          >
            <h3
              className="text-[30px] font-[300] mb-4 leading-[1.15]"
              style={{ fontFamily: 'var(--serif)' }}
            >
              Cellular Shades
            </h3>
            <p className="text-[15px] leading-[1.8] mb-8" style={{ color: 'var(--mid)' }}>
              Honeycomb construction creates a thermal buffer between the glass and your living
              space. In El Cajon, that air pocket works as a heat shield on every sun-facing window.
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              {[
                'Reduces solar heat gain by up to 40% on south/west exposures',
                'Available in single, double, or triple-cell for maximum insulation',
                'Top-down/bottom-up options for privacy and light at the same time',
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ background: 'var(--sand)' }}
                    aria-hidden="true"
                  />
                  <span className="text-[14px] leading-[1.7]" style={{ color: 'var(--mid)' }}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              to="/booking"
              className="self-start inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase"
              style={{ color: 'var(--sand)' }}
            >
              Get a quote <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>
      </section>

      {/* ══ THREE MORE PRODUCTS ═══════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-20"
        style={{ background: 'var(--warm)' }}
        aria-labelledby="more-el-cajon-heading"
      >
        <h2
          id="more-el-cajon-heading"
          className="font-[300] leading-[1.06] tracking-[-0.015em] mb-12"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(24px, 2.8vw, 38px)',
          }}
        >
          More Ways to Cool{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>
            Your Home
          </em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportProducts.map((p, i) => (
            <article
              key={p.name}
              className="group flex flex-col"
              style={{ background: 'var(--cream)', transitionDelay: `${i * 0.09}s` }}
            >
              <div className="w-full overflow-hidden" style={{ aspectRatio: '3/2' }}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-[20px] font-[300] mb-2 leading-[1.2]"
                  style={{ fontFamily: 'var(--serif)' }}
                >
                  {p.name}
                </h3>
                <p className="text-[13px] leading-[1.75]" style={{ color: 'var(--mid)' }}>
                  {p.desc}
                </p>
              </div>
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
        className="px-4 md:px-10 lg:px-20 py-28"
        style={{ background: 'linear-gradient(135deg, #1a0e00 0%, #2d1a00 100%)' }}
        aria-label="Book a consultation"
      >
        <div className="max-w-[660px]">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-6"
            style={{ color: '#d4b896' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Free In-Home Visit · El Cajon
          </p>
          <h2
            className="font-[300] leading-[1.05] tracking-[-0.02em] mb-6"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(30px, 4vw, 52px)',
              color: 'var(--cream)',
            }}
          >
            Ready to Make Your Home{' '}
            <em className="italic" style={{ color: '#c5a572' }}>
              Comfortable Again?
            </em>
          </h2>
          <p
            className="text-[15px] leading-[1.85] mb-10"
            style={{ color: 'rgba(251,251,249,0.62)' }}
          >
            Our designer visits your home with the full collection — samples, measurements, and
            pricing — all in one appointment. Call{' '}
            <a href="tel:+18583381678" className="underline" style={{ color: '#d4b896' }}>
              (858) 338-1678
            </a>{' '}
            or book a free consultation online.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2.5 px-10 py-4 text-[11px] tracking-[0.2em] uppercase btn-interactive"
            style={{ background: '#c5a572', color: '#1a0e00' }}
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
      {/* ── Related Products ──────────────────────────────────────── */}
      <section
        className="px-4 md:px-10 lg:px-20 py-16 border-t"
        style={{ background: 'var(--cream)', borderColor: 'var(--hairline)' }}
        aria-label="Related window treatment products"
      >
        <p className="text-[11px] tracking-[0.22em] uppercase mb-4" style={{ color: 'var(--sand)' }}>
          Popular in El Cajon
        </p>
        <h2 className="font-[300] leading-[1.1] mb-8" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px,2.5vw,32px)', color: 'var(--ink)' }}>
          Window Treatments We Install in El Cajon
        </h2>
        <div className="flex flex-wrap gap-3 mb-8">
          <Link key="roller" to="/catalog" search={{ product: "roller" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Roller Shades</Link>
          <Link key="cellular" to="/catalog" search={{ product: "cellular" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Cellular Shades</Link>
          <Link key="faux-wood" to="/catalog" search={{ product: "faux-wood" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Faux Wood Blinds</Link>
          <Link key="zebra" to="/catalog" search={{ product: "zebra" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Zebra Shades</Link>
          <Link key="plantation" to="/catalog" search={{ product: "plantation" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Plantation Shutters</Link>
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