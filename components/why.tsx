import { AccordionContent } from "@radix-ui/react-accordion";
import { Accordion, AccordionItem, AccordionTrigger } from "./ui/accordion";
import Image from "next/image";
import { Check } from "lucide-react";

export const AccordionItems = [
  {
    title: "Rendimiento, accesibilidad y SEO",
    description: "Mejoramos la velocidad de carga y la experiencia de usuario.",
    li: [
      "Mejoramos la velocidad de carga y la experiencia de usuario.",
      "Optimizamos para SEO, mejorando tu visibilidad en Google.",
      "Aumentamos la accesibilidad para todos los usuarios",
    ],
    id: 1,
    image: "/speed-insights.jpg",
  },
  {
    title: "Posicionamiento Local",
    description:
      "Nos aseguramos de que tu negocio sea fácil de encontrar en tu área, mejorando tu visibilidad y atrayendo más clientes locales.",
    li: [
      "Optimización de Google My Business para destacar en búsquedas",
      "Estrategias de SEO Local para mejorar tu posicionamiento",
      "Gestión de reseñas y reputación online",
    ],
    id: 2,
    image: "/seo.jpg",
  },
  {
    title: "Estrategias de Venta y Captación",
    description:
      "Generamos los textos, imagenes y secciones optimizados para captar la atención de tus clientes potenciales y convertir visitas en ventas.",
    li: [
      "Creamos una narrativa de marca que conecte con tus clientes",
      "Utilizamos un embudo de ventas optimizado para guiar a los usuarios hacia la conversión",
      "Implementación de formularios de contacto y llamadas a la acción",
    ],
    id: 3,
    image: "/embudo.jpg",
  },
];

const Why = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-slate-50 max-w-6xl space-y-8 mx-auto px-4 py-8 pt-18 sm:px-8 sm:py-12">
      <h2 className="text-4xl font-semibold">¿Por qué elegirnos?</h2>
      <p className="text-lg font-light text-slate-300 max-w-3xl">
        Nos especializamos en ayudar a negocios locales a mejorar su presencia
        digital con páginas web modernas, optimizadas y adaptadas a sus
        necesidades específicas.
      </p>
      <div className="w-full max-w-4xl">
        <Accordion type="single" collapsible>
          {AccordionItems.map((item) => (
            <AccordionItem key={item.id} value={item.title}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent className="flex flex-col justify-center items-center bg-neutral-400/20 border border-neutral-400/50 rounded-lg my-2 p-4 space-y-4">
                <p>{item.description}</p>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="rounded-lg"
                  objectFit="cover"
                />
                <ul>
                  {item.li.map((li, index) => (
                    <li key={index} className="text-sm text-slate-300">
                      <Check className="inline-flex mr-2" />
                      {li}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Why;
