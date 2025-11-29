import { Project } from "../../data/ProjectData";
import { ContentLinks, ContentCarousel } from "../components";

interface ContentAchiSectionProps {
  project: Project;
}

export default function ContentAchiSection({ project }: ContentAchiSectionProps) {
  const { keyAchi, images, href, gitHref, name } = project;

  return (
    // Main Grid Layout: Stacks vertically on mobile (1 col), splits into 1:2 ratio on desktop (3 cols)
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 gap-5 lg:gap-x-15 place-items-stretch">

      {/* --- Left Column: Achievements List & Action Links --- */}
      <div className="flex flex-col">
        <h4 className="text-xl font-bold uppercase text-blue-950">Key Achievements</h4>

        <ul className="mt-4 space-y-4 font-medium">
          {keyAchi.map((achivment, idx) => (
            <li key={idx} className="flex items-center text-base gap-4 tracking-[1.5%] leading-[19px]">
              {/* Custom Bullet Point: Includes a pulsing 'ping' animation for visual emphasis */}
              <div className="relative inline-flex w-5 h-5 min-w-5 items-center justify-center">
                <div className="absolute w-3/4 h-3/4 bg-blue-300 rounded-full opacity-75 animate-ping-long" />
                <div className="relative w-1/2 h-1/2 bg-blue-800 rounded-full" />
              </div>
              {achivment}
            </li>
          ))}
        </ul>

        {/* Navigation buttons (Live Demo & GitHub) */}
        <ContentLinks href={href} gitHref={gitHref} />
      </div>

      {/* --- Right Column: Image Gallery --- */}
      {/* Spans 2 out of 3 columns on desktop to emphasize visual content */}
      <div className="col-span-2 overflow-hidden">
        <ContentCarousel images={images || []} name={name} />
      </div>
    </div>
  );
}