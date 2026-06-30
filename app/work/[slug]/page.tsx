import { notFound } from "next/navigation";
import { getCaseStudy, caseStudies } from "@/lib/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) return {};
  return { title: `${cs.company} — Ella Garcia` };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg)", color: "var(--fg)" }}>
      {/* Back nav */}
      <div className="px-6 pt-10 pb-0 max-w-3xl mx-auto">
        <a
          href="/#case-studies"
          className="text-sm hover:opacity-70 transition-opacity"
          style={{ color: "var(--muted)" }}
        >
          ← Back
        </a>
      </div>

      <article className="max-w-3xl mx-auto px-6 pt-12 pb-24">
        {/* Header */}
        <p className="text-sm font-medium mb-2" style={{ color: "var(--accent)" }}>
          {cs.company} · {cs.period}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-8" style={{ color: "var(--fg)" }}>
          {cs.teaser}
        </h1>

        {/* Metrics */}
        <div className="flex flex-wrap gap-3 mb-14 pb-10 border-b" style={{ borderColor: "var(--border)" }}>
          {cs.metrics.map((m) => (
            <span
              key={m}
              className="text-sm px-3 py-1.5 rounded-full font-medium"
              style={{ backgroundColor: "var(--card-bg)", color: "var(--fg)" }}
            >
              {m}
            </span>
          ))}
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {cs.sections.map((s) => (
            <div key={s.heading}>
              <h2
                className="text-xs uppercase tracking-widest font-semibold mb-4"
                style={{ color: "var(--accent)" }}
              >
                {s.heading}
              </h2>
              <div
                className="space-y-4 leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {s.body}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-10 border-t" style={{ borderColor: "var(--border)" }}>
          <a
            href="/#case-studies"
            className="text-sm hover:opacity-70 transition-opacity"
            style={{ color: "var(--accent)" }}
          >
            ← Back to work
          </a>
        </div>
      </article>
    </div>
  );
}
