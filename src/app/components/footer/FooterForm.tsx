"use client";

import { FormEvent } from "react";
import { useLanguage } from "../utils/LanguageProvider"; // Import Translations

export default function FooterForm() {
    // Access current translations for placeholders and buttons
    const { t } = useLanguage();
    
    // Handler: Intercepts form submission for validation or API integration
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Placeholder for backend integration (e.g., EmailJS, Formspree)
        alert(t.form.successTitle + " (Demo)");
    };

    return (
        // Main Form Section: Centered layout with responsive margin
        <section className="flex flex-col items-center justify-center w-full p-2 bg-zinc-300 text-neutral-900 mt-10 lg:mt-0">
            <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col gap-4">
                
                {/* --- Input Field: Name --- */}
                {/* Styling includes focus transitions and bottom-border effects */}
                <div className="relative group">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder={t.form.namePlaceholder}
                        aria-label="Your Name"
                        className="w-full p-6 bg-zinc-400/50 border-b-2 border-zinc-500 focus:border-blue-800 focus:bg-white focus:outline-none transition-all duration-300 placeholder:text-zinc-500 font-medium"
                    />
                </div>

                {/* --- Input Field: Email --- */}
                <div className="relative group">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder={t.form.emailPlaceholder}
                        aria-label="Your Email"
                        className="w-full p-6 bg-zinc-400/50 border-b-2 border-zinc-500 focus:border-blue-700 focus:bg-white focus:outline-none transition-all duration-300 placeholder:text-zinc-500 font-medium"
                    />
                </div>

                {/* --- Textarea: Message --- */}
                {/* Fixed resize behavior to maintain layout integrity */}
                <div className="relative group">
                    <textarea
                        name="message"
                        id="message"
                        required
                        placeholder={t.form.msgPlaceholder}
                        aria-label="Your Message"
                        rows={5}
                        className="w-full p-6 bg-zinc-400/50 border-b-2 border-zinc-500 focus:border-blue-700 focus:bg-white focus:outline-none transition-all duration-300 placeholder:text-zinc-500 font-medium resize-none"
                    />
                </div>

                {/* --- Submit Action --- */}
                <button
                    type="submit"
                    className="w-full p-5 rounded-sm bg-zinc-50 text-blue-900 border border-transparent drop-shadow-md transition-all duration-700 ease-out hover:bg-blue-50 hover:border-blue-800 cursor-pointer"
                >
                    {t.form.btnSend}
                </button>
            </form>
        </section>
    );
}