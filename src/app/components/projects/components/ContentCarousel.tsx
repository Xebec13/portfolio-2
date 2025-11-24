"use client";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

interface ContentCarouselProps {
    images: string[];
    name: string;
}

export default function ContentCarousel({ images, name }: ContentCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const changeIndex = useCallback(
        (delta: number) => {
            setActiveIndex((prev) => (prev + delta + images.length) % images.length);
        },
        [images.length]
    );

    // Auto-slide
    useEffect(() => {
        if (!images || images.length <= 1) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images, images.length]);

    return (
        <div className="relative bottom-10 h-[40vh] md:h-[50vh] w-full ">

            {/* SLIDES */}
            <div className="relative w-full h-full ">
                {images.map((img, idx) => {
                    const delta = idx - activeIndex;
                    let translateX = delta * 100;

                    // loop around
                    if (delta < -1) translateX += images.length * 100;
                    if (delta > 1) translateX -= images.length * 100;

                    const isActive = idx === activeIndex;

                    return (
                        <div
                            key={idx}
                            className={`
                absolute top-1/2 left-1/2 -translate-x-1/2 
                transition-all duration-500 ease-in-out
                ${isActive ? "z-10" : "z-0"}
                ${isActive ? "opacity-100" : "opacity-50"}
                }
              `}
                            style={{
                                transform: `translateX(${translateX}%) translateY(-50%) scale(${isActive ? 1.1 : 0.9})`,
                            }}
                        >
                            <div className="relative w-100 h-70 lg:w-160 lg:h-110">
                                <Image
                                    src={img}
                                    alt={`${name} screenshot ${idx + 1}`}
                                    fill
                                    className="object-contain w-full h-full rounded-md"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* BUTTONS + DOTS */}
            <div className="absolute -bottom-5 left-0 right-0 flex items-center justify-center gap-6 z-30 pb-4">
                {/* Prev */}
                <button
                    type="button"
                    onClick={() => changeIndex(-1)}
                    className="grid grid-cols-2 gap-1 p-1 transition-transform hover:scale-110 cursor-pointer"
                >
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="chevron-prev border-[2.5px] md:border-3 border-neutral-800 rounded-full"
                        />
                    ))}
                </button>

                {/* Dots */}
                <div className="flex items-center justify-center gap-3">
                    {images.map((_, idx) => (
                        <div
                            key={idx}
                            className={`size-2 md:size-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? "bg-blue-800 scale-110" : "bg-zinc-400"
                                }`}
                        />
                    ))}
                </div>

                {/* Next */}
                <button
                    type="button"
                    onClick={() => changeIndex(1)}
                    className="grid grid-cols-2 gap-1 p-1 transition-transform hover:scale-110 cursor-pointer"
                >
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="chevron-next border-[2.5px] md:border-3 border-neutral-800 rounded-full"
                        />
                    ))}
                </button>
            </div>
        </div>
    );
}