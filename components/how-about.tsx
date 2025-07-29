import LiquidGlass from "./ui/liquid-glass";

const HowAbout = () => {
  return (
    <div className="flex flex-col items-center  space-y-8 justify-center">
      <h2 className="text-4xl font-semibold text-center text-slate-50">
        ¿Cómo lo hacemos?
      </h2>
      <div className="grid grid-cols-1 gap-4 max-w-6xl mx-auto px-4">
        <LiquidGlass className="font-light bg-neutral-400/30 flex flex-col">
          <h3 className="text-2xl font-semibold text-slate-50">
            <span className="font-light mr-2">1.</span> Encontramos tu estilo
          </h3>
          <p className="text-slate-300 mt-2">
            Analizamos tu negocio y tus necesidades para crear un diseño que
            refleje tu identidad y atraiga a tus clientes.
          </p>
        </LiquidGlass>
        <LiquidGlass className="font-light bg-neutral-400/30 flex flex-col">
          <h3 className="text-2xl font-semibold text-slate-50">
            <span className="font-light mr-2">2.</span> Creamos tu web
          </h3>
          <p className="text-slate-300 mt-2">
            Desarrollamos una página web moderna y optimizada, adaptada a tus
            necesidades y objetivos comerciales.
          </p>
        </LiquidGlass>
        <LiquidGlass className="font-light bg-neutral-400/30 flex flex-col">
          <h3 className="text-2xl font-semibold text-slate-50">
            <span className="font-light mr-2">3.</span> Posicionamos tu negocio
          </h3>
          <p className="text-slate-300 mt-2">
            Implementamos estrategias de SEO para mejorar tu visibilidad en
            Google y atraer más clientes.
          </p>
        </LiquidGlass>
        <LiquidGlass className="font-light bg-neutral-400/30 flex flex-col">
          <h3 className="text-2xl font-semibold text-slate-50">
            <span className="font-light mr-2">4.</span> Resultados
          </h3>
          <p className="text-slate-300 mt-2">
            Medimos y analizamos los resultados para asegurarnos de que tu
            negocio crezca y obtenga el éxito que merece.
          </p>
        </LiquidGlass>
      </div>
    </div>
  );
};

export default HowAbout;
