import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Workshops — Ella Garcia",
};

const workshops = [
  { date: "November 2025", title: "Building your product with Gemini and Google AI Studio" },
  { date: "February 2026", title: "AI-powered IDEs and Cursor" },
  { date: "March 2026", title: "OpenClaw: what, why, how" },
  { date: "May 2026", title: "Everything Claude" },
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
                AI workshops for the IE MBA community
              </h1>
            </div>

            <div style={{ display: "grid", gap: "var(--space-12)" }}>
              <div style={{ display: "grid", gap: "var(--space-4)" }}>
                <p className="body-lg eg-measure">
                  Sessions I&apos;ve run to help people start building with AI.
                </p>
                <p className="body eg-measure">
                  Rishi Kashyap and I ran four workshops for our MBA classmates at IE. The aim was to get people past reading about AI and into building something with it. Classmates kept asking for more sessions, which is how it became a series.
                </p>
              </div>

              <div className="eg-timeline">
                {workshops.map((w) => (
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
        </section>
      </main>
      <Footer />
    </>
  );
}
