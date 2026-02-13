import { writeFileSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const USERNAME = process.env.GH_USERNAME || 'arungaikwadgit'
const REPO = 'arungaikwad-AIThoughtLeader'
const BASE_URL = `https://${USERNAME}.github.io/${REPO}`

function listMarkdownSlugs(dir) {
  const entries = readdirSync(dir, { withFileTypes: true })
  return entries
    .filter(e => e.isFile() && e.name.endsWith('.md'))
    .map(e => e.name.replace(/\.md$/, ''))
}

const articleDir = join(process.cwd(), 'src', 'content', 'articles')
const slugs = listMarkdownSlugs(articleDir)

const staticRoutes = [
  '/',
  '/case-studies',
  '/articles',
  '/operating-manual',
  '/ai-lab',
  '/now',
  '/resources',
]

const articleRoutes = slugs.map(s => `/articles/${s}`)

const urls = [...staticRoutes, ...articleRoutes].map(p => `${BASE_URL}${p}`)

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>
`

writeFileSync(join(process.cwd(), 'public', 'sitemap.xml'), xml, 'utf-8')

const robotsPath = join(process.cwd(), 'public', 'robots.txt')
const robots = readFileSync(robotsPath, 'utf-8')
const updated = robots.replace(/Sitemap:\s.*/g, `Sitemap: ${BASE_URL}/sitemap.xml`)
writeFileSync(robotsPath, updated, 'utf-8')

console.log('Generated public/sitemap.xml and updated public/robots.txt')
