import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import { setupScrollReveal } from '@/lib/utils'

export const Route = (createFileRoute as any)('/smart-home/control4')({
  head: () => ({
    meta: [
      { title: 'Control4 Motorized Blinds San Diego | Luxury Smart Home Window Treatments — iL Progetto LLC' },
      {
        name: 'description',
        content:
          'Integrate motorized window treatments with Control4 in San Diego. iL Progetto LLC programs blinds and shades into your Control4 system for whole-home automation. Licensed installers. Free consultation.',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Control4 Motorized Blinds San Diego | Luxury Smart Home Window Treatments — iL Progetto LLC' },
      {
        property: 'og:description',
        content:
          'Integrate motorized window treatments with Control4 in San Diego. iL Progetto LLC programs blinds and shades into your Control4 system for whole-home automation. Licensed installers. Free consultation.',
      },
      { property: 'og:url', content: 'https://ilprogetto-spa.vercel.app/smart-home/control4' },
      { property: 'og:image', content: 'https://drive.google.com/thumbnail?id=1uaY6LDCh59x8TymxSD3VmynmW35bK1ou&sz=w1200' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Control4 Motorized Blinds San Diego | Luxury Smart Home Window Treatments — iL Progetto LLC' },
      {
        name: 'twitter:description',
        content:
          'Integrate motorized window treatments with Control4 in San Diego. iL Progetto LLC programs blinds and shades into your Control4 system for whole-home automation. Licensed installers. Free consultation.',
      },
      {
        'script:ld+json': JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'iL Progetto LLC',
          telephone: '+18583381678',
          description: 'Control4 integrated motorized window treatment installation in San Diego',
          url: 'https://ilprogetto-spa.vercel.app/smart-home/control4',
          areaServed: 'San Diego',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Control4 Integrated Window Treatments',
          },
        }),
      },
    ],
    links: [{ rel: 'canonical', href: 'https://ilprogetto-spa.vercel.app/smart-home/control4' }],
  }),
  component: Control4Page,
})

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    title: 'Single-Touch Scenes',
    body: 'One button press closes every shade in the house for your cinema mode, sleep mode, or away mode.',
  },
  {
    title: 'Lighting Coordination',
    body: 'Shades open as lights dim. Lights brighten as shades close. Perfectly choreographed.',
  },
  {
    title: 'HVAC Integration',
    body: 'Shades close automatically when AC kicks in to reduce solar heat gain. Open when heating for passive warmth.',
  },
  {
    title: 'Scheduled Automation',
    body: 'Sunrise/sunset triggers, time-based routines, and seasonal adjustments — all managed from the Control4 interface.',
  },
  {
    title: 'Touch Panel & App Control',
    body: 'Control from any Control4 touch panel, the Control4 app, or your preferred voice assistant.',
  },
  {
    title: 'Commercial & Multi-Unit',
    body: 'We handle Control4 integration for commercial properties, luxury developments, and multi-room installations.',
  },
]

const WHO = [
  {
    title: 'Luxury Homeowners',
    body: 'You have a Control4 system and want full-home automation including window treatments.',
  },
  {
    title: 'New Construction',
    body: 'Builders and developers specifying Control4 systems want a window treatment partner who can integrate on day one.',
  },
  {
    title: 'AV Integrators',
    body: 'We partner with local Control4 dealers and AV integrators. Reach out to discuss trade arrangements.',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'System Assessment',
    body: 'We review your Control4 configuration, driver versions, and existing automation logic with your integrator or directly.',
  },
  {
    num: '02',
    title: 'Compatible Installation',
    body: 'We install motorized treatments with Control4-compatible drivers, tested for your specific system version.',
  },
  {
    num: '03',
    title: 'Programming & Scene Setup',
    body: 'We work alongside your Control4 programmer to configure shade control into your existing scenes and interfaces.',
  },
]

// ─── Control4Page ─────────────────────────────────────────────────────────────

