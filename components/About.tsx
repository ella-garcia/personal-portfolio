import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-10">
          About
        </p>

        <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-16 items-start">
          <div className="max-w-[680px] space-y-6 text-[var(--muted)] leading-relaxed text-base">
            <p>
              I spent three and a half years at Google in Singapore as a Product Deployment Engineer
              within gTech — the technical arm of Google&apos;s sales organization. In practice, that
              meant owning a $160M advertiser portfolio and acting as the senior technical product and
              strategy lead for Southeast Asia&apos;s largest advertisers. I built and deployed AI-enabled
              advertising solutions on Gemini and GCP, led go-to-market strategy for major Google
              product launches including GA4 and YouTube, and served as the individual contributor
              lead for Video across the entire Southeast Asia region. I was also an analyst on the
              e-Conomy SEA 2024 report — a joint publication with Google, Temasek, and Bain &amp; Company.
            </p>
            <p>
              I&apos;m currently in Madrid completing a dual MBA and MS in Computer Science at IE
              University (Beta Gamma Sigma, Top 20%), alongside the Stanford LEAD Executive Program at
              Stanford GSB. While studying, I&apos;m building three products:{" "}
              <a href="https://lyferr.com" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">Lyferr</a>
              , a data-driven platform for sustainable travel;{" "}
              <a href="https://gendersmartinvesting.kerubincapital.com" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">Kerubin</a>
              , a gender-smart investing map for gender-lens investors; and Tanaw, an AI platform for
              global talent sourcing and recruiting.
            </p>
            <p>
              I&apos;m Filipina, fluent in English, Filipino (Tagalog), and Mandarin Chinese, and I&apos;ve
              lived and worked across Singapore, the Philippines, the US, China, and now Spain. Outside
              of work I run, and I spend a lot of time thinking about the intersection of AI,
              governance, and speech analysis — both as a practitioner and as a researcher.
            </p>
          </div>

          <div className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-[var(--card-bg)]">
            <Image
              src="/ella-garcia.jpeg"
              alt="Ella Garcia"
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
