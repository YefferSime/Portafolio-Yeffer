"use client";
import { HiOutlineBriefcase, HiOutlineHome, HiOutlineSquares2X2, HiOutlineUser, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { useActiveSection } from "@/hooks/useActiveSection";

const items = [
  { id: "hero",        label: "Inicio",      icon: <HiOutlineHome /> },
  { id: "projects",   label: "Proyectos",   icon: <HiOutlineSquares2X2 /> },
  { id: "experience", label: "Experiencia", icon: <HiOutlineBriefcase /> },
  { id: "about",      label: "Sobre mí",    icon: <HiOutlineUser /> },
  { id: "contact",    label: "Contacto",    icon: <HiOutlineChatBubbleLeftRight /> },
];

const SECTION_IDS = items.map((i) => i.id);
const ACCENT = "#b1242f";

export default function RightNavbar({ mobile = false }) {
  const activeSection = useActiveSection(SECTION_IDS);

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
        aria-label="Navegación móvil"
        className={`flex z-50 transition-all ${
          mobile
            ? "flex-row justify-around w-[92%] max-w-125 p-3 mb-1 rounded-4xl"
            : "liquid-glass md:flex-col md:w-18 gap-3 p-3"
        }`}
        style={mobile ? {
          background: "rgba(11,9,11,0.72)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          border: "1px solid rgba(255,255,255,0.16)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.42), inset 0 0 0 1px rgba(255,255,255,0.08)",
          paddingBottom: `calc(0.75rem + env(safe-area-inset-bottom, 0px))`,
        } : undefined}
      >
        {items.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
              className={`group relative overflow-hidden grid h-14 w-14 md:h-12 md:w-12 place-items-center rounded-2xl border transition-colors duration-200 active:scale-95 ${
                isActive
                  ? "bg-white/20 border-white/30 text-white"
                  : "border-white/15 bg-white/10 text-white hover:bg-white/20 hover:border-white/25"
              }`}
            >
              {isActive && (
                <span
                  className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full z-20"
                  style={{ background: ACCENT, boxShadow: `0 0 6px ${ACCENT}` }}
                />
              )}
              <span className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none bg-linear-to-br from-white/20 via-white/5 to-transparent" />
              <span className="relative z-10">{item.icon}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
