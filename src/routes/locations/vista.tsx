import { createFileRoute, Link } from '@tanstack/react-router'

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
      { property: 'og:image', content: '/images/og-image.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: 'https://www.ilprogettollc.com/locations/vista' }],
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
  return (
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
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link
            to="/catalog"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 32px', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', border: '1px solid rgba(0,0,0,0.25)', color: 'var(--ink)', textDecoration: 'none' }}
          >
            See Full Selection →
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
  )
}
