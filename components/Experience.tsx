type Entry = {
  years: string;
  company: string;
  lines: string[];
  cert?: {
    years: string;
    name: string;
    org: string;
    line: string;
  };
};

const entries: Entry[] = [
  {
    years: "2025–2027",
    company: "IE University · Madrid, Spain",
    lines: [
      "Dual MBA & MS in Computer Science and Business Technology",
      "Beta Gamma Sigma · Top 20% of class",
    ],
    cert: {
      years: "2025–2026",
      name: "Stanford LEAD Professional Certificate",
      org: "Stanford Graduate School of Business",
      line: "Executive program in innovation and organizational transformation.",
    },
  },
  {
    years: "2022–2025",
    company: "Google · Product Deployment Engineer · Singapore",
    lines: [
      "Owned the product and technical strategy for Southeast Asia's and Pakistan's largest advertisers — a $160M portfolio. Built AI-enabled advertising solutions on Gemini and GCP, led go-to-market for GA4 and YouTube, and served as IC lead for the Video product area across SEA. Contributed as an analyst to Google's 2024 South East Asia e-Conomy Report on the creator economy.",
    ],
  },
  {
    years: "2020–2022",
    company: "Knovo · Product Development Engineer → Business Analyst · Singapore",
    lines: [
      "Led product and design across two roles at this EdTech startup. Migrated the platform from web to cross-platform (Figma), shipped profile and wallet features (+20% engagement), and ran A/B testing and usability research. As Business Analyst: developed the go-to-market strategy for expansion into the Philippines.",
    ],
  },
  {
    years: "2021–2022",
    company: "DFNN Group · Digital Marketing Consultant · Philippines",
    lines: [
      "Built the performance marketing framework and analytics infrastructure for a gaming product from scratch. Conducted competitive analysis to inform brand positioning for subregional market entry.",
    ],
  },
  {
    years: "2019–2021",
    company: "iWAVE Inc. · Digital Consultant · Philippines",
    lines: [
      "Scoped and launched a local government Quarantine Monitoring Solution in collaboration with the engineering team. Defined technical requirements for customer-facing digital products.",
    ],
  },
  {
    years: "2015–2019",
    company: "Early career · Austin / Manila / Shanghai",
    lines: [
      "Product Designer at Modo (React/JS) · Teaching Assistant at UT Austin (Mobile Apps, Web Services, Enterprise Computing) · Data Analyst at Applied Materials (automated IP investigation intake: 2 weeks → 4 hours) · Technology Intern at Liwayway Marketing in Shanghai · IT Intern at Manila Department of Public Works (built a Messenger chatbot that cut information turnaround from 2 weeks to 3 days) · Trading Analyst at the Philippine Stock Exchange.",
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
            <div key={e.years}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-12">
                <span className="text-sm text-[var(--muted)] font-mono w-28 flex-shrink-0 pt-0.5">
                  {e.years}
                </span>
                <div className="flex-1">
                  <p className="font-semibold text-[var(--fg)] mb-1">{e.company}</p>
                  {e.lines.map((line, i) => (
                    <p key={i} className="text-sm text-[var(--muted)] leading-relaxed">
                      {line}
                    </p>
                  ))}

                  {/* Stanford cert — visually lighter, indented */}
                  {e.cert && (
                    <div className="mt-4 pl-4 border-l border-[var(--border)]">
                      <p className="text-xs text-[var(--muted)] font-mono mb-0.5">{e.cert.years}</p>
                      <p className="text-sm font-medium text-[var(--muted)]">{e.cert.name}</p>
                      <p className="text-xs text-[var(--muted)] opacity-70">{e.cert.org}</p>
                      <p className="text-xs text-[var(--muted)] opacity-70 mt-0.5">{e.cert.line}</p>
                    </div>
                  )}
                </div>
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
