"use client";

import { useEffect, useRef, useState } from "react";

function animateCount(
  el: HTMLElement,
  target: number,
  suffix: string,
  duration = 1800,
  isDecimal = false
) {
  const start = performance.now();
  const step = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const val = isDecimal
      ? (target * ease).toFixed(1)
      : Math.floor(target * ease);
    el.textContent = val + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          const items = section.querySelectorAll<HTMLElement>(".stat-val");
          if (items[0]) animateCount(items[0], 200, "+");
          if (items[1]) items[1].textContent = "<60s";
          if (items[2]) animateCount(items[2], 4.9, "★", 1800, true);
          if (items[3]) animateCount(items[3], 0, "");
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="py-20 border-t border-b"
      style={{ borderColor: "rgba(255,255,255,0.07)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-0.5 rounded-[28px] overflow-hidden"
          style={{ background: "rgba(255,255,255,0.07)" }}
        >
          {[
            { lbl: "Curated venues across Cairo", initial: "200+" },
            { lbl: "Average booking time", initial: "<60s" },
            { lbl: "Average app store rating", initial: "4.9★" },
            { lbl: "WhatsApp messages required", initial: "0" },
          ].map((stat, i) => (
            <div
              key={stat.lbl}
              className="text-center px-8 py-10"
              style={{ background: "#0f0f0f" }}
            >
              <div
                className="stat-val font-inter font-black tracking-[-2px] leading-none mb-2 gradient-text"
                style={{ fontSize: "clamp(36px, 4vw, 52px)" }}
              >
                {stat.initial}
              </div>
              <div className="text-[13px] font-medium text-[rgba(250,250,248,0.45)]">{stat.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
