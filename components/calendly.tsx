"use client";
import { useEffect, useRef } from "react";

const Calendly = () => {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-8xl mx-auto text-center p-4 py-8 sm:px-8 sm:py-12">
      <h2 className="text-4xl font-semibold text-slate-50">
        ¿Quiéres hablar con nosotros?
      </h2>
      <p className="text-lg mt-8 font-light text-slate-300 max-w-4xl mx-auto">
        Agenda una consulta gratuita para hablar acerca de tu negocio y saber
        como podriamos ayudar.
      </p>
      <div>
        <div
          ref={calendlyRef}
          className="calendly-inline-widget"
          data-url="https://calendly.com/negocioslocales-online9/30min?background_color=f2f2f2"
          style={{
            minWidth: "320px",
            height: "700px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Calendly;
