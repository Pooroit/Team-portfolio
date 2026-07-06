import { useState, useEffect } from "react";
import type { ActiveModal } from "../types";
import CustomCursor from "./CustomCursor";
import Preloader from "./Preloader";
import Ticker from "./Ticker";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Principles from "./Principles";
import Projects from "./Projects";
import Team from "./Team";
import Modal from "./Modal";
import Footer from "./Footer";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const [hideLoader, setHideLoader] = useState(false);
  const [activeModal, setActiveModal] = useState<ActiveModal | null>(null);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setHideLoader(true), 800);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeModal || loading ? "hidden" : "auto";
  }, [activeModal, loading]);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds} MSK`);
    };
    updateClock();
    const timerId = setInterval(updateClock, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#F5F5F0] overflow-x-hidden font-sans antialiased cursor-none">
      <Preloader loading={loading} hideLoader={hideLoader} />
      <CustomCursor />
      <Ticker />
      <Header />
      <Hero />
      <Services onOpenModal={setActiveModal} />
      <Principles />
      <Projects onOpenModal={setActiveModal} />
      <Team onOpenModal={setActiveModal} />
      <Modal activeModal={activeModal} onClose={() => setActiveModal(null)} />
      <Footer currentTime={currentTime} />

      <style>{`
        @keyframes marquee-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-fast {
          animation: marquee-fast 15s linear infinite;
        }
        @keyframes loader-line {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-loader-line {
          animation: loader-line 1.5s ease forwards;
        }
      `}</style>
    </div>
  );
}
