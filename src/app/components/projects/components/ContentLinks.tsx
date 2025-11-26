import { FiGithub } from "react-icons/fi";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

// Definition of component props
interface ContentLinksProps {
    href?: string;    // URL for the live project
    gitHref?: string; // URL for the source code repository
}

export default function ContentLinks({ href, gitHref }: ContentLinksProps) {
    // Safety Check: Render nothing if no links are provided to avoid empty spacing
    if (!href && !gitHref) return null;

    return (
        // Main Action Container: Uses flex-wrap to handle smaller screens gracefully
        <div className="mt-6 flex flex-wrap gap-3 text-sm md:text-base font-medium whitespace-nowrap">
            
            {/* --- Action 1: GitHub / Source Code --- */}
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

            {/* --- Action 2: Live Deployment --- */}
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