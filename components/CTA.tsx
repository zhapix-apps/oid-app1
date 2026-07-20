import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="pad">
      <div className="wrap">
        <Reveal className="cta-panel">
          <h2>Start Organizing Your Team Today</h2>
          <p>One month free. No credit card. Cancel whenever you like.</p>
          <div className="cta-buttons">
            <a href="#pricing" className="btn btn-primary">
              Start Your Free Month
            </a>
            <a href="#demo" className="btn btn-secondary">
              Schedule a Demo
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
