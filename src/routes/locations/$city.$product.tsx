import { createFileRoute, redirect } from '@tanstack/react-router'

/**
 * All /locations/:city/:product URLs 301-redirect to /locations/:city.
 * The 320 individual product pages are consolidated into per-city pages.
 */
export const Route = createFileRoute('/locations/$city/$product')({
  loader: ({ params }: any) => {
    throw redirect({
      to: '/locations/$city' as any,
      params: { city: params.city } as any,
      statusCode: 301,
    })
  },
  component: () => null,
})
