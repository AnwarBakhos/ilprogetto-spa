import { createFileRoute, Link } from '@tanstack/react-router'
import { SITE_URL } from '@/lib/config'


export const Route = (createFileRoute as any)('/locations/poway')({
  head: () => ({
    meta: [
      { title: 'Custom Window Treatments Poway CA — Heat Control | iL Progetto LLC' },
      {
        name: 'description',
        content:
          "Energy-efficient window treatments for Poway's hot inland climate. Cellular shades, solar screens & motorized exterior shades — free in-home consultation.",
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Custom Window Treatments Poway CA — Heat Control | iL Progetto LLC' },
      { property: 'og:description', content: "Energy-efficient window treatments for Poway's hot inland climate. Cellular shades, solar screens & motorized exterior shades — free in-home consultation." },
      { property: 'og:image', content: `${SITE_URL}/images/og-image.jpg` },
<<<<<<< HEAD
      { property: 'og:url', content: `${SITE_URL}/locations/poway` },
=======
>>>>>>> 3f5ea77fc33d926396c7918191605622bee1c530
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `${SITE_URL}/images/og-image.jpg` },
    ],
    links: [{ rel: 'canonical', href: `${SITE_URL}/locations/poway` }],
  }),
  component: PowayPage,
})

const heatProducts = [
  {
    img: '/images/products/Cellular Shades.png',
    name: 'Cellular Shades',
    benefit: 'Traps heat before it enters',
    detail:
      'Honeycomb cells form an insulating air barrier right at the glass — keeping rooms measurably cooler without sacrificing natural light.',
  },
  {
    img: '/images/products/Sun Screens.png',
    name: 'Sun Screens',
    benefit: 'Blocks UV at the glass',
    detail:
      'Solar screen fabric cuts up to 90% of solar heat gain while preserving your view of the Poway hills and valley below.',
  },
  {
    img: '/images/products/Motorized Exterior.png',
    name: 'Motorized Exterior',
    benefit: 'Stops heat before the window',
    detail:
      'Exterior shading intercepts sun before it touches the glass — the single most effective heat-rejection solution for west and south exposures.',
  },
]

const moreProducts = [
  {
    img: '/images/products/Roller Shades.png',
    name: 'Roller Shades',
    note: 'Clean modern lines — blackout or solar fabric, your choice.',
  },
  {
    img: '/images/products/Faux Wood.jpg',
    name: 'Faux Wood Blinds',
    note: "Engineered to never warp in Poway's dry heat — ever.",
  },
  {
    img: '/images/products/Plantation Shutters.png',
    name: 'Plantation Shutters',
    note: 'Timeless light control with genuine insulation value.',
  },
]

