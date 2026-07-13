import { ArrowRight } from "lucide-react";
import { fontMono, fontSerifItalic } from "../constants";

interface PricingStripProps {
  onOpenModal: () => void;
}

export default function PricingStrip({ onOpenModal }: PricingStripProps) {
  return (
    <section className="relative px-8 md:px-12 py-16 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-0">

          {/* Заголовок */}
          <div className="md:w-64 shrink-0">
            <span className={`${fontMono} text-[#C5A572] text-xs uppercase tracking-widest block mb-2`}>
              Стоимость
            </span>
            <h2 className="text-2xl font-bold leading-tight">
              Сколько это{" "}
              <span className={fontSerifItalic}>стоит</span>
            </h2>
          </div>

          {/* Разделитель */}
          <div className="hidden md:block w-px self-stretch bg-white/10 mx-10" />

          {/* Один блок */}
          <div className="flex-1 border border-white/10 bg-[#0A0A0A] px-8 py-6 hover:bg-[#111] transition-colors">
            <div className="text-3xl font-bold text-white mb-2">8 000 ₽</div>
            <div className={`${fontMono} text-[#C5A572] text-xs uppercase tracking-widest mb-4`}>
              Что мы сделаем
            </div>
            <div className="text-gray-400 text-sm leading-relaxed mb-4">
              Сайт, лендинг, бот, автоматизация — скажи задачу, найдём решение.
            </div>
            <div className={`${fontMono} text-[#C5A572] text-xs uppercase tracking-widest mb-2`}>
              Или бартер
            </div>
            <div className="text-gray-500 text-sm leading-relaxed">
              Услуги, товары, реклама — предложи что есть, обсудим.
            </div>
          </div>

          {/* Разделитель */}
          <div className="hidden md:block w-px self-stretch bg-white/10 mx-10" />

          {/* CTA */}
          <div className="shrink-0 flex flex-col gap-2">
            <p className="text-gray-500 text-xs max-w-[160px] leading-relaxed">
              Без скрытых платежей. Цена фиксируется до старта.
            </p>
            <button
              onClick={onOpenModal}
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-[#C5A572] transition-colors"
            >
              Обсудить проект
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
