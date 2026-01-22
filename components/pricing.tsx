import { Check, X, HelpCircle } from "lucide-react";

const Pricing = () => {
  return (
    <div className="relative overflow-hidden py-16">
      {/* Grid background en el centro */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d430_1px,transparent_1px),linear-gradient(to_bottom,#06b6d430_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Sombreado slate-50 en los bordes para ocultar el grid */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />

      {/* Sombra cyan en el centro interno */}
      <div className="absolute inset-0 bg-radial from-cyan-500/15 via-transparent to-transparent" />

      <div className="relative flex flex-col items-center justify-center max-w-6xl space-y-8 mx-auto px-4">
        <h2 className="text-4xl font-semibold text-gray-950">
          Nuestros servicios
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 gap-8">
          {/* Plan Básico - Página Única */}
          <div className="bg-neutral-400/50 px-4 py-6 rounded-lg h-fit border border-neutral-600/40">
            <div className="flex flex-col space-y-2">
              <p className="text-gray-800 text-2xl">Página Única</p>
              <p className="text-4xl font-bold text-gray-950">
                299€
                <span className="font-semibold text-gray-600 text-sm">
                  {" "}
                  IVA incluido
                </span>
              </p>
              <div className="flex flex-wrap mt-1 items-center gap-2">
                <p className="text-gray-600 text-xs border px-2 py-1 w-fit border-gray-600 rounded-full">
                  pago único
                </p>
                <p className="text-gray-600 text-xs border px-2 py-1 w-fit border-gray-600 rounded-full">
                  dominio por parte del cliente
                </p>
                <p className="text-gray-600 text-xs border px-2 py-1 w-fit border-gray-600 rounded-full">
                  mantenimiento y optimización opcional
                </p>
              </div>
              <p className="text-md mt-1 font-semibold text-gray-950">
                Presencia web básica para empezar a captar clientes
              </p>
            </div>
            <hr className="my-4 h-[0.02rem] border-neutral-600/40" />
            <ul className="space-y-2 text-sm text-gray-950">
              <li className="flex items-center space-x-2">
                <span className="text-green-500">
                  <Check size={20} />
                </span>
                <span>Landing page profesional (1 página)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">
                  <Check size={20} />
                </span>
                <span>Optimización SEO básica</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">
                  <Check size={20} />
                </span>
                <span>Diseño responsive (móvil y PC)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">
                  <Check size={20} />
                </span>
                <span>Formulario de contacto</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-red-500">
                  <X size={20} />
                </span>
                <span>Posicionamiento Google Maps</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-red-500">
                  <X size={20} />
                </span>
                <span>Blog incluido</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-red-500">
                  <X size={20} />
                </span>
                <span>Soporte y mantenimiento</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-red-500">
                  <X size={20} />
                </span>
                <span>Correos corporativos</span>
              </li>
            </ul>
          </div>

          {/* Plan Premium - RECOMENDADO */}
          <div className="relative bg-indigo-500/50 px-4 shadow-xl shadow-indigo-500/40 py-6 rounded-lg h-fit border border-indigo-600">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm bg-neutral-600/80 text-white border border-indigo-400 shadow-lg">
              recomendado
            </span>
            <div className="flex flex-col space-y-2 mt-2">
              <p className="text-2xl text-indigo-900 font-semibold">
                Web Completa
              </p>
              <p className="text-4xl font-bold text-gray-950">
                649€{" "}
                <span className="font-semibold text-sm text-gray-700">
                  + 29€/mes
                  <span className="text-xs font-normal text-gray-600">
                    {" "}
                    (a partir del 3er mes)
                  </span>
                </span>
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-gray-700 text-xs border px-2 py-1 w-fit border-gray-700 rounded-full">
                  dominio y hosting incluidos
                </p>
                <p className="text-gray-700 text-xs border px-2 py-1 w-fit border-gray-700 rounded-full">
                  posicionamiento local
                </p>
                <p className="text-gray-700 text-xs border px-2 py-1 w-fit border-gray-700 rounded-full">
                  mantenimiento incluido
                </p>
              </div>
              <p className="text-md font-semibold text-gray-950">
                Solución completa con posicionamiento y gestión continua
              </p>
            </div>
            <hr className="my-4 h-[0.02rem] border-indigo-600/50" />
            <ul className="space-y-2 text-sm text-gray-950">
              <li className="flex items-center space-x-2">
                <span className="text-green-500">
                  <Check size={20} />
                </span>
                <span>Web multipágina (hasta 10 páginas)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">
                  <Check size={20} />
                </span>
                <span>Optimización SEO continua</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">
                  <Check size={20} />
                </span>
                <span>Diseño responsive y carga ultrarrapida</span>
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
                <span>Posicionamiento Google Maps</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">
                  <Check size={20} />
                </span>
                <span>Gestión de reseñas</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">
                  <Check size={20} />
                </span>
                <span>Blog y publicación de novedades</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">
                  <Check size={20} />
                </span>
                <span>Alta en directorios locales</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">
                  <Check size={20} />
                </span>
                <span>Mantenimiento y actualizaciones</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">
                  <Check size={20} />
                </span>
                <span className="font-medium">5 correos corporativos</span>
              </li>
            </ul>
          </div>

          {/* Plan Personalizado - E-commerce */}
          <div className="bg-fuchsia-500/50 px-4 py-6 border opacity-70 border-gray-600 rounded-lg h-fit">
            <div className="flex flex-col space-y-4">
              <p className="text-2xl text-fuchsia-900 font-semibold">
                Tienda Online
              </p>
              <p className="text-4xl font-bold text-gray-600">Consultar</p>
              <div className="flex items-center flex-wrap gap-2">
                <p className="text-gray-700 text-xs border px-2 py-1 w-fit border-gray-700 rounded-full">
                  personalizado
                </p>
                <p className="text-gray-700 text-xs border px-2 py-1 w-fit border-gray-700 rounded-full">
                  todo incluido
                </p>
                <p className="text-gray-700 text-xs border px-2 py-1 w-fit border-gray-700 rounded-full">
                  escalable
                </p>
              </div>
              <p className="text-md font-semibold text-gray-600">
                Solución e-commerce completa con blog y gestión de productos
              </p>
            </div>
            <hr className="my-4 h-[0.02rem] border-fuchsia-700/80" />
            <ul className="space-y-2 text-sm font-light text-gray-700">
              <li className="flex items-center space-x-2">
                <span className="text-gray-500">
                  <HelpCircle size={20} />
                </span>
                <span>Tienda online con catálogo de productos</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-500">
                  <HelpCircle size={20} />
                </span>
                <span>Optimización SEO avanzada</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-500">
                  <HelpCircle size={20} />
                </span>
                <span>Diseño personalizado a medida</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-500">
                  <HelpCircle size={20} />
                </span>
                <span>Integración pasarelas de pago</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-500">
                  <HelpCircle size={20} />
                </span>
                <span>Posicionamiento Google Maps</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-500">
                  <HelpCircle size={20} />
                </span>
                <span>Blog con artículos SEO</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-500">
                  <HelpCircle size={20} />
                </span>
                <span>Mantenimiento premium</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-500">
                  <HelpCircle size={20} />
                </span>
                <span>Correos corporativos ilimitados</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
