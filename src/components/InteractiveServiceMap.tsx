import { useEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'

interface City {
  name: string; slug: string; lat: number; lng: number; tagline: string
}

const CITIES: City[] = [
  { name: 'San Diego',       slug: 'san-diego',       lat: 32.7157, lng: -117.1611, tagline: 'Premier coastal & urban coverage' },
  { name: 'La Jolla',        slug: 'la-jolla',         lat: 32.8328, lng: -117.2713, tagline: 'Bluff-top & canyon-rim estates' },
  { name: 'Del Mar',         slug: 'del-mar',          lat: 32.9595, lng: -117.2653, tagline: 'Coastal luxury homes' },
  { name: 'Carlsbad',        slug: 'carlsbad',         lat: 33.1581, lng: -117.3506, tagline: 'HOA-friendly installs' },
  { name: 'Encinitas',       slug: 'encinitas',        lat: 33.0369, lng: -117.2920, tagline: 'Beach community specialists' },
  { name: 'Poway',           slug: 'poway',            lat: 32.9628, lng: -117.0359, tagline: 'Inland valley coverage' },
  { name: 'Rancho Santa Fe', slug: 'rancho-santa-fe',  lat: 33.0228, lng: -117.1967, tagline: 'Estate & luxury installs' },
  { name: 'Chula Vista',     slug: 'chula-vista',      lat: 32.6401, lng: -117.0842, tagline: 'South Bay residential' },
  { name: 'Escondido',       slug: 'escondido',        lat: 33.1192, lng: -117.0864, tagline: 'Inland & wine country' },
  { name: 'Coronado',        slug: 'coronado',         lat: 32.6859, lng: -117.1831, tagline: 'Island premium installs' },
  { name: 'El Cajon',        slug: 'el-cajon',         lat: 32.7948, lng: -116.9625, tagline: 'East County coverage' },
  { name: 'Temecula',        slug: 'temecula',         lat: 33.4936, lng: -117.1484, tagline: 'Wine country & new builds' },
]

const SERVICE_POLYGON: [number, number][] = [
  [33.50,-117.65],[33.50,-117.10],[33.35,-116.80],[33.20,-116.50],
  [32.95,-116.50],[32.70,-116.50],[32.55,-116.60],[32.55,-117.10],
  [32.60,-117.25],[32.65,-117.25],[32.70,-117.30],[32.90,-117.30],
  [33.10,-117.35],[33.25,-117.40],[33.50,-117.65],
]

const STATS = [
  { num: '16+',  label: 'Cities Served' },
  { num: '4',    label: 'Counties Covered' },
  { num: 'Free', label: 'In-Home Consult' },
  { num: '5.0',  label: '32 Google Reviews' },
]

function makeIconHtml(active: boolean) {
  const size = active ? 16 : 12
  const bg   = active ? '#c5a572' : 'rgba(197,165,114,0.85)'
  const bdr  = active ? '#fff'    : 'rgba(197,165,114,0.4)'
  const glow = active ? 6 : 0
  return `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${bg};border:2px solid ${bdr};box-shadow:0 0 0 ${glow}px rgba(197,165,114,0.25);transition:all 0.18s ease"></div>`
}

export function InteractiveServiceMap() {
  const mapRef     = useRef<HTMLDivElement>(null)
  const leafletRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])
  const [activeCity, setActiveCity] = useState<City | null>(null)
  const [mapReady,   setMapReady]   = useState(false)

  function resetMarkers(L: any, activeSlug?: string) {
    markersRef.current.forEach((m, i) => {
      const isActive = CITIES[i].slug === activeSlug
      m.setIcon(L.divIcon({ className: '', html: makeIconHtml(isActive), iconSize: [isActive?16:12,isActive?16:12], iconAnchor: [isActive?8:6,isActive?8:6] }))
    })
  }

  useEffect(() => {
    if (!mapRef.current || leafletRef.current) return
    let mounted = true

    import('leaflet').then((L) => {
      if (!mounted || !mapRef.current || leafletRef.current) return

      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl:       'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl:     'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      })

      const map = L.map(mapRef.current!, {
        center: [32.95, -117.15], zoom: 9,
        zoomControl: false, attributionControl: false, scrollWheelZoom: false,
      })
      leafletRef.current = map

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { maxZoom: 19, subdomains: 'abcd' }).addTo(map)
      L.control.attribution({ position: 'bottomleft', prefix: false }).addTo(map).setPrefix('(c) <a href="https://carto.com" style="color:#c5a572;opacity:0.5">CARTO</a>')
      L.control.zoom({ position: 'topleft' }).addTo(map)

      L.polygon(SERVICE_POLYGON as any, {
        color: '#c5a572', weight: 1.5, opacity: 0.4,
        fillColor: '#c5a572', fillOpacity: 0.07, dashArray: '6 4',
      }).addTo(map)

      CITIES.forEach((city) => {
        const marker = L.marker([city.lat, city.lng], {
          icon: L.divIcon({ className: '', html: makeIconHtml(false), iconSize: [12,12], iconAnchor: [6,6] }),
        }).addTo(map).on('click', () => {
          setActiveCity(city)
          resetMarkers(L, city.slug)
        })
        markersRef.current.push(marker)
      })

      map.on('click', (e: any) => {
        if ((e.originalEvent.target as HTMLElement).classList.contains('leaflet-interactive')) return
        setActiveCity(null)
        resetMarkers(L)
      })

      if (mounted) setMapReady(true)
    })

    return () => {
      mounted = false
      if (leafletRef.current) { leafletRef.current.remove(); leafletRef.current = null; markersRef.current = [] }
    }
  }, [])

  const flyTo = (city: City) => {
    setActiveCity(city)
    if (leafletRef.current) leafletRef.current.flyTo([city.lat, city.lng], 11, { duration: 0.8 })
    import('leaflet').then((L) => resetMarkers(L, city.slug))
  }

  const pill = (city: City) => {
    const active = activeCity?.slug === city.slug
    return (
      <button key={city.slug} onClick={() => flyTo(city)} style={{
        background: active ? 'rgba(197,165,114,0.15)' : 'transparent',
        border: `0.5px solid ${active ? 'rgba(197,165,114,0.5)' : 'rgba(255,255,255,0.1)'}`,
        color: active ? '#c5a572' : 'rgba(251,251,249,0.55)',
        fontFamily: 'var(--sans)', fontSize: '10px', letterSpacing: '0.14em',
        textTransform: 'uppercase', padding: '7px 14px', cursor: 'pointer', transition: 'all 0.15s',
      }}>
        {city.name}
      </button>
    )
  }

  return (
    <section aria-label="Interactive service area map" style={{ background: 'var(--ink)' }}>

      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossOrigin="" />
      <style>{`
        .leaflet-control-zoom a { background:rgba(20,18,16,0.92)!important; color:rgba(197,165,114,0.9)!important; border-color:rgba(197,165,114,0.2)!important; }
        .leaflet-control-zoom a:hover { background:rgba(197,165,114,0.15)!important; }
        .leaflet-bar { border:1px solid rgba(197,165,114,0.2)!important; box-shadow:none!important; }
        .leaflet-attribution-flag { display:none!important; }
      `}</style>

      {/* Header */}
      <div style={{ padding:'64px 40px 40px', textAlign:'center' }}>
        <p style={{ fontFamily:'var(--sans)', fontSize:'11px', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--sand)', marginBottom:'16px', display:'inline-flex', alignItems:'center', gap:'14px' }}>
          <span style={{ display:'inline-block', width:'32px', height:'1px', background:'currentColor' }} aria-hidden="true" />
          Service Area
          <span style={{ display:'inline-block', width:'32px', height:'1px', background:'currentColor' }} aria-hidden="true" />
        </p>
        <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,3.5vw,48px)', fontWeight:300, color:'var(--cream)', lineHeight:1.1, letterSpacing:'-0.015em', margin:0 }}>
          Greater San Diego &amp; <em style={{ fontStyle:'italic', color:'var(--sand)' }}>Southern California</em>
        </h2>
        <p style={{ fontFamily:'var(--sans)', fontSize:'14px', color:'rgba(251,251,249,0.5)', marginTop:'14px' }}>
          Click any pin or city name to explore coverage
        </p>
      </div>

      {/* Map + sidebar */}
      <div style={{
        display:'grid',
        gridTemplateColumns: activeCity ? '1fr 300px' : '1fr',
        minHeight:'500px',
        borderTop:'1px solid rgba(255,255,255,0.06)',
        borderBottom:'1px solid rgba(255,255,255,0.06)',
        transition:'grid-template-columns 0.3s ease',
      }}>
        {/* Map */}
        <div ref={mapRef} style={{ minHeight:'500px', position:'relative' }} aria-label="Service area map">
          {!mapReady && (
            <div style={{ position:'absolute', inset:0, zIndex:10, background:'var(--ink)', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <p style={{ fontFamily:'var(--sans)', fontSize:'11px', letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(197,165,114,0.4)' }}>Loading map…</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        {activeCity && (
          <div style={{ background:'rgba(12,10,8,0.97)', borderLeft:'1px solid rgba(197,165,114,0.15)', padding:'36px 28px', display:'flex', flexDirection:'column', gap:'24px' }}>
            <button onClick={() => { setActiveCity(null); import('leaflet').then((L) => resetMarkers(L)) }}
              style={{ alignSelf:'flex-end', background:'none', border:'none', color:'rgba(251,251,249,0.35)', cursor:'pointer', fontSize:'20px', lineHeight:1, padding:'2px' }} aria-label="Close">
              &times;
            </button>

            <div>
              <p style={{ fontFamily:'var(--sans)', fontSize:'10px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--sand)', marginBottom:'8px' }}>Now Serving</p>
              <h3 style={{ fontFamily:'var(--serif)', fontSize:'clamp(22px,2.5vw,30px)', fontWeight:300, color:'var(--cream)', lineHeight:1.1, margin:'0 0 6px' }}>{activeCity.name}</h3>
              <p style={{ fontFamily:'var(--sans)', fontSize:'13px', color:'rgba(251,251,249,0.5)', lineHeight:1.6, margin:0 }}>{activeCity.tagline}</p>
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
              {['Free in-home consultation','Same-week availability','Custom-measured & installed','Licensed CA #1127055'].map((f) => (
                <div key={f} style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c5a572" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  <span style={{ fontFamily:'var(--sans)', fontSize:'13px', color:'rgba(251,251,249,0.65)' }}>{f}</span>
                </div>
              ))}
            </div>

            <div>
              <p style={{ fontFamily:'var(--sans)', fontSize:'10px', letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(251,251,249,0.3)', marginBottom:'8px' }}>Popular in {activeCity.name}</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
                {['roller-shades','plantation-shutters','motorized-shading','zebra-shades'].map((p) => (
                  <a key={p} href={`/locations/${activeCity.slug}/${p}`} style={{ fontFamily:'var(--sans)', fontSize:'10px', letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(197,165,114,0.7)', border:'0.5px solid rgba(197,165,114,0.2)', padding:'5px 10px', textDecoration:'none' }}>
                    {p.replace(/-/g,' ')}
                  </a>
                ))}
              </div>
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:'8px', marginTop:'auto' }}>
              <Link to="/booking" style={{ display:'block', textAlign:'center', background:'var(--sand)', color:'var(--ink)', fontFamily:'var(--sans)', fontSize:'11px', letterSpacing:'0.18em', textTransform:'uppercase', padding:'13px 20px', textDecoration:'none' }}>
                Book Free Consultation
              </Link>
              <a href={`/locations/${activeCity.slug}`} style={{ display:'block', textAlign:'center', color:'rgba(251,251,249,0.55)', fontFamily:'var(--sans)', fontSize:'11px', letterSpacing:'0.14em', textTransform:'uppercase', padding:'11px 20px', textDecoration:'none', border:'0.5px solid rgba(255,255,255,0.1)' }}>
                All {activeCity.name} Services
              </a>
            </div>
          </div>
        )}
      </div>

      {/* City pills */}
      <div style={{ padding:'20px 32px', display:'flex', flexWrap:'wrap', gap:'8px', justifyContent:'center', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
        {CITIES.map(pill)}
      </div>

      {/* Stats */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
        {STATS.map((s, i) => (
          <div key={s.label} style={{ padding:'26px 16px', textAlign:'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
            <span style={{ display:'block', fontFamily:'var(--serif)', fontSize:'clamp(18px,2vw,28px)', fontWeight:300, color:'var(--sand)', lineHeight:1, marginBottom:'7px' }}>{s.num}</span>
            <span style={{ display:'block', fontFamily:'var(--sans)', fontSize:'10px', letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--cream)', opacity:0.55 }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div style={{ display:'flex', flexWrap:'wrap', gap:'12px', padding:'28px 32px', justifyContent:'center' }}>
        <a href="https://maps.google.com/?q=iL+Progetto+LLC+San+Diego+CA" target="_blank" rel="noopener noreferrer"
          style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'var(--sand)', color:'var(--cream)', fontFamily:'var(--sans)', fontSize:'11px', letterSpacing:'0.18em', textTransform:'uppercase', padding:'14px 28px', textDecoration:'none' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Open in Google Maps
        </a>
        <Link to="/booking"
          style={{ display:'inline-block', background:'transparent', color:'var(--cream)', fontFamily:'var(--sans)', fontSize:'11px', letterSpacing:'0.18em', textTransform:'uppercase', padding:'13px 28px', textDecoration:'none', border:'1px solid rgba(251,251,249,0.25)' }}>
          Book a Free Consultation
        </Link>
      </div>
    </section>
  )
}