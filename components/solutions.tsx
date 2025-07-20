import { CalendarIcon, Check } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const Solutions = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto px-4 py-8 lg:py-16 lg:px-8">
      <div className="flex flex-col space-y-8 px-4">
        <h2 className="text-2xl font-semibold">
          Nosotros lo solucionamos de forma simple
        </h2>
        <ul className="space-y-2 font-light text-gray-700 text-md">
          {" "}
          <li className="flex flex-col space-y-2">
            <h3 className="font-semibold text-lg gap-x-2 flex items-center">
              <Check color="green" />
              Diseño moderno
            </h3>
            <p>
              Tu negocio lucirá profesional y actualizado, transmitiendo la
              calidad que tus clientes buscan.
            </p>
          </li>
          <li className="flex flex-col space-y-2">
            <h3 className="font-semibold text-lg gap-x-2 flex items-center">
              <Check color="green" />
              Velocidad de carga optimizada
            </h3>
            <p>
              Nada de WordPress lento con plugins que ralentizan. Tecnología
              moderna para resultados reales.
            </p>
          </li>
          <li className="flex flex-col space-y-2">
            <h3 className="font-semibold flex items-center text-lg gap-x-2">
              <Check color="green" />
              Posicionamiento local
            </h3>
            <p>
              Optimización SEO + Ficha Google Maps para que aparezcas cuando te
              busquen en tu zona.
            </p>
          </li>
          <li className="flex flex-col space-y-2">
            <h3 className="font-semibold flex items-center gap-x-2 text-lg">
              <Check color="green" />
              Entrega en 1 semana
            </h3>
            <p>
              En 7 días tu negocio estará online y listo para captar clientes.
            </p>
          </li>
        </ul>
        <Button
          size="lg"
          className="w-full max-w-xs bg-[var(--primary)] cursor-pointer text-white text-lg"
        >
          <CalendarIcon />
          Agenda una consulta gratuita
        </Button>
      </div>
      <Image
        src="/deal.jpg"
        alt="Solutions Background"
        className="h-full object-cover rounded-lg shadow-lg"
        width={500}
        height={500}
        loading="lazy"
      />
    </div>
  );
};

export default Solutions;
