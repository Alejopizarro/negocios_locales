"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface LiquidGlassProps {
  children: ReactNode;
  className?: string;
  draggable?: boolean;
  intensity?: "light" | "medium" | "strong";
  allowOverflow?: boolean; // Nueva prop
}

export default function LiquidGlass({
  children,
  className = "",
  draggable = false,
  intensity = "medium",
  allowOverflow = false, // Nueva prop
}: LiquidGlassProps) {
  const intensityConfig = {
    light: {
      scale: "100",
      brightness: "1.05",
      blur: "1px",
      shadowOpacity: "30",
    },
    medium: {
      scale: "200",
      brightness: "1.1",
      blur: "2px",
      shadowOpacity: "40",
    },
    strong: {
      scale: "350",
      brightness: "1.15",
      blur: "3px",
      shadowOpacity: "50",
    },
  };

  const config = intensityConfig[intensity];

  return (
    <>
      <svg style={{ display: "none" }}>
        <defs>
          <filter id={`displacementFilter-${intensity}`}>
            <feTurbulence
              type="turbulence"
              baseFrequency="0.01"
              numOctaves="2"
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale={config.scale}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* SOLUCIÓN: Wrapper adicional para manejar overflow */}
      <div className={`relative ${allowOverflow ? "" : "overflow-hidden"}`}>
        <motion.div
          drag={draggable}
          dragMomentum={false}
          whileDrag={{ scale: 1.02 }}
          className={`
            liquid-glass-card
            relative w-full flex flex-wrap items-center justify-center 
            p-8 rounded-[28px] 
            transition-opacity duration-300 ease-out
            ${allowOverflow ? "" : "overflow-hidden"}
            ${className}
          `}
          style={{
            filter: `drop-shadow(-8px -10px 46px rgba(0, 0, 0, 0.${config.shadowOpacity}))`,
            backdropFilter: `brightness(${config.brightness}) blur(${config.blur}) url(#displacementFilter-${intensity})`,
            WebkitBackdropFilter: `brightness(${config.brightness}) blur(${config.blur})`,
          }}
        >
          {/* Pseudo-elemento con overflow controlado */}
          <div
            className={`absolute inset-0 z-0 rounded-[28px] pointer-events-none ${
              allowOverflow ? "" : "overflow-hidden"
            }`}
            style={{
              boxShadow: `inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7), inset 0 0 8px 1px rgba(255, 255, 255, 0.7)`,
            }}
          />

          <div className="relative z-10">{children}</div>
        </motion.div>
      </div>
    </>
  );
}
