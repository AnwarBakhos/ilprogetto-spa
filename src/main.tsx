import '../styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

// ─── QueryClient ──────────────────────────────────────────────────────────────
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000, // 60s — catalog data doesn't change often
    },
  },
})

// ─── Router ───────────────────────────────────────────────────────────────────
// createRouter is called once at module level — not inside a component.
// This matches how TanStack Router expects it, and ensures the router instance
// is stable across React.StrictMode double-invocations.
const router = createRouter({
  routeTree,
  context: { queryClient },
  // Restore scroll position when navigating back
  scrollRestoration: true,
  // Preload linked routes on hover for instant navigation
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
})

// ─── TypeScript type augmentation ─────────────────────────────────────────────
// Tells TanStack Router what routes exist, enabling type-safe Link `to` props.
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// ─── Mount ────────────────────────────────────────────────────────────────────
const root = document.getElementById('root')
if (!root) throw new Error('#root element not found in index.html')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    </React.StrictMode>,
)
