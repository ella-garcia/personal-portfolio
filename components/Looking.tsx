export default function Looking() {
  return (
    <section id="looking" className="eg-container sec" aria-labelledby="looking-h">
      <div className="eg-split">
        <div className="sec-head" style={{ alignContent: "start" }}>
          <span className="eg-label">For hiring managers</span>
          <h2 id="looking-h" className="heading-lg" style={{ margin: 0 }}>What I&apos;m looking for</h2>
          <p className="body eg-muted" style={{ maxWidth: "32ch" }}>
            Customer-facing roles where I own a deployment end to end, from discovery with the customer&apos;s engineers to the business case.
          </p>
        </div>

        <div>
          <dl style={{ margin: 0 }}>
            {[
              { dt: "Roles", dd: "Forward deployed engineer, deployment strategist, AI solutions and strategy" },
              { dt: "Strengths", dd: "Technical discovery, integrations and LLM prototypes, data pipelines, scoping deployment against revenue and adoption goals" },
              { dt: "Toolkit", dd: "Python, SQL, JavaScript, Google Cloud, Gemini API, Next.js · Google Cloud Associate Cloud Engineer, GA4, Stanford LEAD" },
              { dt: "Based in", dd: "Madrid · Open to relocation" },
              { dt: "Available", dd: "From July 2027" },
            ].map((r) => (
              <div className="fact-row" key={r.dt}>
                <dt>{r.dt}</dt>
                <dd>{r.dd}</dd>
              </div>
            ))}
          </dl>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", paddingTop: "var(--space-8)" }}>
            <a className="eg-btn eg-btn--primary" href="#contact">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}
