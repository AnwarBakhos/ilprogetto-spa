import { createFileRoute, Link } from '@tanstack/react-router'
import { SITE_URL } from '@/lib/config'


export const Route = (createFileRoute as any)('/locations/national-city')({
  head: () => ({
    meta: [
      { title: 'Window Treatments National City CA | iL Progetto LLC' },
      { name: 'description', content: 'Affordable custom window treatments for National City. Roller shades, aluminum blinds, zebra shades. Licensed installer, free in-home consultation.' },
      { name: 'robots', content: 'index, follow' },
    ],
    links: [{ rel: 'canonical', href: `${SITE_URL}/locations/national-city` }],
  }),
  component: NationalCityPage,
})

const products = [
  { name: 'Roller Shades', img: '/images/products/Roller Shades.png', desc: 'Clean, low-profile light control. Works in any room, any budget, any window size.' },
  { name: 'Aluminum Blinds', img: '/images/products/Aluminum.jpg', desc: 'Durable, moisture-resistant slats built for kitchens, bathrooms, and high-traffic rooms.' },
  { name: 'Zebra Shades', img: '/images/products/Zebra Shades.png', desc: 'Alternating sheer and solid bands for precise light and privacy control throughout the day.' },
  { name: 'Cellular Shades', img: '/images/products/Cellular Shades.png', desc: 'Insulating honeycomb cells that reduce heat gain and lower energy costs year-round.' },
  { name: 'Plantation Shutters', img: '/images/products/Plantation Shutters.png', desc: 'Timeless louvered panels — a permanent upgrade that adds lasting value to any home.' },
  { name: 'Roman Shades', img: '/images/products/Roman Shades.jpg', desc: 'Soft fabric folds that bring warmth and texture to bedrooms and living spaces.' },
]

function NationalCityPage() {


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
    '@id': `${SITE_URL}/locations/national-city#localbusiness`,
    'name': 'iL Progetto LLC — National City Window Treatments',
    'description': `Custom window treatments in National City, CA. Free in-home consultation — we bring the full catalog to your home.`,
    'url': `${SITE_URL}/locations/national-city`,
    'telephone': '+18583381678',
    'email': 'info@ilprogettollc.com',
    'priceRange': '$$',
    'image': `${SITE_URL}/images/og-image.jpg`,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'National City',
      'addressRegion': 'CA',
      'addressCountry': 'US',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.6781',
      'longitude': '-117.0992',
    },
    'areaServed': {
      '@type': 'City',
      'name': 'National City',
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
      <header
        className="relative flex flex-col justify-end overflow-hidden"
        style={{ background: 'linear-gradient(rgba(15,13,11,0.62), rgba(15,13,11,0.62)), url(/images/locations/national-city.png) center/cover no-repeat', minHeight: '60vh' }}
        aria-label="National City window treatments"
      >
        <div className="absolute inset-0 opacity-[0.035]" aria-hidden="true"
          style={{ backgroundImage: 'repeating-linear-gradient(135deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '24px 24px' }} />
        <div className="relative z-10 px-4 md:px-10 lg:px-20 pb-16 md:pb-24 max-w-[800px]">
          <p className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-8"
             style={{ color: 'var(--sand-light)' }}>
            <span className="inline-block w-9 h-px bg-current" aria-hidden="true" />
            National City, CA — South Bay San Diego
          </p>
          <h1 className="font-[300] leading-[1.02] tracking-[-0.025em] mb-8"
              style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(38px, 5.5vw, 72px)', color: 'var(--cream)' }}>
            Quality Treatments,{' '}
            <em className="italic" style={{ color: 'var(--sand-light)' }}>Real-World Value</em>
          </h1>
          <p className="text-[16px] leading-[1.85] max-w-[560px] mb-10"
             style={{ color: 'rgba(251,251,249,0.72)' }}>
            National City's mild climate and dense urban housing stock call for window treatments
            that perform — not ones that look good in a showroom and fail in six months. We bring
            quality materials, expert installation, and a same-day quote every time.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/booking"
              className="inline-flex items-center gap-2.5 px-9 py-4 text-[11px] tracking-[0.2em] uppercase btn-interactive"
              style={{ background: 'var(--sand)', color: '#fff' }}>
              Get a Free Quote
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <a href="tel:+18583381678" className="text-[13px] tracking-[0.06em]"
               style={{ color: 'rgba(251,251,249,0.6)' }}>(858) 338-1678</a>
          </div>
        </div>
      </header>

      <section className="px-4 md:px-10 lg:px-20 py-20" style={{ background: 'var(--cream)' }}
               aria-labelledby="nc-products-heading">
        <p className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
           style={{ color: 'var(--sand)' }}>
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          What Works Best in National City
        </p>
        <h2 id="nc-products-heading" className="font-[300] leading-[1.06] tracking-[-0.015em] mb-12"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 3vw, 40px)' }}>
          Six Products,{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>Proven in Urban Homes</em>
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

      <section className="px-4 md:px-10 lg:px-20 py-20" style={{ background: 'var(--warm)' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'rgba(0,0,0,0.08)' }}>
          {[
            { val: 'Free', label: 'In-Home Consultation' },
            { val: '1 Day', label: 'Installation' },
            { val: '5★', label: 'Google Rated' },
          ].map((s) => (
            <div key={s.label} className="text-center py-12 px-8" style={{ background: 'var(--warm)' }}>
              <p className="font-[300] leading-none mb-3"
                 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 5vw, 56px)', color: 'var(--ink)' }}>
                {s.val}
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase" style={{ color: 'var(--mid)' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-10 lg:px-20 py-28 text-center" style={{ background: 'var(--ink)' }}>
        <p className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-7"
           style={{ color: 'var(--sand-light)' }}>
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          Free In-Home Visit · National City
        </p>
        <h2 className="font-[300] leading-[1.04] tracking-[-0.02em] mb-6"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(30px, 4vw, 54px)', color: 'var(--cream)' }}>
          Book Your <em className="italic" style={{ color: 'var(--sand)' }}>Free Consultation</em>
        </h2>
        <p className="text-[15px] leading-[1.85] max-w-[500px] mx-auto mb-10"
           style={{ color: 'rgba(251,251,249,0.65)' }}>
          We serve every National City neighborhood with our complete collection — samples,
          measurements, and pricing in one appointment at no charge.
        </p>
        <Link to="/booking"
          className="inline-flex items-center gap-2.5 px-10 py-4 text-[11px] tracking-[0.2em] uppercase btn-interactive"
          style={{ background: 'var(--sand)', color: '#fff' }}>
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
          Popular in National City
        </p>
        <h2 className="font-[300] leading-[1.1] mb-8" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px,2.5vw,32px)', color: 'var(--ink)' }}>
          Window Treatments We Install in National City
        </h2>
        <div className="flex flex-wrap gap-3 mb-8">
          <Link key="roller" to="/catalog" search={{ product: "roller" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Roller Shades</Link>
          <Link key="zebra" to="/catalog" search={{ product: "zebra" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Zebra Shades</Link>
          <Link key="cellular" to="/catalog" search={{ product: "cellular" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Cellular Shades</Link>
          <Link key="faux-wood" to="/catalog" search={{ product: "faux-wood" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Faux Wood Blinds</Link>
          <Link key="vertical" to="/catalog" search={{ product: "vertical" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Vertical Blinds</Link>
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