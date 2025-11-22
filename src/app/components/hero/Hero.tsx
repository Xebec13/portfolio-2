import HeroGridBg from "./HeroGridBg";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="/" className="relative flex md:min-h-screen flex-col items-stretch justify-center gap-10 px-5 pb-10 pt-30 md:justify-between md:px-22 md:pt-35">
            {/* Header Section */}
            <HeroGridBg />
            <div className="relative flex flex-col-reverse justify-center gap-5 md:flex-row md:justify-between -z-10">
                {/* Large uppercase name */}
                <div className="max-w-fit text-[clamp(4.25rem,12vw,15rem)] font-semibold uppercase leading-none">
                    <div className="overflow-hidden">
                        <h1 className="animate-slide-up-h1">David</h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1 className="animate-slide-up-h1">Hoesen</h1>
                    </div>
                </div>

                {/* Small circular avatar in the top-right corner */}
                <div className="animate-scale-up-img relative shrink-0 h-full w-45 overflow-hidden rounded-full bg-linear-to-r from-gray-300/60 to-gray-300/10 md:w-60 ">
                    <Image
                        src="/profile-img1.png"
                        alt="David"
                        width={720}
                        height={720}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            {/* Contact and About Section */}
            <div className="flex flex-col gap-15  items-start md:flex-row md:justify-between">
                {/* Contact info */}
                <div className="shrink-0 flex items-center p-3 font-semibold">
                    <div className="overflow-hidden">
                        <p className="animate-content-slide-up text-xl md:text-2xl lg:text-3xl">Front-End Developer</p>
                    </div>
                </div>

                <div className="text-[clamp(1.5rem,3vw,4.5rem)] indent-12 md:max-w-1/2 lg-max-w-1/3 font-medium tracking-tighter leading-none text-justify overflow-hidden">
                    {/* About / Hero text */}
                    <p className="animate-content-slide-up ">
                        Hello, I’m passionate about creating clean, responsive, and visually sharp interfaces. Let’s create!
                    </p>
                </div>
            </div>
        </section>
    );
}