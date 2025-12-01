"use client";

import { useState } from "react";
import { Language } from "../data/uiData";
import { useLanguage } from "../utils/LanguageProvider";

interface IntroButtonsProps {
    onSelect: (lang: Language) => void;
}

export default function IntroButtons({ onSelect }: IntroButtonsProps) {
    const { language } = useLanguage();
    
    // Stan do śledzenia, na który przycisk najechała myszka.
    // null oznacza, że myszka jest poza kontenerem.
    const [hovered, setHovered] = useState<Language | null>(null);

    // LOGIKA POZYCJI:
    // Jeśli na coś najeżdżamy (hovered), suwak idzie tam.
    // Jeśli nie (null), suwak wraca do wybranego języka (language).
    const currentTarget = hovered || language;

    return (
        // Container: Dodajemy onMouseLeave, aby zresetować hover po wyjechaniu myszką
        <div 
            className="relative flex items-center bg-zinc-900/50 rounded-full p-1 w-24 h-9 backdrop-blur-sm shadow-inner cursor-pointer"
            onMouseLeave={() => setHovered(null)}
        >
            
            {/* 1. SLIDER (Biały 'kafelek') */}
            <div
                className={`
                    absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] 
                    bg-zinc-100 rounded-full shadow-md pointer-events-none
                    transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
                    ${currentTarget === "en" ? "translate-x-full" : "translate-x-0"}
                `}
            />

            {/* 2. PL BUTTON */}
            <button
                // Ustawiamy hover przy najechaniu
                onMouseEnter={() => setHovered("pl")}
                onClick={() => onSelect("pl")}
                className={`
                    relative z-10 w-1/2 text-center text-xs font-bold uppercase tracking-widest transition-colors duration-300 outline-none cursor-pointer
                    ${currentTarget === "pl" ? "text-neutral-900" : "text-zinc-500"}
                `}
            >
                pl
            </button>
                    <span className="text-xs text-zinc-700 opacity-50">|</span>
            {/* 3. EN BUTTON */}
            <button
                // Ustawiamy hover przy najechaniu
                onMouseEnter={() => setHovered("en")}
                onClick={() => onSelect("en")}
                className={`
                    relative z-10 w-1/2 text-center text-xs font-bold uppercase tracking-widest transition-colors duration-300 outline-none cursor-pointer
                    ${currentTarget === "en" ? "text-neutral-900" : "text-zinc-500"}
                `}
            >
                en
            </button>
            
        </div>
    );
}