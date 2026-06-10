// ─── useAddressAutocomplete ───────────────────────────────────────────────────
// Lazily loads the Google Maps Places API and attaches autocomplete to an input.
// Restricted to US addresses. Gracefully no-ops if VITE_GOOGLE_MAPS_KEY is unset.

import { useEffect, useRef } from 'react'

const SCRIPT_ID = 'google-maps-places'

function loadScript(apiKey: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // Already loaded
    if (window.google?.maps?.places) { resolve(); return }

    // Script tag exists but not yet ready — poll
    if (document.getElementById(SCRIPT_ID)) {
      const poll = setInterval(() => {
        if (window.google?.maps?.places) { clearInterval(poll); resolve() }
      }, 100)
      return
    }

    const script = document.createElement('script')
    script.id   = SCRIPT_ID
    script.src  = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
    script.async = true
    script.onload  = () => resolve()
    script.onerror = () => reject(new Error('Google Maps failed to load'))
    document.head.appendChild(script)
  })
}

export function useAddressAutocomplete(
  inputRef: React.RefObject<HTMLInputElement | null>,
  onSelect: (address: string) => void,
): void {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY as string | undefined
  const acRef  = useRef<google.maps.places.Autocomplete | null>(null)

  useEffect(() => {
    if (!apiKey || !inputRef.current) return
    let cancelled = false

    loadScript(apiKey).then(() => {
      if (cancelled || !inputRef.current || acRef.current) return

      const ac = new google.maps.places.Autocomplete(inputRef.current, {
        types: ['address'],
        componentRestrictions: { country: 'us' },
        fields: ['formatted_address'],
      })

      acRef.current = ac

      ac.addListener('place_changed', () => {
        const place = ac.getPlace()
        if (place.formatted_address) onSelect(place.formatted_address)
      })
    }).catch(() => { /* no-op if key missing/invalid */ })

    return () => {
      cancelled = true
      if (acRef.current) {
        google.maps.event.clearInstanceListeners(acRef.current)
        acRef.current = null
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiKey])
}
