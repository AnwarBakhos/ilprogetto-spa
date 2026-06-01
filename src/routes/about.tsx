import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import { setupScrollReveal } from '@/lib/utils'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: "About iL Progetto LLC | San Diego's Mobile Window Treatment Showroom" },
      {
        name: 'description',
        content:
          "iL Progetto LLC is San Diego's premier window treatment company. Our designers visit your home with hundreds of fabric samples — so you can see every option in your actual light, against your real walls. Custom-measured and professionally installed.",
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: "About iL Progetto LLC | San Diego's Mobile Window Treatment Showroom" },
      { property: 'og:description', content: "iL Progetto LLC is San Diego's premier window treatment company. Our designers visit your home with hundreds of fabric samples — so you can see every option in your actual light, against your real walls. Custom-measured and professionally installed." },
      { property: 'og:url', content: 'https://www.ilprogettollc.com/about' },
      { property: 'og:image', content: '/images/og-image.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: "About iL Progetto LLC | San Diego's Mobile Window Treatment Showroom" },
      { name: 'twitter:description', content: "iL Progetto LLC is San Diego's premier window treatment company. Our designers visit your home with hundreds of fabric samples — so you can see every option in your actual light, against your real walls. Custom-measured and professionally installed." },
    ],
    links: [
      { rel: 'canonical', href: 'https://www.ilprogettollc.com/about' },
    ],
  }),
  component: AboutPage,
})

// ─── Data ─────────────────────────────────────────────────────────────────────
const STATS = [
  { num: '4', label: 'Counties Served' },
  { num: '22+', label: 'Product Categories' },
  { num: '100%', label: 'Custom-Measured' },
  { num: 'Free', label: 'Every Consultation' },
]

const PROCESS = [
  {
    num: '01',
    title: 'We Come to You',
    body: 'Our designer arrives at your home with hundreds of fabric samples, hardware options, and measuring tools. You see every option in your own light, against your walls — the only way to be truly certain. No fee, no obligation.',
  },
  {
    num: '02',
    title: 'We Design Together',
    body: 'Our consultants assess your light needs, privacy goals, and design aesthetic room by room. We help you navigate the options and make a confident, informed decision before anything is ordered.',
  },
  {
    num: '03',
    title: 'Custom-Made for Your Windows',
    body: 'Every treatment is measured to your exact window dimensions and manufactured to order. We work with premium suppliers across shades, blinds, shutters, drapery, and exterior systems.',
  },
  {
    num: '04',
    title: 'Professional Installation',
    body: 'Our licensed installation team handles everything — mounting hardware, leveling, programming, and smart home integration. We leave your home clean and your windows transformed.',
  },
]

const DIFFERENTIATORS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'At-Home Design Experience',
    body: 'Choosing window treatments in a showroom is guesswork. In your home, with your light and your decor, every decision is made with complete confidence. Your space becomes the studio.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Licensed & Insured',
    body: 'California Contractors License #1127055. Full general liability and workers\' compensation. Every installer on our team is directly employed — never subcontracted.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Same-Day Response',
    body: 'When you call or text, someone on our team responds the same day. We know your time matters — consultations are scheduled around your schedule, not ours.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: 'Flexible Financing',
    body: 'Through our Synchrony partnership, we offer competitive financing plans that spread payments over months. Beautiful window treatments without the budget strain.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Craftsmanship Guaranteed',
    body: 'If we measured it and we installed it, we stand behind it. Measurement errors are corrected at no charge. Manufacturing defects are handled by us — you never chase a manufacturer.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Proudly San Diego',
    body: 'We live and work in the same communities we serve. From La Jolla to Poway, Del Mar to Chula Vista — we know the light, the architecture, and the neighborhoods.',
  },
]

