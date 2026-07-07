import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { z } from 'zod'
import { setupScrollReveal } from '@/lib/utils'
import { PRODUCTS, getProduct } from '@/data/catalog'
import { getAvailableDates } from '@/data/availability'
import type { CatalogProduct } from '@/types/catalog'
import type { BookingApiResponse } from '@/types/booking'
import { trackLeadFormSubmit } from '@/lib/analytics'
import { SITE_URL } from '@/lib/config'


// ─── Drape header styles ───────────────────────────────────────────────────────
const DRAPE_STYLES = [
  { name: 'Ripple Fold',          image: '/images/drape-styles/01-ripple-fold.jpg',             description: 'Evenly spaced fabric waves glide along a wave track, creating a continuous architectural ripple. The most contemporary of all header styles.' },
  { name: 'Tab Top',              image: '/images/drape-styles/03-goblet-pleat.jpg',             description: 'Fabric loops sewn directly to the panel thread onto the rod. Casual and relaxed, with a handcrafted character that suits informal spaces.' },
  { name: 'Back Tab',              image: '/images/drape-styles/02-triple-pinch-pleat.jpg',           description: 'Hidden loops behind the fabric deliver a clean, streamlined front — the visual simplicity of rod-pocket with structured, even folds.' },
  { name: 'Goblet Pleat',         image: '/images/drape-styles/04-double-pinch-pleat.jpg',       description: 'A cylindrical cup formed at each pleat point and stuffed to hold its shape. Sculptural and dramatic — ideal for dining rooms and grand spaces.' },
  { name: 'Inverted Pleat',       image: '/images/drape-styles/05-euro-double-pinch-pleat.jpg',  description: 'The fold faces backward, leaving a flat tailored front with crisp, architectural lines. A go-to for contemporary and transitional interiors.' },
  { name: 'Euro Double Pinch',    image: '/images/drape-styles/06-tab-top.jpg',                  description: 'A wider-spaced double pinch for a relaxed, open feel. Works beautifully in both modern and transitional interiors.' },
  { name: 'Double Pinch Pleat',   image: '/images/drape-styles/07-back-tab.jpg',                 description: 'Two pleats pinched at each interval — a cleaner silhouette than triple pinch while preserving the refined character of a classic pleated header.' },
  { name: 'Euro Triple Pinch',    image: '/images/drape-styles/08-inverted-pleat.jpg',           description: 'A lighter, more open triple pinch — wider spacing between pleat groups creates an airy European sensibility with relaxed formality.' },
  { name: 'Triple Pinch Pleat',   image: '/images/drape-styles/09-euro-triple-pinch-pleat.jpg',  description: 'Three precisely folded pleats gathered at each hook point produce a full, structured drape. The gold standard of formal, traditional drapery.' },
  { name: 'Eyelet Top',           image: '/images/drape-styles/10-eyelet-top.jpg',               description: 'Large metal rings punched through the header allow the rod to pass directly through, producing bold uniform folds with an industrial-chic appeal.' },
]



