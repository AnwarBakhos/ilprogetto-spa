import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import { setupScrollReveal } from '@/lib/utils'
import { CITY_SLUGS, PRODUCT_SLUGS, cityName } from '@/data/seo'
import { SITE_URL } from '@/lib/config'


// ─── Route ─────────────────────────────────────────────────────────────────────
export const Route = (createFileRoute as any)('/locations')({
  head: () => ({
    meta: [
      { title: 'Window Treatment Service Areas San Diego County | iL Progetto LLC' },
      {
        name: 'description',
        content:
          'iL Progetto LLC provides custom window treatment installation across San Diego County and Southern California — roller shades, plantation shutters, motorized blinds, and more in every neighborhood we serve.',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Window Treatment Service Areas San Diego County | iL Progetto LLC' },
      { property: 'og:description', content: 'iL Progetto LLC provides custom window treatment installation across San Diego County and Southern California — roller shades, plantation shutters, motorized blinds, and more in every neighborhood we serve.' },
      { property: 'og:image', content: `${SITE_URL}/images/og-image.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'canonical', href: `${SITE_URL}/locations` },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'iL Progetto LLC',
          url: `${SITE_URL}`,
          telephone: '+18583381678',
          email: 'info@ilprogettollc.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'San Diego',
            addressRegion: 'CA',
            postalCode: '92127',
            addressCountry: 'US',
          },
          areaServed: CITY_SLUGS.map(slug => ({
            '@type': 'City',
            name: cityName(slug),
          })),
        }),
      },
    ],
  }),
  component: LocationsIndexPage,
})

// ─── Page ──────────────────────────────────────────────────────────────────────
function LocationsIndexPage() {
  const ref = useRef<HTMLDivElement>(null)
  const productEntries = Object.entries(PRODUCT_SLUGS)

  useEffect(() => {
    if (!ref.current) return
    ref.current.querySelectorAll('.fade-up').forEach((el) => el.classList.add('visible'))
    return setupScrollReveal(ref.current)
  }, [])

  return (
    <div ref={ref}>

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <header
        className="relative flex flex-col justify-end overflow-hidden"
        style={{
          background: 'var(--ink)',
          minHeight: '50vh',
          paddingTop: '76px',
        }}
        aria-label="Service Areas"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 px-4 md:px-10 lg:px-20 pb-16 md:pb-20 max-w-[860px]">
          <p
            className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-8 fade-up"
            style={{ color: 'var(--sand-light)' }}
          >
            <span className="inline-block w-9 h-px bg-current" aria-hidden="true" />
            Service Areas
          </p>

          <h1
            className="font-[300] leading-[1.02] tracking-[-0.02em] mb-8 fade-up delay-1"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(40px, 5.5vw, 76px)',
              color: 'var(--cream)',
            }}
          >
            Window Treatments{' '}
            <em className="italic" style={{ color: 'var(--sand-light)' }}>
              Across San Diego
            </em>
          </h1>

          <p
            className="text-[16px] leading-[1.85] max-w-[560px] fade-up delay-2"
            style={{ color: 'rgba(251,251,249,0.72)' }}
          >
            We serve all of San Diego County and beyond — from La Jolla to Temecula, Coronado to
            Escondido. Every consultation is at your home, every installation by our licensed team.
          </p>
        </div>
      </header>

      {/* ══ CITY GRID ═════════════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--warm)' }}
        aria-labelledby="cities-heading"
      >
        <div className="mb-14">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            All Service Areas
          </p>
          <h2
            id="cities-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em] fade-up delay-1"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(28px, 3.2vw, 44px)',
            }}
          >
            Every City We{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Serve
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[var(--hairline)]">
          {CITY_SLUGS.map((city, i) => {
            const cName = cityName(city)
            return (
              <div
                key={city}
                className="bg-[var(--warm)] p-8 fade-up hover:bg-[var(--cream)] transition-colors group"
                style={{ transitionDelay: `${i * 0.04}s` }}
              >
                <Link
                  to={`/locations/${city}` as any}
                  className="block"
                >
                  <h2
                    className="text-[20px] font-[400] mb-5 leading-[1.15] group-hover:text-[var(--sand)] transition-colors"
                    style={{ fontFamily: 'var(--serif)' }}
                  >
                    {cName}
                  </h2>
                </Link>

                <ul className="flex flex-col gap-1.5 list-none mb-5">
                  {productEntries.map(([slug, label]) => (
                    <li key={slug}>
                      <Link
                        to={`/locations/${city}/${slug}` as any}
                        className="text-[11px] leading-[1.6] transition-colors hover:text-[var(--sand)]"
                        style={{ color: 'var(--mid)' }}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/locations/${city}` as any}
                  className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.14em] uppercase transition-colors hover:gap-2.5"
                  style={{ color: 'var(--sand)' }}
                >
                  View all {cName} treatments <span aria-hidden="true">→</span>
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--sand-light)', opacity: undefined }}
        aria-label="Book a consultation"
      >
        <div
          className="py-20 px-12 md:px-20 text-center max-w-[780px] mx-auto"
          style={{ background: 'var(--cream)' }}
        >
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Ready to Begin?
          </p>
          <h2
            className="font-[300] leading-[1.06] tracking-[-0.015em] mb-6 fade-up delay-1"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(28px, 3.5vw, 46px)',
            }}
          >
            Book a Free{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              In-Home Consultation
            </em>
          </h2>
          <p
            className="text-[16px] leading-[1.85] mb-10 fade-up delay-2"
            style={{ color: 'var(--mid)' }}
          >
            Our designer visits your home with the complete collection — samples, measuring tools,
            and pricing — all in one visit. No showroom trip. No obligation.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2.5 px-10 py-4 text-[11px] tracking-[0.2em] uppercase btn-interactive fade-up delay-3"
            style={{ background: 'var(--ink)', color: 'var(--cream)' }}
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
  )
}
