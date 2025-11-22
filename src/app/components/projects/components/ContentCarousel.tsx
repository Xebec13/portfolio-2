"use client"
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

interface ContentCarouselProps {
    images: string[];
    name: string;
}

export default function ContentCarousel({ images, name }: ContentCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(1);
    const [imageSize, setImageSize] = useState(300);
    // Responsive image size
    useEffect(() => {
        const updateSize = () => {
            setImageSize(window.matchMedia("(min-width: 768px)").matches ? 450 : 300);
        };
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    // next / prev (defined before effect so effect can call them safely)
    const next = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prev = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    // Auto-slide: interval runs independently, does NOT get reset by user interaction
    useEffect(() => {
        if (!images || images.length <= 1) return;
        const interval = setInterval(() => {
            // advance automatically
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, 5000); // change every 5s

        return () => clearInterval(interval);
    }, [images, images.length]);


    return (
        <div className="relative bottom-10 flex justify-center items-center overflow-hidden">

            {/* 👉 ABSOLUTE WRAPPER FOR BUTTONS + DOTS */}
            <div className="absolute inset-0 z-30 flex justify-between items-center">

                {/* Dots (center bottom) */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-3">
                    {/* Prev button */}
                    <button
                        onClick={prev}
                        className="mr-5 grid grid-cols-2 gap-1 p-0.5 ease-in-out duration-500 cursor-pointer transition-transform hover:scale-110">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="chevron-prev  border-[2.5px] md:border-3 border-neutral-800 rounded-full"
                            />
                        ))}
                    </button>

                    {/* Dots */}
                    {images.map((_, idx) => (
                        <div
                            key={idx}
                            className={`size-2 md:size-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? "bg-blue-800 scale-110" : "bg-zinc-400"
                                }`}
                        />
                    ))}

                    {/* Next button */}
                    <button
                        onClick={next}
                        className="ml-5 grid grid-cols-2 gap-1 p-1 ease-in-out duration-500 cursor-pointer transition-transform hover:scale-110">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}

                                className="chevron-next  border-[2.5px] md:border-3 border-neutral-800 rounded-full"
                            />
                        ))}
                    </button>
                </div>

            </div>

            {/* Images Wrapper */}
            <div
                className="relative w-full h-[300px] md:h-[450px] flex items-center justify-center"
                
            >
                {(() => {
                    const leftIndex = (activeIndex - 1 + images.length) % images.length;
                    const rightIndex = (activeIndex + 1 + images.length) % images.length;

                    const positions = [
                        { idx: leftIndex, x: "-100%" },
                        { idx: activeIndex, x: "0%" },
                        { idx: rightIndex, x: "100%" },
                    ];

                    return positions.map((pos) => {
                        const isActive = pos.idx === activeIndex;

                        return (
                            <div
                                key={pos.idx}
                                className={`absolute rounded-md transition-all duration-500 ease-in-out ${isActive ? "scale-[1.10] md:scale-[1.3] grayscale-0 opacity-100 z-10" : "scale-[0.90] md:scale-100 grayscale-50 opacity-60 z-0"}`}
                                style={{
                                    width: imageSize,
                                    height: imageSize,
                                    transform: `translateX(${pos.x})`,
                                }}
                            >
                                <Image
                                    src={images[pos.idx]}
                                    alt={`${name} screenshot ${pos.idx + 1}`}
                                    fill
                                    sizes="300px, 450px"
                                    className="rounded-md object-contain"
                                />
                            </div>
                        );
                    });
                })()}
            </div>
        </div>
    );
}