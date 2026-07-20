import Reveal from "./Reveal";

export default function Compare() {
  return (
    <section className="pad" style={{ background: "var(--surface-2)" }}>
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">
            <span className="dot"></span>Why Nook
          </div>
          <h2>One workspace beats nine open tabs</h2>
          <p>See what changes when communication finally has a home.</p>
        </Reveal>

        <div className="compare-grid">
          <Reveal className="compare-card old">
            <h3>Traditional Communication</h3>
            <ul>
              <li>Multiple apps</li>
              <li>Scattered conversations</li>
              <li>Missed updates</li>
              <li>Difficult tracking</li>
            </ul>
          </Reveal>
          <Reveal className="compare-card new">
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3L19 6V11C19 15.4 16 19.3 12 21C8 19.3 5 15.4 5 11V6L12 3Z"
                  stroke="#2563EB"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
              Our Platform
            </h3>
            <ul>
              <li>Unified workspace</li>
              <li>Goal-focused collaboration</li>
              <li>Embedded communication</li>
              <li>Real-time progress tracking</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
