"use client";

import { useState } from "react";
import { Language } from "../data/uiData";
import { useLanguage } from "../utils/LanguageProvider";

interface IntroButtonsProps {
    onSelect: (lang: Language) => void;
}

export default function IntroButtons({ onSelect }: IntroButtonsProps) {
    const { language } = useLanguage();

    // Stan do śledzenia hovera
    const [hovered, setHovered] = useState<Language | null>(null);

    // Logika pozycji suwaka
    const currentTarget = hovered || language;

    return (
        // Wrapper: Ustawia tekst nad przyciskami
        <div className="flex flex-col items-center gap-2">
            
            {/* --- Label (Skromny tekst) --- */}
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-300 font-semibold opacity-70">
                {language === "pl" ? "Wybierz język" : "Choose Language"}
            </span>

            {/* --- Buttons Container --- */}
            <div
                className="relative flex items-center bg-zinc-900/50 rounded-full p-1 w-44 h-12 backdrop-blur-sm shadow-inner cursor-pointer"
                onMouseLeave={() => setHovered(null)}
            >

                {/* 1. SLIDER */}
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
                    onMouseEnter={() => setHovered("pl")}
                    onClick={() => onSelect("pl")}
                    className={`
                        relative z-10 w-1/2 text-center text-sm font-bold uppercase tracking-widest transition-colors duration-100 outline-none cursor-pointer
                        ${currentTarget === "pl" ? "text-neutral-900" : "text-zinc-500"}
                    `}
                >
                    pl
                </button>

                {/* 3. EN BUTTON */}
                <button
                    onMouseEnter={() => setHovered("en")}
                    onClick={() => onSelect("en")}
                    className={`
                        relative z-10 w-1/2 text-center text-sm font-bold uppercase tracking-widest transition-colors duration-100 outline-none cursor-pointer
                        ${currentTarget === "en" ? "text-neutral-900" : "text-zinc-500"}
                    `}
                >
                    en
                </button>

            </div>
        </div>
    );
}