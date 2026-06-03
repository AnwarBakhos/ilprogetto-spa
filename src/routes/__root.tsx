import { SITE_URL } from '@/lib/config'
import { createRootRouteWithContext, Outlet, HeadContent, useLocation } from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/react-query'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { ServiceDrawer } from '@/components/ServiceDrawer'
import { ExitIntentPopup } from '@/components/ExitIntentPopup'
import { CookieConsent } from '@/components/CookieConsent'
import { AccessibilityToolbar } from '@/components/AccessibilityToolbar'


interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
})

const BASE_URL = `${SITE_URL}`

const SEGMENT_LABELS: Record<string, string> = {
  blog: 'Journal', catalog: 'Catalog', booking: 'Book Consultation',
  about: 'About', faq: 'FAQ', reviews: 'Reviews', contact: 'Contact',
  warranty: 'Warranty', commercial: 'Commercial', inspiration: 'Inspiration',
  legal: 'Legal', 'child-safety': 'Child Safety', careers: 'Careers',
  'smart-home': 'Smart Home', alexa: 'Alexa', 'google-home': 'Google Home',
  'apple-homekit': 'Apple HomeKit', control4: 'Control4', lutron: 'Lutron',
  locations: 'Locations', 'san-diego': 'San Diego', poway: 'Poway',
  carlsbad: 'Carlsbad', 'la-jolla': 'La Jolla', 'del-mar': 'Del Mar',
  encinitas: 'Encinitas', 'solana-beach': 'Solana Beach',
  'rancho-santa-fe': 'Rancho Santa Fe', 'chula-vista': 'Chula Vista',
  'national-city': 'National City', coronado: 'Coronado', 'el-cajon': 'El Cajon',
  escondido: 'Escondido', 'san-marcos': 'San Marcos', vista: 'Vista', temecula: 'Temecula',
  'roller-shades': 'Roller Shades', 'zebra-shades': 'Zebra Shades',
  'cellular-shades': 'Cellular Shades', 'roman-shades': 'Roman Shades',
  'motorized-shading': 'Motorized Shading', 'plantation-shutters': 'Plantation Shutters',
  'curtains-drapery': 'Curtains & Drapery', 'wood-aluminum-blinds': 'Wood & Aluminum Blinds',
  'shangri-la-shades': 'Shangri-La Shades', 'faux-wood-blinds': 'Faux Wood Blinds',
  'woven-wood-shades': 'Woven Wood Shades', 'sheer-shades': 'Sheer Shades',
  'blackout-curtains': 'Blackout Curtains', 'sheer-drapes': 'Sheer Drapes',
  'panel-track-blinds': 'Panel Track Blinds', 'vertical-blinds': 'Vertical Blinds',
  'aluminum-blinds': 'Aluminum Blinds', 'motorized-exterior': 'Motorized Exterior',
  'sun-screens': 'Sun Screens', awnings: 'Awnings',
}

function toLabel(segment: string): string {
  return SEGMENT_LABELS[segment] ??
    segment.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

function BreadcrumbSchema() {
  const location = useLocation()
  const pathname = location.pathname
  if (pathname === '/') return null
  const segments = pathname.replace(/\/$/, '').split('/').filter(Boolean)
  const items = [
    { name: 'Home', id: BASE_URL + '/' },
    ...segments.map((seg, i) => ({
      name: toLabel(seg),
      id: BASE_URL + '/' + segments.slice(0, i + 1).join('/'),
    })),
  ]
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.id,
    })),
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}


function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeGoodsStore"],
    "@id": `${SITE_URL}/#organization`,
    "name": "iL Progetto LLC",
    "alternateName": "iL Progetto Window Treatments",
    "description": "Custom window treatments for San Diego homes and offices. Roller shades, zebra shades, motorized blinds, plantation shutters — measured and installed by our licensed team.",
    "telephone": "+18583381678",
    "email": "info@ilprogettollc.com",
    "url": `${SITE_URL}`,
    "logo": "/images/logo-300.png",
    "image": "/images/og-image.jpg",
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Financing",
    "openingHours": "Mo-Sa 08:00-18:00",
    "foundingYear": "2022",
    "slogan": "Where Luxury Meets Precision",
    "identifier": "California Contractors License #1127055",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Diego",
      "addressRegion": "CA",
      "postalCode": "92127",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.9595",
      "longitude": "-117.0865"
    },
    "areaServed": [
      {"@type": "AdministrativeArea", "name": "San Diego County"},
      {"@type": "AdministrativeArea", "name": "Orange County"},
      {"@type": "AdministrativeArea", "name": "Riverside County"},
      {"@type": "AdministrativeArea", "name": "San Bernardino County"}
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-858-338-1678",
      "contactType": "customer service",
      "areaServed": "Southern California",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.instagram.com/ilprogetto.design",
      "https://www.facebook.com/61561253288372",
      "https://yelp.to/fuCV4NqXEu"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "32",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Custom Window Treatments",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Custom Roller Shades Installation"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Motorized Blinds Installation"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Plantation Shutters Installation"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Zebra Shades Installation"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Cellular Honeycomb Shades"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Curtains and Drapery Installation"}}
      ]
    }
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

function RootLayout() {
  return (
    <>
      <HeadContent />
      <BreadcrumbSchema />
      <LocalBusinessSchema />
      <a href="#page-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:text-[12px] focus:tracking-[0.1em] focus:uppercase"
        style={{ background: 'var(--sand)', color: '#fff' }}>
        Skip to main content
      </a>
      <Nav />
      <main id="page-content" role="main" style={{ paddingTop: '76px' }}>
        <Outlet />
      </main>
      <Footer />
      <ServiceDrawer />
      <ExitIntentPopup />
      <CookieConsent />
      <AccessibilityToolbar />
    </>
  )
}
