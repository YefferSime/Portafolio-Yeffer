export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex min-h-auto flex-col justify-center py-8 md:min-h-[calc(100vh-48px)] md:py-0"
    >
      <p className="mb-3 text-sm text-rose-200/80">• Proyectos</p>
      <h2 className="mb-5 text-3xl font-semibold md:text-5xl">Mis proyectos</h2>

      <div className="mt-2 grid grid-cols-1 items-stretch gap-5 md:grid-cols-[280px_minmax(0,1fr)]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <img
            src="/project-1.png"
            alt="Proyecto destacado"
            className="block w-full rounded-2xl"
          />
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <h3 className="mb-3 text-2xl font-semibold">Proyecto destacado</h3>

          <p className="leading-7 text-zinc-400">
            Aquí puedes poner la descripción de uno de tus proyectos más
            importantes, qué resolvía, qué stack usaste y cuál fue tu aporte.
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-400">
            <li>Diseño de interfaz moderna</li>
            <li>Integración con APIs</li>
            <li>Responsive y optimización</li>
          </ul>

          <div className="mt-5 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
              React
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
              Next.js
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
              Tailwind
            </span>
          </div>

          <button className="mt-5 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:-translate-y-0.5 hover:border-red-500/70 hover:shadow-[0_0_18px_rgba(220,38,38,0.2)]">
            Ver proyecto
          </button>
        </div>
      </div>
    </section>
  );
}