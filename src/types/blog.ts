// ─── Blog Types ───────────────────────────────────────────────────────────────

export type BlogCategory = 'tips' | 'guides' | 'local' | 'products' | 'buying-guide' | 'pricing' | 'local-guide'

export interface BlogPost {
  slug: string
  title: string
  /** Used for <meta name="description"> and article card excerpt */
  description: string
  publishedAt: string         // ISO 8601 — "2025-01-20"
  updatedAt?: string          // ISO 8601 — for schema.org dateModified
  keywords: string[]          // primary keyword first
  category: BlogCategory
  readingMinutes: number
  /** Full article body as JSX-ready sections. Each entry is a {heading, paragraphs[]} block. */
  sections: BlogSection[]
  /** Product IDs from catalog this article should link to */
  relatedProducts: string[]
}

export interface BlogSection {
  heading?: string
  paragraphs: string[]
}
