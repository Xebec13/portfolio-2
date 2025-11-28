"use client"; 

import FooterCta from "./FooterCta";
import { useLanguage } from "../context/LanguageProvider";
import { GLOBAL } from "../context/constants";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer 
            id="footer"
            className="relative min-h-screen flex flex-col justify-center gap-10 md:justify-between bg-neutral-900 font-medium p-7 md:p-22 overflow-hidden"
        >
            {/* Social Links z GLOBAL */}
            <div className="flex justify-start md:justify-end items-center gap-6 text-zinc-100 text-sm md:text-base uppercase tracking-wide">
                <a 
                    href={GLOBAL.socials.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors cursor-pointer"
                >
                    {t.footer.links.github}
                </a>
                <a 
                    href={GLOBAL.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors cursor-pointer"
                >
                    {t.footer.links.linkedin}
                </a>
            </div>
            
            <FooterCta />

            <div className="text-zinc-400 text-sm md:text-base flex flex-col md:flex-row justify-between items-center gap-2">
                <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
                <p className="opacity-50">{t.footer.designedBy}</p>
            </div>
        </footer>
    );
}