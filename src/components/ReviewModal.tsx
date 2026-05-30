import { CarouselReview } from '@/data/reviews'
import { useEffect } from 'react'

interface ReviewModalProps {
  review: CarouselReview | null
  onClose: () => void
}

export function ReviewModal({ review, onClose }: ReviewModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (review) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = 'auto'
      }
    }
  }, [review, onClose])

  if (!review) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={onClose}
        style={{ animation: 'fadeIn 0.3s ease-out' }}
        aria-hidden="true"
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8" onClick={onClose}>
        <div
          className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
          style={{ animation: 'slideUp 0.3s ease-out' }}
        >
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-1.5 mb-8">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--sand)" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-[18px] leading-[1.8] mb-10" style={{ color: 'var(--ink)', fontFamily: 'var(--sans)' }}>
              "{review.text}"
            </p>
            <div className="pt-6 mb-8">
              <p className="text-[15px] font-[500] mb-1" style={{ color: 'var(--ink)', fontFamily: 'var(--sans)' }}>
                {review.name}
              </p>
              <p className="text-[14px]" style={{ color: 'var(--sand)', fontFamily: 'var(--sans)' }}>
                {review.location} • {review.date}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/booking"
                className="flex-1 px-6 py-3 text-[12px] tracking-[0.16em] uppercase transition-all duration-300 text-center font-[500]"
                style={{ background: 'var(--ink)', color: 'var(--cream)', fontFamily: 'var(--sans)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--sand)'; e.currentTarget.style.color = 'var(--ink)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--cream)' }}
              >Book Now</a>
              <a
                href="/reviews"
                className="flex-1 px-6 py-3 text-[12px] tracking-[0.16em] uppercase transition-all duration-300 text-center font-[500] border"
                style={{ borderColor: 'var(--ink)', color: 'var(--ink)', fontFamily: 'var(--sans)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--sand-pale)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
              >See More Reviews</a>
              <a
                href="https://www.yelp.com/writeareview/biz/bbN_heYMnYXA2esAoUKpmQ?return_url=%2Fbiz%2FbbN_heYMnYXA2esAoUKpmQ"
                target="_blank" rel="noopener noreferrer"
                className="flex-1 px-6 py-3 text-[12px] tracking-[0.16em] uppercase transition-all duration-300 text-center font-[500]"
                style={{ background: '#C41200', color: 'white', fontFamily: 'var(--sans)' }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9' }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
              >Review on Yelp</a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  )
}
