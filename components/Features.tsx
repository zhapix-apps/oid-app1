import Reveal from "./Reveal";

const features = [
  {
    title: "Create Groups",
    desc: "Organize projects, teams, communities, or events.",
    bg: "linear-gradient(155deg,#3B82F6,#1E4FC2)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="8" r="3" stroke="white" strokeWidth="1.7" />
        <circle cx="17" cy="9" r="2.4" stroke="white" strokeWidth="1.7" />
        <path
          d="M3 20C3 16.5 5.5 14 9 14C12.5 14 15 16.5 15 20"
          stroke="white"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M15 15.2C17.9 15.5 20 17.4 20 20"
          stroke="white"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Set Goals",
    desc: "Define a purpose and track progress for every group.",
    bg: "linear-gradient(155deg,#F59E0B,#D97706)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8.5" stroke="white" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="1" fill="white" />
      </svg>
    ),
  },
  {
    title: "Unified Communication",
    desc: "Access WhatsApp, Telegram, calls, and other channels from one place.",
    bg: "linear-gradient(155deg,#22C55E,#15A34A)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 5H20V16H8L4 19V5Z"
          stroke="white"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Smart Notifications",
    desc: "Stay updated with reminders, deadlines, and messages.",
    bg: "linear-gradient(155deg,#818CF8,#5B63E0)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M18 8C18 5.79 15.31 4 12 4C8.69 4 6 5.79 6 8C6 9.5 7 10.5 8 11L6 15C9 16 15 16 18 15L16 11C17 10.5 18 9.5 18 8Z"
          stroke="white"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M9 19H15"
          stroke="white"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Team Collaboration",
    desc: "Assign tasks, share updates, and communicate efficiently.",
    bg: "linear-gradient(155deg,#F472B6,#DB2777)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="7" height="7" rx="1.6" stroke="white" strokeWidth="1.7" />
        <rect x="13" y="4" width="7" height="7" rx="1.6" stroke="white" strokeWidth="1.7" />
        <rect x="4" y="13" width="7" height="7" rx="1.6" stroke="white" strokeWidth="1.7" />
        <rect x="13" y="13" width="7" height="7" rx="1.6" stroke="white" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    title: "Secure Workspace",
    desc: "Role-based permissions and protected collaboration.",
    bg: "linear-gradient(155deg,#14336B,#091F3D)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3L19 6V11C19 15.4 16 19.3 12 21C8 19.3 5 15.4 5 11V6L12 3Z"
          stroke="white"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 12L11.3 13.8L14.8 10.3"
          stroke="white"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="pad" id="features">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">
            <span className="dot"></span>Features
          </div>
          <h2>Built for focused, goal-driven teams</h2>
          <p>
            Every tool your group needs to organize, communicate, and get
            things done — without switching tabs.
          </p>
        </Reveal>

        <div className="feature-grid">
          {features.map((f) => (
            <Reveal className="feature-card" key={f.title}>
              <div className="feature-icon" style={{ background: f.bg }}>
                {f.icon}
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
