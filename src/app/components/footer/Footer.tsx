import FooterCta from "./FooterCta";

export default function Footer() {
    return (
        <footer 
            id="footer"
            // Use relative to contain absolute children if needed
            className="relative min-h-screen flex flex-col justify-center gap-10 md:justify-between bg-neutral-900 font-medium p-7 md:p-22 overflow-hidden"
        >
            
            {/* === Social Links === */}
            <div className="flex justify-start md:justify-end items-center gap-6 text-zinc-100 text-md md:text-lg uppercase tracking-wide">
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
            
            {/* === Call to Action === */}
            <FooterCta />

            {/* === Footer Info === */}
            <div className="text-zinc-400 text-sm md:text-base flex flex-col md:flex-row justify-between items-center gap-2">
                <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
                <p className="opacity-50">Designed & Built by Xebec13</p>
            </div>
        </footer>
    );
}