"use client";

import { Project } from "./ProjectData";
import { ProjectHeader, ProjectContent, ProjectContentWrapper } from "./components";
import MiniDivider from "../utils/MiniDivider";

// ==========================================
// Props Definition
// ==========================================
interface ProjectItemProps {
  project: Project;     // Data object containing project details
  isExpanded: boolean;  // State controlling whether the accordion is open
  onToggle: () => void; // Handler to switch the expanded state
}

export default function ProjectItem({
  project,
  isExpanded,
  onToggle,
}: ProjectItemProps) {
  const { name, date, icons } = project;

  return (
    // Single Project Row Container
    <div className="w-full">
      
      {/* --- Accordion Trigger --- */}
      {/* 
        The main button that toggles the project details.
        - Accessibility: uses 'aria-expanded' to inform screen readers of the state.
        - Interaction: Changes visual style (inverted colors) on hover and when active.
      */}
      <button
        onClick={onToggle}
        aria-expanded={isExpanded}
        className={`
          group w-full p-2 cursor-pointer transition-all duration-500 ease-in-out
          border-b border-transparent
          ${isExpanded 
            ? "bg-zinc-200 text-neutral-900" // State: Active/Expanded (Light theme match)
            : "bg-zinc-200 text-neutral-900 hover:bg-neutral-900 hover:text-zinc-200" // State: Default -> Hover (Inverted high contrast)
          }
        `}
      >
        {/* Row Header: Displays Summary (Name, Date, Tech Icons) */}
        <ProjectHeader
          name={name}
          date={date}
          icons={icons}
          isExpanded={isExpanded}
        />
      </button>

      {/* --- Collapsible Content Section --- */}
      {/* Wrapper manages the height transition (opening/closing animation) */}
      <ProjectContentWrapper isExpanded={isExpanded}>
        {/* Detailed Content: Description, Links, Images */}
        <ProjectContent project={project} />
      </ProjectContentWrapper>

      {/* --- Visual Separator --- */}
      {/* Renders the bottom line or spacer. Configured to 'off' means secondary */}
      <MiniDivider type="off" />
    </div>
  );
}