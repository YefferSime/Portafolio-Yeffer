"use client";
import { HiOutlineBriefcase, HiOutlineHome, HiOutlineSquares2X2, HiOutlineUser, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const items = [
  { id: "hero", label: "Inicio", icon: <HiOutlineHome /> },
  { id: "projects", label: "Proyectos", icon: <HiOutlineSquares2X2 /> },
  { id: "experience", label: "Experiencia", icon: <HiOutlineBriefcase /> },
  { id: "about", label: "Sobre mí", icon: <HiOutlineUser /> },
  { id: "contact", label: "Contacto", icon: <HiOutlineChatBubbleLeftRight /> },
];

export default function RightNavbar({ mobile = false }) {
  const handleScroll = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

   
    const container = document.querySelector(".center-scroll");
    
    if (container && window.innerWidth >= 1024) {
      const containerElement = container as HTMLElement;
      const targetTop = target.offsetTop;

      containerElement.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    } else {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {mobile && (
        <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-40 lg:hidden" />
      )}

      <nav className={`liquid-glass flex z-50 transition-all ${
        mobile 
          ? "flex-row justify-around w-[92%] max-w-[500px] p-3 mb-1 rounded-[2.5rem] border border-white/10" 
          : "md:flex-col md:w-[72px] gap-3 p-3"
      }`}>
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className="group relative overflow-hidden grid h-14 w-14 md:h-12 md:w-12 place-items-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] active:scale-95 active:translate-y-0 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)]"
          >
            <span className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none bg-gradient-to-br from-white/40 via-white/10 to-transparent" />
            <span className="relative z-10">{item.icon}</span>
          </button>
        ))}
      </nav>
    </>
  );
}