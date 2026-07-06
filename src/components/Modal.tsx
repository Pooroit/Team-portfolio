import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowUpRight, RefreshCw } from "lucide-react";
import { fontMono } from "../constants";
import { services, projects, team } from "../data";
import type { ActiveModal } from "../types";

interface ModalProps {
  activeModal: ActiveModal | null;
  onClose: () => void;
}

export default function Modal({ activeModal, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {activeModal && (
        <motion.div
          className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm flex items-end md:items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-[#111] w-full max-w-5xl max-h-[90vh] overflow-y-auto border border-white/10"
            initial={{ y: 50, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              data-cursor="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal.type === "project" ? (
              <ProjectModal index={activeModal.index} />
            ) : activeModal.type === "service" ? (
              <ServiceModal index={activeModal.index} onClose={onClose} />
            ) : (
              <TeamModal index={activeModal.index} onClose={onClose} />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProjectModal({ index }: { index: number }) {
  const project = projects[index];

  return (
    <div className="flex flex-col md:flex-row">
      <div
        className={`relative w-full md:w-1/2 min-h-[300px] bg-gradient-to-br ${project.color} flex items-center justify-center p-8 overflow-hidden`}
      >
        {project.preview ? (
          <img
            src={project.preview}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover object-top opacity-90"
          />
        ) : (
          <span className="text-[12rem] font-bold text-white/5">
            {project.id}
          </span>
        )}
      </div>
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
        <span className={`${fontMono} text-[#C5A572] mb-4`}>
          {project.cat} — {project.year}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {project.title}
        </h2>
        <p className="text-gray-400 leading-relaxed mb-8">{project.desc}</p>
        <div className="mt-auto pt-8 border-t border-white/10">
          <span className={`${fontMono} mb-4 block`}>Роль студии:</span>
          <div className="flex flex-wrap gap-2 mb-6">
            {["UI/UX", "Frontend", "Backend", "Motion"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 border border-white/20 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Go"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#C5A572] text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
              Открыть проект
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ServiceModal({
  index,
  onClose,
}: {
  index: number;
  onClose: () => void;
}) {
  const service = services[index];

  return (
    <div className="p-8 md:p-16">
      <button
        onClick={onClose}
        className="flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition-colors text-sm"
        data-cursor="Back"
      >
        <ArrowLeft className="w-4 h-4" /> Назад к услугам
      </button>
      <span className={`${fontMono} text-[#C5A572] mb-4 block`}>
        {service.id} — Услуга
      </span>
      <h2 className="text-5xl md:text-7xl font-bold mb-8">{service.title}</h2>
      <p className="text-xl text-gray-400 mb-12 max-w-2xl">{service.desc}</p>
      <div className="border-t border-white/10 pt-8">
        <span className={`${fontMono} mb-6 block`}>
          Технологии и подходы:
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.details.map((detail, i) => (
            <div
              key={i}
              className="flex items-center gap-3 border-b border-white/5 pb-3"
            >
              <span className="w-2 h-2 bg-[#C5A572]"></span>
              <span className="text-lg">{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamModal({
  index,
  onClose,
}: {
  index: number;
  onClose: () => void;
}) {
  const member = team[index];

  return (
    <div className="flex flex-col md:flex-row">
      <div className="relative w-full md:w-2/5 min-h-[400px] bg-gradient-to-br from-[#151515] to-[#0A0A0A] flex items-center justify-center p-8 border-r border-white/10">
        <span className="text-[15rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-900/20 to-transparent">
          {member.id}
        </span>
      </div>
      <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition-colors text-sm"
          data-cursor="Back"
        >
          <ArrowLeft className="w-4 h-4" /> Назад к команде
        </button>
        <span className={`${fontMono} text-[#C5A572] mb-4`}>
          {member.role} — {member.focus}
        </span>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">{member.name}</h2>
        <p className="text-gray-400 leading-relaxed mb-8 text-lg">
          {member.bio}
        </p>

        <div className="mt-auto pt-8 border-t border-white/10 space-y-4">
          <span className={`${fontMono} block mb-4`}>Компетенции:</span>
          {member.skills.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">{skill.name}</span>
                <span className={`${fontMono} text-[#C5A572]`}>
                  {skill.level}%
                </span>
              </div>
              <div className="h-px w-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-full bg-[#C5A572]"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <span className={`${fontMono} block mb-2`}>Опыт:</span>
          <p className="text-gray-400">{member.exp}</p>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <span className={`${fontMono} block mb-2`}>
            Ротация ролей (след. месяц):
          </span>
          <div className="flex items-center gap-3 p-4 border border-[#C5A572]/20 rounded-sm bg-[#C5A572]/5">
            <RefreshCw className="w-6 h-6 text-[#C5A572] flex-shrink-0" />
            <p className="text-gray-300 text-sm">
              В следующем месяце сотрудник переходит в отдел{" "}
              <span className="text-[#C5A572] font-bold">
                {member.nextRole}
              </span>
              . Мы практикуем ротацию, чтобы команда оставалась гибкой и
              понимала продукт со всех сторон.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
