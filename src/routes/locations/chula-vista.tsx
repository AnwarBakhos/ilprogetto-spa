import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = (createFileRoute as any)('/locations/chula-vista')({
  head: () => ({
    meta: [
      { title: 'Custom Window Treatments Chula Vista CA | iL Progetto LLC' },
      { name: 'description', content: 'Custom window treatments for Chula Vista — Otay Ranch, Eastlake, Sunbow. Roller shades, plantation shutters, motorized blinds. Free in-home consultation.' },
      { name: 'robots', content: 'index, follow' },
    ],
    links: [{ rel: 'canonical', href: 'https://www.ilprogettollc.com/locations/chula-vista' }],
  }),
  component: ChulaVistaPage,
})

const products = [
  { name: 'Roller Shades', img: '/images/products/Roller Shades.png', desc: 'Clean solar or blackout fabric on a cassette system — the most popular choice in Otay Ranch new builds.' },
  { name: 'Zebra Shades', img: '/images/products/Zebra Shades.png', desc: 'Alternating sheer and solid bands give you precise light and privacy control throughout the day.' },
  { name: 'Cellular Shades', img: '/images/products/Cellular Shades.png', desc: 'Honeycomb insulation reduces heat gain — especially valuable in Chula Vista\'s warmer inland neighborhoods.' },
  { name: 'Plantation Shutters', img: '/images/products/Plantation Shutters.png', desc: 'Louvered panels that complement Mediterranean and stucco exteriors common across Eastlake and Sunbow.' },
  { name: 'Motorized Shades', img: '/images/products/Motorized Shades.png', desc: 'App and voice-controlled shading — a natural upgrade for smart home systems in new master-planned builds.' },
  { name: 'Roman Shades', img: '/images/products/Roman Shades.jpg', desc: 'Tailored fabric folds for bedrooms and living rooms where a softer, warmer look is preferred.' },
]

const reasons = [
  { title: 'Local & Licensed', body: 'California Contractors License #1127055. Fully insured with general liability and workers\' compensation. We serve every Chula Vista neighborhood.' },
  { title: 'Free In-Home Measurement', body: 'We bring every sample and take precise measurements at your home — no showroom required. One appointment, complete quote.' },
  { title: 'Same-Day Installation Quotes', body: 'Leave your consultation with a full written quote and timeline. No waiting for estimates to arrive by email.' },
]

function ChulaVistaPage() {
  return (
    <div>
      <header
        className="relative flex flex-col justify-end overflow-hidden"
        style={{ background: 'linear-gradient(rgba(15,13,11,0.62), rgba(15,13,11,0.62)), url(/images/locations/chula-vista.png) center/cover no-repeat', minHeight: '60vh' }}
        aria-label="Chula Vista window treatments"
      >
        <div className="absolute inset-0 opacity-[0.035]" aria-hidden="true"
          style={{ backgroundImage: 'repeating-linear-gradient(135deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '24px 24px' }} />
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{ background: 'radial-gradient(at 80% 80%, rgba(197,165,114,0.07) 0%, transparent 60%)' }} />
        <div className="relative z-10 px-4 md:px-10 lg:px-20 pb-16 md:pb-24 max-w-[860px]">
          <p className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-8"
             style={{ color: 'var(--sand-light)' }}>
            <span className="inline-block w-9 h-px bg-current" aria-hidden="true" />
            Otay Ranch · Eastlake · Sunbow · Downtown Chula Vista
          </p>
          <h1 className="font-[300] leading-[1.02] tracking-[-0.025em] mb-8"
              style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(38px, 5.5vw, 72px)', color: 'var(--cream)' }}>
            A Growing City Deserves{' '}
            <em className="italic" style={{ color: 'var(--sand-light)' }}>Refined Windows</em>
          </h1>
          <p className="text-[16px] leading-[1.85] max-w-[560px] mb-10"
             style={{ color: 'rgba(251,251,249,0.72)' }}>
            From brand-new Otay Ranch builds to 1960s homes near downtown, iL Progetto brings the
            complete window treatment collection to your door — samples, measurements, and a
            same-day quote, all in one visit at no charge.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/booking"
              className="inline-flex items-center gap-2.5 px-9 py-4 text-[11px] tracking-[0.2em] uppercase btn-interactive"
              style={{ background: 'var(--sand)', color: '#fff' }}>
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

      <section className="px-4 md:px-10 lg:px-20 py-20" style={{ background: 'var(--warm)' }}>
        <p className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
           style={{ color: 'var(--sand)' }}>
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          Why Chula Vista Homeowners Choose Us
        </p>
        <h2 className="font-[300] leading-[1.06] tracking-[-0.015em] mb-14"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3.2vw, 42px)' }}>
          The Showroom Comes <em className="italic" style={{ color: 'var(--sand)' }}>To You</em>
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

      <section className="px-4 md:px-10 lg:px-20 py-20" style={{ background: 'var(--cream)' }}
               aria-labelledby="cv-products-heading">
        <p className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
           style={{ color: 'var(--sand)' }}>
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          Our Collection
        </p>
        <h2 id="cv-products-heading" className="font-[300] leading-[1.06] tracking-[-0.015em] mb-12"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 3vw, 40px)' }}>
          Products for Every <em className="italic" style={{ color: 'var(--sand)' }}>Chula Vista Home</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <article key={p.name} className="group flex flex-col"
                     style={{ background: 'var(--warm)' }}>
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

      <section className="px-4 md:px-10 lg:px-20 py-28 text-center"
               style={{ background: 'var(--ink)' }}>
        <p className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-7"
           style={{ color: 'var(--sand-light)' }}>
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          Free In-Home Visit · Chula Vista
        </p>
        <h2 className="font-[300] leading-[1.04] tracking-[-0.02em] mb-6"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(30px, 4vw, 54px)', color: 'var(--cream)' }}>
          Book Your <em className="italic" style={{ color: 'var(--sand)' }}>Chula Vista Consultation</em>
        </h2>
        <p className="text-[15px] leading-[1.85] max-w-[500px] mx-auto mb-10"
           style={{ color: 'rgba(251,251,249,0.65)' }}>
          We visit Otay Ranch, Eastlake, Sunbow, and every Chula Vista neighborhood with our
          complete collection — at no charge.
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
  )
}
