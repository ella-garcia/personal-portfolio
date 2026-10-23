const services = [
  {
    title: "AI deployment and implementation",
    body: "Technical discovery, integration and LLM prototypes with your engineers, through to a live deployment, built on Gemini, Google Cloud and Python.",
  },
  {
    title: "Deployment strategy",
    body: "Scoping what to build against your business case, so technical choices map to revenue and adoption goals.",
  },
  {
    title: "Go-to-market and enablement",
    body: "Regional playbooks, implementation workshops and hackathons that turn one deployment into a repeatable program.",
  },
  {
    title: "Research",
    body: "Data analysis and industry research on AI, video commerce and emerging markets.",
  },
];

export default function Services() {
  return (
    <section id="services" className="eg-container sec" aria-labelledby="services-h">
      <div className="eg-split">
        <div className="sec-head" style={{ alignContent: "start" }}>
          <span className="eg-label">Work with me</span>
          <h2 id="services-h" className="heading-lg" style={{ margin: 0 }}>How I can help</h2>
          <p className="body eg-muted" style={{ maxWidth: "32ch" }}>
            Project-based work for teams taking AI from strategy to something that runs.
          </p>
        </div>

        <div>
          {services.map((s) => (
            <div className="eg-service" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
