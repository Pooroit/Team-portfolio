import { fontSerifItalic, fontMono } from "../constants";
import { principles } from "../data";

const stepIllustrations = [
  // Шаг 01 — Исследование: лупа с волнами данных
  <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="52" cy="38" r="22" stroke="#C5A572" strokeWidth="1.5" strokeOpacity="0.6"/>
    <circle cx="52" cy="38" r="12" stroke="#C5A572" strokeWidth="1" strokeOpacity="0.3"/>
    <line x1="68" y1="54" x2="84" y2="70" stroke="#C5A572" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6"/>
    <path d="M96 30 Q104 24 112 30 Q120 36 128 30" stroke="#C5A572" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
    <path d="M96 40 Q104 34 112 40 Q120 46 128 40" stroke="#C5A572" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.35"/>
    <path d="M96 50 Q104 44 112 50 Q120 56 128 50" stroke="#C5A572" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.2"/>
    <circle cx="52" cy="38" r="3" fill="#C5A572" fillOpacity="0.5"/>
  </svg>,

  // Шаг 02 — Прототипирование: wireframe сетка с узлами
  <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="12" y="14" width="46" height="30" rx="2" stroke="#C5A572" strokeWidth="1.5" strokeOpacity="0.6"/>
    <rect x="18" y="52" width="34" height="14" rx="2" stroke="#C5A572" strokeWidth="1" strokeOpacity="0.35"/>
    <line x1="35" y1="44" x2="35" y2="52" stroke="#C5A572" strokeWidth="1" strokeOpacity="0.4"/>
    <rect x="72" y="20" width="28" height="18" rx="2" stroke="#C5A572" strokeWidth="1.5" strokeOpacity="0.6"/>
    <rect x="72" y="46" width="28" height="12" rx="2" stroke="#C5A572" strokeWidth="1" strokeOpacity="0.35"/>
    <line x1="58" y1="29" x2="72" y2="29" stroke="#C5A572" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 2"/>
    <rect x="112" y="24" width="36" height="22" rx="2" stroke="#C5A572" strokeWidth="1.5" strokeOpacity="0.6"/>
    <line x1="100" y1="35" x2="112" y2="35" stroke="#C5A572" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 2"/>
    <circle cx="12" cy="14" r="2.5" fill="#C5A572" fillOpacity="0.7"/>
    <circle cx="58" cy="14" r="2.5" fill="#C5A572" fillOpacity="0.7"/>
    <circle cx="72" cy="20" r="2.5" fill="#C5A572" fillOpacity="0.7"/>
  </svg>,

  // Шаг 03 — Визуальный язык: палитра форм и линий
  <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="30" cy="40" r="18" stroke="#C5A572" strokeWidth="1.5" strokeOpacity="0.6"/>
    <circle cx="30" cy="40" r="6" fill="#C5A572" fillOpacity="0.15" stroke="#C5A572" strokeWidth="1" strokeOpacity="0.4"/>
    <path d="M62 22 L82 22 L72 42 Z" stroke="#C5A572" strokeWidth="1.5" strokeOpacity="0.6" strokeLinejoin="round"/>
    <rect x="96" y="22" width="24" height="24" rx="12" stroke="#C5A572" strokeWidth="1.5" strokeOpacity="0.6"/>
    <rect x="130" y="26" width="20" height="16" rx="2" stroke="#C5A572" strokeWidth="1.5" strokeOpacity="0.4"/>
    <line x1="8" y1="65" x2="152" y2="65" stroke="#C5A572" strokeWidth="1" strokeOpacity="0.2"/>
    <line x1="20" y1="65" x2="20" y2="60" stroke="#C5A572" strokeWidth="1.5" strokeOpacity="0.5"/>
    <line x1="50" y1="65" x2="50" y2="57" stroke="#C5A572" strokeWidth="1.5" strokeOpacity="0.5"/>
    <line x1="80" y1="65" x2="80" y2="62" stroke="#C5A572" strokeWidth="1.5" strokeOpacity="0.5"/>
    <line x1="108" y1="65" x2="108" y2="55" stroke="#C5A572" strokeWidth="1.5" strokeOpacity="0.5"/>
    <line x1="140" y1="65" x2="140" y2="60" stroke="#C5A572" strokeWidth="1.5" strokeOpacity="0.5"/>
  </svg>,

  // Шаг 04 — Инжиниринг: код-скобки и шестерня
  <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M30 24 L14 40 L30 56" stroke="#C5A572" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7"/>
    <path d="M58 24 L74 40 L58 56" stroke="#C5A572" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7"/>
    <line x1="36" y1="56" x2="52" y2="24" stroke="#C5A572" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4"/>
    <circle cx="120" cy="40" r="14" stroke="#C5A572" strokeWidth="1.5" strokeOpacity="0.6"/>
    <circle cx="120" cy="40" r="5" fill="#C5A572" fillOpacity="0.2" stroke="#C5A572" strokeWidth="1" strokeOpacity="0.5"/>
    <line x1="120" y1="22" x2="120" y2="26" stroke="#C5A572" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.6"/>
    <line x1="120" y1="54" x2="120" y2="58" stroke="#C5A572" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.6"/>
    <line x1="102" y1="40" x2="106" y2="40" stroke="#C5A572" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.6"/>
    <line x1="134" y1="40" x2="138" y2="40" stroke="#C5A572" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.6"/>
    <line x1="107.5" y1="27.5" x2="110.2" y2="30.2" stroke="#C5A572" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.6"/>
    <line x1="129.8" y1="49.8" x2="132.5" y2="52.5" stroke="#C5A572" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.6"/>
    <line x1="132.5" y1="27.5" x2="129.8" y2="30.2" stroke="#C5A572" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.6"/>
    <line x1="110.2" y1="49.8" x2="107.5" y2="52.5" stroke="#C5A572" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.6"/>
  </svg>,
];

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
              className="relative bg-[#0A0A0A] p-8 md:p-10 group cursor-none flex flex-col"
              data-cursor="Process"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C5A572] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              {/* Watermark-номер на фоне */}
              <span
                className="absolute bottom-2 right-3 text-[7rem] font-bold leading-none select-none pointer-events-none transition-opacity duration-500 opacity-[0.04] group-hover:opacity-[0.07]"
                style={{ color: "#C5A572" }}
              >
                {p.num}
              </span>
              <span className={`${fontMono} text-[#C5A572] mb-8 block relative z-10`}>
                Шаг {p.num}
              </span>
              <h3 className="text-2xl font-bold mb-4 relative z-10">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed relative z-10">{p.desc}</p>
              {/* Иллюстрация снизу */}
              <div className="mt-8 h-20 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                {stepIllustrations[i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
