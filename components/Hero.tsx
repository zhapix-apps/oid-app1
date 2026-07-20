"use client";

import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import Counter from "./Counter";

export default function Hero() {
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (!window.matchMedia("(pointer:fine)").matches) return;

    const handleMove = (e: MouseEvent) => {
      const r = stage.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      stage.querySelectorAll<HTMLElement>(".float-card").forEach((c, i) => {
        const depth = 12 + i * 4;
        c.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    };
    const handleLeave = () => {
      stage.querySelectorAll<HTMLElement>(".float-card").forEach((c) => {
        c.style.transform = "";
      });
    };

    stage.addEventListener("mousemove", handleMove);
    stage.addEventListener("mouseleave", handleLeave);
    return () => {
      stage.removeEventListener("mousemove", handleMove);
      stage.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <Reveal className="in">
            <div className="eyebrow">
              <span className="dot"></span>Now connecting 9 platforms in one
              inbox
            </div>
            <h1>
              Everything Your Team Needs.{" "}
              <span className="accent-text">One Workspace.</span>
            </h1>
            <p className="sub">
              Create groups, define goals, connect communication channels,
              and collaborate effortlessly from one organized platform.
            </p>
            <div className="hero-buttons">
              <a href="#pricing" className="btn btn-primary">
                Start Free for 1 Month
              </a>
              <a href="#demo" className="btn btn-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                </svg>
                Watch Demo
              </a>
            </div>
            <p className="hero-note">
              No credit card required · Cancel anytime · <b>4.9/5</b> from
              2,300+ teams
            </p>
          </Reveal>

          <div className="stage in" ref={stageRef}>
            <div className="float-card fc-1">
              <div
                className="icon-badge"
                style={{
                  background: "linear-gradient(155deg,#3FD070,#1FA855)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3C7.03 3 3 7.03 3 12C3 13.6 3.42 15.1 4.15 16.4L3 21L7.7 19.87C8.96 20.56 10.43 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3Z"
                    fill="white"
                  />
                </svg>
              </div>
              WhatsApp synced
            </div>
            <div className="float-card fc-2">
              <div
                className="icon-badge"
                style={{
                  background: "linear-gradient(155deg,#4FB3F5,#2696E8)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M21 3L2 10.5L9.5 13L12 21L15 15L21 3Z" fill="white" />
                </svg>
              </div>
              Telegram connected
            </div>
            <div className="float-card fc-3">
              <div
                className="icon-badge"
                style={{
                  background: "linear-gradient(155deg,#FDBA43,#F59E0B)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92V19a2 2 0 0 1-2.18 2 19.9 19.9 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.9 19.9 0 0 1 2.06 3.18 2 2 0 0 1 4 1h2.09a2 2 0 0 1 2 1.72c.13.98.36 1.94.68 2.85a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.23-1.23a2 2 0 0 1 2.11-.45c.91.32 1.87.55 2.85.68A2 2 0 0 1 22 16.92z"
                    stroke="white"
                    strokeWidth="1.6"
                    fill="none"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              Call reminder in 5m
            </div>
            <div className="float-card fc-4">
              <div
                className="icon-badge"
                style={{
                  background: "linear-gradient(155deg,#8B93FF,#5B63E0)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="white"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M3 7L12 13L21 7"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              3 new emails
            </div>

            <div className="dash">
              <div className="dash-bar">
                <span></span>
                <span></span>
                <span></span>
                <div className="dash-title">Nook · Product Launch group</div>
              </div>
              <div className="dash-body">
                <div className="dash-side">
                  <div className="dash-group active">
                    <div className="sq" style={{ background: "#2563EB" }}></div>
                    Launch Team
                  </div>
                  <div className="dash-group">
                    <div className="sq" style={{ background: "#22C55E" }}></div>
                    Design Guild
                  </div>
                  <div className="dash-group">
                    <div className="sq" style={{ background: "#F59E0B" }}></div>
                    Customer Voices
                  </div>
                  <div className="dash-group">
                    <div className="sq" style={{ background: "#60A5FA" }}></div>
                    Weekly Sync
                  </div>
                </div>
                <div className="dash-main">
                  <div className="dash-goal">
                    <div className="dash-goal-top">
                      <span>GOAL · Ship v2.0 by Friday</span>
                      <span>68%</span>
                    </div>
                    <div className="progress-track">
                      <div className="progress-fill"></div>
                    </div>
                  </div>
                  <div className="dash-row">
                    <div className="dash-mini">
                      <b>12</b>
                      <span>Members active</span>
                    </div>
                    <div className="dash-mini">
                      <b>5</b>
                      <span>Channels linked</span>
                    </div>
                    <div className="dash-mini">
                      <b>3</b>
                      <span>Tasks due today</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Reveal className="stats-row" as="div">
          <div className="stat">
            <b>
              <Counter target={12000} />
            </b>
            <span>Teams organized</span>
          </div>
          <div className="stat">
            <b>
              <Counter target={9} />
            </b>
            <span>Integrations</span>
          </div>
          <div className="stat">
            <b>
              <Counter target={48} />
            </b>
            <span>Hours saved / month</span>
          </div>
          <div className="stat">
            <b>
              <Counter target={99} />%
            </b>
            <span>Uptime</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
