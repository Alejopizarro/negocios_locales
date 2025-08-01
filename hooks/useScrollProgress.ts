import { useEffect, useRef, useState } from "react";

interface UseScrollProgressOptions {
  /**
   * Número de elementos para calcular el progreso
   */
  itemCount: number;
  /**
   * Si debe calcular progreso individual por elemento o el mismo para todos
   */
  individualProgress?: boolean;
}

export function useScrollProgress({
  itemCount,
  individualProgress = false,
}: UseScrollProgressOptions) {
  const [progresses, setProgresses] = useState<Map<number, number>>(new Map());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        let progress = 0;

        if (containerRect.top <= 0) {
          const containerHeight = containerRect.height;
          const totalScrollDistance = windowHeight + containerHeight;
          const scrolled = -containerRect.top;
          progress = Math.min(1, scrolled / totalScrollDistance);
        }

        const newProgresses = new Map<number, number>();

        if (individualProgress) {
          // Lógica para progreso individual por elemento (si se necesita en el futuro)
          for (let i = 0; i < itemCount; i++) {
            // Aquí se podría implementar lógica más compleja para cada elemento
            newProgresses.set(i, progress);
          }
        } else {
          // Aplicar el mismo progreso a todos los elementos
          for (let i = 0; i < itemCount; i++) {
            newProgresses.set(i, progress);
          }
        }

        setProgresses(newProgresses);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Ejecutar una vez al montar

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [itemCount, individualProgress]);

  return {
    progresses,
    containerRef,
  };
}
