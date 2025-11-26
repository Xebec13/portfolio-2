import type { JSX } from "react"; // Best practice: Explicit type import triggers strict type checking
import { FaReact } from "react-icons/fa";
import { MdHtml, MdJavascript, MdCss } from "react-icons/md";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { LuSpline } from "react-icons/lu";
import { BiLogoTypescript } from "react-icons/bi";

// ==========================================
// Type Definitions
// ==========================================

export interface Project {
  id: number;
  name: string;
  date: string;
  // Storing JSX Elements directly allows for flexible icon rendering without mapping logic in the component
  icons: JSX.Element[]; 
  review: string;       // Short "Elevator Pitch" or general description
  techReview: string;   // Deep dive into technical implementation and challenges
  keyWords: string[];   // Used for tags or quick scanning
  keyAchi: string[];    // Key Achievements: Bullet points displayed in the details view
  images?: string[];
  href?: string;        // Live Demo URL
  gitHref?: string;     // GitHub Repository URL
}

// ==========================================
// Data Source
// ==========================================

export const projectData: Project[] = [
  
  // --- Project 1: PCK (Charity) ---
  {
    id: 1,
    name: "PCK",
    date: "2023",
    icons: [
      <MdHtml key="html" aria-label="HTML" />,
      <RiTailwindCssFill key="tailwind" aria-label="Tailwind" />,
      <MdJavascript key="js" aria-label="JavaScript" />,
      <span key="gsap" aria-label="GSAP" className="text-[0.5rem] font-bold uppercase tracking-wider">GSAP</span>,
    ],
    review:
      "Responsive landing page created for a local charity clothing drive, originally built right after my first frontend course and later improved with Tailwind and GSAP.",
    techReview:
      "Starting with vanilla HTML/CSS/JS, I refactored the project into a modern TailwindCSS architecture. I integrated GSAP for micro-interactions to guide user attention. This project was my training ground for responsive design principles and semantic HTML structure.",
    keyWords: ["Landing Page", "Charity", "Tailwind", "GSAP"],
    keyAchi: [
      "Refactored legacy code into a clean, maintainable Tailwind-based structure.",
      "Enhanced UX with purposeful GSAP animations and improved hierarchy.",
      "Implemented a mobile-first approach ensuring perfect usability on all devices.",
    ],
    images: ["/assets/pck1.png", "/assets/pck2.png", "/assets/pck3.png"],
    href: "https://pck-fundation.netlify.app",
    gitHref: "https://github.com/Xebec13/PCK-Zbiorka",
  },

  // --- Project 2: Afal-Logistics ---
  {
    id: 2,
    name: "Afal-Logistics",
    date: "2024",
    icons: [
      <MdHtml key="html" aria-label="HTML" />,
      <RiTailwindCssFill key="tailwind" aria-label="Tailwind" />,
      <MdJavascript key="js" aria-label="JavaScript" />,
      <span key="gsap" aria-label="GSAP" className="text-[0.5rem] font-bold uppercase tracking-wider">GSAP</span>,
    ],
    review:
      "Lightweight logistics landing page built with Tailwind and GSAP, focused on clarity, mobile usability, and simple brand presentation.",
    techReview:
      "I utilized Tailwind for rapid styling and GSAP for subtle entrance animations. The focus was on performance and clarity—creating a digital business card that loads instantly. The code structure is modular, allowing for easy expansion if the client decides to move away from the static model.",
    keyWords: ["Logistics", "Corporate", "Landing Page", "GSAP"],
    keyAchi: [
      "Implemented GSAP reveal animations to create a premium corporate feel.",
      "Designed a high-performance, mobile-first structure for on-the-go users.",
      "Delivered a clean code base ready for future migration to a CMS.",
    ],
    images: ["/assets/afal1.png", "/assets/afal2.png", "/assets/afal3.png"],
    href: "https://afal-logistics.netlify.app",
    gitHref: "https://github.com/Xebec13/Afal-Logistics",
  },

  // --- Project 3: Chat-GPT3 (React) ---
  {
    id: 3,
    name: "Chat-GPT3",
    date: "2024",
    icons: [
      <FaReact key="react" aria-label="React" />,
      <MdCss key="css" aria-label="CSS" />,
      <MdJavascript key="js" aria-label="JavaScript" />,
      <span key="gsap" aria-label="GSAP" className="text-[0.5rem] font-bold uppercase tracking-wider">GSAP</span>,
    ],
    review:
      "Polished React landing page inspired by GPT-3, upgraded with smooth GSAP animations and a more thoughtful, modern UI/UX flow.",
    techReview:
      "Built with React to manage component reusability effectively. I replaced standard CSS transitions with GSAP timelines for complex sequencing. I also focused heavily on the visual hierarchy, using gradients and spacing to create a futuristic, AI-driven aesthetic consistent with the brand identity.",
    keyWords: ["AI", "Landing Page", "GSAP", "React"],
    keyAchi: [
      "Orchestrated complex animation sequences using GSAP Timelines.",
      "Improved component modularity in React for better maintainability.",
      "Refined the UI with modern glassmorphism and gradient effects.",
    ],
    images: ["/assets/gpt1.png", "/assets/gpt2.png", "/assets/gpt3.png"],
    href: "https://what-chat-gpt3.netlify.app",
    gitHref: "https://github.com/Xebec13/Chat-GPT3",
  },

  // --- Project 4: Gericht Restaurant ---
  {
    id: 4,
    name: "Gericht Restaurant",
    date: "2024",
    icons: [
      <FaReact key="react" aria-label="React" />,
      <MdCss key="css" aria-label="CSS" />,
      <MdJavascript key="js" aria-label="JavaScript" />,
      <span key="gsap" aria-label="GSAP" className="text-[0.5rem] font-bold uppercase tracking-wider">GSAP</span>,
    ],
    review:
      "Refined restaurant landing page enhanced with custom GSAP animations, polished UI details, and a lively, premium look.",
    techReview:
      "This project focuses on the 'Premium' feel. I combined React for structure with custom CSS/GSAP for high-fidelity animations. Special attention was paid to typography scaling and image optimization to ensure the site feels app-like on mobile devices. It serves as a strong candidate for Next.js migration.",
    keyWords: ["Restaurant", "Premium UI", "React", "GSAP"],
    keyAchi: [
      "Designed immersive scroll-triggered animations using GSAP ScrollTrigger.",
      "Achieved a pixel-perfect responsive layout across all breakpoints.",
      "Optimized rendering performance for a smooth 60fps experience.",
    ],
    images: ["/assets/g1.png", "/assets/g2.png", "/assets/g3.png"],
    href: "https://grestaurant-landing-page.netlify.app",
    gitHref: "https://github.com/Xebec13/Gericht-Restaurant",
  },

  // --- Project 5: Cozy Leaf (E-commerce logic) ---
  {
    id: 5,
    name: "Cozy Leaf",
    date: "2025",
    icons: [
      <FaReact key="react" aria-label="React" />,
      <RiTailwindCssFill key="tailwind" aria-label="Tailwind" />,
      <MdJavascript key="js" aria-label="JavaScript" />,
      <span key="gsap" aria-label="GSAP" className="text-[0.5rem] font-bold uppercase tracking-wider">GSAP</span>,
    ],
    review:
      "Clean, animated vegan restaurant website concept built to showcase a fast, modern layout ready for real-world use.",
    techReview:
      "A functional MVP built with React and Tailwind. Beyond the UI, I implemented a local-storage based cart system to simulate e-commerce logic. GSAP handles the micro-interactions (add to cart, menu transitions), making the application feel responsive and alive without the overhead of a full backend.",
    keyWords: ["Restaurant", "E-Commerce", "GSAP", "React"],
    keyAchi: [
      "Engineered a persistent shopping cart state using Local Storage.",
      "Balanced heavy visual animations with high Core Web Vitals scores.",
      "Created a scalable component system ready for production use.",
    ],
    images: ["/assets/cl1.png", "/assets/cl2.png", "/assets/cl3.png"],
    href: "https://cl-restaurant.netlify.app",
    gitHref: "https://github.com/Xebec13/Cozy-Leaf",
  },

  // --- Project 6: Post Prime (Next.js & 3D) ---
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
      "A high-performance Next.js site for a podcast, featuring 3D visuals, live social integrations, and automated content syncing.",
    techReview:
      "This is my flagship project using the full modern stack: Next.js (App Router), TypeScript, and Tailwind. I integrated Spline for 3D interactivity and connected external APIs (YouTube/Socials) to auto-update content. It demonstrates ability to build complex, full-stack aware frontend applications with emphasis on performance and SEO.",
    keyWords: ["Next.js", "3D/Spline", "TypeScript", "API Integration"],
    keyAchi: [
      "Integrated 3D interactive models using Spline for a unique Hero section.",
      "Implemented ISR (Incremental Static Regeneration) for social feed updates.",
      "Built a type-safe architecture using strict TypeScript configuration.",
    ],
    // NOTE: Images are currently placeholders. Ensure paths are updated before production.
    images: ["/assets/cl1.png", "/assets/cl2.png", "/assets/cl3.png"],
    href: "#", 
    gitHref: "https://github.com/TwojNick/post-prime",
  },
];