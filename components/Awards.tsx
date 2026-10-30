const credits = [
  {
    name: "Ella Garcia",
    role: "Technical Solutions Consultant",
    org: "Google",
    blurb: "Designed and built the workflow end-to-end and deployed across the business unit. The tool was later scaled company-wide, winning a second award the following year for a separate business unit.",
  },
  { name: "Globe Telecom" },
  { name: "WPP Media" },
];


export default function Awards() {
  return (
    <section id="awards" className="eg-container sec" aria-labelledby="awards-h">
      <div className="sec-head">
        <span className="eg-label">Recognition</span>
        <h2 id="awards-h" className="heading-lg" style={{ margin: 0 }}>Industry awards</h2>
      </div>

      <div className="eg-bento">
        {/* Video + award info tile */}
        <div
          className="eg-card"
          style={{ gridColumn: "span 7", gridRow: "span 2", gap: "var(--space-6)" }}
        >
          <div className="eg-card-head">
            <span className="eg-card-title">There&apos;s Roam for You with Globe Roaming</span>
            <span className="eg-tag eg-tag--shipped">Gold</span>
          </div>

          <video
            src="/globe-roaming-mma-gold.mp4"
            controls
            playsInline
            style={{
              width: "100%",
              aspectRatio: "16/9",
              borderRadius: "var(--radius-sm)",
              background: "#000",
              display: "block",
            }}
          />

          <dl style={{ display: "grid", gap: 0, marginTop: "auto" }}>
            <div className="fact-row">
              <dt>Award show</dt>
              <dd>MMA Smarties Philippines 2025</dd>
            </div>
            <div className="fact-row">
              <dt>Category</dt>
              <dd>Creative &amp; Innovation Impact – Personalization</dd>
            </div>
            <div className="fact-row">
              <dt>Entrant</dt>
              <dd>Globe Telecom · EssenceMediacom</dd>
            </div>
          </dl>
        </div>

        {/* Credits tile */}
        <div
          className="eg-card"
          style={{ gridColumn: "span 5", gridRow: "span 2" }}
        >
          <span className="eg-label">Credits</span>
          <div style={{ display: "grid", gap: "var(--space-6)", marginTop: "var(--space-2)" }}>
            {credits.map((c) => (
              <div key={c.name} style={{ display: "grid", gap: "var(--space-1)" }}>
                <span style={{ fontWeight: 600, fontSize: 15, lineHeight: 1.3 }}>{c.name}</span>
                {c.role && (
                  <span style={{ fontSize: 13, lineHeight: 1.4, color: "var(--ink-muted)" }}>{c.role}</span>
                )}
                {c.org && (
                  <span style={{ fontSize: 13, lineHeight: 1.4, color: "var(--ink-muted)" }}>{c.org}</span>
                )}
                {c.blurb && (
                  <span style={{ fontSize: 13, lineHeight: 1.5, color: "var(--ink-muted)", marginTop: "var(--space-1)" }}>{c.blurb}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Radar tile */}
        <div
          className="eg-card"
          style={{ gridColumn: "span 12", gap: "var(--space-6)" }}
        >
          <div className="eg-card-head">
            <span className="eg-card-title">Narrative Radar</span>
            <span className="eg-tag eg-tag--shipped">1st Place</span>
          </div>

          <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink-muted)", maxWidth: "60ch", margin: 0 }}>
            AI-enabled platform-accountability auditing for short-form social media content. Built to help regulators and parliamentary offices enforce existing EU law — the DSA and AI Act — against platforms at scale, using traceable, reviewable evidence.
          </p>

          <dl style={{ display: "grid", gap: 0, marginTop: "auto" }}>
            <div className="fact-row">
              <dt>Competition</dt>
              <dd>CIVICA EU AI Hackathon 2026</dd>
            </div>
            <div className="fact-row">
              <dt>Track</dt>
              <dd>AI, Disinformation &amp; Democratic Integrity</dd>
            </div>
            <div className="fact-row">
              <dt>Institutions</dt>
              <dd>Hertie School · IE University · SNSPA</dd>
            </div>
            <div className="fact-row">
              <dt>Built in</dt>
              <dd>3 days — April 2026</dd>
            </div>
          </dl>

          <div>
            <a
              className="eg-btn eg-btn--primary"
              href="https://github.com/ella-garcia/narrative-radar"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
