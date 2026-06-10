"use client";

export default function AboutSection() {
  const skills = [
    "Kotlin", "SwiftUI", "Laravel", "Django", 
    "React", "Next.js", "TypeScript", "Jetpack Compose", 
    "Room DB", "Firebase", "Figma", "Git"
  ];

  const pillars = [
    { title: "Resiliencia", desc: "Serenidad y resolución bajo presión real.", color: "bg-rose-500/40" },
    { title: "Autodidacta", desc: "Dominio de tecnologías en tiempo récord.", color: "bg-amber-400/40" },
    { title: "Propósito", desc: "Facilitar la vida de quien usa el código.", color: "bg-emerald-400/40" },
    { title: "Adaptabilidad", desc: "De eventos de élite a negocios locales.", color: "bg-blue-400/40" },
    { title: "Optimización", desc: "Ahorro crítico de recursos (batería/datos).", color: "bg-purple-400/40" }
  ];

  return (
    <section id="about" className="snap-start flex min-h-screen flex-col justify-center py-12 md:py-20">
      <p className="mb-3 text-[10px] text-rose-200/40 uppercase tracking-[0.2em] font-bold">• Perfil</p>
      <h2 className="mb-8 text-3xl font-semibold md:text-5xl tracking-tight text-white">Sobre mí</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 items-start"> 
        
        <div className="liquid-glass md:col-span-7 p-8 md:p-10 space-y-8">
          <div className="space-y-6">
            <p className="text-lg leading-8 text-zinc-200 font-light italic border-l border-rose-500/30 pl-5 bg-white/[0.01] py-3">
              "Aprendo lo que sea necesario en una noche si eso significa que el proyecto será un éxito."
            </p>

            <p className="text-base leading-8 text-zinc-400 font-light">
              Vengo de un pueblo donde la tecnología era un sueño lejano. Esa realidad forjó mi carácter y me llevó a ser becario de Beca 18 en TECSUP, transformando la carencia en una curiosidad insaciable por resolver problemas complejos.
            </p>

            <p className="text-base leading-8 text-zinc-400 font-light">
              He pasado de la teoría a la práctica extrema: desde diseñar en Figma hasta ser el soporte técnico en la línea de meta de eventos mundiales.
            </p>
          </div>
          
          <div className="pt-4 border-t border-white/5">
             <h3 className="mb-5 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Stack Tecnológico</h3>
             <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className=" liquid-glass px-3 py-1 text-sm font-medium text-zinc-300 ">
                    {skill}
                  </span>
                ))}
              </div>
          </div>
        </div>

        
        <div className="md:col-span-5 flex flex-col gap-6">
         
          <div className="liquid-glass p-6 border border-white/5">
            <p className="text-[9px] uppercase tracking-widest text-rose-200/40 font-bold">Formación</p>
            <h4 className="mt-2 font-medium text-white text-sm">Diseño y Desarrollo de Software</h4>
            <p className="text-[11px] text-zinc-500 italic mt-1">TECSUP • Becario Beca 18</p>
          </div>
          <div className="liquid-glass p-8 border border-white/5 h-auto"> 
            <p className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold mb-8">Mis Pilares</p>
            <ul className="space-y-7"> 
              {pillars.map((p) => (
                <li key={p.title} className="flex items-start gap-4 group">
                  <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${p.color} shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.05)]`} />
                  <div className="space-y-1">
                    <span className="text-zinc-200 font-bold text-[10px] uppercase tracking-wider block leading-none">{p.title}</span>
                    <p className="text-zinc-500 text-[11px] leading-relaxed font-light">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}