const COUNTIES = [
  { name: 'San Diego County', cities: 'La Jolla, Poway, Del Mar, Chula Vista, Carlsbad, Escondido, El Cajon, Oceanside' },
  { name: 'Riverside County', cities: 'Temecula, Murrieta, Corona, Riverside, Palm Desert' },
  { name: 'Orange County', cities: 'Irvine, Newport Beach, Anaheim, San Clemente, Dana Point' },
  { name: 'San Bernardino County', cities: 'Ontario, Rancho Cucamonga, Fontana, Chino Hills' },
]

// ─── AboutPage ────────────────────────────────────────────────────────────────
function AboutPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    return setupScrollReveal(ref.current)
  }, [])

  return (
    <div ref={ref}>

      {/* ══ HERO — dark, full-bleed ════════════════════════════════════════════ */}
      <header
        className="relative flex flex-col justify-end overflow-hidden"
        style={{
          background: 'var(--ink)',
          minHeight: '70vh',
          paddingTop: '76px',
        }}
        aria-label="About iL Progetto"
      >
        {/* Subtle texture overlay */}
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
            San Diego, California
          </p>

          <h1
            className="font-[300] leading-[1.02] tracking-[-0.02em] mb-8 fade-up delay-1"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(46px, 6.5vw, 88px)',
              color: 'var(--cream)',
            }}
          >
            We Come{' '}
            <em className="italic" style={{ color: 'var(--sand-light)' }}>
              to You.
            </em>
          </h1>

          <p
            className="text-[17px] leading-[1.85] max-w-[560px] mb-10 fade-up delay-2"
            style={{ color: 'rgba(251,251,249,0.72)' }}
          >
            iL Progetto LLC is a locally owned, mobile window treatment company serving Southern
            California. We eliminated the showroom. Instead, our designers arrive at your door
            with the complete catalog — fabric samples, measuring tools, and pricing — and we
            handle everything from selection through professional installation.
          </p>

          {/* Stats row */}
          <div
            className="flex flex-wrap gap-10 pt-10 border-t fade-up delay-3"
            style={{ borderColor: 'rgba(255,255,255,0.12)' }}
          >
            {STATS.map(({ num, label }) => (
              <div key={label}>
                <span
                  className="block text-[44px] font-[300] leading-none tracking-[-0.02em]"
                  style={{ fontFamily: 'var(--serif)', color: 'var(--sand-light)' }}
                >
                  {num}
                </span>
                <span
                  className="block text-[10px] tracking-[0.2em] uppercase mt-2"
                  style={{ color: 'rgba(251,251,249,0.45)' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ══ BRAND STATEMENT ═══════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--warm)' }}
        aria-label="Our philosophy"
      >
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
          <div>
            <p
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
              style={{ color: 'var(--sand)' }}
            >
              <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
              Who We Are
            </p>
            <h2
              className="font-[300] leading-[1.06] tracking-[-0.015em] fade-up delay-1"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(32px, 3.5vw, 48px)',
              }}
            >
              Luxury &{' '}
              <em className="italic" style={{ color: 'var(--sand)' }}>
                Affordability,
              </em>
              <br />
              Not a Compromise
            </h2>
          </div>
          <div className="fade-up delay-2">
            <p className="text-[16px] leading-[1.9] mb-6" style={{ color: 'var(--mid)' }}>
              The name iL Progetto — Italian for "The Project" — reflects how we approach every
              installation: as a considered design project, not a transaction. We take the time to
              understand your home, your light, and your lifestyle before recommending a single product.
            </p>
            <p className="text-[16px] leading-[1.9] mb-6" style={{ color: 'var(--mid)' }}>
              Every consultation takes place in your home, where you can evaluate samples in your actual light, see how each treatment interacts with your furniture and wall color, and make decisions with complete confidence.
            </p>
            <p className="text-[16px] leading-[1.9]" style={{ color: 'var(--mid)' }}>
              Every shade we hang, every shutter we build, every motorized system we program — it goes
              out with our name on it. That accountability is the foundation of everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══════════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-28"
        style={{ background: 'var(--cream)' }}
        aria-labelledby="process-heading"
      >
        <div className="mb-16">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Our Process
          </p>
          <h2
            id="process-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em] fade-up delay-1"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(32px, 3.8vw, 52px)',
            }}
          >
            From First Call to{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Final Install
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-[var(--hairline)]">
          {PROCESS.map(({ num, title, body }, i) => (
            <div
              key={num}
              className="bg-[var(--cream)] p-10 fade-up group hover:bg-[var(--warm)] transition-colors"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <span
                className="block text-[48px] font-[300] leading-none mb-6"
                style={{ fontFamily: 'var(--serif)', color: 'var(--sand-light)' }}
              >
                {num}
              </span>
              <h3
                className="text-[19px] font-[400] mb-4 leading-[1.2]"
                style={{ fontFamily: 'var(--serif)' }}
              >
                {title}
              </h3>
              <p className="text-[14px] leading-[1.85]" style={{ color: 'var(--mid)' }}>
                {body}
              </p>
              <div
                className="h-px mt-8 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: 'var(--sand)' }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ══ WHY WE'RE DIFFERENT ═══════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-28"
        style={{ background: 'var(--warm)' }}
        aria-labelledby="diff-heading"
      >
        <div className="mb-16">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Why iL Progetto
          </p>
          <h2
            id="diff-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em] fade-up delay-1"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(32px, 3.8vw, 52px)',
            }}
          >
            What Sets Us{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Apart
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--hairline)]">
          {DIFFERENTIATORS.map(({ icon, title, body }, i) => (
            <div
              key={title}
              className="bg-[var(--warm)] p-10 fade-up group hover:bg-[var(--cream)] transition-colors"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-colors"
                style={{
                  border: '0.5px solid var(--sand-light)',
                  color: 'var(--sand)',
                }}
              >
                {icon}
              </div>
              <h3
                className="text-[19px] font-[400] mb-3 leading-[1.2]"
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
      </section>

      {/* ══ SERVICE AREA ══════════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-28"
        style={{ background: 'var(--ink)' }}
        aria-labelledby="area-heading"
      >
        <div className="max-w-[1100px]">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
            style={{ color: 'var(--sand-light)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Where We Serve
          </p>
          <h2
            id="area-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em] mb-16 fade-up delay-1"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(32px, 3.8vw, 52px)',
              color: 'var(--cream)',
            }}
          >
            Covering Southern{' '}
            <em className="italic" style={{ color: 'var(--sand-light)' }}>
              California
            </em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-[rgba(255,255,255,0.06)]">
            {COUNTIES.map(({ name, cities }, i) => (
              <div
                key={name}
                className="p-8 fade-up"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  transitionDelay: `${i * 0.07}s`,
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full mb-5"
                  style={{ background: 'var(--sand)' }}
                  aria-hidden="true"
                />
                <h3
                  className="text-[16px] font-[400] mb-3"
                  style={{ fontFamily: 'var(--serif)', color: 'var(--cream)' }}
                >
                  {name}
                </h3>
                <p className="text-[12px] leading-[1.9]" style={{ color: 'rgba(251,251,249,0.45)' }}>
                  {cities}
                </p>
              </div>
            ))}
          </div>

          <p
            className="mt-10 text-[14px] leading-[1.8] fade-up"
            style={{ color: 'rgba(251,251,249,0.5)' }}
          >
            Outside these areas? Call us — we accommodate requests beyond our standard zone on a
            case-by-case basis.
          </p>
        </div>
      </section>

      {/* ══ TESTIMONIAL PULL QUOTE ════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-28"
        style={{ background: 'var(--cream)' }}
        aria-label="Client testimonial"
      >
        <div className="max-w-[780px] mx-auto text-center">
          <p
            className="text-[80px] leading-none mb-4 fade-up"
            style={{
              fontFamily: 'var(--serif)',
              color: 'var(--sand-light)',
              opacity: 0.6,
              lineHeight: 0.7,
            }}
            aria-hidden="true"
          >
            "
          </p>
          <blockquote
            className="font-[300] italic leading-[1.75] mb-8 fade-up delay-1"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(22px, 2.5vw, 30px)',
              color: 'var(--ink)',
            }}
          >
            Having iL Progetto come to my home made all the difference. Seeing every sample in my
            actual light — against my walls, with my furniture — made choosing effortless.
          </blockquote>
          <div className="fade-up delay-2 flex items-center justify-center gap-3">
            <div
              className="h-px w-10"
              style={{ background: 'var(--sand-light)' }}
              aria-hidden="true"
            />
            <p className="text-[11px] tracking-[0.2em] uppercase" style={{ color: 'var(--sand)' }}>
              Emily J. — La Jolla, CA
            </p>
            <div
              className="h-px w-10"
              style={{ background: 'var(--sand-light)' }}
              aria-hidden="true"
            />
          </div>
          {/* Stars */}
          <div className="flex justify-center gap-1 mt-4 fade-up delay-3" aria-label="5 stars">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--sand)" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 mt-8 text-[11px] tracking-[0.16em] uppercase fade-up delay-3 hover:gap-3 transition-all"
            style={{ color: 'var(--sand)' }}
          >
            Read More Reviews <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-28"
        style={{ background: 'var(--warm)' }}
        aria-label="Book a consultation"
      >
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
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
                fontSize: 'clamp(32px, 3.8vw, 52px)',
              }}
            >
              Your Free Consultation{' '}
              <em className="italic" style={{ color: 'var(--sand)' }}>
                Starts Here
              </em>
            </h2>
            <p
              className="text-[16px] leading-[1.85] mb-10 fade-up delay-2"
              style={{ color: 'var(--mid)' }}
            >
              Book a free, no-obligation in-home visit. We'll bring samples, measure your windows,
              and give you a full quote — all in one appointment, all at no cost.
            </p>
            <div className="flex flex-wrap gap-4 fade-up delay-3">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2.5 px-9 py-4 text-[11px] tracking-[0.2em] uppercase btn-interactive"
                style={{ background: 'var(--ink)', color: 'var(--cream)' }}
              >
                Book Free Consultation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <a
                href="tel:+18583381678"
                className="inline-flex items-center gap-2.5 px-9 py-4 text-[11px] tracking-[0.2em] uppercase border transition-colors hover:border-[var(--ink)]"
                style={{ borderColor: 'var(--hairline)', color: 'var(--ink)' }}
              >
                Call (858) 338-1678
              </a>
            </div>
          </div>

          {/* Contact details card */}
          <div
            className="fade-up delay-2 p-10 border"
            style={{ borderColor: 'var(--hairline)', background: 'var(--cream)' }}
          >
            <p
              className="text-[10px] tracking-[0.22em] uppercase mb-8"
              style={{ color: 'var(--sand)' }}
            >
              Get in Touch
            </p>
            {[
              { label: 'Phone', value: '(858) 338-1678', href: 'tel:+18583381678' },
              { label: 'Email', value: 'info@ilprogettollc.com', href: 'mailto:info@ilprogettollc.com' },
              { label: 'Service Area', value: 'San Diego, Riverside, Orange & San Bernardino Counties', href: undefined },
              { label: 'License', value: 'California Contractors License #1127055', href: undefined },
            ].map(({ label, value, href }) => (
              <div key={label} className="flex flex-col py-5 border-b last:border-0" style={{ borderColor: 'var(--hairline)' }}>
                <span className="text-[10px] tracking-[0.18em] uppercase mb-1.5" style={{ color: 'var(--mid)' }}>{label}</span>
                {href ? (
                  <a href={href} className="text-[15px] hover:text-[var(--sand)] transition-colors" style={{ color: 'var(--ink)' }}>{value}</a>
                ) : (
                  <span className="text-[15px]" style={{ color: 'var(--ink)' }}>{value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
