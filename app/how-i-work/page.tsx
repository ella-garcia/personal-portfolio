import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "How I work — Ella Garcia",
};

const principles = [
  {
    n: "1",
    title: "Start from the number someone already cares about.",
    body: "Usually revenue or time saved. If the work can't move it, it probably shouldn't be built yet.",
  },
  {
    n: "2",
    title: "Look at what's there first.",
    body: "Most of the real constraints are already sitting in the data and in how people work.",
  },
  {
    n: "3",
    title: "Build the smallest version that can meet real users.",
    body: "A prototype in someone's hands teaches more than a polished plan.",
  },
  {
    n: "4",
    title: "Stay for the first weeks of use.",
    body: "That's where most of the useful fixes come from.",
  },
  {
    n: "5",
    title: "Leave it with the people who'll run it.",
    body: "Write it down and train whoever owns it next, so it keeps working after I've moved on.",
  },
];

export default function HowIWorkPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="eg-container sec" aria-labelledby="how-h">
          <div className="eg-split">
            <div className="sec-head" style={{ alignContent: "start" }}>
              <span className="eg-label">How I work</span>
              <h1 id="how-h" className="heading-lg" style={{ margin: 0 }}>
                Getting AI past the demo
              </h1>
            </div>

            <div style={{ display: "grid", gap: "var(--space-12)" }}>
              <p className="body-lg eg-measure">
                A few things I&apos;ve learned about getting AI from an idea to something people use.
              </p>

              <div style={{ display: "grid", gap: "var(--space-8)" }}>
                {principles.map((p) => (
                  <div key={p.n} style={{ display: "grid", gridTemplateColumns: "var(--space-8) 1fr", gap: "var(--space-4)", alignItems: "start" }}>
                    <span style={{ fontVariantNumeric: "tabular-nums", fontSize: 13, color: "var(--ink-muted)", paddingTop: 3 }}>{p.n}.</span>
                    <div style={{ display: "grid", gap: "var(--space-2)" }}>
                      <span style={{ fontWeight: 600, fontSize: 16, lineHeight: 1.4 }}>{p.title}</span>
                      <p className="body eg-measure" style={{ color: "var(--ink-muted)", margin: 0 }}>{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="body eg-measure" style={{ color: "var(--ink-muted)" }}>
                If you&apos;re working on something like this, I&apos;m always glad to compare notes.
              </p>

              <div>
                <a className="eg-btn eg-btn--primary" href="/#contact">Get in touch</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
