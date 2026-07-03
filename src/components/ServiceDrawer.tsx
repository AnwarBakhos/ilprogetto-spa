import { useState, useRef, useEffect } from 'react'
import { Link } from '@tanstack/react-router'

// ─── Service areas ────────────────────────────────────────────────────────────
const SERVICE_AREA_LINKS: { name: string; slug: string | null }[] = [
  { name: 'San Diego',       slug: 'san-diego' },
  { name: 'Poway',           slug: 'poway' },
  { name: 'Carlsbad',        slug: 'carlsbad' },
  { name: 'La Jolla',        slug: 'la-jolla' },
  { name: 'Del Mar',         slug: 'del-mar' },
  { name: 'Encinitas',       slug: 'encinitas' },
  { name: 'Solana Beach',    slug: 'solana-beach' },
  { name: 'Rancho Santa Fe', slug: 'rancho-santa-fe' },
  { name: 'Chula Vista',     slug: 'chula-vista' },
  { name: 'National City',   slug: 'national-city' },
  { name: 'Coronado',        slug: 'coronado' },
  { name: 'El Cajon',        slug: 'el-cajon' },
  { name: 'Escondido',       slug: 'escondido' },
  { name: 'San Marcos',      slug: 'san-marcos' },
  { name: 'Vista',           slug: 'vista' },
  { name: 'Temecula',        slug: 'temecula' },
]

type AccordionId = 'areas' | 'discount' | 'contact' | null

// ─── Accordion section ────────────────────────────────────────────────────────
function AccordionSection({
  id, activeId, onToggle, label, children,
}: {
  id: AccordionId
  activeId: AccordionId
  onToggle: (id: AccordionId) => void
  label: string
  children: React.ReactNode
}) {
  const open = activeId === id
  const bodyRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (bodyRef.current) setHeight(bodyRef.current.scrollHeight)
  }, [children])

  return (
    <div className="border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
      <button
        onClick={() => onToggle(open ? null : id)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors hover:bg-white/5"
      >
        <span className="text-[11px] tracking-[0.2em] uppercase font-[400]"
              style={{ color: open ? 'var(--sand-light)' : 'rgba(251,251,249,0.75)' }}>
          {label}
        </span>
        <svg
          width="14" height="14" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="1.5"
          className="flex-shrink-0 transition-transform duration-300"
          style={{ color: 'var(--sand)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        style={{
          maxHeight: open ? `${height}px` : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.38s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div ref={bodyRef} className="px-6 pb-5">
          {children}
        </div>
      </div>
    </div>
  )
}

// ─── Discount form ────────────────────────────────────────────────────────────
function DiscountForm() {
  const [email,  setEmail]  = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [errMsg, setErrMsg] = useState('')

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
      } else {
        setStatus('error')
        setErrMsg(data.error ?? 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setErrMsg('Network error — please call (858) 338-1678.')
    }
  }

  if (status === 'done') return (
    <div className="py-4 text-center">
      <p className="text-[13px] font-[300]" style={{ color: 'var(--sand-light)' }}>
        You're in. We'll be in touch.
      </p>
    </div>
  )

  return (
    <form onSubmit={submit} className="space-y-3 pt-1">
      <p className="text-[22px] font-[300] leading-[1.15] mb-4"
         style={{ fontFamily: 'var(--serif)', color: 'var(--cream)' }}>
        Unlock <em className="italic" style={{ color: 'var(--sand-light)' }}>10% Off</em><br />
        Your First Order
      </p>
      <p className="text-[12px] leading-[1.7] mb-4" style={{ color: 'rgba(251,251,249,0.55)' }}>
        Join our list for exclusive offers, inspiration, and early access to new collections.
      </p>
      <input
        type="email" required aria-label="Email address for 10% discount offer" placeholder="your@email.com" value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full px-4 py-3 text-[13px] font-[300] outline-none border transition-colors"
        style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.15)',
                 color: 'var(--cream)' }}
        onFocus={e => (e.currentTarget.style.borderColor = 'var(--sand)')}
        onBlur={e  => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
      />
      {status === 'error' && (
        <p className="text-[12px] px-3 py-2" style={{ background: '#fef2f2', color: '#991b1b' }}>
          {errMsg}
        </p>
      )}
      <button type="submit" disabled={status === 'sending'}
              className="w-full py-3 text-[11px] tracking-[0.2em] uppercase transition-opacity hover:opacity-90 disabled:opacity-50"
              style={{ background: 'var(--sand)', color: '#fff' }}>
        {status === 'sending' ? 'Sending…' : 'Claim My 10% Off'}
      </button>
    </form>
  )
}

