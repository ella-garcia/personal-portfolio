export default function Contact() {
  return (
    <section id="contact" className="eg-container sec" aria-labelledby="contact-h">
      <div className="eg-cta">
        <span className="eg-label">Contact</span>
        <h2 id="contact-h" className="eg-cta-title">Say hello.</h2>
        <p className="body eg-measure">
          I&apos;m based in Madrid. The best way to reach me is LinkedIn.
        </p>
        <div>
          <a
            className="eg-btn eg-btn--primary"
            href="https://linkedin.com/in/patricia-ella-garcia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
