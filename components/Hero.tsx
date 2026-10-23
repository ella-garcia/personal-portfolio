import Image from "next/image";

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

          {/* Photo tile */}
          <div
            className="eg-tile tile-photo eg-rise"
            style={{ gridColumn: "span 5", gridRow: "span 2", minHeight: 680 }}
          >
            <div className="eg-photo">
              <Image
                src="/ella-garcia.jpeg"
                alt="Ella Garcia"
                fill
                style={{ objectFit: "cover", borderRadius: "inherit" }}
                priority
              />
            </div>
          </div>

          {/* Intro tile */}
          <div className="eg-tile eg-rise" style={{ gridColumn: "span 7", minHeight: 440 }}>
            <span className="eg-label">Forward deployed engineer and strategist · Madrid</span>
            <div style={{ display: "grid", gap: "var(--space-6)" }}>
              <h1 className="display-xl" style={{ margin: 0 }}>Ella Garcia</h1>
              <p className="body-lg" style={{ maxWidth: "42ch" }}>
                I take AI and data products from technical discovery to live deployment, working alongside customer engineering teams and tying every technical choice to revenue and adoption.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
                <a className="eg-btn eg-btn--primary" href="#contact">Get in touch</a>
                <a className="eg-btn eg-btn--secondary" href="#deployments">See deployments</a>
              </div>
            </div>
          </div>

          {/* Hiring managers tile */}
          <a className="eg-tile tile-accent eg-rise" href="#looking" style={{ gridColumn: "span 4", minHeight: 232 }}>
            <span className="eg-notch">
              <span className="eg-arrow" aria-hidden="true"><ArrowIcon /></span>
            </span>
            <span className="eg-label">For hiring managers</span>
            <span className="eg-tile-title" style={{ fontSize: 28 }}>What I&apos;m looking for next</span>
          </a>

          {/* Services tile */}
          <a className="eg-tile tile-deep eg-rise" href="#services" style={{ gridColumn: "span 3", minHeight: 232 }}>
            <span className="eg-notch">
              <span className="eg-arrow" aria-hidden="true"><ArrowIcon /></span>
            </span>
            <span className="eg-label">Work with me</span>
            <span className="eg-tile-title" style={{ fontSize: 28 }}>AI deployment and strategy projects</span>
          </a>

        </div>
      </section>
    </main>
  );
}
