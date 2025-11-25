"use client";
import { useState } from "react";
import Link from "next/link";
import { NavIcon } from "../utils/Icons"; // Zakładam, że ścieżka jest ok
import { useIntro } from "../utils/IntroProvider";

const navItems = [
    { href: "/#home", label: "Home" }, // Zmieniłem na /#home dla spójności z id="home" w Hero
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#footer", label: "Contact" },
];

const socialLinks = [
    { label: "Linkedin", href: "https://www.linkedin.com/in/david-hoesen-054257308/" },
    { label: "Github", href: "https://github.com/Xebec13" },
];

export default function Navbar() {
    const { introFinished } = useIntro();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    
    // Function to close menu when a link is clicked (UX fix)
    const handleLinkClick = () => setIsOpen(false);

    return (
        <header>
            {/* === Hamburger Button Container === */}
            {/* We apply the intro animation logic here. 
                Button appears only when introFinished is true. */}
            <div className={`fixed top-5 right-5 md:top-5 md:right-7 z-50 transition-all duration-700 ease-out 
                ${introFinished ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
            >
                <NavIcon isOpen={isOpen} onClick={toggleMenu} />
            </div>

            {/* === Overlay Menu === */}
            {/* Changed from <ul> to <aside> overlay wrapper */}
            <aside
                className={`fixed top-0 right-0 h-screen w-full max-w-[75%] md:max-w-[400px] bg-neutral-950 z-40 shadow-2xl
                flex flex-col justify-between pt-24 px-8 pb-10
                transition-transform duration-500 ease-in-out
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* === Navigation Links === */}
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

                {/* === Social Links === */}
                <div className="flex gap-4 text-xs font-medium uppercase text-zinc-400">
                    {socialLinks.map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors duration-300 hover:text-white"
                        >
                            {social.label}
                        </a>
                    ))}
                </div>
            </aside>

            {/* Optional: Backdrop to close menu when clicking outside */}
            {isOpen && (
                <div 
                    onClick={toggleMenu}
                    className="fixed inset-0 bg-black/50 backdrop-blur-xs z-30 transition-opacity" 
                />
            )}
        </header>
    );
}