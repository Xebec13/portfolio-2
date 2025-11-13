import FooterCta from "./FooterCta";

export default function Footer() {
    return (
        <footer 
        id="footer"
        className="relative min-h-screen flex flex-col justify-center gap-10 md:justify-between bg-neutral-900 font-medium p-7 md:p-22">
            {/* === Social Links === */}
            <div className="flex justify-start md:justify-end items-center gap-3 text-zinc-100 text-md md:text-lg">
                <p>Github</p>
                <p>Linkedin</p>
            </div>
            
            {/* === Call to Action (separate component) === */}
            <FooterCta />

            {/* === Footer Info === */}
            <div className="text-zinc-100 flex justify-between items-center">
                <p>Footer Info</p>
                <p>Powered by Xebec13</p>
            </div>
        </footer>
    );
}