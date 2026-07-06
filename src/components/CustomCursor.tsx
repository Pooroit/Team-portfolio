import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(x, springConfig);
  const cursorYSpring = useSpring(y, springConfig);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      const interactive = target.closest("[data-cursor]");
      const textElement = target.closest("p, h1, h2, h3, span, a, button");

      if (interactive) {
        const val = interactive.getAttribute("data-cursor");
        setCursorText(val || "");
      } else if (textElement && !interactive) {
        setCursorText("");
      } else {
        setCursorText("");
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="hidden lg:flex fixed top-0 left-0 pointer-events-none z-[100] items-center justify-center rounded-full border border-[#C5A572] bg-transparent backdrop-blur-sm"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        width: cursorText ? 80 : 32,
        height: cursorText ? 80 : 32,
        marginLeft: cursorText ? -40 : -16,
        marginTop: cursorText ? -40 : -16,
      }}
      animate={{
        opacity: 1,
        backgroundColor: cursorText
          ? "rgba(197, 165, 114, 0.9)"
          : "rgba(0,0,0,0)",
        color: cursorText ? "#000" : "transparent",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      {cursorText && (
        <span className="text-[10px] font-bold uppercase tracking-wider">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
