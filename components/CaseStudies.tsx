import { caseStudies } from "@/lib/caseStudies";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-6 bg-[var(--card-bg)]">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-3">
          Case Studies
        </p>
        <h2 className="text-3xl font-bold text-[var(--fg)] mb-12">Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((cs) => (
            <div
              key={cs.slug}
              className="border border-[var(--border)] rounded-2xl p-8 bg-[var(--bg)] flex flex-col gap-6 hover:border-[var(--accent)] transition-colors"
            >
              <div>
                <p className="text-xs text-[var(--muted)] mb-3 font-medium">
                  {cs.company} · {cs.period}
                </p>
                <p className="text-lg font-semibold text-[var(--fg)] leading-snug">
                  {cs.teaser}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {cs.metrics.map((m) => (
                  <span
                    key={m}
                    className="text-xs px-2.5 py-1 rounded-full bg-[var(--card-bg)] text-[var(--muted)] border border-[var(--border)]"
                  >
                    {m}
                  </span>
                ))}
              </div>

              <a
                href={`/work/${cs.slug}`}
                className="text-sm text-[var(--accent)] font-medium hover:underline mt-auto"
              >
                Read case study ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
