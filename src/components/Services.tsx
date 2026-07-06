import { Plus } from "lucide-react";
import { fontSerifItalic, fontMono } from "../constants";
import { services } from "../data";
import type { ActiveModal } from "../types";

interface ServicesProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export default function Services({ onOpenModal }: ServicesProps) {
  return (
    <section
      id="services"
      className="relative px-8 md:px-12 py-32 border-t border-white/10 pb-40"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <h2 className="md:col-span-4 text-4xl font-bold leading-tight">
            Что <br /> <span className={fontSerifItalic}>мы делаем</span>
          </h2>
          <p className="md:col-span-5 md:col-start-7 text-gray-400 self-end">
            Нажмите на услугу, чтобы раскрыть детали и стек технологий.
          </p>
        </div>
        <div className="border-t border-white/10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative border-b border-white/10"
              onClick={() => onOpenModal({ type: "service", index })}
            >
              <div
                data-cursor="Open"
                className="relative grid grid-cols-12 gap-4 py-10 px-2 items-center transition-transform duration-500 group-hover:px-6 cursor-pointer"
              >
                <span
                  className={`${fontMono} col-span-2 md:col-span-1 text-[#C5A572]`}
                >
                  ({service.id})
                </span>
                <h3 className="col-span-10 md:col-span-4 text-3xl md:text-5xl font-bold tracking-tight text-white group-hover:text-[#C5A572] transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="hidden md:block md:col-span-5 text-gray-500 text-base leading-relaxed">
                  {service.desc}
                </p>
                <div className="hidden md:flex md:col-span-2 justify-end items-center gap-4">
                  <span className={`${fontMono}`}>Подробнее</span>
                  <Plus className="w-5 h-5 text-white/50 group-hover:text-[#C5A572] group-hover:rotate-90 transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
