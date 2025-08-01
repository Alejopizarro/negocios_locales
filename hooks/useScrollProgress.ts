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
  /**
   * Referencia externa del contenedor (opcional)
   */
  containerRef?: React.RefObject<HTMLDivElement | null>;
}

export function useScrollProgress({
  itemCount,
  individualProgress = false,
  containerRef: externalRef,
}: UseScrollProgressOptions) {
  const [progresses, setProgresses] = useState<Map<number, number>>(new Map());
  const internalRef = useRef<HTMLDivElement>(null);

  // Usar la ref externa si existe, sino la interna
  const effectiveRef = externalRef || internalRef;

  useEffect(() => {
    const handleScroll = () => {
      if (effectiveRef.current) {
        const containerRect = effectiveRef.current.getBoundingClientRect();
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
          // Lógica para progreso individual por elemento
          for (let i = 0; i < itemCount; i++) {
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
  }, [itemCount, individualProgress, effectiveRef]);

  return {
    progresses,
    containerRef: internalRef, // Siempre devolver la ref interna para casos sin ref externa
  };
}
