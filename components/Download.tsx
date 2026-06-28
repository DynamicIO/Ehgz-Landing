"use client";

import { useEffect, useRef } from "react";

export default function Download() {
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
    <section
      id="download"
      ref={sectionRef}
      className="py-[120px]"
      style={{ background: "#0f0f0f" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <div className="section-label reveal justify-center lg:justify-start">Get the App</div>
            <h2
              className="font-inter font-black tracking-[-2px] leading-[1.05] mb-5 reveal delay-1"
              style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
            >
              Cairo&apos;s best<br />tables are<br />
              <span className="gradient-text">one tap away</span>
            </h2>
            <p
              className="text-[rgba(250,250,248,0.5)] leading-[1.65] mb-10 max-w-[440px] reveal delay-2 mx-auto lg:mx-0"
              style={{ fontSize: 17 }}
            >
              Available on iOS and Android. Free to download.
              Start discovering Cairo&apos;s most curated dining experiences today.
            </p>
            <div className="flex gap-3 flex-wrap reveal delay-3 justify-center lg:justify-start">
              <a
                href="#"
                className="flex items-center gap-2.5 bg-[#FAFAF8] text-[#080808] px-[22px] py-3.5 rounded-[14px] text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-normal opacity-70 leading-none mb-0.5">Download on the</span>
                  <span className="text-[15px] font-bold leading-none">App Store</span>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-2.5 text-[#FAFAF8] px-[22px] py-3.5 rounded-[14px] text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 border"
                style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm11.207 10.065l2.855-2.838L3.05.206a1.495 1.495 0 0 0-.783-.182l10.277 10.965zm0 2.067L2.267 24.017c.26.145.571.19.876.073l12.214-6.916-2.813-2.818z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-normal opacity-70 leading-none mb-0.5">Get it on</span>
                  <span className="text-[15px] font-bold leading-none">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Two phones with real screenshots */}
          <div className="flex justify-center relative reveal delay-2">
            <div className="relative h-[500px] w-full max-w-[380px]">
              {/* Back phone — Map screen */}
              <div
                className="absolute w-[210px]"
                style={{ left: "50%", top: 40, transform: "translateX(-72%) rotate(-8deg)", zIndex: 1, opacity: 0.75 }}
              >
                <div
                  className="rounded-[40px] p-[10px]"
                  style={{ background: "#1c1c1c", boxShadow: "0 0 0 1px rgba(255,255,255,0.07), 0 24px 80px rgba(0,0,0,0.6)" }}
                >
                  <div className="rounded-[32px] overflow-hidden" style={{ aspectRatio: "9/19" }}>
                    <img
                      src="/app/screenshot-map.png"
                      alt="Ehgz app map view"
                      className="w-full h-full object-cover object-top"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>

              {/* Front phone — Search screen */}
              <div
                className="absolute w-[210px]"
                style={{ left: "50%", top: 0, transform: "translateX(-28%)", zIndex: 2 }}
              >
                <div
                  className="rounded-[40px] p-[10px]"
                  style={{
                    background: "#1c1c1c",
                    boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 32px 100px rgba(0,0,0,0.7), 0 0 60px rgba(201,168,76,0.1)",
                  }}
                >
                  <div className="rounded-[32px] overflow-hidden" style={{ aspectRatio: "9/19" }}>
                    <img
                      src="/app/screenshot-search.png"
                      alt="Ehgz app search view"
                      className="w-full h-full object-cover object-top"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>

              {/* Ambient glow */}
              <div
                className="absolute pointer-events-none"
                style={{
                  bottom: 20, left: "50%", transform: "translateX(-50%)",
                  width: 240, height: 80,
                  background: "radial-gradient(ellipse, rgba(201,168,76,0.22) 0%, transparent 70%)",
                  filter: "blur(24px)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
