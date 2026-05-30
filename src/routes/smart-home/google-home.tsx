import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import { setupScrollReveal } from '@/lib/utils'

export const Route = (createFileRoute as any)('/smart-home/google-home')({
  head: () => ({
    meta: [
      { title: 'Google Home Motorized Blinds San Diego | Hey Google Window Treatments — iL Progetto LLC' },
      {
        name: 'description',
        content:
          'Control motorized blinds and shades with Google Home in San Diego. iL Progetto LLC installs Google-compatible window treatments. Say "Hey Google, open the shades" — it just works.',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Google Home Motorized Blinds San Diego | Hey Google Window Treatments — iL Progetto LLC' },
      {
        property: 'og:description',
        content:
          'Control motorized blinds and shades with Google Home in San Diego. iL Progetto LLC installs Google-compatible window treatments. Say "Hey Google, open the shades" — it just works.',
      },
      { property: 'og:url', content: 'https://ilprogetto-spa.vercel.app/smart-home/google-home' },
      { property: 'og:image', content: 'https://drive.google.com/thumbnail?id=1uaY6LDCh59x8TymxSD3VmynmW35bK1ou&sz=w1200' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Google Home Motorized Blinds San Diego | Hey Google Window Treatments — iL Progetto LLC' },
      {
        name: 'twitter:description',
        content:
          'Control motorized blinds and shades with Google Home in San Diego. iL Progetto LLC installs Google-compatible window treatments. Say "Hey Google, open the shades" — it just works.',
      },
      {
        'script:ld+json': JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'iL Progetto LLC',
          telephone: '+18583381678',
          description: 'Google Home motorized window treatment installation in San Diego',
          url: 'https://ilprogetto-spa.vercel.app/smart-home/google-home',
          areaServed: 'San Diego',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Google Home Motorized Window Treatments',
          },
        }),
      },
    ],
    links: [{ rel: 'canonical', href: 'https://ilprogetto-spa.vercel.app/smart-home/google-home' }],
  }),
  component: GoogleHomePage,
})

// ─── Data ─────────────────────────────────────────────────────────────────────

const COMMANDS = [
  '"Hey Google, close the blinds"',
  '"Hey Google, open the bedroom shades 50%"',
  '"Hey Google, good morning"',
  '"Hey Google, I\'m home"',
  '"Hey Google, I\'m leaving"',
  '"Hey Google, open the living room shades"',
]

const STEPS = [
  {
    num: '01',
    title: 'We Install Motorized Treatments',
    body: 'Rechargeable battery motors — no hardwiring needed. Our team measures and installs your chosen shading system in a single visit.',
  },
  {
    num: '02',
    title: 'We Connect to Google Home',
    body: 'We link your shades to the Google Home app, name each room correctly, and configure the bridge so every command is instantly recognized.',
  },
  {
    num: '03',
    title: 'You Control by Voice or App',
    body: 'Use your voice via any Google Nest speaker or display, or tap the Google Home app. Set scenes, schedules, or sunrise/sunset automations with ease.',
  },
]

const BENEFITS = [
  'Google Routines — "Good Morning" opens shades across your whole home',
  'Nest Hub display control — tap or speak from your kitchen counter',
  'Sunrise/sunset automations built into the Google Home app',
  '"I\'m home" and "I\'m leaving" automations for complete hands-free living',
  'Works with Google Nest Mini, Nest Audio, Nest Hub, and Nest Hub Max',
  'No subscription required',
]

const LOCATIONS = [
  { name: 'San Diego', slug: 'san-diego' },
  { name: 'La Jolla', slug: 'la-jolla' },
  { name: 'Poway', slug: 'poway' },
  { name: 'Carlsbad', slug: 'carlsbad' },
  { name: 'Del Mar', slug: 'del-mar' },
  { name: 'Encinitas', slug: 'encinitas' },
  { name: 'Rancho Santa Fe', slug: 'rancho-santa-fe' },
]

// ─── GoogleHomePage ───────────────────────────────────────────────────────────

