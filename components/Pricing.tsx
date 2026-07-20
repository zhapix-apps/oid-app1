import Reveal from "./Reveal";

function Check({ color = "#22C55E" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 13L9 17L19 7"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section className="pad" id="pricing">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">
            <span className="dot"></span>Pricing
          </div>
          <h2>Plans that grow with your team</h2>
          <p>Start free. Upgrade whenever your group needs more room to work.</p>
        </Reveal>

        <div className="price-grid">
          <Reveal className="price-card">
            <h4>Free Trial</h4>
            <div className="price-amt">$0</div>
            <div className="price-period">1 month free</div>
            <ul className="price-feats">
              <li><Check />Create groups</li>
              <li><Check />Basic integrations</li>
              <li><Check />Limited members</li>
            </ul>
            <a href="#" className="btn btn-secondary">Start Free</a>
          </Reveal>

          <Reveal className="price-card popular">
            <div className="badge-pop">Most Popular</div>
            <h4>Professional</h4>
            <div className="price-amt">
              $19<span style={{ fontSize: 15, fontWeight: 500 }}>/mo</span>
            </div>
            <div className="price-period">3-month plan</div>
            <ul className="price-feats">
              <li><Check color="#60A5FA" />Unlimited groups</li>
              <li><Check color="#60A5FA" />Unlimited members</li>
              <li><Check color="#60A5FA" />Premium integrations</li>
              <li><Check color="#60A5FA" />Analytics</li>
            </ul>
            <a href="#" className="btn btn-primary">Choose Professional</a>
          </Reveal>

          <Reveal className="price-card">
            <h4>Business</h4>
            <div className="price-amt">
              $39<span style={{ fontSize: 15, fontWeight: 500 }}>/mo</span>
            </div>
            <div className="price-period">6-month plan</div>
            <ul className="price-feats">
              <li><Check />Advanced permissions</li>
              <li><Check />Reports</li>
              <li><Check />Automation</li>
              <li><Check />Team management</li>
            </ul>
            <a href="#" className="btn btn-secondary">Choose Business</a>
          </Reveal>

          <Reveal className="price-card">
            <h4>Enterprise</h4>
            <div className="price-amt">Custom</div>
            <div className="price-period">Annual plan</div>
            <ul className="price-feats">
              <li><Check />Unlimited users</li>
              <li><Check />API access</li>
              <li><Check />Dedicated support</li>
              <li><Check />Custom branding</li>
            </ul>
            <a href="#" className="btn btn-secondary">Talk to Sales</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
