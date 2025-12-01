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
    // ZMIANA: Dynamiczne generowanie linków
    // ==========================================
    // Teraz kod jest odporny na zmiany kolejności w globalData.
    // Iterujemy po GLOBAL.navLinks i używamy 'link.key' aby wyciągnąć tekst z 't.nav'.
    const navItems = GLOBAL.navLinks.map((link) => ({
        href: link.href,
        // TypeScript trick: mówimy mu, że link.key to na pewno klucz z t.nav
        label: t.nav[link.key as keyof typeof t.nav] 
    }));

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const handleLinkClick = () => setIsOpen(false);

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
                        {/* Tutaj mapowanie pozostaje bez zmian */}
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