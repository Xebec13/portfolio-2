"use client";

import AboutContent from "./AboutContent";
import AboutBox from "./AboutBox";
// Change: Import helper function instead of static array
import { getInfoContent } from "../data/aboutData";
import { useLanguage } from "../utils/LanguageProvider";

export default function About() {
    // Access global language state
    const { language } = useLanguage();

    // Retrieve localized biography text based on current language
    const currentInfoContent = getInfoContent(language);

    return (
        
            <section
                className="min-h-screen bg-zinc-200 px-15 py-20 border-2 border-pink-500"
            >
                {/* Section Header */}
                <div className="py-5">
                    <h3 className="uppercase text-[clamp(4rem,8.5vw,9rem)] font-semibold leading-none tracking-widest">
                        About Me
                    </h3>
                </div>

                {/* Main Content Grid: Switches from 1 column (mobile) to 2 columns (desktop) */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Column: Biography & General Info */}
                    <AboutContent
                        content={currentInfoContent}
                        globalClass="justify-self-start lg:col-start-1 lg:max-w-[95%] w-full max-w-full"
                    />

                    {/* Right Column: Interactive Details Box */}
                    <AboutBox
                        globalClass="justify-self-center h-full w-full "
                    />
                </div>
            </section>
    )
}