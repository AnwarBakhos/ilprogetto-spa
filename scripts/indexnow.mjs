/**
 * indexnow.mjs — submit every sitemap URL to IndexNow
 *
 * IndexNow gives instant indexing signals to Bing (and Yandex, Seznam,
 * Naver). Bing's index is what ChatGPT search and Microsoft Copilot read
 * from, so this directly feeds AI answer engines.
 *
 * Usage (run after each deploy):   npm run indexnow
 * Key file: public/a3f8c1d94b7e4620985dfe12c6b04a77.txt (served at site root)
 */
import { readFileSync } from 'fs'
import { resolve, dirname, join } from 'path'
import { fileURLToPath } from 'url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const KEY = 'a3f8c1d94b7e4620985dfe12c6b04a77'

const sitemap = readFileSync(join(root, 'public/sitemap.xml'), 'utf8')
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
if (!urls.length) throw new Error('No URLs found in sitemap')
const host = new URL(urls[0]).host

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host,
    key: KEY,
    keyLocation: `https://${host}/${KEY}.txt`,
    urlList: urls,
  }),
})

console.log(`IndexNow: submitted ${urls.length} URLs for ${host} — HTTP ${res.status} ${res.statusText}`)
if (res.status === 200 || res.status === 202) {
  console.log('✅ Accepted. Bing will crawl shortly.')
} else {
  console.log(await res.text())
}
