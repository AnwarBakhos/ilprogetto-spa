/**
 * prerender.mjs — post-build static head injection
 *
 * WHY: This is an SPA. Without this step, every URL serves the same
 * index.html shell — same <title>, no meta description, and (historically)
 * a canonical pointing at the homepage. Google reads that raw HTML and
 * treats all 400 URLs as duplicates of "/", which is why GSC showed
 * 387 not-indexed pages.
 *
 * WHAT: For every URL in public/sitemap.xml, this script writes
 * dist/<path>/index.html — a copy of the built shell with route-specific
 * <title>, meta description, canonical, og:* and twitter:* tags injected.
 * Vercel serves these static files before the SPA rewrite kicks in, so
 * crawlers get correct per-page head without executing JavaScript.
 *
 * Meta sources:
 *  - Static routes: extracted from each route file's head() (title + description)
 *  - /blog/<slug>:  src/data/blog.ts
 *  - /products/<id>: src/data/catalog.ts (same formula as $productId.tsx head())
 *
 * Runs automatically via the "postbuild" npm script.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
const root  = resolve(__dir, '..')
const dist  = join(root, 'dist')

// ─── helpers ──────────────────────────────────────────────────────────────────
const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const stripTags = (s) => s.replace(/<[^>]*>/g, '')
const unescapeJs = (s) => s.replace(/\\(['"`\\])/g, '$1')

/** Extract the first quoted string after a marker regex in TS source. */
function extractString(src, markerRe) {
  const m = src.match(markerRe)
  if (!m) return null
  return unescapeJs(m[2]).trim()
}

const TITLE_RE = /\{\s*title:\s*(['"`])((?:\\.|(?!\1).)*)\1/
const DESC_RE  = /name:\s*['"]description['"],\s*content:\s*(['"`])((?:\\.|(?!\1).)*)\1/s

// ─── 1. Site URL + sitemap paths ─────────────────────────────────────────────
const sitemapSrc = readFileSync(join(root, 'public/sitemap.xml'), 'utf8')
const locs = [...sitemapSrc.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
if (locs.length === 0) throw new Error('No <loc> entries found in public/sitemap.xml')

const SITE_URL = new URL(locs[0]).origin
const paths = locs.map((u) => new URL(u).pathname.replace(/\/$/, '') || '/')

// ─── 2. Build path → {title, description} map ────────────────────────────────
const meta = new Map()

// Routes whose head() is computed from search params — static defaults here.
meta.set('/catalog', {
  title: 'Window Treatment Catalog | Shades, Blinds & Shutters San Diego — iL Progetto LLC',
  description:
    "San Diego's complete custom window treatment catalog — roller shades, zebra shades, honeycomb cellular, Roman shades, plantation shutters, motorized blinds, blackout curtains, sheer drapes, and exterior shades. Custom-measured, professionally installed. Free in-home consultation. License #1127055.",
})

// Static route files
const STATIC_ROUTE_FILES = {
  '/':             'src/routes/index.tsx',
  '/catalog':      'src/routes/catalog.tsx',
  '/booking':      'src/routes/booking.tsx',
  '/about':        'src/routes/about.tsx',
  '/faq':          'src/routes/faq.tsx',
  '/contact':      'src/routes/contact.tsx',
  '/reviews':      'src/routes/reviews.tsx',
  '/inspiration':  'src/routes/inspiration.tsx',
  '/warranty':     'src/routes/warranty.tsx',
  '/commercial':   'src/routes/commercial.tsx',
  '/legal':        'src/routes/legal.tsx',
  '/child-safety': 'src/routes/child-safety.tsx',
  '/blog':         'src/routes/blog/index.tsx',
  '/careers':      'src/routes/careers/index.tsx',
  '/smart-home':   'src/routes/smart-home/index.tsx',
  '/smart-home/alexa':         'src/routes/smart-home/alexa.tsx',
  '/smart-home/google-home':   'src/routes/smart-home/google-home.tsx',
  '/smart-home/apple-homekit': 'src/routes/smart-home/apple-homekit.tsx',
  '/smart-home/control4':      'src/routes/smart-home/control4.tsx',
  '/locations':    'src/routes/locations/index.tsx',
}
// City pages are individual static files: /locations/<city> → locations/<city>.tsx
for (const p of paths) {
  const m = p.match(/^\/locations\/([a-z-]+)$/)
  if (m && existsSync(join(root, `src/routes/locations/${m[1]}.tsx`))) {
    STATIC_ROUTE_FILES[p] = `src/routes/locations/${m[1]}.tsx`
  }
}

for (const [path, file] of Object.entries(STATIC_ROUTE_FILES)) {
  const abs = join(root, file)
  if (!existsSync(abs)) { console.warn(`⚠ missing route file: ${file}`); continue }
  const src = readFileSync(abs, 'utf8')
  const title = extractString(src, TITLE_RE)
  const description = extractString(src, DESC_RE)
  if (title) meta.set(path, { title, description: description ? stripTags(description) : null })
  else console.warn(`⚠ no title extracted from ${file}`)
}

// Blog posts from src/data/blog.ts
{
  const src = readFileSync(join(root, 'src/data/blog.ts'), 'utf8')
  const re = /slug:\s*'([^']+)'\s*,\s*title:\s*(['"])((?:\\.|(?!\2).)*)\2\s*,\s*description:\s*(['"])((?:\\.|(?!\4).)*)\4/gs
  for (const m of src.matchAll(re)) {
    meta.set(`/blog/${m[1]}`, {
      title: `${unescapeJs(m[3])} | iL Progetto LLC`,
      description: stripTags(unescapeJs(m[5])),
    })
  }
}

// Products from src/data/catalog.ts — mirrors $productId.tsx head()
{
  const src = readFileSync(join(root, 'src/data/catalog.ts'), 'utf8')
  const ids = [...src.matchAll(/\bid:\s*'([^']+)'/g)]
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i][1]
    const start = ids[i].index
    const end = i + 1 < ids.length ? ids[i + 1].index : src.length
    const block = src.slice(start, end)
    const name = block.match(/\bname:\s*'((?:\\.|[^'])*)'/)?.[1]
    const desc = block.match(/\bdescription:\s*\n?\s*(['"])((?:\\.|(?!\1).)*)\1/s)?.[2]
    if (!name) continue
    meta.set(`/products/${id}`, {
      title: `${unescapeJs(name)} San Diego | Custom Window Treatments | iL Progetto LLC`,
      description: desc
        ? `${unescapeJs(desc)} Custom-measured and professionally installed across San Diego County. Free in-home consultation. License #1127055.`
        : null,
    })
  }
}

