import { Language } from "./uiData";

// ==========================================
// 1. Types & Interfaces (Result / Component Types)
// ==========================================

export interface ContentItem {
  name: string;
  href?: string;
  description: string;
  contributions?: string[];
  techStack?: string[];
}

// Typ wynikowy, którego używają Twoje komponenty (spłaszczony)
export interface AboutItem {
  name: string;
  headings: string[];
  badges?: string[];
  content: (string | string[] | ContentItem)[];
}

// ==========================================
// 2. Source Data Types (Structured for Co-location)
// ==========================================

// Struktura danych wewnątrz 'content' (to co się zmienia językowo)
interface LocalizedAboutContent {
  headings: string[];
  badges: string[]; // Badges są w content, bo w 'Personal' i 'Learning' się tłumaczą
  // Content jest polimorficzny (stringi, tablice lub obiekty), więc trzymamy go w wersji lokalnej
  items: (string | string[] | ContentItem)[]; 
}

// Główna struktura źródłowa
interface AboutDataSource {
  id: number; // Opcjonalnie do kluczy Reacta
  name: string; // Wspólna nazwa sekcji (np. Coding, Professional)
  content: {
    en: LocalizedAboutContent;
    pl: LocalizedAboutContent;
  };
}

// ==========================================
// 3. Info Content (Intro Text)
// ==========================================

const infoData: Record<Language, string[]> = {
  en: [
    "I’m a Front-End Developer creating modern, responsive, and animation-rich web applications with React, JavaScript, TypeScript, Tailwind, Motion, GSAP, with experience managing teams of up to 50 people.",
    "Driven to transition fully into IT, I completed comprehensive coding programs at CodersLab and continued developing my skills through self-learning, online courses, and hands-on practice, including community platforms like icodethis.com.",
    "Since then, I’ve built 5+ fully responsive, animated projects, including a working MVP for a local business. I’m actively looking to apply my skills in real team environments, delivering end-to-end, market-ready products, and I aim to expand my UX knowledge to better leverage my psychology academic background."
  ],
  pl: [
    "Jestem Front-End Developerem, który tworzy nowoczesne, responsywne i bogate w animacje aplikacje webowe przy użyciu React, JavaScript, TypeScript, Tailwind, Motion, GSAP, a w poprzednich rolach zawodowych zarządzałem zespołami liczącymi nawet 50 osób.",
    "Dążąc do pełnego wejścia do branży IT, ukończyłem certyfikowane programy w CodersLab, a następnie kontynuowałem rozwój poprzez samodzielną naukę, kursy online i praktykę — również na platformach z aktywną społecznością, takich jak icodethis.com.",
    "Od tego czasu zrealizowałem ponad 5 w pełni responsywnych i animowanych projektów, w tym stronę MVP dla lokalnego biznesu. Szukam możliwości współpracy w rzeczywistych projektach zespołowych przy tworzeniu end-to-end produktów gotowych do wdrożenia i chciałbym rozwijać kompetencje UX, aby lepiej wykorzystać moje psychologiczne wykształcenie."
  ]
};

// ==========================================
// 4. About Sections Data 
// ==========================================

