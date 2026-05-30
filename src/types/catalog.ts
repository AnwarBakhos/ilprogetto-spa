// ─── Catalog Types ────────────────────────────────────────────────────────────

export interface CatalogProduct {
  /** Unique key used in URLs and data lookups */
  id: string
  /** Display name */
  name: string
  /** Short label for nav dropdowns */
  shortName: string
  /** Bronze eyebrow label */
  eyebrow: string
  /** One-line pitch */
  tagline: string
  /** Two–three sentence description */
  description: string
  /** Longer detail copy for the product detail view */
  detailCopy: string
  /** Feature bullet points */
  features: string[]
  /** SEO keyword tags */
  seoTags: string[]
  /** Cover image URL */
  coverImage: string
  /** Detail image URL (different angle) */
  detailImage: string
  /** Drive image IDs for the gallery */
  galleryDriveIds: string[]
}

export interface RouteSeoMeta {
  title: string
  description: string
}

// Re-exported from data layer for external use
export type { ProductCategory } from '@/data/catalog'
