import AboutContent from "./AboutContent";
import AboutBox from "./AboutBox";
import { infoContent } from "./aboutData";

export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen bg-zinc-200 px-5 py-5 md:px-13 md:py-10"
        >
            <div className="py-5 md:pt-15 md:pb-10">
                <h3 className="uppercase text-[clamp(4rem,10vw,11rem)] font-semibold leading-none">
                    About
                </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 p-2">
                <AboutContent
                    content={infoContent}
                    
                    globalClass="justify-self-start lg:col-start-1 lg:max-w-[95%] w-full max-w-full"
                />
                <AboutBox
                    
                    globalClass="justify-self-center w-full h-full min-h-115 lg:min-h-125 max-h-150 bottom-0 lg:bottom-15"
                />
            </div>
        </section>
    )
}