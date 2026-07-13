import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowUpRight, RefreshCw, Plus, Send, CheckCircle } from "lucide-react";
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
            ) : activeModal.type === "contact" ? (
              <ContactModal onClose={onClose} />
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
        className={`relative w-full md:w-1/2 min-h-[360px] bg-gradient-to-br ${project.color} flex items-center justify-center p-6 overflow-hidden`}
      >
        {/* Фоновое свечение */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,165,114,0.08)_0%,_transparent_70%)]" />

        {project.preview ? (
          /* Браузерная рамка */
          <div className="relative w-full max-w-[420px] rounded-lg overflow-hidden shadow-2xl border border-white/10">
            {/* Браузерный топбар */}
            <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#1a1a1a] border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <div className="ml-3 flex-1 bg-white/5 rounded px-3 py-0.5 text-[10px] text-gray-500 font-mono truncate">
                {project.url?.replace("https://", "") ?? "preview"}
              </div>
            </div>
            {/* Скриншот */}
            <img
              src={project.preview}
              alt={project.title}
              className="w-full block object-cover object-top"
              style={{ maxHeight: "260px" }}
            />
          </div>
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

function JoinForm({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    role: "",
    contact: "",
    about: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-20 px-8 text-center gap-6"
      >
        <CheckCircle className="w-16 h-16 text-[#C5A572]" />
        <h3 className="text-3xl font-bold">Заявка отправлена</h3>
        <p className="text-gray-400 max-w-md">
          Мы рассмотрим твою кандидатуру и свяжемся с тобой в ближайшее время.
          Спасибо за интерес к команде Цеха.
        </p>
        <button
          onClick={onClose}
          className="mt-4 px-8 py-3 border border-white/20 text-sm hover:bg-white hover:text-black transition-colors"
        >
          Закрыть
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className={`${fontMono} text-xs text-gray-500 uppercase tracking-widest`}>
            Имя *
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Как тебя зовут?"
            className="bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#C5A572]/50 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={`${fontMono} text-xs text-gray-500 uppercase tracking-widest`}>
            Специализация *
          </label>
          <select
            name="role"
            required
            value={form.role}
            onChange={handleChange}
            className="bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#C5A572]/50 transition-colors appearance-none"
          >
            <option value="" disabled className="bg-[#111]">Выбери направление</option>
            <option value="development" className="bg-[#111]">Разработка</option>
            <option value="design" className="bg-[#111]">Дизайн</option>
            <option value="marketing" className="bg-[#111]">Маркетинг</option>
            <option value="analytics" className="bg-[#111]">Аналитика</option>
            <option value="other" className="bg-[#111]">Другое</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className={`${fontMono} text-xs text-gray-500 uppercase tracking-widest`}>
          Контакт *
        </label>
        <input
          type="text"
          name="contact"
          required
          value={form.contact}
          onChange={handleChange}
          placeholder="Telegram, email или ссылка на портфолио"
          className="bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#C5A572]/50 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className={`${fontMono} text-xs text-gray-500 uppercase tracking-widest`}>
          О себе *
        </label>
        <textarea
          name="about"
          required
          value={form.about}
          onChange={handleChange}
          rows={4}
          placeholder="Расскажи о своём опыте, чем занимаешься и почему хочешь в команду"
          className="bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#C5A572]/50 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="flex items-center justify-center gap-3 px-8 py-4 bg-[#C5A572] text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors mt-2"
      >
        Отправить заявку
        <Send className="w-4 h-4" />
      </button>
    </form>
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

  if (member.isVacant) {
    return (
      <div className="flex flex-col md:flex-row">
        {/* Левая часть — визуал вакансии */}
        <div className="relative w-full md:w-2/5 min-h-[400px] bg-gradient-to-br from-[#151515] to-[#0A0A0A] flex flex-col items-center justify-center p-8 border-r border-white/10 gap-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#C5A57215_0%,_transparent_70%)]" />
          <div className="relative w-32 h-32 rounded-full border-2 border-dashed border-[#C5A572]/40 flex items-center justify-center">
            <Plus className="w-14 h-14 text-[#C5A572]/60" />
          </div>
          <div className="relative text-center">
            <span className={`${fontMono} text-[#C5A572] block mb-2`}>07 — Открытая позиция</span>
            <p className="text-gray-500 text-sm max-w-[180px]">
              Мы растём и ищем людей, разделяющих наши ценности
            </p>
          </div>
          <div className="relative flex flex-wrap gap-2 justify-center mt-2">
            {["Разработка", "Дизайн", "Маркетинг", "Аналитика"].map((tag) => (
              <span
                key={tag}
                className={`${fontMono} text-xs px-2.5 py-1 border border-white/10 text-gray-500`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Правая часть — форма */}
        <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition-colors text-sm"
            data-cursor="Back"
          >
            <ArrowLeft className="w-4 h-4" /> Назад к команде
          </button>

          <span className={`${fontMono} text-[#C5A572] mb-3 block`}>
            Вакантное место
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Присоединяйся к Цеху
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Мы небольшая команда, которая делает сложные вещи просто. Если ты
            хочешь работать над интересными проектами, расти и учиться у сильных
            людей — оставь заявку.
          </p>

          <JoinForm onClose={onClose} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="relative w-full md:w-2/5 min-h-[400px] bg-gradient-to-br from-[#151515] to-[#0A0A0A] flex items-center justify-center border-r border-white/10 overflow-hidden">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        ) : (
          <span className="text-[15rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-900/20 to-transparent">
            {member.id}
          </span>
        )}
        {/* Градиент снизу */}
        <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black via-black/75 to-transparent z-10" />
        <div className="absolute bottom-6 left-6 z-20">
          <span className={`${fontMono} text-[#C5A572] text-xs uppercase tracking-widest block mb-1`}>{member.role}</span>
          <span className="text-xl font-bold text-white leading-tight block">{member.name}</span>
        </div>
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

function ContactModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    contact: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-24 px-8 text-center gap-6"
      >
        <CheckCircle className="w-16 h-16 text-[#C5A572]" />
        <h3 className="text-3xl font-bold">Сообщение отправлено</h3>
        <p className="text-gray-400 max-w-md leading-relaxed">
          Мы получили твою заявку и свяжемся в течение 24 часов.
          Спасибо за интерес к Цеху.
        </p>
        <button
          onClick={onClose}
          className="mt-4 px-8 py-3 border border-white/20 text-sm hover:bg-white hover:text-black transition-colors"
        >
          Закрыть
        </button>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row">
      {/* Левая панель */}
      <div className="relative w-full md:w-2/5 min-h-[400px] bg-gradient-to-br from-[#151515] to-[#0A0A0A] flex flex-col justify-between p-10 border-r border-white/10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#C5A572]/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative">
          <span className={`${fontMono} text-[#C5A572] text-xs uppercase tracking-widest block mb-6`}>
            Начнём работу
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Расскажи<br />о проекте
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Оставь заявку — мы изучим задачу и предложим решение. Без шаблонов, без воды.
          </p>
        </div>
        <div className="relative mt-10 space-y-4 border-t border-white/10 pt-8">
          <div>
            <span className={`${fontMono} text-xs text-gray-600 uppercase tracking-widest block mb-1`}>Email</span>
            <span className="text-gray-300 text-sm">hello@tsekh.studio</span>
          </div>
          <div>
            <span className={`${fontMono} text-xs text-gray-600 uppercase tracking-widest block mb-1`}>Telegram</span>
            <span className="text-gray-300 text-sm">@tsekh_studio</span>
          </div>
          <div>
            <span className={`${fontMono} text-xs text-gray-600 uppercase tracking-widest block mb-1`}>Время ответа</span>
            <span className="text-gray-300 text-sm">до 24 часов</span>
          </div>
        </div>
      </div>

      {/* Правая панель — форма */}
      <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition-colors text-sm"
          data-cursor="Back"
        >
          <ArrowLeft className="w-4 h-4" /> Закрыть
        </button>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className={`${fontMono} text-xs text-gray-500 uppercase tracking-widest`}>
                Имя *
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Как к тебе обращаться?"
                className="bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#C5A572]/50 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className={`${fontMono} text-xs text-gray-500 uppercase tracking-widest`}>
                Контакт *
              </label>
              <input
                type="text"
                name="contact"
                required
                value={form.contact}
                onChange={handleChange}
                placeholder="Telegram или email"
                className="bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#C5A572]/50 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className={`${fontMono} text-xs text-gray-500 uppercase tracking-widest`}>
              Бюджет проекта
            </label>
            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#C5A572]/50 transition-colors appearance-none"
            >
              <option value="" className="bg-[#111]">Выбери диапазон</option>
              <option value="under-100k" className="bg-[#111]">До 100 000 ₽</option>
              <option value="100-300k" className="bg-[#111]">100 000 — 300 000 ₽</option>
              <option value="300-500k" className="bg-[#111]">300 000 — 500 000 ₽</option>
              <option value="over-500k" className="bg-[#111]">Свыше 500 000 ₽</option>
              <option value="discuss" className="bg-[#111]">Обсудим</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <label className={`${fontMono} text-xs text-gray-500 uppercase tracking-widest`}>
              О проекте *
            </label>
            <textarea
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Расскажи о задаче, сроках и пожеланиях..."
              className="bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#C5A572]/50 transition-colors resize-none flex-1"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-[#C5A572] text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors mt-2"
          >
            Отправить заявку
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
