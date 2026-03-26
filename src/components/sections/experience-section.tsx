"use client";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "RACE LINE E.I.R.L",
      role: "Mobile Developer",
      period: "2025 - 2026",
      summary: "Liderazgo técnico en ecosistemas móviles para eventos internacionales. Soporte crítico en los Panamericanos Lima 2025.",
      tags: ["Kotlin", "Swift", "Jetpack Compose", "SwiftUI", "WebSockets", "Room DB", "Firebase", "Lottie"]
    },
    {
      company: "Devdatep Consulting",
      role: "Backend Laravel",
      period: "2024",
      summary: "Diseño de arquitecturas API seguras y optimización de flujos de datos empresariales de alta concurrencia.",
      tags: ["Laravel", "PHP", "Sanctum", "MySQL", "API REST", "Git", "Linux"]
    },
    {
      company: "MBR Technology SAC",
      role: "Full Stack Developer",
      period: "2024",
      summary: "Modernización de sistemas ERP, logrando una reducción del 25% en tiempos de procesamiento de datos.",
      tags: ["React", "Django", "Python", "JavaScript", "PostgreSQL", "Tailwind CSS", "Figma"]
    }
  ];

  return (
    <section id="experience" className="snap-start flex min-h-screen flex-col justify-center py-12 md:py-20">
      <p className="mb-3 text-[10px] text-rose-200/40 uppercase tracking-[0.2em] font-bold">• Trayectoria</p>
      <h2 className="mb-10 text-3xl font-semibold md:text-5xl tracking-tight text-white">Experiencia</h2>

      <div className="relative space-y-6 before:absolute before:left-[11px] before:h-full before:w-[1px] before:bg-white/5 md:before:left-[15px]">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-10 md:pl-16 group">
            
            {/* Indicador iOS Style - Sin bordes pesados */}
            <div className="absolute left-0 top-3 h-6 w-6 rounded-full border border-white/10 bg-zinc-950/50 backdrop-blur-sm p-1.5 md:h-8 md:w-8 transition-colors group-hover:border-rose-500/30">
              <div className="h-full w-full rounded-full bg-rose-500/10 shadow-[0_0_15px_rgba(244,63,94,0.15)]" />
            </div>

            <div className="liquid-glass p-8 transition-all hover:bg-white/[0.04] border border-white/5">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-rose-200/90 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-rose-200/50 text-[10px] font-bold uppercase tracking-[0.15em]">{exp.company}</p>
                </div>
                <span className="text-[9px] font-bold tracking-widest text-zinc-500 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 w-fit uppercase">
                  {exp.period}
                </span>
              </div>

              <p className="mt-5 text-base leading-7 text-zinc-400 font-light max-w-3xl">
                {exp.summary}
              </p>

              {/* Tags refinados - Estilo Píldora de Cristal */}
              <div className="mt-6 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 text-[11px] font-medium text-zinc-300 bg-white/[0.03] border border-white/5 rounded-full transition-colors hover:border-rose-500/20 hover:text-white"
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