import { createFileRoute, Link, notFound, Outlet, useMatches } from '@tanstack/react-router'
import { CITY_SLUGS, PRODUCT_SLUGS, cityName } from '@/data/seo'

// ─── Route ─────────────────────────────────────────────────────────────────────
export const Route = (createFileRoute as any)('/locations/$city')({
  head: ({ params }: any) => {
    const cName = cityName(params.city ?? '')
    return {
      meta: [
        { title: `Custom Window Treatments in ${cName}, CA | iL Progetto LLC` },
        {
          name: 'description',
          content: `Professional custom window treatment installation in ${cName}, CA — roller shades, plantation shutters, motorized blinds, cellular shades, and more. Free in-home consultation by iL Progetto LLC.`,
        },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: `Custom Window Treatments in ${cName}, CA | iL Progetto LLC` },
        { property: 'og:description', content: `Free in-home window treatment consultation in ${cName}. We bring the full collection to your home.` },
        { property: 'og:image', content: 'https://drive.google.com/thumbnail?id=1uaY6LDCh59x8TymxSD3VmynmW35bK1ou&sz=w1200' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      links: [{ rel: 'canonical', href: `https://ilprogetto-spa.vercel.app/locations/${params.city}` }],
    }
  },
  component: CityOverviewPage,
})

// ─── Product descriptions ─────────────────────────────────────────────────────
const PRODUCT_DESC: Record<string, string> = {
  'roller-shades': 'Clean, modern light control',
  'zebra-shades': 'Alternating sheer and solid bands',
  'cellular-shades': 'Insulating honeycomb construction',
  'roman-shades': 'Soft architectural folds',
  'wood-aluminum-blinds': 'Classic ladder-cord slats',
  'shangri-la-shades': 'Floating vanes, filtered light',
  'curtains-drapery': 'Floor-length fabric elegance',
  'motorized-shading': 'Voice and app-controlled',
  'plantation-shutters': 'Timeless louvered panels',
  'faux-wood-blinds': 'Moisture-resistant alternative',
  'aluminum-blinds': 'Lightweight, durable slats',
  'vertical-blinds': 'Ideal for patio doors',
  'panel-track-blinds': 'Wide spans and sliding doors',
  'woven-wood-shades': 'Natural materials, organic texture',
  'sheer-shades': 'Diffused light, soft privacy',
  'blackout-curtains': 'Complete light elimination',
  'sheer-drapes': 'Lightweight flowing panels',
  'motorized-exterior': 'Outdoor sun and wind control',
  'sun-screens': 'UV and glare reduction',
  'awnings': 'Retractable exterior shade',
}

const TRUST_POINTS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Licensed CA #1127055',
    body: 'California Contractors License. Fully insured with general liability and workers\' compensation.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Free Consultation',
    body: 'We come to your home with the complete collection — no showroom, no obligation, no fee.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: '5-Star Rated',
    body: 'Consistently top-rated by homeowners across San Diego County on Google and Yelp.',
  },
]

