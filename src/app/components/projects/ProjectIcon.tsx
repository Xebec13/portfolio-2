import { MdHtml, MdJavascript, MdCss } from "react-icons/md";
import { FaReact, FaSass, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { ReactElement } from "react";

// Typ dla ikon w projectInfo
export type TechIcon = "react" | "tailwind" | "javascript" | "gsap" | "sass" | "css" | "html" | "next";

export const iconsMap: Record<TechIcon, ReactElement> = {
  react: <FaReact className="inline-block text-lg md:text-xl" />,
  tailwind: <RiTailwindCssFill className="inline-block text-lg md:text-xl" />,
  javascript: <MdJavascript className="inline-block text-lg md:text-xl" />,
  gsap: (
    <span className="block text-xs font-semibold uppercase align-middle">
      GSAP.js
    </span>
  ),
  sass: <FaSass className="inline-block text-lg md:text-xl" />,
  css: <MdCss className="inline-block text-lg md:text-xl" />,
  html: <MdHtml className="inline-block text-lg md:text-xl" />,
  next: <RiNextjsFill className="inline-block text-lg md:text-xl" />,
};

export const socialsMap = {
  github: {
    name: "GitHub",
    icon: <FaGithub />,
    href: "https://github.com/Xebec13",
    color: "text-black/80",
  },
  linkedin: {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/david-hoesen-054257308/",
    color: "text-blue-400/80",
  },
  email: {
    name: "Email",
    icon: <FaEnvelope />,
    href: "mailto:dhoesen@gmail.com",
    color: "text-pink-400/80",
  },
};