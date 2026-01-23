"use client";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import Bars from "./ui/bars";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import SearchMockup from "./search-mockup";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  return (
    <div className="relative overflow-hidden">
      {/* Grid background en el centro */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d430_1px,transparent_1px),linear-gradient(to_bottom,#06b6d430_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Sombreado slate-900 en los bordes para ocultar el grid */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />

      {/* Sombra cyan en el centro interno */}
      <div className="absolute inset-0 bg-radial from-cyan-500/15 via-transparent to-transparent" />

      <div ref={containerRef} className="relative flex flex-col justify-evenly">
        <div className="self-end">
          <div className="flex flex-col space-y-1 items-end">
            <div className="flex space-x-2">
              <div className="bg-cyan-300 h-2 w-12" />
              <div className="bg-cyan-300 h-2 w-32" />
            </div>
            <div className="bg-cyan-500 h-2 w-24" />
          </div>
        </div>
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center max-w-6xl mx-auto px-4 py-8 lg:px-8">
          <div className="relative py-6 order-2 lg:order-1">
            <SearchMockup />
          </div>

          <div className="flex flex-col justify-center h-full space-y-4 lg:space-y-8 max-w-4xl mx-auto tracking-tight leading-none text-gray-700 order-1 lg:order-2 py-4">
            <p className="text-lg lg:text-xl">
              ¿Quiéres hacer crecer la{" "}
              <span className="text-gray-950 font-semibold">
                Presencia Digital
              </span>{" "}
              de tu negocio?
            </p>
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-none">
                Posiciona tu{" "}
                <span className="bg-radial from-cyan-300 to-cyan-500 bg-clip-text text-transparent font-extrabold">
                  Negocio
                </span>
                , donde tus{" "}
                <span className="bg-radial from-cyan-500 to-cyan-700 bg-clip-text text-transparent font-extrabold">
                  Clientes
                </span>{" "}
                te están buscando
              </h1>
              <p className="text-gray-600 text-lg">
                Ayudamos a negocios locales a{" "}
                <span className="font-extrabold text-gray-950">
                  crear su página web
                </span>{" "}
                y mejorar su{" "}
                <span className="font-extrabold text-gray-950">
                  presencia en Google y directorios locales
                </span>{" "}
                para captar más clientes en su zona.
              </p>
              <div className="grid grid-cols-3 gap-1 lg:gap-2 text-xs lg:text-sm font-medium text-center mt-2 lowercase text-gray-900">
                <span className="px-1 lg:px-2 py-1 rounded-md border-2 border-gray-950/80 text-gray-950 font-semibold">
                  paginas web
                </span>
                <span className="px-1 lg:px-2 py-1 rounded-md border-2 border-gray-950/80 text-gray-950 font-semibold">
                  presencia en google
                </span>
                <span className="px-1 lg:px-2 py-1 rounded-md border-2 border-gray-950/80 text-gray-950 font-semibold">
                  posicionamiento local
                </span>
              </div>
            </div>
            <Button
              size="lg"
              className="w-full lg:max-w-xs py-6 rounded-xl flex items-center bg-amber-400 hover:bg-amber-500 cursor-pointer my-2 text-gray-950 font-semibold lowercase text-lg"
              onClick={() =>
                router.push(
                  "https://calendly.com/negocioslocales-online9/30min",
                )
              }
            >
              <CalendarIcon className="mr-1" size={15} strokeWidth={3} />
              Agenda una consulta gratuita
            </Button>
          </div>
        </div>
        <Bars externalContainerRef={containerRef} />
      </div>
    </div>
  );
}