// ─── Route ────────────────────────────────────────────────────────────────────
export const Route = createFileRoute('/catalog')({
  validateSearch: z.object({ product: z.string().optional() }),
  head: (ctx) => {
    const p = ctx.match?.search?.product ? getProduct(ctx.match.search.product) : undefined
    return {
      meta: [
        { title: p ? `${p.name} San Diego | iL Progetto LLC` : 'Window Treatment Catalog | Shades, Blinds & Shutters San Diego — iL Progetto LLC' },
        { name: 'description', content: p
            ? `${p.description} Custom-measured and professionally installed by iL Progetto LLC. Free in-home consultation across San Diego, Poway, La Jolla, Carlsbad, Del Mar, and Chula Vista. License #1127055.`
            : "San Diego's complete custom window treatment catalog — roller shades, zebra shades, honeycomb cellular, Roman shades, plantation shutters, motorized blinds, blackout curtains, sheer drapes, and exterior shades. Custom-measured, professionally installed. Free in-home consultation. License #1127055." },
        { name: 'robots',   content: 'index, follow' },
        { name: 'keywords', content: p
            ? `${p.name} San Diego, ${p.seoTags?.join(', ')}, custom window treatments San Diego, iL Progetto LLC`
            : 'window treatments San Diego, custom shades San Diego, blinds San Diego, shutters San Diego, roller shades San Diego, zebra shades San Diego, plantation shutters San Diego, motorized blinds San Diego, free window treatment consultation San Diego' },
        { property: 'og:type',        content: 'website' },
        { property: 'og:site_name',   content: 'iL Progetto LLC' },
        { property: 'og:title',       content: p ? `${p.name} | iL Progetto LLC San Diego` : 'Window Treatment Catalog | iL Progetto LLC San Diego' },
        { property: 'og:description', content: p ? `${p.description} Free in-home consultation.` : 'Custom shades, blinds, shutters, and drapery for San Diego homes. In-home consultations — our designer visits your space with the complete collection.' },
        { property: 'og:image',       content: p?.coverImage ? `${SITE_URL}${p.coverImage}` : `${SITE_URL}/images/og-image.jpg` },
        { property: 'og:url',         content: p ? `${SITE_URL}/catalog?product=${p.id}` : `${SITE_URL}/catalog` },
        { name: 'twitter:card',        content: 'summary_large_image' },
        { name: 'twitter:title',       content: p ? `${p.name} | iL Progetto` : 'Window Treatment Catalog | iL Progetto' },
        { name: 'twitter:description', content: p?.description ?? 'Custom window treatments for San Diego homes. Free in-home consultation.' },
      ],
      links: [
        { rel: 'canonical', href: `${SITE_URL}/catalog` },
      ],
    }
  },
  component: CatalogPage,
})

// ─── Mini booking form ────────────────────────────────────────────────────────
function MiniBookingForm({ product }: { product: CatalogProduct }) {
  const [firstName, setFirstName] = useState('')
  const [email,     setEmail]     = useState('')
  const [phone,     setPhone]     = useState('')
  const [status,    setStatus]    = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errMsg,    setErrMsg]    = useState('')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!firstName.trim() || !email.trim()) return
    setStatus('sending'); setErrMsg('')
    const date = getAvailableDates()[0] ?? new Date().toISOString().split('T')[0]!
    try {
      const res  = await fetch('/api/book', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ booking: { firstName: firstName.trim(), lastName: '', email: email.trim(), phone: phone.trim(), address: '', service: product.id, notes: `Catalog enquiry — ${product.name}`, date, time: '09:00' } }),
      })
      const data = await res.json() as BookingApiResponse
      data.ok ? (setStatus('sent'), trackLeadFormSubmit()) : (setStatus('error'), setErrMsg(data.error ?? 'Something went wrong.'))
    } catch {
      setStatus('error'); setErrMsg('Network error — please call (858) 338-1678.')
    }
  }

  if (status === 'sent') return (
    <div className="flex flex-col items-center justify-center text-center py-8">
      <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: 'var(--sand)' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
      </div>
      <p className="text-[18px] font-[300] mb-1" style={{ fontFamily: 'var(--serif)' }}>Request received.</p>
      <p className="text-[13px]" style={{ color: 'var(--mid)' }}>We'll reach out within 24 hours.</p>
    </div>
  )

  return (
    <form onSubmit={submit} noValidate>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 text-[11px] tracking-[0.12em] uppercase"
           style={{ background: 'var(--sand-pale)', color: 'var(--sand)', border: '0.5px solid var(--sand-light)' }}>
        ★ {product.name}
      </div>
      <h4 className="font-[300] mb-1" style={{ fontFamily: 'var(--serif)', fontSize: '22px' }}>
        Book a Free <em className="italic" style={{ color: 'var(--sand)' }}>Consultation</em>
      </h4>
      <p className="text-[12px] mb-5" style={{ color: 'var(--mid)' }}>We'll call to confirm a time that works for you.</p>

      {([
        { key: 'firstName', label: 'First Name', req: true,  type: 'text',  ph: 'Jane',           val: firstName, set: setFirstName },
        { key: 'email',     label: 'Email',      req: true,  type: 'email', ph: 'jane@email.com', val: email,     set: setEmail     },
        { key: 'phone',     label: 'Phone',      req: false, type: 'tel',   ph: '(619) 555-0100', val: phone,     set: setPhone     },
      ] as const).map(({ key, label, req, type, ph, val, set }) => (
        <div key={key} className="mb-3">
          <label className="block text-[10px] tracking-[0.18em] uppercase mb-1.5" style={{ color: 'var(--mid)' }}>
            {label}{req && <span style={{ color: 'var(--sand)' }}> *</span>}
          </label>
          <input type={type} required={req} placeholder={ph} value={val} onChange={e => set(e.target.value)}
                 className="w-full border px-3.5 py-2.5 text-[13px] font-[300] outline-none"
                 style={{ borderColor: 'var(--hairline)', background: 'var(--cream)', color: 'var(--ink)' }}
                 onFocus={e => (e.currentTarget.style.borderColor = 'var(--sand)')}
                 onBlur={e  => (e.currentTarget.style.borderColor = 'var(--hairline)')} />
        </div>
      ))}

      {status === 'error' && <p className="text-[12px] mb-3 px-3 py-2" style={{ background: '#fef2f2', color: '#991b1b' }}>{errMsg}</p>}

      <button type="submit" disabled={status === 'sending'}
              className="w-full py-3.5 mt-1 text-[11px] tracking-[0.2em] uppercase disabled:opacity-60 hover:opacity-90"
              style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
        {status === 'sending' ? 'Sending…' : 'Book My Free Consultation'}
      </button>
      <p className="text-[11px] text-center mt-3" style={{ color: 'var(--mid)' }}>
        Or call: <a href="tel:+18583381678" style={{ color: 'var(--sand)' }}>(858) 338-1678</a>
      </p>
    </form>
  )
}

