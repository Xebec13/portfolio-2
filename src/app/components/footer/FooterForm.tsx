export default function FooterForm() {
    return (
        <section className="flex flex-col items-center justify-center text-neutral-900 w-full  bg-zinc-200 ">
            {/* === Contact Form === */}
            <form className="mt-10 w-full max-w-2xl flex flex-col gap-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-8 bg-zinc-300/80 focus:outline-none focus:outline-blue-700 transition-all duration-300"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-8 bg-zinc-300/80 focus:outline-none focus:border-blue-700 transition-all duration-300"
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    className="w-full p-8 bg-zinc-300/80 focus:outline-none focus:border-blue-700 transition-all duration-300"
                />

                <button
                    type="submit"
                    className="mt-4 w-full p-6 text-lg  bg-zinc-800/80 text-zinc-100 hover:bg-neutral-900 hover:scale-105 transition-all duration-500 font-semibold cursor-pointer"
                >
                    Send It
                </button>
            </form>
        </section>
    );
}