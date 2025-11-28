import type { JSX } from "react";
import { FaReact } from "react-icons/fa";
import { MdHtml, MdJavascript, MdCss } from "react-icons/md";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { LuSpline } from "react-icons/lu";
import { BiLogoTypescript } from "react-icons/bi";

// ==========================================
// Type Definitions
// ==========================================

interface BaseProjectData {
  id: number;
  date: string;
  icons: JSX.Element[];
  images: string[];
  href?: string;
  gitHref?: string;
  key: string; 
}

interface LocalizedProjectData {
  name: string;
  review: string;
  techReview: string;
  keyWords: string[];
  keyAchi: string[];
}

export interface Project extends BaseProjectData, LocalizedProjectData {}

export type Language = "en" | "pl";

// ==========================================
// 1. Base Data (Assets & Tech Stack)
// ==========================================
// ORDER: Chronological (Oldest -> Newest)
// This makes adding new projects easier (just append to the end).
const baseProjects: BaseProjectData[] = [
  {
    id: 1,
    key: "pck", 
    date: "2023",
    icons: [
      <MdHtml key="html" aria-label="HTML" />,
      <RiTailwindCssFill key="tailwind" aria-label="Tailwind" />,
      <MdJavascript key="js" aria-label="JavaScript" />,
      <span key="gsap" aria-label="GSAP" className="text-[0.5rem] font-bold uppercase tracking-wider">GSAP</span>,
    ],
    images: ["/assets/pck1.png", "/assets/pck2.png", "/assets/pck3.png"],
    href: "https://pck-fundation.netlify.app",
    gitHref: "https://github.com/Xebec13/PCK-Zbiorka",
  },
  {
    id: 2,
    key: "afal",
    date: "2024",
    icons: [
      <MdHtml key="html" aria-label="HTML" />,
      <RiTailwindCssFill key="tailwind" aria-label="Tailwind" />,
      <MdJavascript key="js" aria-label="JavaScript" />,
      <span key="gsap" aria-label="GSAP" className="text-[0.5rem] font-bold uppercase tracking-wider">GSAP</span>,
    ],
    images: ["/assets/afal1.png", "/assets/afal2.png", "/assets/afal3.png"],
    href: "https://afal-logistics.netlify.app",
    gitHref: "https://github.com/Xebec13/Afal-Logistics",
  },
  {
    id: 3,
    key: "gpt3",
    date: "2024",
    icons: [
      <FaReact key="react" aria-label="React" />,
      <MdCss key="css" aria-label="CSS" />,
      <MdJavascript key="js" aria-label="JavaScript" />,
      <span key="gsap" aria-label="GSAP" className="text-[0.5rem] font-bold uppercase tracking-wider">GSAP</span>,
    ],
    images: ["/assets/gpt1.png", "/assets/gpt2.png", "/assets/gpt3.png"],
    href: "https://what-chat-gpt3.netlify.app",
    gitHref: "https://github.com/Xebec13/Chat-GPT3",
  },
  {
    id: 4,
    key: "gericht",
    date: "2024",
    icons: [
      <FaReact key="react" aria-label="React" />,
      <MdCss key="css" aria-label="CSS" />,
      <MdJavascript key="js" aria-label="JavaScript" />,
      <span key="gsap" aria-label="GSAP" className="text-[0.5rem] font-bold uppercase tracking-wider">GSAP</span>,
    ],
    images: ["/assets/g1.png", "/assets/g2.png", "/assets/g3.png"],
    href: "https://grestaurant-landing-page.netlify.app",
    gitHref: "https://github.com/Xebec13/Gericht-Restaurant",
  },
  {
    id: 5,
    key: "cozy",
    date: "2025",
    icons: [
      <FaReact key="react" aria-label="React" />,
      <RiTailwindCssFill key="tailwind" aria-label="Tailwind" />,
      <MdJavascript key="js" aria-label="JavaScript" />,
      <span key="gsap" aria-label="GSAP" className="text-[0.5rem] font-bold uppercase tracking-wider">GSAP</span>,
    ],
    images: ["/assets/cl1.png", "/assets/cl2.png", "/assets/cl3.png"],
    href: "https://cl-restaurant.netlify.app",
    gitHref: "https://github.com/Xebec13/Cozy-Leaf",
  },
  {
    id: 6,
    key: "postprime",
    date: "2025",
    icons: [
      <RiNextjsFill key="nextjs" aria-label="Next.js" />,
      <RiTailwindCssFill key="tailwind" aria-label="Tailwind" />,
      <BiLogoTypescript key="ts" aria-label="TypeScript" />,
      <LuSpline key="spline" aria-label="Spline" />,
    ],
    images: ["/assets/cl1.png", "/assets/cl2.png", "/assets/cl3.png"], 
    href: "#", 
    gitHref: "https://github.com/TwojNick/post-prime",
  },
];

