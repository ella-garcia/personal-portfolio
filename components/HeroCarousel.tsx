"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/kerubin-map.webp",
    alt: "Gender-Smart Investing Map of the Philippines",
    label: "Gender-Smart Investing Map",
    meta: "Kerubin Capital",
  },
  {
    src: "/lyferr-screenshot.webp",
    alt: "Lyferr wildlife travel platform",
    label: "Lyferr",
    meta: "Co-founder & CTO",
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
      }, 400);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const slide = slides[current];

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: "inherit" }}>
      {/* Images stacked, fade between them */}
      {slides.map((s, i) => (
        <div
          key={s.src}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === current ? (fading ? 0 : 1) : 0,
            transition: "opacity 0.4s ease",
          }}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
            priority={i === 0}
          />
        </div>
      ))}

      {/* Caption overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "var(--space-6) var(--space-6) var(--space-6)",
          background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div style={{ display: "grid", gap: 2 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#fff", lineHeight: 1.3 }}>
            {slide.label}
          </span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", lineHeight: 1.3 }}>
            {slide.meta}
          </span>
        </div>

        {/* Dot indicators */}
        <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setFading(true);
                setTimeout(() => { setCurrent(i); setFading(false); }, 400);
              }}
              aria-label={`Show ${slides[i].label}`}
              style={{
                width: i === current ? 20 : 7,
                height: 7,
                borderRadius: 4,
                background: i === current ? "#fff" : "rgba(255,255,255,0.45)",
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
  );
}
