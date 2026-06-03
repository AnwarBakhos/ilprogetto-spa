import { createFileRoute, Link } from '@tanstack/react-router'
import { BLOG_POSTS } from '@/data/blog'
import { SITE_URL } from '@/lib/config'

<<<<<<< HEAD
/** Strip HTML tags — used for plain-text contexts. */
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '')
}

=======
>>>>>>> 3f5ea77fc33d926396c7918191605622bee1c530

// SEO: Article titles render as <h2> tags. Dates render in <time datetime="">.
// All post descriptions are raw text. This page is fully crawlable.

export const Route = createFileRoute('/blog/')({
  head: () => ({
    meta: [
      { title: 'Window Treatment Tips, Guides & Local Advice | iL Progetto LLC San Diego' },
      {
        name: 'description',
        content:
          'Expert window treatment advice for San Diego homeowners — blackout shade guides, motorized blind integration, cellular shade energy savings, and local neighborhood buying guides. Written by iL Progetto LLC, San Diego\'s mobile window treatment specialists.',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Window Treatment Tips, Guides & Local Advice | iL Progetto LLC San Diego' },
      { property: 'og:description', content: "Expert window treatment advice for San Diego homeowners — blackout shade guides, motorized blind integration, cellular shade energy savings, and local neighborhood buying guides. Written by iL Progetto LLC, San Diego's mobile window treatment specialists." },
      { property: 'og:url', content: `${SITE_URL}/blog/` },
      { property: 'og:image', content: `${SITE_URL}/images/og-image.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `${SITE_URL}/images/og-image.jpg` },
      { name: 'twitter:title', content: 'Window Treatment Tips, Guides & Local Advice | iL Progetto LLC San Diego' },
      { name: 'twitter:description', content: "Expert window treatment advice for San Diego homeowners — blackout shade guides, motorized blind integration, cellular shade energy savings, and local neighborhood buying guides. Written by iL Progetto LLC, San Diego's mobile window treatment specialists." },
    ],
    links: [
      { rel: 'canonical', href: `${SITE_URL}/blog/` },
    ],
  }),
  component: BlogIndexPage,
})

const CATEGORY_LABELS: Record<string, string> = {
  tips: 'Tips',
  guides: 'Guide',
  local: 'Local',
  products: 'Products',
}

function BlogIndexPage() {
  const posts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
  const [lead, ...rest] = posts

  return (
    <div>
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header
        className="px-4 md:px-10 lg:px-20 py-20 md:py-28"
        style={{ background: 'var(--warm)' }}
      >
        <div className="max-w-[680px]">
          <p
            className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-5"
            style={{ color: 'var(--sand)' }}
          >
            <span className="inline-block w-8 h-px bg-[var(--sand)]" aria-hidden="true" />
            Window Treatment Advice
          </p>
          <h1
            className="font-[300] leading-[1.04] tracking-[-0.015em] mb-6"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(38px, 5vw, 66px)' }}
          >
            Tips, Guides &{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Local Insight
            </em>
          </h1>
          <p
            className="text-[16px] leading-[1.85]"
            style={{ color: 'var(--mid)' }}
          >
            Practical advice on window treatments for San Diego and Southern California homes —
            from energy savings and blackout solutions to smart home integration and local
            neighborhood guides.
          </p>
        </div>
      </header>

      <section className="px-4 md:px-10 lg:px-20 py-16" aria-label="Articles">

        {/* ── Lead article ────────────────────────────────────────────── */}
        {lead && (
          <Link
            to="/blog/$slug"
            params={{ slug: lead.slug }}
            className="block group mb-16 pb-16 border-b"
            style={{ borderColor: 'var(--hairline)' }}
            aria-label={stripHtml(lead.title)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase px-3 py-1 border"
                    style={{ borderColor: 'var(--sand-light)', color: 'var(--sand)', background: 'var(--sand-pale)' }}
                  >
                    {CATEGORY_LABELS[lead.category] ?? lead.category}
                  </span>
                  <time
                    dateTime={lead.publishedAt}
                    className="text-[12px]"
                    style={{ color: 'var(--mid)' }}
                  >
                    {new Date(lead.publishedAt).toLocaleDateString('en-US', {
                      month: 'long', day: 'numeric', year: 'numeric',
                    })}
                  </time>
                </div>
                <h2
                  className="font-[300] leading-[1.1] mb-4 group-hover:text-[var(--sand)] transition-colors"
                  style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3.5vw, 44px)' }}
                  dangerouslySetInnerHTML={{ __html: lead.title }}
                />
                <p
                  className="text-[15px] leading-[1.85] mb-6"
                  style={{ color: 'var(--mid)' }}
                  dangerouslySetInnerHTML={{ __html: lead.description }}
                />
                <div className="flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase" style={{ color: 'var(--sand)' }}>
                  Read Article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
              <div
                className="hidden lg:block border-l pl-12"
                style={{ borderColor: 'var(--hairline)' }}
              >
                <p className="text-[11px] tracking-[0.16em] uppercase mb-4" style={{ color: 'var(--mid)' }}>
                  In this article
                </p>
                <ul className="space-y-3 list-none">
                  {lead.sections.slice(0, 4).map((s, i) => (
                    s.heading && (
                      <li key={i} className="flex items-start gap-3 text-[14px]" style={{ color: 'var(--mid)' }}>
                        <span style={{ color: 'var(--sand-light)' }}>—</span>
                        {stripHtml(s.heading)}
                      </li>
                    )
                  ))}
                </ul>
                <p className="text-[12px] mt-6" style={{ color: 'var(--mid)' }}>
                  {lead.readingMinutes} min read
                </p>
              </div>
            </div>
          </Link>
        )}

        {/* ── Article grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {rest.map((post) => (
            <article key={post.slug} className="blog-card relative group">
              <Link to="/blog/$slug" params={{ slug: post.slug }} className="blog-card-link" aria-label={`Read: ${stripHtml(post.title)}`} />
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 border" style={{ borderColor: 'var(--hairline)', color: 'var(--mid)' }}>
                  {CATEGORY_LABELS[post.category] ?? post.category}
                </span>
                <time dateTime={post.publishedAt} className="text-[12px]" style={{ color: 'var(--mid)' }}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </time>
              </div>
              <h2 className="blog-card-title font-[300] leading-[1.15] mb-3 transition-colors" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(20px, 2vw, 26px)' }}
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
              <p className="text-[14px] leading-[1.8] mb-6" style={{ color: 'var(--mid)' }} dangerouslySetInnerHTML={{ __html: post.description }} />
              <span className="read-btn">
                Read Full Article
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-10 lg:px-20 py-16 border-t" style={{ borderColor: 'var(--hairline)', background: 'var(--warm)' }}>
        <div className="flex items-center justify-between flex-wrap gap-6">
          <div>
            <p className="text-[15px] mb-1" style={{ color: 'var(--ink)' }}>Ready to explore our product range?</p>
            <p className="text-[14px]" style={{ color: 'var(--mid)' }}>Browse roller shades, motorized systems, zebra shades, and more.</p>
          </div>
          <Link to="/catalog" className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[11px] tracking-[0.18em] uppercase border" style={{ borderColor: 'var(--ink)', color: 'var(--ink)' }}>
            Browse Catalog <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
