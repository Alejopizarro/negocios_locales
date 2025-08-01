import { AppWindowMac, ChartColumnIncreasing, Search } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-8 justify-center p-4 py-8 max-w-6xl mx-auto sm:px-8 sm:py-12">
      <h2 className="text-4xl text-slate-50 font-semibold">¿Qué hacemos?</h2>
      <p className="text-lg font-light text-slate-300 max-w-4xl">
        Trabajamos con Negocios Locales y Servicios Particualres a mejorar su
        presencia digital creando{" "}
        <span className="text-slate-50 font-medium">
          Páginas Web con un diseño moderno y optimizado
        </span>
        , con el objetivo de mejorar tu{" "}
        <span className="text-slate-50 font-medium">
          visibilidad y conseguir más clientes.
        </span>
      </p>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <li className="bg-gradient-to-br from-neutral-400/10 via-neutral-400/20 to-neutral-400/30 p-6 rounded-lg shadow-lg border border-neutral-500/20 flex flex-col items-center space-y-4">
          <AppWindowMac size={85} color="#cbd5e1" />
          <h3 className="text-lg font-semibold text-slate-50">
            Desarrollo Web
          </h3>
          <p className="text-sm text-slate-300">
            Creamos páginas web modernas, rápidas y optimizadas para móviles.
          </p>
        </li>
        <li className="bg-gradient-to-t from-neutral-400/10 via-neutral-400/20 to-neutral-400/30 p-6 rounded-lg shadow-lg border border-neutral-500/20 flex flex-col items-center space-y-4">
          <Search size={85} color="#cbd5e1" />
          <h3 className="text-lg font-semibold text-slate-50">
            Posicionamiento SEO
          </h3>
          <p className="text-sm text-slate-300">
            Mejoramos tu visibilidad en Google de manera local y orgánica.
          </p>
        </li>
        <li className="bg-gradient-to-bl from-neutral-400/10 via-neutral-400/20 to-neutral-400/30 p-6 rounded-lg shadow-lg border border-neutral-500/20 flex flex-col items-center space-y-4">
          <ChartColumnIncreasing size={85} color="#cbd5e1" />
          <h3 className="text-lg font-semibold text-slate-50">
            Estrategias de Ventas
          </h3>
          <p className="text-sm text-slate-300">
            Implementamos metodologías para aumentar tus conversiones y ventas.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;
