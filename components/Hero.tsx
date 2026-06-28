"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const orbsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (prefersReduced) return;
    const hero = document.getElementById("hero");
    if (!hero) return;
    const onMouseMove = (e: MouseEvent) => {
      const rx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ry = (e.clientY / window.innerHeight - 0.5) * 2;
      orbsRef.current.forEach((orb, i) => {
        if (!orb) return;
        const depth = (i + 1) * 8;
        orb.style.transform = `translate(${rx * depth}px, ${ry * depth}px)`;
      });
    };
    hero.addEventListener("mousemove", onMouseMove);
    return () => hero.removeEventListener("mousemove", onMouseMove);
  }, [prefersReduced]);

  return (
    <section id="hero" className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 60% 40%, rgba(201,168,76,0.12) 0%, transparent 60%),
              radial-gradient(ellipse 60% 80% at 20% 80%, rgba(196,135,90,0.10) 0%, transparent 55%),
              radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212,139,58,0.06) 0%, transparent 70%),
              linear-gradient(160deg, #0a0807 0%, #111008 30%, #0d0c08 60%, #080808 100%)
            `,
          }}
        />
        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "256px",
          }}
        />
        {/* Orbs */}
        <div
          ref={(el) => { if (el) orbsRef.current[0] = el; }}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 500, height: 500,
            background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
            top: -100, right: -100,
            animation: prefersReduced ? "none" : "orb-float 8s ease-in-out infinite",
          }}
        />
        <div
          ref={(el) => { if (el) orbsRef.current[1] = el; }}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 400, height: 400,
            background: "radial-gradient(circle, rgba(196,135,90,0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
            bottom: 0, left: -80,
            animation: prefersReduced ? "none" : "orb-float 8s ease-in-out infinite",
            animationDelay: "-4s",
          }}
        />
        <div
          ref={(el) => { if (el) orbsRef.current[2] = el; }}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 300, height: 300,
            background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
            top: "40%", left: "40%",
            animation: prefersReduced ? "none" : "orb-float 8s ease-in-out infinite",
            animationDelay: "-2s",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-[2] w-full pt-[120px] pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">

            {/* Left: Text */}
            <div className="text-center lg:text-left">
              {/* H1 */}
              <h1
                className="font-inter font-black leading-[0.95] tracking-[-3px] gradient-text mb-2"
                style={{ fontSize: "clamp(56px, 7vw, 96px)" }}
              >
                Ehgz
              </h1>
              <span
                className="block font-inter font-light tracking-[-1px] text-[#C9A84C] opacity-70 mb-6 italic"
                style={{ fontSize: "clamp(36px, 4.5vw, 60px)" }}
              >
                إحجز
              </span>
              <p
                className="font-inter font-semibold tracking-[0.12em] uppercase text-[#B8B0A0] mb-5"
                style={{ fontSize: "clamp(18px, 2.2vw, 24px)" }}
              >
                Discover. Book. Experience.
              </p>
              <p
                className="font-inter text-[rgba(250,250,248,0.55)] leading-[1.7] max-w-[480px] mb-11 mx-auto lg:mx-0"
                style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}
              >
                The only curated dining and booking platform built for Cairo.
                For tourists and locals who know the difference.
              </p>

              {/* CTA buttons */}
              <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
                <a
                  href="#"
                  className="flex items-center gap-2.5 bg-[#FAFAF8] text-[#080808] px-[22px] py-3.5 rounded-[14px] text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                  style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.1)" }}
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

            {/* Right: Phone mockup */}
            <div className="flex justify-center items-center relative mt-16 lg:mt-0">
              {/* Glow ring behind phone */}
              <div
                className="absolute w-[360px] h-[360px] rounded-full pointer-events-none -z-10"
                style={{
                  background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 60%)",
                  top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />

              <div
                className="relative w-[280px]"
                style={{ animation: prefersReduced ? "none" : "phone-float 6s ease-in-out infinite" }}
              >
                {/* Phone frame */}
                <div
                  className="w-full rounded-[44px] p-3"
                  style={{
                    background: "#1a1a1a",
                    boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 30px 100px rgba(0,0,0,0.7), 0 0 80px rgba(201,168,76,0.12)",
                  }}
                >
                  {/* Real app screenshot */}
                  <div className="rounded-[34px] overflow-hidden" style={{ aspectRatio: "9/19.5" }}>
                    <img
                      src="/app/screenshot.png"
                      alt="Ehgz app — discover and book Cairo's best venues"
                      className="w-full h-full object-cover object-top"
                      draggable={false}
                    />
                  </div>
                </div>

                {/* Floating stat card 1 */}
                <div
                  className="absolute rounded-2xl px-4 py-3 border"
                  style={{
                    top: 60, left: -50,
                    background: "rgba(15,15,13,0.9)",
                    borderColor: "rgba(201,168,76,0.18)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
                    animation: prefersReduced ? "none" : "stat-float-1 5s ease-in-out infinite",
                  }}
                >
                  <div className="text-[22px] font-extrabold gradient-text leading-none">50+</div>
                  <div className="text-[11px] text-[#B8B0A0] mt-0.5">Curated venues</div>
                </div>

                {/* Floating stat card 2 */}
                <div
                  className="absolute rounded-2xl px-4 py-3 border"
                  style={{
                    bottom: 80, right: -40,
                    background: "rgba(15,15,13,0.9)",
                    borderColor: "rgba(201,168,76,0.18)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
                    animation: prefersReduced ? "none" : "stat-float-2 6s ease-in-out infinite",
                  }}
                >
                  <div className="text-[22px] font-extrabold gradient-text leading-none">4.9★</div>
                  <div className="text-[11px] text-[#B8B0A0] mt-0.5">App store rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 flex flex-col items-center gap-2 z-[2]"
        style={{
          transform: "translateX(-50%)",
          animation: prefersReduced ? "none" : "scroll-hint 2s ease-in-out infinite",
        }}
      >
        <span className="text-[10px] tracking-[0.15em] uppercase text-[#FAFAF8]/40">Scroll</span>
        <div
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, #C9A84C, transparent)" }}
        />
      </div>
    </section>
  );
}
