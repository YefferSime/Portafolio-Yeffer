export default function AboutSection() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Kotlin",
    "Jetpack Compose",
    "Firebase",
    "MySQL",
  ];

  return (
    <section
      id="about"
      className="flex min-h-auto flex-col justify-center py-8 md:min-h-[calc(100vh-48px)] md:py-0"
    >
      <p className="mb-3 text-sm text-rose-200/80">• Sobre mí</p>
      <h2 className="mb-5 text-3xl font-semibold md:text-5xl">Sobre mí</h2>

      <p className="max-w-3xl text-base leading-8 text-zinc-400">
        Soy desarrollador de software y me gusta construir productos visualmente
        limpios, bien estructurados y con buenas prácticas.
      </p>

      <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-400">
        Trabajo tanto en frontend web como en desarrollo móvil, y me interesa
        mucho la experiencia de usuario y la arquitectura del proyecto.
      </p>

      <h3 className="mt-7 mb-3 text-xl font-semibold">Habilidades</h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}