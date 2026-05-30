import { CarouselReview } from '@/data/reviews'

interface ReviewCardProps {
  review: CarouselReview
  onClick?: () => void
  showButtons?: boolean
}

export function ReviewCard({ review, onClick, showButtons = false }: ReviewCardProps) {
  return (
    <div
      className="flex-shrink-0 w-96 h-full flex flex-col p-9 cursor-pointer transition-all duration-300 hover:shadow-xl"
      style={{
        background: 'var(--cream)',
        borderLeft: '3px solid var(--sand)',
      }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.()
        }
      }}
      role="button"
      tabIndex={0}
    >
      {/* Stars */}
      <div className="flex items-center gap-1.5 mb-7">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="var(--sand)"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Review text - takes priority */}
      <p
        className="text-[15px] leading-[1.75] mb-8 flex-grow"
        style={{
          color: 'var(--ink)',
          fontFamily: 'var(--sans)',
        }}
      >
        "{review.text}"
      </p>

      {/* Author info at bottom */}
      <div className={showButtons ? 'mt-auto pt-6 mb-6' : 'mt-auto pt-6'}>
        <p
          className="text-[14px] font-[500] mb-1"
          style={{
            color: 'var(--ink)',
            fontFamily: 'var(--sans)',
          }}
        >
          {review.name}
        </p>
        <p
          className="text-[13px]"
          style={{
            color: 'var(--sand)',
            fontFamily: 'var(--sans)',
          }}
        >
          {review.location}
        </p>
      </div>

      {/* Action Buttons - only on homepage */}
      {showButtons && (
        <div className="flex flex-col gap-2">
          {/* Book Now */}
          <a
            href="/booking"
            onClick={(e) => {
              e.preventDefault()
              onClick?.()
            }}
            className="inline-block px-5 py-2 text-[10px] tracking-[0.16em] uppercase transition-colors btn-interactive"
            style={{
              background: 'var(--sand)',
              color: 'var(--ink)',
              fontFamily: 'var(--sans)',
            }}
          >
            Book Now
          </a>

          {/* See More Reviews */}
          <a
            href="/reviews"
            onClick={(e) => {
              e.preventDefault()
              onClick?.()
            }}
            className="inline-block px-5 py-2 text-[10px] tracking-[0.16em] uppercase transition-colors btn-interactive"
            style={{
              background: 'var(--ink)',
              color: 'var(--cream)',
              fontFamily: 'var(--sans)',
            }}
          >
            See More
          </a>

          {/* Yelp */}
          <a
            href="https://www.yelp.com/writeareview/biz/bbN_heYMnYXA2esAoUKpmQ?return_url=%2Fbiz%2FbbN_heYMnYXA2esAoUKpmQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 text-[10px] tracking-[0.16em] uppercase transition-colors btn-interactive"
            style={{
              background: 'var(--sand)',
              color: 'var(--ink)',
              fontFamily: 'var(--sans)',
            }}
          >
            Yelp Review
          </a>
        </div>
      )}
    </div>
  )
}
