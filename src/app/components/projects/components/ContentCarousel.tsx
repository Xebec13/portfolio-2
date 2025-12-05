"use client";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { NextChevron, PrevChevron } from "../../icons/Icons";

interface ContentCarouselProps {
    images: string[];
    name: string;
}

export default function ContentCarousel({ images, name }: ContentCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    
    // Data Safety: Ensure images is always an array to prevent crashes
    const safeImages = images || [];
    const length = safeImages.length;

    // Navigation Handler: Updates index with wrap-around logic
    const changeIndex = useCallback(
        (delta: number) => {
            if (length === 0) return;
            setActiveIndex((prev) => (prev + delta + length) % length);
        },
        [length]
    );

    // Effect: Auto-play functionality (rotates every 5 seconds)
    useEffect(() => {
        if (length <= 1) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % length);
        }, 5000);

        return () => clearInterval(interval);
    }, [length]);

    if (length === 0) return null;

    return (
        // Main Carousel Container
        <div className="relative bottom-10 h-[40vh] md:h-[50vh] w-full ">

            {/* --- Slides Area --- */}
            <div className="relative w-full h-full ">
                {safeImages.map((img, idx) => {
                    // --- Infinite Loop Positioning Logic ---
                    // Calculate distance from the currently active slide
                    let delta = idx - activeIndex;

                    // Shortest Path Algorithm: 
                    // Adjusts delta to ensure slides wrap around the nearest edge rather than scrolling through the whole list.
                    // E.g., moving from index 0 to last index goes "left" (-1) instead of "right" (+length).
                    if (delta > length / 2) delta -= length;
                    else if (delta < -length / 2) delta += length;

                    // Calculate visual position
                    const translateX = delta * 100;
                    const isActive = idx === activeIndex;

                    // Visibility Optimization: 
                    // Hide slides that are "far away" (outside the -1 to 1 range) to prevent them 
                    // from visually flying across the screen during wrap-around.
                    const isVisible = Math.abs(delta) <= 1; 

                    return (
                        <div
                            key={idx}
                            className={`
                                absolute top-1/2 left-1/2 -translate-x-1/2 
                                transition-all duration-500 ease-in-out
                                ${isActive ? "z-10" : "z-0"}
                                ${isActive ? "opacity-100" : "opacity-50"}
                                ${!isVisible ? "opacity-0 pointer-events-none" : ""} 
                            `}
                            style={{
                                transform: `translateX(${translateX}%) translateY(-50%) scale(${isActive ? 1.1 : 0.9})`,
                            }}
                        >
                            {/* Image Wrapper: Maintains aspect ratio and centers content */}
                            <div className="relative w-[80vw] max-w-[700px] aspect-4/3">
                                <Image
                                    src={img}
                                    alt={`${name} screenshot ${idx + 1}`}
                                    fill
                                    sizes="(max-width: 1024px) 1024px, 400px"
                                    className="object-contain object-center w-full h-full"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* --- Navigation Controls (Buttons & Indicators) --- */}
            <div className="absolute -bottom-6 left-0 right-0 flex items-center justify-center gap-6 z-30 pb-4">
                {/* Previous Slide Button */}
                <PrevChevron onClick={() => changeIndex(-1)} />

                {/* Pagination Dots */}
                <div className="flex items-center justify-center gap-3">
                    {safeImages.map((_, idx) => (
                        <div
                            key={idx}
                            className={`size-2 md:size-2.5 rounded-full transition-all duration-300 ${
                                idx === activeIndex ? "bg-blue-800 scale-110" : "bg-zinc-400"
                            }`}
                        />
                    ))}
                </div>

                {/* Next Slide Button */}
                <NextChevron onClick={() => changeIndex(1)} />
            </div>
        </div>
    );
}