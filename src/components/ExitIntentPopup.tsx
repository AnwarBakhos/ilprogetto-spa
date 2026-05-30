import { useState, useEffect, useRef } from 'react'
import { Link } from '@tanstack/react-router'

const STORAGE_KEY = 'ilp_popup_dismissed'
const SCROLL_THRESHOLD = 0.5   // 50% scroll depth
const TIME_THRESHOLD   = 30000 // 30 seconds

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false)
  const [email,   setEmail]   = useState('')
  const [status,  setStatus]  = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [errMsg,  setErrMsg]  = useState('')
  const triggered = useRef(false)

  function dismiss() {
    setVisible(false)
    try { localStorage.setItem(STORAGE_KEY, '1') } catch { /* private mode */ }
    triggered.current = true
  }

  useEffect(() => {
    // Already dismissed — never show again
    try {
      if (localStorage.getItem(STORAGE_KEY)) return
    } catch { /* private mode — show anyway */ }

    let timer: ReturnType<typeof setTimeout>

    // Trigger 1: 50% scroll depth
    function onScroll() {
      if (triggered.current) return
      const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      if (scrolled >= SCROLL_THRESHOLD) {
        triggered.current = true
        clearTimeout(timer)
        setVisible(true)
      }
    }

    // Trigger 2: 30 seconds on page
    timer = setTimeout(() => {
      if (triggered.current) return
      triggered.current = true
      setVisible(true)
    }, TIME_THRESHOLD)

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
    }
  }, [])

  // Close on Escape
  useEffect(() => {
    if (!visible) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') dismiss() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [visible])

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('sending'); setErrMsg('')
    try {
      const res  = await fetch('/api/newsletter', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email: email.trim() }),
      })
      const data = await res.json() as { ok: boolean; error?: string }
      if (data.ok) {
        setStatus('done')
        setTimeout(dismiss, 2800)
      } else {
        setStatus('error'); setErrMsg(data.error ?? 'Something went wrong.')
      }
    } catch {
      setStatus('error'); setErrMsg('Network error. Please try again.')
    }
  }

  if (!visible) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[1000]"
        style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Exclusive offer"
        className="fixed z-[1001] left-1/2 top-1/2"
        style={{ transform: 'translate(-50%, -50%)', width: 'min(560px, 92vw)' }}
      >
        <div style={{ background: 'var(--ink)', border: '0.5px solid rgba(255,255,255,0.1)' }}>

          {/* Top accent bar */}
          <div style={{ height: '3px', background: 'var(--sand)' }} aria-hidden="true" />

          <div className="p-10 md:p-14 relative">
            {/* Close */}
            <button
              onClick={dismiss}
              aria-label="Close offer"
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center border rounded-full transition-colors hover:border-white/30"
              style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>

            {status === 'done' ? (
              <div className="text-center py-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: 'var(--sand)' }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2
                  className="font-[300] mb-3"
                  style={{ fontFamily: 'var(--serif)', fontSize: '28px', color: 'var(--cream)' }}
                >
                  You're all set.
                </h2>
                <p className="text-[14px]" style={{ color: 'rgba(251,251,249,0.6)' }}>
                  Your 10% discount code is on its way to your inbox.
                </p>
              </div>
            ) : (
              <>
                {/* Eyebrow */}
                <p
                  className="text-[10px] tracking-[0.28em] uppercase mb-5"
                  style={{ color: 'var(--sand)' }}
                >
                  Exclusive Offer
                </p>

                {/* Headline */}
                <h2
                  className="font-[300] leading-[1.06] tracking-[-0.01em] mb-3"
                  style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--cream)' }}
                >
                  Before You Go —<br />
                  <em className="italic" style={{ color: 'var(--sand-light)' }}>10% Off Your First Order</em>
                </h2>

                <p className="text-[14px] leading-[1.8] mb-8" style={{ color: 'rgba(251,251,249,0.6)' }}>
                  Join our list and unlock an exclusive 10% discount on your first custom window treatment
                  installation. No pressure, no spam — just beautiful rooms at a better price.
                </p>

                <form onSubmit={submit}>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      required
                      aria-label="Email address for 10% discount offer"
                      placeholder="your@email.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3 text-[13px] font-[300] outline-none border"
                      style={{
                        background: 'rgba(255,255,255,0.07)',
                        borderColor: 'rgba(255,255,255,0.15)',
                        color: 'var(--cream)',
                      }}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--sand)')}
                      onBlur={e  => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
                    />
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="px-6 py-3 text-[11px] tracking-[0.18em] uppercase whitespace-nowrap transition-opacity hover:opacity-90 disabled:opacity-50"
                      style={{ background: 'var(--sand)', color: '#fff' }}
                    >
                      {status === 'sending' ? '…' : 'Claim 10% Off'}
                    </button>
                  </div>
                  {status === 'error' && (
                    <p className="text-[12px] mt-2" style={{ color: '#fca5a5' }}>{errMsg}</p>
                  )}
                </form>

                <div className="flex items-center justify-between mt-6">
                  <p className="text-[11px]" style={{ color: 'rgba(251,251,249,0.3)' }}>
                    Unsubscribe any time. License #1127055.
                  </p>
                  <Link
                    to="/booking"
                    onClick={dismiss}
                    className="text-[11px] tracking-[0.12em] uppercase underline transition-colors hover:text-[var(--sand)]"
                    style={{ color: 'rgba(251,251,249,0.4)' }}
                  >
                    Book instead →
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
