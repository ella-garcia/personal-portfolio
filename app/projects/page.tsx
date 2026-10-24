import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";

const ArrowIcon = () => (
  <svg viewBox="0 0 18 18" width={18} height={18}>
    <path d="M5 13L13 5M6.5 5H13V11.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const metadata = {
  title: "Projects — Ella Garcia",
};

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="eg-container sec" aria-labelledby="projects-h">
          <div className="sec-head">
            <span className="eg-label">Projects</span>
            <h1 id="projects-h" className="heading-lg" style={{ margin: 0 }}>
              Things I build on my own time
            </h1>
            <p className="body eg-muted" style={{ maxWidth: "52ch" }}>
              From first sketch to something people use.
            </p>
          </div>

          <div className="eg-bento">

            {/* Gender-Smart Investing Map */}
            <a
              className="eg-card card-accent"
              href="https://gendersmartinvesting.kerubincapital.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ gridColumn: "span 7", gridRow: "span 2" }}
            >
              <span className="eg-notch"><span className="eg-arrow" aria-hidden="true"><ArrowIcon /></span></span>
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: "var(--radius-sm)", overflow: "hidden", marginBottom: "var(--space-4)" }}>
                <Image src="/kerubin-map.webp" alt="Gender-Smart Investing Map" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="eg-card-head">
                <span className="eg-card-title">Gender-Smart Investing Map of the Philippines</span>
                <span className="eg-tag eg-tag--live">Live</span>
              </div>
              <p className="eg-card-body">
                Technical lead, for Kerubin Capital with Investing in Women and the Manila Angel Investors Network. There wasn&apos;t one place to look up women-led and gender-lens ventures in the Philippines, or the people funding them. I built a directory and network map to fix that. It runs on Next.js and Vercel with Airtable behind it. Four types of organisation can submit their own entries, and the map shows who is connected to whom.
              </p>
              <ul className="eg-tags eg-card-foot">
                {["Next.js", "TypeScript", "Airtable", "D3"].map((t) => <li className="eg-tag" key={t}>{t}</li>)}
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
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: "var(--radius-sm)", overflow: "hidden", marginBottom: "var(--space-4)" }}>
                <Image src="/lyferr-screenshot.webp" alt="Lyferr wildlife travel platform" fill style={{ objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div className="eg-card-head">
                <span className="eg-card-title">Lyferr</span>
                <span className="eg-tag eg-tag--live">Live</span>
              </div>
              <p className="eg-card-body">
                Co-founder and CTO. Most people book a wildlife trip to see one animal, and whether they do depends a lot on the guide. Lyferr is a marketplace that starts from the species. It matches travellers with local guides who know that animal in that place, and puts bookings next to guide expertise and real-time scientific data. I took it from concept to a live platform in five weeks and designed the two algorithms behind it.
              </p>
              <ul className="eg-tags eg-card-foot">
                {["Matching algorithms", "0 to 1"].map((t) => <li className="eg-tag" key={t}>{t}</li>)}
              </ul>
            </a>

            {/* NarrativeRadar */}
            <div className="eg-card" style={{ gridColumn: "span 5" }}>
              <div className="eg-card-head">
                <span className="eg-card-title">NarrativeRadar</span>
                <span className="eg-tag eg-tag--shipped">1st place · CIVICA EU AI Hackathon</span>
              </div>
              <p className="eg-card-body">
                Built with Henry Kurze (Hertie School) and Laura Luca (SNSPA). EU rules like the Digital Services Act ask platforms to be open about what they host. Most auditing tools still work on text, while more and more of what people watch is short-form video. We built an auditing tool that takes a video and checks it against independent fact-checks and EU platform law, comparing it with the moderation logs platforms publish about themselves.
              </p>
              <p className="eg-card-body" style={{ color: "var(--ink-muted)" }}>
                Set up as a chain of specialised models: Whisper transcribes the audio, Hive classifies what&apos;s on screen, ChatGPT and Claude cross-reference the result against the legal frameworks and draft the policy notes.
              </p>
              <ul className="eg-tags eg-card-foot">
                {["Whisper", "Hive", "Claude", "Python"].map((t) => <li className="eg-tag" key={t}>{t}</li>)}
              </ul>
            </div>

            {/* SONA prediction */}
            <div className="eg-card" style={{ gridColumn: "span 7" }}>
              <div className="eg-card-head">
                <span className="eg-card-title">Predicting the State of the Nation Address</span>
                <span className="eg-tag eg-tag--shipped">Solo · SONA 2026</span>
              </div>
              <p className="eg-card-body">
                For years I watched the President&apos;s State of the Nation Address with a notes app open, logging which topics came up and timing how many minutes each one got. This year I turned my manual tracking into a weighted scoring model. Claude handled the volume: six months of pre-SONA news, investment pledges, priority bills and coalition stances, scored and written up.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)", margin: "var(--space-4) 0" }}>
                <div style={{ display: "grid", gap: "var(--space-1)" }}>
                  <span style={{ fontSize: 13, color: "var(--ink-muted)" }}>What it got right</span>
                  <span className="body">87% of predicted content came up. 21 of 25 bingo squares.</span>
                </div>
                <div style={{ display: "grid", gap: "var(--space-1)" }}>
                  <span style={{ fontSize: 13, color: "var(--ink-muted)" }}>What it got wrong</span>
                  <span className="body">The order. A war in the Middle East changed the speech&apos;s priorities at the last minute.</span>
                </div>
              </div>
              <ul className="eg-tags eg-card-foot">
                {["Scoring model", "Claude", "Political strategy"].map((t) => <li className="eg-tag" key={t}>{t}</li>)}
              </ul>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
