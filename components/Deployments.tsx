const ArrowIcon = () => (
  <svg viewBox="0 0 18 18" width={18} height={18}>
    <path d="M5 13L13 5M6.5 5H13V11.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const cards = [
  {
    col: 7,
    title: "AI creative production on Gemini",
    outcome: "+35ppts quarter-on-quarter revenue",
    body: "Built an AI creative production process with Gemini for enterprise advertisers, replacing a manual production cycle with a repeatable workflow.",
    tags: ["Gemini", "Workflow design"],
  },
  {
    col: 5,
    title: "Video and sentiment analysis with the Gemini API",
    outcome: "+20ppts national sales",
    body: "Long-form video highlight discovery, YouTube channel suitability and sentiment analysis for creator and content decisions, scaled into an AI-enabled workflow.",
    tags: ["Gemini API", "Python"],
  },
  {
    col: 5,
    title: "Live-data display ads",
    outcome: "100M reach",
    body: "A display ad system that pulls live scores from an external API, built on Google Cloud.",
    tags: ["Google Cloud", "API integration"],
  },
  {
    col: 7,
    title: "Joint measurement for a mobile OEM",
    outcome: "11x purchase rate",
    body: "An industry-first solution that let a mobile OEM and its retail and carrier partners co-market and measure performance together.",
    tags: ["Measurement", "Partner integration"],
  },
  {
    col: 5,
    title: "AI creator curation for a QSR product launch",
    outcome: "Double-digit lift in units sold and daily revenue",
    body: "Built a Gemini-powered script to vet hundreds of YouTube creators against a major QSR brand's brief, scoring each on engagement and brand alignment. Combined Video Reach and View Campaigns with Partnership Ads across creator tiers, then ran post-campaign sentiment analysis to surface consumer insights for future campaigns.",
    tags: ["Gemini", "YouTube", "Creator strategy"],
  },
];

export default function Deployments() {
  return (
    <section id="deployments" className="eg-container sec" aria-labelledby="dep-h">
      <div className="sec-head">
        <span className="eg-label">Deployments</span>
        <h2 id="dep-h" className="heading-lg" style={{ margin: 0 }}>Shipped with customers at Google</h2>
      </div>

      <div className="eg-bento">
        {cards.map((c) => (
          <div className="eg-card" key={c.title} style={{ gridColumn: `span ${c.col}` }}>
            <div className="eg-card-head">
              <span className="eg-card-title">{c.title}</span>
              <span className="eg-tag eg-tag--shipped">Shipped</span>
            </div>
            <p className="outcome">{c.outcome}</p>
            <p className="eg-card-body">{c.body}</p>
            <ul className="eg-tags eg-card-foot">
              {c.tags.map((t) => <li className="eg-tag" key={t}>{t}</li>)}
            </ul>
          </div>
        ))}

        {/* eConomy tile */}
        <a
          className="eg-tile tile-deep"
          href="https://services.google.com/fh/files/misc/e_conomy_sea_2024_report.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ gridColumn: "span 12", minHeight: 0 }}
        >
          <span className="eg-notch"><span className="eg-arrow" aria-hidden="true"><ArrowIcon /></span></span>
          <span className="eg-label">Featured in · Google, Temasek, Bain &amp; Company</span>
          <div style={{ display: "grid", gap: "var(--space-2)" }}>
            <span className="eg-tile-title" style={{ fontSize: 28, maxWidth: "none" }}>e-Conomy South East Asia 2024</span>
            <span className="body" style={{ color: "var(--on-deep-muted)", maxWidth: "70ch" }}>
              Built the base BigQuery dataset for creator data and used SQL to surface video-commerce and creator-economy trends across Meta, TikTok and YouTube.
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
