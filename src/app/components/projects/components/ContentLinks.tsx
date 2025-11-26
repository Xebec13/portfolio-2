import { FiGithub } from "react-icons/fi";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

interface ContentLinksProps {
    href?: string;
    gitHref?: string;
}

export default function ContentLinks({ href, gitHref }: ContentLinksProps) {
    if (!href && !gitHref) return null;

    return (
        <div className="mt-6 flex flex-wrap gap-3 text-sm md:text-base font-medium whitespace-nowrap">
            {gitHref && (
                <a
                    href={gitHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-zinc-50 text-blue-900 border border-transparent drop-shadow-md transition-all duration-700 ease-out hover:bg-blue-50 hover:border-blue-800"
                >
                    <FiGithub />
                    Source Code
                </a>
            )}
            {href && (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-zinc-50 text-blue-900 border border-transparent drop-shadow-md transition-all duration-700 ease-out hover:bg-blue-50 hover:border-blue-800"
                >
                    <LuSquareArrowOutUpRight />
                    Live Demo
                </a>
            )}
        </div>
    );
}