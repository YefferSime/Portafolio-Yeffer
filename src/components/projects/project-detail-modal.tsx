"use client";

import { useEffect } from "react";
import { HiOutlineArrowTopRightOnSquare, HiOutlineXMark } from "react-icons/hi2";
import type { Project } from "@/data/projects";
import PlatformBadge from "./platform-badge";
import ProjectImageCarousel from "./project-image-carousel";
import { getPlatformInfo } from "./project-utils";

const ACCENT = "#b1242f";

type Props = {
  project: Project;
  onClose: () => void;
};

export default function ProjectDetailModal({ project, onClose }: Props) {
  const platform = getPlatformInfo(project.images);

  useEffect(() => {
    const container = document.querySelector(".center-scroll") as HTMLElement | null;
    const prevOverflow = container?.style.overflow;
    if (container) container.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      if (container) container.style.overflow = prevOverflow ?? "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="liquid-glass relative w-full max-w-5xl max-h-[88vh] overflow-y-auto rounded-3xl p-5 md:p-8">
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95"
        >
          <HiOutlineXMark className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[360px_minmax(0,1fr)] xl:items-start xl:gap-8">
          <div className="h-[320px] xl:sticky xl:top-8 xl:h-[440px] xl:w-[360px]">
            <ProjectImageCarousel
              key={project.id}
              images={project.images}
              title={project.title}
            />
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <PlatformBadge platform={platform} />
              <h3
                id="project-modal-title"
                className="mt-3 text-2xl font-semibold text-white md:text-3xl"
              >
                {project.title}
              </h3>
            </div>

            <p className="leading-7 text-zinc-300 font-extralight md:text-lg">
              {project.description}
            </p>

            <ul className="flex flex-col gap-2.5">
              {project.bullets.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-zinc-400 leading-relaxed">
                  <span
                    className="mt-2 w-1.5 h-1.5 flex-none rounded-full"
                    style={{ background: ACCENT }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.links.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={`${project.id}-${link.label}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="liquid-glass inline-flex items-center gap-2.5 rounded-full px-4 py-2.5 text-sm text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] active:scale-95 active:translate-y-0 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)]"
                  >
                    {link.label}
                    <HiOutlineArrowTopRightOnSquare className="w-4 h-4" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
