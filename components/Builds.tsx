const ArrowIcon = () => (
  <svg viewBox="0 0 18 18" width={18} height={18}>
    <path d="M5 13L13 5M6.5 5H13V11.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Builds() {
  return (
    <section id="builds" className="eg-container sec" aria-labelledby="builds-h">
      <div className="sec-head">
        <span className="eg-label">What I&apos;m building</span>
        <h2 id="builds-h" className="heading-lg" style={{ margin: 0 }}>Products I lead outside Google</h2>
      </div>

      <div className="eg-bento">
        {/* Kerubin — large accent card */}
        <a
          className="eg-card card-accent"
          href="https://gendersmartinvesting.kerubincapital.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ gridColumn: "span 7", gridRow: "span 2" }}
        >
          <span className="eg-notch"><span className="eg-arrow" aria-hidden="true"><ArrowIcon /></span></span>
          <div className="eg-card-head">
            <span className="eg-card-title">Gender Smart Investing Map</span>
            <span className="eg-tag eg-tag--live">Live</span>
          </div>
          <div className="eg-photo" style={{ aspectRatio: "16/9", minHeight: 0, height: "auto", borderRadius: "var(--radius-sm)", maxWidth: "100%" }}>
            <span className="eg-photo-caption">[Map screenshot, 16:9]</span>
          </div>
          <p className="eg-card-body">
            Technical lead and product builder for Kerubin Capital. Built and deployed the site: intake forms for four entity types, gated early access with hashed passwords and cookie sessions, an interactive D3 network map and a responsive design system.
          </p>
          <ul className="eg-tags eg-card-foot">
            {["Next.js", "TypeScript", "Airtable", "D3"].map((t) => <li className="eg-tag" key={t}>{t}</li>)}
            <li className="eg-tag eg-tag--outline">Vercel</li>
          </ul>
        </a>

        {/* Lyferr */}
        <a
          className="eg-card"
          href="https://lyferr.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ gridColumn: "span 5" }}
        >
          <span className="eg-notch"><span className="eg-arrow" aria-hidden="true"><ArrowIcon /></span></span>
          <div className="eg-card-head">
            <span className="eg-card-title">Lyferr</span>
            <span className="eg-tag eg-tag--progress">In progress</span>
          </div>
          <p className="eg-card-body">
            Co-founder and CTO. A wildlife travel platform that matches travellers with local guides by each guide&apos;s success rate for specific species, powered by two proprietary algorithms for seasonal scoring and guide matching. Startup Lab winner.
          </p>
          <ul className="eg-tags eg-card-foot">
            {["Matching algorithms", "0 to 1"].map((t) => <li className="eg-tag" key={t}>{t}</li>)}
          </ul>
        </a>

        {/* Tanaw */}
        <div className="eg-card" style={{ gridColumn: "span 5" }}>
          <div className="eg-card-head">
            <span className="eg-card-title">Tanaw</span>
            <span className="eg-tag eg-tag--progress">In progress</span>
          </div>
          <p className="eg-card-body">
            An AI platform to improve how companies find and recruit global talent, automating the workflow between sourcing and decision-making.
          </p>
          <ul className="eg-tags eg-card-foot">
            {["AI", "Recruiting tech"].map((t) => <li className="eg-tag" key={t}>{t}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
