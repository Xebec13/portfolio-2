"use client";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { NextChevron, PrevChevron } from "../../utils/Icons";

interface ContentCarouselProps {
    images: string[];
    name: string;
}

export default function ContentCarousel({ images, name }: ContentCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    // Zabezpieczenie na wypadek gdyby images przyszło puste/undefined
    const safeImages = images || [];
    const length = safeImages.length;

    const changeIndex = useCallback(
        (delta: number) => {
            if (length === 0) return;
            setActiveIndex((prev) => (prev + delta + length) % length);
        },
        [length]
    );

    // Auto-slide
    useEffect(() => {
        if (length <= 1) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % length);
        }, 5000);

        return () => clearInterval(interval);
    }, [length]);

    if (length === 0) return null;

    return (
        <div className="relative bottom-10 h-[40vh] md:h-[50vh] w-full ">

            {/* SLIDES */}
            <div className="relative w-full h-full ">
                {safeImages.map((img, idx) => {
                    // --- ULEPSZONA LOGIKA POZYCJONOWANIA ---
                    // Obliczamy dystans od aktywnego slajdu
                    let delta = idx - activeIndex;

                    // Algorytm "Najkrótszej ścieżki" dla efektu nieskończoności:
                    // Jeśli delta jest większa niż połowa długości tablicy,
                    // przesuwamy element wirtualnie w drugą stronę.
                    if (delta > length / 2) delta -= length;
                    else if (delta < -length / 2) delta += length;

                    // Twoje obliczenia pozycji
                    const translateX = delta * 100;
                    const isActive = idx === activeIndex;

                    // Ukrywamy elementy, które są "daleko" (poza widokiem -1, 0, 1),
                    // żeby nie przelatywały przez ekran podczas pętli.
                    const isVisible = Math.abs(delta) <= 1; 

                    return (
                        <div
                            key={idx}
                            // Zachowane Twoje klasy i style
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
                            {/* Zachowany Twój układ obrazka i klasy (w-100, h-70 itd.) */}
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

            {/* BUTTONS + DOTS (Bez zmian) */}
            <div className="absolute -bottom-5 left-0 right-0 flex items-center justify-center gap-6 z-30 pb-4">
                {/* Prev */}
                <PrevChevron onClick={() => changeIndex(-1)} />

                {/* Dots */}
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

                {/* Next */}
                <NextChevron onClick={() => changeIndex(1)} />
            </div>
        </div>
    );
}