import { Project } from "../ProjectData";


interface ContentInfoSectionProps {
  project: Project;
}

export default function ContentInfoSection({ project }: ContentInfoSectionProps) {
  const { keyWords, icons, review, techReview } = project;

  return (
    // Main Grid Layout: Switches from a vertical stack (mobile) to a 3-column specific layout (desktop)
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 gap-5 lg:gap-x-15 place-items-stretch mb-10">
      
      {/* --- Section 1: Infinite Marquee --- */}
      {/* Duplicates the array 3 times to create a seamless scrolling loop effect via CSS */}
      <ul className="key-font flex items-center self-center shrink-0 max-w-full text-blue-800 text-xs lg:text-sm uppercase whitespace-nowrap overflow-hidden">
        <div className="marquee-track">
          {[...keyWords, ...keyWords, ...keyWords].map((word, idx) => (
            <li key={idx} className="inline-flex items-center gap-5 py-0.5 px-3 tracking-widest">
              {word}
              <div className="size-1 rounded-full bg-blue-900"></div>
            </li>
          ))}
        </div>
      </ul>

      {/* --- Section 2: Tech Stack Badges --- */}
      {/* 
          Layout: Moves from bottom (row 3) on mobile to top-middle (row 1, col 2) on desktop.
          Logic: Extracts the 'aria-label' from the JSX icon element to render text badges.
      */}
      <ul className="key-font flex items-center gap-1 self-start row-start-3 lg:row-start-1 lg:col-start-2 text-sm font-semibold uppercase">
        {icons.map((icon, idx) => (
          <li
            key={idx}
            className="rounded-full text-xs md:text-sm border border-blue-900 bg-blue-600/30 text-blue-950 py-1 px-3"
          >
            {icon.props["aria-label"]}
          </li>
        ))}
      </ul>

      {/* --- Section 3: General Overview --- */}
      {/* Position: First column on desktop */}
      <div className="lg:col-start-1 indent-10">
        <p className="text-base font-medium break-normal leading-relaxed">{review}</p>
      </div>

      {/* --- Section 4: Technical Deep Dive --- */}
      {/* Position: Spans the remaining 2 columns on desktop */}
      <div className="lg:col-start-2 lg:col-span-2 indent-10">
        <p className="text-base font-medium break-normal leading-relaxed">{techReview}</p>
      </div>
    </div>
  );
}