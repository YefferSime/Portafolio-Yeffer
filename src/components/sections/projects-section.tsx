"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/project-card";

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0);

  const prevProject = () => {
    setCurrentProject((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const nextProject = () => {
    setCurrentProject((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const activeProject = projects[currentProject];

  return (
    <section
      id="projects"
      className="snap-start flex min-h-screen flex-col justify-center py-8 md:min-h-[calc(100vh-48px)] md:py-0"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <p className="mb-3 text-sm text-rose-200/80">• proyectos</p>

        <h2 className="mb-8 text-4xl font-semibold md:text-5xl xl:text-6xl">
          Mis proyectos
        </h2>

        <ProjectCard project={activeProject} />

        {projects.length > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prevProject}
              className="liquid-glass grid h-10 w-10 place-items-center  hover:-translate-y-0.5 duration-300 ease-out hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] active:scale-95 active:translate-y-0 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)]"
              aria-label="Proyecto anterior"
            >
              ←
            </button>

            <div className="flex items-center gap-3">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setCurrentProject(index)}
                  className={`h-4 w-4 rounded-full transition ${
                    index === currentProject ? "bg-white" : "bg-gray-700"
                  }  hover:-translate-y-0.5 duration-300 ease-out hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] active:scale-95 active:translate-y-0 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)]`}
                  aria-label={`Ir al proyecto ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="liquid-glass grid h-10 w-10 place-items-center  hover:-translate-y-0.5 duration-300 ease-out hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] active:scale-95 active:translate-y-0 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)]"
              aria-label="Proyecto siguiente"
            >
              →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}