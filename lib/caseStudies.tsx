export type CaseStudy = {
  slug: string;
  title: string;
  kind: "case-study" | "project" | "role" | "data";
  outcome: string;
  sections: {
    heading: string;
    body: React.ReactNode;
  }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "gemini-creative-production",
    title: "A Gemini creative production process",
    kind: "case-study",
    outcome: "Measurable quarter-on-quarter revenue lift",
    sections: [
      {
        heading: "The situation",
        body: <p>Clients needed more ad creative than their teams could make.</p>,
      },
      {
        heading: "What I built",
        body: <p>A production process on Gemini, rolled out with the client teams who would run it.</p>,
      },
      {
        heading: "What didn't work at first",
        body: (
          <p>
            Every ad had to be brand safe, and every person, place and promotion in it had to be
            real. The model couldn&apos;t guarantee that on its own. We built a library of approved source
            material and an automated retrieval step that grounded each ad in it.
          </p>
        ),
      },
      {
        heading: "What it changed",
        body: <p>Quarter-on-quarter revenue grew for the clients using it, and creative production became many times faster.</p>,
      },
    ],
  },
  {
    slug: "gemini-video-creator",
    title: "Gemini for video and creator decisions",
    kind: "case-study",
    outcome: "Measurable national sales lift",
    sections: [
      {
        heading: "The situation",
        body: <p>Deciding which creators and content to back took a lot of manual review.</p>,
      },
      {
        heading: "What I built",
        body: (
          <p>
            I used the Gemini API to find highlights in long-form video and check YouTube channel
            suitability, then added sentiment analysis. After that I turned it into a workflow teams
            could run at scale.
          </p>
        ),
      },
      {
        heading: "What didn't work at first",
        body: (
          <p>
            The label a creator gives themselves — say lifestyle — covers only a sliver of what they
            actually make. The model needed far more context to judge what was relevant to a brand.
            Once it had that, it started surfacing creators in niches and small communities the brand
            had never tried, and those brought in new audiences.
          </p>
        ),
      },
      {
        heading: "What it changed",
        body: <p>A clear lift in sales.</p>,
      },
    ],
  },
  {
    slug: "joint-measurement",
    title: "Joint measurement across partners",
    kind: "case-study",
    outcome: "Significant lift in purchase rate",
    sections: [
      {
        heading: "The situation",
        body: (
          <p>
            A manufacturer and its sales and distribution partners each measured their marketing
            separately, so nobody could see what joint campaigns did.
          </p>
        ),
      },
      {
        heading: "What I built",
        body: (
          <p>
            The industry&apos;s first joint measurement setup for them, so they could market together and
            track the results in one place.
          </p>
        ),
      },
      {
        heading: "What didn't work at first",
        body: (
          <p>
            Making it last. Each partner tracked different metrics and wanted to keep control of its
            own data. Most of the work went into bridging those metrics and agreeing who owned what,
            so the setup would still hold long after the first campaign.
          </p>
        ),
      },
      {
        heading: "What it changed",
        body: <p>Purchase rate rose sharply.</p>,
      },
    ],
  },
  {
    slug: "live-data-display-ads",
    title: "Live-data display ads",
    kind: "case-study",
    outcome: "National-scale reach",
    sections: [
      {
        heading: "What I built",
        body: (
          <p>
            A display ad system on Google Cloud that pulled live scores from an external API, so ads
            changed as events did. It ran at the reach of a large national campaign.
          </p>
        ),
      },
      {
        heading: "The constraint",
        body: (
          <p>
            It was the World Cup, so relevance came down to speed. We had a large number of ad
            variants to manage, and latency had to stay low enough that an ad never fell behind the
            match.
          </p>
        ),
      },
    ],
  },
  {
    slug: "one-off-to-programs",
    title: "Turning one-off work into programs",
    kind: "case-study",
    outcome: "Regional go-to-market playbook",
    sections: [
      {
        heading: "What I built",
        body: (
          <p>
            When the same request kept coming up, I tried to make it repeatable. For one
            multinational client I wrote a regional go-to-market playbook. For clients and partners I
            ran hands-on workshops and hackathons, and I built a sales training program that raised
            the team&apos;s product knowledge.
          </p>
        ),
      },
      {
        heading: "The hard part",
        body: (
          <p>
            Finding the gap in the first place. I looked for what several teams were struggling with
            at once, then pulled those teams into the same room.
          </p>
        ),
      },
    ],
  },
  {
    slug: "youtube-technical-lead",
    title: "YouTube technical lead, Southeast Asia",
    kind: "role",
    outcome: "Higher revenue and wider product adoption",
    sections: [
      {
        heading: "The role",
        body: (
          <p>
            I led the YouTube technical product area for the region, which brought higher revenue and
            wider product adoption.
          </p>
        ),
      },
    ],
  },
  {
    slug: "creator-data",
    title: "Creator data for a regional report",
    kind: "data",
    outcome: "e-Conomy SEA 2024",
    sections: [
      {
        heading: "What I built",
        body: (
          <p>
            In a four-month data analyst role, I built the base BigQuery dataset for creator data and
            cleaned it in SQL. I used it to trace video-commerce and creator-economy trends across
            Meta, TikTok, and YouTube for a 2024 regional flagship report Google published with
            outside research partners.
          </p>
        ),
      },
      {
        heading: "The hard part",
        body: (
          <p>
            Each platform measures things its own way, so a lot of the work was making their numbers
            comparable before any trend meant anything.
          </p>
        ),
      },
    ],
  },
  {
    slug: "knovo",
    title: "Before Google: Knovo",
    kind: "role",
    outcome: "Cross-platform migration",
    sections: [
      {
        heading: "The role",
        body: (
          <p>
            As a Product Development Engineer, I led the design migration from a web-only to a
            cross-platform app in Figma. I then helped plan, design, and build profile pages and
            wallet features, which raised engagement.
          </p>
        ),
      },
      {
        heading: "What didn't work at first",
        body: (
          <p>
            Knovo was first built around schools&apos; own systems, in C# and ASP.NET, but the people
            actually using it were students and parents. A lot of the redesign was about closing that
            gap.
          </p>
        ),
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
