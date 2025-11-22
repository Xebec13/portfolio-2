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
        // Wrapper grid for all buttons
        <div className={`${globalClass} relative grid grid-cols-2 p-3 gap-3 bg-zinc-300 bottom-0 lg:bottom-10`}>
            {aboutData.map((item: AboutItem, idx: number) => {
                const isActive = activeIdx === idx;

                return (
                    <div className="h-full w-full bottom-10" key={idx}>
                        {/* Button with icon and text */}
                        <button
                            onClick={() => setActiveIdx(isActive ? null : idx)}
                            className="flex items-center justify-center w-full h-full uppercase text-blue-800 bg-zinc-100 cursor-pointer"
                        >
                            <div className="inline-flex items-center gap-1.5">

                                {/* Button text */}
                                <p className="text-xs sm:text-sm md:text-xl font-semibold">{item.name}</p>
                            </div>
                        </button>

                        {/* Overlay content */}
                        <AboutOverlay
                            isActive={isActive}
                            item={item} // przekazujemy cały obiekt
                            onClose={() => setActiveIdx(null)} index={idx} />
                    </div>
                );
            })}
        </div>
    );
}