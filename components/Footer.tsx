"use client";

export default function Footer() {
  return (
    <footer className="border-t pt-16 pb-8" style={{ background: "#080808", borderColor: "rgba(255,255,255,0.07)" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-10 h-10 rounded-[12px] flex items-center justify-center text-lg font-black text-[#080808]"
                style={{ background: "linear-gradient(135deg, #C9A84C, #D48B3A)" }}
              >
                E
              </div>
              <div>
                <span className="text-[22px] font-extrabold tracking-tight text-[#FAFAF8]">Ehgz</span>
              </div>
            </div>
            <p className="text-sm text-[rgba(250,250,248,0.4)] leading-[1.6] mb-6 max-w-[260px]">
              Cairo&apos;s premier dining discovery and booking platform. For locals and tourists who know the difference.
            </p>
            <div className="flex gap-2.5">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-[10px] flex items-center justify-center text-[#FAFAF8] border transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.07)" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(201,168,76,0.12)"; el.style.borderColor = "rgba(201,168,76,0.18)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.05)"; el.style.borderColor = "rgba(255,255,255,0.07)"; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="#"
                aria-label="TikTok"
                className="w-10 h-10 rounded-[10px] flex items-center justify-center text-[#FAFAF8] border transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.07)" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(201,168,76,0.12)"; el.style.borderColor = "rgba(201,168,76,0.18)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.05)"; el.style.borderColor = "rgba(255,255,255,0.07)"; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.74a4.85 4.85 0 01-1.01-.05z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[13px] font-bold tracking-[0.08em] uppercase text-[rgba(250,250,248,0.4)] mb-5">Product</h4>
            <ul className="flex flex-col gap-3">
              {[["How It Works", "#how"], ["Featured Venues", "#venues"], ["Download App", "#download"], ["Browse Cairo", "#"]].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-[rgba(250,250,248,0.55)] hover:text-[#FAFAF8] transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[13px] font-bold tracking-[0.08em] uppercase text-[rgba(250,250,248,0.4)] mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {[["About Ehgz", "#"], ["For Venues", "#b2b"], ["Contact Us", "mailto:hello@ehgz.app"], ["Careers", "#"]].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-[rgba(250,250,248,0.55)] hover:text-[#FAFAF8] transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[13px] font-bold tracking-[0.08em] uppercase text-[rgba(250,250,248,0.4)] mb-5">Legal</h4>
            <ul className="flex flex-col gap-3">
              {[["Privacy Policy", "#"], ["Terms of Service", "#"], ["Cookie Policy", "#"]].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-[rgba(250,250,248,0.55)] hover:text-[#FAFAF8] transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 border-t flex flex-wrap justify-between items-center gap-4"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p className="text-[13px] text-[rgba(250,250,248,0.3)]">
            © 2026 <span className="text-[#C9A84C]">Ehgz</span>. Cairo, Egypt. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a key={l} href="#" className="text-xs text-[rgba(250,250,248,0.3)] hover:text-[rgba(250,250,248,0.6)] transition-colors duration-200">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
