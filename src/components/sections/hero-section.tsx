"use client";

import { useTypewriter } from "@/hooks/useTypewriter";

export default function HeroSection() {
    const text = useTypewriter(
        [
            "Software Developer",
            "Mobile Engineer",
            "Problem Solver",
        ],
        80,
        1500
    );

    return (
        <section
            id="hero"
            className="snap-start flex min-h-screen flex-col justify-center py-10 md:py-0"
        >

            <p className="mb-4 text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-bold">• Yeffer Sime</p>


            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-7xl h-[1.2em] flex items-center">
                {text}
                <span className="ml-1 inline-block w-[3px] h-[0.9em] bg-white animate-pulse" />
            </h1>

            <div className="max-w-2xl space-y-4">
                <p className="text-lg text-zinc-300 font-light leading-relaxed">
                    De un pueblo con acceso limitado a la tecnología, a desarrollar software crítico para competencias internacionales.
                </p>

                <p className="text-sm leading-7 text-zinc-500 font-light max-w-xl">
                    Mi fuerte es la resiliencia: he mantenido la calma en eventos masivos cuando los sensores fallan y he aprendido tecnologías desde cero en una sola noche para salvar un proyecto. No solo entrego código; entrego soluciones que funcionan cuando el tiempo y la presión no perdonan.
                </p>
            </div>


            <div className="mt-8 flex flex-wrap gap-2 max-w-xl">
                {["Kotlin", "SwiftUI","MVVM", "Next.js", "TypeScript",
                    "Laravel", "Django", "Firebase", "PostgreSQL", "Git"].map((tech) => (
                        <span
                            key={tech}
                            className="liquid-glass px-3 py-1 text-sm font-medium text-zinc-400 bg-white/[0.03] border border-white/5 rounded-full backdrop-blur-md"
                        >
                            {tech}
                        </span>
                    ))}
            </div>

            <div className="mt-12 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
                <div className="liquid-glass p-6 border   transition-all hover:bg-white/[0.03]">
                    <p className="text-zinc-600 text-[9px] uppercase tracking-[0.2em] font-bold">Eventos Críticos</p>
                    <h2 className="mt-2 text-2xl font-bold text-white tracking-tight">Línea de Meta</h2>
                    <p className="text-[10px] text-zinc-500 mt-1 font-light italic">Soporte bajo presión real</p>
                </div>

                <div className="liquid-glass p-6 border  transition-all hover:bg-white/[0.03]">
                    <p className="text-zinc-600 text-[9px] uppercase tracking-[0.2em] font-bold">Aprendizaje</p>
                    <h2 className="mt-2 text-2xl font-bold text-white tracking-tight">Autodidacta</h2>
                    <p className="text-[10px] text-zinc-500 mt-1 font-light italic">Especialista en retos nuevos</p>
                </div>

                <div className="liquid-glass p-6 border transition-all hover:bg-white/[0.03]">
                    <p className="text-zinc-600 text-[9px] uppercase tracking-[0.2em] font-bold">Alcance</p>
                    <h2 className="mt-2 text-2xl font-bold text-white tracking-tight">Internacional</h2>
                    <p className="text-[10px] text-zinc-500 mt-1 font-light italic">Proyectos en 4+ países</p>
                </div>
            </div>
        </section>
    );
}