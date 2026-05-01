/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  role: "Lead Full-Stack" | "Frontend Architect" | "Backend Specialist";
  year: string;
  demoUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "beadsbytricia",
    title: "BeadsbyTricia",
    description:
      "Built an e-commerce platform for BeadsbyTricia, positioned as Nigeria's No.1 luxury bead accessories brand, with a premium shopping experience and conversion-focused storefront.",
    tags: ["E-commerce", "React", "Node.js", "Payments"],
    role: "Lead Full-Stack",
    year: "2025",
    demoUrl: "https://beadsbytricia.com",
  },
  {
    id: "taojaa-builder",
    title: "Taojaa",
    description:
      "Developed an e-commerce builder tailored for African markets, enabling businesses to launch and manage online stores quickly with flexible storefront and product management tools.",
    tags: ["SaaS", "E-commerce Builder", "TypeScript", "REST API"],
    role: "Frontend Architect",
    year: "2025",
    demoUrl: "https://www.taojaa.com",
  },
  {
    id: "stembridge",
    title: "StemBridge",
    description:
      "Built and managed the web platform for an NGO focused on women empowerment through education, prioritizing accessibility, responsiveness, and clear storytelling.",
    tags: ["NGO", "Education", "Responsive UI", "CMS"],
    role: "Frontend Architect",
    year: "2025",
    demoUrl: "https://stemebrdg.org",
  },
  {
    id: "libre-coin-parking",
    title: "Libre Coin Parking",
    description:
      "Implemented a parking lot reservation system for Japanese users in partnership with a company in Japan, supporting reliable slot booking workflows and smooth user journeys.",
    tags: ["Reservation System", "PHP", "PostgreSQL"],
    role: "Lead Full-Stack",
    year: "2024",
    demoUrl: "https://libre-parking.jp/",
  },
  {
    id: "many-other-projects",
    title: "Many Other Projects",
    description:
      "Delivered multiple additional products across e-commerce, web platforms, and business tools, covering both frontend and backend implementation from concept to deployment.",
    tags: ["Frontend", "Backend", "Product Delivery", "Scalable Systems"],
    role: "Backend Specialist",
    year: "2023",
  },
];

export const SKILLS = {
  Frontend: [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "Responsive UI",
  ],
  Backend: [
    "Node/Express.js",
    "NestJS",
    "REST APIs",
    "PostgreSQL",
    "MongoDB",
    "Authentication",
  ],
  Tools: ["Git", "Docker", "Vite", "Postman", "CI/CD", "Agile Delivery"],
};

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export const EXPERIENCE: Experience[] = [
  {
    company: "PrecisionNote",
    role: "Software Developer (Full-time)",
    period: "Feb 2026 — Present",
    description:
      "Working on a medical transcription and documentation platform serving both B2B and B2C users. I contribute across frontend and backend, delivering scalable features that improve documentation workflows, product reliability, and overall user experience.",
  },
  {
    company: "STEM Bridge",
    role: "Web Developer (Part-time)",
    period: "Jul 2025 — Oct 2025",
    description:
      "Responsible for designing, developing, and managing the company website. Built a modern, responsive, and user-friendly platform while ensuring consistent performance, seamless updates, and strong alignment with branding and business objectives.",
  },
  {
    company: "Taojaa",
    role: "Frontend Developer (Full Time)",
    period: "Dec 2024 — March 2025",
    description:
      "Worked as a Frontend Engineer, collaborating with the team to build a powerful custom e-commerce website builder that simplified online store creation. Also contributed to the development of multiple themes and landing pages, ensuring both functionality and engaging user experiences.",
  },
  {
    company: "DevSue Technologies",
    role: "Frontend Developer (Contract)",
    period: "Aug 2024 — Nov 2024",
    description:
      "Worked on a contract basis with the development team to deliver a complete end-to-end e-commerce solution for a fashion brand. Oversaw the full development cycle from planning and design through deployment, ensuring a functional, scalable, and visually engaging online store.",
  },
  {
    company: "Strucaid NG",
    role: "Frontend Developer (Contract)",
    period: "Jul 2023 — May 2024",
    description:
      "Developed hybrid-work frontend features with React.js and JavaScript, improving UI consistency and delivery speed across product modules.",
  },
];
