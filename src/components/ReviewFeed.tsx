import { useQuery } from '@tanstack/react-query'
import { SEED_REVIEWS, mergeReviews, AGGREGATE_RATING } from '@/data/reviews'
import type { Review } from '@/types/review'

// ─── API hook ─────────────────────────────────────────────────────────────────
// Swap the queryFn to fetch from your own /api/reviews endpoint when ready.
// The component renders identically with either the seed data or live data.
async function fetchLiveReviews(): Promise<Review[]> {
  // PRODUCTION: uncomment and implement your API route
  // const res = await fetch('/api/reviews')
  // if (!res.ok) throw new Error('Reviews fetch failed')
  // return res.json() as Promise<Review[]>

  // V1: return empty so we use only seed data
  return []
}

// ─── Source badge ─────────────────────────────────────────────────────────────
function SourceBadge({ source }: { source: Review['source'] }) {
  const labels: Record<Review['source'], string> = {
    google: 'Google Review',
    yelp: 'Yelp Review',
    direct: 'Verified Client',
  }
  return (
    <span
      className="inline-block text-[10px] tracking-[0.18em] uppercase"
      style={{ color: 'var(--sand)' }}
    >
      {labels[source]}
    </span>
  )
}

// ─── Star renderer ────────────────────────────────────────────────────────────
function Stars({ rating }: { rating: number }) {
  return (
    <span
      aria-label={`${rating} out of 5 stars`}
      className="flex gap-1"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="13"
          height="13"
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill={i < rating ? 'var(--sand)' : 'none'}
          stroke="var(--sand)"
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  )
}

// ─── Individual review card — editorial "large quote" layout ─────────────────
function ReviewCard({ review, index }: { review: Review; index: number }) {
  const isLead = index === 0  // First review gets hero treatment

  return (
    <article
      itemScope
      itemType="https://schema.org/Review"
      className={`flex flex-col ${isLead ? 'lg:col-span-2' : ''}`}
      aria-label={`Review by ${review.author}`}
    >
      {/* Large quotation mark — editorial texture */}
      <div
        className="text-[80px] leading-none mb-2 select-none"
        style={{
          fontFamily: 'var(--serif)',
          color: 'var(--sand-light)',
          opacity: 0.6,
          lineHeight: '0.7',
        }}
        aria-hidden="true"
      >
        "
      </div>

      {/* Review text — flat prose for Googlebot */}
      <blockquote
        itemProp="reviewBody"
        className={`flex-1 font-[300] italic leading-[1.75] mb-8 ${isLead ? 'text-[22px] lg:text-[26px]' : 'text-[18px]'}`}
        style={{ fontFamily: 'var(--serif)', color: 'var(--ink)' }}
      >
        {review.text}
      </blockquote>

      {/* Attribution */}
      <footer className="flex items-start justify-between flex-wrap gap-4">
        <div>
          {/* Stars — visible to humans, aria-label for screen readers */}
          <div className="mb-2">
            <Stars rating={review.rating} />
          </div>
          <p
            itemProp="author"
            itemScope
            itemType="https://schema.org/Person"
            className="text-[14px] font-[400]"
            style={{ color: 'var(--ink)' }}
          >
            <span itemProp="name">{review.author}</span>
            {review.location && (
              <span style={{ color: 'var(--mid)' }}>, {review.location}</span>
            )}
          </p>
          <meta itemProp="datePublished" content={review.date} />
          {/* Date — visible to Googlebot via <time> */}
          <time
            dateTime={review.date}
            className="text-[11px]"
            style={{ color: 'var(--mid)' }}
          >
            {new Date(review.date).toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </div>

        <div className="flex flex-col items-end gap-1">
          <SourceBadge source={review.source} />
          {review.sourceUrl && (
            <a
              href={review.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.1em] uppercase border-b"
              style={{ color: 'var(--mid)', borderColor: 'var(--hairline)' }}
              aria-label={`Read full review by ${review.author}`}
            >
              Read review →
            </a>
          )}
        </div>
      </footer>

      {/* Schema.org rating hidden metadata */}
      <div
        itemProp="reviewRating"
        itemScope
        itemType="https://schema.org/Rating"
        className="hidden"
        aria-hidden="true"
      >
        <meta itemProp="ratingValue" content={String(review.rating)} />
        <meta itemProp="bestRating" content="5" />
        <meta itemProp="worstRating" content="1" />
      </div>
    </article>
  )
}

// ─── ReviewFeed ───────────────────────────────────────────────────────────────
// Props: pass reviews directly for SSR or testing.
// If no props passed, component fetches live + merges with seed.
interface ReviewFeedProps {
  reviews?: Review[]
  showAggregate?: boolean
}

export function ReviewFeed({ reviews: propReviews, showAggregate = true }: ReviewFeedProps) {
  const { data: liveReviews = [] } = useQuery({
    queryKey: ['reviews'],
    queryFn: fetchLiveReviews,
    staleTime: 1000 * 60 * 30,  // 30 min cache
    retry: false,               // don't block render on API failure
  })

  // Use prop-injected reviews, or merge live + seed
  const reviews = propReviews ?? mergeReviews(liveReviews)

  return (
    <section
      aria-labelledby="reviews-heading"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Aggregate rating — schema.org markup for Google rich results */}
      {showAggregate && (
        <div
          itemProp="aggregateRating"
          itemScope
          itemType="https://schema.org/AggregateRating"
          className="flex items-center gap-6 mb-16"
        >
          <div>
            <Stars rating={5} />
          </div>
          <div>
            <span
              className="text-[42px] font-[300] leading-none"
              style={{ fontFamily: 'var(--serif)', color: 'var(--ink)' }}
            >
              <span itemProp="ratingValue">{AGGREGATE_RATING.ratingValue.toFixed(1)}</span>
            </span>
            <span
              className="block text-[11px] tracking-[0.14em] uppercase mt-1"
              style={{ color: 'var(--mid)' }}
            >
              Consistently rated 5 stars across all platforms
            </span>
            <meta itemProp="bestRating" content="5" />
            <meta itemProp="worstRating" content="1" />
          </div>
          <div
            className="hidden"
            itemProp="name"
            aria-hidden="true"
          >
            iL Progetto LLC
          </div>
        </div>
      )}

      <h2
        id="reviews-heading"
        className="font-[300] leading-[1.04] tracking-[-0.015em] mb-16"
        style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(34px, 3.8vw, 54px)',
          color: 'var(--ink)',
        }}
      >
        What Our Clients{' '}
        <em className="italic" style={{ color: 'var(--sand)' }}>
          Say About Us
        </em>
      </h2>

      {/* Grid — first card spans 2 cols on large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        {reviews.map((review, i) => (
          <ReviewCard key={review.id} review={review} index={i} />
        ))}
      </div>

      {/* Divider line — editorial texture */}
      <div
        className="mt-16 h-px"
        style={{ background: 'var(--hairline)' }}
        aria-hidden="true"
      />
    </section>
  )
}
