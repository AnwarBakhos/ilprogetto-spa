// ─── Blog Types ───────────────────────────────────────────────────────────────

export type BlogCategory = 'tips' | 'guides' | 'local' | 'products' | 'buying-guide' | 'pricing' | 'local-guide'

export interface BlogPost {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  keywords: string[]
  category: BlogCategory
  readingMinutes: number
  sections: BlogSection[]
  relatedProducts: string[]
  /** Absolute URL or path to the hero/og image for this post */
  image?: string
  /** Author display name - defaults to 'iL Progetto LLC' if omitted */
  author?: string
  /** When true the post is hidden from the index and returns 404 on direct UR