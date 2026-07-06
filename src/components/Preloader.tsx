interface PreloaderProps {
  loading: boolean;
  hideLoader: boolean;
}

export default function Preloader({ loading, hideLoader }: PreloaderProps) {
  if (hideLoader) return null;

  return (
    <div
      className={`fixed inset-0 bg-[#0A0A0A] z-[100] flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${loading ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="text-center">
        <span className="text-8xl font-bold text-[#C5A572]">ЦЕХ</span>
        <div className="h-px bg-white mt-4 animate-loader-line"></div>
      </div>
    </div>
  );
}
