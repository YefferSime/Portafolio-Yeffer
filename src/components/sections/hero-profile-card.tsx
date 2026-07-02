"use client";

import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { projects, type Project } from "@/data/projects";
import { getPlatformInfo } from "@/components/projects/project-utils";

function isNativeApp(project: Project) {
  const icons = getPlatformInfo(project.images).icons;
  return icons.includes("android") || icons.includes("ios");
}

const ACCENT = "#b1242f";

function scrollToContact() {
  const target = document.getElementById("contact");
  if (!target) return;
  const container = document.querySelector(".center-scroll") as HTMLElement | null;
  if (container && window.innerWidth >= 1024) {
    const top =
      target.getBoundingClientRect().top -
      container.getBoundingClientRect().top +
      container.scrollTop;
    container.scrollTo({ top, behavior: "smooth" });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function HeroProfileCard() {
  const appsCount = projects.filter((p) => {
    const icons = getPlatformInfo(p.images).icons;
    return icons.includes("android") || icons.includes("ios");
  }).length;

  const websCount = projects.filter((p) =>
    getPlatformInfo(p.images).icons.includes("web")
  ).length;

  const logos = projects.filter(
    (p): p is Project & { logo: string } => Boolean(p.logo)
  );

  return (
    <div className="liquid-glass mx-auto w-full max-w-[300px] overflow-hidden rounded-3xl p-3">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
        <img
          src="/image/profile2.png"
          alt="Yeffer Sime H."
          className="h-full w-full object-cover"
        />
        <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: ACCENT, boxShadow: `0 0 6px ${ACCENT}` }}
          />
          Disponible
        </span>
      </div>

      <div className="px-2 pt-4">
        <h3 className="text-lg font-semibold text-white">Yeffer Sime H.</h3>
        <p className="text-sm text-zinc-400">Mobile &amp; Full Stack Developer</p>
      </div>

      <div className="mt-4 flex items-center gap-3 px-2">
        <div className="flex -space-x-3">
          {logos.map((p) => {
            const nativeApp = isNativeApp(p);
            return (
              <div
                key={p.id}
                className={`flex h-9 w-9 flex-none items-center justify-center rounded-full border-2 border-[#0b0b0f] bg-zinc-800 shadow-[0_4px_12px_rgba(0,0,0,0.4)] ${
                  nativeApp ? "" : "p-1.5"
                }`}
              >
                <img
                  src={p.logo}
                  alt={p.title}
                  className={
                    nativeApp
                      ? "h-full w-full rounded-full object-cover"
                      : "h-full w-full object-contain"
                  }
                />
              </div>
            );
          })}
        </div>
        <span className="text-xs text-zinc-500 leading-tight">
          Proyectos reales en producción
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 border-t border-white/10 px-2 pt-4">
        <div>
          <p className="text-xl font-bold text-white">{appsCount}+</p>
          <p className="text-[10px] uppercase tracking-wide text-zinc-500">Apps</p>
        </div>
        <div>
          <p className="text-xl font-bold text-white">{websCount}+</p>
          <p className="text-[10px] uppercase tracking-wide text-zinc-500">Webs</p>
        </div>
      </div>

      <button
        onClick={scrollToContact}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/90 active:scale-95"
      >
        Hablemos
        <HiOutlineArrowUpRight className="h-4 w-4" />
      </button>
    </div>
  );
}
