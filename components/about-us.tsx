import { AppWindowMac, ChartLine, LoaderCircle } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen px-4 py-8 space-y-12 w-full flex flex-col items-center justify-center">
      <div className="text-center space-y-8 max-w-4xl">
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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="p-4 h-fit bg-neutral-400/20 rounded-lg backdrop-blur-[1px] border border-neutral-400/70 flex flex-col items-center text-center space-y-4">
          <AppWindowMac color="gray" size={85} className="my-4" />
          <h3 className="text-2xl text-slate-50 font-semibold">
            Diseño Moderno
          </h3>
          <p className="text-slate-300 p-2 py-4 bg-[#060010] rounded-lg">
            Creamos páginas web modernas y atractivas que capturan la esencia de
            tu negocio y atraen a tus clientes.
          </p>
        </div>
        <div className="p-4 h-fit bg-neutral-400/20 rounded-lg backdrop-blur-[1px] border border-neutral-400/70 flex flex-col items-center text-center space-y-4">
          <LoaderCircle color="gray" size={85} className="my-4 animate-spin" />
          <h3 className="text-2xl text-slate-50 font-semibold">
            Rendimiento Optimizado
          </h3>
          <p className="text-slate-300 p-2 py-4 bg-[#060010] rounded-lg">
            Nuestras páginas web están optimizadas para cargar rápidamente y
            ofrecer una experiencia de usuario fluida.
          </p>
        </div>
        <div className="p-4 h-fit bg-neutral-400/20 rounded-lg backdrop-blur-[1px] border border-neutral-400/70 flex flex-col items-center text-center space-y-4">
          <ChartLine color="gray" size={85} className="my-4" />
          <h3 className="text-2xl text-slate-50 font-semibold">
            Posicionamiento Mejorado
          </h3>
          <p className="text-slate-300 p-2 py-4 bg-[#060010] rounded-lg">
            Optimizamos tu sitio web para que aparezca en los primeros
            resultados de búsqueda de Google, aumentando tu visibilidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
