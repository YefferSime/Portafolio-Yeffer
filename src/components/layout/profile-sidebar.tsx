export default function ProfileSidebar() {
  return (
    <div className="flex h-full flex-col justify-between gap-5 rounded-3xl border border-white/10 bg-black/1 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xs">
      <button className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:-translate-y-0.5 hover:border-red-500/70 hover:shadow-[0_0_18px_rgba(220,38,38,0.2)]">
        Descargar CV
      </button>

      <div className="overflow-hidden rounded-3xl border border-white/10">
        <img
          src="image/logo.png"
          alt="Foto de perfil"
          className="block h-auto w-full object-cover"
        />
      </div>

      <div className="space-y-2">
        <p className="text-sm text-zinc-400">Desarrollador de Software</p>
        <h2 className="text-2xl font-semibold text-white">Tu Nombre</h2>
        <p className="text-base text-zinc-200">correo@ejemplo.com</p>
        <p className="text-sm text-zinc-400">Tu ciudad, país</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href="#"
          aria-label="GitHub"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-0.5 hover:border-red-500/70 hover:shadow-[0_0_18px_rgba(220,38,38,0.2)]"
        >
          GH
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-0.5 hover:border-red-500/70 hover:shadow-[0_0_18px_rgba(220,38,38,0.2)]"
        >
          IN
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-0.5 hover:border-red-500/70 hover:shadow-[0_0_18px_rgba(220,38,38,0.2)]"
        >
          IG
        </a>
        <a
          href="#"
          aria-label="Facebook"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-0.5 hover:border-red-500/70 hover:shadow-[0_0_18px_rgba(220,38,38,0.2)]"
        >
          FB
        </a>
      </div>

      <button className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:-translate-y-0.5 hover:border-red-500/70 hover:shadow-[0_0_18px_rgba(220,38,38,0.2)]">
        Trabajemos juntos
      </button>
    </div>
  );
}