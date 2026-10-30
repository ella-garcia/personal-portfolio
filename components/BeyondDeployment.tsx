const pillars = [
  {
    org: "Google",
    label: "Deployment",
    title: "Deploying solutions",
    body: "Scoped, built and scaled alongside customer engineers, owning up to 16 clients at once.",
    tags: ["Customer engineering", "Enterprise"],
  },
  {
    org: "IMBA + MS Computer Science · IE University",
    label: "Market entry",
    title: "Business foundations",
    body: "Market entry and new business development, built on top of the technical depth.",
    tags: ["New business", "Market entry"],
  },
  {
    org: "Family company · during the MBA",
    label: "Operations",
    title: "Running the business",
    body: "Hands-on work across HR and people operations, strategy development, joint business partnerships and sales.",
    tags: ["People ops", "Strategy", "Partnerships", "Sales"],
  },
];

export default function BeyondDeployment() {
  return (
    <section id="beyond" className="eg-container sec" aria-labelledby="beyond-h">
      <div className="sec-head">
        <span className="eg-label">How I got here</span>
        <h2 id="beyond-h" className="heading-lg" style={{ margin: 0 }}>Beyond deployment</h2>
        <p className="body eg-muted" style={{ maxWidth: "52ch" }}>
          Built to deploy, and to help open what comes next.
        </p>
      </div>

      <div className="eg-bento">
        {pillars.map((p) => (
          <div key={p.label} className="eg-card" style={{ gridColumn: "span 4" }}>
            <span className="eg-label" style={{ marginBottom: "var(--space-1)", display: "block" }}>{p.org}</span>
            <div className="eg-card-head" style={{ marginBottom: "var(--space-2)" }}>
              <span className="eg-card-title">{p.title}</span>
            </div>
            <ul className="eg-tags" style={{ marginBottom: "var(--space-3)" }}>
              {p.tags.map((t) => <li className="eg-tag" key={t}>{t}</li>)}
            </ul>
            <p className="eg-card-body" style={{ margin: 0 }}>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
