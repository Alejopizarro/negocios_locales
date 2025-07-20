import { CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/blob.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-screen"
    >
      <div className="h-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center max-w-6xl mx-auto px-4 py-8 lg:py-16 lg:px-8">
        <div className="flex flex-col justify-center h-full space-y-4 lg:space-y-8 max-w-4xl mx-auto px-4 tracking-tight order-1 lg:order-2">
          <p className="text-xl font-medium text-slate-100 lg:text-gray-700">
            ¿Tu negocio se está perdiendo clientes por no aparecer en Google?
          </p>
          <div className="space-y-4">
            <h1 className="text-[2.75rem] leading-snug lg:text-4xl font-bold text-gray-900">
              Ayudamos a <br className="flex lg:hidden" />
              <span className="bg-green-300 px-2 py-1 rounded-lg">
                Negocios Locales
              </span>{" "}
              con páginas web que realmente venden
            </h1>
            <p className="text-lg font-semibold rounded-lg text-gray-900 bg-green-300 px-2 py-1">
              Diseño moderno + Posicionamiento en Google + Resultados en 1
              semana
            </p>
          </div>
          <Button
            size="lg"
            className="w-full lg:max-w-xs bg-[var(--primary)] cursor-pointer mt-4 text-white text-lg"
          >
            <CalendarIcon />
            Agenda una consulta gratuita
          </Button>
        </div>
        <Image
          src="/office.webp"
          alt="Hero Background"
          className="h-full object-cover rounded-lg shadow-lg order-2 lg:order-1"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Hero;
