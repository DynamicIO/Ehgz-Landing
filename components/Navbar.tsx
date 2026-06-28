"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "How It Works", href: "#how" },
  { label: "Venues", href: "#venues" },
  { label: "Why Ehgz", href: "#why" },
  { label: "For Venues", href: "#b2b" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-400"
        style={
          scrolled
            ? {
                background: "rgba(8,8,8,0.88)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 1px 0 rgba(255,255,255,0.07)",
              }
            : {}
        }
      >
        <div className="max-w-[1200px] mx-auto h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-[10px] flex items-center justify-center text-base font-black text-[#080808]"
              style={{ background: "linear-gradient(135deg, #C9A84C, #D48B3A)" }}
            >
              E
            </div>
            <div>
              <div className="text-xl font-extrabold tracking-tight leading-none text-[#FAFAF8]">
                Ehgz
              </div>
            </div>
            <div className="text-sm text-[#C9A84C] font-normal opacity-80">
              إحجز
            </div>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-[#B8B0A0] hover:text-[#FAFAF8] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#download"
                className="text-[13px] font-bold text-[#080808] px-[22px] py-[10px] rounded-full transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
                style={{ background: "linear-gradient(135deg, #C9A84C, #D48B3A)" }}
              >
                Download App
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] bg-transparent p-1 min-w-[44px] min-h-[44px] items-center justify-center"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-[22px] h-[2px] bg-[#FAFAF8] rounded-sm" />
            <span className="block w-[22px] h-[2px] bg-[#FAFAF8] rounded-sm" />
            <span className="block w-[22px] h-[2px] bg-[#FAFAF8] rounded-sm" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-8"
            style={{ background: "rgba(8,8,8,0.98)", backdropFilter: "blur(20px)" }}
          >
            <button
              className="absolute top-6 right-6 w-11 h-11 rounded-full border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.06)] flex items-center justify-center text-lg text-[#FAFAF8]"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[28px] font-extrabold tracking-tight text-[rgba(250,250,248,0.6)] hover:text-[#FAFAF8] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setMenuOpen(false)}
              className="text-[28px] font-extrabold tracking-tight text-[#C9A84C]"
            >
              Download
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
