"use client";
import { useState } from "react";
import Link from "next/link";
import { NavIcon } from "../icons/Icons";
import { useIntro } from "../utils/IntroProvider";
import { useLanguage } from "../utils/LanguageProvider"; 
import { GLOBAL } from "../data/globalData"; 

export default function Navbar() {
    const { introFinished } = useIntro();
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    // ==========================================
    // CUSTOM SCROLL FUNCTION
    // ==========================================
    // duration = time in milliseconds
    const smoothScrollToBottom = (duration: number) => {
        const startPosition = window.scrollY;
        // Target: absolute bottom of the document
        const targetPosition = document.documentElement.scrollHeight - window.innerHeight;
        const distance = targetPosition - startPosition;
        let startTime: number | null = null;

        // Modern Easing Function (easeInOutQuad) from easings.net
        // Input 'x' is the progress from 0 to 1
        const easeInOutQuad = (x: number): number => {
            return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
        };

        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            
            // Calculate progress (0 to 1), ensuring it doesn't exceed 1
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Apply easing to the progress
            const easedProgress = easeInOutQuad(progress);

            // Calculate current scroll position based on eased progress
            const run = startPosition + (distance * easedProgress);
            
            window.scrollTo(0, run);

            // Continue animation until time is up
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            } else {
                // Ensure exact final position
                window.scrollTo(0, targetPosition);
            }
        };

        requestAnimationFrame(animation);
    };

    const navItems = GLOBAL.navLinks.map((link) => ({
        // Maintain custom href logic based on key
        href: link.key === "footer" ? "footer" : link.href, 
        key: link.key, 
        label: t.nav[link.key as keyof typeof t.nav] 
    }));

    const toggleMenu = () => setIsOpen((prev) => !prev);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, key: string) => {
        setIsOpen(false); 

        // Check if key is "footer" (or "contact")
        if (key === "contact" || key === "footer") {
            e.preventDefault(); 
            
            // Use custom scroll with duration (1500ms)
            smoothScrollToBottom(1500); 
        }
    };

    const fadeClass = introFinished
        ? "opacity-100 translate-y-0"
        : "opacity-0 -translate-y-10";

    return (
        <header>
            <div className={`fixed top-5 right-5 md:top-5 md:right-7 z-50 transition-all duration-700 ease-out ${fadeClass}`}>
                <NavIcon isOpen={isOpen} onClick={toggleMenu} />
            </div>

            <aside
                className={`fixed top-0 right-0 h-screen w-full max-w-[75%] md:max-w-[400px] bg-neutral-950 z-40 shadow-2xl
                flex flex-col justify-between pt-24 px-8 pb-10
                transition-transform duration-500 ease-in-out
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <nav>
                    <ul className="flex flex-col space-y-6 text-zinc-200 text-3xl md:text-4xl font-semibold uppercase">
                        {navItems.map((item, i) => (
                            <li key={i} className="overflow-hidden">
                                <Link
                                    href={item.href}
                                    onClick={(e) => handleLinkClick(e, item.key)}
                                    className="block transition-colors duration-300 hover:text-blue-600"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex gap-4 text-xs font-medium uppercase text-zinc-400">
                    <a
                        href={GLOBAL.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300 hover:text-blue-600"
                    >
                        {t.footer.links.linkedin}
                    </a>
                    <a
                        href={GLOBAL.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300 hover:text-blue-600"
                    >
                        {t.footer.links.github}
                    </a>
                </div>
            </aside>

            {isOpen && (
                <div
                    onClick={toggleMenu}
                    className="fixed inset-0 bg-black/50 z-30 transition-opacity"
                />
            )}
        </header>
    );
}