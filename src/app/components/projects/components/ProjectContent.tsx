import { Project } from "../ProjectData";
import { ContentAchiSection, ContentInfoSection } from "../components"

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
  return (
    // React Fragment used to group sections without adding redundant DOM nodes to the layout
    <>
      {/* --- Top Section: Overview --- */}
      {/* Renders the project description, tech stack badges, and keyword marquee */}
      <ContentInfoSection project={project} />

      {/* --- Bottom Section: Deep Dive --- */}
      {/* Renders key achievements list, external links, and the image carousel */}
      <ContentAchiSection project={project} />
    </>
  );
}