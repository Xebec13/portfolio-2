"use client";

import { useState } from "react";
import AboutOverlay from "./AboutOverlay";
// Change: Import helper function and Type from the new data file location
import { getAboutData, AboutItem } from "./aboutData";
import { useLanguage } from "../context/LanguageProvider";
import { CodingIcon, ProfIcon, CertIcon, HeartIcon } from "../utils/Icons";
// Definition of component props
interface AboutBoxProps {
    globalClass?: string;
}

export default function AboutBox({ globalClass = "" }: AboutBoxProps) {
    // State to track which grid item is currently active/expanded
    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    // Access current language to fetch the correct data set (PL or EN)
    const { language } = useLanguage();
    const currentAboutData = getAboutData(language);
    // Helper: Map index to specific Icon Component
    const getIcon = (index: number) => {
        switch (index) {
            case 0: return <CodingIcon />;
            case 1: return <ProfIcon />;
            case 2: return <CertIcon />;
            case 3: return <HeartIcon />;
            default: return null;
        }
    };
    return (
        // Main Grid Container: Displays category buttons in a 2-column layout
        <div className={`${globalClass} relative grid grid-cols-2 place-items-center gap-3`}>
            {currentAboutData.map((item: AboutItem, idx: number) => {
                const isActive = activeIdx === idx;

                return (
                    // Item Wrapper: Dynamic z-index ensures the active overlay sits on top of sibling elements
                    <div 
                        key={idx}
                        className={`h-full w-full bottom-10 shadow-xl transition-all duration-300 ${isActive ? "z-50" : "z-0"}`} 
                    >
                        {/* Category Trigger Button: Toggles the active state */}
                        <button
                            onClick={() => setActiveIdx(isActive ? null : idx)}
                            className="flex items-center justify-center w-full h-full uppercase text-blue-800 bg-zinc-100 cursor-pointer hover:bg-zinc-50 transition-colors"
                        >
                            <div className="inline-flex items-center gap-1.5">
                                {getIcon(idx)}
                                <p className="text-xs sm:text-lg md:text-xl font-semibold">{item.name}</p>
                            </div>
                        </button>

                        {/* Detailed Content Overlay: Rendered only when this item is active */}
                        <AboutOverlay
                            isActive={isActive}
                            item={item}
                            onClose={() => setActiveIdx(null)} 
                            index={idx} 
                        />
                    </div>
                );
            })}
        </div>
    );
}