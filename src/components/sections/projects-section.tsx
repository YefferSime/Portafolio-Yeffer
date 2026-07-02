"use client";

import { useState } from "react";
import { projects, Project } from "@/data/projects";
import { useInView } from "@/hooks/useInView";
import ProjectCard from "@/components/projects/project-card";
import ProjectDetailModal from "@/components/projects/project-detail-modal";

const ACCENT = "#b1242f";

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const { ref, inView } = useInView();

  return (
    <section
      id="projects"
      className="snap-start py-16 min-h-screen flex flex-col justify-center"
    >
      <div ref={ref} className={`reveal${inView ? " visible" : ""}`}>
        <p className="mb-3 text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-bold flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
          proyectos
        </p>
        <h2 className="mb-2 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
          Proyectos
        </h2>
        <p className="mb-8 text-sm text-zinc-400 max-w-lg leading-relaxed">
          Apps nativas mobile-first y sitios web a medida. Haz clic en{" "}
          <span className="text-zinc-300 font-medium">Ver detalles</span> para más información.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={setSelected}
            />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectDetailModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
