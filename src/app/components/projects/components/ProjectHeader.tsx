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
        <div className="grid grid-cols-3 p-1.5 gap-5 place-items-center text-left">

            {/* 🔹 Title — small when collapsed */}
            <h3 className={`justify-self-start text-md md:text-xl lg:text-2xl pl-0 font-medium transition-[opacity,scale,padding] duration-700 ease-in-out ${isExpanded ? "scale-150 pl-10" : ""}`}>
                {name}
            </h3>

            {/* 🔹 Tech Icons (only collapsed) */}
            <div className={`justify-self-start grid grid-cols-2 sm:grid-cols-4 place-items-center gap-3 text-xl lg:text-2xl transition-opacity duration-500 ${isExpanded ? "opacity-0" : "opacity-100"}`}>
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
                <div className="pt-1.5 grid grid-cols-3 gap-1">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className={`chevron-btn border-2 border-current  ${isExpanded ? "open":""}`}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}