// ─── Detail drawer ────────────────────────────────────────────────────────────
function DetailDrawer({ product, onClose }: { product: CatalogProduct; onClose: () => void }) {
  return (
    <div role="region" aria-label={`${product.name} details`}
         style={{ background: 'var(--warm)', borderTop: '2px solid var(--sand)', borderBottom: '0.5px solid var(--hairline)' }}>

      {/* Desktop: 3-col fixed height */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_1.1fr_360px] lg:h-[480px]">
        <div className="overflow-hidden">
          <img src={product.coverImage} alt={`${product.name} — iL Progetto San Diego`}
               className="w-full h-full object-cover" loading="lazy"
               onError={e => { (e.target as HTMLImageElement).style.opacity = '0.2' }} />
        </div>
        <div className="overflow-y-auto p-10 flex flex-col justify-center" style={{ borderLeft: '0.5px solid var(--hairline)' }}>
          <p className="text-[10px] tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--sand)' }}>The Detail</p>
          <h3 className="font-[300] leading-[1.05] mb-4" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px, 2vw, 28px)' }}>
            A Closer Look at <em className="italic" style={{ color: 'var(--sand)' }}>{product.shortName}</em>
          </h3>
          <p className="text-[14px] leading-[1.85] mb-6" style={{ color: 'var(--mid)' }}>{product.detailCopy}</p>
          <ul className="flex flex-col gap-2.5 list-none mb-5">
            {product.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-[13px] leading-[1.6]">
                <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 24 24"
                     fill="none" stroke="var(--sand)" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
          <Link to="/products/$productId" params={{ productId: product.id }}
                className="inline-flex items-center gap-2 mb-5 text-[11px] tracking-[0.16em] uppercase transition-colors hover:text-[var(--ink)]"
                style={{ color: 'var(--sand)' }}>
            Explore {product.shortName} in full
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
          <div className="flex flex-wrap gap-1.5">
            {product.seoTags.map(tag => (
              <span key={tag} className="text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 border"
                    style={{ borderColor: 'var(--hairline)', color: 'var(--mid)', background: 'var(--cream)' }}>{tag}</span>
            ))}
          </div>
          {product.id === 'motorized' && (
            <div className="mt-5">
              <p className="text-[10px] tracking-[0.18em] uppercase mb-2.5" style={{ color: 'var(--mid)' }}>Works With</p>
              <div className="flex flex-wrap gap-2">
                <span style={{ padding: '4px 10px', borderRadius: '999px', fontSize: '11px', border: '1px solid #00CAFF', color: '#00CAFF', background: 'rgba(0,202,255,0.06)' }}>Amazon Alexa</span>
                <span style={{ padding: '4px 10px', borderRadius: '999px', fontSize: '11px', border: '1px solid #4285F4', color: '#4285F4', background: 'rgba(66,133,244,0.06)' }}>Google Home</span>
                <span style={{ padding: '4px 10px', borderRadius: '999px', fontSize: '11px', border: '1px solid #555', color: '#333', background: 'rgba(0,0,0,0.04)' }}>Apple HomeKit</span>
                <span style={{ padding: '4px 10px', borderRadius: '999px', fontSize: '11px', border: '1px solid #C8A96E', color: '#C8A96E', background: 'rgba(200,169,110,0.06)' }}>Control4</span>
              </div>
            </div>
          )}
        </div>
        <div className="overflow-y-auto p-8 flex flex-col justify-center"
             style={{ borderLeft: '0.5px solid var(--hairline)', background: 'var(--cream)' }}>
          <MiniBookingForm product={product} />
        </div>
      </div>

      {/* Mobile: stacked */}
      <div className="lg:hidden">
        <div className="overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <img src={product.coverImage} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="p-6">
          <p className="text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--sand)' }}>The Detail</p>
          <h3 className="font-[300] leading-[1.05] mb-4" style={{ fontFamily: 'var(--serif)', fontSize: '22px' }}>A Closer Look</h3>
          <p className="text-[14px] leading-[1.85] mb-5" style={{ color: 'var(--mid)' }}>{product.detailCopy}</p>
          <ul className="flex flex-col gap-2.5 list-none mb-6">
            {product.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-[13px] leading-[1.6]">
                <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 24 24"
                     fill="none" stroke="var(--sand)" strokeWidth="2" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
          <Link to="/products/$productId" params={{ productId: product.id }}
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase"
                style={{ color: 'var(--sand)' }}>
            Explore {product.shortName} in full
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
        <div className="p-6 border-t" style={{ borderColor: 'var(--hairline)', background: 'var(--cream)' }}>
          <MiniBookingForm product={product} />
        </div>
      </div>

      {/* Close strip */}
      <div className="flex items-center justify-between px-6 lg:px-10 py-3 border-t"
           style={{ borderColor: 'var(--hairline)', background: 'var(--warm)' }}>
        <p className="text-[11px] tracking-[0.1em] uppercase" style={{ color: 'var(--mid)' }}>{product.name}</p>
        <button onClick={onClose}
                className="flex items-center gap-1.5 text-[11px] tracking-[0.14em] uppercase hover:text-[var(--sand)] transition-colors"
                style={{ color: 'var(--mid)' }}>
          Close ✕
        </button>
      </div>
    </div>
  )
}

// ─── Product card ─────────────────────────────────────────────────────────────
function ProductCard({ product, isActive, onClick }: {
  product: CatalogProduct; isActive: boolean; onClick: () => void
}) {
  return (
    <article id={`card-${product.id}`} aria-label={product.name}
             style={{ position: 'relative', zIndex: isActive ? 2 : 1,
                      outline: isActive ? '2px solid var(--sand)' : 'none', outlineOffset: '-2px' }}>
      <div className="relative overflow-hidden cursor-pointer group" style={{ aspectRatio: '4/3' }}
           onClick={onClick} role="button" tabIndex={0}
           aria-expanded={isActive} aria-controls={`detail-${product.id}`}
           onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() } }}>
        <img src={product.coverImage} alt={`${product.name} — iL Progetto LLC San Diego`}
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
             loading="lazy" onError={e => { (e.target as HTMLImageElement).style.opacity = '0.3' }} />
        <div className="absolute inset-0 flex flex-col justify-end p-6"
             style={{ background: 'linear-gradient(to top, rgba(28,28,28,0.82), transparent 55%)' }}>
          <p className="text-[10px] tracking-[0.2em] uppercase mb-1.5" style={{ color: 'var(--sand-light)' }}>{product.eyebrow}</p>
          <h2 className="text-[22px] font-[400] leading-tight" style={{ fontFamily: 'var(--serif)', color: 'var(--cream)' }}>
            {product.name}
          </h2>
        </div>
        {/* Sand bar at bottom — visually connects card to drawer */}
        <div className="absolute bottom-0 left-0 right-0 transition-all duration-300"
             style={{ height: isActive ? '3px' : '0px', background: 'var(--sand)' }} aria-hidden="true" />
      </div>
    </article>
  )
}

