"use client";

import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef, ReactNode } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

interface ParallaxStarsWrapperProps {
  children: ReactNode;
  parallaxDistance?: number;
}

function ParallaxStarsWrapper({
  children,
  parallaxDistance = 100,
}: ParallaxStarsWrapperProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, parallaxDistance);

  return (
    <motion.div ref={ref} style={{ y }} className="relative z-10">
      {children}
    </motion.div>
  );
}

export default ParallaxStarsWrapper;
