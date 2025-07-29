import Carousel from "./ui/carousel";

export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  image: string;
}

export const CarouselItems: CarouselItem[] = [
  {
    title: "Mobile First",
    description: "Diseñamos pensando en la experiencia móvil primero.",
    id: 1,
    image: "/mobile-web.jpg",
  },
  {
    title: "Accesibilidad",
    description: "Creamos sitios accesibles para todos los usuarios.",
    id: 2,
    image: "/mobile-web.jpg",
  },
  {
    title: "Carga Ultrarápida",
    description:
      "Optimizamos cada sitio para una velocidad de carga excepcional.",
    id: 3,
    image: "/mobile-web.jpg",
  },
  {
    title: "SEO Local",
    description:
      "Implementamos estrategias de SEO local para mejorar tu visibilidad.",
    id: 4,
    image: "/mobile-web.jpg",
  },
  {
    title: "Identidad Visual",
    description:
      "Creamos una identidad visual única y profesional para tu marca.",
    id: 5,
    image: "/mobile-web.jpg",
  },
];

const Why = () => {
  return (
    <div className="flex flex-col items-center justify-center text-slate-50 space-y-8 p-4">
      <h2 className="text-4xl font-semibold text-center">
        ¿Por qué elegirnos?
      </h2>
      <div className="max-w-3xl w-full">
        <Carousel baseWidth="full" items={CarouselItems} />
      </div>
    </div>
  );
};

export default Why;