// ─── ServiceDrawer ─────────────────────────────────────────────────────────────
// Desktop: vertical tab pinned to right edge → slides panel in from right
// Mobile:  fixed bottom bar → slides sheet up from bottom
export function ServiceDrawer() {
  const [open, setOpen]         = useState(false)
  const [accordion, setAccordion] = useState<AccordionId>('areas')
  const drawerRef    = useRef<HTMLDivElement>(null)   // desktop wrapper (tab + panel)
  const mobileRef    = useRef<HTMLDivElement>(null)   // mobile wrapper (bar + sheet)

  // Close on outside click — checks both desktop and mobile containers
  useEffect(() => {
    if (!open) return
    function handler(e: MouseEvent) {
      const target = e.target as Node
      const insideDesktop = drawerRef.current?.contains(target)
      const insideMobile  = mobileRef.current?.contains(target)
      if (!insideDesktop && !insideMobile) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  // Close on Escape
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const drawerContent = (
    <div className="flex flex-col h-full" style={{ background: 'rgba(18,18,16,0.98)' }}>
      {/* Drawer header */}
      <div className="flex items-center justify-between px-6 py-5 border-b flex-shrink-0"
           style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div>
          <p className="text-[10px] tracking-[0.22em] uppercase mb-0.5"
             style={{ color: 'var(--sand)' }}>iL Progetto LLC</p>
          <p className="text-[16px] font-[300]" style={{ fontFamily: 'var(--serif)', color: 'var(--cream)' }}>
            Service Info & Offers
          </p>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="w-8 h-8 flex items-center justify-center border rounded-full transition-colors hover:border-white/30"
          style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(251,251,249,0.6)' }}
          aria-label="Close drawer"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>
      </div>

      {/* Accordion body — scrollable */}
      <div className="flex-1 overflow-y-auto">

        {/* 1 — Service areas */}
        <AccordionSection id="areas" activeId={accordion} onToggle={setAccordion}
                          label="Service Area">
          <p className="text-[11px] tracking-[0.12em] uppercase mb-4"
             style={{ color: 'rgba(251,251,249,0.4)' }}>
            Southern California
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {SERVICE_AREA_LINKS.map(({ name, slug }) => (
              <div key={name} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: 'var(--sand)' }} aria-hidden="true" />
                {slug ? (
                  <Link
                    to={`/locations/${slug}` as any}
                    className="text-[12px] transition-colors hover:text-[var(--sand-light)] underline-offset-2 hover:underline"
                    style={{ color: 'rgba(251,251,249,0.65)' }}
                    onClick={() => setOpen(false)}
                  >
                    {name}
                  </Link>
                ) : (
                  <span className="text-[12px]" style={{ color: 'rgba(251,251,249,0.65)' }}>
                    {name}
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="text-[11px] mt-4 leading-[1.7]"
             style={{ color: 'rgba(251,251,249,0.35)' }}>
            Outside these areas? Call us — we accommodate requests on a case-by-case basis.
          </p>
        </AccordionSection>

        {/* 2 — 10% discount */}
        <AccordionSection id="discount" activeId={accordion} onToggle={setAccordion}
                          label="Exclusive Offer — 10% Off">
          <DiscountForm />
        </AccordionSection>

        {/* 3 — Contact */}
        <AccordionSection id="contact" activeId={accordion} onToggle={setAccordion}
                          label="Get in Touch">
          <div className="space-y-4 pt-1">
            <a href="tel:+18583381678"
               className="flex items-center gap-3 group"
               aria-label="Call iL Progetto">
              <div className="w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors group-hover:border-[var(--sand)]"
                   style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(251,251,249,0.5)' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.16em] uppercase mb-0.5"
                   style={{ color: 'rgba(251,251,249,0.35)' }}>Phone</p>
                <p className="text-[15px] font-[400] group-hover:text-[var(--sand-light)] transition-colors"
                   style={{ fontFamily: 'var(--sans)', color: 'var(--cream)' }}>
                  (858) 338-1678
                </p>
              </div>
            </a>

            <a href="mailto:info@progettoshades.com"
               className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors group-hover:border-[var(--sand)]"
                   style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(251,251,249,0.5)' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.16em] uppercase mb-0.5"
                   style={{ color: 'rgba(251,251,249,0.35)' }}>Email</p>
                <p className="text-[13px] group-hover:text-[var(--sand-light)] transition-colors"
                   style={{ color: 'rgba(251,251,249,0.75)' }}>
                  info@progettoshades.com
                </p>
              </div>
            </a>

            <Link to="/booking"
                  className="flex w-full items-center justify-center gap-2 py-3 mt-2 text-[11px] tracking-[0.18em] uppercase transition-colors hover:opacity-90"
                  style={{ background: 'var(--sand)', color: '#fff' }}
                  onClick={() => setOpen(false)}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book Free Consultation
            </Link>
          </div>
        </AccordionSection>
      </div>

      {/* Footer note */}
      <div className="px-6 py-4 flex-shrink-0 border-t"
           style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <p className="text-[10px] tracking-[0.12em] uppercase"
           style={{ color: 'rgba(251,251,249,0.25)' }}>
          License # 1127055 · San Diego, CA
        </p>
      </div>
    </div>
  )

  return (
    <>
      {/* ── Backdrop ─────────────────────────────────────────────────── */}
      {open && (
        <div
          className="fixed inset-0 z-[899] pointer-events-auto"
          style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(3px)' }}
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ═══════════════════════════════════════════════════════════
          DESKTOP — vertical tab + slide-in panel, single ref wrapper
      ═══════════════════════════════════════════════════════════ */}
      <div ref={drawerRef} className="hidden lg:block" style={{ position: "relative", zIndex: 900 }}>
        {/* Vertical tab */}
        <button
          onClick={() => setOpen(v => !v)}
          aria-label="Open service info drawer"
          aria-expanded={open}
          className="fixed flex items-center justify-center gap-2"
          style={{ zIndex: 901,
            right: open ? '360px' : '0px',
            top: '50%',
            transform: 'translateY(-50%)',
            transition: 'right 0.38s cubic-bezier(0.4,0,0.2,1)',
            background: 'rgba(18,18,16,0.95)',
            border: '0.5px solid rgba(255,255,255,0.12)',
            borderRight: 'none',
            padding: '18px 10px',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            cursor: 'pointer',
          }}
        >
          <span className="text-[10px] tracking-[0.22em] uppercase"
                style={{ color: 'var(--sand-light)', transform: 'rotate(180deg)', display: 'block' }}>
            Service Info & Offers
          </span>
          <span className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: 'var(--sand)', marginTop: '8px' }} aria-hidden="true" />
        </button>

        {/* Slide-in panel */}
        <div
          className="fixed top-0 bottom-0"
          style={{ zIndex: 900,
            right: 0,
            width: '360px',
            transform: open ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.38s cubic-bezier(0.4,0,0.2,1)',
            boxShadow: '-8px 0 40px rgba(0,0,0,0.4)',
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Service info and offers"
        >
          {drawerContent}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          MOBILE — bottom bar + bottom sheet, single ref wrapper
      ═══════════════════════════════════════════════════════════ */}
      <div ref={mobileRef} className="lg:hidden">
        {/* Bottom bar trigger */}
        <button
          onClick={() => setOpen(v => !v)}
          aria-label="Open service info"
          aria-expanded={open}
          className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-6 py-4"
          style={{ zIndex: 901, background: 'rgba(18,18,16,0.97)', borderTop: '0.5px solid rgba(255,255,255,0.1)', minHeight: '52px', paddingBottom: 'max(16px, env(safe-area-inset-bottom))' }}
        >
          <span className="text-[10px] tracking-[0.2em] uppercase"
                style={{ color: 'var(--sand-light)' }}>
            Service Info & Offers
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24"
               fill="none" stroke="var(--sand)" strokeWidth="1.5"
               className="transition-transform duration-300"
               style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
               aria-hidden="true">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {/* Bottom sheet */}
        <div
          className="fixed left-0 right-0"
          style={{ zIndex: 900, bottom: 'calc(52px + env(safe-area-inset-bottom))', height: 'clamp(320px, 72dvh, 760px)', transform: open ? 'translateY(0)' : 'translateY(100%)', transition: 'transform 0.38s cubic-bezier(0.4,0,0.2,1)', boxShadow: '0 -8px 40px rgba(0,0,0,0.4)', borderRadius: '16px 16px 0 0', overflow: 'hidden' }}
          role="dialog"
          aria-modal="true"
          aria-label="Service info and offers"
        >
          <div style={{ background: 'rgba(18,18,16,0.98)', padding: '10px 0 0' }}>
            <div className="w-10 h-1 rounded-full mx-auto" style={{ background: 'rgba(255,255,255,0.2)' }} aria-hidden="true" />
          </div>
          <div style={{ height: 'calc(100% - 20px)', overflow: 'hidden' }}>
            {drawerContent}
          </div>
        </div>
      </div>
    </>
  )
}
