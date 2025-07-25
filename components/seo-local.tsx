import Image from "next/image";

const SeoLocal = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row-reverse gap-8 items-center justify-center text-slate-50 space-y-8">
      <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left space-y-4">
        <p className="text-6xl font-extrabold italic uppercase bg-radial from-slate-50 to-slate-300 bg-clip-text text-transparent">
          SEO <span className="font-extralight">local</span>
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          ¿Por qué es importante posicionarte dentro de tu zona?
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl">
          Google ha cambiado la forma en que muestra los resultados de búsqueda,
          priorizando los negocios locales. Con nuestro servicio de SEO local,
          te ayudamos a aparecer en las búsquedas relevantes para tu área,
          aumentando tu visibilidad y atrayendo más clientes potenciales.
        </p>
      </div>
      <Image
        src="/seo-local.png"
        alt="SEO Local"
        className="object-cover shadow-bottom max-h-[80vh] w-auto drop-shadow-slate-50 drop-shadow-xl"
        width={500}
        height={300}
      />
    </div>
  );
};

export default SeoLocal;
