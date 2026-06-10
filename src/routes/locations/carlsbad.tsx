import { createFileRoute, Link } from '@tanstack/react-router'
import { SITE_URL } from '@/lib/config'


// ─── Route ─────────────────────────────────────────────────────────────────────
export const Route = (createFileRoute as any)('/locations/carlsbad')({
  head: () => ({
    meta: [
      { title: 'Custom Window Treatments Carlsbad CA — HOA-Approved | iL Progetto LLC' },
      {
        name: 'description',
        content:
          'HOA-compliant custom window treatments for Carlsbad — Bressi Ranch, La Costa, Aviara. Salt-air resistant hardware. Free in-home consultation.',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: 'Custom Window Treatments Carlsbad CA — HOA-Approved | iL Progetto LLC',
      },
      {
        property: 'og:description',
        content:
          'HOA-compliant custom window treatments for Carlsbad — Bressi Ranch, La Costa, Aviara. Salt-air resistant hardware. Free in-home consultation.',
      },
      { property: 'og:url', content: `${SITE_URL}/locations/carlsbad` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `${SITE_URL}/images/og-image.jpg` },
    ],
    links: [{ rel: 'canonical', href: `${SITE_URL}/locations/carlsbad` }],
  }),
  component: CarlsbadPage,
})

// ─── Data ──────────────────────────────────────────────────────────────────────
const HOA_CHECKLIST = [
  {
    check: 'Neutral exterior colors available',
    detail:
      'Our entire collection includes HOA-approved neutral tones — white, linen, warm grey, and natural wood stains — that satisfy most Carlsbad community guidelines without a special-order wait.',
  },
  {
    check: 'Low-profile mounting options',
    detail:
      'Inside-mount installations keep window treatments flush with the frame, maintaining the clean architectural lines required by Bressi Ranch, Aviara, and La Costa HOAs.',
  },
  {
    check: 'Salt-air resistant hardware',
    detail:
      'All hardware used within three miles of the coast is stainless or coated aluminum — rated for marine environments and backed by our five-year hardware warranty.',
  },
]

const PRODUCTS = [
  { name: 'Plantation Shutters', img: '/images/products/Plantation Shutters.png' },
  { name: 'Roller Shades',       img: '/images/products/Roller Shades.png' },
  { name: 'Cellular Shades',     img: '/images/products/Cellular Shades.png' },
  { name: 'Woven Wood Shades',   img: '/images/products/Woven Wood Shades.jpg' },
  { name: 'Roman Shades',        img: '/images/products/Roman Shades.png' },
  { name: 'Zebra Shades',        img: '/images/products/Zebra Shades.png' },
]

