import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  //redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  //docker,
  //meta,
  kapri,
  personal,
  //tesla,
  //shopify,
  apple,
  travel,
  movie,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  //{
  //  name: "Redux Toolkit",
  //  icon: redux,
  //},
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  //{
  //  name: "docker",
  //  icon: docker,
  //},
];

const experiences = [
  {
    title: "IT Staff Intern",
    company_name: "Kabar Priangan",
    icon: kapri,
    iconBg: "#383E56",
    date: "Sep 2023 - Dec 2023",
    points: [
      "Built KlikPriangan, a news portal with Laravel, improving page load speed by 35% through query optimization.",
      "Developed a web-based attendance system using PHP reducing manual tracking by 90%.",
      "Configured MikroTik routers (leveraging MTCNA certification) to stabilize office network uptime.",
    ],
  },
  {
    title: "Personal Project ",
    company_name: "React, Next.js, JavaScript, TypeScript",
    icon: personal,
    iconBg: "#000000",
    date: "Jan 2025 - present",
    points: [
      "Apple Website Clone (React.js, Three.js, GSAP, Tailwind CSS.",
      "HiLink Travel Website (React.js, Next.js 13, Tailwind CSS, TypeScript). ",
      "Movie App (React.js, Appwrite, Tailwind CSS).",
      "GPT-3 Modern UI-UX (React.js, Tailwind CSS).",
      "Xora (React.js, Vite, Tailwind CSS).",
    ],
  },
  //{
  //  title: "Hilink Travel App (Personal Project)",
  //  company_name: "Next.js, Tailwind CSS, TypeScript",
  //icon: shopify,
  //  iconBg: "#383E56",
  //  date: "Jan 2022 - Jan 2023",
  //  points: [
  //    "Built a modern travel website with dynamic routing and optimized loading.",
  //    "Implemented reusable UI components with Tailwind CSS.",
  //    "Practiced responsive design for mobile-first experience.",
  //  ],
  //},
  //{
  //  title: "Movie App (Personal Project)",
  //  company_name: "React.js, Tailwind CSS, Appwrite",
  //icon: meta,
  //  iconBg: "#E6DEDD",
  //  date: "Jan 2023 - Present",
  //  points: [
  //    "Developed a responsive movie application to browse and search.",
  //    "Integrated Appwrite for backend services including authentication and database management.",
  //    "Designed clean and user-friendly UI with Tailwind CSS for optimal user experience.",
  //    "Practices CRUD operations, API consumption, and state management using React Hooks.",
  //  ],
  //},
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Apple Website Clone",
    description:
      "A responsive, pixel-perfect recreation of Apple's official website, featuring smooth scroll animations, dynamic product showcases, and immersive 3D interactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "white-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: apple,
    source_code_link: "https://github.com/moonstar2212/apple-website",
    live_demo: "https://wahyuni-apple-website.vercel.app/",
  },
  {
    name: "Hilink Travel Website",
    description:
      "A modern travel platform showcasing destination discovery with intuitive booking flows and immersive visual experiences.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
        color: "black-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/moonstar2212/travel_website",
    live_demo: "https://wahyuni-travel-website.vercel.app/",
  },
  {
    name: "Movie App",
    description:
      "A dynamic film exploration platform that empowers user to browse trending movies, discover hidden gems, and explore detailed information about their favorite films.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/moonstar2212/movie_app",
    live_demo: "https://wahyuni-movie-app.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
