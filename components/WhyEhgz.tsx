"use client";

import { useEffect, useRef } from "react";

const problems = [
  {
    num: "01",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="8" y1="9" x2="16" y2="9" />
        <line x1="8" y1="13" x2="12" y2="13" />
      </svg>
    ),
    headline: ["Texting a venue", "on WhatsApp"],
    scene: '"Hi, table for 4 on Friday?" … no reply for 3 hours … you follow up … they say they\'re full … you end up somewhere random.',
  },
  {
    num: "02",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    headline: ["Trusting Google's", "outdated listings"],
    scene: "You drive across Cairo, spend 40 minutes parking, walk up to the door — and it says \"Permanently Closed.\"",
  },
  {
    num: "03",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    headline: ["Showing up", "and hoping"],
    scene: "No real reviews. No confirmed availability. No idea what you're walking into. Just a vibe and a prayer.",
  },
];

const solutions = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="1" width="7" height="7" rx="1.5" />
        <rect x="10" y="1" width="7" height="7" rx="1.5" />
        <rect x="1" y="10" width="7" height="7" rx="1.5" />
        <polyline points="10,13.5 12,15.5 17,10.5" />
      </svg>
    ),
    title: "One app. Cairo's best tables.",
    desc: "Every restaurant, café, and bar worth visiting — in one beautifully curated platform. No more scattering across 5 apps.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="2,9 7,14 16,4" />
      </svg>
    ),
    title: "Instant, confirmed reservations",
    desc: "Real-time availability. Book in seconds, get confirmed immediately. Zero WhatsApp messages required.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 1L11 6H17L12.5 9.5L14 15L9 11.5L4 15L5.5 9.5L1 6H7Z" />
      </svg>
    ),
    title: "Every venue is personally verified",
    desc: "We visit, we vet, we curate. If it's on Ehgz, it's open, it's real, and it meets the standard.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3" />
        <path d="M9 1a7 7 0 0 1 7 7c0 5-7 10-7 10S2 13 2 8a7 7 0 0 1 7-7z" />
      </svg>
    ),
    title: "Built for Cairo, by Cairo",
    desc: "Zamalek to New Cairo, Maadi to Heliopolis — we know every neighbourhood, every vibe, every hidden gem.",
  },
];

