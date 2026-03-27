"use client";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "RACE LINE E.I.R.L",
      role: "Mobile Developer",
      period: "2025 — 2026",
      summary: "Liderazgo técnico en apps para eventos internacionales y soporte en Panamericanos 2025.",
      tags: ["Kotlin", "SwiftUI", "WebSockets", "Room DB", "Firebase"]
    },
    {
      company: "Devdatep Consulting",
      role: "Backend Laravel",
      period: "2024",
      summary: "Arquitectura de APIs seguras y optimización de flujos de datos de alta concurrencia.",
      tags: ["Laravel", "PHP", "Sanctum", "MySQL", "API REST"]
    },
    {
      company: "MBR Technology SAC",
      role: "Full Stack Developer",
      period: "2024",
      summary: "Modernización de ERP, reduciendo tiempos de procesamiento en un 25% con Django y React.",
      tags: ["React", "Django", "PostgreSQL", "Tailwind", "Figma"]
    }
  ];

  return (
    <section id="experience" className="snap-start flex min-h-screen flex-col justify-center py-8">
      <p className="mb-2 text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-bold">• Trayectoria</p>
      <h2 className="mb-6 text-3xl font-semibold md:text-4xl tracking-tight text-white">Experiencia</h2>

      <div className="relative space-y-3 before:absolute before:left-[11px] before:h-full before:w-[1px] before:bg-white/5 md:before:left-[15px]">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-10 md:pl-14 group">
    
            <div className="absolute left-0 top-4 h-6 w-6 rounded-full border border-white/10 bg-zinc-950/50 backdrop-blur-sm p-1.5 md:h-8 md:w-8">
              <div className="h-full w-full rounded-full bg-white/10" />
            </div>

            <div className="liquid-glass p-5 md:p-6  rounded-2xl hover:bg-white/[0.02] transition-all">
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
                    className="px-2 py-0.5 text-[9px] font-medium text-zinc-500 bg-white/[0.02] border border-white/5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}