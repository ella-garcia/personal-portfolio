export const metadata = {
  title: "Ella Garcia — v2",
};

const caseStudies = [
  { col: 7, category: "Creative Production", title: "A Gemini creative production process", outcome: "Measurable quarter-on-quarter revenue lift", method: "Repeatable Gemini workflow with brand-safe source material retrieval", href: "/work/gemini-creative-production" },
  { col: 5, category: "Content Analysis", title: "Gemini for video and creator decisions", outcome: "Measurable national sales lift", method: "Automated highlight-discovery, channel-suitability, and sentiment pipeline", href: "/work/gemini-video-creator" },
  { col: 5, category: "Measurement", title: "Joint measurement across partners", outcome: "Significant lift in purchase rate", method: "Joint measurement framework bridging metrics across manufacturer and distribution partners", href: "/work/joint-measurement" },
  { col: 7, category: "Ad Tech", title: "Live-data display ads", outcome: "National-scale reach", method: "Live-data ad system on Google Cloud pulling real-time scores from an external API", href: "/work/live-data-display-ads" },
  { col: 6, category: "Enablement", title: "Turning one-off work into programs", outcome: "Regional go-to-market playbook", method: "Cross-team workshops and structured playbook synthesising recurring client requests", href: "/work/one-off-to-programs" },
  { col: 6, category: "Leadership", title: "YouTube technical lead, Southeast Asia", outcome: "Higher revenue and wider product adoption", method: "Technical product ownership across YouTube SEA — roadmap, deployment, and client enablement", href: "/work/youtube-technical-lead" },
];

