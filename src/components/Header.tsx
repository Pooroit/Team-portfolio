import { useEffect, useState } from "react";
import type { ActiveModal } from "../types";

interface HeaderProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["services", "principles", "projects", "team"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { id: "services", label: "Услуги" },
    { id: "principles", label: "Процесс" },
    { id: "projects", label: "Работы" },
    { id: "team", label: "Команда" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5"
          : ""
      }`}
    >
      <nav className="flex items-center justify-between px-8 md:px-12 py-6 text-white">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-baseline gap-3"
          data-cursor="Top"
        >
          <span className="text-2xl font-bold tracking-tight">ЦЕХ</span>
          <span className="text-[10px] font-mono uppercase opacity-50">
            © 2026
          </span>
        </button>

        <div className="hidden md:flex items-center gap-12 text-sm font-medium uppercase tracking-wider">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              data-cursor="Go"
              className={`relative transition-colors duration-300 hover:text-[#C5A572] ${
                activeSection === id ? "text-[#C5A572]" : "text-white/70"
              }`}
            >
              {label}
              {activeSection === id && (
                <span className="absolute -bottom-1 left-0 w-full h-px bg-[#C5A572]" />
              )}
            </button>
          ))}
        </div>

        <button
          data-cursor="Mail"
          onClick={() => onOpenModal({ type: "contact", index: 0 })}
          className="group relative px-5 py-2.5 text-xs font-medium uppercase tracking-widest border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Связаться
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#C5A572] rounded-full" />
        </button>
      </nav>
    </header>
  );
}