function PowayPage() {


  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
    { '@type': 'Question', 'name': "What roller shade fabric handles the 100-degree summers in Poway without fading or sagging?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Poway's inland valley summers push temperatures to 95\u2013105 degrees regularly, and that thermal load causes significant dimensional instability in lower-grade roller shade fabrics \u2014 hem bars drop out of level, the roll develops memory distortion, and the fabric color fades visibly within a season or two. iL Progetto specifies PVC-coated fiberglass solar fabrics for Poway installations \u2014 these fabric" } },
    { '@type': 'Question', 'name': "Do zebra shades hold up in a Poway home that swings from 60-degree nights to 100-degree afternoons in summer?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Poway's extreme daily thermal cycling \u2014 cold clear nights followed by midday peaks above 100 degrees \u2014 puts real stress on window treatment fabrics that expand and contract with temperature. Zebra shades in polyester-woven construction are among the more thermally stable options: the tight weave resists expansion, and the alternating band structure doesn't buckle or develop wavy edges the way wide" } },
    { '@type': 'Question', 'name': "Are cellular shades worth it in Poway where the summers are brutal and my AC runs constantly?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Poway's summers are precisely the climate where cellular shades deliver their most measurable return \u2014 a double-cell honeycomb construction reduces solar heat gain through glass by up to 40% compared to an uncovered window, directly reducing the load on an air conditioning system that would otherwise run all afternoon. The Silverset and Garden Road neighborhoods are full of 1970s and 1980s ranch h" } },
    { '@type': 'Question', 'name': "What's a tailored-looking window treatment for a Poway ranch home with 1970s aluminum windows I don't want to replace?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Poway's Garden Road and Twin Peaks neighborhoods are full of well-maintained 1970s ranch homes where the original aluminum-frame windows are perfectly functional but architecturally unremarkable \u2014 and custom Roman shades are the most effective way to add visual warmth and tailored character without touching the window itself. A flat Roman shade in a woven linen-cotton blend transforms a utilitaria" } }
    ],
  }
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/locations/poway#localbusiness`,
    'name': 'iL Progetto LLC — Poway Window Treatments',
    'description': `Custom window treatments in Poway, CA. Free in-home consultation — we bring the full catalog to your home.`,
    'url': `${SITE_URL}/locations/poway`,
    'telephone': '+18583381678',
    'email': 'info@ilprogettollc.com',
    'priceRange': '$$',
    'image': `${SITE_URL}/images/og-image.jpg`,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Poway',
      'addressRegion': 'CA',
      'addressCountry': 'US',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.9628',
      'longitude': '-117.0359',
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Poway',
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
        style={{ background: 'linear-gradient(rgba(15,13,11,0.62), rgba(15,13,11,0.62)), url(/images/locations/poway.png) center/cover no-repeat', minHeight: '62vh', paddingTop: '76px' }}
        aria-label="Poway window treatments hero"
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

        {/* Large decorative temperature */}


        <div className="relative z-10 px-4 md:px-10 lg:px-20 pb-16 md:pb-24 max-w-[820px]">
          <p
            className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-8"
            style={{ color: 'var(--sand-light)' }}
          >
            <span className="inline-block w-9 h-px bg-current" aria-hidden="true" />
            Poway, CA — Inland San Diego
          </p>

          <h1
            className="font-[300] leading-[1.02] tracking-[-0.025em] mb-8"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(36px, 5.5vw, 70px)',
              color: 'var(--cream)',
            }}
          >
            Poway Summers{' '}
            <em className="italic" style={{ color: 'var(--sand-light)' }}>
              Hit Different
            </em>
          </h1>

          <p
            className="text-[16px] leading-[1.85] max-w-[540px] mb-10"
            style={{ color: 'rgba(251,251,249,0.72)' }}
          >
            Twenty miles inland, the marine layer never arrives. Poway sits in a natural bowl that
            collects heat — and without the coastal breeze, every degree of thermal control inside
            your home matters. Our window treatments are selected specifically for Poway's climate.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2.5 px-9 py-4 text-[11px] tracking-[0.2em] uppercase btn-interactive"
              style={{ background: 'var(--sand)', color: 'var(--ink)' }}
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
              style={{ color: 'rgba(251,251,249,0.6)' }}
            >
              (858) 338-1678
            </a>
          </div>
        </div>
      </header>

      {/* ══ HEAT-FIGHTING SOLUTIONS ═══════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--cream)' }}
        aria-labelledby="heat-solutions-heading"
      >
        <div className="mb-14">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Purpose-Built for Poway
          </p>
          <h2
            id="heat-solutions-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em]"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(28px, 3.5vw, 48px)',
            }}
          >
            Our Heat-Fighting{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Solutions
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {heatProducts.map((p, i) => (
            <article
              key={p.name}
              className="group flex flex-col"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-full overflow-hidden mb-6" style={{ aspectRatio: '4/3' }}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />
              </div>
              <div
                className="flex-1 pt-5 pb-6 px-1 border-t"
                style={{ borderColor: 'rgba(0,0,0,0.1)' }}
              >
                <p
                  className="text-[10px] tracking-[0.2em] uppercase mb-2 font-[500]"
                  style={{ color: 'var(--sand)' }}
                >
                  {p.benefit}
                </p>
                <h3
                  className="text-[22px] font-[300] mb-3 leading-[1.2]"
                  style={{ fontFamily: 'var(--serif)' }}
                >
                  {p.name}
                </h3>
                <p className="text-[14px] leading-[1.75]" style={{ color: 'var(--mid)' }}>
                  {p.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ══ MORE PRODUCTS ═════════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-20"
        style={{ background: 'var(--warm)' }}
        aria-labelledby="more-poway-heading"
      >
        <h2
          id="more-poway-heading"
          className="font-[300] leading-[1.06] tracking-[-0.015em] mb-12"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(24px, 2.8vw, 38px)',
          }}
        >
          Also Popular in{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>
            Poway Homes
          </em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {moreProducts.map((p, i) => (
            <article
              key={p.name}
              className="group flex items-center gap-5 p-5"
              style={{ background: 'var(--cream)', transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex-shrink-0 w-24 h-24 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500"
                />
              </div>
              <div>
                <h3
                  className="text-[17px] font-[400] mb-1.5 leading-[1.25]"
                  style={{ fontFamily: 'var(--serif)' }}
                >
                  {p.name}
                </h3>
                <p className="text-[12px] leading-[1.65]" style={{ color: 'var(--mid)' }}>
                  {p.note}
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
        className="px-4 md:px-10 lg:px-20 py-28 text-center"
        style={{ background: 'var(--ink)' }}
        aria-label="Book a consultation"
      >
        <p
          className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-6"
          style={{ color: 'var(--sand-light)' }}
        >
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          Free In-Home Visit · Poway
        </p>
        <h2
          className="font-[300] leading-[1.05] tracking-[-0.02em] mb-6"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(30px, 4vw, 54px)',
            color: 'var(--cream)',
          }}
        >
          Beat the Poway{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>
            Heat
          </em>
        </h2>
        <p
          className="text-[15px] leading-[1.85] max-w-[480px] mx-auto mb-10"
          style={{ color: 'rgba(251,251,249,0.65)' }}
        >
          Our designer visits your home with samples, measurements, and transparent pricing — all
          in one appointment. No showroom required. Call{' '}
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
      </section>

    </div>
      {/* ── Related Products ──────────────────────────────────────── */}
      <section
        className="px-4 md:px-10 lg:px-20 py-16 border-t"
        style={{ background: 'var(--cream)', borderColor: 'var(--hairline)' }}
        aria-label="Related window treatment products"
      >
        <p className="text-[11px] tracking-[0.22em] uppercase mb-4" style={{ color: 'var(--sand)' }}>
          Popular in Poway
        </p>
        <h2 className="font-[300] leading-[1.1] mb-8" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px,2.5vw,32px)', color: 'var(--ink)' }}>
          Window Treatments We Install in Poway
        </h2>
        <div className="flex flex-wrap gap-3 mb-8">
          <Link key="cellular" to="/catalog" search={{ product: "cellular" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Cellular Shades</Link>
          <Link key="sun-screens" to="/catalog" search={{ product: "sun-screens" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Solar Screens</Link>
          <Link key="motorized-exterior" to="/catalog" search={{ product: "motorized-exterior" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Motorized Exterior</Link>
          <Link key="roller" to="/catalog" search={{ product: "roller" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Roller Shades</Link>
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