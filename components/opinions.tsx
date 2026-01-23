"use client";
import { User } from "lucide-react";
import { useRef } from "react";
import Bars from "./ui/bars";
import CardWrapper, { OpinionItem } from "./ui/card-wrapper";

export const OpinionsItems: OpinionItem[] = [
  {
    title:
      "La página web que crearon para mi negocio ha superado todas mis expectativas, ahora tenemos una página web que funciona bien, cumple con todas las reglamentaciones y convierte más leads. ¡Gracias por su profesionalismo!",
    description:
      "Para este cliente creamos una página web corporativa moderna y optimizada para móviles, cumpliendo con todas las normativas legales en cuanto a la proteccion de datos en Europa, mejorando su rendimiento y haciendo que gracias a estas mejoras la web tenga mayor trafico y mayor cantidad de leads.",
    icon: <User className="h-[21px] w-[21px] text-black" />,
    user: "Federico, Seguros Fuengirola",
    id: 1,
  },
  {
    title:
      "Han creado mi web desde cero sin que tuviera que hacer nada, con un diseño super bonito y con todo lo que yo necesitaba. ¡Recomendados al 100%!",
    description:
      "Para esta clienta creamos una página web consultiva para informar a sus clientes sobre los servicios que ofrece y con llamadas a la acción para redirigir el trafico al sitio de reservas.",
    icon: <User className="h-[21px] w-[21px] text-black" />,
    user: "Roser, Fisioterapeuta",
    id: 2,
  },
  {
    title:
      "Estoy encantado con el trabajo realizado, hemos diseñado una web nueva completamente funcional y moderna que atrae más visitantes y aumenta las ventas",
    description:
      "Para este  cliente hemos rediseñado su página web existente, mejorando el diseño, la usabilidad y optimizando el SEO para aumentar el tráfico y las conversiones.",
    icon: <User className="h-[21px] w-[21px] text-black" />,
    user: "Carlos, Restaurante El Pescador",
    id: 3,
  },
];

const Opinions = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="lg:min-h-screen">
      <div className="self-end">
        <div className="flex flex-col space-y-1 items-end">
          <div className="flex space-x-2">
            <div className="bg-cyan-300 h-2 w-12" />
            <div className="bg-cyan-300 h-2 w-32" />
          </div>
          <div className="bg-cyan-500 h-2 w-24" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center text-gray-950 max-w-6xl space-y-8 mx-auto px-4 py-8 sm:px-8 sm:py-12">
        <h2 className="text-4xl font-semibold">
          Opiniones de nuestros clientes
        </h2>
        <p className="text-lg font-light text-gray-600 max-w-3xl">
          Nuestros clientes confían en nosotros para mejorar su presencia
          digital. Aquí están algunas de sus opiniones.
        </p>
        <div className="w-full">
          <CardWrapper item={OpinionsItems} />
        </div>
      </div>
      <Bars externalContainerRef={containerRef} />
    </div>
  );
};

export default Opinions;
