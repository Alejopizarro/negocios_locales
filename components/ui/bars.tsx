import { useScrollProgress } from "@/hooks/useScrollProgress";

interface BarConfig {
  width: string;
  color: string;
}

interface BarsProps {
  /**
   * Configuración personalizada de las barras
   */
  barsConfig?: BarConfig[];
  /**
   * Factor de escala máximo (por defecto 0.5 = escala hasta 1.5x)
   */
  maxScaleFactor?: number;
  /**
   * Duración de la transición en ms
   */
  transitionDuration?: number;
  /**
   * Posición de las barras (top, bottom, left, right)
   */
  position?: "top" | "bottom" | "left" | "right";
  /**
   * Contenedor de referencia externo (opcional)
   */
  externalContainerRef?: React.RefObject<HTMLDivElement | null>;
}

const DEFAULT_BARS: BarConfig[] = [
  { width: "w-24", color: "bg-cyan-300" },
  { width: "w-32", color: "bg-cyan-500" },
  { width: "w-48", color: "bg-cyan-300" },
  { width: "w-32", color: "bg-cyan-300" },
  { width: "w-64", color: "bg-cyan-500" },
  { width: "w-48", color: "bg-cyan-300" },
];

export default function Bars({
  barsConfig = DEFAULT_BARS,
  maxScaleFactor = 0.5,
  transitionDuration = 300,
  position = "bottom",
  externalContainerRef,
}: BarsProps) {
  const { progresses, containerRef } = useScrollProgress({
    itemCount: barsConfig.length,
    containerRef: externalContainerRef, // Pasar la ref externa directamente
  });

  const getPositionClasses = () => {
    switch (position) {
      case "top":
        return "flex flex-col space-y-1";
      case "bottom":
        return "flex flex-col space-y-1";
      case "left":
        return "flex flex-row space-x-1";
      case "right":
        return "flex flex-row space-x-1";
      default:
        return "flex flex-col space-y-1";
    }
  };

  const getBarClasses = (bar: BarConfig) => {
    // Clases fijas de Tailwind - NO dinámicas
    const baseClasses = `
      ${bar.color} 
      h-2 
      ${bar.width} 
      hover:scale-x-110 
      transition-transform
      duration-300
      ease-out
    `;

    return baseClasses.trim();
  };

  // Debug: Agregar console.log para verificar valores
  console.log("Progresses:", Array.from(progresses.entries()));

  return (
    <>
      {/* Contenedor invisible para tracking si no se usa referencia externa */}
      {!externalContainerRef && (
        <div
          ref={containerRef}
          className="absolute inset-0 pointer-events-none"
        />
      )}

      <div className={getPositionClasses()}>
        {barsConfig.map((bar, index) => {
          const progress = progresses.get(index) || 0;
          const scaleValue = 1 + progress * maxScaleFactor;
          const transformOrigin = position === "right" ? "right" : "left";

          // Debug: Console log para cada barra
          console.log(
            `Bar ${index}: progress=${progress}, scaleValue=${scaleValue}`
          );

          return (
            <div
              key={index}
              data-bar-index={index}
              className={getBarClasses(bar)}
              style={{
                transformOrigin: transformOrigin,
                transform: `scaleX(${scaleValue})`,
                transitionDuration: `${transitionDuration}ms`, // Duración CSS personalizada
              }}
            />
          );
        })}
      </div>
    </>
  );
}
