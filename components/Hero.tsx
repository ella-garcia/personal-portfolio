"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-5xl mx-auto"
    >
      <div className="max-w-3xl">
        <p className="text-xs md:text-sm text-[var(--accent)] font-medium mb-6 tracking-wide uppercase">
          Taking on consulting projects · AI, product strategy &amp; growth
        </p>

        <h1 className="text-[clamp(56px,10vw,120px)] font-bold leading-none tracking-tight text-[var(--fg)] mb-6">
          Ella Garcia
        </h1>

        <p className="text-base md:text-xl text-[var(--muted)] font-medium mb-8">
          Ex-Google · Technical Product &amp; Strategy. Builder.
        </p>

        <p className="text-base md:text-lg text-[var(--muted)] leading-relaxed max-w-2xl mb-10">
          I spent three and a half years at Google in Singapore as the technical product and
          strategy lead for Southeast Asia&apos;s largest advertisers — building AI-enabled solutions,
          leading go-to-market strategy, and getting very comfortable at the intersection of product,
          data, and commercial outcomes. Now I&apos;m in Madrid completing a dual MBA and MS in Computer
          Science at IE University, and building on the side: a sustainable tourism platform, a
          gender-smart investing tool, and an AI recruiting platform. I like problems that are
          technically interesting and actually matter.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-opacity"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-full border border-[var(--border)] text-[var(--fg)] font-medium hover:bg-[var(--card-bg)] transition-colors"
          >
            See what I&apos;m building
          </a>
        </div>
      </div>

      <div className="mt-16 flex justify-start">
        <a href="#about" className="text-[var(--muted)] animate-bounce text-2xl" aria-label="Scroll down">
          ↓
        </a>
      </div>
    </section>
  );
}
