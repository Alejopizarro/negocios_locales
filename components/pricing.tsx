import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl space-y-8 mx-auto px-4 py-8 lg:py-16">
      <h2 className="text-4xl font-semibold text-slate-50">
        Nuestros servicios
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 gap-8">
        <div className="bg-neutral-400/20 hover:bg-neutral-400/30 backdrop-blur-[1px] text-neutral-200 border-t-[0.25px] border-b-[0.25px] border-slate-50 transition rounded-lg shadow-lg p-6">
          <div className="flex flex-col space-y-2">
            <p className="text-slate-300 text-2xl">Básica</p>
            <p className="text-4xl font-bold text-slate-50">
              150€{" "}
              <span className="font-semibold text-slate-50 text-sm">
                iva incluido
              </span>
            </p>
            <h3 className="text-sm font-medium text-slate-300">
              Presencia Web Básica - Landing page profesional para empezar
            </h3>
          </div>
          <hr className="my-4 h-[0.02rem] border-white/20" />
          <ul className="space-y-2 text-sm font-light text-slate-300">
            <li className="flex items-center space-x-2">
              <span className="text-green-500">
                <Check size={20} />
              </span>
              <span>Diseño moderno y profesional</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">
                <Check size={20} />
              </span>
              <span>Optimización para móviles</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">
                <Check size={20} />
              </span>
              <span>Velocidad de carga optimizada</span>
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
              <span>Dominio aparte</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">
                <Check size={20} />
              </span>
              <span>Sin mantenimiento</span>
            </li>
          </ul>
        </div>
        <div className="bg-fuchsia-500/15 backdrop-blur-[1px] border-t-[0.25px] border-b-[0.25px] border-slate-50 text-slate-300 rounded-lg shadow-lg p-6">
          <span className="absolute -translate-y-9 translate-x-28 px-2 py-1 rounded-lg text-xs bg-neutral-700/90 backdrop-blur-[1px] text-slate-100 border border-white/30 transition">
            recomendado
          </span>
          <div className="flex flex-col space-y-2">
            <p className="text-2xl text-fuchsia-500">Estandár</p>
            <p className="text-4xl font-bold text-slate-50">
              550€ <span className="font-semibold text-sm">iva incluido</span>
            </p>
            <h3 className="text-sm font-medium">
              Web Completa Optimizada - Sitio web de hasta 10 páginas con SEO
            </h3>
          </div>
          <hr className="my-4 h-[0.02rem] border-fuchsia-500/50" />
          <ul className="space-y-2 text-sm font-light">
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
            <li className="flex items-center space-x-2">
              <span className="text-green-500">
                <Check size={20} />
              </span>
              <span>Dominio aparte</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">
                <Check size={20} />
              </span>
              <span>Sin mantenimiento</span>
            </li>
          </ul>
        </div>
        <div className="bg-indigo-400/30 backdrop-blur-[1px] border-b-[0.25px] border-t-[0.25px] border-slate-100 text-slate-300 rounded-lg shadow-xl p-6">
          <div className="flex flex-col space-y-2">
            <p className="text-2xl text-indigo-400">Pro</p>
            <p className="text-4xl font-bold text-slate-50">
              1100€ <span className="font-light text-sm">iva incluido</span>
            </p>
            <h3 className="text-sm font-medium">
              Solución Digital Completa - Web avanzada con gestión y blog
              incluido
            </h3>
          </div>
          <hr className="my-4 h-[0.02rem] border-indigo-400/50 " />
          <ul className="space-y-2 text-sm font-light">
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
              <span>Blog con articulos SEO</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">
                <Check size={20} />
              </span>
              <span>Dominio incluido</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">
                <Check size={20} />
              </span>
              <span>30€ mantenimiento mensual</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
