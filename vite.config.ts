import { defineConfig } from 'vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    // TanStack Router plugin MUST come before React plugin
    TanStackRouterVite({
      routesDirectory: './src/routes',
      generatedRouteTree: './src/routeTree.gen.ts',
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 8080,
  },
  build: {
    // Raise warning threshold — 600 kB is reasonable for this app's scope
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Split app code into logical chunks for better caching + faster initial load
        manualChunks(id) {
          // React core — rarely changes, long-lived cache
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor'
          }
          if (id.includes('node_modules/@tanstack/react-router') ||
              id.includes('node_modules/@tanstack/router-core') ||
              id.includes('node_modules/@tanstack/react-store')) {
            return 'router-vendor'
          }
          if (id.includes('node_modules/@tanstack/react-query') ||
              id.includes('node_modules/@tanstack/query-core')) {
            return 'query-vendor'
          }
          if (id.includes('node_modules/zod')) {
            return 'zod-vendor'
          }
          if (id.includes('/src/data/seo') || id.includes('/src/data/blog')) {
            return 'seo-data'
          }
          if (id.includes('/src/routes/locations') || id.includes('/src/routes/careers')) {
            return 'location-routes'
          }
          if (id.includes('/src/routes/smart-home')) {
            return 'smart-home-routes'
          }
        },
      },
    },
  },
})