// ─── 3. Inject into shell + write files ──────────────────────────────────────
const shell = readFileSync(join(dist, 'index.html'), 'utf8')
const DEFAULT_DESC =
  'Custom window treatments in San Diego — roller shades, plantation shutters, motorized shading & drapery. Free in-home consultation, licensed installation. CA License #1127055.'

let written = 0
const missing = []

for (const path of paths) {
  const m = meta.get(path)
  if (!m) { missing.push(path); continue }
  const url = SITE_URL + (path === '/' ? '/' : path)
  const title = m.title
  const description = m.description ?? DEFAULT_DESC

  let html = shell
  // Replace <title>
  html = html.replace(/<title>.*?<\/title>/s, `<title>${esc(title)}</title>`)
  // Replace default meta description if present, else inject after title
  if (/<meta name="description"/.test(html)) {
    html = html.replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${esc(description)}">`)
  } else {
    html = html.replace('</title>', `</title>\n    <meta name="description" content="${esc(description)}">`)
  }
  // Inject canonical + og/twitter per-page block after the description
  const block = [
    `<link rel="canonical" href="${esc(url)}">`,
    `<meta property="og:url" content="${esc(url)}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta name="twitter:title" content="${esc(title)}">`,
    `<meta name="twitter:description" content="${esc(description)}">`,
  ].join('\n    ')
  html = html.replace(/(<meta name="description" content="[^"]*">)/, `$1\n    ${block}`)

  const outDir = path === '/' ? dist : join(dist, path.slice(1))
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), html)
  written++
}

console.log(`\u2705 Prerendered ${written}/${paths.length} pages \u2192 dist/`)
if (missing.length) console.warn(`\u26a0 No meta found for: ${missing.join(', ')}`)
