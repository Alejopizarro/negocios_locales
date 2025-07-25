import Image from "next/image";

const HeroIii = () => {
  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden">
      <Image
        src="/background-hero.jpg"
        alt="Background Hero - Night with Stars"
        className="absolute inset-0 w-full h-full object-cover"
        priority={true}
        layout="fill"
      />
      <div className="absolute inset-0 bg-black opacity-40 pointer-events-none" />
      <div className="z-10 flex flex-col items-center justify-center text-center px-4 py-8">
        <h1 className="flex flex-col text-xl font-light text-slate-300">
          elevamos tu
          <span className="text-5xl font-semibold text-slate-50 pt-8">
            Presencia Digital
          </span>
        </h1>
        <button className="mt-10 px-6 py-3 font-light rounded-full bg-radial from-white/0 to-white/20 backdrop-blur-md text-slate-100 border border-white/30 hover:border-white/90 shadow-lg hover:bg-white/20 transition">
          agendar consulta gratis
        </button>
      </div>
    </div>
  );
};

export default HeroIii;
