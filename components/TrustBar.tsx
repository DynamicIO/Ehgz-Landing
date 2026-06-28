"use client";

const venues = [
  "Khufu's Restaurant",
  "Babel",
  "Nine Pyramids Lounge",
  "Pier88 Nile",
  "ESCĀ Cueva",
  "Crimson Bar & Grill",
  "Sequoia",
  "The Smokery",
];

export default function TrustBar() {
  return (
    <section
      id="trust"
      className="py-10 border-t border-b"
      style={{ borderColor: "rgba(255,255,255,0.07)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center gap-5 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          <div
            className="text-[11px] font-medium tracking-[0.1em] uppercase whitespace-nowrap flex-shrink-0 pr-5 border-r"
            style={{ color: "rgba(250,250,248,0.3)", borderColor: "rgba(255,255,255,0.07)" }}
          >
            Featured venues
          </div>
          <div className="flex gap-10 items-center flex-nowrap">
            {venues.map((v) => (
              <span
                key={v}
                className="text-sm font-semibold whitespace-nowrap tracking-[0.02em] cursor-default transition-colors duration-300 hover:text-[rgba(250,250,248,0.6)]"
                style={{ color: "rgba(250,250,248,0.25)" }}
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
