const credits = [
  { name: "Ella Garcia", role: "Technical Solutions Consultant", org: "Google" },
  { name: "Elora Sam-Hukom", role: "Industry Lead – Travel, Tech, Telco, Retail & QSR", org: "Google" },
  { name: "Macky Arañez", role: "Marketing Manager – Media & Performance Lead", org: "Globe Telecom" },
  { name: "Jam Jimenez", role: "Marketing Manager – Brand Communication Design Lead", org: "Globe Telecom" },
  { name: "Mellie Valimento", role: "Sr. Manager – Convergent Segments Strategy", org: "Globe Telecom" },
  { name: "Abe Castro", role: "Assistant Director – Creative Development Lead", org: "Globe Telecom" },
  { name: "Mohit Kakkar", role: "AOR Director", org: "WPP Media – EssenceMediacom" },
  { name: "Brayan Acupan", role: "Communications Planning Director", org: "WPP Media – EssenceMediacom" },
  { name: "Jennifer Bolisay-Ty", role: "Associate Communications Planning Director", org: "WPP Media – EssenceMediacom" },
  { name: "Kelly Lihao", role: "Communications Planning Manager", org: "WPP Media – EssenceMediacom" },
  { name: "Zuxa Siazon", role: "Biddable Campaign Delivery Manager", org: "WPP Media – EssenceMediacom" },
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
                <span style={{ fontWeight: 600, fontSize: 15, lineHeight: 1.3 }}>
                  {c.name}
                </span>
                <span style={{ fontSize: 13, lineHeight: 1.4, color: "var(--ink-muted)" }}>
                  {c.role}
                </span>
                <span style={{ fontSize: 13, lineHeight: 1.4, color: "var(--ink-muted)" }}>
                  {c.org}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
