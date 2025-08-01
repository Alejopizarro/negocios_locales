"use client";
import AboutUs from "@/components/about-us";
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
    <div className="bg-gradient-to-b from-cyan-700 to-cyan-900 py-8">
      <Hero />
      <AboutUs />
      <How />
      <Why />
      <Opinions />
      <Pricing />
      <div
        ref={containerRef}
        className="lg:min-h-screen flex flex-col justify-evenly"
      >
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
        <div className="flex flex-col p-8 my-8 m-4 items-center justify-center rounded-lg shadow-lg bg-cyan-500/40 border border-neutral-300/40 max-w-3xl lg:mx-auto text-slate-50">
          <p className="text-2xl font-semibold mb-8">Formulario de Contacto</p>
          <FormController />
        </div>
        <Bars externalContainerRef={containerRef} />
      </div>
    </div>
  );
};

export default Page;
