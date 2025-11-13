export default function Footer() {
    return (
        <footer className="min-h-screen flex flex-col justify-center gap-10 md:justify-between bg-neutral-950 font-medium p-7 md:p-22">
            {/* === Social Links === */}
            <div className="flex justify-end items-center gap-3 text-zinc-100 text-md md:text-lg">
                <p>Github</p>
                <p>Linkedin</p>
            </div>

            {/* === Call to Action === */}
            <div className="space-y-15">
                <div className="bg-clip-text text-transparent bg-linear-to-r from-zinc-100/90 via-zinc-100/80 to-zinc-100/10">
                    <h3 className="text-[clamp(2rem,3.5vw,4rem)] tracking-tight leading-snug">
                        Curious about what we can create together?<br />
                        Let’s bring something extraordinary to life!
                    </h3>
                </div>

                <div className="flex flex-col-reverse items-start md:flex-row md:items-center gap-10 text-lg">
                    <button className="w-full md:w-fit p-5 bg-zinc-100 text-neutral-900 hover:scale-105 transition-all duration-700 cursor-pointer">
                        Get in Touch
                    </button>

                    <div className="inline-flex items-center gap-5 text-zinc-200">
                        <div className="relative inline-flex items-center justify-center size-5">
                            {/* Pulsing background */}
                            <div className="absolute h-full w-full inset-0 bg-blue-300 rounded-full opacity-75 animate-ping-long" />
                            {/* Central circle */}
                            <div className="relative size-3.5 inset-0 bg-blue-700 rounded-full" />
                        </div>
                        <p>Available For Work</p>
                    </div>
                </div>
            </div>

            {/* === Footer Info === */}
            <div className="text-zinc-100 flex justify-between items-center">
                <p>Footer Info</p>
                <p>Powered by Xebec13</p>
            </div>
        </footer>


    );
}