"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorBlob = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth animations using useSpring
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 12 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 12 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 w-5 h-5 bg-cyan-300 opacity-80 shadow-[0_0_20px_5px_rgba(0,255,255,0.6)] rounded-full pointer-events-none mix-blend-difference"
      style={{ x: smoothX, y: smoothY }}
    />
  );
};

export default CursorBlob;
