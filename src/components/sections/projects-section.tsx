"use client";

import { useState } from "react";
import { projects, Project } from "@/data/projects";

const ACCENT = "#b1242f";

function getThumbnail(p: Project) {
  const mobile = p.images.find(i => i.label === "Android" || i.label === "iOS");
  return (mobile ?? p.images[0]).src;
}

function getPlatform(p: Project) {
  const labels = [...new Set(p.images.map(i => i.label))];
  if (labels.includes("Android") && labels.includes("iOS")) return "Android · iOS";
  if (labels.includes("Android")) return "Android";
  if (labels.includes("iOS")) return "iOS";
  return "Web";
}

function isMobile(p: Project) {
  return p.images.some(i => i.label === "Android" || i.label === "iOS");
}

export default function ProjectsSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) =>
    setOpenId(prev => (prev === id ? null : id));

  return (
    <section
      id="projects"
      className="snap-start py-16 min-h-screen flex flex-col justify-center"
    >
      <p className="mb-3 text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-bold flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
        proyectos
      </p>
      <h2 className="mb-2 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
        Mis proyectos
      </h2>
      <p className="mb-8 text-sm text-zinc-400 max-w-lg leading-relaxed">
        Apps nativas mobile-first y sitios web a medida. Haz clic para ver detalles.
      </p>

      <div className="flex flex-col gap-2">
        {projects.map(project => {
          const isOpen = openId === project.id;
          const thumb = getThumbnail(project);
          const platform = getPlatform(project);
          const mobile = isMobile(project);

          return (
            <div
              key={project.id}
              className="liquid-glass rounded-2xl overflow-hidden"
            >
              {/* ── Header row ── */}
              <button
                onClick={() => toggle(project.id)}
                className={`w-full flex items-center gap-4 px-5 py-4 text-left transition-colors duration-200 ${
                  isOpen ? "bg-white/[0.07]" : "hover:bg-white/[0.04]"
                }`}
              >
                {/* Thumbnail */}
                <div
                  className="flex-none overflow-hidden rounded-xl border border-white/10 bg-black/30"
                  style={
                    mobile
                      ? { width: 44, height: 64 }
                      : { width: 92, height: 56 }
                  }
                >
                  <img
                    src={thumb}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name + platform */}
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-white text-[15px] leading-tight">
                    {project.title}
                  </div>
                  <span
                    className="mt-1.5 inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border"
                    style={{
                      borderColor: "rgba(177,36,47,0.35)",
                      background: "rgba(177,36,47,0.12)",
                      color: "#fca5a5",
                    }}
                  >
                    {platform}
                  </span>
                </div>

                {/* Tech chips – desktop only */}
                <div className="hidden md:flex gap-1.5 flex-wrap justify-end max-w-[260px]">
                  {project.technologies.slice(0, 4).map(t => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 text-[11px] text-zinc-400 border border-white/10 rounded-lg bg-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <svg
                  className={`flex-none w-5 h-5 text-zinc-400 transition-transform duration-400 ease-in-out ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {/* ── Expandable body (grid-rows trick for smooth height) ── */}
              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden min-h-0">
                  <div
                    className={`px-5 pb-6 pt-4 border-t border-white/10 flex flex-col md:flex-row gap-6 transition-opacity duration-500 ${
                      isOpen ? "opacity-100 delay-150" : "opacity-0"
                    }`}
                  >
                    {/* Images – horizontal scroll */}
                    <div className="flex gap-3 overflow-x-auto pb-1 flex-shrink-0">
                      {project.images.map((img, i) => {
                        const isAppImg = img.label === "Android" || img.label === "iOS";
                        const isLaptop = img.label === "Web laptop";
                        return (
                          <div key={i} className="flex-none flex flex-col items-center gap-1">
                            <img
                              src={img.src}
                              alt={`${project.title} – ${img.label}`}
                              className="rounded-xl object-cover border border-white/10"
                              style={{
                                height: isAppImg ? 200 : isLaptop ? 130 : 160,
                                width: "auto",
                                boxShadow: "0 10px 40px rgba(0,0,0,0.55)",
                              }}
                            />
                            <span className="text-[10px] text-zinc-500">{img.label}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-4 min-w-0">
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {project.description}
                      </p>

                      <ul className="flex flex-col gap-2.5">
                        {project.bullets.slice(0, 3).map((b, i) => (
                          <li key={i} className="flex gap-2.5 text-sm text-zinc-400 leading-relaxed">
                            <span
                              className="mt-2 w-1.5 h-1.5 flex-none rounded-full"
                              style={{ background: ACCENT }}
                            />
                            {b}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map(t => (
                          <span
                            key={t}
                            className="px-2.5 py-1 text-xs text-zinc-300 border border-white/10 rounded-lg bg-white/[0.06]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.links.map(l => (
                          <a
                            key={l.url}
                            href={l.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 h-9 px-4 rounded-full text-[13px] font-semibold text-white border border-white/20 bg-white/10 hover:bg-white/20 hover:-translate-y-px transition-all duration-200"
                          >
                            {l.label}
                            <svg
                              width="11" height="11"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M7 17L17 7M9 7h8v8" />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