// ─── CityOverviewPage ─────────────────────────────────────────────────────────
function CityOverviewPage() {
  const { city } = Route.useParams()
  if (!CITY_SLUGS.includes(city as typeof CITY_SLUGS[number])) throw notFound()

  const matches = useMatches()
  const isProductPage = matches.some((m: any) => m.routeId?.includes('$product'))
  if (isProductPage) return <Outlet />

  const cName = cityName(city)
  const productEntries = Object.entries(PRODUCT_SLUGS)

  return (
    <div>

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <header
        className="relative flex flex-col justify-end overflow-hidden"
        style={{
          background: 'var(--ink)',
          minHeight: '60vh',
          paddingTop: '76px',
        }}
        aria-label={`Window treatments in ${cName}`}
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 px-4 md:px-10 lg:px-20 pb-20 md:pb-28 max-w-[860px]">
          <p
            className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-8 fade-up"
            style={{ color: 'var(--sand-light)' }}
          >
            <span className="inline-block w-9 h-px bg-current" aria-hidden="true" />
            Local Service
          </p>

          <h1
            className="font-[300] leading-[1.02] tracking-[-0.02em] mb-8 fade-up delay-1"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(40px, 5.5vw, 76px)',
              color: 'var(--cream)',
            }}
          >
            Custom Window Treatments in{' '}
            <em className="italic" style={{ color: 'var(--sand-light)' }}>
              {cName}, CA
            </em>
          </h1>

          <p
            className="text-[16px] leading-[1.85] max-w-[560px] mb-10 fade-up delay-2"
            style={{ color: 'rgba(251,251,249,0.72)' }}
          >
            iL Progetto LLC serves {cName} homeowners with custom-measured, professionally
            installed window treatments. Our designer visits your home with the complete
            collection — no showroom trip needed.
          </p>

          <div className="flex flex-wrap gap-4 fade-up delay-3">
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
            <Link
              to={'/locations' as any}
              className="inline-flex items-center gap-2 px-9 py-4 text-[11px] tracking-[0.2em] uppercase border transition-colors hover:border-[var(--sand-light)]"
              style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'rgba(251,251,249,0.7)' }}
            >
              ← All Service Areas
            </Link>
          </div>
        </div>
      </header>

      {/* ══ PRODUCTS GRID ═════════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--warm)' }}
        aria-labelledby="products-heading"
      >
        <div className="mb-14">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Available Products
          </p>
          <h2
            id="products-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em] fade-up delay-1"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(28px, 3.2vw, 44px)',
            }}
          >
            Every Treatment,{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Custom for {cName}
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--hairline)]">
          {productEntries.map(([slug, label], i) => (
            <Link
              key={slug}
              to={`/locations/${city}/${slug}` as any}
              className="block bg-[var(--warm)] p-8 fade-up hover:bg-[var(--cream)] transition-colors group"
              style={{
                transitionDelay: `${i * 0.03}s`,
                border: 'none',
                outline: 'none',
              }}
            >
              <div
                className="h-px mb-6 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: 'var(--sand)' }}
                aria-hidden="true"
              />
              <h3
                className="text-[17px] font-[400] mb-2 leading-[1.2] group-hover:text-[var(--sand)] transition-colors"
                style={{ fontFamily: 'var(--serif)' }}
              >
                {label}
              </h3>
              <p className="text-[12px] leading-[1.7]" style={{ color: 'var(--mid)' }}>
                {PRODUCT_DESC[slug] ?? 'Custom-measured for your home'}
              </p>
              <p
                className="text-[10px] tracking-[0.14em] uppercase mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: 'var(--sand)' }}
              >
                Learn more →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ══ WHY iL PROGETTO ═══════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--cream)' }}
        aria-labelledby="why-heading"
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-14">
            <p
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
              style={{ color: 'var(--sand)' }}
            >
              <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
              Why Choose Us
            </p>
            <h2
              id="why-heading"
              className="font-[300] leading-[1.06] tracking-[-0.015em] fade-up delay-1"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(28px, 3.2vw, 44px)',
              }}
            >
              Why iL Progetto in{' '}
              <em className="italic" style={{ color: 'var(--sand)' }}>
                {cName}
              </em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--hairline)]">
            {TRUST_POINTS.map(({ icon, title, body }, i) => (
              <div
                key={title}
                className="bg-[var(--cream)] p-10 fade-up"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                  style={{
                    border: '0.5px solid var(--sand-light)',
                    color: 'var(--sand)',
                  }}
                >
                  {icon}
                </div>
                <h3
                  className="text-[18px] font-[400] mb-3 leading-[1.2]"
                  style={{ fontFamily: 'var(--serif)' }}
                >
                  {title}
                </h3>
                <p className="text-[14px] leading-[1.85]" style={{ color: 'var(--mid)' }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--ink)' }}
        aria-label="Book a consultation"
      >
        <div className="max-w-[760px]">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
            style={{ color: 'var(--sand-light)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Ready to Begin?
          </p>
          <h2
            className="font-[300] leading-[1.06] tracking-[-0.015em] mb-6 fade-up delay-1"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              color: 'var(--cream)',
            }}
          >
            Book a Free Consultation in{' '}
            <em className="italic" style={{ color: 'var(--sand-light)' }}>
              {cName}
            </em>
          </h2>
          <p
            className="text-[16px] leading-[1.85] mb-10 fade-up delay-2"
            style={{ color: 'rgba(251,251,249,0.65)' }}
          >
            Our designer will visit your {cName} home with fabric samples, measuring tools,
            and pricing — all in one appointment at no charge.
          </p>
          <div className="flex flex-wrap gap-4 fade-up delay-3">
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
              className="inline-flex items-center gap-2.5 px-9 py-4 text-[11px] tracking-[0.2em] uppercase border transition-colors hover:border-[var(--sand-light)]"
              style={{ borderColor: 'rgba(255,255,255,0