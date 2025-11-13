"use client";
import { useState } from "react";
import Link from "next/link";

const navItems = [
    { href: "#home", label: "Home", },
    { href: "#projects", label: "Projects", },
    { href: "#posts", label: "About", },
];

const socialLinks = [
    { label: "Linkedin", href: "https://instagram.com" },
    { label: "Github", href: "https://instagram.com" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle overlay menu state
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <nav className="fixed top-5 right-5 md:top-5 md:right-7 z-20 ">
            {/* === Hamburger button === */}
            <button
                onClick={toggleMenu}
                className={`nav-slide-down relative grid grid-cols-3 gap-2 p-1.5 rounded-sm cursor-pointer  transition-all duration-700 ease-in-out z-10 
                ${isOpen ? "bg-blue-700 hover:bg-zinc-100 hover:scale-110" : "bg-zinc-100 hover:invert hover:scale-110"}`}
            >
                {[...Array(9)].map((_, i) => (
                    <div
                        key={i}
                        className={`border-2 md:border-4 border-current transition-all duration-700 ease-in-out button-animation ${isOpen ? "open" : " "}`}
                    />
                ))}
            </button>

            {/* === Fullscreen overlay menu === */}
            <ul
                className={`fixed top-0 right-0 flex flex-col justify-between pt-20 px-6 h-screen w-2/3 sm:w-1/3 bg-neutral-950 transition-all duration-500 ease-in-out
                ${isOpen ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible"}`}
            >
                {/* === Navigation Links === */}
                <div className="text-zinc-200 text-4xl font-semibold uppercase space-y-5">
                    {navItems.map((item, i) => (
                        <li key={i}>
                            <Link
                                href={item.href}
                                className="transition-colors duration-300 hover:text-blue-700"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </div>

                {/* === Social Links === */}
                <div className="flex gap-2 pb-10 text-xs font-medium uppercase text-zinc-200">
                    {socialLinks.map((social, i) => (
                        <p
                            key={i}
                            className="p-2 cursor-pointer transition-colors duration-300 hover:text-blue-700"
                        >
                            <Link href={social.href} target="_blank" rel="noopener noreferrer">
                                {social.label}
                            </Link>
                        </p>
                    ))}
                </div>
            </ul>
        </nav>
    );
}