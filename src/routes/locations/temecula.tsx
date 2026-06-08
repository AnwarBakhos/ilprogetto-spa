import { createFileRoute, Link } from '@tanstack/react-router'
import { SITE_URL } from '@/lib/config'


export const Route = (createFileRoute as any)('/locations/temecula')({
  head: () => ({
    meta: [
      { title: 'Custom Window Treatments Temecula CA — Motorized & Smart Shading | iL Progetto LLC' },
      {
        name: 'description',
        content:
          "Temecula's 40°F daily temperature swings demand automated window treatments. Motorized shading, cellular shades & smart home integration. Free in-home consultation.",
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Custom Window Treatments Temecula CA — Motorized & Smart Shading | iL Progetto LLC' },
      { property: 'og:description', content: "Temecula's 40°F daily temperature swings demand automated window treatments. Motorized shading, cellular shades & smart home integration. Free in-home consultation." },
      { property: 'og:image', content: `${SITE_URL}/images/og-image.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `${SITE_URL}/images/og-image.jpg` },
    ],
    links: [{ rel: 'canonical', href: `${SITE_URL}/locations/temecula` }],
  }),
  component: TemeculaPage,
})

const automationProducts = [
  {
    img: '/images/products/Motorized Shades.png',
    name: 'Motorized Shades',
    featured: true,
    desc: 'Schedule your shades around Temecula\'s temperature curve. Morning open, midday partial, afternoon closed — all automatic.',
  },
  {
    img: '/images/products/Cellular Shades.png',
    name: 'Cellular Shades',
    featured: false,
    desc: 'Insulating honeycomb cells hold the cooler morning air in while the afternoon sun peaks.',
  },
  {
    img: '/images/products/Roller Shades.png',
    name: 'Roller Shades',
    featured: false,
    desc: 'Motorized rollers are clean, fast, and available in solar or blackout fabric.',
  },
  {
    img: '/images/products/Roman Shades.png',
    name: 'Roman Shades',
    featured: false,
    desc: 'Soft fabric folds that automate beautifully for living rooms and primary suites.',
  },
]

function TemeculaPage() {


  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
    { '@type': 'Question', 'name': "What roller shades handle Temecula's 40-degree temperature swings without warping or losing tension?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Temecula's summer temperature swings \u2014 from 65\u00b0F at sunrise to over 100\u00b0F by mid-afternoon \u2014 put extraordinary stress on roller shade fabric and tube mechanisms through repeated thermal expansion and contraction. iL Progetto selects dimensionally stable fabrics with tight weave construction specifically rated for high-thermal environments, and specifies aluminum tube cores rather than PVC for Teme" } },
    { '@type': 'Question', 'name': "Do zebra shades work well in Temecula's Spanish-style homes in communities like Wolf Creek and Redhawk?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Temecula's Spanish and Mediterranean-style homes in Wolf Creek, Redhawk, and Paloma del Sol have interior design vocabularies built on warm terracottas, aged woods, and textured plasters \u2014 an aesthetic that zebra shades complement well when specified in the right fabric tones. iL Progetto carries zebra fabrics in warm sand, aged linen, and soft terracotta-adjacent weaves that tie into the Spanish " } },
    { '@type': 'Question', 'name': "With Temecula's huge daily temperature swings, will cellular shades help keep the house comfortable without running the AC all day?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Temecula's 40\u00b0F daily temperature swing in summer is precisely the condition dual-cell cellular shades were designed to address. The double honeycomb construction maintains its insulating air buffer even when the glass surface temperature reaches 130\u00b0F on a south-facing Temecula window, slowing the rate at which that heat enters the living space and giving the HVAC system time to manage rather tha" } },
    { '@type': 'Question', 'name': "What roman shade fabric holds up in Temecula where the UV is extreme and the temperature cycles are severe?", 'acceptedAnswer': { '@type': 'Answer', 'text': "Temecula's inland UV intensity \u2014 unfiltered by any coastal marine layer \u2014 and the severe daily thermal cycling together create one of the most demanding window treatment environments in Southern California. iL Progetto specifies solution-dyed performance fabrics for Temecula roman shade installations: the dye is part of the fiber structure rather than a surface coating, so UV exposure doesn't fade" } }
    ],
  }
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/locations/temecula#localbusiness`,
    'name': 'iL Progetto LLC — Temecula Window Treatments',
    'description': `Custom window treatments in Temecula, CA. Free in-home consultation — we bring the full catalog to your home.`,
    'url': `${SITE_URL}/locations/temecula`,
    'telephone': '+18583381678',
    'email': 'info@ilprogettollc.com',
    'priceRange': '$$',
    'image': `${SITE_URL}/images/og-image.jpg`,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Temecula',
      'addressRegion': 'CA',
      'addressCountry': 'US',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '33.4936',
      'longitude': '-117.1484',
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Temecula',
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
        style={{ background: 'linear-gradient(rgba(15,13,11,0.62), rgba(15,13,11,0.62)), url(/images/locations/temecula.jpg) center/cover no-repeat', minHeight: '60vh', paddingTop: '76px' }}
        aria-label="Temecula window treatments hero"
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

        {/* Subtle temperature gradient accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 100% 100%, rgba(197,165,114,0.08) 0%, transparent 55%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 px-4 md:px-10 lg:px-20 pb-16 md:pb-24 max-w-[800px]">
          <p
            className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-8"
            style={{ color: 'var(--sand-light)' }}
          >
            <span className="inline-block w-9 h-px bg-current" aria-hidden="true" />
            Temecula, CA — Wine Country Inland
          </p>

          <h1
            className="font-[300] leading-[1.02] tracking-[-0.025em] mb-8"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(36px, 5.5vw, 68px)',
              color: 'var(--cream)',
            }}
          >
            40°F Before Noon.{' '}
            <br className="hidden md:block" />
            <em className="italic" style={{ color: 'var(--sand-light)' }}>
              100°F by 3 PM.
            </em>
          </h1>

          <p
            className="text-[16px] leading-[1.85] max-w-[560px] mb-10"
            style={{ color: 'rgba(251,251,249,0.72)' }}
          >
            Temecula Valley sees some of the most dramatic daily temperature swings in Southern
            California — 40°F mornings followed by 100°F+ afternoons in summer. Manual shades
            can't keep up with that range. Automated window treatments can — and they pay for
            themselves in energy savings.
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

      {/* ══ AUTOMATION STORY — TWO-COLUMN ═════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--cream)' }}
        aria-labelledby="automation-story-heading"
      >
        <div className="mb-14">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Why Automation Makes Sense Here
          </p>
          <h2
            id="automation-story-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em]"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(26px, 3.2vw, 44px)',
            }}
          >
            A Day in the Life of a{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Smart Home
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: 'rgba(0,0,0,0.08)' }}>
          {/* Morning */}
          <div
            className="px-8 md:px-12 py-12"
            style={{ background: 'var(--cream)' }}
          >
            <div
              className="inline-block text-[11px] tracking-[0.2em] uppercase px-3 py-1.5 mb-6"
              style={{ background: 'var(--warm)', color: 'var(--sand)' }}
            >
              Morning Position
            </div>
            <div
              className="font-[300] leading-none mb-6"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(52px, 8vw, 96px)',
                color: 'var(--ink)',
                opacity: 0.15,
              }}
              aria-hidden="true"
            >
              6:00
            </div>
            <h3
              className="text-[22px] font-[300] mb-4 leading-[1.2]"
              style={{ fontFamily: 'var(--serif)' }}
            >
              Shades Open, Light In
            </h3>
            <p className="text-[14px] leading-[1.78]" style={{ color: 'var(--mid)' }}>
              The valley is cool and clear. Shades rise automatically at sunrise — filling your home
              with morning light while the temperature is still comfortable. No manual intervention
              required.
            </p>
          </div>

          {/* Afternoon */}
          <div
            className="px-8 md:px-12 py-12"
            style={{ background: 'var(--warm)' }}
          >
            <div
              className="inline-block text-[11px] tracking-[0.2em] uppercase px-3 py-1.5 mb-6"
              style={{ background: 'rgba(197,165,114,0.2)', color: 'var(--sand)' }}
            >
              Afternoon Position
            </div>
            <div
              className="font-[300] leading-none mb-6"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(52px, 8vw, 96px)',
                color: 'var(--sand)',
                opacity: 0.35,
              }}
              aria-hidden="true"
            >
              3:00
            </div>
            <h3
              className="text-[22px] font-[300] mb-4 leading-[1.2]"
              style={{ fontFamily: 'var(--serif)' }}
            >
              Shades Down, Heat Blocked
            </h3>
            <p className="text-[14px] leading-[1.78]" style={{ color: 'var(--mid)' }}>
              The mercury climbs toward 100°F. Shades descend before it gets uncomfortable —
              intercepting solar heat gain on west and south windows exactly when it matters most.
            </p>
          </div>
        </div>

        {/* Note */}
        <div
          className="mt-8 px-8 py-5 flex items-center gap-4"
          style={{ background: 'var(--ink)' }}
        >
          <svg
            width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="var(--sand)" strokeWidth="1.5" className="flex-shrink-0"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p className="text-[13px] leading-[1.65]" style={{ color: 'rgba(251,251,249,0.72)' }}>
            <strong style={{ color: 'var(--sand-light)' }}>Automated shading handles this for you.</strong>{' '}
            Set it once — your shades respond to schedules, sun position, or smart home triggers
            from Lutron, Somfy, or Apple Home.
          </p>
        </div>
      </section>

      {/* ══ PRODUCTS ══════════════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-20"
        style={{ background: 'var(--warm)' }}
        aria-labelledby="temecula-products-heading"
      >
        <h2
          id="temecula-products-heading"
          className="font-[300] leading-[1.06] tracking-[-0.015em] mb-12"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(24px, 3vw, 40px)',
          }}
        >
          Products Built for{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>
            Temecula's Range
          </em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {automationProducts.map((p, i) => (
            <article
              key={p.name}
              className={`group flex flex-col ${p.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
              style={{ background: 'var(--cream)', transitionDelay: `${i * 0.08}s` }}
            >
              <div
                className="w-full overflow-hidden"
                style={{ aspectRatio: p.featured ? '16/7' : '4/3' }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                {p.featured && (
                  <span
                    className="inline-block text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 mb-3 self-start"
                    style={{ background: 'var(--warm)', color: 'var(--sand)' }}
                  >
                    Most Popular
                  </span>
                )}
                <h3
                  className="text-[20px] font-[300] mb-2 leading-[1.2]"
                  style={{ fontFamily: 'var(--serif)' }}
                >
                  {p.name}
                </h3>
                <p className="text-[13px] leading-[1.75] flex-1" style={{ color: 'var(--mid)' }}>
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
        className="px-4 md:px-10 lg:px-20 py-28 text-center"
        style={{ background: 'var(--ink)' }}
        aria-label="Book a consultation"
      >
        <p
          className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-6"
          style={{ color: 'var(--sand-light)' }}
        >
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          Free In-Home Visit · Temecula
        </p>
        <h2
          className="font-[300] leading-[1.05] tracking-[-0.02em] mb-6"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(30px, 4vw, 54px)',
            color: 'var(--cream)',
          }}
        >
          Automate Your{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>
            Temecula Home
          </em>
        </h2>
        <p
          className="text-[15px] leading-[1.85] max-w-[500px] mx-auto mb-10"
          style={{ color: 'rgba(251,251,249,0.65)' }}
        >
          Our designer visits your home with the full motorized collection — samples, measurements,
          and pricing in one appointment. No showroom required. Call{' '}
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
          Popular in Temecula
        </p>
        <h2 className="font-[300] leading-[1.1] mb-8" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px,2.5vw,32px)', color: 'var(--ink)' }}>
          Window Treatments We Install in Temecula
        </h2>
        <div className="flex flex-wrap gap-3 mb-8">
          <Link key="cellular" to="/catalog" search={{ product: "cellular" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Cellular Shades</Link>
          <Link key="plantation" to="/catalog" search={{ product: "plantation" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Plantation Shutters</Link>
          <Link key="motorized" to="/catalog" search={{ product: "motorized" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Motorized Shading</Link>
          <Link key="roller" to="/catalog" search={{ product: "roller" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Roller Shades</Link>
          <Link key="sun-screens" to="/catalog" search={{ product: "sun-screens" }} className="px-4 py-2 text-[12px] tracking-[0.1em] uppercase border transition-colors hover:bg-[var(--sand)] hover:text-white hover:border-[var(--sand)]" style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}>Solar Screens</Link>
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