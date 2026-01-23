"use client";

export default function SearchMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Contenedor principal con efecto 3D */}
      <div
        className="relative bg-white rounded-3xl overflow-hidden"
        style={{
          boxShadow: `
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 25px 50px -12px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(0, 0, 0, 0.05)
          `,
          transform: "perspective(1000px) rotateX(2deg) rotateY(-2deg)",
        }}
      >
        {/* Barra de búsqueda principal */}
        <div className="bg-gray-50 p-5">
          <div
            className="flex items-center bg-white rounded-full px-5 py-4 gap-3"
            style={{
              boxShadow: `
                0 1px 3px 0 rgba(0, 0, 0, 0.1),
                0 1px 2px -1px rgba(0, 0, 0, 0.1),
                inset 0 0 0 1px rgba(0, 0, 0, 0.08)
              `,
            }}
          >
            <span className="text-gray-700 text-sm font-medium flex-1 truncate">
              ¿Cómo posicionar mi negocio?
            </span>
            <div className="flex-shrink-0">
              <svg
                className="w-5 h-5 text-cyan-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Separador sutil */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* Sugerencias de búsqueda */}
        <div className="bg-white py-3">
          {/* Sugerencia destacada (seleccionada) */}
          <div className="flex items-center px-5 py-4 bg-gradient-to-r from-cyan-50 to-cyan-100/50 border-l-4 border-cyan-500">
            <svg
              className="w-4 h-4 text-cyan-600 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="text-gray-800 text-sm font-semibold">
              ¿Cómo atraer más clientes a mi zona?
            </span>
            <svg
              className="w-4 h-4 text-gray-400 ml-auto flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7V17"
              />
            </svg>
          </div>

          {/* Sugerencia normal */}
          <div className="flex items-center px-5 py-4">
            <svg
              className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="text-gray-600 text-sm">
              Cómo hacer una web rápida y moderna
            </span>
          </div>

          {/* Otra sugerencia */}
          <div className="flex items-center px-5 py-4">
            <svg
              className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="text-gray-600 text-sm">
              Aparecer en Google Maps gratis
            </span>
          </div>
        </div>
      </div>

      {/* Sombra difusa adicional para profundidad */}
      <div
        className="absolute -inset-4 -z-10 rounded-3xl opacity-30 blur-2xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.3) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
