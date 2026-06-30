"use client";

import { useState } from "react";

const services = [
  {
    title: "AI Strategy & Implementation",
    description:
      "Designing AI workflows that actually ship — strategy, tool selection, and GTM behind products that use it. Built on Gemini, GCP, Python at enterprise scale.",
  },
  {
    title: "Product Strategy & 0→1 (AdTech / MarTech)",
    description:
      "GTM and product strategy with a track record in AdTech/MarTech at enterprise scale, and active builds in sustainable tech and fintech.",
  },
  {
    title: "Product Consulting (Project-Based)",
    description:
      "Scoped engagements on specific problems — GTM reviews, early-stage strategy, measurement infrastructure, product audits. A sharp outside perspective on a defined problem.",
  },
  {
    title: "Research & Thought Leadership",
    description:
      "Contributing to industry reports, policy work, and academic research on AI, governance, and emerging markets. Open to think tanks, research groups, and policy institutes.",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiry: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", inquiry: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* How I can help */}
        <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-3">
          Work with me
        </p>
        <h2 className="text-3xl font-bold text-[var(--fg)] mb-4">How I can help</h2>
        <p className="text-[var(--muted)] mb-10 max-w-2xl">
          For teams that need senior technical product thinking — or someone who&apos;s done the hard
          work of bridging AI strategy and real implementation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-[var(--border)] rounded-2xl p-6 bg-[var(--card-bg)]"
            >
              <p className="font-semibold text-[var(--fg)] mb-2">{s.title}</p>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-[var(--muted)] mb-16">
          Not sure which fits? Just say hello.
        </p>

        {/* Contact form */}
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-[var(--fg)] mb-4">Let&apos;s talk.</h3>
            <p className="text-[var(--muted)] text-sm leading-relaxed mb-8 max-w-md">
              I&apos;m open to consulting and advisory work, research collaborations, and conversations
              about what you&apos;re building. If it sits at the intersection of AI, growth, and impact —
              especially in sustainable tech, fintech, or AdTech/MarTech — I&apos;m especially interested.
              No cold pitches, but genuine conversations are always welcome.
            </p>

            {status === "sent" ? (
              <p className="text-green-600 dark:text-green-400 font-medium">
                Message sent! I&apos;ll be in touch soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-[var(--fg)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-[var(--fg)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors text-sm"
                  />
                </div>
                <select
                  required
                  value={form.inquiry}
                  onChange={(e) => setForm({ ...form, inquiry: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-[var(--fg)] focus:outline-none focus:border-[var(--accent)] transition-colors text-sm appearance-none"
                >
                  <option value="" disabled>
                    Inquiry type
                  </option>
                  <option>Consulting / Advisory</option>
                  <option>Collaboration or partnership</option>
                  <option>Just saying hi</option>
                </select>
                <textarea
                  placeholder="Message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-[var(--fg)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors text-sm resize-none"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="px-8 py-3 rounded-full bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {status === "sending" ? "Sending…" : "Send"}
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-sm">Something went wrong. Try emailing directly.</p>
                )}
              </form>
            )}
          </div>

          <div className="lg:w-56 flex flex-col gap-4 lg:pt-24">
            <a
              href="mailto:patriciagabriellegarcia@gmail.com"
              className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors break-all"
            >
              patriciagabriellegarcia@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/patricia-ella-garcia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