// ─── Page ──────────────────────────────────────────────────────────────────────
function CarlsbadPage() {


  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
    { '@type': 'Question', 'name': "What roller shade color is approved by Bressi Ranch HOA for west-facing windows?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Bressi Ranch's architectural review board specifies that exterior-visible roller shade cassettes and fabric facings must fall within an approved neutral palette \u2014 typically warm whites, warm grays, and light tans \u2014 that coordinates with the community's Spanish-Mediterranean architectural theme. iL Progetto has completed dozens of Bressi Ranch roller shade installations and maintains a current list" } },
    { '@type': 'Question', 'name': "Does Aviara HOA restrict the type of zebra shades I can install on my street-facing windows in Carlsbad?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Aviara's CC&Rs regulate the exterior appearance of window treatments, which means the exterior-facing fabric side of zebra shades \u2014 and the cassette color \u2014 are subject to architectural review before installation. iL Progetto works within Aviara's approved exterior palette on every zebra shade order, selecting cassette colors and specifying an exterior-facing fabric layer in the neutral tones the " } },
    { '@type': 'Question', 'name': "Will salt air corrode the hardware on cellular shades in my Carlsbad home near the water?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Carlsbad Village and the residential streets near Carlsbad State Beach sit within the salt-air influence zone where standard steel and zinc hardware components corrode noticeably within 3\u20135 years \u2014 a failure mode that most cellular shade warranties don't cover. iL Progetto specifies stainless-steel mounting brackets, marine-grade headrail clips, and anodized aluminum cassettes on every Carlsbad co" } },
    { '@type': 'Question', 'name': "What Roman shade fabric won't get damaged by salt air humidity in my Carlsbad home near the ocean?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Carlsbad's marine environment creates a persistent humidity that is constant enough to affect natural fiber fabrics over time through slow mildew and fiber-degradation. iL Progetto recommends performance-weave fabrics with inherent moisture resistance for Carlsbad Roman shades near the ocean \u2014 specifically solution-dyed acrylic blends and high-twist polyester-linen constructions that resist mildew" } }
    ],
  }
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/locations/carlsbad#localbusiness`,
    'name': 'iL Progetto LLC — Carlsbad Window Treatments',
    'description': `Custom window treatments in Carlsbad, CA. Free in-home consultation — we bring the full catalog to your home.`,
    'url': `${SITE_URL}/locations/carlsbad`,
    'telephone': '+18583381678',
    'email': 'info@progettoshades.com',
    'priceRange': '$$',
    'image': `${SITE_URL}/images/og-image.jpg`,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Carlsbad',
      'addressRegion': 'CA',
      'addressCountry': 'US',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '33.1581',
      'longitude': '-117.3506',
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Carlsbad',
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
        style={{ background: 'linear-gradient(rgba(15,13,11,0.62), rgba(15,13,11,0.62)), url(/images/locations/carlsbad.png) center/cover no-repeat', minHeight: '58vh', paddingTop: '76px' }}
        aria-label="Carlsbad window treatments"
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

        <div className="relative z-10 px-4 md:px-10 lg:px-20 pb-16 md:pb-24 max-w-[900px]">
          <p
            className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-5"
            style={{ color: 'var(--sand-light)' }}
          >
            <span className="inline-block w-9 h-px bg-current" aria-hidden="true" />
            Bressi Ranch · La Costa · Aviara · Carlsbad Village
          </p>

          <h1
            className="font-[300] leading-[1.02] tracking-[-0.02em] mb-7"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(36px, 5vw, 70px)',
              color: 'var(--cream)',
            }}
          >
            Carlsbad Window Treatments,{' '}
            <em className="italic" style={{ color: 'var(--sand-light)' }}>
              HOA-Approved
            </em>
          </h1>

          <p
            className="text-[16px] leading-[1.85] max-w-[580px] mb-10"
            style={{ color: 'rgba(251,251,249,0.72)' }}
          >
            Carlsbad's master-planned communities — from the hillside estates of Bressi Ranch to
            the coastal courts of Aviara — share one thing: an HOA with real authority over what your
            windows look like from the street. We know every color palette, every exterior restriction,
            and we bring samples that already pass review.
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

      {/* ══ HOA COMPLIANCE CHECKLIST ══════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--cream)' }}
        aria-labelledby="hoa-heading"
      >
        <div className="max-w-[860px] mx-auto">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            HOA Ready
          </p>

          <h2
            id="hoa-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em] mb-4"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3vw, 42px)' }}
          >
            HOA Compliance{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>Checklist</em>
          </h2>

          <p
            className="text-[15px] leading-[1.8] mb-14"
            style={{ color: 'var(--mid)', maxWidth: '540px' }}
          >
            Living in a Carlsbad HOA community means exterior appearances are governed by strict
            guidelines. We've worked with dozens of boards across the city — here's what we guarantee.
          </p>

          <ul className="flex flex-col gap-6" role="list">
            {HOA_CHECKLIST.map((item, i) => (
              <li
                key={item.check}
                className="flex gap-6 items-start p-7"
                style={{
                  background: 'var(--warm)',
                  borderLeft: '3px solid var(--sand)',
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[15px] font-semibold mt-0.5"
                  style={{ background: 'var(--sand)', color: 'var(--cream)' }}
                  aria-hidden="true"
                >
                  ✓
                </span>
                <div>
                  <p
                    className="text-[15px] font-[500] mb-1.5 leading-snug"
                    style={{ fontFamily: 'var(--serif)', color: 'var(--ink)' }}
                  >
                    {item.check}
                  </p>
                  <p className="text-[14px] leading-[1.75]" style={{ color: 'var(--mid)' }}>
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══ PRODUCT GRID ══════════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--warm)' }}
        aria-labelledby="products-heading"
      >
        <p
          className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
          style={{ color: 'var(--sand)' }}
        >
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          For Carlsbad Homes
        </p>

        <h2
          id="products-heading"
          className="font-[300] leading-[1.06] tracking-[-0.015em] mb-14"
          style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3vw, 42px)' }}
        >
          Popular Products in{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>Carlsbad</em>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <article
              key={p.name}
              className="group overflow-hidden"
              style={{ background: 'var(--cream)', transitionDelay: `${i * 0.06}s` }}
            >
              <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3
                  className="text-[15px] font-[400] leading-snug"
                  style={{ fontFamily: 'var(--serif)', color: 'var(--ink)' }}
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

      {/* ══ DOCUMENTATION CTA ═════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-28 text-center"
        style={{ background: 'var(--ink)' }}
        aria-label="HOA documentation CTA"
      >
        <p
          className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-6"
          style={{ color: 'var(--sand-light)' }}
        >
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          Stress-Free HOA Process
        </p>

        <h2
          className="font-[300] leading-[1.06] tracking-[-0.015em] mb-6"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(28px, 3.5vw, 50px)',
            color: 'var(--cream)',
          }}
        >
          We Handle Your{' '}
          <em className="italic" style={{ color: 'var(--sand-light)' }}>HOA Documentation</em>
        </h2>

        <p
          className="text-[15px] leading-[1.85] mb-12 mx-auto"
          style={{ color: 'rgba(251,251,249,0.65)', maxWidth: '520px' }}
        >
          From submittal forms to specification sheets, we prepare everything your HOA board needs
          to approve your window treatments — so you skip the back-and-forth entirely.
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
      {/* ── Related Products ──────────────────────────────────────── */}
      <section
        className="px-4 md:px-10 lg:px-20 py-16 border-t"
        style={{ background: 'var(--cream)', borderColor: 'var(--hairline)' }}
        aria-label="Related window treatment products"
      >
        <p className="text-[11px] tracking-[0.22em] uppercase mb-4" style={{ color: 'var(--sand)' }}>
          Popular in Carlsbad
        </p>
        <h2 className="font-[300] leading-[1.1] mb-8" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px,2.5vw,32px)', color: 'var(--ink)' }}>
          Window Treatments We Install in Carlsbad
        </h2>
        <div className="flex flex-wrap gap-3 mb-8">
          <Link key="roller" to="/catalog" search={{ product: "roller" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Roller Shades</Link>
          <Link key="zebra" to="/catalog" search={{ product: "zebra" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Zebra Shades</Link>
          <Link key="plantation" to="/catalog" search={{ product: "plantation" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Plantation Shutters</Link>
          <Link key="motorized" to="/catalog" search={{ product: "motorized" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Motorized Shading</Link>
          <Link key="sheer-drapes" to="/catalog" search={{ product: "sheer-drapes" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Sheer Drapes</Link>
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