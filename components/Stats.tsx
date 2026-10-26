const stats = [
  { figure: "5+ yrs", caption: "In product and deployment engineering" },
  { figure: "8", caption: "Deployments shipped at Google across Southeast Asia" },
  { figure: "4", caption: "Self-built products and data projects" },
  { figure: "4", caption: "Languages — English, Filipino, Mandarin, Spanish" },
];

export default function Stats() {
  return (
    <section className="eg-container" aria-label="Key figures" style={{ paddingBlock: "var(--space-2) 0" }}>
      <div className="eg-stats">
        {stats.map((s) => (
          <div className="eg-stat" key={s.figure}>
            <span className="eg-stat-figure">{s.figure}</span>
            <span className="eg-stat-caption">{s.caption}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
