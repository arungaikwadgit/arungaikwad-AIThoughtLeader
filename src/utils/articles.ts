export type ArticleMeta = {
  slug: string
  title: string
  date: string
  tags: string[]
  summary?: string
  sourceUrl?: string
}

export type Article = ArticleMeta & { content: string }

const modules = import.meta.glob('../content/articles/*.md', {
  as: 'raw',
  eager: true,
}) as Record<string, string>

function fileToSlug(path: string): string {
  const file = path.split('/').pop() || ''
  return file.replace(/\.md$/, '')
}

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)

  if (!match) {
    return { data: {}, content: raw }
  }

  const yaml = match[1]
  const content = match[2]

  const data: any = {}

  yaml.split('\n').forEach(line => {
    const [key, ...rest] = line.split(':')
    if (!key) return
    const value = rest.join(':').trim()

    if (value.startsWith('[')) {
      // parse array
      data[key.trim()] = value
        .replace('[', '')
        .replace(']', '')
        .split(',')
        .map(v => v.replace(/"/g, '').trim())
    } else {
      data[key.trim()] = value.replace(/"/g, '').trim()
    }
  })

  return { data, content }
}

export function getAllArticles(): Article[] {
  const items: Article[] = Object.entries(modules).map(([path, raw]) => {
    const slug = fileToSlug(path)
    const { data, content } = parseFrontmatter(raw)

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      tags: Array.isArray(data.tags) ? data.tags : [],
      summary: data.summary,
      sourceUrl: data.sourceUrl,
      content: content.trim(),
    }
  })

  return items.sort((a, b) =>
    (b.date || '').localeCompare(a.date || '')
  )
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find(a => a.slug === slug)
}

export function getAllTags(articles: Article[]): string[] {
  const set = new Set<string>()
  articles.forEach(a => a.tags.forEach(t => set.add(t)))
  return Array.from(set).sort()
}
