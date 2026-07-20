export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-mark">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 12L12 4L20 12V20H4V12Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              Nook
            </div>
            <p>
              One workspace for every purpose-driven group — groups, goals,
              and every channel, together.
            </p>
            <div className="social-row" style={{ marginTop: 20 }}>
              <a href="#" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 5.9C21.3 6.2 20.5 6.4 19.7 6.5C20.5 6 21.2 5.2 21.5 4.2C20.7 4.7 19.9 5 19 5.2C18.3 4.4 17.3 4 16.2 4C14.1 4 12.4 5.7 12.4 7.8C12.4 8.1 12.4 8.4 12.5 8.6C9.3 8.5 6.5 7 4.6 4.6C4.3 5.2 4.1 5.8 4.1 6.6C4.1 7.9 4.8 9.1 5.9 9.8C5.2 9.8 4.6 9.6 4 9.3V9.4C4 11.3 5.3 12.8 7.1 13.2C6.8 13.3 6.4 13.3 6.1 13.3C5.9 13.3 5.6 13.3 5.4 13.2C5.9 14.8 7.4 15.9 9.1 16C7.8 17 6.1 17.6 4.3 17.6C4 17.6 3.7 17.6 3.4 17.5C5.1 18.6 7.2 19.3 9.4 19.3C16.2 19.3 19.9 13.7 19.9 8.8V8.3C20.7 7.8 21.4 7.1 22 6.3V5.9Z"
                    fill="#64748B"
                  />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="4" stroke="#64748B" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="4" stroke="#64748B" strokeWidth="1.6" />
                  <circle cx="17.2" cy="6.8" r="1" fill="#64748B" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="3" stroke="#64748B" strokeWidth="1.6" />
                  <path d="M8 10V17" stroke="#64748B" strokeWidth="1.6" strokeLinecap="round" />
                  <circle cx="8" cy="7.2" r="1.1" fill="#64748B" />
                  <path
                    d="M12 17V13C12 11.5 13 10.5 14.3 10.5C15.6 10.5 16.5 11.4 16.5 13V17"
                    stroke="#64748B"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Product</h5>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#workflow">How it works</a>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <a href="#">Contact</a>
            <a href="#">About</a>
            <a href="#">Careers</a>
          </div>
          <div className="footer-col">
            <h5>Support</h5>
            <a href="#">Help Center</a>
            <a href="#">Status</a>
            <a href="#">Docs</a>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Nook. All rights reserved.</span>
          <span>Made for teams who&apos;d rather build than switch tabs.</span>
        </div>
      </div>
    </footer>
  );
}
