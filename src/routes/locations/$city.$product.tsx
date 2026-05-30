import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { useRef, useState } from 'react'
import {
  CITY_SLUGS, PRODUCT_SLUGS, cityName, PRODUCT_VIDEO,
  PRODUCT_CATALOG_ID, PRODUCT_DESCRIPTIONS,
} from '@/data/seo'

// ─── Route ─────────────────────────────────────────────────────────────────────
export const Route = createFileRoute('/locations/$city/$product')({
  loader: ({ params }) => {
    const { city, product } = params as { city: string; product: string }
    if (!CITY_SLUGS.includes(city as typeof CITY_SLUGS[number])) throw notFound()
    if (!PRODUCT_SLUGS[product]) throw notFound()
    return { city, product }
  },
  head: ({ loaderData }: any) => {
    if (!loaderData) return {}
    const { city, product } = loaderData
    const pName = PRODUCT_SLUGS[product] ?? product
    const cName = cityName(city)
    return {
      meta: [
        { title: `Custom ${pName} in ${cName}, CA | iL Progetto LLC` },
        { name: 'description', content: `Premium custom ${pName} for homes in ${cName}, CA. Professional measurement, custom fabrication, and licensed installation by iL Progetto LLC. Free in-home consultation — we come to you.` },
        { name: 'keywords', content: `${pName} ${cName}, custom ${pName} ${cName} CA, window treatments ${cName}, ${pName} installation ${cName}, iL Progetto ${cName}` },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: `Custom ${pName} in ${cName}, CA | iL Progetto LLC` },
        { property: 'og:description', content: `Premium custom ${pName} for ${cName} homes. Free in-home consultation.` },
        { property: 'og:image', content: 'https://drive.google.com/thumbnail?id=1uaY6LDCh59x8TymxSD3VmynmW35bK1ou&sz=w1200' },
        { property: 'og:url', content: `https://ilprogetto-spa.vercel.app/locations/${city}/${product}` },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: `Custom ${pName} in ${cName}, CA | iL Progetto LLC` },
        { name: 'twitter:description', content: `Premium custom ${pName} for homes in ${cName}, CA. Free in-home consultation.` },
        { name: 'robots', content: 'index, follow' },
      ],
      links: [
        { rel: 'canonical', href: `https://ilprogetto-spa.vercel.app/locations/${city}/${product}` },
      ],
    }
  },
  component: CityProductPage,
})

