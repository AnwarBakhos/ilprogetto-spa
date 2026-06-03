import { createFileRoute, Link } from '@tanstack/react-router'
import { SITE_URL } from '@/lib/config'


export const Route = (createFileRoute as any)('/locations/vista')({
  head: () => ({
    meta: [
      { title: 'Window Treatments Vista CA — Hillside Home Specialists | iL Progetto LLC' },
      {
        name: 'description',
        content:
          "Custom window treatments for Vista's hillside homes — privacy solutions for unusual sight lines. Zebra shades, roller shades & cellular shades. Free in-home consultation.",
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Window Treatments Vista CA — Hillside Home Specialists | iL Progetto LLC' },
      { property: 'og:image', content: `${SITE_URL}/images/og-image.jpg` },
<<<<<<< HEAD
      { property: 'og:url', content: `${SITE_URL}/locations/vista` },
=======
>>>>>>> 3f5ea77fc33d926396c7918191605622bee1c530
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `${SITE_URL}/images/og-image.jpg` },
    ],
    links: [{ rel: 'canonical', href: `${SITE_URL}/locations/vista` }],
  }),
  component: VistaPage,
})

const products = [
  {
    name: 'Zebra Shades',
    img: '/images/products/Zebra Shades.png',
    desc: 'Dual-layer alternating bands let you dial privacy without blocking your hillside views entirely.',
  },
  {
    name: 'Roller Shades',
    img: '/images/products/Roller Shades.png',
    desc: 'Blackout, solar, or sheer — choose your opacity based on exactly which neighbor you need to block.',
  },
  {
    name: 'Cellular Shades',
    img: '/images/products/Cellular Shades.png',
    desc: 'Top-down bottom-up operation means you can block the uphill neighbor while keeping sky views open.',
  },
  {
    name: 'Sheer Drapes',
    img: '/images/products/Sheer Drapes.jpg',
    desc: 'Soft diffusion that softens sight lines without making your home feel closed off.',
  },
  {
    name: 'Plantation Shutters',
    img: '/images/products/Plantation Shutters.png',
    desc: 'Adjustable louvers give you precise control over light and privacy from any angle.',
  },
  {
    name: 'Motorized Shades',
    img: '/images/products/Motorized Shades.png',
    desc: 'App-controlled shading — reach high or awkward hillside windows without a ladder.',
  },
]

const reasons = [
  {
    title: 'Sight-Line Assessment Included',
    body: 'We account for elevation, window orientation, and adjacent property angles — not just window size. Full sight-line assessment at every in-home consultation.',
  },
  {
    title: 'Eclectic Architecture Specialists',
    body: 'Vista\'s hillside neighborhoods mix craftsmans, Spanish colonials, mid-century ranches, and modern builds. We\'ve treated all of them.',
  },
  {
    title: 'Top-Down Bottom-Up Expertise',
    body: 'Standard treatments often miss Vista\'s unique angles. We stock and install directional solutions that flat-terrain installers don\'t carry.',
  },
]

