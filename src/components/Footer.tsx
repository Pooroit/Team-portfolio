import { Clock, Mail } from "lucide-react";
import { fontSerifItalic, fontMono } from "../constants";

interface FooterProps {
  currentTime: string;
}

export default function Footer({ currentTime }: FooterProps) {
  return (
    <footer className="relative px-8 md:px-12 pt-32 border-t border-white/10 bg-[#050505] pb-16">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-20">
          <span className={`${fontMono} text-[#C5A572] mb-6 block`}>
            (Index — 06 / Footer)
          </span>
          <h2 className="text-[12vw] md:text-[10vw] leading-[0.9] font-bold tracking-tighter">
            Давайте <br />
            <span className={fontSerifItalic}>создавать</span> будущее.
          </h2>
        </div>

        {/* Контакты, статус и манифест */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className={`${fontMono} text-gray-500 block mb-4`}>
              Свяжитесь с нами:
            </span>
            <a
              href="mailto:hello@ceh.studio"
              data-cursor="Send"
              className="group inline-flex items-center gap-4 text-3xl md:text-5xl font-medium text-white border-b border-white/20 pb-2 hover:border-[#C5A572] transition-colors"
            >
              hello@ceh.studio
              <Mail className="w-8 h-8 text-[#C5A572] group-hover:rotate-12 transition-transform" />
            </a>
            <p className="text-gray-500 mt-6 max-w-lg leading-relaxed text-sm">
              Мы не берем в работу больше 3 проектов одновременно, чтобы
              сохранить фокус на качестве. Если вы ищете надежного партнера для
              долгосрочного развития — вы по адресу.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:items-end">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm uppercase tracking-widest text-white">
                Доступны для проектов
              </span>
            </div>
            <span className={`${fontMono} text-gray-500`}>
              Старт: Август 2026
            </span>
            <span className={`${fontMono} text-gray-500`}>
              Локация: Москва / WorldWide
            </span>
            <span className={`${fontMono} text-gray-500 mt-4 text-right`}>
              55.7558° N <br /> 37.6173° E
            </span>
          </div>
        </div>

        {/* Навигация и доп. инфо */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 border-b border-white/10">
          <div className="flex flex-col gap-3">
            <span className={`${fontMono} text-gray-600 mb-2`}>Меню</span>
            <a
              href="#services"
              className="hover:text-[#C5A572] transition-colors text-sm"
            >
              Услуги
            </a>
            <a
              href="#principles"
              className="hover:text-[#C5A572] transition-colors text-sm"
            >
              Процесс
            </a>
            <a
              href="#projects"
              className="hover:text-[#C5A572] transition-colors text-sm"
            >
              Проекты
            </a>
            <a
              href="#team"
              className="hover:text-[#C5A572] transition-colors text-sm"
            >
              Команда
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className={`${fontMono} text-gray-600 mb-2`}>Соцсети</span>
            <a
              href="#"
              className="hover:text-[#C5A572] transition-colors text-sm"
            >
              Telegram
            </a>
            <a
              href="#"
              className="hover:text-[#C5A572] transition-colors text-sm"
            >
              Behance
            </a>
            <a
              href="#"
              className="hover:text-[#C5A572] transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="#"
              className="hover:text-[#C5A572] transition-colors text-sm"
            >
              Dribbble
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className={`${fontMono} text-gray-600 mb-2`}>
              Локальное время
            </span>
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-[#C5A572]" />
              <span className="text-white text-lg">{currentTime}</span>
            </div>
            <span className="text-gray-600 text-xs">Часовой пояс: GMT+3</span>
            <span className="text-gray-600 text-xs mt-2">
              Время работы: 10:00 - 20:00
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className={`${fontMono} text-gray-600 mb-2`}>
              Юридическое
            </span>
            <span className="text-gray-500 text-sm leading-relaxed">
              © 2026 Студия Цех. ИНН 7700000000. Все права защищены. Сделано с
              точностью до миллисекунды.
            </span>
          </div>
        </div>

        <div className="mt-16 flex justify-center items-center overflow-hidden">
          <span className="text-[20vw] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#1a1a1a] to-[#050505] tracking-tighter leading-none select-none">
            ЦЕХ
          </span>
        </div>
      </div>
    </footer>
  );
}
