import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { getArticleBySlug } from '../utils/articles'

export function ArticleDetail() {
  const { slug } = useParams()
  const article = slug ? getArticleBySlug(slug) : undefined

  if (!article) {
    return (
      <section className="section">
        <div className="card pad">
          <h2>Article not found</h2>
          <Link className="pill primary" to="/articles">Back to articles</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="card pad">
        <div className="row">
          <div>
            <div className="kicker">{new Date(article.date).toLocaleDateString()}</div>
            <h2 style={{ marginTop: 6 }}>{article.title}</h2>
            <div className="tag-row">
              {article.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            {article.summary ? <p className="muted">{article.summary}</p> : null}
          </div>
          <Link className="pill primary" to="/articles">All articles</Link>
        </div>
      </div>

      <div className="card pad md" style={{ marginTop: 14 }}>
        <ReactMarkdown>{article.content}</ReactMarkdown>
        {article.sourceUrl ? (
          <div style={{ marginTop: 18 }}>
            <a className="pill" href={article.sourceUrl} target="_blank" rel="noreferrer">View original source</a>
          </div>
        ) : null}
      </div>
    </section>
  )
}
