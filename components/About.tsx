const timeline = [
  {
    when: "2025 to 2027",
    title: "Dual MS in Computer Science and Business Technology and International MBA",
    meta: "IE University · Madrid",
    body: "Beta Gamma Sigma, top 20% of class. Class Representative and lead AI workshop facilitator.",
  },
  {
    when: "2024 to 2025",
    title: "Product Deployment Engineer II, Google Ads",
    meta: "Google · Singapore",
    body: "Technical lead for AI and advertising products across a $160M portfolio. Led the YouTube technical product area for Southeast Asia.",
  },
  {
    when: "2022 to 2024",
    title: "Product Deployment Engineer I, Google Ads",
    meta: "Google · Singapore",
    body: null,
  },
  {
    when: "2020 to 2022",
    title: "Product Development Engineer",
    meta: "Knovo · Singapore",
    body: null,
  },
  {
    when: "2019",
    title: "BBA, Management Information Systems",
    meta: "The University of Texas at Austin",
    body: null,
  },
];

export default function About() {
  return (
    <section id="about" className="eg-container sec" aria-labelledby="about-h">
      <div className="eg-split">
        <div className="sec-head" style={{ alignContent: "start" }}>
          <span className="eg-label">About</span>
          <h2 id="about-h" className="heading-lg" style={{ margin: 0 }}>
            From technical discovery to live deployment
          </h2>
        </div>

        <div style={{ display: "grid", gap: "var(--space-12)" }}>
          <div style={{ display: "grid", gap: "var(--space-4)" }}>
            <p className="body-lg eg-measure">
              At Google I was the technical lead for AI and advertising products across a $160M enterprise portfolio in Southeast Asia, taking client integrations from technical audit and planning through implementation and optimisation.
            </p>
            <p className="body eg-measure">
              I build integrations, LLM prototypes and data pipelines with customer engineering teams, then turn repeat work into programs: playbooks, workshops and hackathons. Now I&apos;m in Madrid completing a dual MS in Computer Science and International MBA at IE University. I&apos;m Filipina, grew up across Asia, and speak English, Filipino, conversational Mandarin and beginner Spanish.
            </p>
          </div>

          <div className="eg-timeline">
            {timeline.map((r) => (
              <div className="eg-row" key={r.when}>
                <span className="eg-row-when">{r.when}</span>
                <div className="eg-row-main">
                  <h3 className="eg-row-title">{r.title}</h3>
                  <span className="eg-row-meta">{r.meta}</span>
                  {r.body && <p className="eg-row-body">{r.body}</p>}
                </div>
              </div>
            ))}
          </div>

          <div>
            <a className="eg-btn eg-btn--secondary" href="https://linkedin.com/in/patricia-ella-garcia" target="_blank" rel="noopener noreferrer">
              Full history on LinkedIn{" "}
              <svg className="eg-btn-icon" viewBox="0 0 18 18" aria-hidden="true">
                <path d="M5 13L13 5M6.5 5H13V11.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
