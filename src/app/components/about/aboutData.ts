import { Language } from "../context/translations";

// ==========================================
// Types & Interfaces
// ==========================================

export interface ContentItem {
  name: string;
  href?: string;
  description: string;
  contributions?: string[];
  techStack?: string[];
}

export interface AboutItem {
  name: string; 
  headings: string[];
  badges?: string[];
  content: (string | ContentItem)[];
}

// ==========================================
// 1. English Data
// ==========================================

const infoContentEn: string[] = [
  "I’m a Front-End Developer creating modern, responsive, and animation-rich web applications with React, TypeScript, Tailwind, and GSAP, with experience managing teams of up to 50 people.",
  "Driven to transition fully into IT, I completed comprehensive coding programs at CodersLab and continued developing my skills through self-learning, online courses, and hands-on practice, including community platforms like icodethis.com.",
  "Since then, I’ve built 5+ fully responsive, animated projects, including a working MVP for a local business. I’m actively looking to apply my skills in real team environments, delivering end-to-end, market-ready products."
];

const aboutDataEn: AboutItem[] = [
  {
    name: "Coding",
    headings: ["My Tech Stack", "Recent Contributions"],
    badges: [
      "HTML", "CSS", "JavaScript", "TypeScript",
      "Tailwind", "Sass", "GSAP",
      "React", "Next.js", "Figma",
      "Node.js", "Python"
    ],
    content: [
      {
        name: "Open Source / Side Project",
        href: "https://github.com/Xebec13",
        description: "Active participation in community challenges.",
        contributions: [
          "Built interactive UI components for community challenges.",
          "Refactored legacy code to modern React hooks pattern."
        ],
        techStack: ["React", "Tailwind", "Vite"],
      }
    ]
  },
  {
    name: "Professional",
    headings: ["Technical Skills", "Industry Experience"],
    badges: [
      "Scrum", "Jira", "Git", "Code Review",
      "Responsive Design", "WCAG (Accessibility)",
      "REST API", "GraphQL", "Performance Opt."
    ],
    content: [
      "Digital Agencies & Creative Studios",
      "E-commerce & SaaS Platforms",
      "Hospitality & Local Business Solutions",
      "Startups & MVP Development",
      "Education & E-learning Systems"
    ]
  },
  {
    name: "Certificates",
    headings: ["Recently Earned"],
    content: [
      "CodersLab IT School — Advanced Web Developers: JavaScript, React, Redux (100h)",
      "CodersLab IT School — Web Developer: JavaScript, Python (200h)",
      "Google Certificate — UX Design Foundations",
      "Agile/Scrum Fundamentals"
    ]
  },
  {
    name: "Private",
    headings: ["Hobbies & Interests"],
    badges: ["Coding", "Travel", "Cooking", "Basketball", "Psychology", "Sci-Fi"],
    content: [
      "I bring my ideas to life through programming, turning concepts into real projects.",
      "Basketball keeps me active, and I especially enjoy the tactical side of the game.",
      "I love traveling, mostly to discover local cuisines and brutalist architecture."
    ]
  }
];

// ==========================================
// 2. Polish Data
// ==========================================

const infoContentPl: string[] = [
  "Jestem Front-End Developerem tworzącym nowoczesne, responsywne i bogate w animacje aplikacje webowe przy użyciu React, TypeScript, Tailwind i GSAP, z doświadczeniem w zarządzaniu zespołami do 50 osób.",
  "Dążąc do pełnego przebranżowienia na IT, ukończyłem kompleksowe programy w CodersLab i kontynuowałem rozwój poprzez samokształcenie, kursy online oraz praktykę, w tym na platformach społecznościowych takich jak icodethis.com.",
  "Od tego czasu zbudowałem ponad 5 w pełni responsywnych, animowanych projektów, w tym działające MVP dla lokalnej firmy. Aktywnie poszukuję możliwości wykorzystania moich umiejętności w pracy zespołowej, dostarczając gotowe produkty rynkowe."
];

const aboutDataPl: AboutItem[] = [
  {
    name: "Kodowanie",
    headings: ["Mój Stack Technologiczny", "Ostatnie Aktywności"],
    badges: [
      "HTML", "CSS", "JavaScript", "TypeScript",
      "Tailwind", "Sass", "GSAP",
      "React", "Next.js", "Figma",
      "Node.js", "Python"
    ],
    content: [
      {
        name: "Open Source / Projekty Poboczne",
        href: "https://github.com/Xebec13",
        description: "Aktywny udział w wyzwaniach społeczności.",
        contributions: [
          "Tworzenie interaktywnych komponentów UI w ramach wyzwań.",
          "Refaktoryzacja starszego kodu do nowoczesnych wzorców React Hooks."
        ],
        techStack: ["React", "Tailwind", "Vite"],
      }
    ]
  },
  {
    name: "Zawodowe",
    headings: ["Umiejętności Techniczne", "Doświadczenie Branżowe"],
    badges: [
      "Scrum", "Jira", "Git", "Code Review",
      "Responsive Design", "WCAG (Dostępność)",
      "REST API", "GraphQL", "Optymalizacja"
    ],
    content: [
      "Agencje Cyfrowe i Studia Kreatywne",
      "Platformy E-commerce i SaaS",
      "Rozwiązania dla Hotelarstwa i Lokalnego Biznesu",
      "Startupy i Tworzenie MVP",
      "Systemy Edukacyjne i E-learning"
    ]
  },
  {
    name: "Certyfikaty",
    headings: ["Ostatnio Zdobyte"],
    content: [
      "CodersLab IT School — Advanced Web Developers: JavaScript, React, Redux (100h)",
      "CodersLab IT School — Web Developer: JavaScript, Python (200h)",
      "Certyfikat Google — Podstawy UX Design",
      "Fundamenty Agile/Scrum"
    ]
  },
  {
    name: "Prywatnie",
    headings: ["Hobby i Zainteresowania"],
    badges: ["Kodowanie", "Podróże", "Gotowanie", "Koszykówka", "Psychologia", "Sci-Fi"],
    content: [
      "Realizuję swoje pomysły poprzez programowanie, zamieniając koncepcje w rzeczywiste projekty.",
      "Koszykówka utrzymuje mnie w ruchu, szczególnie cenię taktyczny aspekt gry.",
      "Uwielbiam podróże, głównie po to, by odkrywać lokalne kuchnie i brutalistyczną architekturę."
    ]
  }
];

// ==========================================
// 3. Data Retrieval Logic
// ==========================================

export const getAboutData = (lang: Language): AboutItem[] => {
  return lang === "pl" ? aboutDataPl : aboutDataEn;
};

export const getInfoContent = (lang: Language): string[] => {
  return lang === "pl" ? infoContentPl : infoContentEn;
};