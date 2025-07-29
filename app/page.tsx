"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import AboutUs from "@/components/about-us";
import HeroIii from "@/components/hero-iii";
import HowAbout from "@/components/how-about";
import Pricing from "@/components/pricing";
import Why from "@/components/why";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Diferentes velocidades de parallax
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const pricingY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const howAboutY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="bg-black" ref={containerRef}>
      {/* Contenedor de las secciones con parallax */}
      <div className="relative min-h-[100vh]">
        <div className="fixed inset-0 z-0 bg-[image:var(--stars-mobile)] lg:bg-[image:var(--stars)] bg-no-repeat bg-cover bg-center bg-fixed" />

        {/* Overlay para mejor contraste */}
        <div className="fixed inset-0 bg-black/30 z-0" />

        {/* Hero con parallax */}
        <motion.div style={{ y: heroY }} className="relative z-10 h-screen">
          <HeroIii />
        </motion.div>

        {/* Pricing con parallax diferente */}
        <motion.div
          style={{ y: pricingY }}
          className="relative z-10 flex items-center"
        >
          <Pricing />
        </motion.div>
        {/* About Us con parallax diferente */}
        <motion.div className="bg-black relative z-10 py-8 lg:py-0 min-h-screen flex items-center">
          <AboutUs />
        </motion.div>
        {/* HowAbout con parallax diferente */}
        <motion.div
          style={{ y: howAboutY }}
          className="relative z-10 min-h-screen pt-20  flex justify-center items-center"
        >
          <HowAbout />
        </motion.div>
      </div>

      {/* Resto de componentes normales */}
      <div className="relative z-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Why />
        </div>
      </div>
    </div>
  );
}
