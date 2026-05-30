import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import { setupScrollReveal } from '@/lib/utils'

export const Route = (createFileRoute as any)('/smart-home/alexa')({
  head: () => ({
    meta: [
      { title: 'Alexa Motorized Blinds San Diego | Voice-Controlled Window Treatments — iL Progetto LLC' },
      {
        name: 'description',
        content:
          'Control your motorized blinds and shades with Amazon Alexa in San Diego. iL Progetto LLC installs and programs Alexa-compatible window treatments. Say "Alexa, close the blinds" and it happens.',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Alexa Motorized Blinds San Diego | Voice-Controlled Window Treatments — iL Progetto LLC' },
      {
        property: 'og:description',
        content:
          'Control your motorized blinds and shades with Amazon Alexa in San Diego. iL Progetto LLC installs and programs Alexa-compatible window treatments. Say "Alexa, close the blinds" and it happens.',
      },
      { property: 'og:url', content: 'https://ilprogetto-spa.vercel.app/smart-home/alexa' },
      { property: 'og:image', content: 'https://drive.google.com/thumbnail?id=1uaY6LDCh59x8TymxSD3VmynmW35bK1ou&sz=w1200' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Alexa Motorized Blinds San Diego | Voice-Controlled Window Treatments — iL Progetto LLC' },
      {
        name: 'twitter:description',
        content:
          'Control your motorized blinds and shades with Amazon Alexa in San Diego. iL Progetto LLC installs and programs Alexa-compatible window treatments. Say "Alexa, close the blinds" and it happens.',
      },
      {
        'script:ld+json': JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'iL Progetto LLC',
          telephone: '+18583381678',
          description: 'Alexa-compatible motorized window treatment installation in San Diego',
          url: 'https://ilprogetto-spa.vercel.app/smart-home/alexa',
          areaServed: 'San Diego',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Alexa-Compatible Motorized Window Treatments',
          },
        }),
      },
    ],
    links: [{ rel: 'canonical', href: 'https://ilprogetto-spa.vercel.app/smart-home/alexa' }],
  }),
  component: AlexaPage,
})

// ─── Data ─────────────────────────────────────────────────────────────────────

const COMMANDS = [
  '"Alexa, open the living room blinds"',
  '"Alexa, close all the shades"',
  '"Alexa, set the bedroom blinds to 50%"',
  '"Alexa, good morning"',
  '"Alexa, I\'m leaving"',
  '"Alexa, movie time"',
]

const STEPS = [
  {
    num: '01',
    title: 'We Install Motorized Treatments',
    body: 'Rechargeable battery motors — no hardwiring needed. Our team measures and installs your chosen shading system in a single visit.',
  },
  {
    num: '02',
    title: 'We Connect to Your Alexa',
    body: 'We program the bridge connection and name your shades by room so commands are intuitive and reliable from every Echo device.',
  },
  {
    num: '03',
    title: 'You Control by Voice',
    body: 'From any Echo device in your home, speak naturally to control any shade individually or in groups. No app required.',
  },
]

const BENEFITS = [
  'Hands-free when your hands are full',
  'Set schedules in the Alexa app (sunrise/sunset automation)',
  'Create Routines — "Good Morning" opens all shades automatically',
  'Works with Echo, Echo Dot, Echo Show, Echo Flex',
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

// ─── AlexaPage ────────────────────────────────────────────────────────────────

function AlexaPage() {
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
        aria-label="Alexa motorized blinds San Diego"
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
            Amazon Alexa Integration
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
              Alexa,
            </em>{' '}
            Close the Blinds.
          </h1>

          <p
            className="text-[17px] leading-[1.85] max-w-[560px] mb-10 fade-up delay-2"
            style={{ color: 'rgba(251,251,249,0.72)' }}
          >
            iL Progetto LLC programs your motorized window treatments to respond to Amazon Alexa
            voice commands. Ask Alexa to open, close, or set your shades to any position — from any
            Echo device in your home.
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

      {/* ══ WHY ALEXA CONTROL ═════════════════════════════════════════════════ */}
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
              Why Alexa
            </p>
            <h2
              id="benefits-heading"
              className="font-[300] leading-[1.06] tracking-[-0.015em] fade-up delay-1"
              style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 44px)' }}
            >
              Why Customers Choose{' '}
              <em className="italic" style={{ color: 'var(--sand)' }}>
                Alexa Control
              </em>
            </h2>
          </div>

          <ul className="space-y-px fade-up delay-2" aria-label="Benefits of Alexa control">
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
            Alexa Motorized Blinds Across{' '}
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
              With Your Voice
            </em>
          </h2>
          <p
            className="text-[16px] leading-[1.85] mb-10 fade-up delay-2"
            style={{ color: 'var(--mid)' }}
          >
            Book a free in-home consultation. We'll install and program your Alexa-compatible
            motorized window treatments in a single visit.
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
            to="/smart-home"
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
