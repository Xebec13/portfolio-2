import { UpDownChevron } from "../../utils/Icons";
import { ReactNode } from "react";

interface ProjectHeaderProps {
    name: string;
    date: string;
    icons: ReactNode[];
    isExpanded: boolean;
}

export default function ProjectHeader({
    name,
    date,
    icons,
    isExpanded,
}: ProjectHeaderProps) {
    return (
        // Main Header Grid: Divides the row into 3 distinct sections (Title, Icons, Date)
        <div className="grid grid-cols-3 p-1.5 gap-5 items-center w-full text-left">

            {/* --- Section 1: Project Title --- */}
            {/* Animation: Scales up and shifts right when active to visually transform into a section header */}
            <div className={`
                justify-self-start origin-left 
                transition-[transform,margin] duration-500 ease-in-out
                ${isExpanded ? "scale-130 md:scale-110 ml-5" : "ml-0"} 
            `}>
                <p className="text-base md:text-xl lg:text-2xl font-medium  text-inherit">
                    {name}
                </p>
            </div>

            {/* --- Section 2: Tech Stack Preview --- */}
            {/* Visibility: Fades out when expanded to reduce visual clutter and focus on the detailed content */}
            <div 
                aria-hidden="true"
                className={`
                    justify-self-start grid grid-cols-2 sm:grid-cols-4 place-items-center gap-3 text-xl lg:text-2xl 
                    transition-opacity duration-300
                    ${isExpanded ? "opacity-0" : "opacity-100 delay-200"}
                `}
            >
                {icons.map((icon, idx) => (
                    <span key={idx} className="inline-flex">
                        {icon}
                    </span>
                ))}
            </div>

            {/* --- Section 3: Meta Data & Trigger --- */}
            <div className="justify-self-end flex items-center gap-3 font-semibold">
                <span className="text-sm md:text-base text-inherit">
                    {date}
                </span>
                {/* Visual indicator (Arrow) for the accordion state */}
                <UpDownChevron isOpen={isExpanded} />
            </div>
        </div>
    );
}