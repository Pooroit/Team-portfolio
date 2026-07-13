import logo from "../image/logo.png";

interface PreloaderProps {
  loading: boolean;
  hideLoader: boolean;
}

export default function Preloader({ loading, hideLoader }: PreloaderProps) {
  if (hideLoader) return null;

  return (
    <div
      className={`fixed inset-0 bg-[#0A0A0A] z-[100] flex flex-col items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        loading ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Лого */}
      <div
        className={`transition-all duration-700 ${
          loading ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <img
          src={logo}
          alt="ЦЕХ"
          className="w-32 h-32 object-contain"
          style={{ mixBlendMode: "screen" }}
        />
      </div>

      {/* Прогресс-линия */}
      <div className="mt-8 w-32 h-px bg-white/10 overflow-hidden">
        <div className="h-full bg-[#C5A572] animate-loader-line" />
      </div>

      {/* Подпись */}
      <span
        className={`mt-4 text-[10px] font-mono uppercase tracking-[0.3em] text-[#666] transition-opacity duration-500 ${
          loading ? "opacity-100" : "opacity-0"
        }`}
      >
        Загрузка...
      </span>
    </div>
  );
}
