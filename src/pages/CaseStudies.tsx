import caseStudies from '../data/case-studies.json'
import { ButtonLink } from '../components/ButtonLink'

export function CaseStudies() {
  return (
    <section className="section">
      <div className="card pad">
        <div className="row">
          <h2 style={{ margin: 0 }}>Case Studies</h2>
          <ButtonLink to="/" className="pill">Back</ButtonLink>
        </div>
        <p className="muted">All case studies are anonymized by default.</p>

        <div className="list" style={{ marginTop: 14 }}>
          {caseStudies.items.map((cs: any) => (
            <div key={cs.slug} className="card pad" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div className="row">
                <div>
                  <h3 style={{ margin: 0 }}>{cs.title}</h3>
                  <div className="small">{cs.summary}</div>
                  <div className="tag-row">
                    {cs.tags.map((t: string) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
                <ButtonLink to={`/case-studies/${cs.slug}`} className="primary">Open</ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
