import { ArrowUpRight } from "lucide-react";
import { fontSerifItalic, fontMono } from "../constants";
import { projects } from "../data";
import type { ActiveModal } from "../types";

interface ProjectsProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export default function Projects({ onOpenModal }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="relative px-8 md:px-12 py-32 border-t border-white/10 pb-40"
    >
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
            >
              <div
                data-cursor="View"
                className="flex items-center justify-between py-8 md:py-12 transition-all duration-500 group-hover:px-4 cursor-pointer"
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
                  <span
                    className={`${fontMono} hidden md:block text-gray-500`}
                  >
                    {project.cat}
                  </span>
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
