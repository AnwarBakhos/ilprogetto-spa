import { createFileRoute } from '@tanstack/react-router'
import { ReviewsScrollPanel } from '@/components/ReviewsScrollPanel'

export const Route = createFileRoute('/reviews')({
  head: () => ({
    meta: [
      { title: 'Leave a Review | iL Progetto LLC — San Diego Window Treatments' },
      {
        name: 'description',
        content:
          'Happy with your new window treatments from iL Progetto LLC? Share your experience on Google or Yelp. Your review helps other San Diego homeowners find quality, affordable window coverings — it only takes 60 seconds.',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Leave a Review | iL Progetto LLC — San Diego Window Treatments' },
      { property: 'og:description', content: 'Happy with your new window treatments from iL Progetto LLC? Share your experience on Google or Yelp. Your review helps other San Diego homeowners find quality, affordable window coverings — it only takes 60 seconds.' },
      { property: 'og:url', content: 'https://ilprogetto-spa.vercel.app/reviews' },
      { property: 'og:image', content: 'https://drive.google.com/thumbnail?id=1uaY6LDCh59x8TymxSD3VmynmW35bK1ou&sz=w1200' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Leave a Review | iL Progetto LLC — San Diego Window Treatments' },
      { name: 'twitter:description', content: 'Happy with your new window treatments from iL Progetto LLC? Share your experience on Google or Yelp. Your review helps other San Diego homeowners find quality, affordable window coverings — it only takes 60 seconds.' },
    ],
    links: [
      { rel: 'canonical', href: 'https://ilprogetto-spa.vercel.app/reviews' },
    ],
  }),
  component: ReviewsPage,
})

// ─── Review platform card ─────────────────────────────────────────────────────
function PlatformCard({
  platform,
  tagline,
  href,
  icon,
  accentColor,
  cta,
}: {
  platform: string
  tagline: string
  href: string
  icon: React.ReactNode
  accentColor: string
  cta: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'var(--cream)',
        borderColor: 'var(--hairline)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = accentColor
        e.currentTarget.style.boxShadow = `0 8px 40px ${accentColor}18`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--hairline)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div className="p-10 md:p-14">
        {/* Platform icon */}
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mb-8"
          style={{ background: `${accentColor}14`, color: accentColor }}
        >
          {icon}
        </div>

        {/* Platform name */}
        <p
          className="text-[11px] tracking-[0.22em] uppercase mb-3"
          style={{ color: accentColor }}
        >
          {platform}
        </p>

        {/* Tagline */}
        <h2
          className="font-[300] leading-[1.15] mb-5"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(24px, 2.5vw, 32px)',
            color: 'var(--ink)',
          }}
        >
          {tagline}
        </h2>

        {/* CTA row */}
        <div
          className="inline-flex items-center gap-3 text-[12px] tracking-[0.16em] uppercase transition-all duration-200 group-hover:gap-4"
          style={{ color: accentColor }}
        >
          {cta}
          <svg
            width="14" height="14" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="1.5"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>

      {/* Bottom accent strip */}
      <div
        className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: accentColor }}
        aria-hidden="true"
      />
    </a>
  )
}

// ─── Google G icon ────────────────────────────────────────────────────────────
function GoogleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#4285F4" d="M45.12 24.5c0-1.72-.15-3.37-.44-4.95H24v9.36h11.85c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.55-9.47 6.55-16.57z"/>
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
      <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18V14.12H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/>
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/>
    </svg>
  )
}

