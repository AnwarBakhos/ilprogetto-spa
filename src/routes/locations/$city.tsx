import { createFileRoute, notFound, Outlet } from '@tanstack/react-router'
import { CITY_SLUGS } from '@/data/seo'

/**
 * Fallback dynamic city route.
 *
 * All 16 known cities (san-diego, poway, la-jolla, etc.) are handled by their
 * own static route files that take precedence over this dynamic route.
 *
 * This file only handles:
 *   1. Unknown city slugs → throws notFound()
 *   2. Renders <Outlet /> so the $city.$product child route (which 301-redirects
 *      to /locations/$city) can be reached during the redirect lifecycle.
 */
export const Route = (createFileRoute as any)('/locations/$city')({
  loader: ({ params }: any) => {
    const { city } = params as { city: string }
    // All known cities have static routes — anything hitting here is unknown.
    if (!CITY_SLUGS.includes(city as typeof CITY_SLUGS[number])) throw notFound()
    return { city }
  },
  component: () => <Outlet />,
})
