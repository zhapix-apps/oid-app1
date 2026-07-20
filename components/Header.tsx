export default function Header() {
  return (
    <header>
      <div className="nav-inner">
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
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#workflow">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Stories</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="nav-cta">
          <a href="#pricing" className="btn btn-secondary btn-sm">
            Sign in
          </a>
          <a href="#pricing" className="btn btn-primary btn-sm">
            Start Free
          </a>
        </div>
      </div>
    </header>
  );
}
