const entries = [
  {
    years: "2025–2027",
    company: "IE University + Stanford LEAD",
    lines: [
      "Dual MBA & MS Computer Science — IE University (Madrid)",
      "Stanford LEAD Executive Program — Stanford GSB",
      "Beta Gamma Sigma · Top 20%",
    ],
  },
  {
    years: "2022–2025",
    company: "Google · Product Deployment Engineer · Singapore",
    lines: [
      "Technical product and strategy lead for SEA's largest advertisers.",
      "$160M portfolio, AI solutions on Gemini/GCP, GTM for GA4 + YouTube,",
      "IC lead for Video across Southeast Asia. Analyst on eConomy SEA 2024.",
    ],
  },
  {
    years: "2020–2022",
    company: "Knovo · Product Development Engineer → Business Analyst · Singapore",
    lines: [
      "Migrated platform from web to cross-platform (Figma). Shipped profile",
      "+ wallet features (+20% engagement). Led Philippines market entry strategy.",
    ],
  },
  {
    years: "2021–2022",
    company: "DFNN Group · Digital Marketing Consultant · Philippines",
    lines: [
      "Performance marketing framework + analytics infrastructure for gaming product.",
    ],
  },
  {
    years: "2019–2021",
    company: "iWAVE Inc. · Digital Consultant · Philippines",
    lines: ["Scoped and launched a local government Quarantine Monitoring Solution."],
  },
  {
    years: "2015–2019",
    company: "Early career",
    lines: [
      "Product Designer at Modo (React/JS) · TA at UT Austin (Mobile Apps, Enterprise Computing)",
      "Data Analyst at Applied Materials (automated IP intake: 2 weeks → 4 hours)",
      "Technology Intern in Shanghai + Manila · Trading Analyst at Philippine Stock Exchange",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[var(--card-bg)]">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-12">
          Experience
        </p>

        <div className="space-y-10">
          {entries.map((e) => (
            <div key={e.years} className="flex flex-col sm:flex-row gap-4 sm:gap-12">
              <span className="text-sm text-[var(--muted)] font-mono w-28 flex-shrink-0 pt-0.5">
                {e.years}
              </span>
              <div>
                <p className="font-semibold text-[var(--fg)] mb-1">{e.company}</p>
                {e.lines.map((line, i) => (
                  <p key={i} className="text-sm text-[var(--muted)] leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <a
            href="https://linkedin.com/in/patricia-ella-garcia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--accent)] hover:underline"
          >
            Full profile on LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