const aboutDataSource: AboutDataSource[] = [
  {
    id: 1,
    name: "Coding",
    content: {
      en: {
        headings: ["Tech Stack", "Activity"],
        badges: [
          "HTML", "CSS", "JavaScript", "TypeScript",
          "Tailwind", "SCSS", "GSAP","Motion",
          "React", "Next.js", "Node.js", "Jest", "Python", "Java basics", "PHP basics"
        ],
        items: [
          {
            name: "I Code This",
            href: "https://icodethis.com/Xebec13",
            description: "Active participation in community challenges.",
            contributions: [
              "Three of my projects were recognized for staying in the Top 5.",
              "One of them remains in the Top 5 and keeps growing in popularity."
            ],
          },
          // {
          //   name: "I Code This",
          //   href: "https://github.com/Xebec13",
          //   description: "Active participation in community challenges.",
          //   contributions: [
          //     "Built interactive UI components for community challenges.",
          //     "Refactored legacy code to modern React hooks pattern."
          //   ],
          //   techStack: ["React", "Tailwind", "Vite"],
          // }
        ]
      },
      pl: {
        headings: ["Tech Stack", "Aktywności"],
        badges: [
          "HTML", "CSS", "JavaScript", "TypeScript",
          "Tailwind", "SCSS", "GSAP","Motion",
          "React", "Next.js", "Node.js", "Jest", "Python", "Java basics", "PHP basics"
        ],
        items: [
          {
            name: "I Code This",
            href: "https://github.com/Xebec13",
            description: "Active participation in community challenges.",
            contributions: [
              "Trzy z moich projektów zostały wyróżnione za utrzymanie się w pierwszej piątce.",
              "Jeden z nich nadal znajduje się w Top 5 i wciąż zyskuje na popularności."
            ],
            techStack: ["React", "Tailwind", "Vite"],
          },
          // {
          //   name: "I Code This",
          //   href: "https://github.com/Xebec13",
          //   description: "Active participation in community challenges.",
          //   contributions: [
          //     "Built interactive UI components for community challenges.",
          //     "Refactored legacy code to modern React hooks pattern."
          //   ],
          //   techStack: ["React", "Tailwind", "Vite"],
          // }
        ]
      }
    }
  },
  {
    id: 2,
    name: "Professional",
    content: {
      en: {
        headings: ["Skills", "Experiences", "Segments", "Competences"],
        badges: [
          "rest api", "graphql", "fetch api", "responsive", "accessibility",
          "web animations", "ux/ui basics", "testing", "performance", "ci/cd",
          "docker", "linux", "npm/yarn", "scrum", "agile", "tools", "ai tools", "3rd-party"
        ],
        items: [
          [
            "Clubs", "Restaurant", "Hotel", "Resort", "Events", "Podcast", "Distribution"
          ],
          [
            "Team Leadership & Operations", "Operations Setup", "Business Process Optimization",
            "Budgeting & Cost control", "Staff training", "B2B Offering",
            "Customer Relations & Experience", "SM Management & Basic Marketing",
            "Inventory Management", "Event Management"
          ]
        ]
      },
      pl: {
        headings: ["Umiejętności", "Doświadczenie", "Segmenty", "Kompetencje"],
        badges: [
          "rest api", "graphql", "fetch api", "responsive", "accessibility",
          "web animations", "ux/ui basics", "testing", "performance", "ci/cd",
          "docker", "linux", "npm/yarn", "scrum", "agile", "tools", "ai tools", "3rd-party"
        ],
        items: [
          [
            "Kluby", "Restauracja", "Hotel", "Resort", "Imprezy", "Podcast", "Sprzedaż"
          ],
          [
            "Zarządzanie zespołem i operacjami", "Tworzenie i uruchamianie procesów operacyjnych",
            "Optymalizacja procesów biznesowych", "Budżetowanie i kontrola kosztów",
            "Rozwój zespołu", "Ofertowanie B2B", "Relacje i doświadczenia Klienta",
            "Zarządzanie w marketingu i social media", "Zarządzanie zaopatrzeniem",
            "Zarządzanie eventami"
          ]
        ]
      }
    }
  },
  {
    id: 3,
    name: "Learning",
    content: {
      en: {
        headings: ["Goals", "Certificates"],
        badges: ["Custom component library", "Start open source project", "svg manipulation", "three.js", "databases"],
        items: [
          [
            "ADVANCED WEB DEVELOPERS: JAVASCRIPT, REACT, REDUX",
            "WEB DEVELOPER: JAVASCRIPT, PYTHON",
            "FOUNDATIONAL AGILE METHODOLOGY"
          ],
          [
            "CodersLab IT School — Advanced Web Developers: JavaScript, React, Redux (100h)",
            "CodersLab IT School — Web Developer: JavaScript, Python (200h)",
            "Scrum Certificate",
          ],
        ]
      },
      pl: {
        headings: ["Cele", "Certyfikaty"],
        badges: ["Custom biblioteka komponentów", "Start własnego proejktu open source", "manipulacja svg", "three.js", "bazy danych"],
        items: [
          [
            "ADVANCED WEB DEVELOPERS: JAVASCRIPT, REACT, REDUX",
            "WEB DEVELOPER: JAVASCRIPT, PYTHON",
            "FOUNDATIONAL AGILE METHODOLOGY"
          ],
          [
            "CodersLab IT School — Advanced Web Developers: JavaScript, React, Redux (100h)",
            "CodersLab IT School — Web Developer: JavaScript, Python (200h)",
            "Scrum Certificate",
          ],
        ]
      }
    }
  },
  {
    id: 4,
    name: "Personal",
    content: {
      en: {
        headings: ["Hobbies", "Facts about me"],
        badges: [
          "basketball", "sports", "travel", "cooking", "criminology",
          "comics", "fantasy", "gaming", "manga", "and of course coding!"
        ],
        items: [
          // Tablica 1: Tematy
          ["traveling", "basketball", "comics"],
          // Tablica 2: Opisy
          [
            "up until now, i visited or worked in up to 20 different countries, still counting.",
            "trained and played in many matches since i was 9.",
            "i consider myself a walking encyclopedia of marvel and dc universes, you can try me."
          ]
        ]
      },
      pl: {
        headings: ["Hobby", "Fakty o mnie"],
        badges: [
          "koszykówka", "sport", "podróże", "gotowanie", "kryminalistyka",
          "komiksy", "fantastyka", "gry", "manga", "i oczywiście programowanie!"
        ],
        items: [
          // Tablica 1: Tematy
          ["podróże", "koszykówka", "komiksy"],
          // Tablica 2: Opisy
          [
            "do tej pory odwiedziłem lub pracowałem w około 20 różnych krajach, a lista się powiększa.",
            "od 9 roku życia gram w kosza.",
            "jestem chodzącą encyklopedią uniwersów marvel i dc — możesz mnie sprawdzić."
          ]
        ]
      }
    }
  }
];

// ==========================================
// 5. Logic
// ==========================================

export const getAboutData = (lang: Language): AboutItem[] => {
  return aboutDataSource.map((section) => {
    // 1. Wyciągamy 'content' i część wspólną ('name')
    const { content, ...baseData } = section;
    
    // 2. Pobieramy wersję dla danego języka
    const localized = content[lang];
    
    // 3. Łączymy w obiekt wynikowy zgodny z AboutItem
    // Uwaga: w źródle nazwałem pole 'items' (żeby nie mylić z 'content'), 
    // ale komponenty oczekują pola 'content', więc tutaj przemapowujemy items -> content.
    return {
      name: baseData.name,
      headings: localized.headings,
      badges: localized.badges,
      content: localized.items, 
    };
  });
};

export const getInfoContent = (lang: Language): string[] => {
  return infoData[lang];
};