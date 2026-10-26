import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Workshops — Ella Garcia",
};

const mbaWorkshops = [
  { date: "November 2025", title: "Building your product with Gemini and Google AI Studio" },
  { date: "February 2026", title: "AI-powered IDEs and Cursor" },
  { date: "March 2026", title: "OpenClaw: what, why, how" },
  { date: "May 2026", title: "Everything Claude" },
];

const professionalWorkshops = [
  {
    title: "Design Thinking",
    body: "A hands-on session on problem framing, ideation, and rapid prototyping — adapted for teams building new products or rethinking existing ones.",
  },
  {
    title: "Introduction to AI Agent Orchestration",
    body: "How multi-agent systems work, when to use them, and how to design simple pipelines that are reliable in production.",
  },
  {
    title: "Introduction to AI and Tooling",
    body: "A practical primer on the current AI landscape — what the tools actually do, which problems they solve well, and how to get started without the noise.",
  },
];

export default function WorkshopsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="eg-container sec" aria-labelledby="workshops-h">
          <div className="eg-split">
            <div className="sec-head" style={{ alignContent: "start" }}>
              <span className="eg-label">Workshops</span>
              <h1 id="workshops-h" className="heading-lg" style={{ margin: 0 }}>
                Workshops I run
              </h1>
            </div>

            <div style={{ display: "grid", gap: "var(--space-16)" }}>

              {/* Professional workshops */}
              <div style={{ display: "grid", gap: "var(--space-8)" }}>
                <div style={{ display: "grid", gap: "var(--space-2)" }}>
                  <span className="eg-label">For companies</span>
                  <p className="body eg-measure">
                    Practical sessions I&apos;ve run for teams — on design, AI fundamentals, and building with agents. Available to book.
                  </p>
                </div>
                <div style={{ display: "grid", gap: "var(--space-6)" }}>
                  {professionalWorkshops.map((w) => (
                    <div key={w.title} style={{ display: "grid", gap: "var(--space-2)", borderTop: "1px solid var(--rule)", paddingTop: "var(--space-6)" }}>
                      <span style={{ fontWeight: 600, fontSize: 17 }}>{w.title}</span>
                      <p className="body eg-measure" style={{ color: "var(--ink-muted)" }}>{w.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* MBA series */}
              <div style={{ display: "grid", gap: "var(--space-8)" }}>
                <div style={{ display: "grid", gap: "var(--space-2)" }}>
                  <span className="eg-label">IE MBA series</span>
                  <p className="body eg-measure">
                    Four sessions co-run with Rishi Kashyap for our MBA classmates at IE. The aim was to get people past reading about AI and into building something with it.
                  </p>
                </div>
                <div className="eg-timeline">
                  {mbaWorkshops.map((w) => (
                    <div className="eg-row" key={w.date}>
                      <span className="eg-row-when">{w.date}</span>
                      <div className="eg-row-main">
                        <h2 className="eg-row-title">{w.title}</h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
