"use client";

import { memo } from "react";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useInView } from "@/hooks/useInView";

const ACCENT = "#b1242f";
const TECHS = ["Kotlin", "SwiftUI", "MVVM", "Next.js", "TypeScript", "Laravel", "Django", "Firebase", "PostgreSQL", "Git"];

const TypewriterH1 = memo(function TypewriterH1() {
  const text = useTypewriter(
    ["Software Developer", "Mobile Engineer", "Problem Solver"],
    80,
    1500
  );
  return (
    <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-7xl h-[1.2em] flex items-center">
      {text}
      <span className="ml-1 inline-block w-0.75 h-[0.9em] bg-white animate-pulse" />
    </h1>
  );
});

export default function HeroSection() {
  const { ref, inView } = useInView(0.05);

  return (
    <section
      id="hero"
      className="snap-start flex min-h-screen flex-col justify-center py-10 md:py-0"
    >
      <div ref={ref} className={`reveal${inView ? " visible" : ""}`}>
        <p className="mb-4 text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-bold">• Yeffer Sime</p>

        <TypewriterH1 />

        <div className="max-w-2xl space-y-4" style={{ transitionDelay: "80ms" }}>
          <p className="text-lg text-zinc-300 font-light leading-relaxed">
            De un pueblo con acceso limitado a la tecnología, a desarrollar software crítico para competencias internacionales.
          </p>
          <p className="text-sm leading-7 text-zinc-500 font-light max-w-xl">
            Mi fuerte es la resiliencia: he mantenido la calma en eventos masivos cuando los sensores fallan y he aprendido tecnologías desde cero en una sola noche para salvar un proyecto. No solo entrego código; entrego soluciones que funcionan cuando el tiempo y la presión no perdonan.
          </p>
        </div>

        {/* CTA — CV download */}
        <div className="mt-8 flex flex-wrap items-center gap-3" style={{ transitionDelay: "160ms" }}>
          <a
            href="/cv/YEFFER_SIME_CV.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 hover:-translate-y-px transition-all duration-200"
          >
            <HiOutlineArrowDownTray className="w-4 h-4" />
            Descargar CV
          </a>
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: ACCENT, boxShadow: `0 0 8px ${ACCENT}` }}
          />
          <span className="text-xs text-zinc-500">Disponible para proyectos globales</span>
        </div>

        {/* Tech tags — marquee */}
        <div
          className="mt-6 overflow-hidden"
          style={{
            transitionDelay: "240ms",
            maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="marquee-track flex gap-3 w-max">
            {[...TECHS, ...TECHS].map((tech, i) => (
              <span
                key={i}
                aria-hidden={i >= TECHS.length}
                className="flex-none px-3 py-1 text-sm font-medium text-zinc-400 bg-white/5 border border-white/10 rounded-full whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Stats cards */}
        <div className="mt-12 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3" style={{ transitionDelay: "320ms" }}>
          <div className="liquid-glass p-6 transition-colors hover:bg-white/3">
            <p className="text-zinc-600 text-[9px] uppercase tracking-[0.2em] font-bold">Eventos Críticos</p>
            <h2 className="mt-2 text-2xl font-bold text-white tracking-tight">Línea de Meta</h2>
            <p className="text-[10px] text-zinc-500 mt-1 font-light italic">Soporte bajo presión real</p>
          </div>
          <div className="liquid-glass p-6 transition-colors hover:bg-white/3">
            <p className="text-zinc-600 text-[9px] uppercase tracking-[0.2em] font-bold">Aprendizaje</p>
            <h2 className="mt-2 text-2xl font-bold text-white tracking-tight">Autodidacta</h2>
            <p className="text-[10px] text-zinc-500 mt-1 font-light italic">Especialista en retos nuevos</p>
          </div>
          <div className="liquid-glass p-6 transition-colors hover:bg-white/3">
            <p className="text-zinc-600 text-[9px] uppercase tracking-[0.2em] font-bold">Alcance</p>
            <h2 className="mt-2 text-2xl font-bold text-white tracking-tight">Internacional</h2>
            <p className="text-[10px] text-zinc-500 mt-1 font-light italic">Proyectos en 4+ países</p>
          </div>
        </div>
      </div>
    </section>
  );
}
