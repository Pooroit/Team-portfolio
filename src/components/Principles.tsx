import { fontSerifItalic, fontMono } from "../constants";
import { principles } from "../data";

export default function Principles() {
  return (
    <section
      id="principles"
      className="relative px-8 md:px-12 py-32 border-t border-white/10 bg-[#070707] pb-40"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Этапы <br /> <span className={fontSerifItalic}>работы</span>
          </h2>
          <p className="self-end text-gray-400 max-w-md">
            Мы не берем "котят в мешке". Каждый шаг прозрачен и зафиксирован.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {principles.map((p, i) => (
            <div
              key={i}
              className="relative bg-[#0A0A0A] p-8 md:p-10 group cursor-none"
              data-cursor="Process"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C5A572] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              <span className={`${fontMono} text-[#C5A572] mb-8 block`}>
                Шаг {p.num}
              </span>
              <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
