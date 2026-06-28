"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#C9A84C" }}>
        <circle cx="11" cy="11" r="7" />
        <line x1="16.5" y1="16.5" x2="23" y2="23" />
      </svg>
    ),
    title: "Discover",
    desc: "Browse a hand-curated selection of Cairo's best restaurants, cafés, and bars — every venue personally verified by our team.",
  },
  {
    num: "02",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" style={{ color: "#C9A84C" }}>
        <line x1="4" y1="8" x2="22" y2="8" />
        <line x1="4" y1="13" x2="22" y2="13" />
        <line x1="4" y1="18" x2="22" y2="18" />
        <circle cx="9" cy="8" r="2.2" fill="#161616" stroke="#C9A84C" />
        <circle cx="16" cy="13" r="2.2" fill="#161616" stroke="#C9A84C" />
        <circle cx="10" cy="18" r="2.2" fill="#161616" stroke="#C9A84C" />
      </svg>
    ),
    title: "Choose",
    desc: "Filter by neighbourhood, vibe, cuisine, or occasion. Date night in Zamalek? Rooftop brunch in Maadi? We've got you.",
  },
  {
    num: "03",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#C9A84C" }}>
        <rect x="3" y="5" width="20" height="18" rx="3" />
        <line x1="3" y1="11" x2="23" y2="11" />
        <line x1="8" y1="3" x2="8" y2="7" />
        <line x1="18" y1="3" x2="18" y2="7" />
        <polyline points="9,16 12,19 17,14" />
      </svg>
    ),
    title: "Book",
    desc: "Instant confirmation. No DMs, no phone calls, no waiting. Your reservation is locked in real-time.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how"
      ref={sectionRef}
      className="py-[120px] relative overflow-hidden"
      style={{ background: "#0f0f0f" }}
    >
      {/* Top gold line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[800px] pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, #9A7A2F, transparent)" }}
      />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="section-label justify-center">The Process</div>
          <h2
            className="font-inter font-extrabold tracking-[-2px] leading-[1.05] mb-4"
            style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
          >
            Three steps to your<br />
            <span className="gradient-text">perfect table</span>
          </h2>
          <p className="text-[17px] text-[rgba(250,250,248,0.5)] max-w-[480px] mx-auto leading-[1.6]">
            From craving to confirmed reservation in under a minute.
          </p>
        </div>

        {/* Steps grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-0.5 rounded-[28px] overflow-hidden"
          style={{ background: "rgba(255,255,255,0.07)" }}
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal delay-${i + 1} group relative px-10 py-12 transition-colors duration-300 hover:bg-[#1e1e1e]`}
              style={{ background: "#161616" }}
            >
              {/* Ghost number */}
              <div
                className="absolute top-6 right-7 font-playfair font-black leading-none select-none pointer-events-none"
                style={{ fontSize: 72, color: "rgba(201,168,76,0.08)" }}
              >
                {step.num}
              </div>
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border"
                style={{ background: "rgba(201,168,76,0.1)", borderColor: "rgba(201,168,76,0.18)" }}
              >
                {step.icon}
              </div>
              <h3 className="text-[22px] font-extrabold tracking-[-0.5px] mb-3">{step.title}</h3>
              <p className="text-[15px] leading-[1.65] text-[rgba(250,250,248,0.5)]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
