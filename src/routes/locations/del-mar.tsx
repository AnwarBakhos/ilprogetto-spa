import { createFileRoute, Link } from '@tanstack/react-router'
import { SITE_URL } from '@/lib/config'


export const Route = (createFileRoute as any)('/locations/del-mar')({
  head: () => ({
    meta: [
      { title: 'Custom Window Treatments Del Mar, CA | iL Progetto LLC' },
      {
        name: 'description',
        content:
          "Window treatments designed around Del Mar's coastal views. Low-profile, view-preserving roller shades, sheer drapes & motorized options. Free in-home consultation.",
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Custom Window Treatments Del Mar, CA | iL Progetto LLC' },
      {
        property: 'og:description',
        content:
          "Window treatments designed around Del Mar's coastal views. Low-profile, view-preserving roller shades, sheer drapes & motorized options. Free in-home consultation.",
      },
      { property: 'og:image', content: `${SITE_URL}/images/og-image.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `${SITE_URL}/images/og-image.jpg` },
    ],
    links: [{ rel: 'canonical', href: `${SITE_URL}/locations/del-mar` }],
  }),
  component: DelMarPage,
})

const viewProducts = [
  {
    img: '/images/products/Sheer Drapes.jpg',
    name: 'Sheer Drapes',
    desc:
      'Lightweight, translucent fabric filters harsh coastal UV while keeping the full panorama visible from every seat. The most view-friendly treatment in the collection.',
  },
  {
    img: '/images/products/Roller Shades.png',
    name: 'Roller Shades',
    desc:
      'Solar fabrics in 1–14% openness ratings mean you can dial in exactly how much light — and how much view — you want. Roll them up completely for zero visual obstruction.',
  },
  {
    img: '/images/products/Zebra Shades.png',
    name: 'Zebra Shades',
    desc:
      'Alternating sheer and solid bands give you precise control over glare without ever blocking the horizon line. The ideal solution for Del Mar\'s west-facing windows.',
  },
]

const stats = [
  { value: '0', label: 'Obstructed Views' },
  { value: 'Free', label: 'Consultation' },
  { value: '100%', label: 'Custom Made' },
  { value: '5★', label: 'Google Rated' },
]

function DelMarPage() {


  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
    { '@type': 'Question', 'name': "What roller shade fabric works best for Del Mar west-facing windows with ocean views?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Del Mar's intense afternoon southwest sun combined with the desire to preserve canyon and ocean sightlines makes openness factor critical. iL Progetto recommends 3\u20135% solar mesh fabrics that block 70\u201380% of solar heat gain while keeping the Torrey Hills landscape visible from inside. Marine-layer humidity cycles mean all hardware we specify is stainless-steel or anodized aluminum to prevent corros" } },
    { '@type': 'Question', 'name': "Can zebra shades handle the morning marine layer glare in Olde Del Mar?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Yes \u2014 zebra shades are particularly well-suited to Olde Del Mar because the alternating sheer and solid bands let you dial between diffused marine-layer brightness and direct-sun privacy without swapping products. When the layer burns off by midday, rotating to the solid bands controls the hard southwest glare that characterizes Del Mar Heights afternoons. iL Progetto fabricates each shade to the " } },
    { '@type': 'Question', 'name': "Do cellular shades really help with energy costs in Del Mar if the climate is already mild?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Even Del Mar's mild climate produces meaningful heat gain on west and southwest exposures in Torrey Hills and Del Mar Heights, where afternoon sun is unimpeded. Dual-cell honeycomb shades create an insulating air pocket that reduces that thermal swing measurably \u2014 and the uniform fabric face maintains the subtle street-facing visual consistency that Del Mar's design-conscious neighborhoods quietly" } },
    { '@type': 'Question', 'name': "What window treatment fits the restrained coastal aesthetic of a Del Mar canyon-rim home?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Roman shades in performance linen blends are the most architecturally honest answer for Del Mar Heights and Olde Del Mar interiors \u2014 the structured horizontal folds add textile warmth without visual clutter that competes with canyon or ocean views. iL Progetto sources marine-layer-resistant fabrics that resist the subtle mildew risk the coast introduces and specifies stainless mounting hardware th" } }
    ],
  }
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/locations/del-mar#localbusiness`,
    'name': 'iL Progetto LLC — Del Mar Window Treatments',
    'description': `Custom window treatments in Del Mar, CA. Free in-home consultation — we bring the full catalog to your home.`,
    'url': `${SITE_URL}/locations/del-mar`,
    'telephone': '+18583381678',
    'email': 'info@ilprogettollc.com',
    'priceRange': '$$',
    'image': `${SITE_URL}/images/og-image.jpg`,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Del Mar',
      'addressRegion': 'CA',
      'addressCountry': 'US',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.9595',
      'longitude': '-117.2653',
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Del Mar',
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

      {/* HERO — two-column dark with vertical VIEW accent */}
      <header
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(rgba(15,13,11,0.62), rgba(15,13,11,0.62)), url(/images/locations/del-mar.png) center/cover no-repeat', minHeight: '68vh' }}
        aria-label="Del Mar window treatments"
      >
        {/* subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-stretch min-h-[68vh]">

          {/* Left: heading + text */}
          <div className="flex-[2] flex flex-col justify-center px-4 md:px-10 lg:px-20 py-24 lg:py-0">
            <p
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.26em] uppercase mb-7"
              style={{ color: 'var(--sand-light)' }}
            >
              <span className="inline-block w-10 h-px bg-current" aria-hidden="true" />
              Del Mar, California
            </p>

            <h1
              className="font-[300] leading-[1.02] tracking-[-0.025em] mb-7 max-w-[600px]"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(36px, 5vw, 68px)',
                color: 'var(--cream)',
              }}
            >
              Protecting Del Mar's Most{' '}
              <em className="italic" style={{ color: 'var(--sand-light)' }}>
                Valuable Asset
              </em>
            </h1>

            <p
              className="text-[16px] leading-[1.9] mb-6 max-w-[520px]"
              style={{ color: 'rgba(251,251,249,0.70)' }}
            >
              In Del Mar, the ocean view isn't just a feature — it's the reason the home exists.
              Every window treatment we specify here starts with one principle: the view comes first.
            </p>
            <p
              className="text-[16px] leading-[1.9] mb-10 max-w-[520px]"
              style={{ color: 'rgba(251,251,249,0.70)' }}
            >
              Our low-profile solutions filter damaging coastal UV and eliminate glare, all while
              keeping the Pacific fully visible from every vantage point in the room.
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
                style={{ borderColor: 'rgba(255,255,255,0.18)', color: 'rgba(251,251,249,0.7)' }}
              >
                (858) 338-1678
              </a>
            </div>
          </div>

          {/* Right: large decorative rotated VIEW word */}
          <div
            className="hidden lg:flex flex-1 items-center justify-center overflow-hidden"
            aria-hidden="true"
          >

          </div>
        </div>
      </header>

      {/* VIEW-PRESERVING PRODUCTS */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--warm)' }}
        aria-labelledby="products-heading"
      >
        <div className="mb-14">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            View-First Design
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
            Products That Don't{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Obstruct
            </em>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {viewProducts.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col sm:flex-row overflow-hidden"
              style={{ background: 'var(--cream)', border: '1px solid var(--hairline)' }}
            >
              <div
                className="shrink-0 overflow-hidden"
                style={{ width: 'clamp(180px, 40%, 360px)', aspectRatio: '4/3', background: 'var(--warm)' }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center px-8 py-8 md:py-10">
                <h3
                  className="text-[20px] font-[400] mb-3 leading-snug"
                  style={{ fontFamily: 'var(--serif)', color: 'var(--ink)' }}
                >
                  {p.name}
                </h3>
                <p className="text-[15px] leading-[1.85]" style={{ color: 'var(--mid)' }}>
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* secondary product row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-12">
          {[
            { img: '/images/products/Motorized Shades.png', name: 'Motorized Shades' },
            { img: '/images/products/Cellular Shades.png', name: 'Cellular Shades' },
            { img: '/images/products/Woven Wood Shades.jpg', name: 'Woven Wood' },
            { img: '/images/products/Plantation Shutters.png', name: 'Plantation Shutters' },
          ].map((p) => (
            <div key={p.name} className="group">
              <div className="overflow-hidden mb-3" style={{ aspectRatio: '4/3', background: 'var(--warm)' }}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p
                className="text-[11px] tracking-[0.12em] uppercase"
                style={{ color: 'var(--mid)' }}
              >
                {p.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section
        className="px-4 md:px-10 lg:px-20 py-0"
        style={{ background: 'var(--ink)' }}
        aria-label="Del Mar stats"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.05)' }}>
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-14 px-6 text-center"
              style={{ background: 'var(--ink)' }}
            >
              <span
                className="block font-[300] leading-none mb-2"
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(34px, 4.5vw, 52px)',
                  color: 'var(--sand-light)',
                }}
              >
                {s.value}
              </span>
              <span
                className="text-[11px] tracking-[0.18em] uppercase"
                style={{ color: 'rgba(251,251,249,0.45)' }}
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
        style={{ background: 'var(--cream)' }}
        aria-label="Book consultation"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-[1040px] mx-auto">
          <div className="flex-1">
            <p
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-6"
              style={{ color: 'var(--sand)' }}
            >
              <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
              Your View, Protected
            </p>
            <h2
              className="font-[300] leading-[1.04] tracking-[-0.02em] mb-5"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(26px, 3.2vw, 44px)',
                color: 'var(--ink)',
              }}
            >
              Free Del Mar{' '}
              <em className="italic" style={{ color: 'var(--sand)' }}>
                In-Home Consultation
              </em>
            </h2>
            <p className="text-[15px] leading-[1.85]" style={{ color: 'var(--mid)' }}>
              We'll visit your Del Mar property, assess every window's solar exposure and view angle,
              and recommend the treatments that protect without obstructing — at no obligation.
            </p>
          </div>
          <div className="flex flex-col gap-4 shrink-0">
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
          Popular in Del Mar
        </p>
        <h2 className="font-[300] leading-[1.1] mb-8" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px,2.5vw,32px)', color: 'var(--ink)' }}>
          Window Treatments We Install in Del Mar
        </h2>
        <div className="flex flex-wrap gap-3 mb-8">
          <Link key="roller" to="/catalog" search={{ product: "roller" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Roller Shades</Link>
          <Link key="sheer" to="/catalog" search={{ product: "sheer" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Sheer Shades</Link>
          <Link key="motorized" to="/catalog" search={{ product: "motorized" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Motorized Shading</Link>
          <Link key="plantation" to="/catalog" search={{ product: "plantation" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Plantation Shutters</Link>
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