export default function WhyEhgz() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal");
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why" ref={sectionRef} className="overflow-hidden">
      {/* ── Part 1: Problems ── */}
      <div
        className="py-[100px] pb-20 relative"
        style={{
          background: "#0A0705",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(180,30,30,0.06) 0%, transparent 70%)",
          }}
        />
        {/* Horizontal lines background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.015) 60px, rgba(255,255,255,0.015) 61px)",
          }}
        />

        <div className="relative max-w-[1200px] mx-auto px-6">
          {/* Intro */}
          <div className="text-center mb-[72px] reveal">
            <div
              className="text-xs font-semibold tracking-[0.22em] uppercase text-[#FF6B6B] mb-4 flex items-center justify-center gap-2.5"
            >
              <span className="inline-block w-6 h-px bg-[#FF6B6B] opacity-50" />
              Sound familiar?
              <span className="inline-block w-6 h-px bg-[#FF6B6B] opacity-50" />
            </div>
            <h2
              className="font-inter font-black tracking-[-3px] leading-[1] text-[#FAFAF8]"
              style={{ fontSize: "clamp(38px, 5vw, 68px)" }}
            >
              Booking in Cairo<br />
              <span style={{ color: "rgba(250,250,248,0.2)" }}>was broken.</span>
            </h2>
          </div>

          {/* Problem cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-0.5 rounded-[24px] overflow-hidden border"
            style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,80,80,0.12)" }}
          >
            {problems.map((p, i) => (
              <div
                key={p.num}
                className={`reveal delay-${i + 1} relative overflow-hidden px-9 py-12 pb-11 transition-colors duration-300 group`}
                style={{ background: "rgba(10,7,5,0.95)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(20,10,8,0.98)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(10,7,5,0.95)"; }}
              >
                {/* Red top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: "linear-gradient(to right, transparent, rgba(255,80,80,0.4), transparent)" }}
                />
                {/* Ghost num */}
                <div
                  className="absolute bottom-4 right-5 font-playfair font-black leading-none select-none pointer-events-none"
                  style={{ fontSize: 80, color: "rgba(255,80,80,0.05)" }}
                >
                  {p.num}
                </div>
                {/* Icon */}
                <div
                  className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mb-7 border"
                  style={{ background: "rgba(255,80,80,0.08)", borderColor: "rgba(255,80,80,0.2)" }}
                >
                  {p.icon}
                </div>
                {/* Headline with strikethrough */}
                <div
                  className="font-inter font-black tracking-[-0.8px] leading-[1.15] text-[#FAFAF8] mb-3.5 relative"
                  style={{ fontSize: "clamp(20px, 2vw, 26px)" }}
                >
                  <span className="relative inline">
                    {p.headline[0]}<br />{p.headline[1]}
                    <span
                      className="absolute left-0 right-0 h-[2px]"
                      style={{ top: "50%", background: "rgba(255,80,80,0.7)", transform: "translateY(-50%) rotate(-1deg)" }}
                    />
                  </span>
                </div>
                <p className="text-[13px] leading-[1.65] text-[rgba(250,250,248,0.35)] italic">{p.scene}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bridge ── */}
      <div className="py-6 px-4 sm:px-6 relative overflow-hidden" style={{ background: "#080808" }}>
        <div className="max-w-[1200px] mx-auto">
          <div
            className="reveal relative rounded-[32px] overflow-hidden border px-8 sm:px-16 py-14 sm:py-20"
            style={{
              background: "linear-gradient(135deg, rgba(201,168,76,0.07) 0%, rgba(10,8,5,0.95) 50%, rgba(196,135,90,0.05) 100%)",
              borderColor: "rgba(201,168,76,0.2)",
            }}
          >
            {/* Gold top accent line */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 pointer-events-none"
              style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }}
            />

            {/* Faint Arabic watermark */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
              aria-hidden="true"
            >
              <span
                className="font-inter font-black text-center leading-none"
                style={{ fontSize: "clamp(120px, 22vw, 280px)", color: "rgba(201,168,76,0.04)", letterSpacing: "-4px" }}
              >
                إحجز
              </span>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">

              {/* Left: The statement */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  {/* Logo mark */}
                  <div
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center text-base font-black text-[#080808] flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #C9A84C, #D48B3A)" }}
                  >
                    E
                  </div>
                  <span
                    className="text-xs font-semibold tracking-[0.22em] uppercase"
                    style={{ color: "rgba(201,168,76,0.7)" }}
                  >
                    The fix
                  </span>
                </div>

                <h2
                  className="font-inter font-black leading-[0.95] tracking-[-3px] mb-6"
                  style={{ fontSize: "clamp(42px, 5.5vw, 76px)" }}
                >
                  We built the app<br />
                  <span className="gradient-text">Cairo was missing.</span>
                </h2>

                <p
                  className="leading-[1.7] max-w-[480px]"
                  style={{ fontSize: "clamp(15px, 1.5vw, 17px)", color: "rgba(250,250,248,0.55)" }}
                >
                  Ehgz is Cairo&apos;s first curated restaurant discovery and
                  instant booking platform — built specifically for a city that
                  deserved better than DMs and dead phone numbers.
                </p>
              </div>

              {/* Right: Proof points */}
              <div className="flex flex-col gap-4 lg:w-[320px] flex-shrink-0">
                {[
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="2,9 7,14 16,4" />
                      </svg>
                    ),
                    label: "Instant booking confirmation",
                    sub: "No calls. No DMs. No waiting.",
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 1L11 6H17L12.5 9.5L14 15L9 11.5L4 15L5.5 9.5L1 6H7Z" />
                      </svg>
                    ),
                    label: "Every venue personally vetted",
                    sub: "If it's on Ehgz, it's worth your time.",
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="8" r="3" />
                        <path d="M9 1a7 7 0 0 1 7 7c0 5-7 10-7 10S2 13 2 8a7 7 0 0 1 7-7z" />
                      </svg>
                    ),
                    label: "Built for Cairo, by Cairo",
                    sub: "From Zamalek to New Giza — we know every corner.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-4 rounded-2xl border"
                    style={{ background: "rgba(201,168,76,0.04)", borderColor: "rgba(201,168,76,0.12)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border"
                      style={{ background: "rgba(201,168,76,0.1)", borderColor: "rgba(201,168,76,0.18)" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-[#FAFAF8] leading-tight mb-0.5">{item.label}</div>
                      <div className="text-[12px]" style={{ color: "rgba(250,250,248,0.4)" }}>{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── Part 2: Solutions ── */}
      <div className="py-20 pb-[120px]" style={{ background: "#0f0f0f" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {solutions.map((s, i) => (
              <div
                key={s.title}
                className={`reveal delay-${i + 1} flex gap-5 items-start p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-[3px]`}
                style={{
                  background: "#161616",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.18)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border"
                  style={{ background: "rgba(201,168,76,0.1)", borderColor: "rgba(201,168,76,0.18)" }}
                >
                  {s.icon}
                </div>
                <div>
                  <div className="text-[17px] font-extrabold tracking-[-0.3px] mb-1.5">{s.title}</div>
                  <div className="text-[13px] text-[rgba(250,250,248,0.5)] leading-[1.6]">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
