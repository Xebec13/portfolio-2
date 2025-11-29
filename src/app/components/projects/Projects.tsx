"use client";
import { useState, useMemo } from "react";
import ProjectItem from "./ProjectItem";
import { getProjects } from "../data/ProjectData"; // Make sure path matches your structure
import MiniDivider from "../utils/MiniDivider";
import { useLanguage } from "../utils/LanguageProvider"; 

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  // Accessing both current language (for data fetching) and translations (for UI text)
  const { language, t } = useLanguage();

  // Optimization: Fetch projects based on the selected language.
  // We use .reverse() here to display the newest projects (end of array) at the top.
  const sortedProjects = useMemo(() => {
    const data = getProjects(language); 
    // Create a shallow copy with [...] before reversing to avoid mutating the source
    return [...data].reverse();
  }, [language]);

  return (
    <section id="projects" className="min-h-screen p-3 md:p-13 bg-zinc-200 text-neutral-900">
      
      {/* Table Header with Localized Labels */}
      <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 p-2 gap-3 font-semibold uppercase text-lg md:text-2xl">
        <h3 className="justify-self-start">
          {t.projects.headerProject}
        </h3>
        <h3 className="justify-self-start hidden lg:block">
          {t.projects.headerTech}
        </h3>
        <h3 className="justify-self-end">
          {t.projects.headerDate}
        </h3>
      </div>
      
      <MiniDivider type="main" />
      
      {/* Render the list of projects */}
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