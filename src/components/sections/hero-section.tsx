"use client";

import { useTypewriter } from "@/hooks/useTypewriter";

export default function HeroSection() {
  const text = useTypewriter(
    [
      "Software Developer Full Stack",
      "Mobile Developer (Android & iOS)",
      "Problem Solver bajo presión",
    ],
    100,
    1000
  );

  return (
    <section
      id="hero"
      className="snap-start flex min-h-screen flex-col justify-center py-8 md:min-h-[calc(100vh-48px)] md:py-0"
    >
      <p className="mb-3 text-sm text-rose-200/80">• Hola, soy Yeffer Sime</p>

      <h1 className="mb-5 text-4xl font-semibold leading-tight md:text-6xl min-h-[1.2em]">
        {text}
        <span className="ml-1 cursor">|</span>
      </h1>

      <div className="max-w-3xl space-y-4">
        <p className="text-xl text-zinc-200 font-medium leading-relaxed">
          De un pueblo con acceso limitado a la tecnología, a desarrollar software 
          crítico para competencias internacionales.
        </p>
        
        <p className="text-base leading-8 text-zinc-400">
          Mi fuerte es la resiliencia: he mantenido la calma en eventos masivos cuando 
          los sensores fallan y he aprendido tecnologías desde cero en una sola noche 
          para salvar un proyecto. No solo entrego código; entrego soluciones que 
          funcionan cuando el tiempo y la presión no perdonan.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2 max-w-2xl">
        {["Kotlin", "Swift", "Laravel", "Next.js", "Django", "Room DB", "Firebase"].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 text-xs text-zinc-300 liquid-glass border border-white/5"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Métricas con contexto real */}
      <div className="mt-10 grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-3">
        <div className="liquid-glass p-6 transition-transform hover:scale-[1.01]">
          <p className="text-zinc-500 text-xs uppercase tracking-widest font-medium">Eventos Críticos</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Línea de Meta</h2>
          <p className="text-[10px] text-rose-200/50 mt-1">Soporte bajo presión real</p>
        </div>

        <div className="liquid-glass p-6 transition-transform hover:scale-[1.01]">
          <p className="text-zinc-500 text-xs uppercase tracking-widest font-medium">Aprendizaje</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Autodidacta</h2>
          <p className="text-[10px] text-rose-200/50 mt-1">Especialista en retos nuevos</p>
        </div>

        <div className="liquid-glass p-6 transition-transform hover:scale-[1.01]">
          <p className="text-zinc-500 text-xs uppercase tracking-widest font-medium">Alcance</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Internacional</h2>
          <p className="text-[10px] text-rose-200/50 mt-1">Proyectos en 4+ países</p>
        </div>
      </div>
    </section>
  );
}