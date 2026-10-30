import HeroCarousel from "@/components/HeroCarousel";

const ArrowIcon = () => (
  <svg viewBox="0 0 18 18" width={18} height={18}>
    <path d="M5 13L13 5M6.5 5H13V11.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Hero() {
  return (
    <main id="top">
      <section className="eg-container" aria-label="Introduction" style={{ paddingBlock: "var(--space-2) 0" }}>
        <div className="eg-bento">

          {/* Project carousel tile */}
          <div
            className="eg-tile tile-photo eg-rise"
            style={{ gridColumn: "span 4", gridRow: "span 2", minHeight: 480, padding: 0, overflow: "hidden" }}
          >
            <HeroCarousel />
          </div>

          {/* Intro tile */}
          <div className="eg-tile eg-rise" style={{ gridColumn: "span 8", minHeight: 360 }}>
            <span className="eg-label">Forward deployed engineer and strategist · Madrid</span>
            <div style={{ display: "grid", gap: "var(--space-6)" }}>
              <h1 className="display-xl" style={{ margin: 0 }}>Ella Garcia</h1>
              <p className="body-lg" style={{ maxWidth: "42ch" }}>
                Most of what I know, I learned at deployment.
              </p>
              <p className="body" style={{ maxWidth: "48ch", color: "var(--ink-muted)" }}>
                I start with something small and scale it to solve problems for others as well. Each piece below covers what I built and what got in the way.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
                <a className="eg-btn eg-btn--primary" href="/work">See the work</a>
                <a className="eg-btn eg-btn--secondary" href="#contact">Get in touch</a>
              </div>
            </div>
          </div>

          {/* Work browse tile */}
          <a className="eg-tile tile-accent eg-rise" href="/work" style={{ gridColumn: "span 5", minHeight: 232 }}>
            <span className="eg-notch">
              <span className="eg-arrow" aria-hidden="true"><ArrowIcon /></span>
            </span>
            <span className="eg-label">Work</span>
            <span className="eg-tile-title" style={{ fontSize: 28 }}>Case studies & past work</span>
          </a>

          {/* Projects browse tile */}
          <a className="eg-tile tile-deep eg-rise" href="/projects" style={{ gridColumn: "span 3", minHeight: 232 }}>
            <span className="eg-notch">
              <span className="eg-arrow" aria-hidden="true"><ArrowIcon /></span>
            </span>
            <span className="eg-label">Projects</span>
            <span className="eg-tile-title" style={{ fontSize: 28 }}>Projects &amp; skills</span>
          </a>

        </div>
      </section>
    </main>
  );
}
