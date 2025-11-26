import AboutContent from "./AboutContent";
import AboutBox from "./AboutBox";
import { infoContent } from "./aboutData";

export default function About() {
    return (
        // Main Section Container
        <section
            id="about"
            className="min-h-screen bg-zinc-200 px-5 py-5 md:px-13 md:py-10"
        >
            {/* Section Header */}
            <div className="py-5 md:pt-15 md:pb-10">
                <h3 className="uppercase text-[clamp(4rem,10vw,11rem)] font-semibold leading-none">
                    About
                </h3>
            </div>

            {/* Main Content Grid: Switches from 1 column (mobile) to 2 columns (desktop) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 p-2">
                
                {/* Left Column: Biography & General Info */}
                <AboutContent
                    content={infoContent}
                    globalClass="justify-self-start lg:col-start-1 lg:max-w-[95%] w-full max-w-full"
                />
                
                {/* Right Column: Interactive Details Box */}
                <AboutBox
                    globalClass="justify-self-center w-full h-full min-h-115 lg:min-h-125 max-h-150 bottom-0 lg:bottom-15"
                />
            </div>
        </section>
    )
}