function Control4Page() {
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
        aria-label="Control4 motorized blinds San Diego"
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
            Control4 Integration
          </p>

          <h1
            className="font-[300] leading-[1.02] tracking-[-0.02em] mb-8 fade-up delay-1"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(46px, 6.5vw, 88px)',
              color: 'var(--cream)',
            }}
          >
            Motorized Window Treatments,{' '}
            <em className="italic" style={{ color: 'var(--sand-light)' }}>
              Integrated Into Your Control4 System.
            </em>
          </h1>

          <p
            className="text-[17px] leading-[1.85] max-w-[560px] mb-10 fade-up delay-2"
            style={{ color: 'rgba(251,251,249,0.72)' }}
          >
            For homes with a Control4 automation system, iL Progetto LLC programs motorized window
            treatments to operate in perfect coordination with your lighting, HVAC, AV, and
            security. One touch. Every shade in the house.
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
              to="/commercial"
              className="inline-flex items-center gap-2.5 px-9 py-4 text-[11px] tracking-[0.2em] uppercase border transition-colors hover:border-[var(--sand-light)] hover:text-[var(--sand-light)]"
              style={{ borderColor: 'rgba(251,251,249,0.2)', color: 'rgba(251,251,249,0.72)' }}
            >
              Discuss a Commercial Project
            </Link>
          </div>
        </div>
      </header>

      {/* ══ WHAT CONTROL4 UNLOCKS ═════════════════════════════════════════════ */}
      <section
        className="px-10 md:px-20 py-28"
        style={{ background: 'var(--warm)' }}
        aria-labelledby="features-heading"
      >
        <div className="mb-16">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Capabilities
          </p>
          <h2
            id="features-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em] fade-up delay-1"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 3.8vw, 52px)' }}
          >
            What Control4 Integration{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Unlocks
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--hairline)]">
          {FEATURES.map(({ title, body }, i) => (
            <div
              key={title}
              className="bg-[var(--warm)] p-8 fade-up group hover:bg-[var(--cream)] transition-colors"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <h3
                className="text-[16px] font-[400] mb-3 leading-[1.2]"
                style={{ fontFamily: 'var(--serif)', color: 'var(--ink)' }}
              >
                {title}
              </h3>
              <p className="text-[14px] leading-[1.8]" style={{ color: 'var(--mid)' }}>
                {body}
              </p>
              <div
                className="h-px mt-6 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: 'var(--sand)' }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ══ WHO THIS IS FOR ═══════════════════════════════════════════════════ */}
      <section
        className="px-10 md:px-20 py-28"
        style={{ background: 'var(--cream)' }}
        aria-labelledby="who-heading"
      >
        <div className="mb-16">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Who This Is For
          </p>
          <h2
            id="who-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em] fade-up delay-1"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 3.8vw, 52px)' }}
          >
            Built for{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Demanding Projects
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--hairline)]">
          {WHO.map(({ title, body }, i) => (
            <div
              key={title}
              className="bg-[var(--cream)] p-10 fade-up group hover:bg-[var(--warm)] transition-colors"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
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

      {/* ══ HOW IT WORKS ══════════════════════════════════════════════════════ */}
      <section
        className="px-10 md:px-20 py-28"
        style={{ background: 'var(--warm)' }}
        aria-labelledby="process-heading"
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
            id="process-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em] fade-up delay-1"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 3.8vw, 52px)' }}
          >
            How It{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Works
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--hairline)]">
          {STEPS.map(({ num, title, body }, i) => (
            <div
              key={num}
              className="bg-[var(--warm)] p-10 fade-up group hover:bg-[var(--cream)] transition-colors"
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

      {/* ══ INTEGRATOR NOTE ═══════════════════════════════════════════════════ */}
      <section
        className="px-10 md:px-20 py-14"
        style={{ background: 'var(--warm)' }}
        aria-label="Note for integrators"
      >
        <div
          className="max-w-[720px] mx-auto px-8 py-7 border fade-up"
          style={{ borderColor: 'var(--sand-light)', background: 'var(--cream)' }}
        >
          <p className="text-[14px] leading-[1.85]" style={{ color: 'var(--mid)' }}>
            <span className="font-[500]" style={{ color: 'var(--ink)' }}>Note: </span>
            iL Progetto LLC works alongside your Control4 dealer or integrator. If you don't have
            one yet, we can recommend trusted partners in San Diego.
          </p>
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
            Ready to Integrate?
          </p>
          <h2
            className="font-[300] leading-[1.06] tracking-[-0.015em] mb-6 fade-up delay-1"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 3.8vw, 52px)' }}
          >
            Let's Connect Your Shades to{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Control4
            </em>
          </h2>
          <p
            className="text-[16px] leading-[1.85] mb-10 fade-up delay-2"
            style={{ color: 'var(--mid)' }}
          >
            Book a free consultation and we'll assess your Control4 system, recommend compatible
            motorized treatments, and coordinate programming with your integrator.
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
