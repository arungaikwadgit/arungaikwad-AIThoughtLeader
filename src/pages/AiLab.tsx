export function AiLab() {
  return (
    <section className="section">
      <div className="card pad">
        <h2>AI Lab</h2>
        <p className="muted">
          Experiments and prototypes: RAG foundations, governance gates, AI SDLC improvements.
          Add architecture diagrams and screenshots as you publish.
        </p>

        <div className="list" style={{ marginTop: 14 }}>
          <div className="card pad" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <h3>RAG Prototype (placeholder)</h3>
            <p className="muted">Retrieve → rerank → cite. Track latency, quality proxy, and guardrail outcomes.</p>
          </div>
          <div className="card pad" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <h3>Governance Mini-Audit (placeholder)</h3>
            <p className="muted">A repeatable checkpoint to catch privacy/safety issues before launch.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
