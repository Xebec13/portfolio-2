"use client";
import { useState } from "react";
import FooterForm from "./FooterForm";
import { FooterBackChevron } from "../utils/Icons";
import { GLOBAL } from "../context/constants"; // Import Global Data (Email)
import { useLanguage } from "../context/LanguageProvider"; // Import Translations

export default function FooterCta() {
    // State to manage modal visibility and animation lifecycle
    const [showContact, setShowContact] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    // Access current translations
    const { t } = useLanguage();

    // Activates the modal
    const handleOpen = () => {
        setShowContact(true);
        setIsClosing(false);
    };

    // Triggers the closing animation sequence
    const handleClose = () => {
        setIsClosing(true);
    };

    // Unmounts the component only after the exit animation completes to prevent flickering
    const handleAnimationEnd = () => {
        if (isClosing) {
            setShowContact(false);
            setIsClosing(false);
        }
    };

    return (
        <div className="flex flex-col gap-15 justify-center">
            {/* --- Section 1: Main CTA Headline --- */}
            <div className="bg-clip-text text-transparent bg-linear-to-r from-zinc-100/90 via-zinc-100/80 to-zinc-100/10">
                <h3 className="text-[clamp(2rem,3.5vw,4rem)] tracking-tight leading-snug">
                    {t.footer.ctaTitle}<br />
                    {t.footer.ctaSubtitle}
                </h3>
            </div>

            {/* --- Section 2: Action Area (Button & Status) --- */}
            <div className="flex flex-col-reverse items-start md:flex-row md:items-center gap-10 text-lg">
                {/* Trigger Button */}
                <button
                    onClick={handleOpen}
                    className="w-full md:max-w-fit px-5 py-3 rounded-sm bg-zinc-50 text-blue-900 outline-0 outline-transparent drop-shadow-md transition-all duration-500 ease-out hover:bg-zinc-50 hover:outline-3 hover:outline-blue-700 hover:scale-105 cursor-pointer"
                >
                    {t.footer.btn}
                </button>

                {/* Status Indicator */}
                <div className="inline-flex items-center gap-5 text-zinc-100">
                    <div className="relative inline-flex items-center justify-center size-5 ">
                        {/* Animated Ping Effect */}
                        <div className="absolute inset-0 h-full w-full bg-blue-300 rounded-full opacity-75 animate-ping-long" />
                        {/* Core Dot */}
                        <div className="relative inset-0 size-3.5 bg-blue-700 rounded-full" />
                    </div>
                    <p>{t.footer.status}</p>
                </div>
            </div>

            {/* --- Overlay: Contact Form Modal --- */}
            {/* 
                Conditionally rendered. 
                Uses 'absolute inset-0' to take over the entire Footer parent container.
                Handles both entry and exit animations based on 'isClosing' state.
            */}
            {showContact && (
                <div
                    className={`absolute inset-0 grid grid-cols-1 md:grid-cols-2 place-items-center min-h-screen p-5 md:p-18 bg-zinc-200 z-50
                    ${isClosing ? "animate-slide-up-modal" : "animate-slide-down-modal"}`}
                    onAnimationEnd={handleAnimationEnd}
                >
                    {/* Left Column: Navigation & Contact Info */}
                    <div className="justify-self-start space-y-5 md:space-y-15 mt-10 w-full">
                        {/* Close / Back Button */}
                        <FooterBackChevron onClick={handleClose} />

                        {/* Large Heading */}
                        <h3 className="uppercase text-[clamp(4rem,10vw,11rem)] font-bold leading-tight tracking-tight text-neutral-900">
                            {t.form.title}
                        </h3>

                        {/* Direct Email Link using GLOBAL data */}
                        <div className="overflow-hidden">
                            <a 
                                href={`mailto:${GLOBAL.email}`}
                                className="block animate-content-slide-up pl-1.5 text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-900 hover:text-blue-700 transition-colors"
                            >
                                {GLOBAL.email}
                            </a>
                        </div>
                    </div>
                    
                    {/* Right Column: Input Form Component */}
                    <FooterForm />
                </div>
            )}
        </div>
    );
}