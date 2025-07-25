import Image from "next/image";

const MobileFirst = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center text-slate-50 space-y-8">
      <div className="flex flex-col justify-center text-center items-center lg:items-start lg:text-left space-y-4">
        <p className="text-6xl font-extrabold bg-radial from-slate-50 to-slate-400 bg-clip-text text-transparent uppercase italic">
          Mobile <span className="font-light">First</span>
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          ¿Por qué es importante un sitio web móvil?
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl">
          En la era digital actual, más del 50% del tráfico web proviene de
          dispositivos móviles. Un sitio web optimizado para móviles no solo
          mejora la experiencia del usuario, sino que también es crucial para el
          SEO y la visibilidad en Google.
        </p>
      </div>
      <Image
        src="/screen-apple.png"
        alt="Mobile First Design"
        className="object-cover shadow-bottom max-h-[80vh] w-auto drop-shadow-slate-50 drop-shadow-xl"
        width={500}
        height={300}
      />
    </div>
  );
};

export default MobileFirst;
