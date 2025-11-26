import FooterCta from "./FooterCta";

export default function Footer() {
    return (
        // Main Footer Container
        // Designed as a full-screen section (min-h-screen) acting as the final contact area
        <footer 
            id="footer"
            className="relative min-h-screen flex flex-col justify-center gap-10 md:justify-between bg-neutral-900 font-medium p-7 md:p-22 overflow-hidden"
        >
            
            {/* --- Top Section: Social Media Navigation --- */}
            {/* Layout: Aligned to start on mobile, end on desktop */}
            <div className="flex justify-start md:justify-end items-center gap-6 text-zinc-100 text-sm md:text-base uppercase tracking-wide">
                <a 
                    href="https://github.com/Xebec13" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors cursor-pointer"
                >
                    Github
                </a>
                <a 
                    href="https://www.linkedin.com/in/david-hoesen-054257308/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors cursor-pointer"
                >
                    Linkedin
                </a>
            </div>
            
            {/* --- Middle Section: Primary Call-to-Action --- */}
            <FooterCta />

            {/* --- Bottom Section: Legal & Credits --- */}
            {/* Layout: Stacks vertically on mobile, spreads horizontally on desktop */}
            <div className="text-zinc-400 text-sm md:text-base flex flex-col md:flex-row justify-between items-center gap-2">
                <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
                <p className="opacity-50">Designed & Built by Xebec13</p>
            </div>
        </footer>
    );
}