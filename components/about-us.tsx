import { AppWindowMac, ChartLine, LoaderCircle } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen px-4 py-8 space-y-8 flex flex-col items-center justify-center">
      <div className="text-center space-y-4 max-w-4xl">
        <h2 className="text-4xl text-slate-50 font-semibold">¿Que hacemos?</h2>
        <p className="text-slate-300 text-lg">
          Ayudamos a{" "}
          <span className="font-semibold text-slate-50">Negocios Locales</span>{" "}
          a mejorar su presencia digital creando{" "}
          <span className="font-semibold text-slate-50">
            Páginas Web con un diseño moderno y optimizado
          </span>
          , con el objetivo de obtener mejores resultados.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-4">
          <AppWindowMac color="gray" size={100} />
          <h3 className="text-2xl text-slate-50 font-semibold">
            Diseño Moderno
          </h3>
          <p className="text-slate-300">
            Creamos páginas web modernas y atractivas que capturan la esencia de
            tu negocio y atraen a tus clientes.
          </p>
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <LoaderCircle color="gray" size={100} className="animate-spin" />
          <h3 className="text-2xl text-slate-50 font-semibold">
            Rendimiento Optimizado
          </h3>
          <p className="text-slate-300">
            Nuestras páginas web están optimizadas para cargar rápidamente y
            ofrecer una experiencia de usuario fluida, mejorando la retención de
            visitantes.
          </p>
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <ChartLine color="gray" size={100} />
          <h3 className="text-2xl text-slate-50 font-semibold">
            Posicionamiento Mejorado
          </h3>
          <p className="text-slate-300">
            Optimizamos tu sitio web para que aparezca en los primeros
            resultados de búsqueda de Google, aumentando tu visibilidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
