"use client";
import { useState } from "react";
import FooterForm from "./FooterForm";

export default function FooterCta() {
    const [showContact, setShowContact] = useState(false);

    return (
        <div className="space-y-15">
            {/* === CTA text === */}
            <div className="bg-clip-text text-transparent bg-linear-to-r from-zinc-100/90 via-zinc-100/80 to-zinc-100/10">
                <h3 className="text-[clamp(2rem,3.5vw,4rem)] tracking-tight leading-snug">
                    Curious about what we can create together?<br />
                    Let’s bring something extraordinary to life!
                </h3>
            </div>
            {/* === Button + Status === */}
            <div className="flex flex-col-reverse items-start md:flex-row md:items-center gap-10 text-lg">
                <button
                    onClick={() => setShowContact(true)}
                    className="w-full md:w-fit p-5 bg-zinc-100 text-neutral-900 hover:scale-105 transition-all duration-700 cursor-pointer hover:bg-blue-700 hover:text-zinc-100"
                >
                    Get in Touch
                </button>

                <div className="inline-flex items-center gap-5 text-zinc-100">
                    <div className="relative inline-flex items-center justify-center size-5">
                        {/* Pulsing background */}
                        <div className="absolute h-full w-full inset-0 bg-blue-300 rounded-full opacity-75 animate-ping-long" />
                        {/* Central circle */}
                        <div className="relative size-3.5 inset-0 bg-blue-700 rounded-full" />
                    </div>
                    <p>Available For Work</p>
                </div>
            </div>

            {/* === Contact Modal === */}
            {showContact && (
                <div className="absolute inset-0 grid grid-cols-2 place-items-center min-h-screen p-7 md:p-22 bg-zinc-100 z-50 border-2 border-pink-500">

                    <div className="d">
                        <button
                            onClick={() => setShowContact(false)}
                            className="absolute top-5 left-5 p-4 text-neutral-900 border-2"
                        >
                            
                        </button>
                        {/* === Heading === */}
                        <h3 className="uppercase text-9xl font-bold tracking-tight">
                            Shoot Request
                        </h3>

                        {/* === Email Tag === */}
                        <div className="overflow-hidden">
                        <p className="animate-content-slide-up pl-1.5 text-xl md:text-2xl lg:text-3xl font-semibold">dhoesen@gmail.com</p>
                       
                        </div>
                    </div>
                    <FooterForm />
                </div>
            )}
        </div>
    );
}