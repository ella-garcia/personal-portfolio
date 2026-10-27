export default function Footer() {
  return (
    <footer className="eg-container" style={{ paddingTop: "var(--space-24)" }}>
      <div className="eg-legal">
        <span>Ella Garcia · Madrid</span>
        <span style={{ display: "flex", gap: "var(--space-6)", flexWrap: "wrap" }}>
          <a href="https://linkedin.com/in/patricia-ella-garcia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)">LinkedIn ↗</a>
        </span>
      </div>
    </footer>
  );
}
