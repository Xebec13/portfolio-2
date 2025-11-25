"use client";

import HeroGridBg from "./HeroGridBg";
import Image from "next/image";
import { useIntro } from "../utils/IntroProvider"; 

export default function Hero() {
    const { introFinished } = useIntro();

    // Helper for animations
    const animate = (animationClass: string) => {
        return introFinished ? animationClass : "opacity-0";
    };

    return (
        <section id="home" className="relative flex min-h-screen flex-col items-stretch justify-start md:justify-evenly gap-10 px-5 pb-0 pt-30 md:pb-15 md:px-22 md:pt-35 overflow-hidden">
            
            {/* Background Grid - Visible only on Desktop (md+) */}
            <HeroGridBg />
            
            {/* Content Container */}
            <div className="relative flex flex-col-reverse justify-center gap-5 md:flex-row md:justify-between z-0">
                
                {/* Text Content */}
                <div className="max-w-fit text-[clamp(4.25rem,12vw,15rem)] font-semibold uppercase leading-none text-neutral-900 pointer-events-none">
                    <div className="overflow-hidden">
                        <h1 className={animate("animate-slide-up-h1")}>David</h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1 className={animate("animate-slide-up-h1")}>Hoesen</h1>
                    </div>
                </div>

                {/* Avatar Section */}
                <div className={`${animate("animate-scale-up-img")} relative shrink-0 h-45 w-45 md:w-60 md:h-60 rounded-full bg-linear-to-r from-gray-300/60 to-gray-300/10 pointer-events-auto`}>
                    <Image
                        src="/profile-img1.png"
                        alt="David Hoesen"
                        width={400}
                        height={400}
                        priority
                        className="object-cover w-full h-full rounded-full"
                    />
                </div>
            </div>

            {/* Bottom Text Section */}
            <div className="flex flex-col gap-15 items-start md:flex-row md:justify-between z-0 pointer-events-none">
                <div className="shrink-0 flex items-center p-3 font-semibold">
                    <div className="overflow-hidden">
                        <p className={`${animate("animate-content-slide-up")} text-xl md:text-2xl lg:text-3xl`}>
                            Front-End Developer
                        </p>
                    </div>
                </div>

                <div className="text-[clamp(1.5rem,3vw,4.5rem)] indent-12 md:max-w-1/2 lg-max-w-1/3 font-medium tracking-tighter leading-none text-justify overflow-hidden">
                    <p className={animate("animate-content-slide-up")}>
                        Hello, I’m passionate about creating clean, responsive, and visually sharp interfaces. Let’s create!
                    </p>
                </div>
            </div>
        </section>
    );
}