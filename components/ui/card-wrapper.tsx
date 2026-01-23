"use client";
import { useState, useRef, useEffect } from "react";
import { Star, ChevronDown } from "lucide-react";

export interface OpinionItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  id: number;
  user: string;
}

interface CardWrapperProps {
  item: OpinionItem[];
}

const iconBgColors = ["bg-gray-200", "bg-indigo-200", "bg-fuchsia-200"];

const CardWrapper = (props: CardWrapperProps) => {
  const { item } = props;
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [overflowingCards, setOverflowingCards] = useState<Set<number>>(
    new Set(),
  );
  const contentRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  useEffect(() => {
    const newOverflowing = new Set<number>();
    contentRefs.current.forEach((ref, id) => {
      if (ref && ref.scrollHeight > ref.clientHeight) {
        newOverflowing.add(id);
      }
    });
    setOverflowingCards(newOverflowing);
  }, [item]);

  const toggleExpand = (id: number) => {
    setExpandedCard((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-wrap justify-center">
      {item.map((opinion, index) => {
        const isExpanded = expandedCard === opinion.id;
        const isOverflowing = overflowingCards.has(opinion.id);

        return (
          <div
            key={opinion.id}
            className="bg-slate-50 rounded-lg border-2 border-gray-950/80 shadow-md p-6 py-4 lg:mx-4 my-2 w-80 flex flex-col h-fit"
          >
            <div className="flex items-start mb-1">
              <div
                className={`mr-3 ${iconBgColors[index % iconBgColors.length]} p-3 rounded-full`}
              >
                {opinion.icon}
              </div>
              <div className="flex flex-col">
                <p className="text-gray-500 text-sm">{opinion.user}</p>
                <div className="flex mt-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-gray-950/40 font-light fill-cyan-700"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div
              ref={(el) => {
                if (el) contentRefs.current.set(opinion.id, el);
              }}
              className={`flex-1 overflow-hidden ${!isExpanded ? "max-h-48" : ""}`}
            >
              <p className="text-md font-semibold mb-2">{opinion.title}</p>
              <p className="text-gray-600 text-sm mb-2">
                {opinion.description}
              </p>
            </div>
            {(isOverflowing || isExpanded) && (
              <button
                onClick={() => toggleExpand(opinion.id)}
                className="mt-4 mx-auto flex items-center justify-center w-10 h-10"
                aria-label={isExpanded ? "Ver menos" : "Ver más"}
              >
                <ChevronDown
                  className={`h-7 w-7 text-gray-400 hover:cursor-pointer transition-transform duration-300 ease-out ${isExpanded ? "rotate-180" : "rotate-0"}`}
                />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CardWrapper;
