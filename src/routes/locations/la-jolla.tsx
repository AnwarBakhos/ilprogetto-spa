import { createFileRoute, Link } from '@tanstack/react-router'
import { SITE_URL } from '@/lib/config'


export const Route = (createFileRoute as any)('/locations/la-jolla')({
  head: () => ({
    meta: [
      { title: 'Custom Window Treatments La Jolla, CA | iL Progetto LLC' },
      {
        name: 'description',
        content:
          'Luxury custom window treatments for La Jolla homes — HOA-compliant, Coastal Commission-approved. Plantation shutters, motorized shading, and more. Free in-home consultation.',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Custom Window Treatments La Jolla, CA | iL Progetto LLC' },
      {
        property: 'og:description',
        content:
          'Luxury custom window treatments for La Jolla homes — HOA-compliant, Coastal Commission-approved. Plantation shutters, motorized shading, and more. Free in-home consultation.',
      },
      { property: 'og:image', content: `${SITE_URL}/images/og-image.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: `${SITE_URL}/locations/la-jolla` }],
  }),
  component: LaJollaPage,
})

const complianceCards = [
  {
    icon: '⊞',
    title: 'HOA Review',
    body:
      'We document all product specifications, colors, and finishes to satisfy even the most rigorous La Jolla HOA review boards — before installation begins.',
  },
  {
    icon: '◌',
    title: 'Coastal Commission',
    body:
      'Our window treatments are selected and specified to comply with California Coastal Commission guidelines, preserving your permit standing.',
  },
  {
    icon: '◇',
    title: 'Licensed & Insured',
    body:
      'Every installation is completed by our fully licensed, bonded, and insured team — giving you both quality assurance and peace of mind.',
  },
]

function LaJollaPage() {
  return (
    <div style={{ background: 'var(--cream)' }}>

      {/* HERO — split layout */}
      <header
        className="relative overflow-hidden"
        style={{ background: 'var(--cream)', minHeight: '72vh' }}
        aria-label="La Jolla window treatments"
      >
        {/* thin top border */}
        <div style={{ height: '1px', background: 'var(--hairline)' }} aria-hidden="true" />

        <div className="flex flex-col lg:flex-row items-stretch min-h-[72vh]">

          {/* Left: text */}
          <div className="flex-1 flex flex-col justify-center px-4 md:px-10 lg:px-20 py-24 lg:py-0 max-w-[640px]">
            <p
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.26em] uppercase mb-8"
              style={{ color: 'var(--sand)' }}
            >
              <span className="inline-block w-10 h-px bg-current" aria-hidden="true" />
              La Jolla, California
            </p>

            <h1
              className="font-[300] leading-[1.04] tracking-[-0.025em] mb-7"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(34px, 4.8vw, 62px)',
                color: 'var(--ink)',
              }}
            >
              Where Every View{' '}
              <em className="italic" style={{ color: 'var(--sand)' }}>
                Demands Precision
              </em>
            </h1>

            <p
              className="text-[16px] leading-[1.9] mb-6"
              style={{ color: 'var(--mid)', maxWidth: '480px' }}
            >
              Ocean glare, demanding HOA requirements, Coastal Commission compliance, and walls of
              floor-to-ceiling glass — La Jolla homes require window treatments that are as
              architecturally considered as they are functional.
            </p>
            <p
              className="text-[16px] leading-[1.9] mb-10"
              style={{ color: 'var(--mid)', maxWidth: '480px' }}
            >
              We work with La Jolla's most discerning homeowners to specify treatments that satisfy
              every regulatory requirement while enhancing — never compromising — the views that
              define these exceptional properties.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2.5 px-9 py-4 text-[11px] tracking-[0.2em] uppercase"
                style={{ background: 'var(--ink)', color: 'var(--cream)' }}
              >
                Schedule Consultation
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <a
                href="tel:+18583381678"
                className="inline-flex items-center gap-2 px-9 py-4 text-[11px] tracking-[0.2em] uppercase border"
                style={{ borderColor: 'var(--hairline)', color: 'var(--mid)' }}
              >
                (858) 338-1678
              </a>
            </div>
          </div>

          {/* Right: decorative large serif text */}
          <div
            className="hidden lg:flex flex-1 items-center justify-center relative overflow-hidden"
            style={{ background: 'linear-gradient(rgba(15,13,11,0.45), rgba(15,13,11,0.45)), url(/images/locations/la-jolla.png) center/cover no-repeat' }}
            aria-hidden="true"
          >
            <span
              className="select-none pointer-events-none font-[300] leading-none tracking-[-0.05em] absolute"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '100px',
                color: 'var(--sand)',
                opacity: 0.35,
                transform: 'rotate(-8deg)',
              }}
            >
              La<br />Jolla
            </span>
            <span
              className="select-none pointer-events-none font-[300] leading-none tracking-[-0.04em]"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '26px',
                color: 'var(--sand)',
                opacity: 0.7,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
              }}
            >
              Est. 1869
            </span>
          </div>
        </div>
      </header>

      {/* FEATURED PRODUCT CARDS */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: '#fff' }}
        aria-labelledby="products-heading"
      >
        <div className="mb-14">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Recommended For La Jolla
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
            The La Jolla{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Standard
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Plantation Shutters */}
          <article className="group flex flex-col" style={{ border: '1px solid var(--hairline)' }}>
            <div className="overflow-hidden" style={{ aspectRatio: '4/3', background: 'var(--warm)' }}>
              <img
                src="/images/products/Plantation Shutters.png"
                alt="Plantation Shutters"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-8">
              <h3
                className="text-[22px] font-[400] mb-4 leading-snug"
                style={{ fontFamily: 'var(--serif)', color: 'var(--ink)' }}
              >
                Plantation Shutters
              </h3>
              <p className="text-[15px] leading-[1.85]" style={{ color: 'var(--mid)' }}>
                La Jolla's architectural heritage calls for treatments with genuine permanence.
                Our plantation shutters are specified in materials and finishes approved by area
                HOAs, and their louvered design manages ocean glare while preserving every degree
                of the Pacific view.
              </p>
            </div>
          </article>

          {/* Card 2: Motorized Shading */}
          <article className="group flex flex-col" style={{ border: '1px solid var(--hairline)' }}>
            <div className="overflow-hidden" style={{ aspectRatio: '4/3', background: 'var(--warm)' }}>
              <img
                src="/images/products/Motorized Shades.png"
                alt="Motorized Shading"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-8">
              <h3
                className="text-[22px] font-[400] mb-4 leading-snug"
                style={{ fontFamily: 'var(--serif)', color: 'var(--ink)' }}
              >
                Motorized Shading
              </h3>
              <p className="text-[15px] leading-[1.85]" style={{ color: 'var(--mid)' }}>
                Floor-to-ceiling glass is the signature of La Jolla's finest homes — and it demands
                automation. Our motorized systems integrate with Lutron, Google Home, and Apple
                HomeKit so your shading adjusts with the angle of the sun, not your schedule.
              </p>
            </div>
          </article>
        </div>

        {/* Additional products row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            { img: '/images/products/Cellular Shades.png', name: 'Cellular Shades' },
            { img: '/images/products/Roller Shades.png', name: 'Roller Shades' },
            { img: '/images/products/Zebra Shades.png', name: 'Zebra Shades' },
            { img: '/images/products/Sheer Drapes.jpg', name: 'Sheer Drapes' },
          ].map((p) => (
            <div key={p.name} className="group">
              <div className="overflow-hidden mb-3" style={{ aspectRatio: '1/1', background: 'var(--warm)' }}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="text-[13px] tracking-[0.1em] uppercase" style={{ color: 'var(--mid)' }}>
                {p.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPLIANCE MADE SIMPLE */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--warm)' }}
        aria-labelledby="compliance-heading"
      >
        <div className="mb-14 max-w-[600px]">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            We Handle the Paperwork
          </p>
          <h2
            id="compliance-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em]"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(26px, 3vw, 42px)',
              color: 'var(--ink)',
            }}
          >
            Compliance Made{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Simple
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {complianceCards.map((c) => (
            <div
              key={c.title}
              className="flex flex-col p-8"
              style={{ background: 'var(--cream)', borderTop: '2px solid var(--sand)' }}
            >
              <span
                className="text-[28px] mb-5 leading-none"
                style={{ color: 'var(--sand)', fontFamily: 'var(--serif)' }}
                aria-hidden="true"
              >
                {c.icon}
              </span>
              <h3
                className="text-[17px] font-[500] mb-3 leading-snug"
                style={{ color: 'var(--ink)' }}
              >
                {c.title}
              </h3>
              <p className="text-[14px] leading-[1.8]" style={{ color: 'var(--mid)' }}>
                {c.body}
              </p>
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

      {/* CTA — dark elegant */}
      <section
        className="px-4 md:px-10 lg:px-20 py-28 flex flex-col items-center text-center"
        style={{ background: 'var(--ink)' }}
        aria-label="Schedule your La Jolla consultation"
      >
        <p
          className="inline-flex items-center gap-3 text-[11px] tracking-[0.26em] uppercase mb-7"
          style={{ color: 'var(--sand-light)' }}
        >
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          La Jolla, California
        </p>
        <h2
          className="font-[300] leading-[1.04] tracking-[-0.02em] mb-6 max-w-[600px]"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(28px, 3.8vw, 52px)',
            color: 'var(--cream)',
          }}
        >
          Schedule Your La Jolla{' '}
          <em className="italic" style={{ color: 'var(--sand-light)' }}>
            Consultation
          </em>
        </h2>
        <p
          className="text-[15px] leading-[1.9] mb-12 max-w-[520px]"
          style={{ color: 'rgba(251,251,249,0.65)' }}
        >
          One visit. Full collection samples. Transparent pricing. And complete documentation for
          any HOA or Coastal Commission submissions you may need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/booking"
            className="inline-flex items-center justify-center gap-2.5 px-10 py-4 text-[11px] tracking-[0.2em] uppercase"
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
            className="inline-flex items-center justify-center gap-2 px-10 py-4 text-[11px] tracking-[0.2em] uppercase border"
            style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(251,251,249,0.7)' }}
          >
            (858) 338-1678
          </a>
        </div>
      </section>

    </div>
  )
}