// ─── LocalBusiness JSON-LD for each city page ─────────────────────────────────
function LocalBusinessSchema({ city, product }: { city: string; product: string }) {
  const pName = PRODUCT_SLUGS[product] ?? product
  const cName = cityName(city)
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'iL Progetto LLC',
    description: `Custom ${pName} installation in ${cName}, CA. Free in-home consultation.`,
    telephone: '+18583381678',
    email: 'info@ilprogettollc.com',
    url: `https://ilprogetto-spa.vercel.app/locations/${city}/${product}`,
    areaServed: { '@type': 'City', name: cName, addressRegion: 'CA' },
    address: { '@type': 'PostalAddress', addressLocality: 'San Diego', addressRegion: 'CA', addressCountry: 'US' },
    priceRange: '$$',
    openingHours: 'Mo-Sa 08:00-18:00',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: pName,
      itemListElement: [{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Custom ${pName} Installation`, areaServed: cName } }],
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

// ─── Mini lead form ───────────────────────────────────────────────────────────
function LeadForm({ city, product }: { city: string; product: string }) {
  const [name,   setName]   = useState('')
  const [email,  setEmail]  = useState('')
  const [phone,  setPhone]  = useState('')
  const [status, setStatus] = useState<'idle'|'sending'|'done'|'error'>('idle')
  const [err,    setErr]    = useState('')

  const cName = cityName(city)
  const pName = PRODUCT_SLUGS[product] ?? product

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    setStatus('sending'); setErr('')
    try {
      const res  = await fetch('/api/book', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          booking: {
            firstName: name.trim(), lastName: '', email: email.trim(),
            phone: phone.trim(), address: cName,
            service: PRODUCT_CATALOG_ID[product] ?? product,
            notes: `Landing page enquiry — ${pName} in ${cName}`,
            date: new Date().toISOString().split('T')[0]!,
            time: '09:00',
          },
        }),
      })
      const data = await res.json() as { ok: boolean; error?: string; id?: string }
      if (data.ok) {
        setStatus('done')
      } else {
        setStatus('error'); setErr(data.error ?? 'Something went wrong.')
      }
    } catch {
      setStatus('error'); setErr('Network error — call (858) 338-1678.')
    }
  }

  if (status === 'done') return (
    <div className="text-center py-8">
      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
           style={{ background: 'var(--sand)' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <p className="text-[18px] font-[300] mb-2" style={{ fontFamily: 'var(--serif)' }}>Request received.</p>
      <p className="text-[13px]" style={{ color: 'var(--mid)' }}>We'll be in touch within 24 hours to confirm your consultation in {cName}.</p>
    </div>
  )

  return (
    <form onSubmit={submit} noValidate>
      {/* City + product badge */}
      <div className="flex flex-wrap gap-2 mb-5">
        <span className="inline-flex items-center px-3 py-1 text-[10px] tracking-[0.14em] uppercase"
              style={{ background: 'var(--sand-pale)', color: 'var(--sand)', border: '0.5px solid var(--sand-light)' }}>
          {pName}
        </span>
        <span className="inline-flex items-center px-3 py-1 text-[10px] tracking-[0.14em] uppercase"
              style={{ background: 'var(--warm)', color: 'var(--mid)', border: '0.5px solid var(--hairline)' }}>
          {cName}, CA
        </span>
      </div>

      <h3 className="font-[300] leading-[1.1] mb-2" style={{ fontFamily: 'var(--serif)', fontSize: '22px' }}>
        Free Consultation — <em className="italic" style={{ color: 'var(--sand)' }}>{cName}</em>
      </h3>
      <p className="text-[12px] mb-5" style={{ color: 'var(--mid)' }}>
        We bring samples to your door. No obligation.
      </p>

      {[
        { label: 'Full Name',     req: true,  type: 'text',  ph: 'Jane Smith',      val: name,  set: setName  },
        { label: 'Email Address', req: true,  type: 'email', ph: 'jane@email.com',  val: email, set: setEmail },
        { label: 'Phone Number',  req: false, type: 'tel',   ph: '(619) 555-0100',  val: phone, set: setPhone },
      ].map(({ label, req, type, ph, val, set }) => (
        <div key={label} className="mb-3">
          <label className="block text-[10px] tracking-[0.18em] uppercase mb-1.5" style={{ color: 'var(--mid)' }}>
            {label}{req && <span style={{ color: 'var(--sand)' }}> *</span>}
          </label>
          <input type={type} required={req} placeholder={ph} value={val}
                 onChange={e => set(e.target.value)}
                 className="w-full border px-3.5 py-2.5 text-[13px] outline-none"
                 style={{ fontFamily: type === 'tel' ? 'var(--sans)' : 'inherit', borderColor: 'var(--hairline)', background: 'var(--cream)', color: 'var(--ink)' }}
                 onFocus={e => (e.currentTarget.style.borderColor = 'var(--sand)')}
                 onBlur={e  => (e.currentTarget.style.borderColor = 'var(--hairline)')} />
        </div>
      ))}

      {status === 'error' && (
        <p className="text-[12px] mb-3 px-3 py-2" style={{ background: '#fef2f2', color: '#991b1b' }}>{err}</p>
      )}

      <button type="submit" disabled={status === 'sending'}
              className="w-full py-4 text-[11px] tracking-[0.2em] uppercase mt-1 hover:opacity-90 disabled:opacity-50 transition-opacity"
              style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
        {status === 'sending' ? 'Sending…' : `Book Free Consultation in ${cName}`}
      </button>

      <p className="text-[11px] text-center mt-3" style={{ color: 'var(--mid)' }}>
        Or call: <a href="tel:+18583381678" style={{ fontFamily: 'var(--sans)', color: 'var(--sand)' }}>(858) 338-1678</a>
      </p>
    </form>
  )
}

// ─── Video panel ──────────────────────────────────────────────────────────────
function VideoPanel({ product }: { product: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const src = PRODUCT_VIDEO[product]

  return (
    <div className="relative overflow-hidden w-full"
         style={{ aspectRatio: '16/9', background: 'var(--ink)' }}
         onMouseEnter={() => { if (src && videoRef.current) { videoRef.current.play().catch(()=>{}); setPlaying(true) } }}
         onMouseLeave={() => { if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; setPlaying(false) } }}>
      {src && (
        <video ref={videoRef} src={src} muted playsInline loop preload="auto"
               className="w-full h-full object-cover transition-opacity duration-500"
               style={{ opacity: playing ? 1 : 0 }} />
      )}
      <div className="absolute inset-0 flex items-center justify-center"
           style={{ opacity: playing ? 0 : 1, transition: 'opacity 0.5s', background: 'var(--warm)' }}>
        <div className="text-center px-8">
          <p className="text-[10px] tracking-[0.24em] uppercase mb-3" style={{ color: 'var(--sand)' }}>
            Hover to preview
          </p>
          <p className="text-[28px] font-[300]" style={{ fontFamily: 'var(--serif)', color: 'var(--ink)' }}>
            {PRODUCT_SLUGS[product]}
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
function CityProductPage() {
  const { city, product } = Route.useLoaderData() as any
  const pName  = PRODUCT_SLUGS[product] ?? product
  const cName  = cityName(city)
  const desc   = PRODUCT_DESCRIPTIONS[product]
  const catId  = PRODUCT_CATALOG_ID[product]

  return (
    <div>
      <LocalBusinessSchema city={city} product={product} />

      {/* ── Hero ── */}
      <header className="px-10 md:px-20 py-20 md:py-28" style={{ background: 'var(--warm)' }}>
        <p className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
           style={{ color: 'var(--sand)' }}>
          <span className="inline-block w-8 h-px bg-[var(--sand)]" aria-hidden="true" />
          {cName}, California
        </p>
        <h1 className="font-[300] leading-[1.04] tracking-[-0.015em] mb-6 max-w-[760px]"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(34px, 4.5vw, 60px)' }}>
          Premium Custom{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>{pName}</em>
          <br />Engineered for Homes in {cName}
        </h1>
        {desc && (
          <p className="text-[16px] leading-[1.85] max-w-[600px]" style={{ color: 'var(--mid)' }}>
            {desc.intro}
          </p>
        )}
      </header>

      {/* ── Desktop: 2-col content layout ── */}
      <section className="hidden lg:grid lg:grid-cols-[1.2fr_1fr] min-h-[560px]">
        {/* Left — video + features */}
        <div style={{ borderRight: '0.5px solid var(--hairline)' }}>
          <VideoPanel product={product} />
          {desc && (
            <div className="p-10">
              <p className="text-[10px] tracking-[0.22em] uppercase mb-4" style={{ color: 'var(--sand)' }}>
                What's included
              </p>
              <ul className="flex flex-col gap-3 list-none">
                {desc.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-[14px]" style={{ color: 'var(--mid)' }}>
                    <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 24 24"
                         fill="none" stroke="var(--sand)" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right — lead form */}
        <div className="p-10 flex flex-col justify-center" style={{ background: 'var(--cream)' }}>
          <LeadForm city={city} product={product} />
          {catId && (
            <Link to="/catalog" search={{ product: catId }}
                  className="block text-center mt-4 text-[11px] tracking-[0.14em] uppercase underline hover:text-[var(--sand)] transition-colors"
                  style={{ color: 'var(--mid)' }}>
              View {pName} in our full catalog →
            </Link>
          )}
        </div>
      </section>

      {/* ── Mobile: stacked ── */}
      <section className="lg:hidden">
        <VideoPanel product={product} />
        {desc && (
          <div className="px-6 py-8">
            <ul className="flex flex-col gap-3 list-none mb-8">
              {desc.features.map(f => (
                <li key={f} className="flex items-start gap-3 text-[14px]" style={{ color: 'var(--mid)' }}>
                  <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 24 24"
                       fill="none" stroke="var(--sand)" strokeWidth="2" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="px-6 pb-10" style={{ background: 'var(--cream)' }}>
          <LeadForm city={city} product={product} />
        </div>
      </section>

      {/* ── Why iL Progetto in this city ── */}
      <section className="px-10 md:px-20 py-20 border-t border-[var(--hairline)]"
               style={{ background: 'var(--warm)' }}>
        <div className="max-w-[860px]">
          <p className="text-[11px] tracking-[0.22em] uppercase mb-4" style={{ color: 'var(--sand)' }}>
            Why {cName} Homeowners Choose iL Progetto
          </p>
          <h2 className="font-[300] leading-[1.06] mb-6"
              style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 3vw, 38px)' }}>
            The iL Progetto Difference
          </h2>
          <p className="text-[15px] leading-[1.9] mb-8" style={{ color: 'var(--mid)' }}>
            Our designer visits your home with our complete collection — hundreds of fabric samples, hardware options, and measuring tools. You see exactly how each{' '}
            {pName.toLowerCase()} option looks in your actual light, against your actual walls,
            before committing to anything. It's the most accurate way to choose.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { label: 'Free Consultation', body: 'No charge. No obligation. We quote on the spot.' },
              { label: 'Licensed & Insured', body: 'California License #1127055. Every installer is our own employee.' },
              { label: 'Local Service', body: `We serve ${cName} with typical availability within 3–5 business days.` },
            ].map(({ label, body }) => (
              <div key={label}>
                <p className="text-[13px] font-[400] mb-2" style={{ color: 'var(--ink)' }}>{label}</p>
                <p className="text-[13px] leading-[1.75]" style={{ color: 'var(--mid)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nearby cities ── */}
      <section className="px-10 md:px-20 py-16 border-t border-[var(--hairline)]"
               style={{ background: 'var(--cream)' }}>
        <p className="text-[10px] tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--mid)' }}>
          Also serving
        </p>
        <div className="flex flex-wrap gap-2">
          {CITY_SLUGS.filter(c => c !== city).slice(0, 8).map(c => (
            <a key={c} href={`/locations/${c}/${product}`}
               className="px-3.5 py-2 text-[11px] tracking-[0.12em] uppercase border transition-colors hover:border-[var(--sand)] hover:text-[var(--sand)]"
               style={{ borderColor: 'var(--hairline)', color: 'var(--mid)' }}>
              {cityName(c)}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
