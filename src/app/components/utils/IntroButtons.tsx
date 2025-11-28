"use client";

import { Language } from "../context/translations"

interface IntroButtonsProps {
    onSelect: (lang: Language) => void;
}

export default function IntroButtons({ onSelect }: IntroButtonsProps) {
    return (
        // Container: Subtle border styling, rounded corners, and flex alignment
        <div className="flex items-center gap-6 border border-zinc-400 p-5 rounded-md transition-500 transition-colors ease-in-out hover:border-zinc-200">
            
            {/* PL Button */}
            <button
                onClick={() => onSelect("pl")}
                className="text-sm font-medium uppercase tracking-widest text-zinc-400 outline-none transition-all duration-500 ease-in-out hover:text-white hover:scale-110 cursor-pointer"
            >
                pl
            </button>

            {/* Separator */}
            <span className="text-xs text-zinc-700 opacity-50">|</span>

            {/* EN Button */}
            <button
                onClick={() => onSelect("en")}
                className="text-sm font-medium uppercase tracking-widest text-zinc-400 outline-none transition-all duration-500 ease-in-out hover:text-white hover:scale-110 cursor-pointer"
            >
                en
            </button>
            
        </div>
    );
}