import { createFileRoute, redirect } from '@tanstack/react-router'

// /products → redirect to /catalog
export const Route = createFileRoute('/products/')({
  loader: () => {
    throw redirect({ to: '/catalog', statusCode: 301 })
  },
  component: () => null,
})
