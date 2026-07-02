"use client";

import { useState } from "react";
import { HiOutlineCodeBracket, HiOutlinePhoto, HiOutlineSquares2X2 } from "react-icons/hi2";
import type { Project } from "@/data/projects";
import PlatformBadge from "./platform-badge";
import {
  getCardThumbnail,
  getFallbackThumbnail,
  getPlatformInfo,
  getVisualWidthClass,
} from "./project-utils";

type Props = {
  project: Project;
  onOpenDetails: (project: Project) => void;
};

export default function ProjectCard({ project, onOpenDetails }: Props) {
  const platform = getPlatformInfo(project.images);
  const [thumb, setThumb] = useState(() => getCardThumbnail(project));
  const isNativeApp = platform.icons.includes("android") || platform.icons.includes("ios");

  const handleLogoError = () => {
    if (thumb.kind === "logo") setThumb(getFallbackThumbnail(project));
  };

  return (
    <article className="liquid-glass group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
      <div className="relative aspect-[4/3] overflow-hidden bg-black/20">
        {thumb.kind === "logo" ? (
          isNativeApp ? (
            // App icon: square, rounded like a home-screen icon, so it reads as a mobile app.
            <div className="flex h-full w-full items-center justify-center p-10">
              <img
                src={thumb.src}
                alt={project.title}
                loading="lazy"
                decoding="async"
                onError={handleLogoError}
                className="aspect-square w-full max-w-[140px] rounded-[22%] object-cover shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ) : (
            // Web logo: framed in a browser-window mockup so it reads as a site, not an app icon.
            <div className="flex h-full w-full items-center justify-center p-5">
              <div className="flex h-full w-full max-w-[320px] flex-col overflow-hidden rounded-xl border border-black/10 bg-zinc-900 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-105">
                <div className="flex items-center gap-1.5 border-b border-white/10 bg-zinc-100 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950 p-6">
                  <img
                    src={thumb.src}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    onError={handleLogoError}
                    className="max-h-[65%] max-w-[65%] object-contain"
                  />
                </div>
              </div>
            </div>
          )
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div
              className={`flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-105 ${getVisualWidthClass(
                thumb.kind
              )}`}
            >
              <img
                src={thumb.src}
                alt={project.title}
                loading="lazy"
                decoding="async"
                onError={handleLogoError}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold text-white leading-snug">
          {project.title}
        </h3>

        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center gap-4 text-xs text-zinc-500">
          <span className="flex items-center gap-1.5">
            <HiOutlineSquares2X2 className="w-4 h-4" />
            {platform.icons.length} {platform.icons.length === 1 ? "plataforma" : "plataformas"}
          </span>
          <span className="flex items-center gap-1.5">
            <HiOutlineCodeBracket className="w-4 h-4" />
            {project.technologies.length} tecnologías
          </span>
          <span className="flex items-center gap-1.5">
            <HiOutlinePhoto className="w-4 h-4" />
            {project.images.length} capturas
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-4">
          <PlatformBadge platform={platform} />
          <button
            onClick={() => onOpenDetails(project)}
            className="flex-none inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/90 active:scale-95"
          >
            Ver detalles
          </button>
        </div>
      </div>
    </article>
  );
}
