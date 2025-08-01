"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [visibleBars, setVisibleBars] = useState<Set<number>>(new Set());
  // Removed unused scrollDirection state
  const [barProgresses, setBarProgresses] = useState<Map<number, number>>(
    new Map()
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Intersection Observer para detectar qué barras están visibles
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const barIndex = parseInt(
            (entry.target as HTMLElement).dataset.barIndex || "0"
          );
          if (entry.isIntersecting) {
            setVisibleBars((prev) => new Set([...prev, barIndex]));
          } else {
            setVisibleBars((prev) => {
              const newSet = new Set(prev);
              newSet.delete(barIndex);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observar todas las barras
    const bars =
      containerRef.current?.querySelectorAll<HTMLElement>("[data-bar-index]");
    bars?.forEach((bar: HTMLElement) => observer.observe(bar));

    // 🎯 NUEVA LÓGICA: Calcular progreso basado en posición del contenedor
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      lastScrollY.current = currentScrollY;

      // 📊 Calcular progreso basado en el contenedor completo
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // 🧮 Lógica del progreso:
        // Progreso 0 = contenedor arriba de todo (top = 0)
        // Progreso 1 = contenedor completamente fuera por abajo (bottom < 0)

        let progress = 0;

        if (containerRect.top <= 0) {
          // El contenedor ha empezado a salir por arriba
          const containerHeight = containerRect.height;
          const totalScrollDistance = windowHeight + containerHeight;
          const scrolled = -containerRect.top;

          // Progreso de 0 a 1 basado en cuánto ha scrolleado
          progress = Math.min(1, scrolled / totalScrollDistance);
        }

        // Aplicar el mismo progreso a todas las barras visibles
        const newProgresses = new Map<number, number>();
        visibleBars.forEach((index) => {
          newProgresses.set(index, progress);
        });

        setBarProgresses(newProgresses);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Ejecutar una vez al montar para calcular posiciones iniciales
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleBars]); // Dependencia de visibleBars para recalcular

  const bars = [
    { width: "w-24", color: "bg-cyan-300" },
    { width: "w-32", color: "bg-cyan-500" },
    { width: "w-48", color: "bg-cyan-300" },
    { width: "w-32", color: "bg-cyan-300" },
    { width: "w-64", color: "bg-cyan-500" },
    { width: "w-48", color: "bg-cyan-300" },
  ];

  return (
    <div>
      <div ref={containerRef} className="h-screen flex flex-col justify-evenly">
        <div className="self-end">
          <div className="flex flex-col space-y-1 items-end">
            <div className="flex space-x-2">
              <div className="bg-cyan-300 h-2 w-12" />
              <div className="bg-cyan-300 h-2 w-32" />
            </div>
            <div className="bg-cyan-500 h-2 w-24" />
          </div>
        </div>
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center max-w-6xl mx-auto px-4 py-8 lg:py-16 lg:px-8">
          <Image
            src="/office.webp"
            alt="Hero Background"
            className="h-full object-cover rounded-lg shadow-lg order-2 lg:order-1"
            priority={true}
            width={500}
            height={500}
          />

          <div className="flex flex-col justify-center h-full space-y-4 lg:space-y-8 max-w-4xl mx-auto tracking-tight leading-none text-slate-200 order-1 lg:order-2">
            <p className="text-xl">
              ¿Tu negocio se está perdiendo clientes por no aparecer en Google?
            </p>
            <div className="space-y-4">
              <h1 className="text-[2.75rem] lg:text-4xl font-extralight">
                Ayudamos a <br className="flex lg:hidden" />
                <span className="bg-radial from-slate-50 to-slate-300 bg-clip-text text-transparent font-extrabold">
                  Negocios Locales
                </span>{" "}
                con{" "}
                <span className="bg-radial from-slate-50 to-slate-300 bg-clip-text text-transparent font-extrabold">
                  Páginas Web
                </span>{" "}
                que realmente venden
              </h1>
              <div className="grid grid-cols-3 gap-2 text-sm font-medium text-center lowercase text-gray-900">
                <span className="px-2 py-1 rounded-md border-1 border-cyan-500 text-cyan-300 font-medium">
                  Diseño moderno
                </span>
                <span className="px-2 py-1 rounded-md border-1 border-cyan-500 text-cyan-300 font-medium">
                  Rendimiento
                </span>
                <span className="px-2 py-1 rounded-md border-1 border-cyan-500 text-cyan-300 font-medium">
                  Posicionamiento
                </span>
              </div>
              <Button
                size="lg"
                className="w-full lg:max-w-xs bg-amber-400 cursor-pointer mt-4 text-white text-lg"
              >
                <CalendarIcon />
                Agenda una consulta gratuita
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          {bars.map((bar, index) => {
            const progress = barProgresses.get(index) || 0;

            // 🎨 Calcular scale basado en progreso del contenedor
            const scaleValue = 1 + progress * 0.5; // Empieza en 1, máximo 1.5
            const transformOrigin = "left"; // Siempre crece hacia la derecha

            return (
              <div
                key={index}
                data-bar-index={index}
                className={`
                ${bar.color} 
                h-2 
                ${bar.width} 
                hover:scale-x-110 
                transition-transform
                duration-75
                lg:duration-300
                ease-out
                transform
              `}
                style={{
                  transformOrigin: transformOrigin,
                  transform: `scaleX(${scaleValue})`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
