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
        <div className="grid grid-cols-3 p-1.5 gap-5 items-center w-full text-left">

            {/* 🔹 Title — Animates ONLY scale and margin to avoid color flicker */}
            <div className={`
                justify-self-start origin-left 
                transition-[transform,margin] duration-500 ease-in-out
                ${isExpanded ? "scale-130 md:scale-110 ml-5" : "ml-0"} 
            `}>
                <h3 className="text-md md:text-xl lg:text-2xl font-medium whitespace-nowrap text-inherit">
                    {name}
                </h3>
            </div>

            {/* 🔹 Tech Icons (Visible only when collapsed) */}
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

            {/* 🔹 Date + Chevron */}
            <div className="justify-self-end flex items-center gap-3 font-semibold">
                <span className="text-sm md:text-md opacity-80">
                    {date}
                </span>
                <UpDownChevron isOpen={isExpanded} />
            </div>
        </div>
    );
}