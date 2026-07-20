import Reveal from "./Reveal";

const steps = [
  { title: "Create Group", desc: "Spin up a space for your team, project, or community." },
  { title: "Set Goal", desc: "Give the group a clear purpose everyone can rally around." },
  { title: "Invite Members", desc: "Bring in the people who need to be part of it." },
  { title: "Connect Communication Apps", desc: "Link WhatsApp, Slack, email, and more in a few clicks." },
  { title: "Collaborate", desc: "Share updates and messages without leaving Nook." },
  { title: "Track Progress", desc: "Watch goals move forward with live progress indicators." },
  { title: "Achieve Goals", desc: "Close the loop and celebrate what the group set out to do." },
];

export default function Workflow() {
  return (
    <section className="pad" id="workflow" style={{ background: "var(--surface-2)" }}>
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">
            <span className="dot"></span>How it works
          </div>
          <h2>From first invite to finished goal</h2>
          <p>A clear, repeatable path every group follows — nothing gets lost between steps.</p>
        </Reveal>

        <div className="workflow-wrap">
          <div className="workflow-line"></div>
          <div className="workflow-list">
            {steps.map((s, i) => (
              <Reveal className="wf-step" key={s.title}>
                <div className="wf-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="wf-text">
                  <b>{s.title}</b>
                  <span>{s.desc}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
