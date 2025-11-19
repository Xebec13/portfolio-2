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
                className=" inline-flex shadow-2xs transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(calc(50% - ${imageSize / 2}px - ${activeIndex * imageSize}px))`,
                }}
            >
                {images.map((src, idx) => {
                    const isActive = idx === activeIndex;

                    return (
                        <div
                            key={idx}
                            className={`relative shrink-0 transition-transform duration-500 ease-in-out ${isActive ? "scale-[1.10] md:scale-[1.3] opacity-[85] z-10" : "scale-[0.90] md:scale-[0.85] z-0 opacity-60"
                                }`}
                            style={{
                                width: `${imageSize}px`,
                                height: `${imageSize}px`,
                            }}
                        >
                            <Image
                                src={src}
                                alt={`${name} screenshot ${idx + 1}`}
                                fill
                                sizes="300px, 450px"
                                className="rounded-md object-contain"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}