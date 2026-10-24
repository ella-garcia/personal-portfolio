import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { caseStudies } from "@/lib/caseStudies";

const ArrowIcon = () => (
  <svg viewBox="0 0 18 18" width={18} height={18}>
    <path d="M5 13L13 5M6.5 5H13V11.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const metadata = {
  title: "Work — Ella Garcia",
};

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="eg-container sec" aria-labelledby="work-h">
          <div className="sec-head">
            <span className="eg-label">Work</span>
            <h1 id="work-h" className="heading-lg" style={{ margin: 0 }}>
              Case studies from Google
            </h1>
            <p className="body eg-muted" style={{ maxWidth: "52ch" }}>
              From my time as a Product Deployment Engineer in Singapore. I&apos;ve left the clients unnamed. Each piece starts with the problem and ends with what changed.
            </p>
          </div>

          <div className="eg-bento">
            {caseStudies.map((cs, i) => (
              <a
                key={cs.slug}
                className="eg-card"
                href={`/work/${cs.slug}`}
                style={{ gridColumn: i === 0 || i === 2 ? "span 7" : "span 5" }}
              >
                <span className="eg-notch">
                  <span className="eg-arrow" aria-hidden="true"><ArrowIcon /></span>
                </span>
                <div className="eg-card-head">
                  <span className="eg-card-title">{cs.title}</span>
                  <span className="eg-tag eg-tag--shipped">Shipped</span>
                </div>
                <p className="outcome">{cs.outcome}</p>
                <div className="eg-card-body" style={{ color: "var(--ink-muted)", marginTop: "auto", fontSize: 14, lineHeight: 1.6 }}>
                  {cs.sections[0]?.body}
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
