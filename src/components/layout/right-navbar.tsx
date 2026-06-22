"use client";
import { HiOutlineBriefcase, HiOutlineHome, HiOutlineSquares2X2, HiOutlineUser, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const items = [
  { id: "hero",       label: "Inicio",      icon: <HiOutlineHome /> },
  { id: "projects",  label: "Proyectos",   icon: <HiOutlineSquares2X2 /> },
  { id: "experience",label: "Experiencia", icon: <HiOutlineBriefcase /> },
  { id: "about",     label: "Sobre mí",    icon: <HiOutlineUser /> },
  { id: "contact",   label: "Contacto",    icon: <HiOutlineChatBubbleLeftRight /> },
];

export default function RightNavbar({ mobile = false }) {
  const handleScroll = (id: string) => {
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
    <>
      {mobile && (
        <div className="fixed bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/80 to-transparent pointer-events-none z-40 lg:hidden" />
      )}

      <nav
        className={`liquid-glass flex z-50 transition-all ${
          mobile
            ? "flex-row justify-around w-[92%] max-w-125 p-3 mb-1 rounded-[2.5rem] border border-white/10"
            : "md:flex-col md:w-18 gap-3 p-3"
        }`}
      >
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className="group relative overflow-hidden grid h-14 w-14 md:h-12 md:w-12 place-items-center rounded-2xl border border-white/15 bg-white/10 text-white transition-colors duration-200 hover:bg-white/20 hover:border-white/25 active:scale-95"
          >
            <span className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none bg-linear-to-br from-white/20 via-white/5 to-transparent" />
            <span className="relative z-10">{item.icon}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
