import { SITE_URL } from '@/lib/config'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef, useState, useCallback } from 'react'
import { setupScrollReveal } from '@/lib/utils'
import { ReviewsScrollPanel } from '@/components/ReviewsScrollPanel'
import { InteractiveServiceMap } from '@/components/InteractiveServiceMap'

// ─── SEO ──────────────────────────────────────────────────────────────────────
export const Route = createFileRoute('/')({
  // TanStack Router v1 head API — sets <title> and <meta> for this route
  head: () => ({
    meta: [
      { title: 'iL Progetto LLC | Custom Window Treatments San Diego — Roller, Zebra, Motorized & Plantation Shutters' },
      { name: 'description', content: "San Diego's premier mobile window treatment showroom. Custom roller shades, zebra shades, honeycomb cellular, Roman shades, plantation shutters, and motorized blinds — measured, custom-made, and professionally installed. Free in-home consultation across San Diego, Poway, Carlsbad, La Jolla, and surrounding areas." },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'iL Progetto LLC | Custom Window Treatments San Diego' },
      { property: 'og:description', content: "Where luxury meets precision. Free in-home consultation — our designer visits your home so you can see every sample in your own light." },
      { property: 'og:image', content: 'https://drive.google.com/thumbnail?id=1uaY6LDCh59x8TymxSD3VmynmW35bK1ou&sz=w1200' },
      { property: 'og:url', content: `${SITE_URL}/` },
      { name: 'keywords', content: 'custom window treatments San Diego, roller shades San Diego, zebra shades San Diego, motorized blinds San Diego, plantation shutters San Diego, honeycomb cellular shades, Roman shades, free window treatment consultation San Diego, iL Progetto LLC' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `${SITE_URL}/images/og-image.jpg` },
      { name: 'twitter:title', content: 'iL Progetto LLC | Custom Window Treatments San Diego' },
      { name: 'twitter:description', content: "Where luxury meets precision. Free in-home consultation — our designer visits your home so you can see every sample in your own light." },
      { name: 'robots', content: 'index, follow' },
      { 'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'HomeGoodsStore'],
        name: 'iL Progetto LLC',
        description: 'Custom window treatments for San Diego homes and offices.',
        telephone: '+18583381678',
        email: 'info@progettoshades.com',
        url: `${SITE_URL}`,
        priceRange: '$$',
        image: 'https://drive.google.com/thumbnail?id=1uaY6LDCh59x8TymxSD3VmynmW35bK1ou&sz=w1200',
        address: { '@type': 'PostalAddress', addressLocality: 'San Diego', addressRegion: 'CA', postalCode: '92127', addressCountry: 'US' },
        areaServed: ['San Diego County', 'Orange County', 'Riverside County', 'San Bernardino County'],
        openingHours: 'Mo-Sa 08:00-18:00',
        logo: { '@type': 'ImageObject', url: 'https://drive.google.com/thumbnail?id=12-BstvEgekN4HhaUGclChCXWUp5JdJaA&sz=w300' },
        foundingYear: '2022',
        slogan: 'Where Luxury Meets Precision',
        currenciesAccepted: 'USD',
        paymentAccepted: 'Cash, Credit Card, Financing',
        hasMap: 'https://maps.google.com/?q=iL+Progetto+LLC+San+Diego+CA',
        geo: { '@type': 'GeoCoordinates', latitude: '32.9595', longitude: '-117.0865' },
        contactPoint: { '@type': 'ContactPoint', telephone: '+1-858-338-1678', contactType: 'customer service', areaServed: 'San Diego County', availableLanguage: 'English' },
        sameAs: ['https://www.instagram.com/ilprogetto.design', 'https://www.facebook.com/61561253288372', 'https://yelp.to/fuCV4NqXEu'],
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '32', bestRating: '5', worstRating: '1' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Window Treatments',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Roller Shades' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Motorized Blinds' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plantation Shutters' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Zebra Shades' } },
          ],
        },
      } },
    ],
    links: [
      { rel: 'canonical', href: `${SITE_URL}/` },
    ],
  }),
  component: HomePage,
})


