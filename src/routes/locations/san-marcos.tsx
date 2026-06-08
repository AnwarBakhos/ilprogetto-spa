import { createFileRoute, Link } from '@tanstack/react-router'
import { SITE_URL } from '@/lib/config'


export const Route = (createFileRoute as any)('/locations/san-marcos')({
  head: () => ({
    meta: [
      { title: 'Window Treatments San Marcos CA — Child-Safe Options | iL Progetto LLC' },
      {
        name: 'description',
        content:
          'Child-safe custom window treatments for San Marcos families — cordless and motorized options standard. Cellular shades, plantation shutters & more. Free in-home consultation.',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Window Treatments San Marcos CA — Child-Safe Options | iL Progetto LLC' },
      { property: 'og:image', content: `${SITE_URL}/images/og-image.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `${SITE_URL}/images/og-image.jpg` },
    ],
    links: [{ rel: 'canonical', href: `${SITE_URL}/locations/san-marcos` }],
  }),
  component: SanMarcosPage,
})

const products = [
  {
    name: 'Cellular Shades',
    img: '/images/products/Cellular Shades.png',
    desc: 'Our top pick for San Marcos families — insulating, cordless-standard, and perfectly sized for newer construction.',
  },
  {
    name: 'Motorized Shades',
    img: '/images/products/Motorized Shades.png',
    desc: 'App or remote control, zero exposed cords. Perfect for high windows and busy households.',
  },
  {
    name: 'Roller Shades',
    img: '/images/products/Roller Shades.png',
    desc: 'Clean lines, easy operation, available cordless in every fabric and opacity.',
  },
  {
    name: 'Plantation Shutters',
    img: '/images/products/Plantation Shutters.png',
    desc: 'Timeless and durable — adds value to newer San Marcos builds, no cords required.',
  },
  {
    name: 'Zebra Shades',
    img: '/images/products/Zebra Shades.png',
    desc: 'Alternating bands let you dial privacy without sacrificing natural light.',
  },
  {
    name: 'Roman Shades',
    img: '/images/products/Roman Shades.png',
    desc: 'Soft tailored folds for bedrooms and living spaces — cordless options available.',
  },
]

const reasons = [
  {
    title: 'Cordless & Motorized Standard',
    body: 'Every installation includes cordless and motorized options — no exposed cords, no looped hazards. We follow WCMA and ANSI child-safety guidelines on every job.',
  },
  {
    title: 'Free In-Home Measurement',
    body: 'We bring every sample and take precise measurements at your home. One appointment, complete quote — no showroom visit required.',
  },
  {
    title: 'Licensed & Insured',
    body: 'California Contractors License #1127055. Fully insured with general liability and workers\' compensation on every job.',
  },
]

function SanMarcosPage() {


  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
    { '@type': 'Question', 'name': "What roller shades are best for the standard windows in a San Elijo Hills new construction home?", 'acceptedAnswer': { '@type': 'Answer', 'text': "San Elijo Hills and Discovery Hills homes are built to relatively consistent window specifications, which actually works in the homeowner's favor \u2014 iL Progetto has installed hundreds of roller shades in these communities and knows exactly which fabric weights and openness factors suit the east, south, and west exposures in the standard floor plans. Light-filtering fabrics in warm whites and soft n" } },
    { '@type': 'Question', 'name': "Are zebra shades child-safe for our San Marcos home where our kids play right next to the windows?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Child safety is the first specification iL Progetto addresses in San Marcos consultations, and zebra shades are available in fully cordless and motorized configurations that eliminate any dangling cord hazard entirely. The motorized option \u2014 increasingly popular in San Elijo Hills and Discovery Hills \u2014 uses a simple remote or smart-phone app for up/down/stop and is the choice most San Marcos famil" } },
    { '@type': 'Question', 'name': "Do cellular shades reduce energy bills in a two-story San Marcos home where upstairs bedrooms overheat?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Two-story homes in San Marcos's master-planned communities \u2014 San Elijo Hills in particular \u2014 have upper-floor bedrooms that absorb significantly more heat than the ground floor because roof and wall surface area amplifies thermal gain at the top level. Dual-cell cellular shades on those upper bedroom windows create an insulating air buffer that meaningfully reduces the rate at which solar heat ent" } },
    { '@type': 'Question', 'name': "What roman shade styles work in a transitional San Marcos home with white cabinets and neutral finishes?", 'acceptedAnswer': { '@type': 'Answer', 'text': "The transitional interiors dominant in San Marcos's newer construction \u2014 white shaker cabinetry, quartz counters, light wood floors \u2014 respond best to roman shades in flat-fold construction with minimal embellishment, allowing the fabric texture to carry the interest rather than the pleating style. iL Progetto carries a dedicated collection of performance linen weaves, cotton texturals, and subtle " } }
    ],
  }
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/locations/san-marcos#localbusiness`,
    'name': 'iL Progetto LLC — San Marcos Window Treatments',
    'description': `Custom window treatments in San Marcos, CA. Free in-home consultation — we bring the full catalog to your home.`,
    'url': `${SITE_URL}/locations/san-marcos`,
    'telephone': '+18583381678',
    'email': 'info@ilprogettollc.com',
    'priceRange': '$$',
    'image': `${SITE_URL}/images/og-image.jpg`,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'San Marcos',
      'addressRegion': 'CA',
      'addressCountry': 'US',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '33.1434',
      'longitude': '-117.1661',
    },
    'areaServed': {
      '@type': 'City',
      'name': 'San Marcos',
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
        style={{ background: 'linear-gradient(rgba(15,13,11,0.62), rgba(15,13,11,0.62)), url(/images/locations/san-marcos.jpg) center/cover no-repeat', minHeight: '68vh' }}
        aria-label="San Marcos window treatments"
      >
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'repeating-linear-gradient(135deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '24px 24px',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{ background: 'radial-gradient(at 80% 80%, rgba(197,165,114,0.07) 0%, transparent 60%)' }} />

        <div className="relative z-10 px-4 md:px-10 lg:px-20 pb-16 md:pb-24 max-w-[860px]">
          <p className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-8"
             style={{ color: 'var(--sand-light)' }}>
            <span className="inline-block w-9 h-px bg-current" aria-hidden="true" />
            San Elijo Hills · Discovery Hills · CSUSM Area
          </p>
          <h1
            className="font-[300] leading-[1.02] tracking-[-0.025em] mb-8"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(38px, 5.5vw, 72px)', color: 'var(--cream)' }}
          >
            Built for the Way{' '}
            <em className="italic" style={{ color: 'var(--sand-light)' }}>Families Actually Live</em>
          </h1>
          <p className="text-[16px] leading-[1.85] max-w-[560px] mb-10"
             style={{ color: 'rgba(251,251,249,0.72)' }}>
            San Marcos has grown up fast — San Elijo Hills, Discovery Hills, and the CSUSM corridor
            are packed with newer construction built to modern window sizes. Young families here
            want treatments that are safe, easy to operate, and built to last. That's exactly what we deliver.
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

      {/* Why Us */}
      <section className="px-4 md:px-10 lg:px-20 py-20" style={{ background: 'var(--warm)' }}>
        <p className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
           style={{ color: 'var(--sand)' }}>
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          Safety Built In — Not Added On
        </p>
        <h2
          className="font-[300] leading-[1.06] tracking-[-0.015em] mb-14"
          style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3.2vw, 42px)' }}
        >
          Every Home, <em className="italic" style={{ color: 'var(--sand)' }}>Every Window</em>
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
               aria-labelledby="sm-products-heading">
        <p className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
           style={{ color: 'var(--sand)' }}>
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          Our Collection
        </p>
        <h2 id="sm-products-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em] mb-12"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 3vw, 40px)' }}>
          What We Recommend for{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>San Marcos Homes</em>
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
          Free In-Home Visit · San Marcos
        </p>
        <h2
          className="font-[300] leading-[1.04] tracking-[-0.02em] mb-6"
          style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(30px, 4vw, 54px)', color: 'var(--cream)' }}
        >
          Book Your{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>San Marcos Consultation</em>
        </h2>
        <p className="text-[15px] leading-[1.85] max-w-[500px] mx-auto mb-10"
           style={{ color: 'rgba(251,251,249,0.65)' }}>
          Free in-home measurement and same-day quote. We serve San Elijo Hills, Discovery Hills,
          CSUSM area, and all San Marcos neighborhoods.
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
          Popular in San Marcos
        </p>
        <h2 className="font-[300] leading-[1.1] mb-8" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px,2.5vw,32px)', color: 'var(--ink)' }}>
          Window Treatments We Install in San Marcos
        </h2>
        <div className="flex flex-wrap gap-3 mb-8">
          <Link key="roller" to="/catalog" search={{ product: "roller" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Roller Shades</Link>
          <Link key="zebra" to="/catalog" search={{ product: "zebra" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Zebra Shades</Link>
          <Link key="cellular" to="/catalog" search={{ product: "cellular" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Cellular Shades</Link>
          <Link key="plantation" to="/catalog" search={{ product: "plantation" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Plantation Shutters</Link>
          <Link key="motorized" to="/catalog" search={{ product: "motorized" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Motorized Shading</Link>
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