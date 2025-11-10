import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex md:min-h-screen flex-col items-stretch justify-center gap-10 px-5 py-35 md:justify-between md:px-22 md:py-42 border-2">
            {/* Header Section */}
            <div className="relative flex flex-col-reverse justify-center gap-5  md:flex-row md:justify-between border-2 border-amber-500">
                {/* Large uppercase name */}
                <div className="max-w-fit text-[clamp(4.5rem,14vw,15rem)] font-semibold uppercase leading-none">
                    <h1>David</h1>
                    <h1>Hoesen</h1>
                </div>

                {/* Small circular avatar in the top-right corner */}
                <div className="relative shrink-0 size-35 overflow-hidden rounded-full bg-linear-to-r from-slate-300/90 to-slate-400/90 md:size-50 lg:size-55 xl:65">
                    <Image
                        src="/dav-portfolio.png"
                        alt="David"
                        width={500}
                        height={500}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            {/* Contact and About Section */}
            <div className="flex flex-col gap-15 font-semibold items-start md:flex-row md:justify-between border-2 border-pink-500">
                {/* Contact info */}
                <div className="pl-2 text-xl md:text-2xl lg:text-3xl inline-flex items-center gap-5">
                    <p>dhoesen@gmail.com</p>
                    
                </div>

                {/* About / Hero text */}
                <p className="text-[clamp(1.5rem,3vw,4.5rem)] indent-8 md:max-w-1/2 tracking-tighter text-justify">
                    Hello, I’m a front-end developer truly passion about clean responsive visually sharp interfaces. Let’s create!
                </p>
            </div>
        </section>
    );
}