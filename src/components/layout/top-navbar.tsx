"use client";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { href: "hero",       label: "Inicio" },
  { href: "projects",   label: "Proyectos" },
  { href: "experience", label: "Experiencia" },
  { href: "about",      label: "Sobre mí" },
  { href: "contact",    label: "Contacto" },
];

const accent = "#b1242f";

export default function TopNavbar() {
  const scrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    const container = document.querySelector(".center-scroll") as HTMLElement | null;
    if (container && window.innerWidth >= 1024) {
      const top =
        target.getBoundingClientRect().top -
        container.getBoundingClientRect().top +
        container.scrollTop;
      container.scrollTo({ top, behavior: "smooth" });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className="sticky top-0 z-50 px-6 pt-4 pb-2"
      style={{ willChange: "transform", transform: "translateZ(0)" }}
    >
      <div
        className="relative overflow-hidden mx-auto rounded-[20px]"
        style={{
          maxWidth: 1240,
          border: "1px solid rgba(255,255,255,0.16)",
          background: "rgba(11,9,11,0.55)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.42), inset 0 0 0 1px rgba(255,255,255,0.08)",
        }}
      >
        {/* shine overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            background: "linear-gradient(to bottom right, rgba(255,255,255,0.16), rgba(255,255,255,0.03), transparent)",
            opacity: 0.5,
          }}
        />

        <div className="relative z-10 flex items-center gap-4 px-3 py-2.5" style={{ paddingLeft: 14 }}>

          {/* Identity */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2.75 text-left flex-none min-w-0"
          >
            <div
              className="flex-none overflow-hidden rounded-full"
              style={{ width: 40, height: 40, border: "1px solid rgba(255,255,255,0.22)" }}
            >
              <img
                src="image/profile2.png"
                alt="Yeffer Sime"
                width={40}
                height={40}
                className="block h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0 leading-[1.15]">
              <div className="text-[15px] font-bold text-white tracking-[-0.01em] whitespace-nowrap">
                Yeffer Sime H.
              </div>
              <div className="text-[11px] text-zinc-400 whitespace-nowrap">
                Mobile &amp; Full Stack Dev
              </div>
            </div>
          </button>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-0.5 ml-auto">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="px-3.75 py-2.25 rounded-[11px] text-[13.5px] font-medium text-zinc-300 whitespace-nowrap transition-colors duration-200 hover:bg-white/8 hover:text-white"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Divider */}
          <span
            className="flex-none hidden md:block"
            style={{ width: 1, height: 28, background: "rgba(255,255,255,0.12)" }}
          />

          {/* Social icons */}
          <div className="hidden md:flex gap-1.75 flex-none">
            {[
              { href: "https://github.com/YefferSime",                   label: "GitHub",    icon: <FaGithub size={17} /> },
              { href: "https://www.linkedin.com/in/yeffersimehuarancca/",label: "LinkedIn",  icon: <FaLinkedin size={16} /> },
              { href: "https://wa.link/fcswny",                          label: "WhatsApp",  icon: <FaWhatsapp size={17} /> },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid place-items-center text-white transition-colors duration-200 hover:bg-white/16 hover:-translate-y-px"
                style={{
                  width: 40, height: 40,
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://wa.link/fcswny"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-none inline-flex items-center gap-2.25 font-bold text-white whitespace-nowrap transition-colors duration-200 hover:bg-white/22 hover:-translate-y-px ml-auto md:ml-0"
            style={{
              height: 42,
              padding: "0 20px",
              borderRadius: 13,
              border: "1px solid rgba(255,255,255,0.22)",
              background: "rgba(255,255,255,0.12)",
              fontSize: 13.5,
              letterSpacing: "0.01em",
            }}
          >
            <span
              className="rounded-full flex-none"
              style={{ width: 7, height: 7, background: accent, boxShadow: `0 0 10px ${accent}` }}
            />
            <span className="hidden sm:inline">Trabajemos juntos</span>
            <span className="sm:hidden">Contacto</span>
          </a>
        </div>
      </div>
    </header>
  );
}
