import { JSX } from "react";
import { FaReact, FaSass } from "react-icons/fa";
import { MdHtml, MdJavascript, MdCss } from "react-icons/md";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

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
      "Fully responsive landing page for a charity donation platform. Built with Tailwind and enhanced with GSAP animations.",
    techReview:
      "HTML, TailwindCSS, JavaScript and GSAP were used to deliver a lightweight, accessible and performance-oriented landing page.",
    keyWords: ["Landing Page", "Charity", "GSAP", "Responsive"],
    keyAchi: [
      "Fully responsive layouts optimized for accessibility.",
      "GSAP-powered micro animations improving user flow.",
      "Clear UI and strong CTA structure increasing clarity.",
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
      "Responsive landing page made for a logistics company, designed with Tailwind and animated using GSAP.",
    techReview:
      "TailwindCSS, HTML and GSAP delivering a clean corporate layout with scroll-based animations and strong branding.",
    keyWords: ["Logistics", "Corporate", "Landing Page", "GSAP"],
    keyAchi: [
      "GSAP-based interactive service highlights.",
      "Mobile-first clean layout suitable for corporate use.",
      "Consistent branding through color and spacing design.",
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
      "Modern React landing page inspired by GPT-3 with custom GSAP animations and a futuristic UI.",
    techReview:
      "React, CSS, JavaScript and GSAP used to create an AI-themed layout with scrolling animations and glowing gradients.",
    keyWords: ["AI", "Landing Page", "GSAP", "React"],
    keyAchi: [
      "GSAP timelines for animated sections.",
      "Responsive component structure.",
      "Gradient-based visual identity.",
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
      "High-end restaurant landing page built in React with elegant GSAP animations and premium UI design.",
    techReview:
      "React, JavaScript, CSS and GSAP used to deliver luxurious transitions, layered imagery and refined typography.",
    keyWords: ["Restaurant", "Premium UI", "React", "GSAP"],
    keyAchi: [
      "Premium aesthetic with strong spacing and photography.",
      "Smooth GSAP animations for menu and hero.",
      "Excellent responsiveness across devices.",
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
      "Restaurant website with a React-based shopping cart stored in localStorage and animated GSAP interactions.",
    techReview:
      "React + TailwindCSS for layout, GSAP for animations and custom cart logic using localStorage.",
    keyWords: ["Restaurant", "E-Commerce", "GSAP", "React"],
    keyAchi: [
      "Full order/cart flow stored in localStorage.",
      "Animated dish cards and section transitions.",
      "Tailwind-driven clean, modern restaurant UI.",
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
      <FaSass key="sass" aria-label="Sass" />,
      <MdJavascript key="js" aria-label="JavaScript" />,
      <span key="gsap" aria-label="GSAP" className="text-[0.5rem] font-bold uppercase">GSAP</span>,
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