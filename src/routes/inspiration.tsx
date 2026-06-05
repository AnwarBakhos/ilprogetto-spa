import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { setupScrollReveal } from '@/lib/utils'
import { SITE_URL } from '@/lib/config'


export const Route = (createFileRoute as any)('/inspiration')({
  head: () => ({
    meta: [
      { title: 'Window Treatment Ideas & Style Inspiration | iL Progetto LLC San Diego' },
      {
        name: 'description',
        content:
          'Browse window treatment ideas by room and style. Roller shades, plantation shutters, motorized blinds, and drapery for San Diego homes — inspiration for every space.',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Window Treatment Ideas & Style Inspiration | iL Progetto LLC San Diego' },
      {
        property: 'og:description',
        content:
          'Browse window treatment ideas by room and style. Roller shades, plantation shutters, motorized blinds, and drapery for San Diego homes — inspiration for every space.',
      },
      { property: 'og:url', content: `${SITE_URL}/inspiration` },
      { property: 'og:image', content: `${SITE_URL}/images/og-image.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `${SITE_URL}/images/og-image.jpg` },
      { name: 'twitter:title', content: 'Window Treatment Ideas & Style Inspiration | iL Progetto LLC San Diego' },
      {
        name: 'twitter:description',
        content:
          'Browse window treatment ideas by room and style. Roller shades, plantation shutters, motorized blinds, and drapery for San Diego homes — inspiration for every space.',
      },
    ],
    links: [
      { rel: 'canonical', href: `${SITE_URL}/inspiration` },
    ],
  }),
  component: InspirationPage,
})

// ─── Data ─────────────────────────────────────────────────────────────────────
const ROOMS = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Home Office', 'Bathroom', 'Outdoor'] as const
const STYLES = ['Modern', 'Coastal', 'Traditional', 'Farmhouse', 'Minimalist'] as const

type Room = (typeof ROOMS)[number]
type Style = (typeof STYLES)[number]

const INSPIRATION_ITEMS: {
  id: number
  product: string
  productId: string
  room: Exclude<Room, 'All'>
  style: Style
  img: string
  alt: string
}[] = [
  // Living Room
  { id: 1, room: 'Living Room', style: 'Modern', product: 'Shangri-La Shades', productId: 'sheer',
    img: '/images/inspiration/lr-vertical-sheer-highrise.webp',
    alt: 'Sheer vertical shades in a modern high-rise San Diego living room with city views' },
  { id: 2, room: 'Living Room', style: 'Minimalist', product: 'Cellular Shades', productId: 'cellular',
    img: '/images/inspiration/lr-cellular-topdown-family.webp',
    alt: 'Top-down bottom-up cellular shades in an open-plan San Diego living and dining room' },
  { id: 3, room: 'Living Room', style: 'Farmhouse', product: 'Zebra Shades', productId: 'zebra',
    img: '/images/inspiration/lr-zebra-natural-modern.webp',
    alt: 'Natural-tone zebra shades in a contemporary San Diego living room' },
  { id: 4, room: 'Living Room', style: 'Minimalist', product: 'Roller Shades', productId: 'roller',
    img: '/images/inspiration/lr-roller-light-filter-multi.webp',
    alt: 'Light-filtering roller shades across multiple windows in a San Diego living room' },
  { id: 5, room: 'Living Room', style: 'Coastal', product: 'Roller Shades', productId: 'roller',
    img: '/images/inspiration/lr-solar-roller-warm.webp',
    alt: 'Solar roller shades in a bright San Diego living room with warm neutral tones' },
  // Bedroom
  { id: 6, room: 'Bedroom', style: 'Traditional', product: 'Plantation Shutters', productId: 'plantation',
    img: '/images/inspiration/bd-shutters-garden-view.webp',
    alt: 'Plantation shutters with garden view in a San Diego bedroom' },
  { id: 7, room: 'Bedroom', style: 'Modern', product: 'Roller Shades', productId: 'roller',
    img: '/images/inspiration/bd-blackout-roller-accent.webp',
    alt: 'Blackout roller shades in a modern bedroom with dark accent wall — San Diego' },
  { id: 8, room: 'Bedroom', style: 'Farmhouse', product: 'Curtains & Drapery', productId: 'blackout-curtains',
    img: '/images/inspiration/bd-drapery-ripple-detail.webp',
    alt: 'Ripple-fold drapery on sliding glass door in a rustic San Diego bedroom' },
  { id: 9, room: 'Bedroom', style: 'Traditional', product: 'Curtains & Drapery', productId: 'blackout-curtains',
    img: '/images/inspiration/bd-drapery-midcentury.webp',
    alt: 'Floor-to-ceiling drapes in a mid-century modern San Diego bedroom' },
  // Kitchen
  { id: 10, room: 'Kitchen', style: 'Minimalist', product: 'Roller Shades', productId: 'roller',
    img: '/images/inspiration/kt-roller-sink-window.webp',
    alt: 'Light-filtering roller shade over kitchen sink window — San Diego home' },
  { id: 11, room: 'Kitchen', style: 'Farmhouse', product: 'Zebra Shades', productId: 'zebra',
    img: '/images/inspiration/kt-zebra-farmhouse-sink.webp',
    alt: 'Zebra shades in a modern farmhouse kitchen with apron sink — San Diego' },
  // Home Office
  { id: 12, room: 'Home Office', style: 'Modern', product: 'Roller Shades', productId: 'roller',
    img: '/images/inspiration/of-roller-home-office.webp',
    alt: 'Roller shades providing glare control in a San Diego home office' },
  { id: 13, room: 'Home Office', style: 'Coastal', product: 'Roller Shades', productId: 'roller',
    img: '/images/inspiration/of-roller-green-office.webp',
    alt: 'White roller shades in a vibrant green home office — San Diego' },
  { id: 14, room: 'Home Office', style: 'Minimalist', product: 'Roller Shades', productId: 'roller',
    img: '/images/inspiration/of-roller-study-nook.webp',
    alt: 'Roller shade in a compact mid-century study nook — San Diego' },
  { id: 15, room: 'Home Office', style: 'Minimalist', product: 'Solar Shades', productId: 'solar',
    img: '/images/inspiration/of-solar-commercial-1.webp',
    alt: 'Solar shades in a commercial office — glare-free San Diego workspace' },
  // Bathroom
  { id: 16, room: 'Bathroom', style: 'Traditional', product: 'Roller Shades', productId: 'roller',
    img: '/images/inspiration/ba-roller-spa-full.webp',
    alt: 'Light-filtering roller shade in a spa-style San Diego bathroom' },
  { id: 17, room: 'Bathroom', style: 'Traditional', product: 'Roller Shades', productId: 'roller',
    img: '/images/inspiration/ba-roller-spa-vanity.webp',
    alt: 'Roller shade above vanity window in a luxury San Diego bathroom' },
  // Outdoor
  { id: 18, room: 'Outdoor', style: 'Farmhouse', product: 'Motorized Exterior', productId: 'motorized-exterior',
    img: '/images/inspiration/out-bamboo-patio-cover.webp',
    alt: 'Bamboo exterior shade on patio cover — San Diego outdoor living space' },
  { id: 19, room: 'Outdoor', style: 'Modern', product: 'Motorized Exterior', productId: 'motorized-exterior',
    img: '/images/inspiration/out-motorized-estate.webp',
    alt: 'Motorized exterior roller shades on a San Diego estate patio at sunset' },
  { id: 20, room: 'Outdoor', style: 'Coastal', product: 'Motorized Exterior', productId: 'motorized-exterior',
    img: '/images/inspiration/out-motorized-spanish.webp',
    alt: 'Motorized exterior shade on a Spanish-style San Diego home with palm trees' },
  { id: 21, room: 'Outdoor', style: 'Coastal', product: 'Motorized Exterior', productId: 'motorized-exterior',
    img: '/images/inspiration/out-motorized-ocean-view.webp',
    alt: 'Motorized exterior shade framing ocean view from San Diego patio' },
]

// ─── InspirationPage ──────────────────────────────────────────────────────────
function InspirationPage() {
  const ref = useRef<HTMLDivElement>(null)
  const [activeRoom, setActiveRoom] = useState<Room>('All')
  const [activeStyle, setActiveStyle] = useState<Style | 'All'>('All')

  // Re-run scroll reveal on mount AND whenever filters change so newly
  // rendered items (which start with fade-up hidden) get observed correctly.
  useEffect(() => {
    if (!ref.current) return
    let cleanup: (() => void) | undefined
    const id = setTimeout(() => {
      if (ref.current) cleanup = setupScrollReveal(ref.current)
    }, 30)
    return () => {
      clearTimeout(id)
      cleanup?.()
    }
  }, [activeRoom, activeStyle])

  const filtered = INSPIRATION_ITEMS.filter((item) => {
    const roomMatch = activeRoom === 'All' || item.room === activeRoom
    const styleMatch = activeStyle === 'All' || item.style === activeStyle
    return roomMatch && styleMatch
  })

  return (
    <div ref={ref}>

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <header
        className="relative flex flex-col justify-end overflow-hidden"
        style={{
          background: 'var(--ink)',
          minHeight: '60vh',
          paddingTop: '76px',
        }}
        aria-label="Inspiration gallery hero"
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
            Design Inspiration
          </p>

          <h1
            className="font-[300] leading-[1.02] tracking-[-0.02em] mb-8 fade-up delay-1"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(46px, 6.5vw, 88px)',
              color: 'var(--cream)',
            }}
          >
            Ideas for Every{' '}
            <em className="italic" style={{ color: 'var(--sand-light)' }}>
              Room & Style
            </em>
          </h1>

          <p
            className="text-[17px] leading-[1.85] max-w-[560px] fade-up delay-2"
            style={{ color: 'rgba(251,251,249,0.72)' }}
          >
            Browse window treatments by room and aesthetic. When you're ready, our designer brings
            everything you see here — and more — directly to your home.
          </p>
        </div>
      </header>

      {/* ══ FILTER TABS ═══════════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-12 border-b"
        style={{ background: 'var(--cream)', borderColor: 'var(--hairline)' }}
        aria-label="Filter inspiration by room and style"
      >
        {/* By Room */}
        <div className="mb-6">
          <p
            className="text-[10px] tracking-[0.22em] uppercase mb-3"
            style={{ color: 'var(--mid)' }}
          >
            By Room
          </p>
          <div className="flex flex-wrap gap-2">
            {ROOMS.map((room) => (
              <button
                key={room}
                onClick={() => setActiveRoom(room)}
                aria-pressed={activeRoom === room}
                className="px-5 py-2 text-[11px] tracking-[0.14em] uppercase transition-all"
                style={{
                  background: activeRoom === room ? 'var(--ink)' : 'transparent',
                  color: activeRoom === room ? 'var(--cream)' : 'var(--mid)',
                  border: `0.5px solid ${activeRoom === room ? 'var(--ink)' : 'var(--hairline)'}`,
                  cursor: 'pointer',
                }}
              >
                {room}
              </button>
            ))}
          </div>
        </div>

        {/* By Style */}
        <div>
          <p
            className="text-[10px] tracking-[0.22em] uppercase mb-3"
            style={{ color: 'var(--mid)' }}
          >
            By Style
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveStyle('All')}
              aria-pressed={activeStyle === 'All'}
              className="px-5 py-2 text-[11px] tracking-[0.14em] uppercase transition-all"
              style={{
                background: activeStyle === 'All' ? 'var(--sand)' : 'transparent',
                color: activeStyle === 'All' ? 'var(--cream)' : 'var(--mid)',
                border: `0.5px solid ${activeStyle === 'All' ? 'var(--sand)' : 'var(--hairline)'}`,
                cursor: 'pointer',
              }}
            >
              All Styles
            </button>
            {STYLES.map((style) => (
              <button
                key={style}
                onClick={() => setActiveStyle(style)}
                aria-pressed={activeStyle === style}
                className="px-5 py-2 text-[11px] tracking-[0.14em] uppercase transition-all"
                style={{
                  background: activeStyle === style ? 'var(--sand)' : 'transparent',
                  color: activeStyle === style ? 'var(--cream)' : 'var(--mid)',
                  border: `0.5px solid ${activeStyle === style ? 'var(--sand)' : 'var(--hairline)'}`,
                  cursor: 'pointer',
                }}
              >
                {style}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INSPIRATION GRID ══════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-16"
        style={{ background: 'var(--warm)' }}
        aria-label="Inspiration gallery"
      >
        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p style={{ color: 'var(--mid)', fontFamily: 'var(--serif)', fontSize: '22px' }}>
              No results for this combination.
            </p>
            <button
              onClick={() => { setActiveRoom('All'); setActiveStyle('All') }}
              className="mt-6 text-[11px] tracking-[0.16em] uppercase underline"
              style={{ color: 'var(--sand)', cursor: 'pointer' }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div
            className="grid gap-px"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gridAutoRows: '320px',
              background: 'var(--hairline)',
            }}
          >
            {filtered.map((item, i) => (
              <article
                key={item.id}
                className="relative overflow-hidden group fade-up"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                {/* Background image */}
                <img
                  src={item.img}
                  alt={`${item.product} in a ${item.room} — ${item.style} style`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient overlay — always visible at bottom */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(28,28,28,0.82) 0%, rgba(28,28,28,0.1) 55%, transparent 100%)',
                  }}
                  aria-hidden="true"
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(28,28,28,0.55)' }}
                >
                  <Link
                    to={`/catalog?product=${item.productId}` as any}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase border transition-colors hover:bg-white hover:text-[var(--ink)]"
                    style={{ border: '0.5px solid rgba(255,255,255,0.6)', color: 'var(--cream)' }}
                  >
                    Get This Look <span aria-hidden="true">→</span>
                  </Link>
                </div>

                {/* Labels at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span
                      className="text-[9px] tracking-[0.2em] uppercase px-2.5 py-1"
                      style={{ background: 'var(--sand)', color: 'var(--cream)' }}
                    >
                      {item.product}
                    </span>
                    <span
                      className="text-[9px] tracking-[0.2em] uppercase px-2.5 py-1"
                      style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(251,251,249,0.85)' }}
                    >
                      {item.style}
                    </span>
                  </div>
                  <p
                    className="text-[12px] tracking-[0.12em] uppercase"
                    style={{ color: 'rgba(251,251,249,0.55)' }}
                  >
                    {item.room}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ══ CTA ══════════════════════════════════════════════════════════════ */}
      <section
        className="px-4 md:px-10 lg:px-20 py-28"
        style={{ background: 'var(--ink)' }}
        aria-label="Book a consultation"
      >
        <div className="max-w-[760px] mx-auto text-center">
          <p
            className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-8 justify-center fade-up"
            style={{ color: 'var(--sand-light)' }}
          >
            <span className="inline-block w-9 h-px bg-current" aria-hidden="true" />
            Ready to See It In Your Home?
            <span className="inline-block w-9 h-px bg-current" aria-hidden="true" />
          </p>

          <h2
            className="font-[300] leading-[1.06] tracking-[-0.015em] mb-8 fade-up delay-1"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(32px, 3.8vw, 52px)',
              color: 'var(--cream)',
            }}
          >
            Every Look,{' '}
            <em className="italic" style={{ color: 'var(--sand-light)' }}>
              Custom for Your Windows
            </em>
          </h2>

          <p
            className="text-[17px] leading-[1.85] mb-12 fade-up delay-2"
            style={{ color: 'rgba(251,251,249,0.72)' }}
          >
            Every look you see here can be customized for your exact windows and delivered to your
            San Diego home.
          </p>

          <div className="flex flex-wrap gap-4 justify-center fade-up delay-3">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2.5 px-9 py-4 text-[11px] tracking-[0.2em] uppercase btn-interactive"
              style={{ background: 'var(--sand)', color: 'var(--cream)' }}
            >
              Book Free Consultation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <a
              href="tel:+18583381678"
              className="inline-flex items-center gap-2.5 px-9 py-4 text-[11px] tracking-[0.2em] uppercase border transition-colors hover:border-[var(--cream)]"
              style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'var(--cream)' }}
            >
              Call (858) 338-1678
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
