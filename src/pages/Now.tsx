export function Now() {
  return (
    <section className="section">
      <div className="card pad">
        <h2>Now</h2>
        <p className="muted">A simple “current focus” page. Keep it updated monthly.</p>
        <div className="list" style={{ marginTop: 14 }}>
          <div className="card pad" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <h3>Current focus (placeholder)</h3>
            <ul className="muted">
              <li>AI ownership operating model</li>
              <li>Governance gates that don’t slow delivery</li>
              <li>Enterprise-scale engineering execution</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
