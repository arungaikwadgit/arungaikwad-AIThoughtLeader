export function OperatingManual() {
  return (
    <section className="section">
      <div className="card pad">
        <h2>Operating Manual</h2>
        <p className="muted">
          This page tells stakeholders and teams how you lead. Keep it short, direct, and practical.
        </p>

        <div className="list" style={{ marginTop: 14 }}>
          <div className="card pad" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <h3>What I value</h3>
            <ul className="muted">
              <li>Integrity over optics</li>
              <li>Clear ownership and decision rights</li>
              <li>Risk visible early, not late</li>
              <li>Simple systems that scale</li>
            </ul>
          </div>

          <div className="card pad" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <h3>How I run teams</h3>
            <ul className="muted">
              <li>Weekly execution rhythm with measurable outcomes</li>
              <li>Quality gates: reliability, security, governance</li>
              <li>Fast feedback loops and learning culture</li>
            </ul>
          </div>

          <div className="card pad" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <h3>How to work with me</h3>
            <ul className="muted">
              <li>Bring clarity: goal, constraints, what “done” means</li>
              <li>Surface risks early; I’ll help remove blockers</li>
              <li>Prefer written updates for alignment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
