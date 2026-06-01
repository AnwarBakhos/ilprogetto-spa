// ─── Class name merging ────────────────────────────────────────────────────────
// Lightweight alternative to clsx — avoids extra dependency.
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

// ─── IntersectionObserver scroll-reveal ────────────────────────────────────────
// Call once per page to wire up `.fade-up` elements.
export function setupScrollReveal(root?: Element): () => void {
  const targets = Array.from((root ?? document).querySelectorAll('.fade-up'))

  // Immediately reveal any element already in the viewport on load
  const vh = window.innerHeight
  targets.forEach((el) => {
    const rect = (el as Element).getBoundingClientRect()
    if (rect.top < vh && rect.bottom > 0) {
      (el as Element).classList.add('visible')
    }
  })

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
  )

  targets.forEach((el) => {
    if (!(el as Element).classList.contains('visible')) {
      observer.observe(el as Element)
    }
  })

  return () => observer.disconnect()
}