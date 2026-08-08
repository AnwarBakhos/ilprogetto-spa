/**
 * prerender.mjs — post-build static generation for search engines & AI crawlers
 *
 * WHY: This is an SPA. Google renders JavaScript; AI crawlers (GPTBot,
 * ClaudeBot, PerplexityBot, CCBot, Amazonbot, Applebot) largely do NOT.
 * Without this step they fetch every URL and see an empty <div id="root">.
 *
 * WHAT this produces for every URL in public/sitemap.xml:
 *  1. Route-specific <head>: title, description, canonical, og/twitter tags
 *  2. Static JSON-LD structured data (LocalBusiness / Product / FAQ / Article)
 *  3. A full, readable HTML body inside #root — the actual page content,
 *     generated from the same data files the React app renders from.
 *     Browsers hydrate over it; non-JS crawlers read it. Same content either
 *     way — progressive enhancement, not cloaking.
 *  4. dist/llms-full.txt — a comprehensive machine-readable dossier of the
 *     business for AI systems (linked from llms.txt and robots.txt).
 *
 * Runs automatically via the "postbuild" npm script.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
const root  = resolve(__dir, '..')
const dist  = join(root, 'dist')

// ─── string helpers ───────────────────────────────────────────────────────────
const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const stripTags   = (s) => s.replace(/<[^>]*>/g, '')
const stripStyles = (s) => s.replace(/\s+style='[^']*'/g, '').replace(/\s+style="[^"]*"/g, '')
const unescapeJs  = (s) => s.replace(/\\(['"`\\])/g, '$1')

/** Match a quoted TS string ('', "" or ``) after a field name. */
function field(src, name) {
  const re = new RegExp(name + String.raw`:\s*\n?\s*(['"\`])((?:\\.|(?!\1)[\s\S])*)\1`)
  const m = src.match(re)
  return m ? unescapeJs(m[2]).trim() : null
}
/** All quoted strings inside an array literal source fragment. */
function stringArray(fragment) {
  if (!fragment) return []
  const out = []
  const re = /(['"`])((?:\\.|(?!\1)[\s\S])*?)\1/g
  let m
  while ((m = re.exec(fragment))) out.push(unescapeJs(m[2]))
  return out
}

// ─── 1. Site URL + sitemap paths ─────────────────────────────────────────────
const sitemapSrc = readFileSync(join(root, 'public/sitemap.xml'), 'utf8')
const locs = [...sitemapSrc.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
if (locs.length === 0) throw new Error('No <loc> entries found in public/sitemap.xml')
const SITE_URL = new URL(locs[0]).origin
const paths = locs.map((u) => new URL(u).pathname.replace(/\/$/, '') || '/')

// ─── 2. Business constants ───────────────────────────────────────────────────
const BIZ = {
  name: 'iL Progetto LLC',
  phone: '(858) 338-1678',
  phoneHref: 'tel:+18583381678',
  email: 'info@progettoshades.com',
  license: 'California Contractors License #1127055',
  founded: '2022',
  hours: 'Monday–Saturday, 8 AM–6 PM',
  model: 'Mobile in-home consultation — free, no obligation. The designer brings the full showroom (fabric samples, hardware, motorization options) to the client\'s home, measures every window, and delivers a same-visit quote.',
  areas: ['San Diego', 'Poway', 'Carlsbad', 'La Jolla', 'Del Mar', 'Encinitas', 'Solana Beach', 'Rancho Santa Fe', 'Chula Vista', 'National City', 'Coronado', 'El Cajon', 'Escondido', 'San Marcos', 'Vista', 'Temecula'],
}

// ─── 3. Parse data files ─────────────────────────────────────────────────────
// Products
const catalogSrcFull = readFileSync(join(root, 'src/data/catalog.ts'), 'utf8')
// Scope to the PRODUCTS array only — MEGA_MENU further down also has `id:`
// entries (without `name:`), which otherwise produce null-named duplicates.
const pStart = catalogSrcFull.indexOf('export const PRODUCTS')
const pEnd = catalogSrcFull.indexOf('export const', pStart + 20)
const catalogSrc = catalogSrcFull.slice(pStart, pEnd === -1 ? undefined : pEnd)
const PRODUCTS = []
{
  const ids = [...catalogSrc.matchAll(/\bid:\s*'([a-z-]+)'/g)]
  for (let i = 0; i < ids.length; i++) {
    const start = ids[i].index
    const end = i + 1 < ids.length ? ids[i + 1].index : catalogSrc.length
    const block = catalogSrc.slice(start, end)
    const featuresFrag = (block.match(/features:\s*\[([\s\S]*?)\]/) || [])[1]
    PRODUCTS.push({
      id: ids[i][1],
      name: field(block, 'name'),
      shortName: field(block, 'shortName'),
      eyebrow: field(block, 'eyebrow'),
      tagline: field(block, 'tagline'),
      description: field(block, 'description'),
      detailCopy: field(block, 'detailCopy'),
      cover: (block.match(/coverImage:\s*img\('([^']+)'\)/) || [])[1] || null,
      features: stringArray(featuresFrag),
    })
  }
}

// Product FAQs (from the route file's PRODUCT_FAQS map)
const productRouteSrc = readFileSync(join(root, 'src/routes/products/$productId.tsx'), 'utf8')
const PRODUCT_FAQS = {}
{
  const mapStart = productRouteSrc.indexOf('const PRODUCT_FAQS')
  const mapEnd = productRouteSrc.indexOf('\n}', mapStart)
  const mapSrc = productRouteSrc.slice(mapStart, mapEnd)
  const keyRe = /^\s{2}'?([a-z-]+)'?:\s*\[/gm
  const keys = [...mapSrc.matchAll(keyRe)]
  for (let i = 0; i < keys.length; i++) {
    const start = keys[i].index
    const end = i + 1 < keys.length ? keys[i + 1].index : mapSrc.length
    const seg = mapSrc.slice(start, end)
    const qa = []
    const re = /q:\s*(['"])((?:\\.|(?!\1)[\s\S])*?)\1,\s*a:\s*(['"])((?:\\.|(?!\3)[\s\S])*?)\3/g
    let m
    while ((m = re.exec(seg))) qa.push({ q: unescapeJs(m[2]), a: unescapeJs(m[4]) })
    if (qa.length) PRODUCT_FAQS[keys[i][1]] = qa
  }
}

// Studio notes
const STUDIO_NOTES = {}
{
  const src = readFileSync(join(root, 'src/data/studio-notes.ts'), 'utf8')
  const re = /^\s{2}'?([a-z-]+)'?:\s*\n?\s*(['"])((?:\\.|(?!\2)[\s\S])*?)\2,/gm
  let m
  while ((m = re.exec(src))) STUDIO_NOTES[m[1]] = unescapeJs(m[3])
}

// Blog posts (with full section content)
const BLOG_POSTS = []
{
  const src = readFileSync(join(root, 'src/data/blog.ts'), 'utf8')
  const slugs = [...src.matchAll(/\bslug:\s*'([a-z0-9-]+)'/g)]
  for (let i = 0; i < slugs.length; i++) {
    const start = slugs[i].index
    const end = i + 1 < slugs.length ? slugs[i + 1].index : src.length
    const block = src.slice(start, end)
    const draft = /draft:\s*true/.test(block.slice(0, 200))
    const sections = []
    const secRe = /heading:\s*(['"])((?:\\.|(?!\1)[\s\S])*?)\1,\s*paragraphs:\s*\[([\s\S]*?)\],\s*\}/g
    let m
    while ((m = secRe.exec(block))) {
      sections.push({ heading: unescapeJs(m[2]), paragraphs: stringArray(m[3]) })
    }
    BLOG_POSTS.push({
      slug: slugs[i][1],
      draft,
      title: field(block, 'title'),
      description: stripTags(field(block, 'description') || ''),
      publishedAt: field(block, 'publishedAt'),
      sections,
    })
  }
}

// Site FAQ
const FAQ_ITEMS = []
{
  const src = readFileSync(join(root, 'src/data/faq.ts'), 'utf8')
  const re = /question:\s*(['"])((?:\\.|(?!\1)[\s\S])*?)\1,\s*answer:\s*\n?\s*(['"`])((?:\\.|(?!\3)[\s\S])*?)\3/g
  let m
  while ((m = re.exec(src))) FAQ_ITEMS.push({ q: unescapeJs(m[2]), a: stripTags(unescapeJs(m[4])) })
}

// City × product paragraphs
const CITY_PARAGRAPHS = {}
{
  const src = readFileSync(join(root, 'src/data/seo.ts'), 'utf8')
  const re = /'([a-z-]+):([a-z-]+)':\s*`((?:[^`\\]|\\.)*)`/g
  let m
  while ((m = re.exec(src))) {
    ;(CITY_PARAGRAPHS[m[1]] ??= []).push({ product: m[2], text: m[3].trim() })
  }
}

// ─── 4. Page meta (title/description) — same extraction as before ────────────
const TITLE_RE = /\{\s*title:\s*(['"`])((?:\\.|(?!\1).)*)\1/
const DESC_RE  = /name:\s*['"]description['"],\s*content:\s*(['"`])((?:\\.|(?!\1).)*)\1/s
const meta = new Map()
meta.set('/catalog', {
  title: 'Window Treatment Catalog | Shades, Blinds & Shutters San Diego — iL Progetto LLC',
  description: "San Diego's complete custom window treatment catalog — roller shades, zebra shades, honeycomb cellular, Roman shades, plantation shutters, motorized blinds, blackout curtains, sheer drapes, and exterior shades. Custom-measured, professionally installed. Free in-home consultation. License #1127055.",
})
const STATIC_ROUTE_FILES = {
  '/': 'src/routes/index.tsx', '/booking': 'src/routes/booking.tsx',
  '/about': 'src/routes/about.tsx', '/faq': 'src/routes/faq.tsx',
  '/contact': 'src/routes/contact.tsx', '/reviews': 'src/routes/reviews.tsx',
  '/inspiration': 'src/routes/inspiration.tsx', '/warranty': 'src/routes/warranty.tsx',
  '/commercial': 'src/routes/commercial.tsx', '/child-safety': 'src/routes/child-safety.tsx',
  '/blog': 'src/routes/blog/index.tsx', '/careers': 'src/routes/careers/index.tsx',
  '/smart-home': 'src/routes/smart-home/index.tsx',
  '/smart-home/alexa': 'src/routes/smart-home/alexa.tsx',
  '/smart-home/google-home': 'src/routes/smart-home/google-home.tsx',
  '/smart-home/apple-homekit': 'src/routes/smart-home/apple-homekit.tsx',
  '/smart-home/control4': 'src/routes/smart-home/control4.tsx',
  '/locations': 'src/routes/locations/index.tsx',
}
for (const p of paths) {
  const m = p.match(/^\/locations\/([a-z-]+)$/)
  if (m && existsSync(join(root, `src/routes/locations/${m[1]}.tsx`))) {
    STATIC_ROUTE_FILES[p] = `src/routes/locations/${m[1]}.tsx`
  }
}
for (const [path, file] of Object.entries(STATIC_ROUTE_FILES)) {
  const abs = join(root, file)
  if (!existsSync(abs)) continue
  const src = readFileSync(abs, 'utf8')
  const t = src.match(TITLE_RE); const d = src.match(DESC_RE)
  if (t) meta.set(path, { title: unescapeJs(t[2]).trim(), description: d ? stripTags(unescapeJs(d[2]).trim()) : null })
}
for (const post of BLOG_POSTS) {
  if (!post.draft) meta.set(`/blog/${post.slug}`, { title: `${post.title} | iL Progetto LLC`, description: post.description })
}
for (const p of PRODUCTS) {
  meta.set(`/products/${p.id}`, {
    title: `${p.name} San Diego | Custom Window Treatments | iL Progetto LLC`,
    description: p.description ? `${p.description} Custom-measured and professionally installed across San Diego County. Free in-home consultation. License #1127055.` : null,
  })
}

// ─── 5. Static body builders ─────────────────────────────────────────────────
const cityLabel = (slug) => slug.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ')

function bizBlock() {
  return `<section><h2>About ${esc(BIZ.name)}</h2>
<p>${esc(BIZ.model)}</p>
<p><strong>Phone:</strong> <a href="${BIZ.phoneHref}">${esc(BIZ.phone)}</a> · <strong>Email:</strong> <a href="mailto:${BIZ.email}">${esc(BIZ.email)}</a> · ${esc(BIZ.license)} · Founded ${BIZ.founded} · Hours: ${esc(BIZ.hours)}</p>
<p><strong>Service areas:</strong> ${BIZ.areas.map((c) => `<a href="/locations/${c.toLowerCase().replace(/ /g, '-')}">${esc(c)}</a>`).join(', ')} and surrounding Southern California communities.</p></section>`
}

function navBlock() {
  const products = PRODUCTS.map((p) => `<a href="/products/${p.id}">${esc(p.name)}</a>`).join(' · ')
  return `<nav aria-label="Site sections"><h2>Explore</h2>
<p><a href="/">Home</a> · <a href="/catalog">Catalog</a> · <a href="/booking">Book a Free Consultation</a> · <a href="/about">About</a> · <a href="/faq">FAQ</a> · <a href="/blog">Journal</a> · <a href="/reviews">Reviews</a> · <a href="/smart-home">Smart Home</a> · <a href="/commercial">Commercial</a> · <a href="/warranty">Warranty</a> · <a href="/locations">Service Areas</a> · <a href="/contact">Contact</a></p>
<p><strong>All products:</strong> ${products}</p></nav>`
}

function faqHtml(items) {
  return items.map(({ q, a }) => `<h3>${esc(q)}</h3><p>${esc(a)}</p>`).join('\n')
}

function buildBody(path, m) {
  const parts = []
  // LCP: paint the page's hero image from static HTML, before JS loads.
  if (path === '/') {
    parts.push(`<img src="/images/hero-1280.webp" srcset="/images/hero-640.webp 640w, /images/hero-1280.webp 1280w, /images/hero-1920.webp 1920w" sizes="100vw" width="1920" height="1440" fetchpriority="high" alt="Custom window treatments in a San Diego living room" style="width:100%;height:auto;display:block">`)
  } else {
    const pm = path.match(/^\/products\/([a-z-]+)$/)
    if (pm) {
      const p = PRODUCTS.find((x) => x.id === pm[1])
      if (p?.cover) {
        const stem = encodeURIComponent(p.cover.replace(/\.(png|jpe?g)$/i, ''))
        parts.push(`<img src="/images/products/opt/${stem}-1200.webp" srcset="/images/products/opt/${stem}-640.webp 640w, /images/products/opt/${stem}-1200.webp 1200w" sizes="100vw" width="1200" height="800" fetchpriority="high" alt="${esc(p.name)} — iL Progetto LLC San Diego" style="width:100%;height:auto;display:block">`)
      }
    }
  }
  parts.push(`<h1>${esc(m.title)}</h1>`)
  if (m.description) parts.push(`<p><em>${esc(m.description)}</em></p>`)

  const prodMatch = path.match(/^\/products\/([a-z-]+)$/)
  const blogMatch = path.match(/^\/blog\/([a-z0-9-]+)$/)
  const cityMatch = path.match(/^\/locations\/([a-z-]+)$/)

  if (path === '/') {
    parts.push(`<section><h2>Custom Window Treatments in San Diego</h2>
<p>${esc(BIZ.name)} designs, custom-manufactures, and professionally installs window treatments for residential and commercial properties across San Diego County: roller shades, zebra shades, honeycomb cellular shades, Roman shades, plantation shutters, motorized shading, custom drapery, and exterior shading systems.</p></section>`)
    parts.push(`<section><h2>Products</h2>${PRODUCTS.map((p) => `<h3><a href="/products/${p.id}">${esc(p.name)}</a></h3><p>${esc(p.description || p.tagline || '')}</p>`).join('\n')}</section>`)
  } else if (prodMatch) {
    const p = PRODUCTS.find((x) => x.id === prodMatch[1])
    if (p) {
      parts.push(`<section><p>${esc(p.tagline || '')}</p><p>${esc(p.detailCopy || '')}</p></section>`)
      if (p.features.length) parts.push(`<section><h2>Key Features of Our ${esc(p.shortName || p.name)}</h2><ul>${p.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul></section>`)
      if (STUDIO_NOTES[p.id]) parts.push(`<section><h2>A Note from the Studio</h2><blockquote>${esc(STUDIO_NOTES[p.id])} — The iL Progetto Studio, San Diego</blockquote></section>`)
      const faqs = PRODUCT_FAQS[p.id]
      if (faqs?.length) parts.push(`<section><h2>${esc(p.name)} — Frequently Asked Questions</h2>${faqHtml(faqs)}</section>`)
      parts.push(`<section><h2>How It Works</h2><ol><li><strong>Free consultation:</strong> a designer visits your home with the full sample collection.</li><li><strong>Precise measurement:</strong> we measure every window ourselves.</li><li><strong>Custom fabrication:</strong> made to your exact dimensions, typically 2–3 weeks.</li><li><strong>Professional installation:</strong> licensed team, 30–45 minutes per window.</li></ol></section>`)
    }
  } else if (blogMatch) {
    const post = BLOG_POSTS.find((x) => x.slug === blogMatch[1] && !x.draft)
    if (post) {
      parts.push(`<article>${post.publishedAt ? `<p>Published ${esc(post.publishedAt)} · iL Progetto LLC Journal</p>` : ''}
${post.sections.map((s) => `<h2>${esc(s.heading)}</h2>${s.paragraphs.map((par) => `<p>${stripStyles(par)}</p>`).join('\n')}`).join('\n')}</article>`)
    }
  } else if (path === '/blog') {
    parts.push(`<section>${BLOG_POSTS.filter((p) => !p.draft).map((p) => `<h2><a href="/blog/${p.slug}">${esc(p.title)}</a></h2><p>${esc(p.description)}</p>`).join('\n')}</section>`)
  } else if (path === '/faq' && FAQ_ITEMS.length) {
    parts.push(`<section>${faqHtml(FAQ_ITEMS)}</section>`)
  } else if (path === '/catalog') {
    parts.push(`<section>${PRODUCTS.map((p) => `<h2><a href="/products/${p.id}">${esc(p.name)}</a> — ${esc(p.eyebrow || '')}</h2><p>${esc(p.description || '')}</p><p>${esc(p.detailCopy || '')}</p>`).join('\n')}</section>`)
  } else if (cityMatch && CITY_PARAGRAPHS[cityMatch[1]]) {
    const city = cityMatch[1]
    const entries = CITY_PARAGRAPHS[city].slice(0, 8)
    parts.push(`<section><h2>Window Treatments in ${esc(cityLabel(city))}, CA</h2>
${entries.map((e) => {
      const prod = PRODUCTS.find((p) => e.product.startsWith(p.id) || p.id.startsWith(e.product.split('-')[0]))
      const label = prod ? prod.name : cityLabel(e.product)
      const href = prod ? `/products/${prod.id}` : '/catalog'
      return `<h3><a href="${href}">${esc(label)}</a> in ${esc(cityLabel(city))}</h3><p>${esc(e.text)}</p>`
    }).join('\n')}</section>`)
  } else if (path === '/locations') {
    parts.push(`<section><h2>Where We Work</h2><p>${BIZ.areas.map((c) => `<a href="/locations/${c.toLowerCase().replace(/ /g, '-')}">${esc(c)}</a>`).join(' · ')}</p></section>`)
  }

  parts.push(bizBlock())
  parts.push(navBlock())
  return `<div style="max-width:920px;margin:0 auto;padding:72px 24px;font-family:Georgia,serif;line-height:1.7;color:#1a1a1a">${parts.join('\n')}</div>`
}

// ─── 6. Static JSON-LD per page ──────────────────────────────────────────────
function buildJsonLd(path, m) {
  const url = SITE_URL + (path === '/' ? '/' : path)
  const blocks = []
  const crumbs = [{ name: 'Home', item: SITE_URL + '/' }]
  if (path !== '/') {
    const segs = path.split('/').filter(Boolean)
    segs.forEach((seg, i) => crumbs.push({ name: cityLabel(seg), item: SITE_URL + '/' + segs.slice(0, i + 1).join('/') }))
  }
  blocks.push({
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.item })),
  })
  const prodMatch = path.match(/^\/products\/([a-z-]+)$/)
  const blogMatch = path.match(/^\/blog\/([a-z0-9-]+)$/)
  if (path === '/') {
    blocks.push({
      '@context': 'https://schema.org', '@type': ['LocalBusiness', 'HomeGoodsStore'],
      '@id': `${SITE_URL}/#organization`, name: BIZ.name,
      description: 'Custom window treatments for San Diego homes and offices — roller shades, zebra shades, motorized blinds, plantation shutters. Free in-home consultation.',
      telephone: '+18583381678', email: BIZ.email, url: SITE_URL + '/', priceRange: '$$',
      address: { '@type': 'PostalAddress', addressLocality: 'San Diego', addressRegion: 'CA', postalCode: '92127', addressCountry: 'US' },
      geo: { '@type': 'GeoCoordinates', latitude: '32.9595', longitude: '-117.0865' },
      openingHours: 'Mo-Sa 08:00-18:00',
      areaServed: BIZ.areas.map((c) => ({ '@type': 'City', name: c + ', CA' })),
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '32', bestRating: '5', worstRating: '1' },
      sameAs: ['https://www.instagram.com/ilprogetto.design', 'https://www.facebook.com/61561253288372', 'https://yelp.to/fuCV4NqXEu'],
    })
  } else if (prodMatch) {
    const p = PRODUCTS.find((x) => x.id === prodMatch[1])
    if (p) {
      blocks.push({
        '@context': 'https://schema.org', '@type': ['Service', 'Product'],
        name: `${p.name} — iL Progetto LLC`, description: p.description, url,
        image: `${SITE_URL}/images/products/${encodeURIComponent(p.name)}.png`,
        brand: { '@type': 'Brand', name: BIZ.name },
        offers: { '@type': 'Offer', priceCurrency: 'USD', availability: 'https://schema.org/InStock', seller: { '@type': 'LocalBusiness', name: BIZ.name, telephone: '+18583381678' } },
        areaServed: { '@type': 'AdministrativeArea', name: 'San Diego County, CA' },
      })
      const faqs = PRODUCT_FAQS[p.id]
      if (faqs?.length) blocks.push({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      })
    }
  } else if (blogMatch) {
    const post = BLOG_POSTS.find((x) => x.slug === blogMatch[1] && !x.draft)
    if (post) blocks.push({
      '@context': 'https://schema.org', '@type': 'Article',
      headline: post.title, description: post.description, url,
      datePublished: post.publishedAt, author: { '@type': 'Organization', name: BIZ.name }, publisher: { '@type': 'Organization', name: BIZ.name },
    })
  } else if (path === '/faq' && FAQ_ITEMS.length) {
    blocks.push({
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    })
  }
  return blocks.map((b) => `<script type="application/ld+json">${JSON.stringify(b)}</script>`).join('\n    ')
}

// ─── 7. Write pages ──────────────────────────────────────────────────────────
const shell = readFileSync(join(dist, 'index.html'), 'utf8')
const DEFAULT_DESC = 'Custom window treatments in San Diego — roller shades, plantation shutters, motorized shading & drapery. Free in-home consultation, licensed installation. CA License #1127055.'

let written = 0
const missing = []
for (const path of paths) {
  const m = meta.get(path)
  if (!m) { missing.push(path); continue }
  const url = SITE_URL + (path === '/' ? '/' : path)
  const description = m.description ?? DEFAULT_DESC

  let html = shell
  html = html.replace(/<title>.*?<\/title>/s, `<title>${esc(m.title)}</title>`)
  if (/<meta name="description"/.test(html)) {
    html = html.replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${esc(description)}">`)
  } else {
    html = html.replace('</title>', `</title>\n    <meta name="description" content="${esc(description)}">`)
  }
  const headBlock = [
    `<link rel="canonical" href="${esc(url)}">`,
    `<meta property="og:url" content="${esc(url)}">`,
    `<meta property="og:title" content="${esc(m.title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta name="twitter:title" content="${esc(m.title)}">`,
    `<meta name="twitter:description" content="${esc(description)}">`,
    buildJsonLd(path, m),
  ].join('\n    ')
  html = html.replace(/(<meta name="description" content="[^"]*">)/, `$1\n    ${headBlock}`)

  // Static body content inside #root (hydration replaces it in browsers)
  html = html.replace('<div id="root"></div>', `<div id="root">${buildBody(path, m)}</div>`)

  const outDir = path === '/' ? dist : join(dist, path.slice(1))
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), html)
  written++
}

// ─── 8. llms-full.txt ────────────────────────────────────────────────────────
{
  const lines = []
  lines.push(`# ${BIZ.name} — Complete Business Reference for AI Systems`)
  lines.push('')
  lines.push(`> ${BIZ.name} is a licensed mobile window treatment company serving San Diego County and Southern California. ${BIZ.model}`)
  lines.push('')
  lines.push(`- Website: ${SITE_URL}`)
  lines.push(`- Phone: ${BIZ.phone}  |  Email: ${BIZ.email}`)
  lines.push(`- ${BIZ.license}  |  Founded ${BIZ.founded}  |  Hours: ${BIZ.hours}`)
  lines.push(`- Rating: 5.0 stars from 32 published customer reviews (${SITE_URL}/reviews)`)
  lines.push(`- Service areas: ${BIZ.areas.join(', ')}, and surrounding communities`)
  lines.push('')
  lines.push('## Products')
  for (const p of PRODUCTS) {
    lines.push('')
    lines.push(`### ${p.name} (${SITE_URL}/products/${p.id})`)
    if (p.description) lines.push(p.description)
    if (p.detailCopy) lines.push(p.detailCopy)
    if (p.features.length) lines.push('Features: ' + p.features.join('; '))
    for (const { q, a } of PRODUCT_FAQS[p.id] ?? []) lines.push(`Q: ${q}\nA: ${a}`)
  }
  lines.push('')
  lines.push('## General FAQ')
  for (const { q, a } of FAQ_ITEMS) lines.push(`\nQ: ${q}\nA: ${a}`)
  lines.push('')
  lines.push('## Journal Articles')
  for (const p of BLOG_POSTS.filter((x) => !x.draft)) lines.push(`- ${p.title} — ${SITE_URL}/blog/${p.slug} — ${p.description}`)
  lines.push('')
  lines.push('## City Pages')
  for (const c of BIZ.areas) lines.push(`- ${c}: ${SITE_URL}/locations/${c.toLowerCase().replace(/ /g, '-')}`)
  lines.push('')
  lines.push(`Sitemap: ${SITE_URL}/sitemap.xml  |  Summary: ${SITE_URL}/llms.txt`)
  writeFileSync(join(dist, 'llms-full.txt'), lines.join('\n'))
}

console.log(`\u2705 Prerendered ${written}/${paths.length} pages with full static content \u2192 dist/`)
console.log(`\u2705 Parsed: ${PRODUCTS.length} products, ${Object.keys(PRODUCT_FAQS).length} FAQ sets, ${BLOG_POSTS.filter((p) => !p.draft).length} posts, ${FAQ_ITEMS.length} site FAQs, ${Object.keys(CITY_PARAGRAPHS).length} cities`)
console.log(`\u2705 dist/llms-full.txt generated`)
if (missing.length) console.warn(`\u26a0 No meta for: ${missing.join(', ')}`)