// ─── Yelp burst icon ──────────────────────────────────────────────────────────
function YelpIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 32 32" fill="#C41200" aria-hidden="true">
      <g transform="translate(16,16)">
        <path d="M-2.5,-13 Q0,-16 2.5,-13 L3.5,-4 Q0,-2 -3.5,-4 Z" transform="rotate(0)" />
        <path d="M-2.5,-13 Q0,-16 2.5,-13 L3.5,-4 Q0,-2 -3.5,-4 Z" transform="rotate(72)" />
        <path d="M-2.5,-13 Q0,-16 2.5,-13 L3.5,-4 Q0,-2 -3.5,-4 Z" transform="rotate(144)" />
        <path d="M-2.5,-13 Q0,-16 2.5,-13 L3.5,-4 Q0,-2 -3.5,-4 Z" transform="rotate(216)" />
        <path d="M-2.5,-13 Q0,-16 2.5,-13 L3.5,-4 Q0,-2 -3.5,-4 Z" transform="rotate(288)" />
      </g>
    </svg>
  )
}

// ─── ReviewsPage ─────────────────────────────────────────────────────────────
function ReviewsPage() {
  return (
    <div style={{ background: 'var(--warm)', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <header className="px-10 md:px-20 pt-32 pb-20 text-center max-w-[680px] mx-auto">
        <p
          className="text-[11px] tracking-[0.22em] uppercase mb-8"
          style={{ color: 'var(--sand)', fontFamily: 'var(--sans)' }}
        >
          Customer Reviews
        </p>

        <h1
          className="font-[300] leading-[1.08] tracking-[-0.015em] mb-7"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(42px, 5.5vw, 64px)',
            color: 'var(--ink)',
          }}
        >
          What Our Customers Say
        </h1>

        <p
          className="text-[16px] leading-[1.85] mb-2"
          style={{ color: 'var(--mid)', fontFamily: 'var(--sans)' }}
        >
          Real stories from homeowners across California who trusted us with their windows.
        </p>
      </header>

      {/* ── Reviews Carousel ── */}
      <ReviewsScrollPanel autoPlayInterval={6000} showControls={true} compact={true} />

      {/* ── Platform cards ── */}
      <section
        className="px-10 md:px-20 py-20 max-w-[900px] mx-auto"
        style={{ background: 'var(--cream)' }}
        aria-label="Review platforms"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PlatformCard
            platform="Google Reviews"
            tagline="Share your experience on Google"
            href="https://www.google.com/search?sca_esv=91a56050fdbf678a&sxsrf=ANbL-n4R2w3byni23resgcZ7r4n376DJCQ:1779966168665&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOS95U84G4tyS04CXSwpqHM7_aldYQEgC8qEuDAmj5gJ0Tt1lxA8PiYo0gN_6XXJiwcTCRtsaZhjZLbnmNjGIq77UHEaM&q=iL+Progetto+LLC+Reviews&sa=X&ved=2ahUKEwif9cfZ6tuUAxUELkQIHYG_Co4Q0bkNegQIQhAH&biw=1912&bih=994&dpr=1#"
            icon={<GoogleIcon />}
            accentColor="#4285F4"
            cta="Write a Google Review"
          />
          <PlatformCard
            platform="Yelp"
            tagline="Leave us a Yelp review"
            href="https://www.yelp.com/writeareview/biz/bbN_heYMnYXA2esAoUKpmQ?return_url=%2Fbiz%2FbbN_heYMnYXA2esAoUKpmQ&review_origin=biz-details-war-button"
            icon={<YelpIcon />}
            accentColor="#C41200"
            cta="Write a Yelp Review"
          />
        </div>
      </section>

      {/* ── Closing note ── */}
      <section
        className="px-10 md:px-20 pb-32 text-center max-w-[620px] mx-auto"
        aria-label="Thank you note"
      >
        <p
          className="text-[16px] leading-[1.9] mb-6"
          style={{ color: 'var(--mid)', fontFamily: 'var(--serif)', fontStyle: 'italic' }}
        >
          "Every window treatment we install is a commitment — measured to fit, chosen to last, installed to look like it was always there. When a client takes the time to write about that, it genuinely makes our week."
        </p>
        <p
          className="text-[13px] tracking-[0.12em] uppercase"
          style={{ color: 'var(--sand)', fontFamily: 'var(--sans)' }}
        >
          — The iL Progetto Team
        </p>
      </section>
    </div>
  )
}