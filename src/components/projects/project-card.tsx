import { Project } from "@/data/projects";
import ProjectImageCarousel from "./project-image-carousel";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="grid grid-cols-1 items-stretch gap-6 xl:grid-cols-[minmax(260px,auto)_minmax(0,1fr)] xl:gap-8">
      <div className="h-full">
        <ProjectImageCarousel images={project.images} title={project.title} />
      </div>

      <div className="flex h-full flex-col justify-between liquid-glass rounded-3xl p-5 ">
        <div>
          <h3 className="mb-4 text-2xl font-semibold md:text-3xl">
            {project.title}
          </h3>

          <p className="leading-7 text-zinc-300 md:text-lg font-extralight">
            {project.description}
          </p>

          <ul className=" mt-4 list-disc space-y-2 pl-5 text-zinc-300 md:text-sm font-extralight">
            {project.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className=" liquid-glass px-4 py-2 text-sm md:text-basetransition-all hover:bg-white/[0.03] border border-white/5 rounded-2xl"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={`${project.id}-${link.label}`}
                href={link.url}
                className="liquid-glass inline-flex items-center gap-3 rounded-full px-4 py-3 text-sm text-white  hover:-translate-y-0.5 duration-300 ease-out hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] active:scale-95 active:translate-y-0 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)] md:text-base"
              >
                {link.label}
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-black">
                  ↗
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}