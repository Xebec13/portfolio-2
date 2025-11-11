import ProjectItem from "./ProjectItem";
import { projectInfo } from "./projectInfo";
export default function Projects() {
    return (
        <section id="projects" className="min-h-screen p-4 md:p-8 scroll-mt-50">
            {/* Section header */}
            <div className="grid grid-cols-3 p-2 gap-3 font-semibold uppercase text-sm md:text-xl">
                <span className="justify-self-start">Projects</span>
                <span className="justify-self-start">Tech</span>
                <span className="justify-self-end">Date</span>
            </div>
            <div className="h-1 bg-linear-to-r from-neutral-950 to-neutral-900 mb-4" />

            {/* Projects list */}
            <div className="flex flex-col">
                {projectInfo.slice().reverse().map((project) => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};
