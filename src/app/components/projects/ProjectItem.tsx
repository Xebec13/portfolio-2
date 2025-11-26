"use client";

import { Project } from "./ProjectData";
import { ProjectHeader, ProjectContent, ProjectContentWrapper } from "./components";
import MiniDivider from "../utils/MiniDivider";

// Explicitly define the props interface
interface ProjectItemProps {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function ProjectItem({
  project,
  isExpanded,
  onToggle,
}: ProjectItemProps) {
  const { name, date, icons } = project;

  return (
    <div className="w-full">
      {/* 
        Main Toggle Button 
        - Accessibility: aria-expanded indicates state to screen readers
        - Styling: Dynamic classes for expanded state (Dark mode feeling when active)
      */}
      <button
        onClick={onToggle}
        aria-expanded={isExpanded}
        className={`
          group w-full p-2 cursor-pointer transition-all duration-500 ease-in-out
          border-b border-transparent
          ${isExpanded 
            ? "bg-zinc-200 text-neutral-900" // Active state
            : "bg-zinc-200 text-neutral-900 hover:bg-neutral-900 hover:text-zinc-200" // Default + Hover
          }
        `}
      >
        {/* Header content (Name, Date, Icons) */}
        <ProjectHeader
          name={name}
          date={date}
          icons={icons}
          isExpanded={isExpanded}
        />
      </button>

      {/* Wrapper controls the height animation */}
      <ProjectContentWrapper isExpanded={isExpanded}>
        <ProjectContent project={project} />
      </ProjectContentWrapper>

      {/* Hide divider if item is expanded for a cleaner look */}
      <MiniDivider type="off" />
    </div>
  );
}