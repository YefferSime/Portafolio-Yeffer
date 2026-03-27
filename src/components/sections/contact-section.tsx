"use client";

import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="snap-start flex min-h-screen flex-col justify-center py-8 md:min-h-[calc(100vh-48px)] md:py-0"
    >
      <p className="mb-3 text-[10px] text-rose-200/40 uppercase tracking-[0.2em] font-bold">• Contacto</p>
      <h2 className="mb-8 text-3xl font-semibold md:text-5xl tracking-tight">Hablemos</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        
      
        <div className="liquid-glass md:col-span-7 flex flex-col justify-center p-8 space-y-6">
          <p className="text-lg leading-8 text-zinc-200 font-light">
            Ya sea para un proyecto deportivo de alto rendimiento o una vacante en tu equipo, estoy listo para aportar mi experiencia y resiliencia.
          </p>
          
          <p className="text-base leading-7 text-zinc-500 font-light">
            Ubicado en Santa Anita, Lima, con disponibilidad para proyectos globales. Si buscas soluciones que mantengan la calma bajo presión, este es el lugar.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <a 
             href="https://mail.google.com/mail/?view=cm&fs=1&to=yeffer.sime@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 transition-all hover:bg-white/[0.03] border border-white/5 rounded-2xl"
            >
              <div className="rounded-xl bg-white/5 p-3 text-zinc-400 group-hover:text-white transition-colors">
                <FaEnvelope size={18} />
              </div>
              <div className="overflow-hidden">
                <p className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold">Email</p>
                <p className="text-sm font-medium text-zinc-300 truncate">yeffer.sime@gmail.com</p>
              </div>
            </a>

            <a 
              href="https://wa.me/51906944910"
              target="_blank"
              className="group flex items-center gap-4 p-4 transition-all hover:bg-white/[0.03] border border-white/5 rounded-2xl"
            >
              <div className="rounded-xl bg-white/5 p-3 text-zinc-400 group-hover:text-white transition-colors">
                <FaWhatsapp size={18} />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold">WhatsApp</p>
                <p className="text-sm font-medium text-zinc-300">+51 906 944 910</p>
              </div>
            </a>
          </div>
        </div>

        {/* Tarjeta de Redes - Estilo iOS Mono */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="liquid-glass p-8 flex-1 flex flex-col justify-between border border-white/5">
            <div>
              <h3 className="text-xl font-semibold text-white tracking-tight">Conectemos</h3>
              <p className="mt-2 text-sm text-zinc-500 leading-relaxed font-light">
                Sigue mis avances en desarrollo móvil y backend o charlemos sobre tecnología.
              </p>
            </div>

            <div className="mt-8 space-y-2">
              <a 
                href="https://github.com/YefferSime" 
                target="_blank"
                className="flex items-center justify-between rounded-xl bg-white/[0.02] p-4 border border-white/5 transition-all hover:bg-white/[0.05] group"
              >
                <div className="flex items-center gap-3">
                  <FaGithub size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
                  <span className="text-sm font-medium text-zinc-300">GitHub</span>
                </div>
                <span className="text-[10px] text-zinc-600 group-hover:text-zinc-300 transition-colors uppercase tracking-widest">Repositorios</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/yeffersimehuarancca/" 
                target="_blank"
                className="flex items-center justify-between rounded-xl bg-white/[0.02] p-4 border border-white/5 transition-all hover:bg-white/[0.05] group"
              >
                <div className="flex items-center gap-3">
                  <FaLinkedin size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
                  <span className="text-sm font-medium text-zinc-300">LinkedIn</span>
                </div>
                <span className="text-[10px] text-zinc-600 group-hover:text-zinc-300 transition-colors uppercase tracking-widest">Perfil</span>
              </a>
            </div>

            <a 
             href="https://wa.link/fcswny"
              className="liquid-glass mt-6 w-full text-center  p-4 font-bold text-sm  hover:-translate-y-0.5 duration-300 ease-out hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] active:scale-95 active:translate-y-0 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)]"
            >
              Enviar Mensaje Directo
            </a>
          </div>

          <div className="liquid-glass p-4 flex items-center justify-center gap-2 text-zinc-600 border border-white/5">
            <FaMapMarkerAlt size={10} />
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Santa Anita • Lima • Perú</span>
          </div>
        </div>
      </div>
    </section>
  );
}