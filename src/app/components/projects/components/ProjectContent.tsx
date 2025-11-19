import { Project } from "../ProjectData";
import { ContentAchiSection, ContentInfoSection } from "../components"

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
  return (
    <>
      <ContentInfoSection project={project} />
      <ContentAchiSection project={project} />
    </>
  );
}