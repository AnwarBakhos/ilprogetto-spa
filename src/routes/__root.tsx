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

const BASE_URL = 'https://ilprogetto-spa.vercel.app'

const SEGMENT_LABELS: Record<string, string> = {
  blog: 'Journal',
  'smart-home': 'Smart Home',
  locations: 'Locations',
  'san-diego': 'San Diego',
  poway: 'Poway',
  carlsbad: 'Carlsbad',
  'la-jolla': 'La Jolla',
  alexa: 'Alexa',
  'google-home': 'Google Home',
  'apple-homekit': 'Apple HomeKit',
  lutron: 'Lutron',
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

function RootLayout() {
  return (
    <>
      <HeadContent />
      <BreadcrumbSchema />
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
