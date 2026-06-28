"use client";

import { useEffect, useRef } from "react";

const features = [
  "Zero commission to start",
  "Real-time reservation management",
  "Direct guest communication",
  "Analytics dashboard",
];

export default function ForVenues() {
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
    <section id="b2b" ref={sectionRef} className="py-[120px] relative overflow-hidden" style={{ background: "#080808" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          className="relative rounded-[32px] p-20 text-center overflow-hidden reveal border"
          style={{
            background: "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(201,168,76,0.03) 50%, rgba(196,135,90,0.05) 100%)",
            borderColor: "rgba(201,168,76,0.18)",
          }}
        >
          {/* Gold top line */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px"
            style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }}
          />
          {/* Arabic ornament */}
          <div
            className="absolute font-inter font-black pointer-events-none select-none whitespace-nowrap"
            style={{
              fontSize: 400,
              color: "rgba(201,168,76,0.02)",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            إحجز
          </div>

          <div className="relative z-[1]">
            {/* Icon */}
            <div
              className="w-16 h-16 rounded-[20px] flex items-center justify-center text-[28px] mx-auto mb-7 border"
              style={{ background: "rgba(201,168,76,0.12)", borderColor: "rgba(201,168,76,0.18)" }}
            >
              🏛
            </div>

            {/* Label */}
            <div className="section-label justify-center">For Restaurant Owners</div>

            {/* Title */}
            <h2
              className="font-inter font-black tracking-[-2.5px] leading-[1.05] mb-5"
              style={{ fontSize: "clamp(36px, 4.5vw, 60px)" }}
            >
              Partner with<br />
              <span className="gradient-text">Ehgz</span>
            </h2>

            {/* Sub */}
            <p
              className="text-[rgba(250,250,248,0.55)] max-w-[520px] mx-auto leading-[1.65] mb-10"
              style={{ fontSize: 18 }}
            >
              We bring you customers who are ready to book. List your venue on Cairo&apos;s most curated
              dining platform and reach the guests your restaurant deserves.
            </p>

            {/* Features */}
            <div className="flex justify-center gap-8 mb-11 flex-wrap">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-[rgba(250,250,248,0.6)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                  {f}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex gap-3.5 justify-center flex-wrap">
              <a
                href="mailto:venues@ehgz.app"
                className="inline-flex items-center gap-2 text-[#080808] font-extrabold text-[15px] px-9 py-4 rounded-full transition-all duration-200 hover:-translate-y-[3px]"
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #D48B3A)",
                  boxShadow: "0 8px 40px rgba(201,168,76,0.3)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 60px rgba(201,168,76,0.4)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(201,168,76,0.3)"; }}
              >
                List Your Venue
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="mailto:venues@ehgz.app"
                className="inline-flex items-center gap-2 text-[#FAFAF8] font-bold text-[15px] px-9 py-4 rounded-full border transition-all duration-200 hover:border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.05)] hover:-translate-y-0.5"
                style={{ border: "1px solid rgba(255,255,255,0.2)" }}
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
