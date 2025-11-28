"use client";

import HeroGridBg from "./HeroGridBg";
import Image from "next/image";
import { useIntro } from "../utils/IntroProvider"; 
import { useLanguage } from "../context/LanguageProvider";
import { GLOBAL } from "../context/constants"; // Import Global Data

export default function Hero() {
    // Access global state to determine if the intro sequence has completed
    const { introFinished } = useIntro();
    const { t } = useLanguage();

    // Helper: Split full name (e.g., "David Hoesen") into first and last name 
    // to match the specific 2-line layout design.
    const [firstName, lastName] = GLOBAL.name.split(" ");

    // Helper: Conditionally applies animation classes. 
    // Elements remain hidden (opacity-0) until the intro sequence finishes.
    const animate = (animationClass: string) => {
        return introFinished ? animationClass : "opacity-0";
    };

    return (
        // Main Hero Container
        // Uses flex layout to distribute content vertically (justify-evenly on desktop)
        <section id="home" className="relative flex min-h-screen flex-col items-stretch justify-start md:justify-evenly gap-10 px-5 pb-0 pt-30 md:pb-15 md:px-22 md:pt-35 overflow-hidden">
            
            {/* Background Layer: Decorative Grid (Desktop only) */}
            <HeroGridBg />
            
            {/* --- Upper Section: Main Heading & Avatar --- */}
            {/* Layout: Column-reverse on mobile (Image top, text bottom), Row on desktop */}
            <div className="relative flex flex-col-reverse justify-center gap-5 md:flex-row md:justify-between z-0">
                
                {/* Typography: Main Name Heading (Dynamic from GLOBAL) */}
                {/* pointer-events-none ensures text doesn't interfere with interactions underneath */}
                <div className="max-w-fit text-[clamp(4.25rem,12vw,15rem)] font-semibold uppercase leading-none text-neutral-900 pointer-events-none">
                    <div className="overflow-hidden">
                        <h1 className={animate("animate-slide-up-h1")}>{firstName}</h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1 className={animate("animate-slide-up-h1")}>{lastName}</h1>
                    </div>
                </div>

                {/* Profile Image Container */}
                {/* pointer-events-auto restores interactivity for this specific element */}
                <div className={`${animate("animate-scale-up-img")} relative shrink-0 h-45 w-45 md:w-60 md:h-60 lg:w-70 lg:h-70 rounded-full bg-linear-to-r from-gray-300/60 to-gray-300/10 pointer-events-auto`}>
                    <Image
                        src="/profile-img1.png"
                        alt={GLOBAL.name} // Dynamic Alt Text
                        width={400}
                        height={400}
                        priority
                        className="object-cover w-full h-full rounded-full"
                    />
                </div>
            </div>

            {/* --- Lower Section: Role Title & Short Bio --- */}
            <div className="flex flex-col gap-15 items-start md:flex-row md:justify-between z-0 pointer-events-none">
                
                {/* Job Title / Role (Dynamic from GLOBAL) */}
                <div className="shrink-0 flex items-center p-3 font-semibold">
                    <div className="overflow-hidden">
                        <p className={`${animate("animate-content-slide-up")} text-xl md:text-2xl lg:text-3xl`}>
                            {GLOBAL.role}
                        </p>
                    </div>
                </div>

                {/* Introduction Text (Localized from Translations) */}
                <div className="text-[clamp(1.5rem,3vw,4.5rem)] indent-12 md:max-w-1/2 lg-max-w-1/3 font-medium tracking-tighter leading-none text-justify overflow-hidden">
                    <p className={`${animate("animate-content-slide-up")} whitespace-pre-line`}>
                        {t.hero.bio}
                    </p>
                </div>
            </div>
        </section>
    );
}