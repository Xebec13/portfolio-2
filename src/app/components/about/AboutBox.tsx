"use client";

import { useState } from "react";
import AboutOverlay from "./AboutOverlay";
import { aboutData, AboutItem } from "./aboutData";

interface AboutBoxProps {
    globalClass?: string;
}

export default function AboutBox({ globalClass = "" }: AboutBoxProps) {
    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    return (
        <div className={`${globalClass} relative grid grid-cols-2 place-items-center gap-3`}>
            {aboutData.map((item: AboutItem, idx: number) => {
                const isActive = activeIdx === idx;

                return (
                    <div 
                        key={idx}
                        // CRITICAL FIX: Z-index manipulation
                        // When active, this container jumps to z-50 to cover siblings with its overlay.
                        // When inactive, z-0.
                        className={`h-full w-full bottom-10 shadow-xl transition-all duration-300 ${isActive ? "z-50" : "z-0"}`} 
                    >
                        {/* Main Button */}
                        <button
                            onClick={() => setActiveIdx(isActive ? null : idx)}
                            className="flex items-center justify-center w-full h-full uppercase text-blue-800 bg-zinc-100 cursor-pointer hover:bg-zinc-50 transition-colors"
                        >
                            <div className="inline-flex items-center gap-1.5">
                                <p className="text-xs sm:text-lg md:text-xl font-semibold">{item.name}</p>
                            </div>
                        </button>

                        {/* Overlay Content */}
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