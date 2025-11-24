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
        <div className="grid grid-cols-3 p-1.5 gap-5 place-items-center text-lef">

            {/* 🔹 Title — small when collapsed */}
            <div className={`justify-self-start text-left origin-left ml-0 transition-[opacity,scale,margin] duration-500 ease-in-out ${isExpanded ? "scale-140 ml-5" : ""} `}>

                <h3 className={`text-md md:text-xl lg:text-2xl font-medium`}>
                    {name}
                </h3>
            </div>

            {/* 🔹 Tech Icons (only collapsed) */}
            <div className={`justify-self-start grid grid-cols-2 sm:grid-cols-4 place-items-center gap-3 text-xl lg:text-2xl transition-opacity duration-300 ${isExpanded ? "opacity-0" : "opacity-100"}`}>
                {icons.map((icon, idx) => (
                    <span key={idx} className="inline-flex">
                        {icon}
                    </span>
                ))}
            </div>

            {/* 🔹 Date + Chevron */}
            <div className="justify-self-end flex items-center gap-3 font-semibold">
                <span className="text-sm md:text-md">
                    {date}
                </span>
                <UpDownChevron isOpen={isExpanded} />
            </div>
        </div>
    );
}