import { Project } from "../ProjectData";


interface ContentMainSectionProps {
  project: Project;
}

export default function ContentMainSection({ project }: ContentMainSectionProps) {
  const { keyWords, icons, review, techReview } = project;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 gap-5 lg:gap-x-15 place-items-stretch">
      
      {/* Keywords Marquee */}
      <ul className="key-font flex items-center self-center shrink-0 max-w-full text-blue-800 text-sm lg:text-md uppercase whitespace-nowrap overflow-hidden">
        <div className="marquee-track">
          {[...keyWords, ...keyWords, ...keyWords].map((word, idx) => (
            <li key={idx} className="inline-flex items-center gap-5 py-0.5 px-3">
              {word}
              <div className="size-2 rounded-full bg-blue-800"></div>
            </li>
          ))}
        </div>
      </ul>

      {/* Tech Icons (text version) */}
      <ul className="key-font flex items-center gap-1 self-start row-start-3 lg:row-start-1 lg:col-start-2 text-sm font-bold uppercase">
        {icons.map((icon, idx) => (
          <li
            key={idx}
            className="rounded-full text-xs md:text-md border border-blue-800 bg-blue-500/40 text-blue-900 py-0.5 px-3"
          >
            {icon.props["aria-label"]}
          </li>
        ))}
      </ul>

      {/* Review */}
      <div className="lg:col-start-1 indent-10">
        <p className="text-[clamp(1rem,1.25vw,2.25rem)] font-medium">{review}</p>
      </div>

      {/* Tech Review */}
      <div className="lg:col-start-2 lg:col-span-2 indent-10">
        <p className="text-[clamp(1rem,1.25vw,2.25rem)] font-medium">{techReview}</p>
      </div>
    </div>
  );
}