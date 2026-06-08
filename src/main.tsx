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

// ─── Scroll restoration ───────────────────────────────────────────────────────
// We manage scroll ourselves (scroll-to-card on the catalog page).
// Setting this to 'manual' prevents the browser from overriding our scrolls
// after navigation — TanStack's scrollRestoration:false hands control to the
// browser, which would otherwise fire and reset scrollY to 0 after our calls.
if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

// ─── Router ───────────────────────────────────────────────────────────────────
// createRouter is called once at module level — not inside a component.
// This matches how TanStack Router expects it, and ensures the router instance
// is stable across React.StrictMode double-invocations.
const router = createRouter({
  routeTree,
  context: { queryClient },
  // Let the browser handle scroll restoration natively.
  // TanStack's own scrollRestoration was overriding our catalog scroll-to-card.
  scrollRestoration: false,
  // Preload linked routes on hover for instant navigation
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
})

// ─── TypeScript type augmentation ─────────────────────────────────────────────
// Tells TanStack Router what routes