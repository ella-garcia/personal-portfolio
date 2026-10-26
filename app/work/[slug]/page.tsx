import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getCaseStudy, caseStudies } from "@/lib/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return { title: `${cs.title} — Ella Garcia` };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <>
      <Nav />
      <main>
        <article className="eg-container sec">
          <div style={{ marginBottom: "var(--space-8)" }}>
            <a
              href="/work"
              className="eg-label"
              style={{ color: "var(--ink-muted)", textDecoration: "none" }}
            >
              ← Work
            </a>
          </div>

          <div className="eg-split">
            <div className="sec-head" style={{ alignContent: "start" }}>
              <span className="eg-tag" style={{ alignSelf: "start" }}>{cs.category}</span>
              <h1 className="heading-lg" style={{ margin: 0 }}>{cs.title}</h1>
              <p className="body" style={{ color: "var(--ink-muted)" }}>{cs.outcome}</p>
              <p style={{ fontSize: 13, color: "var(--ink-muted)", margin: 0, lineHeight: 1.5 }}>{cs.method}</p>
            </div>

            <div style={{ display: "grid", gap: "var(--space-12)" }}>
              {cs.sections.map((s) => (
                <div key={s.heading} style={{ display: "grid", gap: "var(--space-4)" }}>
                  <span className="eg-label">{s.heading}</span>
                  <div className="body eg-measure" style={{ lineHeight: 1.65 }}>
                    {s.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
