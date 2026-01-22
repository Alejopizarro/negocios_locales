"use client";
import AboutUs from "@/components/about-us";
import Calendly from "@/components/calendly";
import { FormController } from "@/components/form-controller";
import Hero from "@/components/hero";
import How from "@/components/how";
import Opinions from "@/components/opinions";
import Pricing from "@/components/pricing";
import Bars from "@/components/ui/bars";
import Why from "@/components/why";
import { useRef } from "react";

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-slate-50 py-8">
      <Hero />
      <AboutUs />
      <How />
      <Why />
      <Opinions />
      <Pricing />
      <div ref={containerRef}>
        {" "}
        <div className="self-end">
          <div className="flex flex-col space-y-1 items-end">
            <div className="flex space-x-2">
              <div className="bg-cyan-300 h-2 w-12" />
              <div className="bg-cyan-300 h-2 w-32" />
            </div>
            <div className="bg-cyan-500 h-2 w-24" />
          </div>
        </div>
        <Calendly />
        <Bars externalContainerRef={containerRef} />
      </div>
      <div className="relative flex items-center overflow-hidden py-16">
        {/* Grid background en el centro */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d430_1px,transparent_1px),linear-gradient(to_bottom,#06b6d430_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Sombreado slate-50 en los bordes para ocultar el grid */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />

        {/* Sombra cyan en el centro interno */}
        <div className="absolute inset-0 bg-radial from-cyan-500/15 via-transparent to-transparent" />

        <div className="relative flex flex-col items-center justify-center max-w-6xl space-y-8 mx-auto px-4">
          <h2 className="text-4xl font-semibold text-gray-950">
            Formulario de Contacto
          </h2>
          <div className="flex flex-col p-8 m-4 items-center justify-center rounded-lg shadow-lg bg-slate-50 border-2 border-gray-950/80 max-w-2xl lg:mx-auto text-gray-950 my-8">
            <FormController />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
