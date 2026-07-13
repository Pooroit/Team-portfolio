import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { fontSerifItalic, fontMono } from "../constants";

interface BadExampleProps {
  onOpenModal: () => void;
}

export default function BadExample({ onOpenModal }: BadExampleProps) {
  return (
    <section className="relative px-8 md:px-12 py-24 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* Левая часть — текст */}
          <div className="flex-1 order-2 md:order-1">
            <span className={`${fontMono} text-[#C5A572] text-xs uppercase tracking-widest block mb-6`}>
              Не хотите так?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Если ваш сайт выглядит{" "}
              <span className={fontSerifItalic}>вот так</span> —
              <br />пора это исправить
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10 max-w-lg">
              Устаревший дизайн, нечитаемые шрифты, хаотичная структура —
              всё это отталкивает клиентов ещё до того, как они прочитают хоть слово.
              Мы делаем иначе.
            </p>
            <button
              onClick={onOpenModal}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#C5A572] text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
              Обратиться к нам
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Правая часть — "плохой сайт" заглушка */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 order-1 md:order-2 relative"
          >
            {/* Плашка "ПЛОХОЙ ПРИМЕР" */}
            <div className="absolute -top-3 -left-3 z-10 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 flex items-center gap-1">
              <X className="w-3 h-3" /> Плохой пример
            </div>

            {/* Имитация плохого сайта */}
            <div className="border-2 border-red-600/40 bg-[#f0ede8] overflow-hidden select-none pointer-events-none"
              style={{ fontFamily: "Times New Roman, serif" }}>
              {/* Браузерная строка */}
              <div className="bg-[#d4d0cb] px-3 py-2 flex items-center gap-2 border-b border-[#b0aca5]">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 bg-white text-[10px] text-gray-500 px-2 py-0.5 rounded-sm ml-2">
                  http://best-site-2005.narod.ru
                </div>
              </div>

              {/* Контент */}
              <div className="p-4">
                {/* Шапка */}
                <div className="bg-[#000080] text-yellow-300 text-center py-2 mb-3 text-sm font-bold border-4 border-dashed border-yellow-400">
                  ★ ДОБРО ПОЖАЛОВАТЬ НА НАШ САЙТ ★
                </div>

                {/* Marquee-текст */}
                <div className="bg-red-100 border border-red-400 text-red-700 text-[11px] py-1 mb-3 overflow-hidden whitespace-nowrap">
                  <span style={{ display: "inline-block", animation: "none" }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;★ АКЦИЯ! СКИДКИ! ЗВОНИТЕ! ТЕЛ: 8-800-000-00-00 ★ МЫ ЛУЧШИЕ В ГОРОДЕ ★ ЗВОНИТЕ ПРЯМО СЕЙЧАС ★&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </div>

                {/* Навигация */}
                <div className="flex gap-1 mb-3 flex-wrap">
                  {["ГЛАВНАЯ", "О НАС", "УСЛУГИ", "КОНТАКТЫ", "ФОРУМ", "ГОСТЕВАЯ"].map(item => (
                    <div key={item} className="bg-[#000080] text-white text-[9px] px-2 py-1 border border-[#4444ff]">
                      {item}
                    </div>
                  ))}
                </div>

                {/* Тело */}
                <div className="flex gap-3">
                  <div className="flex-1">
                    <div className="text-[#000080] text-xs font-bold underline mb-1" style={{ fontFamily: "Times New Roman" }}>
                      Наша компания — лучшая!!!
                    </div>
                    <div className="text-[10px] text-black leading-tight mb-2" style={{ fontFamily: "Times New Roman" }}>
                      Мы работаем с 1999 года. У нас самые лучшие цены и качество.
                      Наши специалисты имеют большой опыт работы в данной сфере деятельности.
                    </div>
                    <div className="text-[10px] text-green-700 font-bold">
                      Посетителей сегодня: <span className="text-red-600">00047</span>
                    </div>
                  </div>
                  {/* "Картинка" */}
                  <div className="w-20 h-16 bg-[#cccccc] border-2 border-[#888] flex items-center justify-center shrink-0">
                    <span className="text-[8px] text-gray-500 text-center leading-tight">Image<br/>not found</span>
                  </div>
                </div>

                {/* Футер */}
                <div className="mt-3 border-t border-gray-400 pt-2 text-center text-[9px] text-gray-500" style={{ fontFamily: "Times New Roman" }}>
                  © 2005 Все права защищены. Сайт сделан в Frontpage.
                  Лучший просмотр в IE 6.0, разрешение 800×600
                </div>
              </div>
            </div>

            {/* Красный оверлей с крестом */}
            <div className="absolute inset-0 border-2 border-red-600/40 pointer-events-none">
              <div className="absolute inset-0 opacity-10"
                style={{
                  background: "linear-gradient(to bottom right, transparent calc(50% - 1px), #dc2626 calc(50% - 1px), #dc2626 calc(50% + 1px), transparent calc(50% + 1px)), linear-gradient(to bottom left, transparent calc(50% - 1px), #dc2626 calc(50% - 1px), #dc2626 calc(50% + 1px), transparent calc(50% + 1px))"
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
