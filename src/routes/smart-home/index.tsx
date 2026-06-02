import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import { setupScrollReveal } from '@/lib/utils'
import { SITE_URL } from '@/lib/config'


export const Route = (createFileRoute as any)('/smart-home')({
  head: () => ({
    meta: [
      { title: 'Smart Home Window Treatments San Diego | Motorized Blinds & Shades — iL Progetto LLC' },
      {
        name: 'description',
        content:
          'Control your window treatments with Alexa, Google Home, Apple HomeKit, or Control4. iL Progetto LLC installs motorized blinds and shades with full smart home integration in San Diego.',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Smart Home Window Treatments San Diego | Motorized Blinds & Shades — iL Progetto LLC' },
      {
        property: 'og:description',
        content:
          'Control your window treatments with Alexa, Google Home, Apple HomeKit, or Control4. iL Progetto LLC installs motorized blinds and shades with full smart home integration in San Diego.',
      },
      { property: 'og:url', content: `${SITE_URL}/smart-home` },
      { property: 'og:image', content: `${SITE_URL}/images/og-image.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Smart Home Window Treatments San Diego | Motorized Blinds & Shades — iL Progetto LLC' },
      {
        name: 'twitter:description',
        content:
          'Control your window treatments with Alexa, Google Home, Apple HomeKit, or Control4. iL Progetto LLC installs motorized blinds and shades with full smart home integration in San Diego.',
      },
      {
        'script:ld+json': JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'iL Progetto LLC',
          telephone: '+18583381678',
          description: 'Smart home motorized window treatment installation in San Diego',
          url: `${SITE_URL}/smart-home`,
          areaServed: 'San Diego',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Smart Home Motorized Window Treatments',
          },
        }),
      },
    ],
    links: [{ rel: 'canonical', href: `${SITE_URL}/smart-home` }],
  }),
  component: SmartHomePage,
})

// ─── Data ─────────────────────────────────────────────────────────────────────

const PLATFORMS = [
  {
    name: 'Amazon Alexa',
    tagline: 'Voice control with Amazon Echo',
    href: '/smart-home/alexa',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 8 C16 8 10 12 10 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 8 C16 8 22 12 22 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 20 C13 20 14.5 22 16 22 C17.5 22 19 20 19 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Google Home',
    tagline: 'Hey Google, open the shades',
    href: '/smart-home/google-home',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="4.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="21" cy="11" r="4.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="11" cy="21" r="4.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="21" cy="21" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Apple HomeKit',
    tagline: 'Siri + Home app automations',
    href: '/smart-home/apple-homekit',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 16 L16 6 L26 16 L26 28 L6 28 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="12" y="20" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Control4',
    tagline: 'Luxury whole-home automation',
    href: '/smart-home/control4',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="5" y="5" width="9" height="9" stroke="currentColor" strokeWidth="1.5" />
        <rect x="18" y="5" width="9" height="9" stroke="currentColor" strokeWidth="1.5" />
        <rect x="5" y="18" width="9" height="9" stroke="currentColor" strokeWidth="1.5" />
        <rect x="18" y="18" width="9" height="9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
]

const HOW_IT_WORKS = [
  {
    num: '01',
    title: 'We Assess Your System',
    body: 'During your in-home consultation, we identify your existing smart home setup and recommend compatible motorized solutions.',
  },
  {
    num: '02',
    title: 'We Install & Program',
    body: 'Our team installs motorized treatments, connects them to your hub, and programs scenes, schedules, and voice commands.',
  },
  {
    num: '03',
    title: 'You Just Ask',
    body: 'Say the word, tap the app, or let your schedule do it. Total hands-free control from day one.',
  },
]

const PRODUCTS = [
  {
    title: 'Motorized Shading',
    href: '/catalog?product=motorized',
    body: 'Roller, zebra, cellular, and Roman shades with whisper-quiet rechargeable motors',
  },
  {
    title: 'Motorized Exterior',
    href: '/catalog?product=motorized-exterior',
    body: 'Outdoor roller shades and sun screens with wind-resistant motorized systems',
  },
]

const FAQS = [
  {
    q: 'Do I need to run new wiring?',
    a: 'No. Our motorized systems use rechargeable battery motors — no hardwiring required. Battery life typically exceeds a year with normal use, and recharging takes just a few hours via USB.',
  },
  {
    q: 'Which smart home platforms do you support?',
    a: 'We install and program for Amazon Alexa, Google Home, Apple HomeKit, and Control4. If you have a different system, call us — we work with most major platforms.',
  },
  {
    q: "What if I don't have a smart home system yet?",
    a: 'No problem. We can install motorized treatments that work via a dedicated remote or smartphone app, with smart home integration ready whenever you are.',
  },
]

// ─── SmartHomePage ────────────────────────────────────────────────────────────

function SmartHomePage() {
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
        aria-label="Smart home window treatments"
      >
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
            Smart Home Integration
          </p>

          <h1
            className="font-[300] leading-[1.02] tracking-[-0.02em] mb-8 fade-up delay-1"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(46px, 6.5vw, 88px)',
              color: 'var(--cream)',
            }}
          >
            Your Blinds.{' '}
            <em className="italic" style={{ color: 'var(--sand-light)' }}>
              Controlled By Voice,
            </em>{' '}
            App, or Schedule.
          </h1>

          <p
            className="text-[17px] leading-[1.85] max-w-[560px] mb-10 fade-up delay-2"
            style={{ color: 'rgba(251,251,249,0.72)' }}
          >
            iL Progetto LLC programs motorized window treatments to work seamlessly with your smart
            home system — Alexa, Google Home, Apple HomeKit, and Control4. One consultation. Zero
            wire mess. Total control.
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

      {/* ══ PLATFORM GRID ═════════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-28"
        style={{ background: 'var(--cream)' }}
        aria-labelledby="platforms-heading"
      >
        <div className="mb-16">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Supported Platforms
          </p>
          <h2
            id="platforms-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em] fade-up delay-1"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 3.8vw, 52px)' }}
          >
            Every Major{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Smart Home System
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px bg-[var(--hairline)]">
          {PLATFORMS.map(({ name, tagline, href, icon }, i) => (
            <Link
              key={name}
              to={href}
              className="group bg-[var(--cream)] p-10 flex flex-col fade-up hover:bg-[var(--warm)] transition-colors"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-8"
                style={{ border: '0.5px solid var(--sand-light)', color: 'var(--sand)' }}
              >
                {icon}
              </div>
              <h3
                className="text-[20px] font-[400] mb-2 leading-[1.2]"
                style={{ fontFamily: 'var(--serif)' }}
              >
                {name}
              </h3>
              <p className="text-[14px] leading-[1.7] mb-6 flex-1" style={{ color: 'var(--mid)' }}>
                {tagline}
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.16em] uppercase group-hover:gap-3 transition-all"
                style={{ color: 'var(--sand)' }}
              >
                Learn More <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ══ HOW IT WORKS ══════════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-28"
        style={{ background: 'var(--warm)' }}
        aria-labelledby="how-heading"
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
            id="how-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em] fade-up delay-1"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 3.8vw, 52px)' }}
          >
            From Consultation to{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Full Control
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--hairline)]">
          {HOW_IT_WORKS.map(({ num, title, body }, i) => (
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

      {/* ══ COMPATIBLE PRODUCTS ═══════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-28"
        style={{ background: 'var(--cream)' }}
        aria-labelledby="products-heading"
      >
        <div className="mb-16">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Compatible Products
          </p>
          <h2
            id="products-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em] fade-up delay-1"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 3.8vw, 52px)' }}
          >
            Products That{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Work With Your System
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--hairline)] max-w-[800px]">
          {PRODUCTS.map(({ title, href, body }, i) => (
            <Link
              key={title}
              to={href}
              className="group bg-[var(--cream)] p-10 fade-up hover:bg-[var(--warm)] transition-colors"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <h3
                className="text-[20px] font-[400] mb-3 leading-[1.2]"
                style={{ fontFamily: 'var(--serif)' }}
              >
                {title}
              </h3>
              <p className="text-[14px] leading-[1.85] mb-6" style={{ color: 'var(--mid)' }}>
                {body}
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.16em] uppercase group-hover:gap-3 transition-all"
                style={{ color: 'var(--sand)' }}
              >
                View Products <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-28"
        style={{ background: 'var(--ink)' }}
        aria-labelledby="faq-heading"
      >
        <div className="max-w-[800px]">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
            style={{ color: 'var(--sand-light)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="font-[300] leading-[1.06] tracking-[-0.015em] mb-16 fade-up delay-1"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(32px, 3.8vw, 52px)',
              color: 'var(--cream)',
            }}
          >
            Common{' '}
            <em className="italic" style={{ color: 'var(--sand-light)' }}>
              Questions
            </em>
          </h2>

          <div className="space-y-px">
            {FAQS.map(({ q, a }, i) => (
              <div
                key={q}
                className="p-8 fade-up"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  transitionDelay: `${i * 0.07}s`,
                }}
              >
                <h3
                  className="text-[17px] font-[400] mb-4 leading-[1.35]"
                  style={{ fontFamily: 'var(--serif)', color: 'var(--cream)' }}
                >
                  {q}
                </h3>
                <p className="text-[14px] leading-[1.85]" style={{ color: 'rgba(251,251,249,0.6)' }}>
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ═════════════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-28"
        style={{ background: 'var(--sand-pale)' }}
        aria-label="Book a consultation"
      >
        <div className="max-w-[640px]">
          <p
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
            Ready to Automate?
          </p>
          <h2
            className="font-[300] leading-[1.06] tracking-[-0.015em] mb-6 fade-up delay-1"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 3.8vw, 52px)' }}
          >
            Ready to automate{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              your windows?
            </em>
          </h2>
          <p
            className="text-[16px] leading-[1.85] mb-10 fade-up delay-2"
            style={{ color: 'var(--mid)' }}
          >
            Book a free in-home consultation. We'll assess your existing smart home system and
            recommend the best motorized window treatment solution for your space.
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
      </section>

    </div>
  )
}
