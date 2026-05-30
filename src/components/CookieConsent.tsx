import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'

const STORAGE_KEY = 'ilp_cookie_consent'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
    } catch { setVisible(true) }
  }, [])

  function accept() {
    try { localStorage.setItem(STORAGE_KEY, 'accepted') } catch { /* private mode */ }
    setVisible(false)
  }

  function decline() {
    try { localStorage.setItem(STORAGE_KEY, 'declined') } catch { /* private mode */ }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 lg:bottom-4 lg:left-4 lg:right-auto lg:max-w-[420px] pointer-events-auto"
      style={{
        zIndex: 950,
        background: 'rgba(18,18,16,0.97)',
        backdropFilter: 'blur(12px)',
        border: '0.5px solid rgba(255,255,255,0.1)',
        borderRadius: '12px 12px 0 0',
      }}
    >
      {/* Desktop: full rounded card */}
      <style>{`
        @media (min-width: 1024px) {
          [aria-label="Cookie consent"] { border-radius: 8px !important; border-bottom: 0.5px solid rgba(255,255,255,0.1) !important; }
        }
      `}</style>

      <div className="px-6 py-5">
        <div className="flex items-start gap-4">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{ background: 'rgba(197,165,114,0.15)', color: 'var(--sand)' }}
            aria-hidden="true"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2z" />
              <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-[400] mb-1" style={{ color: 'var(--cream)' }}>
              We use cookies
            </p>
            <p className="text-[12px] leading-[1.65]" style={{ color: 'rgba(251,251,249,0.55)' }}>
              We use essential cookies to keep the site running.{' '}
              <Link
                to="/legal"
                search={{ tab: 'privacy' as const }}
                className="underline hover:text-[var(--sand-light)] transition-colors"
                style={{ color: 'rgba(251,251,249,0.45)' }}
              >
                Privacy policy
              </Link>
            </p>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <button
            onClick={accept}
            className="flex-1 py-2.5 text-[11px] tracking-[0.16em] uppercase transition-opacity hover:opacity-90"
            style={{ background: 'var(--sand)', color: '#fff' }}
          >
            Accept
          </button>
          <button
            onClick={decline}
            className="flex-1 py-2.5 text-[11px] tracking-[0.16em] uppercase border transition-colors hover:border-white/30"
            style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(251,251,249,0.55)' }}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
