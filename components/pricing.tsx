import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl space-y-8 mx-auto px-4 py-8">
      <h2 className="text-4xl font-semibold text-slate-50">
        Nuestros servicios
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 gap-8">
        <div className="bg-neutral-400/40 px-4 py-6 rounded-lg h-fit border border-neutral-400/50">
          <div className="flex flex-col space-y-2">
            <p className="text-slate-300 text-2xl">Posicionamiento</p>
            <p className="text-4xl font-bold text-slate-50">
              89€
              <span className="font-semibold text-slate-300 text-sm">
                /mes + iva
              </span>
            </p>
            <p className="text-slate-300 text-xs border px-2 py-1 w-fit border-slate-300 rounded-full">
              sin permanencia
            </p>
            <h3 className="text-md font-semibold text-slate-50">
              Optimizaciones web y SEO mensual
            </h3>
          </div>
          <hr className="my-4 h-[0.02rem] border-white/20" />
          <ul className="space-y-2 text-sm font-light text-slate-300">
            <li className="flex items-center space-x-2">
              <span className="text-green-500">
                <Check size={20} />
              </span>
              <span>Actualizaciones de motor, plugins y temas</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">
                <Check size={20} />
              </span>
              <span>Optimizacion de H1, H2, H3 y H4</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">
                <Check size={20} />
              </span>
              <span>Metaetiquetas en Clave SEO</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">
                <Check size={20} />
              </span>
              <span>Analisis de UX/UI</span>
            </li>
          </ul>
        </div>
        <div className="bg-indigo-500/40 px-4 py-6 rounded-lg h-fit border border-neutral-400/50">
          <div className="flex flex-col space-y-2">
            <p className="text-2xl text-indigo-500">Página Web</p>
            <p className="text-4xl font-bold text-slate-50">
              799€{" "}
              <span className="font-semibold text-sm text-slate-300">
                + iva
              </span>
            </p>
            <div className="flex items-center space-x-2">
              <p className="text-slate-300 text-xs border px-2 py-1 w-fit border-slate-300 rounded-full">
                sin permanencia
              </p>
              <p className="text-slate-300 text-xs border px-2 py-1 w-fit border-slate-300 rounded-full">
                dominio no incluido
              </p>
            </div>
            <h3 className="text-sm font-semibold text-slate-50">
              Web Completa Optimizada
            </h3>
          </div>
          <hr className="my-4 h-[0.02rem] border-indigo-500/50" />
          <ul className="space-y-2 text-sm font-light text-slate-300">
            <li className="flex items-center space-x-2">
              <span className="text-green-500">
                <Check size={20} />
              </span>
              <span>Sitio web de hasta 10 páginas</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">
                <Check size={20} />
              </span>
              <span>Optimización SEO completa</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">
                <Check size={20} />
              </span>
              <span>Generación de imágenes y textos</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">
                <Check size={20} />
              </span>
              <span>Formulario de contacto</span>
            </li>
          </ul>
        </div>
        <div className="bg-fuchsia-500/40 px-4 py-6 border border-slate-300 rounded-lg">
          <span className="absolute -translate-y-10 translate-x-24 px-4 py-1 rounded-full text-md bg-neutral-700/90 backdrop-blur-[1px] text-slate-100 border border-white/30 transition">
            recomendado
          </span>
          <div className="flex flex-col space-y-4">
            <p className="text-2xl text-fuchsia-400">
              Pack Premium{" "}
              <span className="font-light text-sm">(Todo incluido)</span>
            </p>
            <p className="text-4xl font-bold text-slate-50">
              120€
              <span className="font-light text-sm text-slate-300">
                /mes + iva
              </span>
            </p>
            <div className="flex items-center flex-wrap gap-2">
              <p className="text-slate-300 text-xs border px-2 py-1 w-fit border-slate-300 rounded-full">
                permanencia de un año
              </p>
              <p className="text-slate-300 text-xs border px-2 py-1 w-fit border-slate-300 rounded-full">
                dominio incluido
              </p>
              <p className="text-slate-300 text-xs border px-2 py-1 w-fit border-slate-300 rounded-full">
                sin coste de mantenimiento
              </p>
              <p className="text-slate-300 text-xs border px-2 py-1 w-fit border-slate-300 rounded-full">
                correos corporativos
              </p>
            </div>
            <h3 className="text-sm font-semibold text-slate-50">
              Solución Digital Completa - Web avanzada con gestión y blog
              incluido
            </h3>
          </div>
          <hr className="my-4 h-[0.02rem] border-fuchsia-400/50 " />
          <ul className="space-y-2 text-sm font-light text-slate-300">
            <li className="flex items-center space-x-2">
              <span className="text-green-500">
                <Check size={20} />
              </span>
              <span>Manejo de cookies profesional</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">
                <Check size={20} />
              </span>
              <span>Analytics y seguimiento</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">
                <Check size={20} />
              </span>
              <span>Ficha SEO local (Google Maps)</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">
                <Check size={20} />
              </span>
              <span>Gestión de Reseñas</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">
                <Check size={20} />
              </span>
              <span>Blog con articulos SEO</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">
                <Check size={20} />
              </span>
              <span>Generación de imágenes y textos</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">
                <Check size={20} />
              </span>
              <span>Formulario de contacto</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">
                <Check size={20} />
              </span>
              <span>Hasta 5 Correos corpartivos</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
