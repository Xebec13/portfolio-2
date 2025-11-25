"use client";

import { FormEvent } from "react";

export default function FooterForm() {
    
    // Simple handler to prevent page reload
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Here you would typically add EmailJS or Formspree logic
        alert("Message sent! (Demo)");
    };

    return (
        <section className="flex flex-col items-center justify-center w-full bg-zinc-200 text-neutral-900 mt-10 lg:mt-0">
            <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col gap-4">
                
                {/* Name Input */}
                <div className="relative group">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="Your Name"
                        aria-label="Your Name"
                        className="w-full p-6 bg-zinc-300/50 border-b-2 border-zinc-400 focus:border-blue-800 focus:bg-white focus:outline-none transition-all duration-300 placeholder:text-zinc-500 font-medium"
                    />
                </div>

                {/* Email Input */}
                <div className="relative group">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="Your Email"
                        aria-label="Your Email"
                        className="w-full p-6 bg-zinc-300/50 border-b-2 border-zinc-400 focus:border-blue-700 focus:bg-white focus:outline-none transition-all duration-300 placeholder:text-zinc-500 font-medium"
                    />
                </div>

                {/* Message Input */}
                <div className="relative group">
                    <textarea
                        name="message"
                        id="message"
                        required
                        placeholder="Tell me about your project..."
                        aria-label="Your Message"
                        rows={5}
                        className="w-full p-6 bg-zinc-300/50 border-b-2 border-zinc-400 focus:border-blue-700 focus:bg-white focus:outline-none transition-all duration-300 placeholder:text-zinc-500 font-medium resize-none"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="mt-6 w-full p-6 text-lg tracking-wider uppercase font-bold bg-neutral-900 text-zinc-100 hover:bg-blue-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer shadow-xl"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
}