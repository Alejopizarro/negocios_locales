"use client";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import Bars from "./ui/bars";

export default function How() {
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
        <div className="flex flex-col items-center justify-center max-w-6xl text-slate-50 space-y-8 mx-auto px-4 py-8 sm:px-8 sm:py-12">
          <h2 className="text-4xl font-semibold text-center">
            ¿Cómo lo hacemos?
          </h2>
          <p className="text-lg font-light text-slate-300 text-center max-w-4xl">
            Nos encargamos de diseñar una web que refleje la esencia de tu
            negocio, optimizada para tener el mejor rendimiento posible, que
            aparezca entre los primeros resultados y que te ayude a captar más
            clientes.
          </p>
          <ul className="flex flex-col lg:flex-row justify-center items-center mt-4 px-2 gap-8">
            <li className="flex flex-col space-y-4">
              <div className="flex items-center gap-4">
                <span className="border border-slate-50 px-2 py-1 rounded-full hover:bg-slate-50 hover:text-cyan-800 transition-colors">
                  1
                </span>
                <h3 className="text-lg font-semibold">Análizamos tu negocio</h3>
              </div>
              <p className="text-sm text-slate-300">
                Evaluamos tu negocio y objetivos para crear una web a medida con
                una estrategia optimizada para que consigas resultados.
              </p>
            </li>
            <ChevronRight className="hidden lg:block text-slate-50" size={80} />
            <li className="flex flex-col space-y-4">
              <div className="flex items-center gap-4">
                <span className="border border-slate-50 px-2 py-1 rounded-full hover:bg-slate-50 hover:text-cyan-800 transition-colors">
                  2
                </span>
                <h3 className="text-lg font-semibold">Diseñamos tu web</h3>
              </div>
              <p className="text-sm text-slate-300">
                Creamos un diseño moderno y profesional que refleje la identidad
                de tu negocio, optimizado para una experiencia de usuario
                fluida.
              </p>
            </li>
            <ChevronRight className="hidden lg:block text-slate-50" size={80} />
            <li className="flex flex-col space-y-4">
              <div className="flex items-center gap-4">
                <span className="border border-slate-50 px-2 py-1 rounded-full hover:bg-slate-50 hover:text-cyan-800 transition-colors">
                  3
                </span>
                <h3 className="text-lg font-semibold">
                  Optimizamos para Google
                </h3>
              </div>
              <p className="text-sm text-slate-300">
                Implementamos técnicas de SEO para mejorar tu visibilidad en
                Google y atraer más clientes potenciales a tu negocio.
              </p>
            </li>
            <ChevronRight className="hidden lg:block text-slate-50" size={80} />
            <li className="flex flex-col space-y-4">
              <div className="flex items-center gap-4">
                <span className="border border-slate-50 px-2 py-1 rounded-full hover:bg-slate-50 hover:text-cyan-800 transition-colors">
                  4
                </span>
                <h3 className="text-lg font-semibold">Lanzamos tu web</h3>
              </div>
              <p className="text-sm text-slate-300">
                Publicamos tu web y te proporcionamos las herramientas
                necesarias para que puedas gestionarla y seguir mejorando tu
                presencia online.
              </p>
            </li>
          </ul>
        </div>

        <Bars externalContainerRef={containerRef} />
      </div>
    </div>
  );
}
