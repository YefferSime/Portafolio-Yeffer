export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex min-h-auto flex-col justify-center py-8 md:min-h-[calc(100vh-48px)] md:py-0"
    >
      <p className="mb-3 text-sm text-rose-200/80">• Inicio</p>

      <h1 className="mb-5 text-4xl font-semibold leading-tight md:text-6xl">
        Desarrollador Mobile & Frontend
      </h1>

      <p className="max-w-3xl text-base leading-8 text-zinc-400">
        Construyo aplicaciones modernas con enfoque en rendimiento, buena
        experiencia de usuario y arquitectura limpia.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
          Next.js
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
          React
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
          TypeScript
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
          Tailwind
        </span>
      </div>

      <div className="mt-7 grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <p className="text-zinc-400">Proyectos</p>
          <h2 className="mt-3 text-4xl font-semibold">10+</h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <p className="text-zinc-400">Tecnologías</p>
          <h2 className="mt-3 text-4xl font-semibold">15+</h2>
        </div>
      </div>
    </section>
  );
}