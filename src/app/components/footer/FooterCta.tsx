"use client";
import { useState } from "react";
import FooterForm from "./FooterForm";

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
            {/* === CTA Text === */}
            <div className="bg-clip-text text-transparent bg-linear-to-r from-zinc-100/90 via-zinc-100/80 to-zinc-100/10">
                <h3 className="text-[clamp(2rem,3.5vw,4rem)] tracking-tight leading-snug">
                    Curious about what we can create together?<br />
                    Let’s bring something extraordinary to life!
                </h3>
            </div>

            {/* === Button + Status indicator === */}
            <div className="flex flex-col-reverse items-start md:flex-row md:items-center gap-10 text-lg">
                <button
                    onClick={handleOpen}
                    className="w-full md:w-fit p-5 bg-zinc-100 text-neutral-900 hover:scale-105 transition-all duration-700 cursor-pointer hover:bg-blue-700 hover:text-zinc-100"
                >
                    Get in Touch
                </button>

                <div className="inline-flex items-center gap-5 text-zinc-100">
                    <div className="relative inline-flex items-center justify-center size-5">
                        {/* Pulsing background circle */}
                        <div className="absolute inset-0 h-full w-full bg-blue-300 rounded-full opacity-75 animate-ping-long" />
                        {/* Central circle */}
                        <div className="relative inset-0 size-3.5 bg-blue-700 rounded-full" />
                    </div>
                    <p>Available For Work</p>
                </div>
            </div>

            {/* === Contact Modal === */}
            {showContact && (
                <div
                    className={`absolute inset-0 grid grid-cols-1 md:grid-cols-2 place-items-center min-h-screen p-5 md:p-18 bg-zinc-100 z-50
                    ${isClosing ? "animate-slide-up-modal" : "animate-slide-down-modal"}`}
                    onAnimationEnd={handleAnimationEnd}
                >
                    {/* === Left Section: Heading, Email, Close Button === */}
                    <div className="justify-self-start space-y-5 md:space-y-15 mt-10">
                        <button
                            onClick={handleClose}
                            className="close-btn-animation absolute top-5 left-5 grid grid-cols-3 gap-2 p-1.5 rounded-sm cursor-pointer transition-all duration-700 ease-in-out hover:scale-110 hover:bg-blue-700"
                        >
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="border-2 md:border-4" />
                            ))}
                        </button>

                        {/* === Heading === */}
                        <h3 className="uppercase text-[clamp(4rem,10vw,11rem)] font-bold leading-tight tracking-tight">
                            Shoot Request
                        </h3>

                        {/* === Email Tag === */}
                        <div className="overflow-hidden">
                            <p className="animate-content-slide-up pl-1.5 text-xl md:text-2xl lg:text-3xl font-semibold">
                                dhoesen@gmail.com
                            </p>
                        </div>
                    </div>

                 
                        <FooterForm />
                    
                </div>
            )}
        </div>
    );
}