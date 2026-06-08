import { createFileRoute, Link } from '@tanstack/react-router'
import { SITE_URL } from '@/lib/config'


// ─── Route ─────────────────────────────────────────────────────────────────────
export const Route = (createFileRoute as any)('/locations/solana-beach')({
  head: () => ({
    meta: [
      { title: 'Window Treatments Solana Beach CA — Privacy & Light | iL Progetto LLC' },
      {
        name: 'description',
        content:
          "Custom window treatments for Solana Beach's tight beach community — privacy without sacrificing natural light. Zebra shades, roller shades & sheer options. Free consultation.",
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: 'Window Treatments Solana Beach CA — Privacy & Light | iL Progetto LLC',
      },
      {
        property: 'og:description',
        content:
          "Custom window treatments for Solana Beach's tight beach community — privacy without sacrificing natural light. Zebra shades, roller shades & sheer options. Free consultation.",
      },
      { property: 'og:url', content: `${SITE_URL}/locations/solana-beach` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `${SITE_URL}/images/og-image.jpg` },
    ],
    links: [{ rel: 'canonical', href: `${SITE_URL}/locations/solana-beach` }],
  }),
  component: SolanaBeachPage,
})

// ─── Data ──────────────────────────────────────────────────────────────────────
const DAY_PRODUCTS = [
  {
    name: 'Zebra Shades',
    img: '/images/products/Zebra Shades.png',
    note: 'Alternating sheer and solid bands let you dial light exactly.',
  },
  {
    name: 'Sheer Drapes',
    img: '/images/products/Sheer Drapes.jpg',
    note: 'Diffuse glare while keeping ocean views open all day.',
  },
]

const NIGHT_PRODUCTS = [
  {
    name: 'Roller Shades',
    img: '/images/products/Roller Shades.png',
    note: 'Blackout or light-filtering — total privacy at the touch of a finger.',
  },
  {
    name: 'Cellular Shades',
    img: '/images/products/Cellular Shades.png',
    note: 'Honeycomb construction blocks light and insulates against marine chill.',
  },
]

const ROW_PRODUCTS = [
  { name: 'Zebra Shades',    img: '/images/products/Zebra Shades.png' },
  { name: 'Roller Shades',   img: '/images/products/Roller Shades.png' },
  { name: 'Sheer Drapes',    img: '/images/products/Sheer Drapes.jpg' },
  { name: 'Cellular Shades', img: '/images/products/Cellular Shades.png' },
]

