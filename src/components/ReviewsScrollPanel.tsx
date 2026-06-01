import { useEffect, useRef, useState } from 'react'
import { REVIEWS_DATA, CarouselReview } from '@/data/reviews'
import { ReviewCard } from './ReviewCard'
import { ReviewModal } from './ReviewModal'

interface ReviewsScrollPanelProps {
  autoPlayInterval?: number
  showControls?: boolean
  compact?: boolean
  darkBg?: boolean
  enableModal?: boolean
  showButtons?: boolean
}

export function ReviewsScrollPanel({
  autoPlayInterval = 5000,
  showControls = true,
  compact = false,
  darkBg = false,
  enableModal = false,
  showButtons = false,
}: ReviewsScrollPanelProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null)
  const [selectedReview, setSelectedReview] = useState<CarouselReview | null>(null)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' })
      if (isAutoPlaying) resetAutoPlayTimer()
    }
  }

  const autoScroll = () => {
    if (scrollContainerRef.current && isAutoPlaying) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 10
      if (isAtEnd) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        scrollContainerRef.current.scrollLeft += 400
      }
    }
  }

  const resetAutoPlayTimer = () => {
    if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current)
    autoPlayTimerRef.current = setInterval(autoScroll, autoPlayInterval)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
    if (!isAutoPlaying) {
      resetAutoPlayTimer()
    } else if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current)
    }
  }

  useEffect(() => {
    checkScroll()
    if (isAutoPlaying) resetAutoPlayTimer()
    return () => { if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current) }
  }, [isAutoPlaying])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScroll)
      window.addEventListener('resize', checkScroll)
      return () => {
        container.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
      }
    }
  }, [])

  return (
    <>
      <div className="w-full py-12 md:py-20 px-0 md:px-4" style={{ background: darkBg ? 'var(--ink)' : 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto">
          {!compact && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px" style={{ background: darkBg ? 'var(--sand-light)' : 'var(--sand)' }} aria-hidden="true" />
                <p className="text-[11px] tracking-[0.22em] uppercase" style={{ color: darkBg ? 'var(--sand-light)' : 'var(--sand)', fontFamily: 'var(--sans)' }}>
                  Customer Stories
                </p>
              </div>
              <h2
                className="font-[300] leading-[1.08] tracking-[-0.015em]"
                style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(38px, 5vw, 56px)', color: darkBg ? 'var(--cream)' : 'var(--ink)', marginBottom: '16px' }}
              >
                What Our Clients{' '}
                <em className="italic" style={{ color: darkBg ? 'var(--sand-light)' : 'var(--sand)' }}>Say</em>
              </h2>
              <p className="text-[15px] leading-[1.7] max-w-2xl" style={{ color: darkBg ? 'rgba(251,251,249,0.7)' : 'var(--mid)', fontFamily: 'var(--sans)' }}>
                Real stories from homeowners across California who trusted us with their windows.
              </p>
            </div>
          )}

          <div className="relative group">
            <div ref={scrollContainerRef} className="flex gap-4 md:gap-8 overflow-x-auto scroll-smooth pb-4" style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch", overscrollBehaviorX: "contain" }}>
              {REVIEWS_DATA.map((review) => (
                <ReviewCard
                  key={review.id}
                  review={review}
                  onClick={enableModal ? () => setSelectedReview(review) : undefined}
                  showButtons={showButtons}
                />
              ))}
            </div>

            {showControls && canScrollLeft && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 flex-shrink-0"
                aria-label="Scroll left"
                style={{ color: darkBg ? 'rgba(251,251,249,0.6)' : 'var(--sand)' }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            )}

            {showControls && canScrollRight && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 flex-shrink-0"
                aria-label="Scroll right"
                style={{ color: darkBg ? 'rgba(251,251,249,0.6)' : 'var(--sand)' }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            )}

            {showControls && (
              <button
                onClick={toggleAutoPlay}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 p-2 transition-all duration-200 hover:scale-110"
                aria-label={isAutoPlaying ? 'Pause auto-scroll' : 'Play auto-scroll'}
                style={{ color: darkBg ? 'rgba(251,251,249,0.6)' : 'var(--sand)' }}
              >
                {isAutoPlaying ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                )}
              </button>
            )}
          </div>

          {showControls && (
            <p className="mt-20 text-center text-[12px] tracking-[0.1em]" style={{ color: darkBg ? 'rgba(251,251,249,0.5)' : 'var(--sand-light)', fontFamily: 'var(--sans)' }}>
              {isAutoPlaying ? '◼ Auto-scrolling' : '▶ Paused'} • Use arrows to navigate
            </p>
          )}
        </div>
      </div>

      {enableModal && <ReviewModal review={selectedReview} onClose={() => setSelectedReview(null)} />}
    </>
  )
}
