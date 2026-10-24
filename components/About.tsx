const brings = [
  {
    title: "Deployment alongside customer teams",
    body: "Taking a product from the first technical audit to launch and tuning, working with the client's own engineers.",
  },
  {
    title: "Applied LLM work",
    body: "Prototypes and workflows on the Gemini API, from creative production to video analysis. More recently, pipelines that feed Whisper and Hive into an LLM to audit video.",
  },
  {
    title: "Data foundations",
    body: "Building and cleaning datasets in BigQuery and SQL so trends become visible, as I did for a regional report on the creator economy.",
  },
  {
    title: "Measurement across partners",
    body: "Designing ways for several companies to market together and measure the same results.",
  },
  {
    title: "Making one-off work repeatable",
    body: "Turning requests that keep coming back into playbooks and training.",
  },
  {
    title: "Building my own products",
    body: "Next.js, Vercel, and Airtable for the Gender-Smart Investing Map. Matching and scoring algorithms for Lyferr.",
  },
];

const highlights = [
  "First place, CIVICA EU AI Hackathon · Berlin, April 2026",
  "Best Pitch Award, IE Startup Lab · Lyferr team",
  "Stanford LEAD · completed alongside degree",
  "IMBA class representative · IE University, 2025–2026",
  "Google Cloud Associate Cloud Engineer and Google Analytics 4 certified",
  "Dean's List · Singapore Management University",
  "Beta Gamma Sigma · top 20% of graduating class at IE",
];

const timeline = [
  {
    when: "2025 to 2027",
    title: "Dual MS in Computer Science and International MBA",
    meta: "IE University · Madrid",
    body: "Beta Gamma Sigma, top 20% of class. Class Representative and lead AI workshop facilitator.",
  },
  {
    when: "2024 to 2025",
    title: "Product Deployment Engineer II, Google Ads",
    meta: "Google · Singapore",
    body: "Technical lead for AI and advertising products across Southeast Asia. Led the YouTube technical product area for the region.",
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
            I build where the work happens.
          </h2>
        </div>

        <div style={{ display: "grid", gap: "var(--space-12)" }}>
          <div style={{ display: "grid", gap: "var(--space-4)" }}>
            <p className="body-lg eg-measure">
              I work on the part of AI that comes after the demo, when it has to fit a team&apos;s systems and the numbers they&apos;re already judged on.
            </p>
            <p className="body eg-measure">
              I spent over three years at Google in Singapore as a Product Deployment Engineer, the technical lead for AI and advertising products with enterprise clients across Southeast Asia. Most days I was inside a client&apos;s team. I&apos;d audit what they had and plan the integration with their engineers. Then I&apos;d build it and stay to tune it.
            </p>
            <p className="body eg-measure">
              Two projects taught me the most. One was a creative production process built on Gemini, which lifted quarter-on-quarter revenue for the clients who used it and made production many times faster. The other used the Gemini API on long videos to pull out highlights and check whether a channel was a safe fit, with sentiment analysis on top. Sales teams ended up running it at scale. In both, most of my time went into fitting the model to how people already made decisions.
            </p>
            <p className="body eg-measure">
              Before Google, I was a Product Development Engineer at Knovo, a startup in Singapore, where I helped move the product from web-only to cross-platform. Now I&apos;m in Madrid, finishing a dual MS in Computer Science and International MBA at IE University.
            </p>
          </div>

          <div style={{ display: "grid", gap: "var(--space-6)" }}>
            <span className="eg-label">What I bring</span>
            <div style={{ display: "grid", gap: "var(--space-4)" }}>
              {brings.map((b) => (
                <div key={b.title} style={{ display: "grid", gap: "var(--space-1)" }}>
                  <span style={{ fontWeight: 600, fontSize: 15 }}>{b.title}</span>
                  <span className="body eg-measure" style={{ color: "var(--ink-muted)" }}>{b.body}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gap: "var(--space-6)" }}>
            <span className="eg-label">Now</span>
            <p className="body eg-measure">
              I&apos;m finishing my dual degree at IE University in Madrid and graduate in August 2027. On the side I&apos;m co-founder and CTO of Lyferr, a wildlife travel marketplace that&apos;s now live. I also look after the Gender-Smart Investing Map.
            </p>
            <p className="body eg-measure">
              The problems I keep coming back to sit between an AI idea and a working system. Usually the hard question is who has to change how they work, and how anyone will know it helped.
            </p>
            <p className="body eg-measure">
              Outside work, I run half marathons. I also follow political strategy closely enough that I tried to predict the President&apos;s State of the Nation Address (it&apos;s under Projects). I speak English and Filipino, get by in Mandarin, and am learning Spanish.
            </p>
          </div>

          <div style={{ display: "grid", gap: "var(--space-6)" }}>
            <span className="eg-label">Highlights</span>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: "var(--space-3)" }}>
              {highlights.map((h) => (
                <li key={h} className="body" style={{ display: "flex", gap: "var(--space-3)", alignItems: "baseline" }}>
                  <span style={{ color: "var(--accent-mark)", flexShrink: 0 }}>—</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
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