// ─── VideoObject schema ────────────────────────────────────────────────────────
const VIDEO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  'name': 'Window Treatment Product Videos — iL Progetto LLC',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'item': { '@type': 'VideoObject', 'name': 'Roller Shades', 'description': 'Clean cassette tube mechanism. Modern panels in blackout, light-filtering, or sheer.', 'thumbnailUrl': `${SITE_URL}/images/products/Roller Shades.png`, 'contentUrl': `${SITE_URL}/videos/products/Roller S.mp4`, 'uploadDate': '2024-01-01' } },
    { '@type': 'ListItem', 'position': 2, 'item': { '@type': 'VideoObject', 'name': 'Zebra Shades', 'description': 'Alternating sheer and solid bands. Tune privacy and daylight with a single pull.', 'thumbnailUrl': `${SITE_URL}/images/products/Zebra Shades.png`, 'contentUrl': `${SITE_URL}/videos/products/Zebra S.mp4`, 'uploadDate': '2024-01-01' } },
    { '@type': 'ListItem', 'position': 3, 'item': { '@type': 'VideoObject', 'name': 'Cellular Shades', 'description': 'Hexagonal air chambers for thermal insulation and quiet diffused light.', 'thumbnailUrl': `${SITE_URL}/images/products/Cellular Shades.png`, 'contentUrl': `${SITE_URL}/videos/products/Cellular S.mp4`, 'uploadDate': '2024-01-01' } },
    { '@type': 'ListItem', 'position': 4, 'item': { '@type': 'VideoObject', 'name': 'Roman Shades', 'description': 'Tailored horizontal folds. Soft architectural drape with structured lift.', 'thumbnailUrl': `${SITE_URL}/images/products/Roman Shades.png`, 'contentUrl': `${SITE_URL}/videos/products/Roman S.mp4`, 'uploadDate': '2024-01-01' } },
    { '@type': 'ListItem', 'position': 5, 'item': { '@type': 'VideoObject', 'name': 'Wood & Aluminum Blinds', 'description': 'Ladder-cord slats with precise tilt. Natural wood or matte aluminum.', 'thumbnailUrl': `${SITE_URL}/images/products/Faux Wood.png`, 'contentUrl': `${SITE_URL}/videos/products/Wood & Aluminum Blinds.mp4`, 'uploadDate': '2024-01-01' } },
    { '@type': 'ListItem', 'position': 6, 'item': { '@type': 'VideoObject', 'name': 'Sheer Shade', 'description': 'Floating fabric vanes between sheer facings. Filtered light, sculpted depth.', 'thumbnailUrl': `${SITE_URL}/images/products/Sheer Shades.png`, 'contentUrl': `${SITE_URL}/videos/products/Shangri-La S.mp4`, 'uploadDate': '2024-01-01' } },
    { '@type': 'ListItem', 'position': 7, 'item': { '@type': 'VideoObject', 'name': 'Curtains & Drapery', 'description': 'Continuous ripple folds on hand-finished metal track. Floor-grazing fall.', 'thumbnailUrl': `${SITE_URL}/images/products/Blackout Curtains.png`, 'contentUrl': `${SITE_URL}/videos/products/Curtain.mp4`, 'uploadDate': '2024-01-01' } },
    { '@type': 'ListItem', 'position': 8, 'item': { '@type': 'VideoObject', 'name': 'Motorized Shading', 'description': 'Whisper-quiet motors recessed in fascia. App, voice, and scheduled scenes.', 'thumbnailUrl': `${SITE_URL}/images/products/Motorized Shades.png`, 'contentUrl': `${SITE_URL}/videos/products/Moter.mp4`, 'uploadDate': '2024-01-01' } },
  ],
}

