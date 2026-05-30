// ─── Class name merging ────────────────────────────────────────────────────────
// Lightweight alternative to clsx — avoids extra dependency.
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

// ─── IntersectionObserver scroll-reveal ────────────────────────────────────────
// Call once per page to wire up `.fade-up` elements.
export function setupScrollReveal(root?: Element): () => void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  )

  const targets = (root ?? document).querySelectorAll('.fade-up')
  targets.forEach((el) => observer.observe(el))

  // Return cleanup for useEffect
  return () => observer.disconnect()
}

// ─── Drive thumbnail helper ────────────────────────────────────────────────────
export const driveThumb = (id: string, size = 'w900'): string =>
  `https://drive.google.com/thumbnail?id=${id}&sz=${size}`
