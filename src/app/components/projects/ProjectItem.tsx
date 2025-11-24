import { Project } from "./ProjectData";
import { ProjectHeader, ProjectContent, ProjectContentWrapper } from "./components";
import MiniDivider from "../utils/MiniDivider";

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
  const {
    name,
    date,
    icons,
  } = project;

  return (
    <>
      <button
        onClick={onToggle}
        className="w-full p-2 bg-zinc-200 text-neutral-900 cursor-pointer transition-colors duration-700 ease-in-out hover:text-zinc-200 hover:bg-black "
      >
        <ProjectHeader
          name={name}
          date={date}
          icons={icons}
          isExpanded={isExpanded}
        />
      </button>


      <ProjectContentWrapper isExpanded={isExpanded}>
        <ProjectContent project={project} />
      </ProjectContentWrapper>


      {/* Divider */}
      <MiniDivider type="off" />
    </>
  );
}