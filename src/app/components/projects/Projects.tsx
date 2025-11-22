"use client"
import { useState } from "react";
import ProjectItem from "./ProjectItem";
import { projectData } from "./ProjectData";
import MiniDivider from "../divider/MiniDivider";

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="projects" className="min-h-screen p-5 md:p-13 bg-zinc-200">
      {/* Section header */}
      <div className="mt-10 grid grid-cols-3 p-2 gap-3 font-semibold uppercase text-sm md:text-2xl">
        <span className="justify-self-start">Projects</span>
        <span className="justify-self-start">Tech</span>
        <span className="justify-self-end">Date</span>
      </div>
      <MiniDivider type="main" />
      
      {/* Projects list */}
      <div className="flex flex-col">
        {projectData.slice().reverse().map(project => (
          <ProjectItem
            key={project.id}
            project={project}
            isExpanded={expandedId === project.id}
            onToggle={() =>
              setExpandedId(prev => (prev === project.id ? null : project.id))
            }
          />
        ))}
      </div>
    </section>
  );
}