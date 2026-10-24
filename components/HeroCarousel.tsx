"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    bg: "#262929",
    textColor: "#ffffff",
    mutedColor: "rgba(255,255,255,0.55)",
    label: "Kerubin Capital",
    title: "Gender-Smart\nInvesting Map",
    outcome: "Mapped 2,400+ institutions across the Philippines",
    tag: "Data · Geospatial",
  },
  {
    bg: "#f3d6b6",
    textColor: "#262929",
    mutedColor: "rgba(38,41,41,0.55)",
    label: "Co-founder & CTO",
    title: "Lyferr",
    outcome: "Wildlife travel platform — species-matching from 0 to launch",
    tag: "Product · Engineering",
  },
  {
    bg: "#1d3a2f",
    textColor: "#ffffff",
    mutedColor: "rgba(255,255,255,0.55)",
    label: "Solo build",
    title: "Narrative\nRadar",
    outcome: "Real-time narrative detection across live news sources",
    tag: "AI · NLP",
  },
  {
    bg: "#e8e4dc",
    textColor: "#262929",
    mutedColor: "rgba(38,41,41,0.55)",
    label: "Republic of the Philippines · Commissioned",
    title: "SONA\nPrediction",
    outcome: "Predicted 11 of 14 legislative themes before delivery",
    tag: "NLP · Political data",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((i) => (i + 1) % slides.length);
        setFading(false);
      }, 350);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[current];

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: "inherit" }}>
      {/* Slide backgrounds stacked */}
      {slides.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            background: s.bg,
            opacity: i === current ? (fading ? 0 : 1) : 0,
            transition: "opacity 0.35s ease",
          }}
        />
      ))}

      {/* Content — sits above all backgrounds */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "var(--space-8)",
          opacity: fading ? 0 : 1,
          transition: "opacity 0.2s ease",
        }}
      >
        {/* Top: label + tag */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: slide.mutedColor, letterSpacing: "0.01em" }}>
            {slide.label}
          </span>
          <span style={{
            fontSize: 12,
            fontWeight: 600,
            color: slide.mutedColor,
            border: `1px solid ${slide.mutedColor}`,
            borderRadius: 999,
            padding: "3px 10px",
          }}>
            {slide.tag}
          </span>
        </div>

        {/* Bottom: title + outcome + dots */}
        <div style={{ display: "grid", gap: "var(--space-4)" }}>
          <h2 style={{
            margin: 0,
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            color: slide.textColor,
            whiteSpace: "pre-line",
          }}>
            {slide.title}
          </h2>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: slide.mutedColor, maxWidth: "30ch" }}>
            {slide.outcome}
          </p>

          {/* Dot indicators */}
          <div style={{ display: "flex", gap: 5, alignItems: "center", paddingTop: "var(--space-2)" }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setFading(true);
                  setTimeout(() => { setCurrent(i); setFading(false); }, 350);
                }}
                aria-label={`Show ${slides[i].title}`}
                style={{
                  width: i === current ? 20 : 7,
                  height: 7,
                  borderRadius: 4,
                  background: i === current ? slide.textColor : slide.mutedColor,
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.3s ease, background 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
