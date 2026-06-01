import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { getPost, getLatestPosts } from '@/data/blog'
import type { BlogPost } from '@/types/blog'

// SEO: Full article body in raw HTML paragraphs. Article JSON-LD with
// datePublished, keywords, and author. Internal links to /catalog for each
// related product. Every heading is an <h2> for keyword targeting.

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    const post = getPost(params.slug)
    if (!post) throw notFound()
    return post
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {}
    return {
      meta: [
        { title: `${loaderData.title} | iL Progetto LLC` },
        { name: 'description', content: loaderData.description },
        { name: 'keywords', content: loaderData.keywords.join(', ') },
        { property: 'article:published_time', content: loaderData.publishedAt },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: loaderData.title },
        { property: 'og:description', content: loaderData.description },
        { property: 'og:image', content: '/images/og-image.jpg' },
        { property: 'og:url', content: `https://www.ilprogettollc.com/blog/${loaderData.slug}` },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: loaderData.title },
        { name: 'twitter:description', content: loaderData.description },
        { name: 'robots', content: 'index, follow' },
      ],
      links: [
        { rel: 'canonical', href: `https://www.ilprogettollc.com/blog/${loaderData.slug}` },
      ],
    }
  },
  component: BlogPostPage,
})

// ─── Article JSON-LD ──────────────────────────────────────────────────────────
function ArticleSchema({ post }: { post: BlogPost }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    keywords: post.keywords.join(', '),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'iL Progetto LLC',
      url: 'https://www.ilprogettollc.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'iL Progetto LLC',
      logo: {
        '@type': 'ImageObject',
        url: '/images/logo-300.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.ilprogettollc.com/blog/${post.slug}`,
    },
    image: '/images/og-image.jpg',
    wordCount: 1500,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'Blog',
      name: 'iL Progetto Journal',
      url: 'https://www.ilprogettollc.com/blog/',
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ─── Keyword tag ──────────────────────────────────────────────────────────────
function KeywordTag({ children }: { children: string }) {
  return (
    <span
      className="inline-block text-[10px] tracking-[0.16em] uppercase px-3 py-1.5 border"
      style={{ borderColor: 'var(--hairline)', color: 'var(--mid)', background: 'var(--warm)' }}
    >
      {children}
    </span>
  )
}

// ─── BlogPostPage ─────────────────────────────────────────────────────────────
function BlogPostPage() {
  const post = Route.useLoaderData()
  const related = getLatestPosts(3).filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <div>
      <ArticleSchema post={post} />

      {/* ── Article header ──────────────────────────────────────────────── */}
      <header
        className="px-4 md:px-10 lg:px-20 py-20 border-b"
        style={{ background: 'var(--warm)', borderColor: 'var(--hairline)' }}
        aria-label="Article header"
      >
        <div className="max-w-[740px]">
          <div className="flex items-center gap-4 mb-6">
            <Link
              to={"/blog/" as any}
              className="text-[11px] tracking-[0.14em] uppercase flex items-center gap-2 hover:text-[var(--sand)] transition-colors"
              style={{ color: 'var(--mid)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              All Articles
            </Link>
            <span style={{ color: 'var(--hairline)' }}>·</span>
            <span
              className="text-[10px] tracking-[0.18em] uppercase px-3 py-1 border"
              style={{ borderColor: 'var(--sand-light)', color: 'var(--sand)', background: 'var(--sand-pale)' }}
            >
              {post.category}
            </span>
          </div>

          <h1
            className="font-[300] leading-[1.06] tracking-[-0.015em] mb-6"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 4.5vw, 58px)', color: 'var(--ink)' }}
          >
            {post.title}
          </h1>

          <p
            className="text-[17px] leading-[1.8] mb-8"
            style={{ color: 'var(--mid)' }}
          >
            {post.description}
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-[500]"
                style={{ background: 'var(--sand)', color: '#fff' }}
                aria-hidden="true"
              >
                iP
              </span>
              <div>
                <p className="text-[13px] font-[400]" style={{ color: 'var(--ink)' }}>
                  iL Progetto LLC
                </p>
                <time
                  dateTime={post.publishedAt}
                  className="text-[12px]"
                  style={{ color: 'var(--mid)' }}
                >
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'long', day: 'numeric', year: 'numeric',
                  })}
                </time>
              </div>
            </div>
            <span className="text-[12px]" style={{ color: 'var(--mid)' }}>
              {post.readingMinutes} min read
            </span>
          </div>
        </div>
      </header>

      {/* ── Article body + sidebar ──────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-0">

        {/* Body */}
        <article
          className="px-4 md:px-10 lg:px-20 py-16 max-w-[740px]"
          itemScope
          itemType="https://schema.org/Article"
        >
          <meta itemProp="headline" content={post.title} />
          <meta itemProp="datePublished" content={post.publishedAt} />

          {post.sections.map((section: any, i: number) => (
            <section key={i} className="mb-12">
              {section.heading && (
                <h2
                  className="font-[400] leading-[1.2] mb-5"
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: 'clamp(20px, 2.2vw, 26px)',
                    color: 'var(--ink)',
                  }}
                >
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((para: string, j: number) => (
                <p
                  key={j}
                  itemProp="articleBody"
                  className="text-[16px] leading-[1.9] mb-5 last:mb-0"
                  style={{ color: para.startsWith('[CONTENT') ? 'var(--mid)' : 'var(--ink)' }}
                >
                  {para}
                </p>
              ))}
            </section>
          ))}

          {/* ── Keyword tags ─────────────────────────────────────────── */}
          <div className="flex flex-wrap gap-2 pt-10 border-t mb-10" style={{ borderColor: 'var(--hairline)' }}>
            {post.keywords.map((kw: string) => (
              <KeywordTag key={kw}>{kw}</KeywordTag>
            ))}
          </div>

          {/* ── Internal links to related products ───────────────────── */}
          {post.relatedProducts.length > 0 && (
            <nav
              aria-label="Related products"
              className="p-6 border"
              style={{ borderColor: 'var(--hairline)', background: 'var(--warm)' }}
            >
              <p
                className="text-[10px] tracking-[0.2em] uppercase mb-4"
                style={{ color: 'var(--sand)' }}
              >
                Explore Related Products
              </p>
              <div className="flex flex-wrap gap-3">
                {post.relatedProducts.map((productId: string) => (
                  <Link
                    key={productId}
                    to="/catalog"
                    search={{ product: productId }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-[12px] tracking-[0.12em] uppercase border transition-colors hover:border-[var(--sand)] hover:text-[var(--sand)]"
                    style={{ borderColor: 'var(--hairline)', color: 'var(--ink)' }}
                  >
                    {productId.charAt(0).toUpperCase() + productId.slice(1).replace(/-/g, ' ')} Shades
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </article>

        {/* Sidebar */}
        <aside
          className="hidden lg:block px-8 py-16 border-l sticky top-[var(--nav-h)] self-start"
          style={{ borderColor: 'var(--hairline)', background: 'var(--warm)' }}
          aria-label="Article sidebar"
        >
          {/* Table of contents */}
          <p
            className="text-[10px] tracking-[0.2em] uppercase mb-4"
            style={{ color: 'var(--mid)' }}
          >
            Contents
          </p>
          <nav aria-label="Article contents" className="mb-10">
            <ol className="space-y-2 list-none">
              {post.sections.filter((s: any) => s.heading).map((s: any, i: number) => (
                <li key={i}>
                  <span className="text-[13px] leading-[1.5]" style={{ color: 'var(--mid)' }}>
                    {i + 1}. {s.heading}
                  </span>
                </li>
              ))}
            </ol>
          </nav>

          {/* CTA card */}
          <div
            className="p-5 border"
            style={{ borderColor: 'var(--hairline)', background: '#fff' }}
          >
            <p className="text-[11px] tracking-[0.16em] uppercase mb-3" style={{ color: 'var(--sand)' }}>
              Free Consultation
            </p>
            <p className="text-[13px] leading-[1.7] mb-5" style={{ color: 'var(--mid)' }}>
              Book a free in-home visit — we bring samples and quotes directly to your door.
            </p>
            <Link
              to="/booking"
              className="block text-center py-3 text-[11px] tracking-[0.16em] uppercase transition-colors"
              style={{ background: 'var(--ink)', color: 'var(--cream)' }}
            >
              Book Now
            </Link>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div className="mt-8">
              <p
                className="text-[10px] tracking-[0.2em] uppercase mb-4"
                style={{ color: 'var(--mid)' }}
              >
                More Articles
              </p>
              <div className="space-y-4">
                {related.map((p) => (
                  <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="block group">
                    <p className="text-[13px] leading-[1.5] group-hover:text-[var(--sand)] transition-colors" style={{ color: 'var(--ink)' }}>
                      {p.title}
                    </p>
                    <p className="text-[12px] mt-1" style={{ color: 'var(--mid)' }}>
                      {p.readingMinutes} min read
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}