const projects = [
  { tag: "Data · Geospatial", title: "Gender-Smart Investing Map", body: "Mapped 2,400+ institutions across the Philippines for Kerubin Capital.", href: "/projects" },
  { tag: "Product · Engineering", title: "Lyferr", body: "Wildlife travel platform — species-matching from 0 to launch. Co-founder and CTO.", href: "/projects" },
  { tag: "AI · NLP", title: "Narrative Radar", body: "Real-time narrative detection across live news sources.", href: "/projects" },
  { tag: "NLP · Political data", title: "SONA Prediction", body: "Predicted 11 of 14 legislative themes before delivery.", href: "/projects" },
];

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function V2Page() {
  return (
    <div className="sf">

      {/* Utility bar */}
      <div className="sf-utility">
        <div className="sf-wrap">
          <nav>
            <a href="/">Current portfolio</a>
            <a href="/work">Case studies</a>
            <a href="/workshops">Workshops</a>
            <a href="/projects">Projects</a>
          </nav>
          <div className="sf-utility-right">
            <a href="mailto:patriciagabriellegarcia@gmail.com">Get in touch</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sf-header">
        <div className="sf-wrap">
          <div className="sf-header-wordmark">Ella Garcia<span>.</span></div>
          <nav>
            <a href="/work" className="sf-header-nav-link">Work</a>
            <a href="/workshops" className="sf-header-nav-link">Workshops</a>
            <a href="/projects" className="sf-header-nav-link">Projects</a>
            <a href="#contact" className="sf-btn sf-btn-primary" style={{ fontSize: 13, padding: "6px 18px" }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="sf-hero">
        <div className="sf-hero-inner">
          <div className="sf-wrap" style={{ paddingBottom: "var(--sf-8)" }}>
            <div className="sf-hero-eyebrow">Product · Data · AI</div>
            <h1 className="sf-display" style={{ maxWidth: 820, marginBottom: "var(--sf-4)" }}>
              Built for impact<span className="sf-dot">.</span>
            </h1>
            <p style={{ fontFamily: "var(--sf-font-body)", fontSize: 20, lineHeight: "28px", fontStyle: "italic", color: "var(--sf-ink-on-brand-muted)", maxWidth: 560, marginBottom: "var(--sf-6)" }}>
              Five years shipping AI products and data systems at Google across Southeast Asia.
            </p>
            <div style={{ display: "flex", gap: "var(--sf-3)", flexWrap: "wrap" }}>
              <a href="/work" className="sf-btn sf-btn-light">See case studies</a>
              <a href="/projects" className="sf-btn sf-btn-accent">View projects <ArrowRight /></a>
            </div>
          </div>
        </div>
        <div className="sf-quick">
          <div className="sf-wrap">
            <a href="/work">8 deployments at Google</a>
            <a href="/projects">4 self-built products</a>
            <a href="/workshops">Workshops &amp; teaching</a>
            <a href="/#awards">MMA Gold Award 2025</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="sf-stats" aria-label="Key numbers">
        <div className="sf-wrap">
          <div className="sf-stat">
            <div className="sf-stat-value">5<span style={{ fontSize: "0.5em", fontWeight: 700 }}>+ yrs</span></div>
            <div className="sf-stat-label">Product and deployment engineering</div>
          </div>
          <div className="sf-stat">
            <div className="sf-stat-value">8</div>
            <div className="sf-stat-label">Deployments shipped at Google, Southeast Asia</div>
          </div>
          <div className="sf-stat">
            <div className="sf-stat-value">4</div>
            <div className="sf-stat-label">Self-built products and data projects</div>
          </div>
          <div className="sf-stat">
            <div className="sf-stat-value">4</div>
            <div className="sf-stat-label">Languages — English, Filipino, Mandarin, Spanish</div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="sf-deep-section" aria-labelledby="work-heading">
        <div className="sf-wrap">
          <div className="sf-section-intro">
            <div>
              <p className="sf-eyebrow sf-eyebrow-on-deep">Google · Singapore</p>
              <h2 className="sf-h2" style={{ color: "var(--sf-ink-on-brand)" }} id="work-heading">
                Case studies<span className="sf-dot">.</span>
              </h2>
              <p style={{ fontSize: 16, lineHeight: "26px", color: "var(--sf-ink-on-brand-muted)", marginTop: "var(--sf-2)", maxWidth: "52ch" }}>
                From my time as a Product Deployment Engineer in Singapore. Clients unnamed. Each starts with the problem and ends with what changed.
              </p>
            </div>
            <a href="/work" className="sf-btn sf-btn-light" style={{ alignSelf: "end" }}>All case studies <ArrowRight /></a>
          </div>

          <div className="sf-work-grid">
            {caseStudies.map((cs) => (
              <a
                key={cs.title}
                href={cs.href}
                className="sf-work-card"
                style={{ gridColumn: `span ${cs.col}` }}
              >
                <span className="sf-work-card-eyebrow">{cs.category}</span>
                <h3 className="sf-work-card-title">{cs.title}</h3>
                <p className="sf-work-card-body">{cs.outcome}</p>
                <p className="sf-work-card-method">{cs.method}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Personal projects */}
      <section className="sf-projects-section" aria-labelledby="projects-heading">
        <div className="sf-wrap">
          <div className="sf-section-intro">
            <div>
              <p className="sf-eyebrow">Independent work</p>
              <h2 className="sf-h2" id="projects-heading">
                Built on my own time<span className="sf-dot">.</span>
              </h2>
              <p className="sf-sub">Products and data projects I&apos;ve started from scratch.</p>
            </div>
            <a href="/projects" className="sf-btn sf-btn-primary" style={{ alignSelf: "end" }}>View all <ArrowRight /></a>
          </div>
          <div className="sf-projects-grid" style={{ marginTop: "var(--sf-6)" }}>
            {projects.map((p) => (
              <a key={p.title} href={p.href} className="sf-project-card">
                <span className="sf-project-tag">{p.tag}</span>
                <h3 className="sf-project-title">{p.title}</h3>
                <p className="sf-project-body">{p.body}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="sf-banner" id="contact" aria-labelledby="contact-heading">
        <div className="sf-wrap">
          <h2 className="sf-banner-title" id="contact-heading">
            Let&apos;s work together<span className="sf-dot">.</span>
          </h2>
          <p className="sf-banner-sub">Open to product and AI roles, advisory work, and workshop bookings.</p>
          <div className="sf-banner-actions">
            <a href="mailto:patriciagabriellegarcia@gmail.com" className="sf-btn sf-btn-accent">
              Send a message <ArrowRight />
            </a>
            <a href="/workshops" className="sf-btn sf-btn-light">Book a workshop</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "var(--sf-surface-deep)", color: "var(--sf-ink-on-brand)", padding: "var(--sf-7) 0" }}>
        <div className="sf-wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--sf-5)", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontFamily: "var(--sf-font-display)", fontWeight: 900, fontSize: 18 }}>
              Ella Garcia<span style={{ color: "var(--sf-accent)" }}>.</span>
            </div>
            <div style={{ fontSize: 13, color: "var(--sf-ink-on-brand-muted)", marginTop: 4 }}>
              Product · Data · AI
            </div>
          </div>
          <nav style={{ display: "flex", gap: "var(--sf-5)", flexWrap: "wrap" }}>
            {[["Work", "/work"], ["Projects", "/projects"], ["Workshops", "/workshops"], ["How I work", "/how-i-work"]].map(([label, href]) => (
              <a key={href} href={href} style={{ fontSize: 14, color: "var(--sf-ink-on-brand)" }}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </footer>

    </div>
  );
}
