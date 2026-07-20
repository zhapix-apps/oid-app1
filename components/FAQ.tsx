"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "How does the free trial work?",
    a: "You get full access to core features for one month, free, no credit card required. If you like it, choose a plan; if not, your groups simply stay archived.",
  },
  {
    q: "Which communication apps are supported?",
    a: "WhatsApp, Telegram, phone calls, email, Zoom, Google Meet, Microsoft Teams, Slack, and Discord — all manageable from one dashboard.",
  },
  {
    q: "Can I upgrade anytime?",
    a: "Yes. You can move between Professional, Business, and Enterprise at any time, and your groups, goals, and history carry over automatically.",
  },
  {
    q: "Is my data secure?",
    a: "Every workspace uses role-based permissions and encrypted connections, so only the people you invite can see a group's conversations and goals.",
  },
  {
    q: "Do you offer business plans?",
    a: "Yes — Business and Enterprise plans add advanced permissions, reporting, automation, and dedicated support for larger teams.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="pad" id="faq" style={{ background: "var(--surface-2)" }}>
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">
            <span className="dot"></span>FAQ
          </div>
          <h2>Questions, answered</h2>
          <p>Everything you need to know before you start your free month.</p>
        </Reveal>

        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal className={`faq-item ${isOpen ? "open" : ""}`} key={item.q}>
                <button
                  className="faq-q"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <svg
                    className="chev"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="#64748B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className="faq-a"
                  style={{ maxHeight: isOpen ? "240px" : "0px" }}
                >
                  <p>{item.a}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
