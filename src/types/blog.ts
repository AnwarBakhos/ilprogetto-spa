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
}

export interface BlogSection {
  heading?: string
  paragraphs: string[]
}
