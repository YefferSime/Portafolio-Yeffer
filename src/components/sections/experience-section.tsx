"use client";

import { useInView } from "@/hooks/useInView";

export default function ExperienceSection() {
  const { ref, inView } = useInView();

  const experiences = [
    {
      company: "RACE LINE E.I.R.L",
      role: "Mobile Developer",
      period: "Ene 2025 — Sep 2026",
      summary: "Desarrollé Peruaquatics con React Native (Google Play) para la Federación Deportiva Nacional, y FinisherData TIMING en iOS con SwiftUI, MVVM y Clean Architecture, con JWT, Firebase, Sign in with Apple, WebSocket y SwiftData. Participé en FinisherData y Exotimer en Android (Kotlin, Jetpack Compose) y di soporte en producción en eventos como el Panamericano de Surf 2025.",
      tags: ["React Native", "TypeScript", "SwiftUI", "Kotlin", "Jetpack Compose", "WebSocket", "Firebase", "JWT"]
    },
    {
      company: "Devdatep Consulting",
      role: "Backend Developer Junior",
      period: "Jul 2024 — Nov 2024",
      summary: "Backend de un sistema de gestión de tickets con Laravel y MySQL: APIs REST para usuarios, eventos y categorías, autenticación con Sanctum y optimización de consultas.",
      tags: ["Laravel", "PHP", "Sanctum", "MySQL", "API REST"]
    },
    {
      company: "MBR Technology SAC",
      role: "Analista Programador",
      period: "Ene 2024 — Mar 2024",
      summary: "Desarrollo de un ERP con React, Django REST Framework y Firebase, levantamiento de requerimientos con clientes y reducción de los tiempos de procesamiento de datos.",
      tags: ["React", "Django REST", "Firebase", "Tailwind"]
    }
  ];

  return (
    <section id="experience" className="snap-start flex min-h-screen flex-col justify-center py-8">
      <div ref={ref} className={`reveal${inView ? " visible" : ""}`}>
        <p className="mb-2 text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-bold">• Trayectoria</p>
        <h2 className="mb-6 text-3xl font-semibold md:text-4xl tracking-tight text-white">Experiencia</h2>

        <div className="relative space-y-3 before:absolute before:left-2.75 before:h-full before:w-px before:bg-white/5 md:before:left-3.75">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-10 md:pl-14 group reveal visible"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute left-0 top-4 h-6 w-6 rounded-full border border-white/10 bg-zinc-950/50 backdrop-blur-sm p-1.5 md:h-8 md:w-8">
                <div className="h-full w-full rounded-full bg-white/10" />
              </div>

              <div className="liquid-glass p-5 md:p-6 rounded-2xl hover:bg-white/2 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-4">
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                    <h3 className="text-base font-bold text-white tracking-tight">{exp.role}</h3>
                    <span className="hidden md:block text-zinc-700">•</span>
                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider">{exp.company}</p>
                  </div>
                  <span className="text-[9px] font-mono text-zinc-600 uppercase whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-zinc-400 font-light max-w-4xl">
                  {exp.summary}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[9px] font-medium text-zinc-500 bg-white/2 border border-white/5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
