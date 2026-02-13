import { useParams, Link } from 'react-router-dom'
import caseStudies from '../data/case-studies.json'

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card pad" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <h3>{title}</h3>
      <div className="muted">{children}</div>
    </div>
  )
}

export function CaseStudyDetail() {
  const { slug } = useParams()
  const cs = caseStudies.items.find((x: any) => x.slug === slug)

  if (!cs) {
    return (
      <section className="section">
        <div className="card pad">
          <h2>Case study not found</h2>
          <Link className="pill primary" to="/case-studies">Back to case studies</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="card pad">
        <div className="row">
          <div>
            <div className="kicker">Executive Case Study (Anonymized)</div>
            <h2 style={{ marginTop: 6 }}>{cs.title}</h2>
            <div className="tag-row">
              {cs.tags.map((t: string) => <span key={t} className="tag">{t}</span>)}
            </div>
            <p className="muted">{cs.summary}</p>
          </div>
          <Link className="pill primary" to="/case-studies">All case studies</Link>
        </div>
      </div>

      <div className="list" style={{ marginTop: 14 }}>
        <Block title="Context">{cs.context}</Block>
        <Block title="Business Problem">{cs.businessProblem}</Block>

        <Block title="My Ownership">
          <ul>
            {cs.myOwnership.map((x: string, i: number) => <li key={i}>{x}</li>)}
          </ul>
        </Block>

        <Block title="Technical Approach">
          <ul>
            {cs.technicalApproach.map((x: string, i: number) => <li key={i}>{x}</li>)}
          </ul>
        </Block>

        <Block title="Leadership Decisions">
          <ul>
            {cs.leadershipDecisions.map((x: string, i: number) => <li key={i}>{x}</li>)}
          </ul>
        </Block>

        <Block title="Measurable Impact">
          <ul>
            {cs.impact.map((x: string, i: number) => <li key={i}>{x}</li>)}
          </ul>
        </Block>

        <Block title="Governance / Risk Considerations">
          <ul>
            {cs.governanceRisk.map((x: string, i: number) => <li key={i}>{x}</li>)}
          </ul>
        </Block>
      </div>
    </section>
  )
}
