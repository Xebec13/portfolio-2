import AboutContent from "./AboutContent";
import AboutBox from "./AboutBox";
import MiniDivider from "../utils/MiniDivider"

const infoContent = [
    "I’m a Front-End Developer creating modern, responsive, and animated web experiences with React, TypeScript, Tailwind, and GSAP. After reskilling through CodersLab, I’ve built 5+ real projects, including a working MVP for a local business. My background in psychology, criminology, and hospitality gives me strong problem-solving and interpersonal skills, helping me deliver digital experiences that truly connect with users."
];
export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen bg-zinc-200 px-5 py-10 md:px-13 md:py-15">
            <div className="py-5 md:pt-25 md:pb-10">
                <MiniDivider type="head" />
                <h3 className="uppercase text-[clamp(4rem,10vw,11rem)] font-semibold leading-none">About</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 p-2">
                <AboutContent
                    content={infoContent}
                    globalClass="lg:col-start-1 lg:max-w-3/4  w-full max-w-full justify-self-left"
                />
                <AboutBox
                    globalClass="justify-self-center w-full h-full min-h-115 lg:min-h-125 max-h-150 grid grid-cols-2 place-items-center"
                />

            </div>

        </section>
    )
}