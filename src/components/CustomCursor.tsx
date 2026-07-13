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
    <>
      {/* Внешнее кольцо — следует с задержкой */}
      <motion.div
        className="hidden lg:block fixed top-0 left-0 pointer-events-none z-[100] rounded-full"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        animate={{
          width: cursorText ? 44 : 36,
          height: cursorText ? 44 : 36,
          marginLeft: cursorText ? -22 : -18,
          marginTop: cursorText ? -22 : -18,
          backgroundColor: cursorText
            ? "rgba(197, 165, 114, 1)"
            : "transparent",
          border: cursorText
            ? "1.5px solid rgba(197, 165, 114, 1)"
            : "1.5px solid rgba(197, 165, 114, 0.5)",
          mixBlendMode: cursorText ? "difference" : "normal",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
      />
      {/* Маленькая точка — центр, реагирует мгновенно */}
      <motion.div
        className="hidden lg:block fixed top-0 left-0 pointer-events-none z-[101] rounded-full bg-[#C5A572]"
        style={{
          translateX: x,
          translateY: y,
          marginLeft: -2,
          marginTop: -2,
        }}
        animate={{
          width: cursorText ? 0 : 4,
          height: cursorText ? 0 : 4,
          opacity: cursorText ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
