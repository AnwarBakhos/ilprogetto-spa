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
    img: '/images/products/Roman Shades.jpg',
    name: 'Roman Shades',
    featured: false,
    desc: 'Soft fabric folds that automate beautifully for living rooms and primary suites.',
  },
]

function TemeculaPage() {
  return (
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
  )
}
