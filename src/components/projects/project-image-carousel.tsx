"use client";

import { useEffect, useMemo, useState } from "react";
import type { ProjectImageItem } from "@/data/projects";

type Props = {
  images: ProjectImageItem[];
  title: string;
};

const getVisualWidthClass = (label: string) => {
  switch (label) {
    case "Android":
    case "Web móvil":
      return "max-w-[210px] sm:max-w-[230px] md:max-w-[250px]";

    case "Web tablet":
      return "max-w-[280px] sm:max-w-[320px] md:max-w-[360px]";

    case "Web laptop":
      return "max-w-[360px] sm:max-w-[420px] md:max-w-[500px] xl:max-w-[560px]";

    case "iOS":
      return "max-w-[210px] sm:max-w-[230px] md:max-w-[250px]";

    default:
      return "max-w-[240px] sm:max-w-[260px] md:max-w-[300px]";
  }
};

export default function ProjectImageCarousel({ images, title }: Props) {
  const safeImages = useMemo(() => images ?? [], [images]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setCurrent(0);
  }, [title, safeImages.length]);

  if (safeImages.length === 0) {
    return (
      <div className="flex h-full flex-col items-center">
        <div className="flex h-full w-full min-h-[420px] flex-col rounded-3xl border border-white/10 bg-white/5 p-3 shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <div className="flex flex-1 items-center justify-center rounded-2xl bg-black/10 text-sm text-zinc-400">
            Sin imagen disponible
          </div>
        </div>
      </div>
    );
  }

  const safeIndex = Math.min(current, safeImages.length - 1);
  const currentImage = safeImages[safeIndex];
  const visualWidthClass = getVisualWidthClass(currentImage.label);

  const prev = () => {
    setCurrent((prevIndex) =>
      prevIndex === 0 ? safeImages.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrent((prevIndex) =>
      prevIndex === safeImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex h-full flex-col items-center">
      <div className="liquid-glass group flex h-full w-full flex-col rounded-3xl border border-white/10 bg-white/5 p-3 shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        <div className="relative flex-1 overflow-hidden rounded-2xl bg-black/10">
          <div className="flex h-full w-full items-center justify-center">
            <div
              className={`flex h-full w-full items-center justify-center transition-all duration-500 ease-in-out ${visualWidthClass}`}
            >
              <img
                src={currentImage.src}
                alt={`${title} ${currentImage.label}`}
                className="h-full w-full object-contain transition-all duration-500 ease-in-out"
              />
            </div>
          </div>

          {safeImages.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-3 py-2 text-white backdrop-blur-md transition opacity-100 xl:opacity-0 xl:group-hover:opacity-100"
                aria-label="Imagen anterior"
              >
                ←
              </button>

              <button
                onClick={next}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-3 py-2 text-white backdrop-blur-md transition opacity-100 xl:opacity-0 xl:group-hover:opacity-100"
                aria-label="Imagen siguiente"
              >
                →
              </button>
            </>
          )}
        </div>

        <div className="mt-3 flex flex-col items-center">
          <p className="text-center text-sm text-zinc-300 md:text-base">
            {currentImage.label}
          </p>

          {safeImages.length > 1 && (
            <div className="mt-4 flex items-center gap-3">
              {safeImages.map((image, index) => (
                <button
                  key={`${title}-${image.label}-${index}`}
                  onClick={() => setCurrent(index)}
                  className={`h-3.5 w-3.5 rounded-full transition ${
                    index === safeIndex ? "bg-white" : "bg-gray-700"
                  }  hover:-translate-y-0.5 duration-300 ease-out hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] active:scale-95 active:translate-y-0 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)]`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}