"use client";
import { useState, useMemo } from "react";
import ProjectItem from "./ProjectItem";
import { projectData } from "./ProjectData";
import MiniDivider from "../utils/MiniDivider";

export default function Projects() {
  // State to track which project accordion is currently expanded
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Optimization: Memoize the reversed array to prevent unnecessary recalculations on re-renders
  const sortedProjects = useMemo(() => {
    return [...projectData].reverse();
  }, []);

  return (
    // Main Section Container
    <section id="projects" className="min-h-screen p-3 md:p-13 bg-zinc-200 text-neutral-900">
      
      {/* --- Table Header --- */}
      {/* Layout: Grid with 2 columns on mobile, 3 on desktop (Tech column is hidden on small screens) */}
      <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 p-2 gap-3 font-semibold uppercase text-lg md:text-2xl">
        <span className="justify-self-start">Projects</span>
        <span className="justify-self-start hidden lg:block">Tech</span>
        <span className="justify-self-end">Date</span>
      </div>
      
      {/* Separator Line */}
      <MiniDivider type="main" />
      
      {/* --- Project List Container --- */}
      <div className="flex flex-col">
        {sortedProjects.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            isExpanded={expandedId === project.id}
            // Handler: Toggles the expansion state. If clicking the already open item, close it (set to null).
            onToggle={() =>
            setExpandedId((prev) => (prev === project.id ? null : project.id))
            }
          />
        ))}
      </div>
    </section>
  );
}