import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function ProfileSidebar() {
    return (
        <div className="flex h-full flex-col justify-between gap-5  p-5  liquid-glass">
            <button className="liquid-glass h-14 place-items-center  over:-translate-y-0.5 duration-300 ease-out hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] active:scale-95 active:translate-y-0 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)]"
                >   Descargar CV
            </button>

            <div className="overflow-hidden rounded-3xl border border-white/10">
                <img
                    src="image/profile2.png"
                    alt="Foto de perfil"
                    className="block h-auto w-full object-cover"
                />
            </div>

            <div className="space-y-2 text-center">
                <p className="text-sm text-zinc-400">Diseño y Desarrollo de Software</p>
                <h2 className="text-2xl font-semibold text-white">Yeffer Sime H.</h2>
                <p className="text-base text-zinc-200">yeffer.sime@gmail.com</p>
                <p className="text-sm text-zinc-400 font-extralight">Lima, Perú</p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
                <a
                    href="#"
                    aria-label="GitHub"
                    className="liquid-glass grid h-10 w-10 place-items-center  over:-translate-y-0.5 duration-300 ease-out hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] active:scale-95 active:translate-y-0 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)]"
                >
                    <FaGithub />
                </a>
                <a
                    href="#"
                    aria-label="LinkedIn"
                    className="liquid-glass grid h-10 w-10 place-items-center  over:-translate-y-0.5 duration-300 ease-out hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] active:scale-95 active:translate-y-0 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)]"
                >

                    <FaLinkedin />
                </a>
              
                <a
                    href="#"
                    aria-label="Facebook"
                   className="liquid-glass grid h-10 w-10 place-items-center  over:-translate-y-0.5 duration-300 ease-out hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] active:scale-95 active:translate-y-0 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)]"
                >
                    <FaFacebook />
                </a>
                <a
                    href="#"
                    aria-label="Whatsapp"
                   className="liquid-glass grid h-10 w-10 place-items-center  over:-translate-y-0.5 duration-300 ease-out hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] active:scale-95 active:translate-y-0 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)]"
                >
                    <FaWhatsapp />
                </a>
            </div>

            <button className="liquid-glass py-4 hover:-translate-y-0.5 duration-300 ease-out hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] active:scale-95 active:translate-y-0 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)]">
                Trabajemos juntos
            </button>
        </div>
    );
}