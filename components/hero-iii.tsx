"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const HeroIii = () => {
  const messages = ["Presencia Digital", "Marca Personal", "Negocio"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === messages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Ya no necesita imagen de fondo propia */}
      <div className="z-10 flex flex-col w-full items-center justify-center text-center px-4 py-8">
        <h1 className="flex flex-col w-full text-xl font-light text-slate-300">
          elevamos tu
          <div className="relative h-20 flex items-center justify-center overflow-hidden">
            <div className="absolute w-fit top-0 left-0 right-0 h-6 bg-gradient-to-b from-black via-black/80 to-transparent z-0 pointer-events-none" />
            <div className="absolute w-fit bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black via-black/80 to-transparent z-0 pointer-events-none" />

            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  className="absolute text-5xl font-semibold text-slate-50 whitespace-nowrap"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {messages[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </h1>
        <button className="mt-10 px-6 py-3 font-light rounded-full bg-neutral-400/20 hover:bg-neutral-400/30 backdrop-blur-[1px] text-neutral-200 border border-neutral-400/20 transition">
          agendar consulta gratis
        </button>
      </div>
    </div>
  );
};

export default HeroIii;
