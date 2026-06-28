"use client";

import { useEffect, useRef } from "react";

const venueCards = [
  {
    id: 1,
    name: "Khufu's Restaurant",
    area: "Giza Pyramids",
    rating: "4.9",
    badge: "Restaurant",
    tags: ["Egyptian", "Pyramid View", "Fine Dining"],
    img: "/venues/khufus-restaurant.png",
    fallback: "linear-gradient(135deg, #2D1B0E 0%, #8B4513 35%, #C4875A 65%, #3D2010 100%)",
  },
  {
    id: 2,
    name: "Babel",
    area: "New Cairo",
    rating: "4.8",
    badge: "Lebanese",
    tags: ["Lebanese", "Grand Arches", "Trendy"],
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&crop=entropy&q=80",
    fallback: "linear-gradient(135deg, #1A0D22 0%, #6B3FA0 40%, #C9A84C 80%, #1A0D22 100%)",
  },
  {
    id: 3,
    name: "Nine Pyramids Lounge",
    area: "Giza Plateau",
    rating: "4.7",
    badge: "Lounge",
    tags: ["Lounge", "Pyramids View"],
    img: "https://images.unsplash.com/photo-1568322445389-f64ac2515099?w=600&h=400&fit=crop&crop=entropy&q=80",
    fallback: "linear-gradient(135deg, #1A1A0D 0%, #3D3010 40%, #C9A84C 80%, #0D0C06 100%)",
  },
  {
    id: 4,
    name: "Pier88 Nile River",
    area: "Zamalek, Nile",
    rating: "4.8",
    badge: "River Dining",
    tags: ["Italian", "Nile View", "Bar"],
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&crop=entropy&q=80",
    fallback: "linear-gradient(135deg, #0D1520 0%, #1E3A5F 40%, #4A9FD4 70%, #C9A84C 100%)",
  },
  {
    id: 5,
    name: "ESCĀ Cueva",
    area: "New Cairo",
    rating: "4.9",
    badge: "Bar & Dining",
    tags: ["Mediterranean", "Exclusive"],
    img: "/venues/esca-cueva.jpg",
    fallback: "linear-gradient(135deg, #1A0A08 0%, #8B1A1A 40%, #D44C4C 70%, #C9A84C 100%)",
  },
  {
    id: 6,
    name: "Crimson Bar & Grill",
    area: "Zamalek Rooftop",
    rating: "4.7",
    badge: "Bar & Grill",
    tags: ["Steakhouse", "Nile View", "Bar"],
    img: "/venues/crimson-bar-grill.jpg",
    fallback: "linear-gradient(135deg, #0A0A0A 0%, #2A2A2A 40%, #C9A84C 70%, #8B6914 100%)",
  },
  {
    id: 7,
    name: "Kazoku",
    area: "New Cairo",
    rating: "4.8",
    badge: "Japanese",
    tags: ["Japanese", "Omakase", "Trendy"],
    img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=400&fit=crop&crop=entropy&q=80",
    fallback: "linear-gradient(135deg, #0A0A12 0%, #1E1E3F 40%, #4A4A8A 70%, #C9A84C 100%)",
  },
];

function VenueCard({ v }: { v: typeof venueCards[0] }) {
  return (
    <div
      className="flex-shrink-0 w-[280px] rounded-[28px] overflow-hidden border group"
      style={{
        background: "#161616",
        borderColor: "rgba(255,255,255,0.07)",
        transition: "transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-6px)";
        el.style.boxShadow = "0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.18)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "";
        el.style.boxShadow = "";
      }}
    >
      <div className="h-[180px] relative overflow-hidden" style={{ background: v.fallback }}>
        <img
          src={v.img}
          alt={v.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          loading="lazy"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,15,13,0.8) 0%, transparent 60%)" }} />
        <div
          className="absolute top-[14px] left-[14px] rounded-full px-3 py-1 text-[11px] font-semibold text-[#C9A84C] tracking-[0.04em] border"
          style={{ background: "rgba(8,8,8,0.75)", borderColor: "rgba(201,168,76,0.18)", backdropFilter: "blur(12px)" }}
        >
          {v.badge}
        </div>
        <div
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm transition-transform duration-200 group-hover:scale-110"
          style={{ background: "rgba(8,8,8,0.6)", backdropFilter: "blur(12px)" }}
        >
          ♡
        </div>
      </div>
      <div className="p-5">
        <div className="text-lg font-extrabold tracking-[-0.5px] mb-1.5">{v.name}</div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs text-[#B8B0A0]">📍 {v.area}</span>
          <div className="w-[3px] h-[3px] rounded-full bg-[rgba(201,168,76,0.3)]" />
          <span className="text-xs font-semibold text-[#C9A84C]">★ {v.rating}</span>
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {v.tags.map((tag) => (
            <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full border"
              style={{ background: "rgba(201,168,76,0.08)", borderColor: "rgba(201,168,76,0.15)", color: "rgba(250,250,248,0.6)" }}>
              {tag}
            </span>
          ))}
        </div>
        <button
          className="w-full mt-4 py-3 rounded-xl text-[13px] font-bold text-[#C9A84C] border transition-all duration-200 group-hover:bg-[#C9A84C] group-hover:text-[#080808] group-hover:border-[#C9A84C]"
          style={{ background: "rgba(201,168,76,0.1)", borderColor: "rgba(201,168,76,0.18)" }}
        >
          Reserve a Table →
        </button>
      </div>
    </div>
  );
}