// ─── CatalogPage ──────────────────────────────────────────────────────────────
function CatalogPage() {
  const { product: urlProduct } = Route.useSearch()
  const navigate = useNavigate({ from: '/catalog' })
  const pageRef  = useRef<HTMLDivElement>(null)

  const [activeId, setActiveId] = useState<string | undefined>(urlProduct)

  // skipScrollRef: pill/card handlers manage their own scroll; this tells the
  // urlProduct effect not to double-scroll when they update the URL.
  const skipScrollRef = useRef(false)

  // ── Measure total sticky-header height ────────────────────────────────────
  function stickyOffset() {
    const nav    = 76
    const desktopBar = document.getElementById('catalog-filter-bar')
    const mobileBar  = document.getElementById('mobile-filter-bar')
    const barH = (desktopBar?.getBoundingClientRect().height ?? 0)
               + (mobileBar?.getBoundingClientRect().height ?? 0)
    return nav + barH + 8
  }

  // ── Scroll to a product card ───────────────────────────────────────────────
  // scrollIntoView is universally supported (incl. iOS Safari) and avoids the
  // getBoundingClientRect + window.scrollTo pattern that breaks on mobile.
  // scroll-margin-top offsets for our sticky nav + filter bar.
  function scrollToCard(id: string) {
    // Both the desktop grid and mobile stack render a card-${id} element.
    // getElementById returns the first match (desktop, which is display:none on mobile).
    // Find the visible one instead.
    const candidates = document.querySelectorAll(`#card-${id}`)
    const el = Array.from(candidates).find(
      e => (e as HTMLElement).offsetParent !== null
    ) as HTMLElement | undefined
    if (!el) return
    el.style.scrollMarginTop = `${stickyOffset()}px`
    el.scrollIntoView({ block: 'start' })
  }

  // ── Nav/footer/deep-link: fires when ?product= changes in the URL ─────────
  useEffect(() => {
    if (!urlProduct) return
    if (skipScrollRef.current) { skipScrollRef.current = false; return }
    setActiveId(urlProduct)
    // setTimeout lets the browser finish any post-navigation work before scroll
    setTimeout(() => scrollToCard(urlProduct), 100)
  }, [urlProduct])

  // ── Pill click ────────────────────────────────────────────────────────────
  // Await navigate so the router finishes before we measure card position.
  async function handlePillClick(id: string) {
    skipScrollRef.current = true
    setActiveId(id)
    await navigate({ search: { product: id }, replace: true, resetScroll: false })
    setTimeout(() => scrollToCard(id), 100)
  }

  // ── Card click: toggle drawer, no scroll ──────────────────────────────────
  function handleCardClick(id: string) {
    skipScrollRef.current = true
    setActiveId(prev => {
      const next = prev === id ? undefined : id
      void navigate({ search: next ? { product: next } : {}, replace: true, resetScroll: false })
      return next
    })
  }

  useEffect(() => {
    if (!pageRef.current) return
    return setupScrollReveal(pageRef.current)
  }, [])

  // Group into rows of 3 for the desktop drawer-after-row pattern
  const rows: CatalogProduct[][] = []
  for (let i = 0; i < PRODUCTS.length; i += 3) rows.push(PRODUCTS.slice(i, i + 3))
  const activeProduct  = activeId ? getProduct(activeId) : undefined
  const activeRowIndex = activeId ? rows.findIndex(r => r.some(p => p.id === activeId)) : -1

  return (
    <div ref={pageRef}>

      {/* schema.org ItemList — Google rich results */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'ItemList',
        name: 'iL Progetto LLC — Custom Window Treatment Catalog',
        description: "San Diego's complete custom window treatment catalog.",
        url: `${SITE_URL}/catalog`,
        numberOfItems: PRODUCTS.length,
        itemListElement: PRODUCTS.map((p, i) => ({
          '@type': 'ListItem', position: i + 1, name: p.name,
          description: p.description,
          url: `${SITE_URL}/catalog?product=${p.id}`,
          image: p.coverImage,
        })),
      }) }} />

      {/* ── Page hero ──────────────────────────────────────────────────── */}
      <header className="text-center px-10 py-20 md:py-28 fade-up" style={{ background: 'var(--warm)' }}>
        <p className="inline-flex items-center justify-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-5"
           style={{ color: 'var(--sand)' }}>
          <span className="inline-block w-8 h-px bg-[var(--sand)]" aria-hidden="true" />
          Custom Window Treatments
          <span className="inline-block w-8 h-px bg-[var(--sand)]" aria-hidden="true" />
        </p>
        <h1 className="font-[300] leading-[1.04] tracking-[-0.015em] mb-6"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(38px, 5vw, 66px)' }}>
          Shades, Blinds &{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>Shutters</em>
          <br />for San Diego Homes
        </h1>
        <p className="text-[16px] leading-[1.85] max-w-[560px] mx-auto mb-3" style={{ color: 'var(--mid)' }}>
          Every product is custom-measured and professionally installed.
          Click any image to explore details and book a consultation.
        </p>
        <p className="text-[13px]" style={{ color: 'var(--sand)' }}>
          Serving San Diego · Poway · Carlsbad · La Jolla · Del Mar · Chula Vista and surrounding areas
        </p>
      </header>

      {/* ── Sticky filter bar — desktop only ───────────────────────────── */}
      <nav id="catalog-filter-bar" aria-label="Jump to product" className="hidden lg:flex flex-wrap gap-2 px-4 md:px-10 lg:px-20 py-3 z-40"
           style={{ position: 'sticky', top: '76px', background: 'rgba(245,243,239,0.97)',
                    backdropFilter: 'blur(8px)', borderBottom: '0.5px solid var(--hairline)' }}>
        <button
          onClick={() => { setActiveId(undefined); void navigate({ search: {}, replace: true }); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="px-3.5 py-1.5 text-[10px] tracking-[0.14em] uppercase border transition-colors"
          style={{ background: !activeId ? 'var(--ink)' : 'transparent', color: !activeId ? 'var(--cream)' : 'var(--mid)', borderColor: !activeId ? 'var(--ink)' : 'var(--hairline)' }}>
          All
        </button>
        {PRODUCTS.map(p => (
          <button key={p.id} onClick={() => handlePillClick(p.id)}
                  className="px-3.5 py-1.5 text-[10px] tracking-[0.14em] uppercase border transition-colors"
                  style={{ background: activeId === p.id ? 'var(--sand)' : 'transparent',
                           color: activeId === p.id ? '#fff' : 'var(--mid)',
                           borderColor: activeId === p.id ? 'var(--sand)' : 'var(--hairline)' }}>
            {p.shortName}
          </button>
        ))}
      </nav>

      {/* ── Mobile filter strip — sticky horizontal scroll ──────────────── */}
      <div id="mobile-filter-bar" className="lg:hidden flex gap-2 px-6 py-3 overflow-x-auto z-40"
           style={{ position: 'sticky', top: '76px', background: 'rgba(245,243,239,0.97)', borderBottom: '0.5px solid var(--hairline)', scrollbarWidth: 'none' }}>
        <button
          onClick={() => { setActiveId(undefined); void navigate({ search: {}, replace: true }); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="flex-shrink-0 px-3 py-1.5 text-[10px] tracking-[0.14em] uppercase border transition-colors"
          style={{ background: !activeId ? 'var(--ink)' : 'transparent', color: !activeId ? 'var(--cream)' : 'var(--mid)', borderColor: !activeId ? 'var(--ink)' : 'var(--hairline)' }}>
          All
        </button>
        {PRODUCTS.map(p => (
          <button key={p.id} onClick={() => handlePillClick(p.id)}
                  className="flex-shrink-0 px-3 py-1.5 text-[10px] tracking-[0.14em] uppercase border transition-colors"
                  style={{ background: activeId === p.id ? 'var(--sand)' : 'transparent',
                           color: activeId === p.id ? '#fff' : 'var(--mid)',
                           borderColor: activeId === p.id ? 'var(--sand)' : 'var(--hairline)' }}>
            {p.shortName}
          </button>
        ))}
      </div>

      {/* ── Product grid ───────────────────────────────────────────────── */}
      <section aria-label="Product catalog" className="px-4 md:px-10 lg:px-20 py-8">

        {/* Desktop: rows of 3, drawer injects after the active row */}
        <div className="hidden lg:block">
          {rows.map((row, rowIdx) => (
            <div key={rowIdx}>
              <div className="grid grid-cols-3 gap-0.5 mb-0.5">
                {row.map(product => (
                  <ProductCard key={product.id} product={product}
                               isActive={activeId === product.id}
                               onClick={() => handleCardClick(product.id)} />
                ))}
                {row.length < 3 && Array.from({ length: 3 - row.length }).map((_, i) => (
                  <div key={i} style={{ background: 'var(--warm)' }} />
                ))}
              </div>
              {activeProduct && activeRowIndex === rowIdx && (
                <div id={`detail-${activeProduct.id}`}
                     style={{ animation: 'drawerIn 0.28s cubic-bezier(0.4,0,0.2,1) both', marginBottom: '2px' }}>
                  <DetailDrawer product={activeProduct} onClose={() => handleCardClick(activeProduct.id)} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: flat stack, drawer below each card */}
        <div className="lg:hidden flex flex-col gap-0.5">
          {PRODUCTS.map(product => (
            <div key={product.id}>
              <ProductCard product={product} isActive={activeId === product.id}
                           onClick={() => handleCardClick(product.id)} />
              {activeId === product.id && activeProduct && (
                <div id={`detail-${product.id}`}>
                  <DetailDrawer product={activeProduct} onClose={() => handleCardClick(product.id)} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>


      {/* ── Drapery Header Styles ────────────────────────────────────────── */}
      <section id="drape-styles" aria-labelledby="drape-heading"
               className="px-4 md:px-10 lg:px-20 pt-20 pb-24 border-t border-[var(--hairline)]"
               style={{ background: 'var(--ink)' }}>

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-4"
               style={{ color: 'var(--sand-light)' }}>
              <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
              Curtains & Drapery
            </p>
            <h2 id="drape-heading" className="font-[300] leading-[1.06] tracking-[-0.015em]"
                style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3.2vw, 44px)', color: 'var(--cream)' }}>
              Drape Header{' '}
              <em className="italic" style={{ color: 'var(--sand-light)' }}>Styles</em>
            </h2>
            <p className="text-[14px] leading-[1.85] mt-4 max-w-[480px]" style={{ color: 'rgba(251,251,249,0.6)' }}>
              The header style defines the entire character of a drape — how it folds, how it hangs,
              and how it feels in a room. Every style is available custom-made for your windows.
            </p>
          </div>
          <Link to="/booking"
                className="flex-shrink-0 inline-flex items-center gap-2.5 px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase self-start md:self-auto"
                style={{ background: 'var(--sand)', color: '#fff' }}>
            Discuss Your Style
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        {/* Style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px" style={{ background: 'rgba(255,255,255,0.08)' }}>
          {DRAPE_STYLES.map((style) => (
            <div key={style.name}
                 className="flex flex-col group"
                 style={{ background: 'var(--ink)' }}>
              {/* Image — full illustration visible */}
              <div className="flex items-center justify-center p-4"
                   style={{ background: 'rgba(251,251,249,0.04)', minHeight: '200px' }}>
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-90"
                  style={{ maxHeight: '220px' }}
                  loading="lazy"
                />
              </div>
              {/* Text */}
              <div className="p-5 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <h3 className="font-[400] leading-[1.2] mb-2"
                    style={{ fontFamily: 'var(--serif)', fontSize: '15px', color: 'var(--cream)' }}>
                  {style.name}
                </h3>
                <p className="text-[12px] leading-[1.7]" style={{ color: 'rgba(251,251,249,0.5)' }}>
                  {style.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ─────────────────────────────────────────────────── */}
      <section className="text-center px-10 py-24 border-t border-[var(--hairline)]" style={{ background: 'var(--warm)' }}>
        <p className="inline-flex items-center r gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-5"
           style={{ color: 'var(--sand)' }}>
          <span className="inline-block w-8 h-px bg-[var(--sand)]" aria-hidden="true" />
          Not sure where to start?
        </p>
        <h2 className="font-[300] leading-[1.04] tracking-[-0.015em] mb-4"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 3.8vw, 50px)' }}>
          Our Designers <em className="italic" style={{ color: 'var(--sand)' }}>Come to You</em>
        </h2>
        <p className="text-[15px] leading-[1.8] mb-8 max-w-[440px] mx-auto" style={{ color: 'var(--mid)' }}>
          Free in-home consultation — we bring samples, measure your windows, and quote on the spot. No obligation.
        </p>
        <Link to="/booking" className="inline-block px-10 py-4 text-[11px] tracking-[0.2em] uppercase btn-interactive"
              style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
          Book Free In-Home Consultation
        </Link>
      </section>

      <style>{`
        @keyframes drawerIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
