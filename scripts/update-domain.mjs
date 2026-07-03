/**
 * update-domain.mjs
 * Usage: node scripts/update-domain.mjs https://www.yournewdomain.com
 *
 * Updates sitemap.xml and robots.txt to the new domain.
 * Everything else reads from VITE_SITE_URL in .env.local automatically.
 */
import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
const root  = resolve(__dir, '..')
const newDomain = process.argv[2]

if (!newDomain?.startsWith('https://')) {
  console.error('Usage: node scripts/update-domain.mjs https://www.yournewdomain.com')
  process.exit(1)
}

const OLD = 'https://www.progettoshades.com'

for (const rel of ['public/sitemap.xml', 'public/robots.txt']) {
  const p = resolve(root, rel)
  const src = readFileSync(p, 'utf8')
  const out = src.replaceAll(OLD, newDomain)
  writeFileSync(p, out)
  const n = src.split(OLD).length - 1
  console.log(`✓ ${rel}  (${n} replacement${n !== 1 ? 's' : ''})`)
}

console.log(`\n✅ Done. Also set in .env.local:\n   VITE_SITE_URL=${newDomain}\n   ALLOWED_ORIGIN=${newDomain}`)
