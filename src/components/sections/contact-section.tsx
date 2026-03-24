export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex min-h-[50vh] flex-col justify-center py-8 md:py-0"
    >
      <p className="mb-3 text-sm text-rose-200/80">• Contacto</p>
      <h2 className="mb-5 text-3xl font-semibold md:text-5xl">Hablemos</h2>

      <p className="max-w-3xl text-base leading-8 text-zinc-400">
        Si tienes una idea, proyecto o vacante, estaré encantado de conversar
        contigo.
      </p>

      <p className="mt-4 text-base text-zinc-200">correo@ejemplo.com</p>
    </section>
  );
}