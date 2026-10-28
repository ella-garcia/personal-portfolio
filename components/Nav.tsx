"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const links = [
  { href: "/#about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/workshops", label: "Workshops" },
  { href: "/how-i-work", label: "How I work" },
];

export default function Nav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Scroll to hash target after client-side cross-page navigation
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 80);
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;
    const ids = ["top", "about", "deployments", "builds", "awards", "contact"];
    const obs = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const o = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveSection(`#${id}`); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      o.observe(el);
      return o;
    });
    return () => obs.forEach((o) => o?.disconnect());
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return pathname === "/" && activeSection === href.slice(1);
    }
    return pathname === href;
  };

  const isDark = resolvedTheme === "dark";

  return (
    <header className="eg-container" style={{ position: "sticky", top: 0, zIndex: 5, background: "var(--ground)" }}>
      <a
        href="#main-content"
        style={{
          position: "absolute", left: -9999, top: "auto", width: 1, height: 1, overflow: "hidden",
        }}
        onFocus={(e) => { e.currentTarget.style.left = "var(--space-4)"; e.currentTarget.style.width = "auto"; e.currentTarget.style.height = "auto"; }}
        onBlur={(e) => { e.currentTarget.style.left = "-9999px"; e.currentTarget.style.width = "1px"; e.currentTarget.style.height = "1px"; }}
      >
        Skip to main content
      </a>
      <nav className="eg-nav" aria-label="Main">
        <Link className="eg-wordmark" href="/">Ella Garcia</Link>
        <div className="eg-nav-pill">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <a
            className="eg-btn eg-btn--primary"
            href="https://linkedin.com/in/patricia-ella-garcia"
            target="_blank"
            rel="noopener noreferrer"
            style={{ minHeight: 36, padding: "0 16px", fontSize: 14, fontWeight: 600 }}
          >
            Contact
          </a>
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label="Toggle dark mode"
              aria-pressed={isDark}
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--on-deep)", fontSize: 16, padding: "0 8px", minHeight: 36, display: "flex", alignItems: "center" }}
            >
              {isDark ? "☀" : "🌙"}
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
