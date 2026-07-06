import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, RefreshCw, Plus } from "lucide-react";
import { fontSerifItalic, fontMono } from "../constants";
import { team } from "../data";
import type { ActiveModal } from "../types";

interface TeamProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export default function Team({ onOpenModal }: TeamProps) {
  const [hoveredMember, setHoveredMember] = useState<number | null>(0);

  const currentMember = hoveredMember !== null ? team[hoveredMember] : null;

  return (
    <section
      id="team"
      className="relative px-8 md:px-12 py-32 border-t border-white/10 bg-[#070707] pb-40"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Люди <br /> <span className={fontSerifItalic}>Цеха</span>
          </h2>
          <p className="self-end text-gray-400 max-w-md">
            Наведите на имя, чтобы увидеть профиль. Нажмите, чтобы узнать
            подробности.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 border-t border-white/10">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative border-b border-white/10 cursor-pointer"
                onMouseEnter={() => setHoveredMember(index)}
                onClick={() => onOpenModal({ type: "team", index })}
              >
                {member.isVacant ? (
                  /* Вакантное место — особый стиль */
                  <div
                    data-cursor="Join"
                    className={`flex items-center justify-between py-8 transition-all duration-500 ${hoveredMember === index ? "px-4" : "px-2"} ${hoveredMember !== null && hoveredMember !== index ? "opacity-30" : "opacity-100"}`}
                  >
                    <div className="flex items-baseline gap-6">
                      <span className={`${fontMono} text-[#666]`}>
                        {member.id}
                      </span>
                      <h3
                        className={`text-3xl md:text-5xl font-bold tracking-tight transition-colors duration-300 ${hoveredMember === index ? "text-[#C5A572]" : "text-white/40"}`}
                      >
                        {member.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4 md:gap-6">
                      <span className={`${fontMono} hidden md:block text-gray-600`}>
                        {member.role}
                      </span>
                      <span
                        className={`${fontMono} hidden lg:flex items-center gap-1.5 text-[#C5A572]/70 border border-[#C5A572]/20 px-2.5 py-1 rounded-full`}
                      >
                        <Plus className="w-3 h-3" /> Вступить
                      </span>
                      <Plus
                        className={`w-8 h-8 transition-colors duration-300 ${hoveredMember === index ? "text-[#C5A572]" : "text-white/20"}`}
                      />
                    </div>
                  </div>
                ) : (
                  /* Обычный участник */
                  <div
                    data-cursor="View"
                    className={`flex items-center justify-between py-8 transition-all duration-500 ${hoveredMember === index ? "px-4" : "px-2"} ${hoveredMember !== null && hoveredMember !== index ? "opacity-30" : "opacity-100"}`}
                  >
                    <div className="flex items-baseline gap-6">
                      <span className={`${fontMono} text-[#666]`}>
                        {member.id}
                      </span>
                      <h3
                        className={`text-3xl md:text-5xl font-bold tracking-tight transition-colors duration-300 ${hoveredMember === index ? "text-[#C5A572]" : "text-white"}`}
                      >
                        {member.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4 md:gap-6">
                      <span
                        className={`${fontMono} hidden md:block text-gray-500`}
                      >
                        {member.role}
                      </span>
                      <span
                        className={`${fontMono} hidden lg:flex items-center gap-1.5 text-[#C5A572]/70 border border-[#C5A572]/20 px-2.5 py-1 rounded-full`}
                      >
                        <RefreshCw className="w-3 h-3" /> {member.nextRole}
                      </span>
                      <ArrowUpRight
                        className={`w-8 h-8 transition-colors duration-300 ${hoveredMember === index ? "text-[#C5A572]" : "text-white/20"}`}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Стеклянная карточка профиля */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="sticky top-32 border border-white/10 bg-white/[0.02] backdrop-blur-md p-8 rounded-sm overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#C5A572]/10 rounded-full blur-[80px] pointer-events-none transition-opacity duration-500"></div>
              <AnimatePresence mode="wait">
                {currentMember !== null && (
                  <motion.div
                    key={hoveredMember}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative flex flex-col"
                  >
                    <div className="aspect-[4/5] mb-6 rounded-sm bg-gradient-to-b from-[#151515] to-[#080808] border border-white/5 flex items-center justify-center overflow-hidden relative">
                      {currentMember.isVacant ? (
                        /* Вакантная карточка */
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#151515] to-[#080808]">
                          <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#C5A572]/40 flex items-center justify-center">
                            <Plus className="w-10 h-10 text-[#C5A572]/60" />
                          </div>
                          <p className={`${fontMono} text-[#C5A572]/60 text-sm text-center px-4`}>
                            Здесь мог быть ты
                          </p>
                        </div>
                      ) : currentMember.photo ? (
                        <img
                          src={currentMember.photo}
                          alt={currentMember.name}
                          className="absolute inset-0 w-full h-full object-cover object-top"
                        />
                      ) : (
                        <span className="text-[10rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-900/20 to-transparent">
                          {currentMember.id}
                        </span>
                      )}
                      <div className="absolute bottom-4 left-4 flex flex-col gap-1 z-10">
                        <span className={`${fontMono} text-[#C5A572] drop-shadow-lg`}>
                          {currentMember.role}
                        </span>
                        <span className="text-2xl font-bold text-white drop-shadow-lg">
                          {currentMember.name}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {currentMember.bio}
                    </p>

                    {currentMember.isVacant ? (
                      /* CTA для вакансии */
                      <div className="flex items-center gap-3 p-3 border border-[#C5A572]/20 rounded-sm bg-[#C5A572]/5">
                        <Plus className="w-4 h-4 text-[#C5A572] flex-shrink-0" />
                        <p className="text-xs text-gray-300 leading-tight">
                          <span className="text-[#C5A572]">Открытая позиция:</span>{" "}
                          Нажмите, чтобы оставить заявку и присоединиться к команде.
                        </p>
                      </div>
                    ) : (
                      <>
                        {/* Блок ротации */}
                        <div className="flex items-center gap-3 mb-6 p-3 border border-[#C5A572]/20 rounded-sm bg-[#C5A572]/5">
                          <RefreshCw className="w-4 h-4 text-[#C5A572] flex-shrink-0" />
                          <p className="text-xs text-gray-300 leading-tight">
                            <span className="text-[#C5A572]">Ротация:</span> В
                            следующем месяце переходит в отдел "
                            {currentMember.nextRole}", чтобы расширить
                            кругозор.
                          </p>
                        </div>

                        <div className="space-y-3">
                          {currentMember.skills.map((skill, i) => (
                            <div key={i}>
                              <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-400">
                                  {skill.name}
                                </span>
                                <span className={`${fontMono} text-[#C5A572]`}>
                                  {skill.level}%
                                </span>
                              </div>
                              <div className="h-px w-full bg-white/10">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ duration: 0.5, delay: 0.1 }}
                                  className="h-full bg-[#C5A572]"
                                ></motion.div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
