import { AppWindowMac, MapPin, Search } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-8 justify-center p-4 py-8 max-w-6xl mx-auto sm:px-8 sm:py-12">
      <h2 className="text-4xl text-gray-950 font-semibold">¿Qué hacemos?</h2>
      <p className="text-lg font-light text-gray-600 max-w-4xl">
        Trabajamos con Negocios Locales, Profesionales Independientes o
        Servicios Particulares mejorando su presencia digital a través de{" "}
        <span className="text-gray-950 font-medium">
          páginas Web con un diseño moderno y optimizado, posicionamiento en
          Google y todas las plataformas que usan sus clientes
        </span>
        con el objetivo de mejorar su{" "}
        <span className="text-gray-950 font-medium">
          visibilidad y vender más.
        </span>
      </p>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <li className="relative p-6 rounded-lg shadow-lg border-2 border-gray-950/80 flex flex-col items-center space-y-4 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 119, 182, 0.12) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 119, 182, 0.12) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
              mask: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
              WebkitMask:
                "radial-gradient(ellipse at center, black 0%, transparent 70%)",
            }}
          />
          <AppWindowMac
            size={85}
            className="text-gray-950/80 bg-slate-50 relative z-10"
            strokeWidth={0.8}
          />
          <h3 className="text-lg font-semibold text-gray-950 relative z-10">
            Desarrollo Web
          </h3>
          <p className="text-sm text-gray-600 relative z-10">
            Creamos páginas web modernas, rápidas y optimizadas para móviles.
          </p>
        </li>
        <li className="relative p-6 rounded-lg shadow-lg border-2 border-gray-950/80 flex flex-col items-center space-y-4 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 119, 182, 0.12) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 119, 182, 0.12) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
              mask: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
              WebkitMask:
                "radial-gradient(ellipse at center, black 0%, transparent 70%)",
            }}
          />
          <Search
            size={85}
            className="text-gray-950/80 bg-slate-50 relative rounded-full z-10"
            strokeWidth={0.8}
          />
          <h3 className="text-lg font-semibold text-gray-950 relative z-10">
            Posicionamiento SEO
          </h3>
          <p className="text-sm text-gray-600 relative z-10">
            Mejoramos tu visibilidad en Google de manera local y orgánica.
          </p>
        </li>
        <li className="relative p-6 rounded-lg shadow-lg border-2 border-gray-950/80 flex flex-col items-center space-y-4 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 119, 182, 0.12) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 119, 182, 0.12) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
              mask: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
              WebkitMask:
                "radial-gradient(ellipse at center, black 0%, transparent 70%)",
            }}
          />
          <MapPin
            size={85}
            className="text-gray-950/80 relative bg-slate-50 rounded-full z-10"
            strokeWidth={0.8}
          />
          <h3 className="text-lg font-semibold text-gray-950 relative z-10">
            Presencia Local
          </h3>
          <p className="text-sm text-gray-600 relative z-10">
            Gestionamos tu ficha de Google My Business y directorios locales.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;
