import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fontSerifItalic, fontMono } from "../constants";
import { projects } from "../data";
import type { ActiveModal } from "../types";

interface ProjectsProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export default function Projects({ onOpenModal }: ProjectsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  const currentPreview =
    hoveredIndex !== null ? projects[hoveredIndex]?.preview ?? null : null;

  return (
    <section
      id="projects"
      className="relative px-8 md:px-12 py-32 border-t border-white/10 pb-40"
      onMouseMove={handleMouseMove}
    >
      {/* Floating preview — fixed к viewport, поверх всего */}
      <AnimatePresence>
        {currentPreview && (
          <motion.div
            key={hoveredIndex}
            initial={{ opacity: 0, scale: 0.92, rotate: -1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.92, rotate: 1 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="fixed pointer-events-none z-50 overflow-hidden border border-white/10 shadow-2xl"
            style={{
              left: mousePos.x + 28,
              top: mousePos.y - 110,
              width: 300,
              height: 190,
            }}
          >
            <img
              src={currentPreview}
              alt=""
              className="w-full h-full object-cover object-top"
            />
            {/* Тонкий градиент снизу */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Наши <br /> <span className={fontSerifItalic}>проекты</span>
          </h2>
          <span className={`${fontMono} mt-4`}>04 Works / 2024-2026</span>
        </div>
        <div className="border-t border-white/10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative border-b border-white/10"
              onClick={() => onOpenModal({ type: "project", index })}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                data-cursor="View"
                className={`flex items-center justify-between py-8 md:py-12 transition-all duration-500 group-hover:px-4 cursor-pointer ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "opacity-30"
                    : "opacity-100"
                }`}
              >
                <div className="flex items-baseline gap-6">
                  <span className={`${fontMono} text-[#666]`}>
                    {project.id}
                  </span>
                  <h3 className="text-4xl md:text-7xl font-bold tracking-tight text-white group-hover:text-[#C5A572] transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-6">
                  <div className="hidden md:flex flex-col items-end gap-1">
                    <span className={`${fontMono} text-gray-500`}>
                      {project.cat}
                    </span>
                    <span className={`${fontMono} text-gray-600`}>
                      {project.year}
                    </span>
                  </div>
                  <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 text-white/20 group-hover:text-[#C5A572] transition-colors duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
