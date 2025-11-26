import { BackChevron } from "../utils/Icons";
import { AboutItem } from "./aboutData";

interface AboutOverlayProps {
  isActive: boolean;
  item: AboutItem;
  onClose: () => void;
  index: number;
}

export default function AboutOverlay({ isActive, item, onClose, index }: AboutOverlayProps) {
  // Styles mapping
  const badgesStyle = [
    "bg-blue-500/40 text-blue-900 border-blue-200",   
    "bg-blue-300/40 text-blue-700 border-blue-200",   
    "bg-zinc-300/40 text-zinc-900 border-zinc-300",   
    "bg-zinc-300/20 text-zinc-500 border-zinc-200",   
  ];
  const badgeClass = badgesStyle[index] || "bg-zinc-300 text-neutral-900";

  // Animation Origin mapping
  const originAnim = [
    "origin-top-left",     
    "origin-top-right",    
    "origin-bottom-left",  
    "origin-bottom-right", 
  ];
  const originClass = originAnim[index] || "origin-center";

  return (
    <div
    data-lenis-prevent="true"
      className={`
        absolute inset-0 z-50 flex flex-col px-6 py-6 lg:px-12 lg:py-10 bg-zinc-100 
        transform transition-all duration-300 ease-in-out shadow-2xl
        overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-400
        ${originClass}
        ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"}
      `}
    >
      {/* Header with Back Button */}
      <div className="flex items-center justify-between mb-4 shrink-0">
         <div className="inline-flex items-center gap-2">
            <BackChevron onClick={onClose} />
            <h2 className="text-md md:text-xl font-bold uppercase tracking-wide text-blue-900">
                {item.name}
            </h2>
         </div>
      </div>

      {/* Content Scrollable Area */}
      <div className="flex flex-col gap-4">
        
        {/* Section 1: Badges */}
        <div>
            <h3 className="mb-2 text-blue-800 text-sm sm:text-md font-bold uppercase opacity-80">
            {item.headings[0]}
            </h3>
            <div className="flex flex-wrap gap-1.5">
            {item.badges?.map((badge, idx) => (
                <span
                key={idx}
                className={`py-1 px-2.5 text-[10px] md:text-xs font-semibold rounded-md border ${badgeClass}`}
                >
                {badge}
                </span>
            ))}
            </div>
        </div>

        {/* Section 2: List Content */}
        <div>
            {item.headings[1] && (
                <h3 className="mb-2 mt-2 text-blue-800 text-sm sm:text-md font-bold uppercase opacity-80">
                {item.headings[1]}
                </h3>
            )}

            <div className="space-y-3 font-medium text-neutral-800">
            {item.content.map((line, idx) => {
                // TYPE GUARD: Simple String
                if (typeof line === "string") {
                return (
                    <p key={idx} className="text-xs sm:text-sm md:text-base leading-relaxed border-l-2 border-zinc-300 pl-3">
                    {line}
                    </p>
                );
                }

                // TYPE GUARD: Complex Object (Project/Contribution)
                return (
                <div key={idx} className="bg-white/50 p-3 rounded-lg border border-zinc-200">
                    <div className="flex items-baseline justify-between mb-1">
                        <a
                        href={line.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-800 font-bold underline decoration-blue-300 hover:decoration-blue-800 text-sm md:text-base"
                        >
                        {line.name}
                        </a>
                    </div>

                    <p className="text-xs md:text-sm text-zinc-700 mb-2">{line.description}</p>

                    {/* Contributions List */}
                    {line.contributions && (
                        <ul className="list-disc list-inside text-xs text-zinc-600 space-y-0.5 mb-2">
                            {line.contributions.map((c, i) => <li key={i}>{c}</li>)}
                        </ul>
                    )}

                    {/* Mini Tech Stack */}
                    <div className="flex flex-wrap gap-1">
                    {line.techStack?.map((tech, i) => (
                        <span key={i} className="text-[9px] uppercase tracking-wider font-bold text-zinc-400 bg-zinc-100 px-1.5 py-0.5 rounded">
                        {tech}
                        </span>
                    ))}
                    </div>
                </div>
                );
            })}
            </div>
        </div>
      </div>
    </div>
  );
}