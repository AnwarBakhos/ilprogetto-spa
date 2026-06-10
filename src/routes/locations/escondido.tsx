import { createFileRoute, Link } from '@tanstack/react-router'
import { SITE_URL } from '@/lib/config'


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
      { property: 'og:image', content: `${SITE_URL}/images/og-image.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `${SITE_URL}/images/og-image.jpg` },
    ],
    links: [{ rel: 'canonical', href: `${SITE_URL}/locations/escondido` }],
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
    img: '/images/products/Roman Shades.png',
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


  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
    { '@type': 'Question', 'name': "What roller shade fabric works best for Escondido's hot summers without blocking my hillside view?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Escondido's inland heat \u2014 regularly topping 95\u00b0F in summer \u2014 demands a solar-mesh roller fabric with a 5% or lower openness factor on south and west exposures. That tighter weave rejects the majority of radiant heat before it enters the room while still letting you see across the Hidden Valley ridgeline or your Harmony Grove property's natural landscape. iL Progetto selects fabrics with a dual coa" } },
    { '@type': 'Question', 'name': "Are zebra shades a good fit for a ranch-style Escondido home with warm wood tones throughout?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Zebra shades are an excellent fit for Escondido's ranch and hillside homes precisely because they come in earthy linen weaves, warm taupes, and natural sand tones that coordinate with the exposed beam ceilings and warm-wood cabinetry common in the Hidden Valley and Felicita neighborhoods. The alternating sheer and solid bands give you view-through in the morning hours and privacy as the afternoon " } },
    { '@type': 'Question', 'name': "Will cellular shades actually help with the temperature swings between Escondido's hot summer days and cool winter nights?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Yes \u2014 cellular shades are one of the few window treatments that provide measurable benefit in both directions. Escondido's thermal swing is significant: summer afternoons can be 30\u201340\u00b0F warmer than winter nights, and a dual-cell honeycomb construction maintains an insulating air pocket that resists heat entry in July and slows heat loss in December. Homes in the Harmony Grove and Felicita areas, w" } },
    { '@type': 'Question', 'name': "What roman shade fabric complements the wine country aesthetic in my Escondido home?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Escondido's growing wine country identity \u2014 anchored by estates along the Escondido Creek corridor and the hillside ranches above Hidden Valley \u2014 has shifted interior design preferences toward linen-cotton blends in warm stone, sage, and terracotta tones. Roman shades in these fabrics fold into structured horizontal pleats that add artisanal texture without fussiness, complementing the natural sto" } }
    ],
  }
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/locations/escondido#localbusiness`,
    'name': 'iL Progetto LLC — Escondido Window Treatments',
    'description': `Custom window treatments in Escondido, CA. Free in-home consultation — we bring the full catalog to your home.`,
    'url': `${SITE_URL}/locations/escondido`,
    'telephone': '+18583381678',
    'email': 'info@progettoshades.com',
    'priceRange': '$$',
    'image': `${SITE_URL}/images/og-image.jpg`,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Escondido',
      'addressRegion': 'CA',
      'addressCountry': 'US',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '33.1192',
      'longitude': '-117.0864',
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Escondido',
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
        style={{ background: 'linear-gradient(rgba(15,13,11,0.62), rgba(15,13,11,0.62)), url(/images/locations/escondido.png) center/cover no-repeat', minHeight: '58vh', paddingTop: '76px' }}
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
              color: 'var(--cream)',
            }}
          >
            Window Treatments That{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Belong in Wine Country
            </em>
          </h1>

          <p
            className="text-[16px] leading-[1.85] max-w-[560px] mb-10"
            style={{ color: 'rgba(251,251,249,0.72)' }}
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
              style={{ background: 'var(--sand)', color: '#fff' }}
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
      {/* ── Related Products ──────────────────────────────────────── */}
      <section
        className="px-4 md:px-10 lg:px-20 py-16 border-t"
        style={{ background: 'var(--cream)', borderColor: 'var(--hairline)' }}
        aria-label="Related window treatment products"
      >
        <p className="text-[11px] tracking-[0.22em] uppercase mb-4" style={{ color: 'var(--sand)' }}>
          Popular in Escondido
        </p>
        <h2 className="font-[300] leading-[1.1] mb-8" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px,2.5vw,32px)', color: 'var(--ink)' }}>
          Window Treatments We Install in Escondido
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