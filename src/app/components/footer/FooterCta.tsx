"use client";
import { useState } from "react";
import FooterForm from "./FooterForm";
import { FooterBackChevron } from "../utils/Icons"; // Upewnij się, że ścieżka jest ok

export default function FooterCta() {
    const [showContact, setShowContact] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    // === Handle opening modal ===
    const handleOpen = () => {
        setShowContact(true);
        setIsClosing(false);
    };

    // === Handle closing modal ===
    const handleClose = () => {
        setIsClosing(true);
    };

    // === After close animation ends, hide modal completely ===
    const handleAnimationEnd = () => {
        if (isClosing) {
            setShowContact(false);
            setIsClosing(false);
        }
    };

    return (
        <div className="flex flex-col gap-15 justify-center">
            {/* === CTA Text (Twoje oryginalne style) === */}
            <div className="bg-clip-text text-transparent bg-linear-to-r from-zinc-100/90 via-zinc-100/80 to-zinc-100/10">
                <h3 className="text-[clamp(2rem,3.5vw,4rem)] tracking-tight leading-snug">
                    Curious about what we can create together?<br />
                    Let’s bring something extraordinary to life!
                </h3>
            </div>

            {/* === Button + Status indicator (Twoje oryginalne style) === */}
            <div className="flex flex-col-reverse items-start md:flex-row md:items-center gap-10 text-lg">
                <button
                    onClick={handleOpen}
                    className="w-full md:max-w-fit px-5 py-3 rounded-sm bg-zinc-50 text-blue-900 outline-0 outline-transparent drop-shadow-md transition-all duration-500 ease-out hover:bg-zinc-50 hover:outline-3 hover:outline-blue-700 hover:scale-105 cursor-pointer"
                >
                    Get in Touch
                </button>

                <div className="inline-flex items-center gap-5 text-zinc-100">
                    <div className="relative inline-flex items-center justify-center size-5 ">
                        {/* Pulsing background circle (Twój niebieski ping) */}
                        <div className="absolute inset-0 h-full w-full bg-blue-300 rounded-full opacity-75 animate-ping-long" />
                        {/* Central circle */}
                        <div className="relative inset-0 size-3.5 bg-blue-700 rounded-full" />
                    </div>
                    <p>Available For Work</p>
                </div>
            </div>

            {/* === Contact Modal === */}
            {/* Modal renderuje się warunkowo i przykrywa footer dzięki absolute inset-0 na rodzicu (footerze) */}
            {showContact && (
                <div
                    className={`absolute inset-0 grid grid-cols-1 md:grid-cols-2 place-items-center min-h-screen p-5 md:p-18 bg-zinc-200 z-50
                    ${isClosing ? "animate-slide-up-modal" : "animate-slide-down-modal"}`}
                    onAnimationEnd={handleAnimationEnd}
                >
                    {/* === Left Section: Heading, Email, Close Button === */}
                    <div className="justify-self-start space-y-5 md:space-y-15 mt-10 w-full">
                        {/* Back button */}
                        <FooterBackChevron onClick={handleClose} />

                        {/* === Heading === */}
                        <h3 className="uppercase text-[clamp(4rem,10vw,11rem)] font-bold leading-tight tracking-tight text-neutral-900">
                            Shoot Request
                        </h3>

                        {/* === Email Tag === */}
                        <div className="overflow-hidden">
                            <a 
                                href="mailto:dhoesen@gmail.com"
                                className="block animate-content-slide-up pl-1.5 text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-900 hover:text-blue-700 transition-colors"
                            >
                                dhoesen@gmail.com
                            </a>
                        </div>
                    </div>
                    
                    {/* === Right Section: Form === */}
                    <FooterForm />
                </div>
            )}
        </div>
    );
}