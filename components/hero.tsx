"use client";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import Bars from "./ui/bars";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div
        ref={containerRef}
        className="lg:min-h-screen flex flex-col justify-evenly"
      >
        <div className="self-end">
          <div className="flex flex-col space-y-1 items-end">
            <div className="flex space-x-2">
              <div className="bg-cyan-300 h-2 w-12" />
              <div className="bg-cyan-300 h-2 w-32" />
            </div>
            <div className="bg-cyan-500 h-2 w-24" />
          </div>
        </div>
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center max-w-6xl mx-auto px-4 py-8 lg:py-16 lg:px-8">
          <Image
            src="/office.webp"
            alt="Hero Background"
            className="h-full object-cover rounded-lg shadow-lg order-2 lg:order-1"
            priority={true}
            width={500}
            height={500}
          />

          <div className="flex flex-col justify-center h-full space-y-4 lg:space-y-8 max-w-4xl mx-auto tracking-tight leading-none text-slate-200 order-1 lg:order-2">
            <p className="text-lg lg:text-xl">
              ¿Quiéres hacer crecer la{" "}
              <span className="text-slate-50 font-semibold">
                Presencia Digital
              </span>{" "}
              de tu negocio?
            </p>
            <div className="space-y-4">
              <h1 className="text-[2.75rem] lg:text-4xl font-extralight">
                Ayudamos a <br className="flex lg:hidden" />
                <span className="bg-radial from-slate-50 to-slate-300 bg-clip-text text-transparent font-extrabold">
                  Negocios Locales
                </span>{" "}
                con{" "}
                <span className="bg-radial from-slate-50 to-slate-300 bg-clip-text text-transparent font-extrabold">
                  Páginas Web
                </span>{" "}
                que realmente venden
              </h1>
              <div className="grid grid-cols-3 gap-2 text-xs lg:text-sm font-medium text-center mt-2 lowercase text-gray-900">
                <span className="px-2 py-1 rounded-md border-1 border-slate-300 text-slate-100 font-medium">
                  Diseño moderno
                </span>
                <span className="px-2 py-1 rounded-md border-1 border-slate-300 text-slate-100 font-medium">
                  Rendimiento
                </span>
                <span className="px-2 py-1 rounded-md border-1 border-slate-300 text-slate-100 font-medium">
                  Posicionamiento
                </span>
              </div>
              <Button
                size="lg"
                className="w-full lg:max-w-xs bg-amber-400 cursor-pointer my-2 text-white text-lg"
              >
                <CalendarIcon />
                Agenda una consulta gratuita
              </Button>
            </div>
          </div>
        </div>
        <Bars externalContainerRef={containerRef} />
      </div>
    </div>
  );
}
