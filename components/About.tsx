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
              Most of my professional career has been at Google in Singapore, where I spent over
              three years as a technical product and strategy lead on the Ads side. At Google, my
              title was Product Deployment Engineer — which in gTech means you&apos;re the product and
              technical lead for your client portfolio. In practice: I managed a $160M enterprise
              book, architected measurement infrastructure, built AI-enabled advertising solutions
              on Gemini and GCP, led go-to-market strategy for products including GA4 and YouTube,
              and owned the Video product area for Southeast Asia. I also contributed as an analyst
              to the 2024 South East Asia e-Conomy Report on video commerce and the creator economy.
            </p>
            <p>
              I&apos;m now in Madrid completing a dual International MBA and MS in Computer Science at
              IE University, alongside the Stanford LEAD professional certificate program. Outside
              of coursework I&apos;m building three things:{" "}
              <a href="https://lyferr.com" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">Lyferr</a>
              , a data-driven platform for sustainable tourism;{" "}
              <a href="https://gendersmartinvesting.kerubincapital.com" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">Kerubin Capital</a>
              , a tool for gender-smart investing; and Tanaw, an AI platform to improve how
              companies source and recruit global talent. These aren&apos;t side projects in the
              &ldquo;someday&rdquo; sense — they&apos;re active builds I&apos;m working on now.
            </p>
            <p>
              I&apos;m Filipina, grew up across Asia, and speak English, Tagalog, and enough Mandarin
              to get by after a semester at Peking University. When I&apos;m not building, I&apos;m running
              — or pulling apart political speeches to see how language, framing, and delivery shape
              what people actually believe.
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
