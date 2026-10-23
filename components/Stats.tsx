const stats = [
  { figure: "$160M", caption: "Enterprise portfolio I was technical lead for at Google" },
  { figure: "5+ yrs", caption: "In product and deployment engineering" },
  { figure: "+35ppts", caption: "Quarter-on-quarter revenue from a Gemini creative process" },
  { figure: "11x", caption: "Purchase rate from a joint OEM measurement solution" },
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
