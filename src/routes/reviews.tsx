import { createFileRoute, Link } from '@tanstack/react-router'
import { ReviewsScrollPanel } from '@/components/ReviewsScrollPanel'
import { REVIEWS_DATA } from '@/data/reviews'
import { SITE_URL } from '@/lib/config'

export const Route = createFileRoute('/reviews')({
  head: () => ({
    meta: [
      { title: 'Customer Reviews | iL Progetto LLC — San Diego Window Treatments' },
      { name: 'description', content: 'See what San Diego homeowners say about iL Progetto LLC. Five-star reviews on Google and Yelp. Custom window treatments, professional installation, free in-home consultation.' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Customer Reviews | iL Progetto LLC — San Diego Window Treatments' },
      { property: 'og:description', content: 'See what San Diego homeowners say about iL Progetto LLC. Five-star reviews on Google and Yelp.' },
      { property: 'og:url', content: `${SITE_URL}/reviews` },
      { property: 'og:image', content: `${SITE_URL}/images/og-image.jpg` },
    ],
    links: [{ rel: 'canonical', href: `${SITE_URL}/reviews` }],
  }),
  component: ReviewsPage,
})

// ─── Helpers ──────────────────────────────────────────────────────────────────
const AVG_RATING    = '5.0'
const FIVE_STAR_PCT = '100%'

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
                San Diego Homeowners.{' '}
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
                  <p className="font-[200] leading-none" style={{ fontFamily: 'var(--serif)', fontSize: '88px', color: 'var(--cream)' }}>
                    {AVG_RATING}
                  </p>
                  <Stars size={18} color="var(--sand)" />
                  <p className="mt-3 text-[11px] tracking-[0.16em] uppercase" style={{ color: 'rgba(251,251,249,0.45)' }}>
                    Average Rating
                  </p>
                </div>
                <div className="w-px self-stretch" style={{ background: 'rgba(255,255,255,0.1)' }} aria-hidden="true" />
                <div className="flex flex-col gap-4">
                  {[
                    { label: '5-Star Reviews', val: FIVE_STAR_PCT },
                    { label: 'Response Rate', val: '< 2 hrs' },
                    { label: 'Platforms', val: 'Google · Yelp' },
                  ].map(({ label, val }) => (
                    <div key={label}>
                      <p className="font-[300] text-[26px] leading-none" style={{ fontFamily: 'var(--serif)', color: 'var(--cream)' }}>{val}</p>
                      <p className="text-[10px] tracking-[0.12em] uppercase mt-1" style={{ color: 'rgba(251,251,249,0.4)' }}>{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Platform badges */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <GoogleIcon size={20} />, name: 'Google', rating: '5.0', tag: 'Verified', href: 'https://g.page/r/CaPXEMsWP63SEBM/review' },
                  { icon: <YelpIcon size={18} />,   name: 'Yelp',   rating: '5.0', tag: 'Verified', href: 'https://www.yelp.com/writeareview/biz/bbN_heYMnYXA2esAoUKpmQ?return_url=%2Fbiz%2FbbN_heYMnYXA2esAoUKpmQ&review_origin=biz-details-war-button' },
                ].map(({ icon, name, rating, tag, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 transition-colors duration-200"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.08)' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.10)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
                  >
                    {icon}
                    <div>
                      <p className="text-[12px]" style={{ color: 'var(--cream)' }}>{name} · {rating}</p>
                      <p className="text-[9px] tracking-[0.14em] uppercase mt-0.5" style={{ color: 'var(--sand)' }}>{tag}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════════════
          2. STATS BAND
      ══════════════════════════════════════════════════════════════════════ */}
      <div style={{ background: 'var(--sand)', color: '#fff' }}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-20 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x" style={{ '--tw-divide-color': 'rgba(255,255,255,0.25)' } as React.CSSProperties}>
            {[
              { stat: '5.0 ★',        label: 'Perfect Rating' },
              { stat: '100%',          label: 'Five-Star Reviews' },
              { stat: '< 2 hrs',       label: 'Response Time' },
              { stat: 'Lic. #1127055', label: 'Licensed & Insured' },
            ].map(({ stat, label }) => (
              <div key={label} className="flex flex-col items-center text-center md:py-1">
                <p className="font-[300] text-[22px] md:text-[26px]" style={{ fontFamily: 'var(--serif)' }}>{stat}</p>
                <p className="text-[10px] tracking-[0.16em] uppercase mt-1 opacity-80">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          3. LEAVE A REVIEW — prominent, at top so users see it immediately
      ══════════════════════════════════════════════════════════════════════ */}
      <section aria-label="Leave a review" className="px-4 md:px-10 lg:px-20 py-16 md:py-20" style={{ background: 'var(--ink)' }}>
        <div className="max-w-[900px] mx-auto">

          <div className="text-center mb-12">
            <p className="text-[11px] tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--sand)' }}>Share Your Experience</p>
            <h2 className="font-[300] leading-[1.06] mb-5" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 4vw, 52px)', color: 'var(--cream)' }}>
              Your Review Helps a{' '}
              <em className="italic" style={{ color: 'var(--sand)' }}>Small Business</em>{' '}
              Grow
            </h2>
            <p className="text-[15px] leading-[1.85] max-w-[520px] mx-auto" style={{ color: 'rgba(251,251,249,0.55)' }}>
              It takes 60 seconds. For a family-owned business like ours, it means everything.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: 'rgba(255,255,255,0.08)' }}>
            {/* Google */}
            <a
              href="https://g.page/r/CaPXEMsWP63SEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-10 transition-colors duration-300"
              style={{ background: 'var(--ink)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(66,133,244,0.08)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink)')}
            >
              <div className="flex items-center gap-4 mb-6">
                <GoogleIcon size={32} />
                <div>
                  <p className="text-[13px]" style={{ color: 'var(--cream)' }}>Google Reviews</p>
                  <Stars size={11} color="var(--sand)" />
                </div>
              </div>
              <p className="text-[22px] font-[300] leading-[1.2] mb-5" style={{ fontFamily: 'var(--serif)', color: 'var(--cream)' }}>
                Leave a Google Review
              </p>
              <p className="text-[13px] mb-8" style={{ color: 'rgba(251,251,249,0.5)' }}>
                Google reviews boost local search ranking and help neighbors find us.
              </p>
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase transition-all duration-200 group-hover:gap-3"
                   style={{ color: '#4285F4' }}>
                Write a Review
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </a>

            {/* Yelp */}
            <a
              href="https://www.yelp.com/writeareview/biz/bbN_heYMnYXA2esAoUKpmQ?return_url=%2Fbiz%2FbbN_heYMnYXA2esAoUKpmQ&review_origin=biz-details-war-button"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-10 transition-colors duration-300"
              style={{ background: 'var(--ink)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(196,18,0,0.08)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink)')}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 flex items-center justify-center">
                  <YelpIcon size={28} />
                </div>
                <div>
                  <p className="text-[13px]" style={{ color: 'var(--cream)' }}>Yelp</p>
                  <Stars size={11} color="var(--sand)" />
                </div>
              </div>
              <p className="text-[22px] font-[300] leading-[1.2] mb-5" style={{ fontFamily: 'var(--serif)', color: 'var(--cream)' }}>
                Leave a Yelp Review
              </p>
              <p className="text-[13px] mb-8" style={{ color: 'rgba(251,251,249,0.5)' }}>
                Yelp reviews help homeowners make confident decisions about who to trust.
              </p>
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase transition-all duration-200 group-hover:gap-3"
                   style={{ color: '#C41200' }}>
                Write a Review
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. REVIEW GRID
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="reviews-grid" aria-label="Customer reviews" className="px-4 md:px-10 lg:px-20 py-20 md:py-28" style={{ background: 'var(--warm)' }}>
        <div className="max-w-[1200px] mx-auto">

          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-px" style={{ background: 'var(--sand)' }} aria-hidden="true" />
            <p className="text-[11px] tracking-[0.22em] uppercase" style={{ color: 'var(--sand)' }}>What They Said</p>
          </div>
          <h2 className="font-[300] leading-[1.06] mb-14" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(30px, 3.5vw, 46px)', color: 'var(--ink)' }}>
            In Their Own Words
          </h2>

          {/* Bento-style grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">

            {/* Featured card — spans 1 col, full height with dark bg */}
            <div className="row-span-2 flex">
              <FeaturedCard
                name={FEATURED.name}
                location={FEATURED.location}
                text={FEATURED.text}
                date={FEATURED.date}
              />
            </div>

            {/* Regular cards */}
            {GRID_PICKS.slice(0, 4).map(r => (
              <ReviewGridCard
                key={r.id}
                name={r.name}
                location={r.location}
                text={r.text.length > 220 ? r.text.slice(0, 220) + '…' : r.text}
                date={r.date}
              />
            ))}

            {/* Second featured — full width across remaining cols */}
            <div className="lg:col-span-2 flex" style={{ background: 'var(--sand-pale)', border: '0.5px solid var(--hairline)' }}>
              <div className="p-8 flex flex-col md:flex-row gap-8 items-center w-full">
                <div className="flex-shrink-0">
                  <Stars size={16} />
                  <p className="mt-4 text-[32px] font-[200] leading-none" style={{ fontFamily: 'var(--serif)', color: 'var(--ink)' }}>
                    "Exceeded our expectations."
                  </p>
                </div>
                <div className="w-px self-stretch hidden md:block" style={{ background: 'var(--hairline)' }} aria-hidden="true" />
                <div>
                  <p className="text-[14px] leading-[1.85]" style={{ color: 'var(--mid)' }}>
                    "{GRID_PICKS[4]!.text.slice(0, 280)}{GRID_PICKS[4]!.text.length > 280 ? '…' : ''}"
                  </p>
                  <p className="mt-4 text-[12px] font-[500]" style={{ color: 'var(--ink)' }}>{GRID_PICKS[4]!.name} · <span style={{ fontWeight: 400, color: 'var(--mid)' }}>{GRID_PICKS[4]!.location}</span></p>
                </div>
              </div>
            </div>

            {/* Last 3 cards */}
            {GRID_PICKS.slice(5, 8).map(r => (
              <ReviewGridCard
                key={r.id}
                name={r.name}
                location={r.location}
                text={r.text.length > 200 ? r.text.slice(0, 200) + '…' : r.text}
                date={r.date}
              />
            ))}

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. CAROUSEL (existing component)
      ══════════════════════════════════════════════════════════════════════ */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-20 pt-16 pb-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-block w-8 h-px" style={{ background: 'var(--sand)' }} aria-hidden="true" />
            <p className="text-[11px] tracking-[0.22em] uppercase" style={{ color: 'var(--sand)' }}>All Reviews</p>
          </div>
          <h2 className="font-[300]" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3vw, 38px)', color: 'var(--ink)' }}>
            Browse Every Story
          </h2>
        </div>
        <ReviewsScrollPanel autoPlayInterval={6000} showControls compact />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          6. CLOSING + BOOKING CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="px-4 md:px-10 lg:px-20 py-24" style={{ background: 'var(--warm)' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[18px] md:text-[22px] leading-[1.9] mb-8 font-[300]"
             style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--mid)' }}>
            "Every window treatment we install is a commitment — measured to fit, chosen to last, installed to look like it was always there.
            When a client takes the time to write about that, it genuinely makes our week."
          </p>
          <p className="text-[12px] tracking-[0.18em] uppercase mb-14" style={{ color: 'var(--sand)' }}>
            — The iL Progetto Team
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-3 px-10 py-4 text-[11px] tracking-[0.2em] uppercase"
            style={{ background: 'var(--ink)', color: 'var(--cream)' }}
          >
            Book Your Free Consultation
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