// ==========================================
// 2. Translations Dictionary
// ==========================================
const translations: Record<Language, Record<string, LocalizedProjectData>> = {
  en: {
    pck: {
      name: "PCK",
      review: "Responsive landing page created for a local charity clothing drive, originally built right after my first frontend course and later improved with Tailwind and GSAP.",
      techReview: "Starting with vanilla HTML/CSS/JS, I refactored the project into a modern TailwindCSS architecture. I integrated GSAP for micro-interactions to guide user attention. This project was my training ground for responsive design principles and semantic HTML structure.",
      keyWords: ["Mockup", "Charity", "Donation", "Landing Page", "Contact Form"],
      keyAchi: [
        "Refactored the code, creating a clean and maintainable TailwindCSS structure.",
        "Enhanced UX with GSAP-driven micro-interactions and improved visual hierarchy.",
        "Implemented a mobile-first approach, ensuring optimal usability across all devices."
      ]
    },
    afal: {
      name: "Afal-Logistics",
      review: "To test a new client communication channel, Afal Logistics needed a clear, functional online presence. I delivered a lightweight MVP landing page that balances brand clarity, mobile-first usability, and expandability.",
      techReview: "I utilized Tailwind for rapid styling and GSAP for subtle entrance animations. The focus was on performance and clarity — creating a digital business card that loads instantly. The code structure is modular, allowing for easy expansion.",
      keyWords: ["Commercial", "Logistics", "Distribution", "Chemicals", "Landing Page"],
      keyAchi: [
        "Implemented GSAP reveal animations to create a premium corporate feel.",
        "Designed a lightweight, responsive structure optimized for mobile users.",
        "Delivered a clean code base ready for future migration to a CMS."
      ]
    },
    gpt3: {
      name: "Chat-GPT3",
      review: "For this mockup project, I decided to implement a pre-made, free-to-use UI for a website related to the tech industry. Focused on AI, I brought a GPT-3 inspired layout to life with smooth animations and thoughtful UI/UX.",
      techReview: "The site was built with React to maximize component reusability. I replaced standard CSS transitions with GSAP timelines for complex sequencing. I focused heavily on visual hierarchy, using gradients and spacing to create a futuristic aesthetic.",
      keyWords: ["Mockup", "AI", "Landing Page", "Chatbot", "Future UI"],
      keyAchi: [
        "Orchestrated complex animation sequences using GSAP Timelines.",
        "Improved component modularity in React for better maintainability.",
        "Refined the UI with modern glassmorphism and gradient effects."
      ]
    },
    gericht: {
      name: "Gericht Restaurant",
      review: "For this mockup project, I implemented a website for a premium restaurant using a free-to-use UI layout. Working with a predefined design allowed me to focus on execution quality, delivering a refined landing page with smooth animations.",
      techReview: "Built with React, custom CSS, and GSAP, emphasizing premium visual execution. I crafted high-fidelity animations using ScrollTrigger, fine-tuned typography scaling, and ensured the layout feels app-like on mobile.",
      keyWords: ["Mockup", "Restaurant", "Premium", "Landing Page", "Contact Form"],
      keyAchi: [
        "Designed immersive scroll-triggered animations using GSAP ScrollTrigger.",
        "Delivered a pixel-perfect responsive layout across all breakpoints.",
        "Optimized rendering performance for consistently smooth 60fps animations."
      ]
    },
    cozy: {
      name: "Cozy Leaf",
      review: "A fictional vegan restaurant project needing a refreshed brand presentation. I created a fast, engaging site with interactive ordering, table reservations, a dynamic menu, and playful UI animations.",
      techReview: "Developed with Next.js, TypeScript, and Tailwind. Features a modular architecture, GSAP-powered micro-animations, and interactive ordering flows. The result is a smooth, conversion-oriented interface with strong performance.",
      keyWords: ["Mockup", "Restaurant", "Vegan", "Online Ordering", "Reservation"],
      keyAchi: [
        "Implemented a persistent shopping cart state using Local Storage for seamless ordering.",
        "Balanced rich UI animations with strong Core Web Vitals performance.",
        "Built a scalable, production-ready component system in Next.js + TypeScript."
      ]
    },
    postprime: {
      name: "Post Prime",
      review: "PostPrime needed a fast, modern showcase to reflect their podcast’s energy. I delivered a high-performance site with 3D visuals, live social integrations, and a clean, dynamic layout with automated content syncing.",
      techReview: "Using Next.js, TypeScript, Tailwind CSS, react-scroll-parallax, and Spline, I built a responsive, ultra-fast site featuring a 3D interactive hero, smooth parallax sections, automatically fetched social content — delivering both a satisfying user experience and powerful management tools for the client.",
      keyWords: ["Commercial", "Podcast", "Basketball", "Landing Page", "Social Media"],
      keyAchi: [
        "Implemented ISR (Incremental Static Regeneration) for social feed updates.",
        "Created a standout hero section by integrating an interactive 3D model using Spline.",
        "Cut workload with a fully automated, maintenance-free content pipeline."
      ]
    }
  },
  pl: {
    pck: {
      name: "PCK",
      review: "Projekt PCK był moim finałowym zadaniem w trakcie kursu CodersLab. Stworzyłem responsywny landing page dla lokalnej akcji charytatywnej, który z czasem udoskonaliłem, poprawiając użyteczność i strukturę kodu.",
      techReview: "Projekt początkowo powstał w vanilla HTML/CSS/JS, a następnie został przebudowany w nowoczesnej architekturze TailwindCSS. Zintegrowałem GSAP, aby dodać przemyślane mikro-interakcje. Projekt posłużył jako praktyczne ćwiczenie z semantycznego HTML.",
      keyWords: ["Mockup", "Charytatywne", "Dotacje", "Landing Page", "Formularz"],
      keyAchi: [
        "Zrobiłem refactoring kodu, tworząc czytelną i łatwą w utrzymaniu strukturę w TailwindCSS.",
        "Wzbogaciłem UX o mikro-interakcje sterowane przez GSAP i poprawiłem hierarchię wizualną.",
        "Wdrożyłem podejście mobile-first, zapewniając optymalne działanie na wszystkich urządzeniach."
      ]
    },
    afal: {
      name: "Afal-Logistics",
      review: "Aby przetestować nowy kanał komunikacji, Afal Logistics potrzebował przejrzystej obecności w sieci. Stworzyłem lekką stronę MVP, która łączy czytelność marki, podejście mobile-first oraz modułową strukturę.",
      techReview: "W projekcie wykorzystałem Tailwind do szybkiego stylowania oraz GSAP do subtelnych animacji. Skupiłem się na wydajności i czytelności — tworząc cyfrową wizytówkę, która ładuje się natychmiast. Kod jest gotowy do migracji na CMS.",
      keyWords: ["Komercyjny", "Logistyka", "Dystrybucja", "Dystrybucja", "Landing Page"],
      keyAchi: [
        "Wdrożyłem animacje typu reveal przy użyciu GSAP, nadając stronie profesjonalny charakter.",
        "Zaprojektowałem lekką, responsywną strukturę zoptymalizowaną pod urządzenia mobilne.",
        "Dostarczyłem czysty, modułowy kod gotowy do przyszłej migracji na CMS."
      ]
    },
    gpt3: {
      name: "Chat-GPT3",
      review: "Wdrożyłem gotowy layout dla strony z branży tech, inspirowany GPT-3. Skupiłem się na płynnych animacjach i nowoczesnym, przemyślanym UI/UX, aby stworzyć angażujące i intuicyjne doświadczenie.",
      techReview: "Strona oparta o React dla maksymalnego użycia komponentów. Przejścia CSS zastąpiłem sekwencjami GSAP. Skupiłem się na hierarchii wizualnej, używając gradientów i glassmorphismu, aby podkreślić futurystyczną estetykę.",
      keyWords: ["Mockup", "AI", "Landing Page", "Chatbot", "Nowoczesne UI"],
      keyAchi: [
        "Zaplanowałem i wdrożyłem złożone sekwencje animacji przy użyciu GSAP Timelines.",
        "Poprawiłem modularność komponentów w React, zwiększając utrzymywalność kodu.",
        "Dopracowałem UI, wykorzystując glassmorphism i gradienty zgodnie z charakterem marki."
      ]
    },
    gericht: {
      name: "Gericht Restaurant",
      review: "Podjąłem wyzwanie wdrożenia strony dla restauracji premium na bazie gotowego UI. Praca na predefiniowanym designie pozwoliła mi skupić się na jakości wykonania, płynnych animacjach i ekskluzywnej atmosferze.",
      techReview: "React, custom CSS i GSAP. Nacisk na oprawę wizualną. Stworzyłem wysokiej jakości animacje ScrollTrigger, dopracowałem typografię i zoptymalizowałem grafiki, zapewniając 'app-like experience'.",
      keyWords: ["Mockup", "Restauracja", "Premium", "Landing Page", "Formularz"],
      keyAchi: [
        "Zaprojektowałem immersyjne animacje przewijania przy użyciu GSAP ScrollTrigger.",
        "Dostarczyłem pixel-perfect responsywny layout na wszystkich breakpointach.",
        "Zoptymalizowałem wydajność renderowania, zapewniając płynne animacje w 60fps."
      ]
    },
    cozy: {
      name: "Cozy Leaf",
      review: "Fikcyjna wegańska restauracja potrzebująca odświeżenia marki. Stworzyłem szybką, atrakcyjną stronę z sekcją zamówień, rezerwacją stolików i interaktywnymi animacjami wzbogacającymi doświadczenie.",
      techReview: "Next.js, TypeScript i Tailwind. Modułowa architektura, mikroanimacje GSAP. Efektem jest płynny interfejs zoptymalizowany pod konwersje, o wysokiej wydajności i czystym kodzie.",
      keyWords: ["Mockup", "Restauracja", "Wegańska", "Zamówienia Online", "Rezerwacja"],
      keyAchi: [
        "Wdrożyłem funkcjonalny koszyk (Local Storage), co zapewnia płynne składanie zamówień.",
        "Dopasowałem animacje UI tak, aby strona zachowała wysokie wyniki Core Web Vitals.",
        "Zbudowałem skalowalny system komponentów w Next.js + TypeScript."
      ]
    },
    postprime: {
      name: "Post Prime",
      review: "Marka Post Prime potrzebowała szybkiej, nowoczesnej strony-wizytówki, która przede wszystkim odda energię prowadzonego podcastu. Stworzyłem wysokowydajną stronę z interaktywnymi wizualizacjami 3D, integracją z social media w trybie live oraz przejrzystym, dynamicznym layoutem. Dodatkowym atutem jest automatyczna synchronizacja treści, która agreguje najnowsze materiały z YouTube, Instagram Reels i Facebooka w jednym miejscu.",
      techReview: "Korzystając z Next.js, TypeScript, Tailwind CSS, react-scroll-parallax i Spline, zbudowałem responsywną, ultra-szybką stronę z interaktywnym 3D hero, płynnymi sekcjami parallax oraz automatycznie pobieraną treścią z social media — zapewniając zarówno satysfakcjonujące doświadczenie użytkownika, jak i zaawansowane narzędzia do zarządzania dla klienta.",
      keyWords: ["Komercyjny", "Podcast", "Koszykówka", "Landing Page", "Social Media"],
      keyAchi: [
        "Wdrożyłem ISR (Incremental Static Regeneration) dla aktualizacji feedów z YouTube, Instagram i Facebook.",
        "Stworzyłem wyróżniające się hero section z interaktywnym modelem 3D przy użyciu Spline.",
        "Zredukowałem czas pracy dzięki w pełni zautomatyzowanemu, bezobsługowemu pipeline’owi treści social media."
      ]
    }
  }
};

export const getProjects = (lang: Language): Project[] => {
  return baseProjects.map((base) => {
    const localized = translations[lang][base.key];
    return {
      ...base,
      ...localized,
    };
  });
};