// ─── Video product card data ───────────────────────────────────────────────────
// Video files live in /public/videos/products/
// Exact filenames from the asset folder (Image 2):
//   Roller S.mp4 | Zebra S.mp4 | Cellular S.mp4 | Roman S.mp4
//   Wood & Aluminum Blinds.mp4 | Shangri-La S.mp4 | Curtain.mp4 | Moter.mp4
const GRID_ITEMS = [
  { num: '01', id: 'roller',          name: 'Roller Shades',         desc: 'Clean cassette tube mechanism. Modern panels in blackout, light-filtering, or sheer.',         video: '/videos/products/Roller S.mp4' },
  { num: '02', id: 'zebra',           name: 'Zebra Shades',          desc: 'Alternating sheer and solid bands. Tune privacy and daylight with a single pull.',             video: '/videos/products/Zebra S.mp4' },
  { num: '03', id: 'cellular',        name: 'Honeycomb / Cellular',  desc: 'Hexagonal air chambers for thermal insulation and quiet diffused light.',                     video: '/videos/products/Cellular S.mp4' },
  { num: '04', id: 'roman',           name: 'Roman Shades',          desc: 'Tailored horizontal folds. Soft architectural drape with structured lift.',                    video: '/videos/products/Roman S.mp4' },
  { num: '05', id: 'faux-wood',       name: 'Wood & Aluminum Blinds',desc: 'Ladder-cord slats with precise tilt. Natural wood or matte aluminum.',                       video: '/videos/products/Wood & Aluminum Blinds.mp4' },
  { num: '06', id: 'sheer',           name: 'Sheer Shade',     desc: 'Floating fabric vanes between sheer facings. Filtered light, sculpted depth.',                video: '/videos/products/Shangri-La S.mp4' },
  { num: '07', id: 'blackout-curtains', name: 'Curtains & Drapery',  desc: 'Continuous ripple folds on hand-finished metal track. Floor-grazing fall.',                   video: '/videos/products/Curtain.mp4' },
  { num: '08', id: 'motorized',       name: 'Motorized Shading',     desc: 'Whisper-quiet motors recessed in fascia. App, voice, and scheduled scenes.',                  video: '/videos/products/Moter.mp4' },
] as const

// ─── ProductCard — hover-to-play on desktop, IntersectionObserver on mobile ───
function ProductCard({
  num, id, name, desc, video, index, hash,
}: {
  num: string
  id: string
  name: string
  desc: string
  video: string | null
  index: number
  hash?: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const cardRef  = useRef<HTMLDivElement>(null)
  const [videoVisible, setVideoVisible] = useState(false)
  const isTouchDevice = useRef(false)

  // Detect touch once on mount
  useEffect(() => {
    isTouchDevice.current = window.matchMedia('(hover: none)').matches
  }, [])

  // ── Play helper ─────────────────────────────────────────────────────────────
  const play = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    setVideoVisible(true)
    v.currentTime = 0
    v.play().catch(() => {/* blocked — silent fail */})
  }, [])

  const stop = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.pause()
    v.currentTime = 0
    setVideoVisible(false)
  }, [])

  // ── Desktop: hover events ────────────────────────────────────────────────────
  const handleMouseEnter = () => { if (!isTouchDevice.current) play() }
  const handleMouseLeave = () => { if (!isTouchDevice.current) stop() }

  // ── Mobile: IntersectionObserver at viewport center ──────────────────────────
  useEffect(() => {
    if (!video) return
    const card = cardRef.current
    if (!card) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!isTouchDevice.current) return // desktop uses hover
        if (entry.isIntersecting) {
          play()
        } else {
          stop()
        }
      },
      {
        threshold: 0.6,           // 60% of card in view = "centre focus"
        rootMargin: '-10% 0px',   // slightly tighter than viewport edges
      }
    )
    io.observe(card)
    return () => io.disconnect()
  }, [video, play, stop])

  return (
    <div ref={cardRef} style={{ transitionDelay: `${index * 0.05}s` }}>
      <Link
        to="/catalog"
        search={hash ? undefined : { product: id }}
        hash={hash}
        className="group block bg-[var(--cream)] fade-up relative overflow-hidden transition-colors hover:bg-[var(--sand-pale)]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={`View ${name} in our catalog`}
      >
        {/* ── Video layer ── */}
        {video && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: videoVisible ? 1 : 0,
              transition: 'opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 1,
            }}
            aria-hidden="true"
          >
            <video
              ref={videoRef}
              src={video}
              muted
              playsInline
              loop
              preload="auto"
              className="w-full h-full object-cover"
            />
            {/* Dark scrim so text stays legible over video */}
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(28,28,26,0.48)' }}
            />
          </div>
        )}

        {/* ── Text content ── */}
        <div
          className="relative p-8 lg:p-10"
          style={{ zIndex: 2 }}
        >
          <span
            className="block text-[11px] tracking-[0.2em] uppercase mb-6 transition-colors"
            style={{
              color: videoVisible ? 'rgba(201,184,152,0.85)' : 'var(--sand-light)',
              fontFamily: 'var(--sans)',
              transition: 'color 0.35s',
            }}
          >
            {num}
          </span>

          <h3
            className="leading-[1.15] mb-4"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(18px, 1.5vw, 22px)',
              fontWeight: 400,
              color: videoVisible ? 'var(--cream)' : 'var(--ink)',
              transition: 'color 0.35s',
            }}
          >
            {name}
          </h3>

          <p
            className="text-[13px] leading-[1.8]"
            style={{
              color: videoVisible ? 'rgba(251,251,249,0.75)' : 'var(--mid)',
              transition: 'color 0.35s',
            }}
          >
            {desc}
          </p>

          {/* Animated rule */}
          <div
            className="h-px mt-8 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
            style={{ background: videoVisible ? 'var(--sand-light)' : 'var(--sand)' }}
            aria-hidden="true"
          />
        </div>
      </Link>
    </div>
  )
}

