import { useState, useEffect, useRef } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { MEGA_MENU } from '@/data/catalog'

const LOGO_URL =
  '/images/logo-300.png'

// ─── The nav is always dark (rgba(0,0,0,0.85) + blur) on every page ───────────
// On the homepage it sits over the dark hero — consistent brand feel throughout.

export function Nav() {
  const [menuOpen, setMenuOpen]       = useState(false)
  const [megaOpen, setMegaOpen]       = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const megaRef = useRef<HTMLLIElement>(null)
  const routerState = useRouterState()
  const pathname = routerState.location.pathname

  // Close everything on route change
  useEffect(() => {
    setMenuOpen(false)
    setMegaOpen(false)
    setMobileExpanded(null)
  }, [pathname])

  // Close mega menu on outside click
  useEffect(() => {
    if (!megaOpen) return
    const handler = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [megaOpen])

  const linkCls = 'text-[11px] tracking-[0.18em] uppercase font-[500] transition-colors duration-150 text-white/80 hover:text-white'

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-[1100]"
      style={{
        height: '76px',
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '0.5px solid rgba(255,255,255,0.1)',
      }}
    >
      <div className="flex items-center justify-between h-full px-8 xl:px-12 max-w-[1600px] mx-auto">

        {/* ── Logo ── */}
        <Link to="/" aria-label="iL Progetto home" className="flex items-center gap-3 flex-shrink-0">
          <img
            src={LOGO_URL}
            alt="iL Progetto LLC"
            className="xl:hidden"
            style={{ maxHeight: '44px', width: 'auto' }}
          />
          <img
            src={LOGO_URL}
            alt="iL Progetto LLC"
            className="hidden xl:block"
            style={{ maxHeight: '72px', width: 'auto' }}
          />
          <div className="hidden xl:block">
            <p className="text-[17px] leading-tight tracking-[0.04em] text-white font-[400]"
               style={{ fontFamily: 'var(--serif)' }}>
              iL Progetto LLC
            </p>
            <p className="text-[10px] tracking-[0.2em] uppercase mt-0.5 text-white/50">
              Window Treatments
            </p>
          </div>
        </Link>

        {/* ── Desktop links ── */}
        <ul className="hidden xl:flex items-center gap-7 list-none" role="list">

          <li>
            <Link to="/" className={linkCls}
              activeProps={{ className: 'text-white border-b border-white pb-0.5 text-[11px] tracking-[0.18em] uppercase font-[500]' }}
              inactiveProps={{ className: linkCls }}>
              Home
            </Link>
          </li>

          {/* ── Mega Menu trigger ── */}
          <li ref={megaRef} className="relative">
            <button
              className={`${linkCls} flex items-center gap-1.5`}
              onClick={() => setMegaOpen(v => !v)}
              aria-expanded={megaOpen}
              aria-haspopup="true"
            >
              Selections
              <svg
                width="9" height="9" viewBox="0 0 9 9" aria-hidden="true"
                className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
              >
                <path d="M1 3l3.5 3.5L8 3" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
              </svg>
            </button>

            {/* ── Mega menu panel ── */}
            {megaOpen && (
              <div
                className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 z-[1100] shadow-2xl"
                style={{
                  width: 'min(920px, 90vw)',
                  background: 'rgba(10,10,10,0.97)',
                  backdropFilter: 'blur(20px)',
                  border: '0.5px solid rgba(255,255,255,0.12)',
                  borderTop: '2px solid var(--sand)',
                }}
                role="menu"
              >
                {/* ── View All bar ── */}
                <div className="flex items-center justify-between px-8 py-4 border-b border-white/10">
                  <p className="text-[10px] tracking-[0.22em] uppercase text-white/40">Browse by Category</p>
                  <Link
                    to="/catalog"
                    className="text-[10px] tracking-[0.18em] uppercase text-[var(--sand)] hover:text-white transition-colors flex items-center gap-1.5"
                    onClick={() => setMegaOpen(false)}
                  >
                    View All Products
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </Link>
                </div>

                {/* ── 5-column grid ── */}
                <div className="grid grid-cols-5 divide-x divide-white/10 px-2 py-6">
                  {MEGA_MENU.map((col) => (
                    <div key={col.category} className="px-6">
                      <p className="text-[10px] tracking-[0.22em] uppercase mb-4"
                         style={{ color: 'var(--sand)' }}>
                        {col.label}
                      </p>
                      <ul className="space-y-1 list-none">
                        {col.products.map((item) => (
                          <li key={item.id}>
                            <Link
                              to="/catalog"
                              search={{ product: item.id }}
                              role="menuitem"
                              className="block py-1.5 text-[13px] text-white/65 hover:text-white transition-colors hover:translate-x-0.5 transform duration-100"
                              onClick={() => setMegaOpen(false)}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* ── Bottom CTA bar ── */}
                <div
                  className="flex items-center justify-between px-8 py-4 border-t border-white/10"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <p className="text-[13px] text-white/50">
                    Free in-home consultation — we bring samples to your door.
                  </p>
                  <Link
                    to="/booking"
                    className="px-5 py-2.5 text-[11px] tracking-[0.18em] uppercase transition-all hover:opacity-90 active:scale-95"
                    style={{ background: 'var(--sand)', color: '#fff' }}
                    onClick={() => setMegaOpen(false)}
                  >
                    Book Free Consultation
                  </Link>
                </div>
              </div>
            )}
          </li>

          <li>
            <Link to="/about" className={linkCls}
              activeProps={{ className: 'text-white border-b border-white pb-0.5 text-[11px] tracking-[0.18em] uppercase font-[500]' }}
              inactiveProps={{ className: linkCls }}>
              About
            </Link>
          </li>

          <li>
            <Link to="/faq" className={linkCls}
              activeProps={{ className: 'text-white border-b border-white pb-0.5 text-[11px] tracking-[0.18em] uppercase font-[500]' }}
              inactiveProps={{ className: linkCls }}>
              FAQ
            </Link>
          </li>

          <li>
            <Link to={"/blog/" as any} className={linkCls}
              activeProps={{ className: 'text-white border-b border-white pb-0.5 text-[11px] tracking-[0.18em] uppercase font-[500]' }}
              inactiveProps={{ className: linkCls }}>
              Journal
            </Link>
          </li>

          <li>
            <Link to={'/inspiration' as any} className={linkCls}
              activeProps={{ className: 'text-white border-b border-white pb-0.5 text-[11px] tracking-[0.18em] uppercase font-[500]' }}
              inactiveProps={{ className: linkCls }}>
              Inspiration
            </Link>
          </li>

          <li>
            <Link to={'/smart-home' as any} className={linkCls}
              activeProps={{ className: 'text-white border-b border-white pb-0.5 text-[11px] tracking-[0.18em] uppercase font-[500]' }}
              inactiveProps={{ className: linkCls }}>
              Smart Home
            </Link>
          </li>

          {/* Phone — larger, serif */}
          <li>
            <a
              href="tel:+18583381678"
              className="text-[15px] font-[400] text-white hover:text-[var(--sand-light)] transition-colors tracking-[0.04em]"
              style={{ fontFamily: 'var(--sans)' }}
              aria-label="Call iL Progetto"
            >
              (858) 338-1678
            </a>
          </li>

          {/* Book CTA */}
          <li>
            <Link
              to="/reviews"
              className="text-[10px] tracking-[0.16em] uppercase px-4 py-2 rounded-full border transition-all duration-200 hover:scale-[1.03]"
              style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.7)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--sand)'
                e.currentTarget.style.color = 'var(--sand)'
                e.currentTarget.style.background = 'rgba(197,168,114,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              ★ Leave a Review
            </Link>
          </li>

          {/* CTA */}
          <li>
            <Link
              to="/booking"
              className="px-5 py-2.5 text-[11px] tracking-[0.18em] uppercase transition-all duration-200 hover:scale-[1.03] hover:brightness-110 active:scale-95 inline-block"
              style={{ background: 'var(--sand)', color: '#fff' }}
            >
              Free Consultation
            </Link>
          </li>
        </ul>

        {/* ── Hamburger ── */}
        <button
          className="xl:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} className="block h-px bg-white transition-all duration-300"
              style={{
                width: '22px',
                transform: menuOpen
                  ? i === 0 ? 'translateY(6px) rotate(45deg)'
                    : i === 1 ? 'scaleX(0)'
                    : 'translateY(-6px) rotate(-45deg)'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div
          className="xl:hidden border-t flex flex-col overflow-y-auto"
          style={{
            position: 'fixed',
            top: '76px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(10,10,10,0.98)',
            borderColor: 'rgba(255,255,255,0.1)',
            zIndex: 1099,
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {/* Static links */}
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/faq', label: 'FAQ' },
            { to: '/blog/', label: 'Journal' },
            { to: '/contact', label: 'Contact' },
            { to: '/reviews', label: '★ Leave a Review' },
          ].map(({ to, label }) => (
            <Link key={to} to={to}
              className="px-6 py-4 text-[13px] tracking-[0.14em] uppercase text-white/70 hover:text-white border-b border-white/5 transition-colors"
              onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}

          {/* Mobile mega menu — collapsible categories */}
          {MEGA_MENU.map((col) => (
            <div key={col.category} className="border-b border-white/5">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-[13px] tracking-[0.14em] uppercase text-white/70"
                onClick={() => setMobileExpanded(v => v === col.category ? null : col.category)}
              >
                {col.label}
                <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"
                  className={`transition-transform duration-200 ${mobileExpanded === col.category ? 'rotate-180' : ''}`}>
                  <path d="M1 3.5l4 4 4-4" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                </svg>
              </button>
              {mobileExpanded === col.category && (
                <div className="px-8 pb-4 flex flex-col gap-2">
                  {col.products.map(item => (
                    <Link key={item.id} to="/catalog" search={{ product: item.id }}
                      className="py-1.5 text-[13px] text-white/55 hover:text-white transition-colors"
                      onClick={() => setMenuOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="p-6 flex flex-col gap-3 mt-2">
            <a href="tel:+18583381678"
               className="text-[20px] font-[400] text-white tracking-[0.02em]"
               style={{ fontFamily: 'var(--sans)' }}>
              (858) 338-1678
            </a>
            <Link
              to="/booking"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-[11px] tracking-[0.18em] uppercase"
              style={{ background: 'var(--sand)', color: '#fff' }}
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
