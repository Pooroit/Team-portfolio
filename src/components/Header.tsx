export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-30">
      <nav className="flex items-center justify-between px-8 md:px-12 py-6 text-white">
        <div className="flex items-baseline gap-3" data-cursor="Top">
          <span className="text-2xl font-bold tracking-tight">ЦЕХ</span>
          <span className="text-[10px] font-mono uppercase opacity-50">
            © 2026
          </span>
        </div>
        <div className="hidden md:flex items-center gap-12 text-sm font-medium uppercase tracking-wider">
          <a href="#services" data-cursor="Go">
            Услуги
          </a>
          <a href="#principles" data-cursor="Go">
            Процесс
          </a>
          <a href="#projects" data-cursor="Go">
            Работы
          </a>
          <a href="#team" data-cursor="Go">
            Команда
          </a>
        </div>
        <button
          data-cursor="Mail"
          className="group relative px-5 py-2.5 text-xs font-medium uppercase tracking-widest border border-white/20 hover:border-white transition-colors"
        >
          Связаться
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#C5A572] rounded-full"></span>
        </button>
      </nav>
    </header>
  );
}
