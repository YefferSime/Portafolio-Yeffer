"use client";

const items = [
  { id: "hero", label: "Inicio", icon: "⌂" },
  { id: "projects", label: "Proyectos", icon: "▣" },
  { id: "about", label: "Sobre mí", icon: "◉" },
  { id: "contact", label: "Contacto", icon: "✉" },
];

export default function RightNavbar() {
  const handleScroll = (id: string) => {
    const container = document.querySelector(".center-scroll");
    const target = document.getElementById(id);

    if (!container || !target) return;

    const containerElement = container as HTMLElement;
    const containerRect = containerElement.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const offsetTop =
      targetRect.top - containerRect.top + containerElement.scrollTop;

    containerElement.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <nav className="flex w-auto flex-row items-center justify-center gap-3 rounded-3xl border border-white/10 bg-black/5 p-3 shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xs md:w-[72px] md:flex-col md:py-4 md:px-2">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => handleScroll(item.id)}
          className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:-translate-y-0.5 hover:border-red-500/70 hover:shadow-[0_0_18px_rgba(220,38,38,0.2)]"
          aria-label={item.label}
          title={item.label}
        >
          <span>{item.icon}</span>
        </button>
      ))}
    </nav>
  );
}