function VistaPage() {


  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
    { '@type': 'Question', 'name': "My Vista home sits above Shadowridge and my neighbor's second story looks directly into my living room \u2014 what roller shade blocks that view?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Vista's hillside topography creates privacy challenges that flat-community window treatments never encounter: neighbors at a higher elevation have sightlines into your home that a standard same-level privacy screen doesn't address. iL Progetto's approach for Vista's Shadowridge and Brengle Terrace hillside homes is to specify roller shades with a privacy-rated fabric \u2014 typically a 3% or 1% opennes" } },
    { '@type': 'Question', 'name': "Will zebra shades give me privacy from the neighbors uphill from my Vista home in the Rancho Minerva area?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Zebra shades manage same-level privacy effectively, but in Vista's Rancho Minerva and Brengle Terrace neighborhoods where neighbors at higher elevation look down into your windows, the solid band position is the relevant control. When the solid bands align, the zebra shade is opaque at any angle \u2014 including from above \u2014 which is the configuration Vista hillside residents use during the afternoon h" } },
    { '@type': 'Question', 'name': "My Vista home faces a different sun angle than my neighbor because of how the lots are cut \u2014 can cellular shades help with uneven heat gain?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Vista's hillside lot geometry creates exactly the kind of uneven solar exposure you're describing \u2014 one house on a north-facing slope and the next on a south-facing one, separated by a hundred feet. iL Progetto measures solar angles for each individual Vista installation and specifies cellular shade opacity by exposure: rooms with direct afternoon sun on south or west-facing slopes get double-cell" } },
    { '@type': 'Question', 'name': "I have an eclectic ranch-style home in Vista Village \u2014 what roman shade fabric complements exposed brick and vintage wood floors?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Vista Village's eclectic mix of mid-century, ranch, and craftsman homes provides rich texture and material history that a roman shade can either honor or fight depending on fabric choice. iL Progetto recommends textured cotton or linen weaves in warm, slightly muted tones \u2014 aged flax, warm cream, or earthy terracotta \u2014 for rooms with exposed brick and vintage hardwood floors in Vista Village homes" } }
    ],
  }
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/locations/vista#localbusiness`,
    'name': 'iL Progetto LLC — Vista Window Treatments',
    'description': `Custom window treatments in Vista, CA. Free in-home consultation — we bring the full catalog to your home.`,
    'url': `${SITE_URL}/locations/vista`,
    'telephone': '+18583381678',
    'email': 'info@ilprogettollc.com',
    'priceRange': '$$',
    'image': `${SITE_URL}/images/og-image.jpg`,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Vista',
      'addressRegion': 'CA',
      'addressCountry': 'US',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '33.2000',
      'longitude': '-117.2425',
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Vista',
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
        style={{ background: 'linear-gradient(rgba(15,13,11,0.62), rgba(15,13,11,0.62)), url(/images/locations/vista.jpg) center/cover no-repeat', minHeight: '68vh' }}
        aria-label="Vista window treatments"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{ background: 'radial-gradient(at 20% 80%, rgba(197,165,114,0.08) 0%, transparent 55%)' }} />

        <div className="relative z-10 px-4 md:px-10 lg:px-20 pb-16 md:pb-24 max-w-[860px]">
          <p className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-8"
             style={{ color: 'var(--sand-light)' }}>
            <span className="inline-block w-9 h-px bg-current" aria-hidden="true" />
            Shadowridge · Brengle Terrace · Rancho Minerva
          </p>
          <h1
            className="font-[300] leading-[1.02] tracking-[-0.025em] mb-8"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(38px, 5.5vw, 72px)', color: 'var(--cream)' }}
          >
            Every Window Has a{' '}
            <em className="italic" style={{ color: 'var(--sand-light)' }}>Different Story in Vista</em>
          </h1>
          <p className="text-[16px] leading-[1.85] max-w-[560px] mb-10"
             style={{ color: 'rgba(251,251,249,0.72)' }}>
            Vista's hillside neighborhoods are architecturally eclectic — and each has unusual angles,
            privacy challenges from neighbors above and below, and windows no flat-terrain treatment
            is designed for. We specialize in figuring it out.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2.5 px-9 py-4 text-[11px] tracking-[0.2em] uppercase btn-interactive"
              style={{ background: 'var(--sand)', color: '#fff' }}
            >
              Book Free Consultation
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <a href="tel:+18583381678" className="text-[13px] tracking-[0.06em]"
               style={{ color: 'rgba(251,251,249,0.6)' }}>(858) 338-1678</a>
          </div>
        </div>
      </header>

      {/* The Hillside Problem */}
      <section className="px-4 md:px-10 lg:px-20 py-20" style={{ background: 'var(--warm)' }}>
        <p className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
           style={{ color: 'var(--sand)' }}>
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          Why Vista Is Different
        </p>
        <h2
          className="font-[300] leading-[1.06] tracking-[-0.015em] mb-14"
          style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3.2vw, 42px)' }}
        >
          We Measure Your <em className="italic" style={{ color: 'var(--sand)' }}>Sight Lines, Not Just Your Windows</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'rgba(0,0,0,0.08)' }}>
          {reasons.map((r) => (
            <div key={r.title} className="px-8 py-10" style={{ background: 'var(--warm)' }}>
              <div className="w-8 h-px mb-6" style={{ background: 'var(--sand)' }} aria-hidden="true" />
              <h3 className="text-[18px] font-[300] mb-3 leading-[1.3]" style={{ fontFamily: 'var(--serif)' }}>
                {r.title}
              </h3>
              <p className="text-[13px] leading-[1.8]" style={{ color: 'var(--mid)' }}>{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="px-4 md:px-10 lg:px-20 py-20" style={{ background: 'var(--cream)' }}
               aria-labelledby="vista-products-heading">
        <p className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
           style={{ color: 'var(--sand)' }}>
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          Our Collection
        </p>
        <h2 id="vista-products-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em] mb-12"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 3vw, 40px)' }}>
          Treatments Built for{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>Vista's Angles</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.name} className="group flex flex-col" style={{ background: 'var(--warm)' }}>
              <div className="w-full overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img src={p.img} alt={p.name}
                     className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                     loading="lazy" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[18px] font-[300] mb-2 leading-[1.2]" style={{ fontFamily: 'var(--serif)' }}>
                  {p.name}
                </h3>
                <p className="text-[13px] leading-[1.75] flex-1" style={{ color: 'var(--mid)' }}>{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
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
      </section>

      {/* CTA */}
      <section className="px-4 md:px-10 lg:px-20 py-28 text-center" style={{ background: 'var(--ink)' }}>
        <p className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-7"
           style={{ color: 'var(--sand-light)' }}>
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          Free In-Home Visit · Vista
        </p>
        <h2
          className="font-[300] leading-[1.04] tracking-[-0.02em] mb-6"
          style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(30px, 4vw, 54px)', color: 'var(--cream)' }}
        >
          Let's Solve Your{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>Vista Windows</em>
        </h2>
        <p className="text-[15px] leading-[1.85] max-w-[500px] mx-auto mb-10"
           style={{ color: 'rgba(251,251,249,0.65)' }}>
          Free in-home measurement includes a full sight-line assessment. We serve Shadowridge,
          Brengle Terrace, Rancho Minerva, and all Vista neighborhoods.
        </p>
        <Link
          to="/booking"
          className="inline-flex items-center gap-2.5 px-10 py-4 text-[11px] tracking-[0.2em] uppercase btn-interactive"
          style={{ background: 'var(--sand)', color: '#fff' }}
        >
          Book Free Consultation
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
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
          Popular in Vista
        </p>
        <h2 className="font-[300] leading-[1.1] mb-8" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px,2.5vw,32px)', color: 'var(--ink)' }}>
          Window Treatments We Install in Vista
        </h2>
        <div className="flex flex-wrap gap-3 mb-8">
          <Link key="roller" to="/catalog" search={{ product: "roller" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Roller Shades</Link>
          <Link key="cellular" to="/catalog" search={{ product: "cellular" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Cellular Shades</Link>
          <Link key="zebra" to="/catalog" search={{ product: "zebra" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Zebra Shades</Link>
          <Link key="faux-wood" to="/catalog" search={{ product: "faux-wood" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Faux Wood Blinds</Link>
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