// ─── Helper components ────────────────────────────────────────────────────────
function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
      style={{ color: light ? 'var(--sand-light)' : 'var(--sand)' }}
    >
      <span
        className="inline-block w-8 h-px"
        style={{ background: 'currentColor' }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

function SectionTitle({
  children,
  light = false,
  className = '',
}: {
  children: React.ReactNode
  light?: boolean
  className?: string
}) {
  return (
    <h2
      className={`font-serif font-[300] leading-[1.04] tracking-[-0.015em] fade-up ${className}`}
      style={{
        fontFamily: 'var(--serif)',
        fontSize: 'clamp(34px, 3.8vw, 54px)',
        color: light ? 'var(--cream)' : 'var(--ink)',
      }}
    >
      {children}
    </h2>
  )
}

// ─── HomePage ─────────────────────────────────────────────────────────────────
function HomePage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    // Reveal above-fold immediately
    ref.current.querySelectorAll('.hero .fade-up').forEach((el) => {
      el.classList.add('visible')
    })
    // Wire scroll reveal for everything else
    return setupScrollReveal(ref.current)
  }, [])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(VIDEO_SCHEMA) }} />
      <div ref={ref}>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <header
        className="hero relative min-h-screen flex flex-col justify-end overflow-hidden"
        style={{ background: 'var(--ink)' }}
        aria-label="Hero"
      >
        {/* Poster / fallback */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/hero.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.55,
          }}
          aria-hidden="true"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(to top, rgba(28,28,28,0.92) 0%, rgba(28,28,28,0.45) 45%, rgba(28,28,28,0.18) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-[2] px-4 md:px-10 lg:px-20 pb-20 md:pb-24 lg:pb-28 w-full flex flex-col lg:flex-row lg:items-end lg:gap-16">
          {/* Left: existing hero text */}
          <div className="flex-1 min-w-0">
            <p className="hero fade-up inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-8 text-[var(--sand-light)]">
              <span className="inline-block w-9 h-px bg-current" aria-hidden="true" />
              San Diego's Window Specialists
            </p>

            <h1
              className="hero fade-up delay-1 font-[300] leading-[1.02] tracking-[-0.025em] text-[var(--cream)] mb-7"
              style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(50px, 7vw, 92px)' }}
            >
              Where <em className="italic" style={{ color: 'var(--sand-light)' }}>Luxury</em>
              <br />
              Meets Affordability.
            </h1>

            <p className="hero fade-up delay-2 text-[17px] leading-[1.75] mb-12 font-[300] max-w-[500px]"
               style={{ color: 'rgba(251,251,249,0.78)' }}>
              Custom window treatments designed and installed for homes and offices across
              Southern California — considered for every room.
            </p>

            <div className="hero fade-up delay-3 flex flex-wrap gap-4 mb-16">
              <Link
                to="/booking"
                className="inline-block px-8 py-4 text-[11px] tracking-[0.18em] uppercase transition-colors btn-interactive"
                style={{ background: 'var(--sand)', color: 'var(--cream)' }}
              >
                Book Free Consultation
              </Link>
              <Link
                to="/catalog"
                className="inline-flex items-center gap-2.5 px-7 py-4 text-[11px] tracking-[0.18em] uppercase border transition-colors"
                style={{ borderColor: 'rgba(251,251,249,0.4)', color: 'var(--cream)' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--cream)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(251,251,249,0.4)')}
              >
                View Selections <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Phone + license row */}
            <div
              className="hero fade-up delay-4 flex flex-wrap items-baseline gap-8 pt-9 border-t"
              style={{ borderColor: 'rgba(251,251,249,0.18)' }}
            >
              <span className="text-[10px] tracking-[0.22em] uppercase"
                    style={{ color: 'rgba(251,251,249,0.45)' }}>
                Call us anytime
              </span>
              <a
                href="tel:+18583381678"
                className="text-[28px] font-[300] transition-colors hover:text-[var(--sand-light)] tracking-[0.03em]"
                style={{ fontFamily: 'var(--sans)', color: '#fff' }}
              >
                (858) 338-1678
              </a>
              <span className="ml-auto text-[10px] tracking-[0.18em] uppercase"
                    style={{ color: 'rgba(251,251,249,0.35)' }}>
                License # 1127055
              </span>
            </div>
          </div>

          {/* Right: booking survey card */}
          <div className="w-full lg:w-[380px] flex-shrink-0 pb-0 lg:pb-4 mt-8 lg:mt-0">
            <HeroBookingSurvey />
          </div>
        </div>
      </header>

      {/* ── TRUST BAR ─────────────────────────────────────────────────────────── */}
      <section
        aria-label="Trust indicators"
        className="px-6 md:px-10 lg:px-20 py-9"
        style={{ background: 'var(--ink)' }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-4">
        {(
          [
            { num: '4', label: 'Counties Served' },
            { num: '100%', label: 'Custom Solutions' },
            { num: 'Free', label: 'In-Home Consultation' },
            { num: 'Smart', label: 'Home Integration' },
            { num: 'Flex', label: 'Financing Available' },
            { num: '★★★★★', label: '5-Star Rated' },
            { num: 'Lifetime', label: 'Warranty' },
          ] as const
        ).map(({ num, label }, i) => (
          <div key={i} className="text-center">
            <span
              className="block text-[28px] md:text-[38px] font-[300] leading-none tracking-[-0.01em]"
              style={{ fontFamily: 'var(--serif)', color: 'var(--cream)' }}
            >
              {num}
            </span>
            <span
              className="block text-[9px] md:text-[10px] tracking-[0.18em] uppercase mt-2"
              style={{ color: 'var(--sand-light)' }}
            >
              {label}
            </span>
          </div>
        ))}
        </div>
      </section>

      {/* ── PREMIUM SHOWCASE GRID ─────────────────────────────────────────────── */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="px-4 md:px-10 lg:px-20 py-16 md:py-28"
        style={{ background: 'var(--warm)' }}
      >
        {/* Section header */}
        <div className="max-w-[640px] mb-16">
          <Eyebrow>What We Offer</Eyebrow>
          <h2
            id="services-heading"
            className="font-[300] leading-[1.04] tracking-[-0.015em] fade-up delay-1"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(34px, 3.8vw, 54px)' }}
          >
            A Considered Range for{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Every Window
            </em>
          </h2>
        </div>

        {/* 8-card grid — 2 col mobile → 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-[var(--hairline)]">
          {GRID_ITEMS.map((item, i) => (
            <ProductCard
              key={item.id}
              {...item}
              index={i}
              hash={item.id === 'blackout-curtains' ? 'drape-styles' : undefined}
            />
          ))}
        </div>

        {/* Centered CTA beneath grid */}
        <div className="flex flex-col items-center mt-16 gap-5 fade-up">
          <p
            className="text-[13px] tracking-[0.06em]"
            style={{ color: 'var(--mid)' }}
          >
            22 product categories — every window type, every room.
          </p>
          <Link
            to="/catalog"
            className="inline-flex items-center gap-3 px-10 py-4 text-[11px] tracking-[0.22em] uppercase btn-interactive"
            style={{ background: 'var(--ink)', color: 'var(--cream)' }}
          >
            View Full Selection
            <svg
              width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="1.5"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── CUSTOMER REVIEWS ─────────────────────────────────────────────────── */}
      <ReviewsScrollPanel autoPlayInterval={5000} showControls={true} compact={false} darkBg={true} enableModal={false} showButtons={true} />

      {/* ── MOBILE SHOWROOM ──────────────────────────────────────────────── */}
      <section
        aria-labelledby="showroom-heading"
        className="grid grid-cols-1 lg:grid-cols-2"
        style={{ background: 'var(--warm)' }}
      >
        <div className="py-12 md:py-20">
          <div className="overflow-hidden h-full min-h-[340px]">
            <img
              src="/images/m-showroom.png"
              alt="iL Progetto designer visiting a client's home with fabric samples"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center px-4 md:px-12 lg:px-20 py-12 md:py-20">
          <p className="fade-up text-[10px] tracking-[0.22em] uppercase mb-4" style={{ color: 'var(--sand)' }}>
            Our Mobile Showroom
          </p>
          <h2 id="showroom-heading" className="fade-up delay-1 font-[300] leading-[1.08] mb-6"
              style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(30px, 3.2vw, 46px)', color: 'var(--ink)' }}>
            Your Home Is <em className="italic" style={{ color: 'var(--sand)' }}>Our Showroom</em>
          </h2>
          <p className="fade-up delay-2 text-[15px] leading-[1.85] mb-6" style={{ color: 'var(--mid)' }}>
            Choosing window treatments in a showroom is one thing — holding a fabric swatch in your actual living room, in your actual light, is another. That's exactly how we work.
          </p>
          <p className="fade-up delay-2 text-[15px] leading-[1.85] mb-10" style={{ color: 'var(--mid)' }}>
            Our designer arrives at your door with the full catalog: every fabric, every color, every operating system — so you can see exactly how it looks before committing to anything.
          </p>
          <div className="fade-up delay-3 grid grid-cols-2 gap-3 mb-10">
            {['Full fabric & color library', 'Motorized system demos', 'Accurate measure & quote', 'Zero-pressure consultation'].map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-[13px]" style={{ color: 'var(--mid)' }}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--sand)' }} aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
          <Link to="/booking" className="fade-up delay-4 self-start inline-block px-9 py-4 text-[11px] tracking-[0.18em] uppercase btn-interactive"
                style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
            Book a Free Visit
          </Link>
        </div>
      </section>

      {/* ── INTERACTIVE SERVICE MAP ──────────────────────────────────────── */}
      <InteractiveServiceMap />

      {/* ── FINANCING BANNER ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="financing-heading"
        className="text-center px-4 md:px-10 py-16 md:py-24"
        style={{ background: 'var(--sand-pale, #f5ede0)' }}
      >
        <Eyebrow>Financing Available</Eyebrow>
        <h2
          id="financing-heading"
          className="font-[300] leading-[1.04] tracking-[-0.015em] mb-6 fade-up delay-1"
          style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(34px, 3.8vw, 54px)' }}
        >
          Flexible Payment{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>
            Plans
          </em>
        </h2>
        <p
          className="fade-up delay-2 text-[16px] leading-[1.85] max-w-[520px] mx-auto mb-11"
          style={{ color: 'var(--mid)' }}
        >
          Spread payments over time through our Synchrony financing partnership — custom window
          treatments without the upfront strain.
        </p>
        <div className="fade-up delay-3 flex flex-wrap gap-4 justify-center">
          <a
            href="https://www.synchrony.com/mmc/P1231451002"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-[11px] tracking-[0.18em] uppercase transition-colors"
            style={{ background: 'var(--ink)', color: 'var(--cream)' }}
          >
            Apply for Financing
          </a>
          <Link
            to="/booking"
            className="inline-block px-8 py-4 text-[11px] tracking-[0.18em] uppercase border transition-colors"
            style={{ borderColor: 'var(--ink)', color: 'var(--ink)' }}
          >
            Talk to an Expert
          </Link>
        </div>
      </section>

      {/* ── SERVICE AREA ─────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="area-heading"
        className="px-4 md:px-10 lg:px-20 py-16 md:py-28"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <Eyebrow>Where We Serve</Eyebrow>
            <h2
              id="area-heading"
              className="font-[300] leading-[1.04] tracking-[-0.015em] mb-6 fade-up delay-1"
              style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(34px, 3.8vw, 54px)' }}
            >
              Proudly Serving{' '}
              <em className="italic" style={{ color: 'var(--sand)' }}>
                Southern California
              </em>
            </h2>
            <p
              className="fade-up delay-2 text-[16px] leading-[1.85]"
              style={{ color: 'var(--mid)' }}
            >
              From coastal San Diego to the Inland Empire, our mobile showroom covers the entire
              region — premium custom window treatments always within reach.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 fade-up delay-2">
            {(
              ['San Diego County', 'Riverside County', 'Orange County', 'San Bernardino County'] as const
            ).map((county) => (
              <div
                key={county}
                className="flex items-center gap-3.5 px-6 py-5 border border-[var(--hairline)] text-[14px] transition-colors hover:bg-[var(--sand-pale)]"
                style={{ background: 'var(--warm)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--sand)' }} aria-hidden="true" />
                {county}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

// ─── HeroBookingSurvey ────────────────────────────────────────────────────────
function HeroBookingSurvey() {
  const [step, setStep] = useState<'form' | 'sent'>('form')
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')

  const fieldStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(251,251,249,0.08)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '2px',
    padding: '11px 14px',
    fontSize: '13px',
    color: 'var(--cream)',
    outline: 'none',
    fontFamily: 'var(--sans)',
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'var(--sand)'
  }
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    let hasError = false
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setEmailError('Please enter a valid email address.')
      hasError = true
    } else { setEmailError('') }
    if (phone && phone.replace(/\D/g, '').length < 10) {
      setPhoneError('Phone must have at least 10 digits.')
      hasError = true
    } else { setPhoneError('') }
    if (hasError) return
    setSubmitting(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName: '', email, phone, service, message: 'Hero survey lead' }),
      })
      setStep('sent')
    } catch {
      setStep('sent')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div style={{ background: 'rgba(10,10,10,0.72)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.1)', padding: 'clamp(20px, 5vw, 36px)' }}>
      {step === 'sent' ? (
        <div style={{ textAlign: 'center', padding: '12px 0' }}>
          <div style={{ marginBottom: '16px' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--sand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: 'inline-block' }}>
              <circle cx="10" cy="10" r="9" /><polyline points="5 10 8.5 13.5 15 7" />
            </svg>
          </div>
          <p style={{ fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 300, color: 'var(--cream)', marginBottom: '10px', lineHeight: 1.2 }}>Request Received!</p>
          <p style={{ fontSize: '13px', color: 'rgba(251,251,249,0.65)', lineHeight: 1.7, marginBottom: '20px' }}>We'll be in touch within 24 hours to confirm your consultation.</p>
          <Link to="/booking" style={{ color: 'var(--sand)', fontSize: '12px', textDecoration: 'none', letterSpacing: '0.04em' }}>Or book online now →</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <p style={{ color: 'var(--sand)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--sans)' }}>Free Consultation</p>
          <p style={{ fontFamily: 'var(--serif)', fontSize: '26px', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.15, marginBottom: '6px' }}>Get Your Free Quote</p>
          <p style={{ fontSize: '13px', color: 'rgba(251,251,249,0.6)', marginBottom: '22px', lineHeight: 1.5 }}>We bring the showroom to you.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
            <input type="text" placeholder="First Name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} style={fieldStyle} onFocus={handleFocus} onBlur={handleBlur} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <input type="email" placeholder="Email" required value={email}
                onChange={(e) => { setEmail(e.target.value); setEmailError('') }}
                style={{ ...fieldStyle, borderColor: emailError ? '#f87171' : 'rgba(255,255,255,0.12)' }}
                onFocus={(e) => (e.currentTarget.style.borderColor = emailError ? '#f87171' : 'var(--sand)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = emailError ? '#f87171' : 'rgba(255,255,255,0.12)')} />
              {emailError && <p style={{ fontSize: '11px', color: '#f87171', margin: 0 }}>{emailError}</p>}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <input type="tel" placeholder="Phone" value={phone}
                onChange={(e) => { setPhone(e.target.value); setPhoneError('') }}
                style={{ ...fieldStyle, borderColor: phoneError ? '#f87171' : 'rgba(255,255,255,0.12)' }}
                onFocus={(e) => (e.currentTarget.style.borderColor = phoneError ? '#f87171' : 'var(--sand)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = phoneError ? '#f87171' : 'rgba(255,255,255,0.12)')} />
              {phoneError && <p style={{ fontSize: '11px', color: '#f87171', margin: 0 }}>{phoneError}</p>}
            </div>
            <select value={service} onChange={(e) => setService(e.target.value)}
              style={{ ...fieldStyle, appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer', color: service ? 'var(--cream)' : 'rgba(251,251,249,0.45)' }}
              onFocus={handleFocus} onBlur={handleBlur}>
              <option value="" disabled hidden>What are you interested in?</option>
              <option value="General Consultation" style={{ background: '#1c1c1a', color: 'var(--cream)' }}>General Consultation</option>
              <option value="Zebra Shades" style={{ background: '#1c1c1a', color: 'var(--cream)' }}>Zebra Shades</option>
              <option value="Motorized Blinds" style={{ background: '#1c1c1a', color: 'var(--cream)' }}>Motorized Blinds</option>
              <option value="Plantation Shutters" style={{ background: '#1c1c1a', color:  'var(--cream)' }}>Plantation Shutters</option>
              <option value="Roman Shades" style={{ background: '#1c1c1a', color: 'var(--cream)' }}>Roman Shades</option>
              <option value="Wood Blinds" style={{ background: '#1c1c1a', color: 'var(--cream)' }}>Wood Blinds</option>
              <option value="Drapery / Curtains" style={{ background: '#1c1c1a', color: 'var(--cream)' }}>Drapery / Curtains</option>
              <option value="Cellular Shades" style={{ background: '#1c1c1a', color: 'var(--cream)' }}>Cellular Shades</option>
            </select>
          </div>
          <button type="submit" disabled={submitting}
            style={{ width: '100%', background: 'var(--sand)', color: '#fff', border: 'none', padding: '13px', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: submitting ? 'wait' : 'pointer', fontFamily: 'var(--sans)', opacity: submitting ? 0.7 : 1 }}>
            {submitting ? 'Sending…' : 'Get My Free Quote →'}
          </button>
          <p style={{ fontSize: '11px', color: 'rgba(251,251,249,0.35)', marginTop: '10px', textAlign: 'center', lineHeight: 1.6 }}>No obligation · We come to you · No spam.</p>
        </form>
      )}
    </div>
  )
}
