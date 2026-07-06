import { motion } from "framer-motion";
import { fontSerifItalic, fontMono } from "../constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end px-8 md:px-12 pb-20 pt-32">
      <div className="w-full max-w-[1600px] mx-auto">
        <div className="flex items-end justify-between mb-8">
          <span className={`${fontMono} text-[#C5A572]`}>(Index — 01)</span>
          <span className={`${fontMono}`}>Scroll ↓</span>
        </div>
        <h1 className="text-[15vw] md:text-[12vw] leading-[0.8] font-bold tracking-tighter">
          <div className="">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="block"
            >
              МЫ — <span className={fontSerifItalic}>студия</span>
            </motion.span>
          </div>
          <div className="mt-15 flex items-center gap-6">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="block"
            >
              ЦЕХ
            </motion.span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="hidden md:block h-[2px] bg-[#C5A572] origin-left w-1/3 mb-4"
            ></motion.div>
          </div>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 border-t border-white/10 pt-8">
          <p className="md:col-span-2 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
            Мы создаем цифровые продукты на стыке инженерии и искусства. От
            архитектуры баз данных до финального пикселя в интерфейсе.
          </p>
          <div className="flex flex-col gap-4 md:items-end">
            <div className="text-right">
              <span className="text-5xl font-bold text-[#C5A572]">06</span>
              <span className={`${fontMono} ml-2`}>экспертов</span>
            </div>
            <div className="text-right">
              <span className="text-5xl font-bold text-[#C5A572]">∞</span>
              <span className={`${fontMono} ml-2`}>идей</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
