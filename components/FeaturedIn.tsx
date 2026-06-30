export default function FeaturedIn() {
  return (
    <section id="featured" className="py-16 px-6 bg-[var(--card-bg)]">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-8">
          Featured In
        </p>

        <div className="border border-[var(--border)] rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start">
          <div className="flex-1">
            <p className="text-xs text-[var(--muted)] mb-1">Google · Temasek · Bain &amp; Company</p>
            <h3 className="font-semibold text-[var(--fg)] text-lg mb-2">
              e-Conomy South East Asia 2024
            </h3>
            <p className="text-sm text-[var(--muted)] mb-4">
              &ldquo;Video commerce and the creator ecosystem across Southeast Asia&rdquo;
            </p>
            <a
              href="https://services.google.com/fh/files/misc/e_conomy_sea_2024_report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--accent)] hover:underline font-medium"
            >
              Read the report ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
