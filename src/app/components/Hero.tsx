import HeroGridBg from "./HeroGridBg";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative flex md:min-h-screen flex-col items-stretch justify-center gap-10 px-5 py-35 md:justify-between md:px-22 md:py-42">
            {/* Header Section */}
            <HeroGridBg />
            <div className="relative flex flex-col-reverse justify-center gap-5 md:flex-row md:justify-between">
                {/* Large uppercase name */}
                <div className="max-w-fit text-[clamp(4.5rem,14vw,15rem)] font-semibold uppercase leading-none">
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
                        width={2600}
                        height={1400}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            {/* Contact and About Section */}
            <div className="flex flex-col gap-15 font-semibold items-start md:flex-row md:justify-between">
                {/* Contact info */}
                <div className="pl-2 text-xl md:text-2xl lg:text-3xl flex flex-col items-start gap-5 overflow-hidden">
                    <p className="animate-content-slide-up">dhoesen@gmail.com</p>
                    <p className="animate-content-slide-up">Linkedin</p>
                </div>

                <div className="text-[clamp(1.5rem,3vw,4.5rem)] indent-8 md:max-w-1/2 tracking-tighter text-justify overflow-hidden">
                    {/* About / Hero text */}
                    <p className="animate-content-slide-up ">
                        Hello, I’m a front-end developer truly passion about clean responsive visually sharp interfaces. Let’s create!
                    </p>
                </div>
            </div>
        </section>
    );
}