// ─── Page ──────────────────────────────────────────────────────────────────────
function SolanaBeachPage() {


  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
    { '@type': 'Question', 'name': "What roller shade gives me daytime privacy in Solana Beach where my neighbors are right next to me?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Solana Beach's narrow lot widths \u2014 particularly in the Solana Hills and Fletcher Cove neighborhoods \u2014 mean that adjacent homes are close enough that standard light-filtering shades provide inadequate daytime privacy. iL Progetto recommends 1\u20133% openness solar mesh fabrics that are dense enough to block interior views from neighboring windows during daylight hours while still admitting soft, even l" } },
    { '@type': 'Question', 'name': "Can I get privacy during the day in my Solana Beach home without making the rooms feel dark?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Zebra shades are specifically designed for this balance. In Solana Beach's tightly spaced Solana Hills and Fletcher Cove properties, shifting from the sheer band position to the solid band alignment provides meaningful daytime privacy from neighboring windows without dimming the room significantly \u2014 the solid bands block sightlines at eye level while the sheer bands above and below continue to adm" } },
    { '@type': 'Question', 'name': "Do cellular shades provide enough privacy for a Solana Beach home on a narrow lot?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Room-darkening cellular shades in opaque constructions provide excellent daytime privacy on Solana Beach's narrow lots while delivering the insulating air-pocket benefit that top-down/bottom-up configurations make even more useful in this context. iL Progetto's top-down/bottom-up cellular option lets Solana Beach homeowners admit diffused sky light through the upper sash while keeping the lower ha" } },
    { '@type': 'Question', 'name': "What window treatment fits the design-conscious expectation in Solana Beach near the Cedros Design District?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Solana Beach's proximity to the Cedros Design District creates a homeowner demographic that notices and evaluates interior design choices \u2014 roman shades in trade-quality fabrics are one of the treatments that reads as intentional design rather than functional purchase. iL Progetto sources fabrics from the same trade mills that Cedros-adjacent interior designers work with, and constructs shades wit" } }
    ],
  }
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/locations/solana-beach#localbusiness`,
    'name': 'iL Progetto LLC — Solana Beach Window Treatments',
    'description': `Custom window treatments in Solana Beach, CA. Free in-home consultation — we bring the full catalog to your home.`,
    'url': `${SITE_URL}/locations/solana-beach`,
    'telephone': '+18583381678',
    'email': 'info@ilprogettollc.com',
    'priceRange': '$$',
    'image': `${SITE_URL}/images/og-image.jpg`,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Solana Beach',
      'addressRegion': 'CA',
      'addressCountry': 'US',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.9912',
      'longitude': '-117.2713',
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Solana Beach',
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
        style={{ background: 'linear-gradient(rgba(15,13,11,0.62), rgba(15,13,11,0.62)), url(/images/locations/solana-beach.jpg) center/cover no-repeat', minHeight: '60vh', paddingTop: '76px' }}
        aria-label="Solana Beach window treatments"
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



        <div className="relative z-10 px-4 md:px-10 lg:px-20 pb-16 md:pb-24 max-w-[860px]">
          <p
            className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-5"
            style={{ color: 'var(--sand-light)' }}
          >
            <span className="inline-block w-9 h-px bg-current" aria-hidden="true" />
            Solana Beach · Eden Gardens · La Colonia
          </p>

          <h1
            className="font-[300] leading-[1.02] tracking-[-0.02em] mb-7"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(36px, 5vw, 68px)',
              color: 'var(--cream)',
            }}
          >
            Natural Light.{' '}
            <em className="italic" style={{ color: 'var(--sand-light)' }}>
              Zero Compromise
            </em>{' '}
            on Privacy.
          </h1>

          <p
            className="text-[16px] leading-[1.85] max-w-[580px] mb-10"
            style={{ color: 'rgba(251,251,249,0.72)' }}
          >
            Solana Beach packs a lot of living into a tight stretch of coast. Homes sit close
            together, lots run narrow, and the Pacific pushes a brilliant, hard light through your
            windows from sunrise to sunset. The challenge isn't choosing between light and privacy —
            it's having both at the same time. That's exactly what we design for.
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

      {/* ══ DAY / NIGHT TWO-COLUMN ════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--cream)' }}
        aria-labelledby="modes-heading"
      >
        <p
          className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
          style={{ color: 'var(--sand)' }}
        >
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          Privacy on Your Schedule
        </p>

        <h2
          id="modes-heading"
          className="font-[300] leading-[1.06] tracking-[-0.015em] mb-14"
          style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3vw, 42px)', color: 'var(--ink)' }}
        >
          The Right Treatment{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>for Every Hour</em>
        </h2>

        <div
          className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x"
          style={{ borderColor: 'rgba(0,0,0,0.1)' }}
        >
          {/* DAY MODE */}
          <div className="pr-0 md:pr-14 pb-14 md:pb-0">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'var(--sand-light)' }}
                aria-hidden="true"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              </div>
              <h3
                className="text-[18px] font-[400] tracking-[0.04em] uppercase"
                style={{ fontFamily: 'var(--sans)', color: 'var(--ink)', letterSpacing: '0.1em', fontSize: '12px' }}
              >
                Day Mode
              </h3>
            </div>

            <p className="text-[14px] leading-[1.8] mb-8" style={{ color: 'var(--mid)' }}>
              During daylight hours, Solana Beach living is all about openness. You want the ocean
              glimmer, the canyon breeze, and the warmth — without your neighbor's direct sight line
              into your living room.
            </p>

            <div className="flex flex-col gap-5">
              {DAY_PRODUCTS.map(p => (
                <div key={p.name} className="flex gap-4 items-start">
                  <div
                    className="flex-shrink-0 overflow-hidden"
                    style={{ width: '80px', height: '60px' }}
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p
                      className="text-[14px] font-[500] mb-1"
                      style={{ fontFamily: 'var(--serif)', color: 'var(--ink)' }}
                    >
                      {p.name}
                    </p>
                    <p className="text-[13px] leading-[1.7]" style={{ color: 'var(--mid)' }}>
                      {p.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NIGHT MODE */}
          <div className="pl-0 md:pl-14 pt-14 md:pt-0">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'var(--ink)' }}
                aria-hidden="true"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--cream)" strokeWidth="1.5">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </div>
              <h3
                className="text-[12px] font-[400] tracking-[0.1em] uppercase"
                style={{ fontFamily: 'var(--sans)', color: 'var(--ink)' }}
              >
                Night Mode
              </h3>
            </div>

            <p className="text-[14px] leading-[1.8] mb-8" style={{ color: 'var(--mid)' }}>
              Once the sun sets, the dynamic flips. Street lights, porch lights, and illuminated
              windows mean your interior becomes visible from outside. Full privacy requires a
              window treatment that closes completely with zero light gaps.
            </p>

            <div className="flex flex-col gap-5">
              {NIGHT_PRODUCTS.map(p => (
                <div key={p.name} className="flex gap-4 items-start">
                  <div
                    className="flex-shrink-0 overflow-hidden"
                    style={{ width: '80px', height: '60px' }}
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p
                      className="text-[14px] font-[500] mb-1"
                      style={{ fontFamily: 'var(--serif)', color: 'var(--ink)' }}
                    >
                      {p.name}
                    </p>
                    <p className="text-[13px] leading-[1.7]" style={{ color: 'var(--mid)' }}>
                      {p.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PRODUCT ROW ═══════════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--ink)' }}
        aria-labelledby="products-heading"
      >
        <p
          className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
          style={{ color: 'var(--sand-light)' }}
        >
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          Our Solana Beach Favorites
        </p>

        <h2
          id="products-heading"
          className="font-[300] leading-[1.06] tracking-[-0.015em] mb-14"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(24px, 2.8vw, 38px)',
            color: 'var(--cream)',
          }}
        >
          Four Products. Every{' '}
          <em className="italic" style={{ color: 'var(--sand-light)' }}>Light Scenario.</em>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ROW_PRODUCTS.map((p, i) => (
            <article
              key={p.name}
              className="group overflow-hidden"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div
                className="p-4"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              >
                <h3
                  className="text-[13px] font-[400] leading-snug"
                  style={{ fontFamily: 'var(--serif)', color: 'var(--cream)' }}
                >
                  {p.name}
                </h3>
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
        style={{ background: 'var(--cream)' }}
        aria-label="Consultation CTA"
      >
        <div className="max-w-[680px] mx-auto text-center">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-6"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Ready to Begin?
          </p>

          <h2
            className="font-[300] leading-[1.06] tracking-[-0.015em] mb-6"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              color: 'var(--ink)',
            }}
          >
            Free In-Home Consultation{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>in Solana Beach</em>
          </h2>

          <p
            className="text-[15px] leading-[1.85] mb-12"
            style={{ color: 'var(--mid)' }}
          >
            We come to your home with samples of every product that works for your layout and
            light conditions — so you make a decision with confidence, not guesswork.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-5">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2.5 px-10 py-4 text-[11px] tracking-[0.2em] uppercase btn-interactive"
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
      </section>

    </div>
      {/* ── Related Products ──────────────────────────────────────── */}
      <section
        className="px-4 md:px-10 lg:px-20 py-16 border-t"
        style={{ background: 'var(--cream)', borderColor: 'var(--hairline)' }}
        aria-label="Related window treatment products"
      >
        <p className="text-[11px] tracking-[0.22em] uppercase mb-4" style={{ color: 'var(--sand)' }}>
          Popular in Solana Beach
        </p>
        <h2 className="font-[300] leading-[1.1] mb-8" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px,2.5vw,32px)', color: 'var(--ink)' }}>
          Window Treatments We Install in Solana Beach
        </h2>
        <div className="flex flex-wrap gap-3 mb-8">
          <Link key="roller" to="/catalog" search={{ product: "roller" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Roller Shades</Link>
          <Link key="zebra" to="/catalog" search={{ product: "zebra" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Zebra Shades</Link>
          <Link key="plantation" to="/catalog" search={{ product: "plantation" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Plantation Shutters</Link>
          <Link key="motorized" to="/catalog" search={{ product: "motorized" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Motorized Shading</Link>
          <Link key="sheer" to="/catalog" search={{ product: "sheer" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Sheer Shades</Link>
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