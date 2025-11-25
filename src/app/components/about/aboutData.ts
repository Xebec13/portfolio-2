// Define the structure for rich content (like Open Source projects)
export interface ContentItem {
  name: string;
  href?: string;
  description: string;
  contributions?: string[];
  techStack?: string[];
}

// Define the main structure
export interface AboutItem {
  name: string; // Used for tabs/buttons
  headings: string[];
  badges?: string[];
  // Polymorphic content: can be simple text lines OR complex objects
  content: (string | ContentItem)[]; 
}

// Main description text (moved from component to data file)
export const infoContent = [
    "I’m a Front-End Developer creating modern, responsive, and animation-rich web applications with React, TypeScript, Tailwind, and GSAP, with experience managing teams of up to 50 people.",
    "Driven to transition fully into IT, I completed comprehensive coding programs at CodersLab and continued developing my skills through self-learning, online courses, and hands-on practice, including community platforms like icodethis.com.",
    "Since then, I’ve built 5+ fully responsive, animated projects, including a working MVP for a local business. I’m actively looking to apply my skills in real team environments, delivering end-to-end, market-ready products."
];

export const aboutData: AboutItem[] = [
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
      // Add more real examples here if you have them
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
    // Strings representing industries/experience
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