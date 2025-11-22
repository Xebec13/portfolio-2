import { JSX } from "react";
import { FaReact, } from "react-icons/fa";
import { MdHtml, MdJavascript, MdCss } from "react-icons/md";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { LuSpline } from "react-icons/lu";
import { BiLogoTypescript } from "react-icons/bi";

export interface Project {
  id: number;
  name: string;
  date: string;
  icons: JSX.Element[];
  review: string;
  techReview: string;
  keyWords: string[];
  keyAchi: string[];
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
      <MdHtml key="html" aria-label="HTML" />,
      <RiTailwindCssFill key="tailwind" aria-label="Tailwind" />,
      <MdJavascript key="js" aria-label="JavaScript" />,
      <span key="gsap" aria-label="GSAP" className="text-[0.5rem] font-bold uppercase">GSAP</span>,
    ],
    review:
      "Responsive landing page created for a local charity clothing drive, originally built right after my first frontend course and later improved with Tailwind and GSAP.",
    techReview:
      "HTML, CSS, JavaScript evolved into TailwindCSS with added GSAP animations. The project served as my first real-world exercise in layout structure, responsive design, and UI refinement.",
    keyWords: ["Landing Page", "Charity", "Tailwind", "GSAP"],
    keyAchi: [
      "Refactored original vanilla version into a cleaner Tailwind-based layout.",
      "Improved UX through GSAP micro-interactions and clearer content hierarchy.",
      "Mobile-first structure developed from scratch as an early practical project.",
    ],
    images: ["/assets/pck1.png", "/assets/pck2.png", "/assets/pck3.png"],
    href: "https://pck-fundation.netlify.app",
    gitHref: "https://github.com/Xebec13/PCK-Zbiorka",
  },

  {
    id: 2,
    name: "Afal-Logistics",
    date: "2024",
    icons: [
      <MdHtml key="html" aria-label="HTML" />,
      <RiTailwindCssFill key="tailwind" aria-label="Tailwind" />,
      <MdJavascript key="js" aria-label="JavaScript" />,
      <span key="gsap" aria-label="GSAP" className="text-[0.5rem] font-bold uppercase">GSAP</span>,
    ],
    review:
      "Using Tailwind, HTML and GSAP, I created a clean corporate layout with subtle motion that helped present the company’s services more clearly. The page was optimized for mobile-first use and served as a simple, fast digital business card before the brand moved to a full WordPress setup.",
    techReview:
      "TailwindCSS, HTML and GSAP delivering a clean corporate layout with scroll-based animations and strong branding.",
    keyWords: ["Logistics", "Corporate", "Landing Page", "GSAP", "Animations"],
    keyAchi: [
      "Added GSAP animations to give the corporate layout a more modern, dynamic feel.",
      "Built a mobile-first structure that worked well as a quick business-card style website.",
      "Created a clean, trustworthy design aligning with logistics industry standards."
    ],
    images: ["/assets/afal1.png", "/assets/afal2.png", "/assets/afal3.png"],
    href: "https://afal-logistics.netlify.app",
    gitHref: "https://github.com/Xebec13/Afal-Logistics",
  },

  {
    id: 3,
    name: "Chat-GPT3",
    date: "2024",
    icons: [
      <FaReact key="react" aria-label="React" />,
      <MdCss key="css" aria-label="CSS" />,
      <MdJavascript key="js" aria-label="JavaScript" />,
      <span key="gsap" aria-label="GSAP" className="text-[0.5rem] font-bold uppercase">GSAP</span>,
    ],
    review:
      "Polished React landing page inspired by GPT-3, upgraded with smooth GSAP animations and a more thoughtful, modern UI/UX flow.",
    techReview:
      "Using React, JavaScript, CSS and GSAP, I rebuilt the template with cleaner structure, improved UX flow, and animations that make the page feel more dynamic. I refined spacing, hierarchy and color usage to create a more consistent AI-themed look and added custom motion sequences for a smoother visual experience.",
    keyWords: ["AI", "Landing Page", "GSAP", "React", "Animations"],
    keyAchi: [
      "Enhanced the template with custom GSAP motion to add depth and energy.",
      "Improved layout and hierarchy for a cleaner, more intuitive UX.",
      "Created a cohesive AI-style visual tone using gradients and subtle animations."
    ],
    images: ["/assets/gpt1.png", "/assets/gpt2.png", "/assets/gpt3.png"],
    href: "https://what-chat-gpt3.netlify.app",
    gitHref: "https://github.com/Xebec13/Chat-GPT3",
  },

  {
    id: 4,
    name: "Gericht Restaurant",
    date: "2024",
    icons: [
      <FaReact key="react" aria-label="React" />,
      <MdCss key="css" aria-label="CSS" />,
      <MdJavascript key="js" aria-label="JavaScript" />,
      <span key="gsap" aria-label="GSAP" className="text-[0.5rem] font-bold uppercase">GSAP</span>,
    ],
    review:
      "Refined restaurant landing page enhanced with custom GSAP animations, polished UI details, and a lively, premium look.",
    techReview:
      "Built with React, JavaScript and GSAP, the page blends clean UI with smooth, layered animations that elevate the original template. I focused on performance and mobile responsiveness, refining transitions and spacing to make the design feel truly premium. The project is prepared for future improvements, including API-powered content and a full refactor to Next.js.",
    keyWords: ["Restaurant", "Premium UI", "React", "GSAP", "Animations"],
    keyAchi: [
      "Added custom GSAP animations that gave the static template real depth and movement.",
      "Refined layout, spacing and typography to achieve a clean, premium aesthetic.",
      "Optimized responsiveness and performance across mobile, tablet, and desktop."
    ],
    images: ["/assets/g1.png", "/assets/g2.png", "/assets/g3.png"],
    href: "https://grestaurant-landing-page.netlify.app",
    gitHref: "https://github.com/Xebec13/Gericht-Restaurant",
  },

  {
    id: 5,
    name: "Cozy Leaf",
    date: "2025",
    icons: [
      <FaReact key="react" aria-label="React" />,
      <RiTailwindCssFill key="tailwind" aria-label="Tailwind" />,
      <MdJavascript key="js" aria-label="JavaScript" />,
      <span key="gsap" aria-label="GSAP" className="text-[0.5rem] font-bold uppercase">GSAP</span>,
    ],
    review:
      "Clean, animated vegan restaurant website concept built to showcase a fast, modern layout ready for real-world use",
    techReview:
      "Using React and Tailwind, I built a clean, modular UI that stays fast and responsive across all devices. GSAP let me create smooth, performance-first animations with custom timelines that give the site a lively, polished feel. I also used local storage to simulate a simple cart system, making the MVP behave more like a real product.",
    keyWords: ["Restaurant", "E-Commerce", "GSAP", "React", "Animations"],
    keyAchi: [
      "Built a fast, animation-heavy UI without sacrificing performance.",
      "Created a functional cart using local storage for a realistic MVP feel.",
      "Designed a flexible layout that can easily evolve into a production-ready restaurant site",
    ],
    images: ["/assets/cl1.png", "/assets/cl2.png", "/assets/cl3.png"],
    href: "https://cl-restaurant.netlify.app",
    gitHref: "https://github.com/Xebec13/Cozy-Leaf",
  },

  {
    id: 6,
    name: "Post Prime",
    date: "2025",
    icons: [
      <RiNextjsFill key="nextjs" aria-label="Next.js" />,
      <RiTailwindCssFill key="tailwind" aria-label="Tailwind" />,
      <BiLogoTypescript key="ts" aria-label="TypeScript" />,
      <LuSpline key="spline" aria-label="Spline" />,
    ],
    review:
      "Post Prime needed a fast, modern showcase to reflect their podcast’s energy. I delivered a high-performance Next.js site with 3D visuals, live social integrations, and a clean, dynamic layout. An added perk - automatic content syncing that unifies all their latest SM activity in one place.",
    techReview:
      "Using Next.js, TypeScript, Tailwind CSS, react-scroll-parallax, and Spline, I built a responsive, ultra-fast site featuring a 3D interactive hero, smooth parallax sections, automatically fetched social content, newsletter integration, and Google analytics—delivering both an impressive user experience and powerful management tools for the client.",
    keyWords: ["Podcast", "Basketball", "Landing Page", "Social Media"],
    keyAchi: [
      "Automated social API feeds (YouTube, Instagram, Facebook).",
      "3D interactive hero built with Spline + parallax scroll.",
      "Server-rendered performance with clean Next.js structure.",
    ],
    images: ["/assets/pck1.png", "/assets/pck2.png", "/assets/pck3.png"],
    href: "#",
    gitHref: "https://github.com/TwojNick/post-prime",
  },
];