export default function FeaturedVenues() {
  const headerRef   = useRef<HTMLDivElement>(null);
  const trackRef    = useRef<HTMLDivElement>(null);
  const wrapperRef  = useRef<HTMLDivElement>(null);

  // All scroll state lives here — never triggers re-render
  const state = useRef({
    x: 0,
    velocity: 0,          // extra px/frame from drag momentum
    BASE_SPEED: 1.0,      // auto-scroll px per frame (~60fps → ~60px/s)
    isDragging: false,
    lastClientX: 0,
    lastClientY: 0,
    halfWidth: 0,         // set after mount: total track width / 2
    rafId: 0,
  });

  // --- Animation loop ---
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Measure half-track width (one full set of cards)
    const measure = () => {
      state.current.halfWidth = track.scrollWidth / 2;
    };
    measure();
    window.addEventListener("resize", measure);

    const tick = () => {
      const s = state.current;
      if (!s.isDragging) {
        // Auto-scroll + decaying drag momentum
        s.x -= s.BASE_SPEED + s.velocity;
        s.velocity *= 0.92; // momentum decay
        if (Math.abs(s.velocity) < 0.05) s.velocity = 0;
      }
      // Seamless loop
      if (s.halfWidth > 0 && s.x <= -s.halfWidth) s.x += s.halfWidth;
      if (s.halfWidth > 0 && s.x > 0)             s.x -= s.halfWidth;

      track.style.transform = `translateX(${s.x}px)`;
      s.rafId = requestAnimationFrame(tick);
    };
    state.current.rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(state.current.rafId);
      window.removeEventListener("resize", measure);
    };
  }, []);

  // --- Drag handlers (mouse + touch) ---
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const s = state.current;

    const onDown = (clientX: number) => {
      s.isDragging = true;
      s.lastClientX = clientX;
      s.velocity = 0;
      wrapper.style.cursor = "grabbing";
    };

    const onMove = (clientX: number) => {
      if (!s.isDragging) return;
      const delta = clientX - s.lastClientX;
      s.x += delta;
      // Feed drag direction into velocity for momentum on release
      s.velocity = -delta * 0.4;
      s.lastClientX = clientX;
    };

    const onUp = () => {
      if (!s.isDragging) return;
      s.isDragging = false;
      wrapper.style.cursor = "grab";
      // velocity is already set from last onMove — it decays in the loop
    };

    // Mouse
    const onMouseDown = (e: MouseEvent) => onDown(e.clientX);
    const onMouseMove = (e: MouseEvent) => { e.preventDefault(); onMove(e.clientX); };
    const onMouseUp   = () => onUp();

    // Touch
    const onTouchStart = (e: TouchEvent) => onDown(e.touches[0].clientX);
    const onTouchMove  = (e: TouchEvent) => onMove(e.touches[0].clientX);
    const onTouchEnd   = () => onUp();

    wrapper.addEventListener("mousedown",  onMouseDown);
    window .addEventListener("mousemove",  onMouseMove);
    window .addEventListener("mouseup",    onMouseUp);
    wrapper.addEventListener("touchstart", onTouchStart, { passive: true });
    wrapper.addEventListener("touchmove",  onTouchMove,  { passive: true });
    wrapper.addEventListener("touchend",   onTouchEnd);

    return () => {
      wrapper.removeEventListener("mousedown",  onMouseDown);
      window .removeEventListener("mousemove",  onMouseMove);
      window .removeEventListener("mouseup",    onMouseUp);
      wrapper.removeEventListener("touchstart", onTouchStart);
      wrapper.removeEventListener("touchmove",  onTouchMove);
      wrapper.removeEventListener("touchend",   onTouchEnd);
    };
  }, []);

  // --- Reveal header on scroll ---
  useEffect(() => {
    if (!headerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    headerRef.current.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="venues" className="py-[120px] overflow-hidden" style={{ background: "#080808" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={headerRef} className="flex justify-between items-end mb-12 flex-wrap gap-4">
          <div className="reveal">
            <div className="section-label">Featured on Ehgz</div>
            <h2 className="font-inter font-extrabold tracking-[-1.5px] leading-[1.1] max-w-[400px]"
              style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}>
              Cairo&apos;s most<br />coveted tables
            </h2>
          </div>
          <a href="#" className="reveal text-sm font-semibold text-[#C9A84C] flex items-center gap-1.5 whitespace-nowrap transition-all duration-200 hover:gap-2.5">
            View all venues
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Track wrapper */}
      <div
        ref={wrapperRef}
        className="relative overflow-hidden"
        style={{
          cursor: "grab",
          maskImage: "linear-gradient(to right, transparent 0%, black 80px, black calc(100% - 80px), transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 80px, black calc(100% - 80px), transparent 100%)",
        }}
      >
        {/* Hint label */}
        <div
          className="absolute bottom-3 right-6 z-10 text-[10px] font-semibold tracking-[0.1em] uppercase pointer-events-none select-none transition-opacity duration-300"
          style={{ color: "rgba(201,168,76,0.4)" }}
        >
          drag to control speed
        </div>

        <div
          ref={trackRef}
          className="flex gap-5 w-max will-change-transform"
          style={{ paddingLeft: 24, paddingRight: 24 }}
        >
          {[...venueCards, ...venueCards].map((v, i) => (
            <VenueCard key={`${v.id}-${i}`} v={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
