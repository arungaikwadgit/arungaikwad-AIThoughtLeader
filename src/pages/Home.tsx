import site from '../data/site.json'
import caseStudies from '../data/case-studies.json'
import { ButtonLink } from '../components/ButtonLink'
import { getAllArticles } from '../utils/articles'

export function Home() {
  const articles = getAllArticles().slice(0, 3)
  const topStudies = caseStudies.items.slice(0, 3)

  return (
    <>
      <section className="section" id="home">
        <div className="grid">
          <div className="card pad">
            <div className="kicker">{site.currentTitle} · Targeting {site.targetTitle}</div>
            <h1>{site.headline}</h1>
            <p className="muted">{site.subheadline}</p>

            <div className="cred" style={{ marginTop: 14 }}>
              {site.credibility.map((c, idx) => (
                <div key={idx} className="cred-item">
                  <div className="label">{c.label}</div>
                  <div className="value">{c.value}</div>
                </div>
              ))}
            </div>

            <div className="row" style={{ marginTop: 16 }}>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a className="pill primary" href="#work">View Work</a>
                <a className="pill" href="#articles">Read Articles</a>
                <a className="pill" href="#contact">Connect</a>
              </div>
              <div className="small">Anonymized case studies · Governance-forward · Delivery-minded</div>
            </div>
          </div>

          <div className="img-wrap">
            <div className="card pad">
              <h2 style={{ marginBottom: 10 }}>Photos</h2>
              <img className="img banner" src={site.images.banner} alt="Banner" loading="lazy" />
              <img className="img headshot" src={site.images.headshot} alt="Headshot" loading="lazy" />
              <div className="small">Replace these in Admin → Site Settings.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="card pad">
          <h2>About</h2>
          <div className="two-col">
            <div>
              <h3>Leadership philosophy</h3>
              <p className="muted">
                PLACEHOLDER: Calm accountability. Clear ownership. Strong delivery hygiene.
                I keep teams focused in ambiguity and make risk visible early.
              </p>
              <h3 style={{ marginTop: 14 }}>AI ownership mindset</h3>
              <p className="muted">
                PLACEHOLDER: Governance is not a late-stage review. It’s part of the operating model:
                guardrails, auditability, privacy, and human-in-loop where it matters.
              </p>
            </div>
            <div>
              <h3>Core values</h3>
              <p className="muted">Integrity · Empathy · Operational clarity · Responsible delivery</p>

              <h3 style={{ marginTop: 14 }}>Resume & Quick Bio</h3>
              <p className="muted">
                Add a quick-bio one-pager link and a resume PDF link here (editable later).
              </p>

              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <ButtonLink to="/resources" className="primary">Resources</ButtonLink>
                <ButtonLink to={site.links.linkedin || '#'} external>LinkedIn</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="card pad">
          <div className="row">
            <h2 style={{ margin: 0 }}>My Work</h2>
            <ButtonLink to="/case-studies" className="primary">View all</ButtonLink>
          </div>
          <p className="muted" style={{ marginTop: 6 }}>
            Executive case studies: context → problem → ownership → approach → decisions → impact → governance.
          </p>
          <div className="list" style={{ marginTop: 14 }}>
            {topStudies.map((cs: any) => (
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

      <section className="section" id="articles">
        <div className="card pad">
          <div className="row">
            <h2 style={{ margin: 0 }}>My Articles</h2>
            <ButtonLink to="/articles" className="primary">View all</ButtonLink>
          </div>
          <p className="muted" style={{ marginTop: 6 }}>
            Articles open inside this website. You can optionally add a source link at the bottom.
          </p>

          <div className="list" style={{ marginTop: 14 }}>
            {articles.map(a => (
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

      <section className="section" id="contact">
        <div className="card pad">
          <h2>Contact</h2>
          <p className="muted">
            If you’re hiring for Director / VP track roles, or want a leader who can bridge delivery with governance,
            I’d love to connect.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {site.links.email && site.links.email !== 'PLACEHOLDER' ? (
              <a className="pill primary" href={`mailto:${site.links.email}`}>Email</a>
            ) : (
              <span className="pill">Email (set in src/data/site.json)</span>
            )}
            <a className="pill" href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            {site.links.github && site.links.github !== 'PLACEHOLDER' ? (
              <a className="pill" href={site.links.github} target="_blank" rel="noreferrer">GitHub</a>
            ) : (
              <span className="pill">GitHub (set in src/data/site.json)</span>
            )}
            {site.links.booking ? (
              <a className="pill" href={site.links.booking} target="_blank" rel="noreferrer">Book</a>
            ) : null}
          </div>
        </div>
      </section>
    </>
  )
}
