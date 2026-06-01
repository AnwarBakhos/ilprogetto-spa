import { createFileRoute, Link } from '@tanstack/react-router'
import { CITY_SLUGS, POSITION_SLUGS, cityName } from '@/data/seo'

export const Route = createFileRoute('/careers/')({
  head: () => ({
    meta: [
      { title: 'Careers | Window Treatment Jobs San Diego — iL Progetto LLC' },
      { name: 'description', content: 'Join iL Progetto LLC — San Diego\'s premier custom window treatment company. Hiring installation technicians and design & sales consultants across San Diego, Poway, Carlsbad, La Jolla, and surrounding communities.' },
      { name: 'keywords', content: 'window treatment jobs San Diego, blind installer jobs San Diego, window covering installer careers, design sales consultant San Diego, iL Progetto careers' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Careers | Window Treatment Jobs San Diego — iL Progetto LLC' },
      { property: 'og:description', content: "Join iL Progetto LLC — San Diego's premier custom window treatment company. Hiring installation technicians and design & sales consultants across San Diego, Poway, Carlsbad, La Jolla, and surrounding communities." },
      { property: 'og:url', content: 'https://www.ilprogettollc.com/careers/' },
      { property: 'og:image', content: '/images/og-image.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Careers | Window Treatment Jobs San Diego — iL Progetto LLC' },
      { name: 'twitter:description', content: "Join iL Progetto LLC — San Diego's premier custom window treatment company. Hiring installation technicians and design & sales consultants across San Diego, Poway, Carlsbad, La Jolla, and surrounding communities." },
    ],
    links: [
      { rel: 'canonical', href: 'https://www.ilprogettollc.com/careers/' },
    ],
  }),
  component: CareersIndexPage,
})

function CareersIndexPage() {
  return (
    <div>
      <header className="px-10 md:px-20 py-20 md:py-28 text-center"
              style={{ background: 'var(--ink)' }}>
        <p className="inline-flex items-center justify-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
           style={{ color: 'var(--sand)' }}>
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          Now Hiring
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
        </p>
        <h1 className="font-[300] leading-[1.04] tracking-[-0.015em] mb-6"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 5vw, 62px)', color: 'var(--cream)' }}>
          Join <em className="italic" style={{ color: 'var(--sand-light)' }}>iL Progetto LLC</em>
        </h1>
        <p className="text-[16px] leading-[1.85] max-w-[520px] mx-auto" style={{ color: 'rgba(251,251,249,0.65)' }}>
          We're growing our team across Southern California. Field technicians and design consultants welcome.
        </p>
      </header>

      <section className="px-10 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-[860px]">
          {Object.entries(POSITION_SLUGS).map(([slug, title]) => (
            <div key={slug} className="border p-8"
                 style={{ borderColor: 'var(--hairline)', background: 'var(--cream)' }}>
              <p className="text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--sand)' }}>Open Role</p>
              <h2 className="font-[300] mb-4" style={{ fontFamily: 'var(--serif)', fontSize: '22px' }}>{title}</h2>
              <p className="text-[13px] leading-[1.75] mb-6" style={{ color: 'var(--mid)' }}>
                {slug === 'technician'
                  ? 'Measure and install custom window treatments in high-end residential and commercial properties across Southern California.'
                  : 'Conduct in-home consultations, present product recommendations, and close custom window treatment orders for homeowners across our service area.'}
              </p>
              <p className="text-[11px] tracking-[0.14em] uppercase mb-3" style={{ color: 'var(--mid)' }}>Select your area</p>
              <div className="flex flex-wrap gap-1.5">
                {CITY_SLUGS.slice(0, 8).map(city => (
                  <a key={city}
                     href={`/careers/${city}/${slug}`}
                     className="px-2.5 py-1 text-[10px] tracking-[0.1em] uppercase border transition-colors hover:border-[var(--sand)] hover:text-[var(--sand)]"
                     style={{ borderColor: 'var(--hairline)', color: 'var(--mid)' }}>
                    {cityName(city)}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
