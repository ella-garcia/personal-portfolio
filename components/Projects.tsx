const currentBuilds = [
  {
    name: "Lyferr",
    status: "Live",
    link: "https://lyferr.com",
    description:
      "Building a data-driven platform to make sustainable travel more accessible and discoverable. Architecting the product strategy, data infrastructure, and user experience from 0 to 1.",
    tags: ["Sustainable Tourism", "Product Strategy", "0→1", "Data Platforms"],
  },
  {
    name: "Kerubin Gender Smart Investing Map",
    status: "Live",
    link: "https://gendersmartinvesting.kerubincapital.com",
    description:
      "A platform for gender-smart investing — helping capital flow toward gender-lens opportunities with better data and tooling for investors. Leading product and strategy.",
    tags: ["FinTech", "Gender Lens Investing", "Product Management", "Impact"],
  },
  {
    name: "Tanaw",
    status: "In Progress",
    link: null,
    description:
      "Building an AI platform to improve how companies find and recruit global talent. Focused on automating workflows and reducing the friction between sourcing and decision-making.",
    tags: ["AI", "Recruiting Tech", "Workflow Automation", "Python"],
  },
];

const professionalWork = [
  {
    name: "AI Advertising Products @ Google",
    status: "Shipped",
    link: null,
    description:
      "Led go-to-market and contributed to development of three AI advertising products built on Gemini and GCP — covering creative analysis, content sourcing, and content assembly for SEA's largest advertisers.",
    tags: ["Gemini", "GCP", "Python", "AI", "Go-to-Market"],
  },
  {
    name: "GA4 Enterprise Implementations",
    status: "Shipped",
    link: null,
    description:
      "Designed and led end-to-end GA4 implementations for major regional advertisers across e-commerce, aviation, healthcare, and financial services. Drove significant adoption across CPG clients in the Philippines.",
    tags: ["GA4", "BigQuery", "SQL", "Measurement", "1PD"],
  },
  {
    name: "Fintech Deep Linking & App Measurement",
    status: "Shipped",
    link: null,
    description:
      "Led a full technical audit and implementation plan for a leading Southeast Asian fintech app — covering deep linking, web-to-app conversion, and app campaign setup across Android and iOS.",
    tags: ["Deep Linking", "Firebase", "App Measurement", "Fintech"],
  },
];

function StatusBadge({ status }: { status: string }) {
  const color =
    status === "Live"
      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
      : status === "In Progress"
      ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
      : "bg-[var(--card-bg)] text-[var(--muted)]";
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${color}`}>
      {status}
    </span>
  );
}

function Card({
  name,
  status,
  link,
  description,
  tags,
}: {
  name: string;
  status: string;
  link: string | null;
  description: string;
  tags: string[];
}) {
  return (
    <div className="border border-[var(--border)] rounded-2xl p-6 bg-[var(--card-bg)] flex flex-col gap-4 hover:border-[var(--accent)] transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div>
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--fg)] hover:text-[var(--accent)] transition-colors"
            >
              {name} ↗
            </a>
          ) : (
            <p className="font-semibold text-[var(--fg)]">{name}</p>
          )}
        </div>
        <StatusBadge status={status} />
      </div>
      <p className="text-sm text-[var(--muted)] leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 rounded-full border border-[var(--border)] text-[var(--muted)]"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-3">
          Projects
        </p>
        <h2 className="text-3xl font-bold text-[var(--fg)] mb-12">What I&apos;m building</h2>

        <p className="text-sm uppercase tracking-widest text-[var(--muted)] mb-6 font-medium">
          Current Builds
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {currentBuilds.map((p) => (
            <Card key={p.name} {...p} />
          ))}
        </div>

        <p className="text-sm uppercase tracking-widest text-[var(--muted)] mb-6 font-medium">
          Professional Work
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {professionalWork.map((p) => (
            <Card key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
