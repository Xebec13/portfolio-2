import { JSX } from "react";
import { FaReact, FaSass,} from "react-icons/fa";
import { MdHtml, MdJavascript, MdCss } from "react-icons/md";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

export interface Project {
  id: number;
  name: string;
  date: string;
  icons: JSX.Element[];
  review: string;
  images: string[];
  href?: string;
  gitHref?: string;
}

export const projectData: Project[] = [
  {
    id: 1,
    name: "PCK",
    date: "2023",
    icons: [
      <MdHtml key="html" />,
      <RiTailwindCssFill key="tailwind" />,
      <MdJavascript key="js" />,
      <span key="gsap" className="text-[0.5rem] font-bold uppercase">GSAP</span>,
    ],
    review:
      "Fully responsive landing page for a charity donation platform. Built with Tailwind for layout and styling, enhanced with GSAP animations for smooth interactivity.",
    images: ["/assets/pck1.png", "/assets/pck2.png", "/assets/pck3.png"],
    href: "https://pck-fundation.netlify.app",
    gitHref: "https://github.com/Xebec13/PCK-Zbiorka",
  },
  {
    id: 2,
    name: "Afal-Logistics",
    date: "2024",
    icons: [
      <MdHtml key="html" />,
      <RiTailwindCssFill key="tailwind" />,
      <MdJavascript key="js" />,
      <span key="gsap" className="text-[0.5rem] font-bold uppercase">GSAP</span>,
    ],
    review:
      "Responsive landing page built for a logistics company. Developed with Tailwind and GSAP for animations.",
    images: ["/assets/afal1.png", "/assets/afal2.png", "/assets/afal3.png"],
    href: "https://afal-logistics.netlify.app",
    gitHref: "https://github.com/Xebec13/Afal-Logistics",
  },
  {
    id: 3,
    name: "Chat-GPT3",
    date: "2024",
    icons: [
      <FaReact key="react" />,
      <MdCss key="css" />,
      <MdJavascript key="js" />,
      <span key="gsap" className="text-[0.5rem] font-bold uppercase">GSAP</span>,
    ],
    review:
      "Modern React landing page inspired by GPT-3, with custom GSAP animations and responsive CSS.",
    images: ["/assets/gpt1.png", "/assets/gpt2.png", "/assets/gpt3.png"],
    href: "https://what-chat-gpt3.netlify.app",
    gitHref: "https://github.com/Xebec13/Chat-GPT3",
  },
  {
    id: 4,
    name: "Gericht Restaurant",
    date: "2024",
    icons: [
      <FaReact key="react" />,
      <MdCss key="css" />,
      <MdJavascript key="js" />,
      <span key="gsap" className="text-[0.5rem] font-bold uppercase">GSAP</span>,
    ],
    review:
      "High-end React restaurant landing page combining sleek design with GSAP interactivity.",
    images: ["/assets/g1.png", "/assets/g2.png", "/assets/g3.png"],
    href: "https://grestaurant-landing-page.netlify.app",
    gitHref: "https://github.com/Xebec13/Gericht-Restaurant",
  },
  {
    id: 5,
    name: "Cozy Leaf",
    date: "2025",
    icons: [
      <FaReact key="react" />,
      <RiTailwindCssFill key="tailwind" />,
      <MdJavascript key="js" />,
      <span key="gsap" className="text-[0.5rem] font-bold uppercase">GSAP</span>,
    ],
    review:
      "Modern restaurant website with React, TailwindCSS, GSAP, and a local-storage order cart.",
    images: ["/assets/cl1.png", "/assets/cl2.png", "/assets/cl3.png"],
    href: "https://cl-restaurant.netlify.app",
    gitHref: "https://github.com/Xebec13/Cozy-Leaf",
  },
  {
    id: 6,
    name: "Post Prime",
    date: "2025",
    icons: [
      <RiNextjsFill key="next" />,
      <FaSass key="sass" />,
      <MdJavascript key="js" />,
      <span key="gsap" className="text-[0.5rem] font-bold uppercase">GSAP</span>,
    ],
    review:
      "Sleek podcast site for former basketball players, featuring smooth UI and GSAP animations.",
    images: ["/assets/pck1.png", "/assets/pck2.png", "/assets/pck3.png"],
    href: "#",
    gitHref: "https://github.com/TwojNick/post-prime",
  },
];