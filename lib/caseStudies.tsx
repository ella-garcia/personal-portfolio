export type CaseStudy = {
  slug: string;
  company: string;
  period: string;
  teaser: string;
  metrics: string[];
  sections: {
    heading: string;
    body: React.ReactNode;
  }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ga4-enterprise",
    company: "Google",
    period: "2022–2025",
    teaser:
      "How do you get 80% of a country's CPG industry to migrate to a new measurement system in six months?",
    metrics: [
      "15% product adoption",
      "80% of Philippines' CPG clients",
      "Significant incremental revenue",
    ],
    sections: [
      {
        heading: "Context",
        body: (
          <>
            <p>
              In 2023, Google sunset Universal Analytics in favor of GA4 — a fundamentally different
              measurement system with a new data model, new reporting structure, and no backwards
              compatibility. For advertisers who relied on UA for conversion tracking, attribution,
              and campaign optimization, losing measurement continuity wasn&apos;t a product inconvenience.
              It was a business risk.
            </p>
            <p>
              In the Philippines, roughly 80% of the country&apos;s CPG (consumer packaged goods) sector
              was still running on UA six months before the deadline. I owned this rollout.
            </p>
          </>
        ),
      },
      {
        heading: "Constraints",
        body: (
          <>
            <p>
              No two clients had the same setup. Implementations ranged from clean single-domain
              tagging to deeply fragmented multi-portal environments spanning retail, marketing, and
              product. Consent frameworks varied. First-party data maturity varied. Engineering
              bandwidth on the client side was limited — and at most accounts, I was working through
              agency partners, not directly with client engineers.
            </p>
            <p>
              Google&apos;s own implementation support didn&apos;t scale to the number of accounts at risk. I
              couldn&apos;t do every migration myself. The constraint wasn&apos;t the product — it was client
              readiness and the absence of a scalable enablement layer.
            </p>
          </>
        ),
      },
      {
        heading: "Hypothesis",
        body: (
          <p>
            Scaled implementation works only if you train the trainers. The bottleneck wasn&apos;t
            willingness — most clients wanted to migrate. The bottleneck was readiness: understanding
            what needed to happen technically before a migration could begin, and having the partner
            and client teams equipped to execute it. If I invested in enablement infrastructure
            instead of direct delivery, the rollout would scale. If I didn&apos;t, I&apos;d lose the tail.
          </p>
        ),
      },
      {
        heading: "Approach",
        body: (
          <>
            <p>
              I segmented clients by readiness tier: those with clean tagging and engaged partners
              who could move quickly, those who needed a pre-migration audit before anything else,
              and those in fragmented environments who needed hands-on scoping first. Sequencing
              mattered — pushing a complex client to migrate too early would produce bad data and
              erode trust in the product.
            </p>
            <p>
              I built hackathon-style training materials for agency partners — practical, technical,
              and outcome-focused. The goal was to make partners capable of running migrations
              independently, not dependent on me to QA each one. For the most complex accounts, I
              ran full technical audits before any migration began: reviewing network calls, tag
              implementations, consent configurations, and 1PD capture setup.
            </p>
            <p>
              For clients with multi-portal setups, I designed implementation sequencing frameworks
              that separated measurement infrastructure from campaign execution — so measurement
              continuity could be restored even when full product migration wasn&apos;t yet feasible.
            </p>
          </>
        ),
      },
      {
        heading: "Outcome",
        body: (
          <>
            <p>
              15% product adoption across 80% of Philippines&apos; CPG clients within the rollout window.
              Measurement continuity maintained across the portfolio with no major attribution gaps
              at deadline. The partner enablement model became the approach used for subsequent
              product rollouts across the region.
            </p>
          </>
        ),
      },
      {
        heading: "What I'd do differently",
        body: (
          <p>
            Earlier investment in a client self-serve diagnostic tool. The manual audit process was
            the bottleneck — it didn&apos;t scale, and I had to triage which accounts got deep attention
            and which got lighter-touch guidance. A structured pre-migration checklist that clients
            or partners could run independently would have freed up more time for the genuinely
            complex accounts and caught implementation errors earlier in the process.
          </p>
        ),
      },
    ],
  },
  {
    slug: "tanaw",
    company: "Tanaw",
    period: "2025–Present",
    teaser:
      "Global hiring is broken. Sourcing the right person takes weeks, evals are inconsistent, and most AI tools just repackage keyword search. I'm building something different.",
    metrics: ["AI-native recruiting platform", "In active development", "0→1"],
    sections: [
      {
        heading: "Problem",
        body: (
          <>
            <p>
              Global talent sourcing is slow, biased toward keyword matching, and poorly calibrated
              to role context. Most tools optimize for volume — surfacing more candidates — when the
              real problem is quality of evaluation. Hiring managers make inconsistent decisions
              because there&apos;s no structured eval layer between "we found candidates" and "we made an
              offer." AI tools that exist today largely repackage semantic search with a GPT wrapper.
              They don&apos;t solve the evaluation problem.
            </p>
          </>
        ),
      },
      {
        heading: "Constraints",
        body: (
          <>
            <p>
              Non-deterministic AI outputs make consistency hard by default. If the system produces
              different assessments of the same candidate depending on prompt phrasing or context
              ordering, it&apos;s not a useful eval tool — it&apos;s noise dressed up as signal.
            </p>
            <p>
              There&apos;s no ground truth to eval against in early stages — no labeled dataset of
              "good hires" specific to the roles and orgs we&apos;re targeting. And the cold-start problem
              is real: without user data, we can&apos;t train on signal. We have to design for
              defensibility before we can design for accuracy.
            </p>
          </>
        ),
      },
      {
        heading: "Core hypothesis",
        body: (
          <p>
            The value isn&apos;t in finding more candidates — it&apos;s in structuring the eval process so
            hiring decisions are faster and more defensible. The AI layer should produce structured
            candidate assessments with explicit rubrics, not ranked lists with hidden scoring logic.
            A hiring manager who can see why a candidate was assessed a certain way can make a
            faster, better decision than one handed a ranked stack they can&apos;t interrogate.
          </p>
        ),
      },
      {
        heading: "Key decisions",
        body: (
          <>
            <p>
              <strong>Structured outputs over rankings.</strong> Rankings collapse nuance and make
              it impossible to audit why a decision was made. Structured assessments with explicit
              rubric dimensions are harder to produce reliably but far more useful — and more
              defensible if a hiring decision is challenged.
            </p>
            <p>
              <strong>Approval gates in the agentic workflow.</strong> The system doesn&apos;t auto-advance
              candidates. Every stage where a human should be in the loop has a gate. This is a
              deliberate product choice — an AI recruiting tool that removes human judgment from the
              loop isn&apos;t a product, it&apos;s a liability. The goal is to make human judgment faster and
              better-informed, not to eliminate it.
            </p>
            <p>
              <strong>Rubric-first eval design.</strong> Before any AI assessment runs, the rubric
              is defined explicitly: what dimensions matter for this role, what good looks like on
              each, and what the weighting is. This makes outputs auditable and makes the system
              adaptable to different role types without retraining.
            </p>
          </>
        ),
      },
      {
        heading: "Current state",
        body: (
          <p>
            Core sourcing and structured assessment pipeline is in active development. Eval rubric
            framework and structured output schema are defined. Early testing with real roles is
            underway — focused on calibration between AI assessments and hiring manager judgment.
            This case study will continue to be updated as the product evolves.
          </p>
        ),
      },
      {
        heading: "What's next",
        body: (
          <p>
            The next milestone is a closed beta with two orgs actively hiring — enough real-world
            signal to test whether the structured assessment outputs are calibrated to how hiring
            managers actually evaluate candidates. The hypothesis is that discrepancies between AI
            assessment and HM judgment will be more diagnostic than agreement — they&apos;ll surface
            where the rubric needs refinement and where HM judgment is inconsistent.
          </p>
        ),
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
