import { createFileRoute, Link } from '@tanstack/react-router'
import { ReviewsScrollPanel } from '@/components/ReviewsScrollPanel'
import { REVIEWS_DATA } from '@/data/reviews'
import { SITE_URL } from '@/lib/config'

export const Route = createFileRoute('/reviews')({
  head: () => ({
    meta: [
      { title: 'Customer Reviews | iL Progetto LLC — San Diego Window Treatments' },
      { name: 'description', content: 'See what San Diego homeowners say about iL Progetto LLC. 32 five-star reviews on Google and Yelp. Custom window treatments, professional installation, free in-home consultation.' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Customer Reviews | iL Progetto LLC — San Diego Window Treatments' },
      { property: 'og:description', content: 'See what San Diego homeowners say about iL Progetto LLC. 32 five-star reviews on Google and Yelp.' },
      { property: 'og:url', content: `${SITE_URL}/reviews` },
      { property: 'og:image', content: `${SITE_URL}/images/og-image.jpg` },
    ],
    links: [{ rel: 'canonical', href: `${SITE_URL}/reviews` }],
  }),
  component: ReviewsPage,
})

// ─── Helpers ──────────────────────────────────────────────────────────────────
const TOTAL_REVIEWS  = 32
const AVG_RATING     = '5.0'
const FIVE_STAR_PCT  = '100%'

function Stars({ count = 5, size = 14, color = 'var(--sand)' }: { count?: number; size?: number; color?: string }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  )
}

// ─── Icons ────────────────────────────────────────────────────────────────────
function GoogleIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#4285F4" d="M45.12 24.5c0-1.72-.15-3.37-.44-4.95H24v9.36h11.85c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.55-9.47 6.55-16.57z"/>
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
      <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18V14.12H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/>
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/>
    </svg>
  )
}

function YelpIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="#C41200" aria-hidden="true">
      <g transform="translate(16,16)">
        {[0, 72, 144, 216, 288].map(r => (
          <path key={r} d="M-2.5,-13 Q0,-16 2.5,-13 L3.5,-4 Q0,-2 -3.5,-4 Z" transform={`rotate(${r})`} />
        ))}
      </g>
    </svg>
  )
}

// ─── Featured review card ─────────────────────────────────────────────────────
function FeaturedCard({ name, location, text, date }: { name: string; location: string; text: string; date: string }) {
  return (
    <div className="relative p-8 md:p-10 flex flex-col h-full" style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
      {/* Giant quote mark */}
      <span
        className="absolute top-4 right-8 font-[300] leading-none select-none pointer-events-none"
        style={{ fontFamily: 'var(--serif)', fontSize: '120px', color: 'var(--sand)', opacity: 0.15, lineHeight: 1 }}
        aria-hidden="true"
      >
        "
      </span>
      <Stars size={13} color="var(--sand)" />
      <p className="mt-5 mb-6 text-[15px] leading-[1.9] font-[300] flex-1" style={{ fontFamily: 'var(--serif)', color: 'rgba(251,251,249,0.9)' }}>
        "{text}"
      </p>
      <div className="flex items-center justify-between mt-auto pt-6" style={{ borderTop: '0.5px solid rgba(255,255,255,0.1)' }}>
        <div>
          <p className="text-[13px] font-[500]" style={{ color: 'var(--cream)' }}>{name}</p>
          <p className="text-[11px] mt-0.5" style={{ color: 'rgba(251,251,249,0.45)' }}>{location}</p>
        </div>
        <p className="text-[10px] tracking-[0.1em]" style={{ color: 'var(--sand-light)' }}>{date}</p>
      </div>
    </div>
  )
}

// ─── Standard review card ─────────────────────────────────────────────────────
function ReviewGridCard({ name, location, text, date }: { name: string; location: string; text: string; date: string }) {
  return (
    <div className="p-7 flex flex-col h-full relative" style={{ background: 'var(--cream)', border: '0.5px solid var(--hairline)' }}>
      <span
        className="absolute top-3 right-6 select-none pointer-events-none"
        style={{ fontFamily: 'var(--serif)', fontSize: '72px', color: 'var(--sand)', opacity: 0.12, lineHeight: 1 }}
        aria-hidden="true"
      >
        "
      </span>
      <Stars size={12} />
      <p className="mt-4 mb-5 text-[13.5px] leading-[1.85] flex-1" style={{ color: 'var(--mid)', fontFamily: 'var(--sans)' }}>
        "{text}"
      </p>
      <div className="flex items-center justify-between pt-5 mt-auto" style={{ borderTop: '0.5px solid var(--hairline)' }}>
        <div>
          <p className="text-[12px] font-[500]" style={{ color: 'var(--ink)' }}>{name}</p>
          <p className="text-[10px] mt-0.5 tracking-[0.06em]" style={{ color: 'var(--mid)' }}>{location}</p>
        </div>
        <p className="text-[10px]" style={{ color: 'var(--sand-light)' }}>{date}</p>
      </div>
    </div>
  )
}

// ─── ReviewsPage ─────────────────────────────────────────────────────────────
function ReviewsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: 'iL Progetto LLC',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: String(TOTAL_REVIEWS),
      bestRating: '5',
      worstRating: '1',
    },
  }

  // Pick 9 reviews for the grid — favour longer, descriptive ones
  const FEATURED = REVIEWS_DATA[1]!   // Clayton N.
  const GRID_PICKS = [
    REVIEWS_DATA[3]!,   // Cindy S.
    REVIEWS_DATA[6]!,   // Marion J.
    REVIEWS_DATA[13]!,  // Allison M.
    REVIEWS_DATA[8]!,   // Geoffrey R.
    REVIEWS_DATA[15]!,  // Natalie G.
    REVIEWS_DATA[17]!,  // Ashling M.
    REVIEWS_DATA[11]!,  // Malcolm T.
    REVIEWS_DATA[16]!,  // Mary S.
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO — dark ink, big rating
      ══════════════════════════════════════════════════════════════════════ */}
      <header
        className="px-4 md:px-10 lg:px-20 pt-28 pb-20 md:pt-36 md:pb-28"
        style={{ background: 'var(--ink)' }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: copy */}
            <div>
              <p className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-6"
                 style={{ color: 'var(--sand)' }}>
                <span className="inline-block w-8 h-px bg-[var(--sand)]" aria-hidden="true" />
                Verified Customer Reviews
              </p>
              <h1
                className="font-[300] leading-[1.04] tracking-[-0.02em] mb-6"
                style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 5vw, 68px)', color: 'var(--cream)' }}
              >
                {TOTAL_REVIEWS} San Diego Homeowners.{' '}
                <em className="italic" style={{ color: 'var(--sand)' }}>One Common Story.</em>
              </h1>
              <p className="text-[16px] leading-[1.85] mb-10" style={{ color: 'rgba(251,251,249,0.6)' }}>
                Every review below is from a real homeowner — measured, installed, and genuinely happy.
                Read their words, then let us come to you.
              </p>
              <a
                href="#reviews-grid"
                className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase px-8 py-4"
                style={{ background: 'var(--sand)', color: '#fff' }}
              >
                Read Reviews
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
                </svg>
              </a>
            </div>

            {/* Right: big rating display */}
            <div className="flex flex-col gap-6">

              {/* Rating block */}
              <div className="p-10 flex items-center gap-8" style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.1)' }}>
                <div>
                  <p className="font-[200] leading-none" s