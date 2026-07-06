export default function Ticker() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-40 bg-[#0A0A0A] border-t border-white/10 py-2 overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap animate-marquee-fast">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="flex gap-12 items-center text-xs font-mono uppercase tracking-widest text-[#888]"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>{" "}
              Берем проекты с Q3 2026
            </span>
            <span className="text-[#C5A572]">★</span>
            <span>Moscow / Remote</span>
            <span className="text-[#C5A572]">★</span>
            <span>Editorial Design & Engineering</span>
            <span className="text-[#C5A572]">★</span>
          </div>
        ))}
      </div>
    </div>
  );
}
