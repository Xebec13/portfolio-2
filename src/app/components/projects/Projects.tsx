"use client";
import { useState, useMemo } from "react";
import ProjectItem from "./ProjectItem";
import { projectData } from "./ProjectData";
import MiniDivider from "../utils/MiniDivider";

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Optymalizacja: Odwracamy tablicę tylko raz (lub gdy zmieni się projectData)
  const sortedProjects = useMemo(() => {
    return [...projectData].reverse();
  }, []);

  return (
    <section id="projects" className="min-h-screen p-3 md:p-13 bg-zinc-200 text-neutral-900">
      {/* 
         Header Grid:
         Musi idealnie pasować do siatki wewnątrz ProjectItem -> ProjectHeader.
         Jeśli ProjectHeader używa np. 'grid-cols-3', tutaj też musi tak być.
      */}
      <div className="mt-10 grid grid-cols-3 p-2 gap-3 font-semibold uppercase text-sm md:text-2xl">
        <span className="text-left">Projects</span>
        <span className="text-left">Tech</span>
        <span className="text-right">Date</span>
      </div>
      
      <MiniDivider type="main" />
      
      {/* Projects list */}
      <div className="flex flex-col">
        {sortedProjects.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            isExpanded={expandedId === project.id}
            onToggle={() =>
              setExpandedId((prev) => (prev === project.id ? null : project.id))
            }
          />
        ))}
      </div>
    </section>
  );
}