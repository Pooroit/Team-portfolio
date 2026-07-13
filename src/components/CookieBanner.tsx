import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie_accepted")) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_accepted", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] w-[calc(100%-2rem)] max-w-2xl bg-[#111111] border border-white/10 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-2xl">
      <p className="text-gray-400 text-sm leading-relaxed flex-1">
        Мы используем cookies для корректной работы сайта. Продолжая использовать сайт, вы соглашаетесь с{" "}
        <span className="text-[#C5A572]">использованием файлов cookie</span>.
      </p>
      <button
        onClick={accept}
        className="shrink-0 px-6 py-2 bg-[#C5A572] text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
      >
        Понятно
      </button>
    </div>
  );
}
