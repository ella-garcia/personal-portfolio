"use client";

import { useState } from "react";

export default function Contact() {
  const [kind, setKind] = useState("A role");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, inquiry: kind }),
      });
      if (res.ok) { setStatus("sent"); setForm({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <section id="contact" className="eg-container sec" aria-labelledby="contact-h">
      <div className="eg-split" style={{ alignItems: "start" }}>

        <div className="eg-cta" style={{ paddingBlock: 0 }}>
          <span className="eg-label">Contact</span>
          <h2 id="contact-h" className="eg-cta-title">Continue the conversation.</h2>
          <p className="body eg-measure">
            Hiring for a forward deployed or AI strategy role, or need a deployment shipped? Tell me what you&apos;re working on.
          </p>
          <div style={{ display: "grid", gap: "var(--space-1)" }}>
            <span className="caption eg-muted">Email</span>
            <a className="eg-copy" href="mailto:patriciagabriellegarcia@gmail.com">
              patriciagabriellegarcia@gmail.com
            </a>
          </div>
        </div>

        {status === "sent" ? (
          <div className="eg-tile" style={{ minHeight: 0 }}>
            <p className="body-lg">Message sent — I&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form
            className="eg-tile"
            style={{ minHeight: 0, display: "grid", gap: "var(--space-6)", justifyContent: "stretch" }}
            aria-label="Contact form"
            onSubmit={handleSubmit}
          >
            <fieldset className="eg-choice">
              <legend>What is this about?</legend>
              {["A role", "A project", "Just saying hi"].map((opt) => (
                <span key={opt}>
                  <input
                    type="radio"
                    name="kind"
                    id={`k-${opt}`}
                    checked={kind === opt}
                    onChange={() => setKind(opt)}
                  />
                  <label htmlFor={`k-${opt}`}>{opt}</label>
                </span>
              ))}
            </fieldset>

            <div className="eg-field">
              <label htmlFor="c-name">Name</label>
              <input className="eg-input" id="c-name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div className="eg-field">
              <label htmlFor="c-email">Email</label>
              <input className="eg-input" id="c-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="eg-field">
              <label htmlFor="c-msg">Message</label>
              <textarea className="eg-textarea" id="c-msg" required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            <div>
              <button className="eg-btn eg-btn--primary" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              {status === "error" && <p style={{ marginTop: 8, fontSize: 14, color: "red" }}>Something went wrong. Try emailing directly.</p>}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
