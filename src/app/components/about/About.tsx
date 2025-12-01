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
        // Main Section Container
        <section
            id="about"
            className="min-h-screen bg-zinc-200 px-5 py-5 md:px-13 md:py-10"
        >
            {/* Section Header */}
            <div className="pb-10 lg:pb-15">
                <h3 className="uppercase text-[clamp(4rem,8.5vw,9rem)] font-semibold leading-none tracking-widest">
                    About Me
                </h3>
            </div>

            {/* Main Content Grid: Switches from 1 column (mobile) to 2 columns (desktop) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 p-2">

                {/* Left Column: Biography & General Info */}
                <AboutContent
                    content={currentInfoContent}
                    globalClass="justify-self-start lg:col-start-1 lg:max-w-[95%] w-full max-w-full"
                />

                {/* Right Column: Interactive Details Box */}
                <AboutBox
                    globalClass="justify-self-center w-full h-full min-h-115 lg:min-h-125 max-h-150 "
                />
            </div>
        </section>
    )
}