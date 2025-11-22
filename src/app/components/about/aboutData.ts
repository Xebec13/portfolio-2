export interface AboutItem {
  name: string;
  headings: string[];
  badges?: string[];
  content: (string | ContentItem)[];
}

interface ContentItem {
  name: string;
  href?: string;
  description: string;
  contributions?: string[];
  techStack?: string[];
}

export const aboutData: AboutItem[] = [
  {
    name: "Coding",
    headings: ["My Tech Stack", "Open Source"],
    badges: [
      "HTML", "CSS", "JavaScript", "TypeScript",
      "Tailwind","Sass","GSAP", 
      "React", "Next.js", "Figma",
      "Node", "Python"
    ],
    content: [
      {
        name: "Example Project Name",
        href: "https://github.com/yourproject",
        description: "Short one-sentence summary of what the project is.",
        contributions: [
          "Here goes the first sentence about your contribution.",
          "Here goes the second sentence about your contribution."
        ],
        techStack: [
          "Frontend — React",
          "Styling — Tailwind",
          "Build — Next.js",
        ],
      },
      {
        name: "Another Project Name",
        href: "https://github.com/yourproject2",
        description: "Short one-sentence summary for the second project.",
        contributions: [
          "Your first contribution detail.",
          "Your second contribution detail."
        ],
        techStack: [
          "Frontend — React",
          "Styling — Tailwind",
          "Build — Next.js",
        ],
      }
    ]
  },

  {
    name: "Professional",
    headings: ["Technical", "Skills"],
    badges: [
      "Scrum",
      "Jira",
      "Collaboration",
      "Responsive",
      "UX/UI",
      "Accessibility",
      "Animation",
      "GraphQL",
      "REST API",
      "API",
      "Performance",
      "Testing"
    ],
    content: [
      "Art & Design",
      "Hospitality & Restaurants",
      "Startups & SaaS",
      "Fitness & Wellness",
      "E-commerce",
      "Education & E-learning",
      "Portfolio & Personal Branding",
      "Local Businesses",
      "Events & Entertainment",
      "Digital Agencies / Creative Studios"
    ]
  },
  {
    name: "Certificates",
    headings: ["Recently Earned"],
    content: [
      "CodersLab IT School — Advanced Web Developers: JavaScript, React, Redux (100h)",
      "CodersLab IT School — Web Developer: JavaScript, Python (200h)",
      "Scrum Certificate — foundational agile methodology",
      "Google Certificate — Front-End Development"
    ]
  },

  {
    name: "Private",
    headings: ["Hobbies"],
    badges: ["Coding", "Travel", "Food", "Basketball", "Criminology", "Psychology", "Comics", "Manga"],
    content: [
      "I bring my ideas to life through programming, turning concepts into real projects.",
      "Basketball keeps me active, and I especially enjoy the tactical side of the game.",
      "Love traveling only for the food discovering"
    ]
  }
];