function GoogleHomePage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    return setupScrollReveal(ref.current)
  }, [])

  return (
    <div ref={ref}>

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <header
        className="relative flex flex-col justify-end overflow-hidden"
        style={{ background: 'var(--ink)', minHeight: '70vh', paddingTop: '76px' }}
        aria-label="Google Home motorized blinds San Diego"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 px-10 md:px-20 pb-20 md:pb-28 max-w-[860px]">
          <p
            className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-8 fade-up"
            style={{ color: 'var(--sand-light)' }}
          >
            <span className="inline-block w-9 h-px bg-current" aria-hidden="true" />
            Google Home Integration
          </p>

          <h1
            className="font-[300] leading-[1.02] tracking-[-0.02em] mb-8 fade-up delay-1"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(46px, 6.5vw, 88px)',
              color: 'var(--cream)',
            }}
          >
            <em className="italic" style={{ color: 'var(--sand-light)' }}>
              Hey Google,
            </em>{' '}
            Open the Shades.
          </h1>

          <p
            className="text-[17px] leading-[1.85] max-w-[560px] mb-10 fade-up delay-2"
            style={{ color: 'rgba(251,251,249,0.72)' }}
          >
            iL Progetto LLC programs your motorized window treatments to work with Google Home.
            Control any shade by voice from any Nest speaker or display — individually, by room, or
            as part of a morning routine.
          </p>

          <div className="fade-up delay-3">
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
          </div>
        </div>
      </header>

      {/* ══ WHAT YOU CAN SAY ══════════════════════════════════════════════════ */}
      <section
        className="px-10 md:px-20 py-28"
        style={{ background: 'var(--warm)' }}
        aria-labelledby="commands-heading"
      >
        <div className="mb-16">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Voice Commands
          </p>
          <h2
            id="commands-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em] fade-up delay-1"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 3.8vw, 52px)' }}
          >
            What You Can{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Say
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--hairline)]">
          {COMMANDS.map((cmd, i) => (
            <div
              key={cmd}
              className="bg-[var(--warm)] p-8 fade-up hover:bg-[var(--cream)] transition-colors"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <p
                className="text-[17px] font-[300] leading-[1.5] italic"
                style={{ fontFamily: 'var(--serif)', color: 'var(--ink)' }}
              >
                {cmd}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ HOW SETUP WORKS ═══════════════════════════════════════════════════ */}
      <section
        className="px-10 md:px-20 py-28"
        style={{ background: 'var(--cream)' }}
        aria-labelledby="setup-heading"
      >
        <div className="mb-16">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            The Process
          </p>
          <h2
            id="setup-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em] fade-up delay-1"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 3.8vw, 52px)' }}
          >
            How Setup{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Works
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--hairline)]">
          {STEPS.map(({ num, title, body }, i) => (
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

      {/* ══ BENEFITS ══════════════════════════════════════════════════════════ */}
      <section
        className="px-10 md:px-20 py-28"
        style={{ background: 'var(--warm)' }}
        aria-labelledby="benefits-heading"
      >
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          <div>
            <p
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
              style={{ color: 'var(--sand)' }}
            >
              <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
              Why Google Home
            </p>
            <h2
              id="benefits-heading"
              className="font-[300] leading-[1.06] tracking-[-0.015em] fade-up delay-1"
              style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 44px)' }}
            >
              Why Customers Choose{' '}
              <em className="italic" style={{ color: 'var(--sand)' }}>
                Google Home Control
              </em>
            </h2>
          </div>

          <ul className="space-y-px fade-up delay-2" aria-label="Benefits of Google Home control">
            {BENEFITS.map((benefit, i) => (
              <li
                key={benefit}
                className="flex items-start gap-4 py-5 border-b"
                style={{ borderColor: 'var(--hairline)', transitionDelay: `${i * 0.05}s` }}
              >
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: 'var(--sand)' }}
                  aria-hidden="true"
                />
                <span className="text-[15px] leading-[1.75]" style={{ color: 'var(--ink)' }}>
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══ SERVICE AREAS ═════════════════════════════════════════════════════ */}
      <section
        className="px-10 md:px-20 py-20"
        style={{ background: 'var(--cream)' }}
        aria-labelledby="areas-heading"
      >
        <div className="max-w-[800px]">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Where We Install
          </p>
          <h2
            id="areas-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em] mb-10 fade-up delay-1"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 2.8vw, 40px)' }}
          >
            Google Home Motorized Blinds Across{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              San Diego
            </em>
          </h2>

          <div className="flex flex-wrap gap-3 fade-up delay-2">
            {LOCATIONS.map(({ name, slug }) => (
              <Link
                key={slug}
                to={`/locations/${slug}/motorized-shading` as any}
                className="px-5 py-2.5 text-[12px] tracking-[0.12em] uppercase border transition-colors hover:border-[var(--sand)] hover:text-[var(--sand)]"
                style={{ borderColor: 'var(--hairline)', color: 'var(--mid)' }}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section
        className="px-10 md:px-20 py-28"
        style={{ background: 'var(--sand-pale)' }}
        aria-label="Book a consultation"
      >
        <div className="max-w-[640px]">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Ready to Get Started?
          </p>
          <h2
            className="font-[300] leading-[1.06] tracking-[-0.015em] mb-6 fade-up delay-1"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 3.8vw, 52px)' }}
          >
            Start Controlling Your Blinds{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              With Google Home
            </em>
          </h2>
          <p
            className="text-[16px] leading-[1.85] mb-10 fade-up delay-2"
            style={{ color: 'var(--mid)' }}
          >
            Book a free in-home consultation. We'll install and program your Google Home-compatible
            motorized window treatments — fully integrated with your Nest devices on day one.
          </p>
          <div className="flex flex-wrap gap-4 mb-8 fade-up delay-3">
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
          <Link
            to={"/smart-home/" as any}
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase fade-up delay-3 hover:gap-3 transition-all"
            style={{ color: 'var(--mid)' }}
          >
            <span aria-hidden="true">←</span> Back to Smart Home
          </Link>
        </div>
      </section>

    </div>
  )
}
