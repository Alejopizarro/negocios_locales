import { Separator } from "./ui/separator";

const Pricing = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl space-y-8 mx-auto px-4 py-8 lg:py-16">
      <h2 className="text-4xl font-semibold">Nuestros servicios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-gradient-to-br  from-slate-50 to-slate-200 rounded-lg shadow-lg p-6">
          <div className="flex flex-col space-y-4">
            <p className="text-4xl font-bold">
              150€{" "}
              <span className="font-light text-gray-700 text-sm">
                iva incluido
              </span>
            </p>
            <h3 className="text-sm font-medium">
              Presencia Web Básica - Landing page profesional para empezar
            </h3>
          </div>
          <Separator className="my-4" />
          <ul className="space-y-2 text-sm font-light text-gray-700">
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Diseño moderno y profesional</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Optimización para móviles</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Velocidad de carga optimizada</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Formulario de contacto</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Dominio aparte</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Sin mantenimiento</span>
            </li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-slate-50 to-slate-200 rounded-lg shadow-lg p-6">
          <div className="flex flex-col space-y-4">
            <p className="text-4xl font-bold">
              550€{" "}
              <span className="font-light text-gray-700 text-sm">
                iva incluido
              </span>
            </p>
            <h3 className="text-sm font-medium">
              Web Completa Optimizada - Sitio web de hasta 10 páginas con SEO
            </h3>
          </div>
          <Separator className="my-4" />
          <ul className="space-y-2 text-sm font-light text-gray-700">
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Sitio web de hasta 10 páginas</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Optimización SEO completa</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Generación de imágenes y textos</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Formulario de contacto</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Dominio aparte</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Sin mantenimiento</span>
            </li>
          </ul>
        </div>
        <div className="bg-gradient-to-br relative from-slate-50 to-slate-100 border-2 border-blue-500 rounded-lg shadow-xl p-6">
          <span className="bg-blue-500 border-2 border-slate-50 text-slate-50 absolute -translate-y-10 translate-x-15 px-2 py-1 rounded-lg text-xs">
            recomendado
          </span>
          <div className="flex flex-col space-y-4">
            <p className="text-4xl font-bold">
              1100€{" "}
              <span className="font-light text-gray-700 text-sm">
                iva incluido
              </span>
            </p>
            <h3 className="text-sm font-medium">
              Solución Digital Completa - Web avanzada con gestión y blog
              incluido
            </h3>
          </div>
          <Separator className="my-4" />
          <ul className="space-y-2 text-sm font-light text-gray-700">
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Manejo de cookies profesional</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Analytics y seguimiento</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Ficha SEO local (Google Maps)</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Blog con articulos SEO</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Dominio incluido</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>30€ mantenimiento mensual</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-300 text-gray-500 rounded-lg shadow-lg p-6">
          <div className="flex flex-col space-y-4">
            <p className="text-4xl font-bold">Consultar</p>
            <h3 className="text-sm font-medium">
              Proyecto Personalizado - Web multiidioma y ecommerce a medida
            </h3>
          </div>
          <Separator className="my-4" />
          <ul className="space-y-2 text-sm font-light text-gray-700">
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Pasarela de pagos integrada</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Traducciones profesionales</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Ecommerce completo</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Blog con articulos SEO</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Dominio incluido</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Mantenimiento a convenir</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
