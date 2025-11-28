"use client";
import { useState } from "react";
import Link from "next/link";
import { NavIcon } from "../utils/Icons";
import { useIntro } from "../utils/IntroProvider";
import { useLanguage } from "../context/LanguageProvider"; // Import Context
import { GLOBAL } from "../context/constants"; // Import Constants

export default function Navbar() {
    // Access global state to sync navbar appearance with the intro animation
    const { introFinished } = useIntro();

    // Access translation helper (t) and toggle function
    const { t, language, toggleLanguage } = useLanguage();

    // Local state for toggling the side menu
    const [isOpen, setIsOpen] = useState(false);

    // Configuration: Main navigation links targeting section IDs.
    // Defined INSIDE the component to access dynamic translations via 't'.
    const navItems = [
        { href: GLOBAL.navLinks[0].href, label: t.nav.home },
        { href: GLOBAL.navLinks[1].href, label: t.nav.projects },
        { href: GLOBAL.navLinks[2].href, label: t.nav.about },
        { href: GLOBAL.navLinks[3].href, label: t.nav.contact },
    ];

    const toggleMenu = () => setIsOpen((prev) => !prev);

    // UX Handler: Automatically close the menu when a navigation link is clicked
    const handleLinkClick = () => setIsOpen(false);

    // Helper: Animation class for elements appearing after intro
    const fadeClass = introFinished
        ? "opacity-100 translate-y-0"
        : "opacity-0 -translate-y-10";

    return (
        <header>
            {/* --- Toggle Button Container (Top Right) --- */}
            <div className={`fixed top-5 right-5 md:top-5 md:right-7 z-50 transition-all duration-700 ease-out ${fadeClass}`}>
                <NavIcon isOpen={isOpen} onClick={toggleMenu} />
            </div>

            {/* --- Slide-out Side Menu --- */}
            {/* Layout: Fixed positioning off-screen (translate-x-full) sliding in when 'isOpen' is true. */}
            <aside
                className={`fixed top-0 right-0 h-screen w-full max-w-[75%] md:max-w-[400px] bg-neutral-950 z-40 shadow-2xl
                flex flex-col justify-between pt-24 px-8 pb-10
                transition-transform duration-500 ease-in-out
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Navigation Links */}
                <nav>
                    <ul className="flex flex-col space-y-6 text-zinc-200 text-3xl md:text-4xl font-semibold uppercase">
                        {navItems.map((item, i) => (
                            <li key={i} className="overflow-hidden">
                                <Link
                                    href={item.href}
                                    onClick={handleLinkClick}
                                    className="block transition-colors duration-300 hover:text-blue-600"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Footer Section: Social Links from GLOBAL */}
                <div className="flex gap-4 text-xs font-medium uppercase text-zinc-400">
                    <a
                        href={GLOBAL.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300 hover:text-white"
                    >
                        {t.footer.links.linkedin}
                    </a>
                    <a
                        href={GLOBAL.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300 hover:text-white"
                    >
                        {t.footer.links.github}
                    </a>
                </div>
            </aside>

            {/* --- Backdrop Overlay --- */}
            {/* UX: Allows closing the menu by clicking outside the sidebar area */}
            {isOpen && (
                <div
                    onClick={toggleMenu}
                    className="fixed inset-0 bg-black/50 z-30 transition-opacity"
                />
            )}
        </header>
    );
}
