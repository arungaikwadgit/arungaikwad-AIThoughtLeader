import { useMemo, useState } from 'react'
import { ButtonLink } from '../components/ButtonLink'
import { getAllArticles, getAllTags } from '../utils/articles'

export function Articles() {
  const all = useMemo(() => getAllArticles(), [])
  const tags = useMemo(() => getAllTags(all), [all])
  const [selected, setSelected] = useState<string>('All')

  const filtered = useMemo(() => {
    if (selected === 'All') return all
    return all.filter(a => a.tags.includes(selected))
  }, [all, selected])

  return (
    <section className="section">
      <div className="card pad">
        <div className="row">
          <h2 style={{ margin: 0 }}>Articles</h2>
          <ButtonLink to="/" className="pill">Back</ButtonLink>
        </div>

        <div className="row" style={{ marginTop: 10 }}>
          <div className="small">Filter:</div>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            <button className={`pill ${selected==='All'?'primary':''}`} onClick={() => setSelected('All')}>All</button>
            {tags.map(t => (
              <button key={t} className={`pill ${selected===t?'primary':''}`} onClick={() => setSelected(t)}>{t}</button>
            ))}
          </div>
        </div>

        <div className="list" style={{ marginTop: 14 }}>
          {filtered.map(a => (
            <div key={a.slug} className="card pad" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div className="row">
                <div>
                  <h3 style={{ margin: 0 }}>{a.title}</h3>
                  <div className="small">{a.summary || ''}</div>
                  <div className="tag-row">
                    {a.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
                <ButtonLink to={`/articles/${a.slug}`} className="primary">Read</ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
