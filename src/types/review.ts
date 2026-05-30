// ─── Review Types ─────────────────────────────────────────────────────────────

export type ReviewSource = 'google' | 'yelp' | 'direct'

export interface Review {
  id: string
  author: string
  rating: 1 | 2 | 3 | 4 | 5
  /** Full text of the review — must be real prose, never truncated for Googlebot */
  text: string
  date: string          // ISO 8601 — "2024-11-15"
  source: ReviewSource
  sourceUrl?: string    // deep link to the review on Google/Yelp
  verified: boolean
  /** Optional: city within service area for localization signal */
  location?: string
}

export interface AggregateRating {
  ratingValue: number
  reviewCount: number
  bestRating: 5
  worstRating: 1
}
