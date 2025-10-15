const projects = [
  {
    id: "product-admin-dashboard",
    slug: "product-admin-dashboard",
    title: "Product Admin Dashboard",
    short: "Responsive admin UI for managing product data and analytics.",
    role: "UI/UX Designer & Frontend",
    year: 2024,
    duration: "4 months",
    heroImage: "/src/assets/images/portfolio/product-hero.jpg",
    gallery: [
      "/src/assets/images/portfolio/card-1.png",
      "/src/assets/images/portfolio/card-2.png",
    ],
    tools: ["React", "Tailwind", "Chart.js"],
    skills: ["UI/UX", "Frontend", "Data Viz"],
    challenge: "Improve data visibility and reduce time to insights for product managers.",
    approach: "User interviews, wireframing, responsive components, performance tuning.",
    solution:
      "Built modular dashboard components, lazy-loaded charts, and redesigned workflows to surface key metrics.",
    impact: [
      { metric: "Page load", before: "3.8s", after: "1.2s" },
      { metric: "Task time", before: "12m", after: "4m" },
    ],
    links: { live: "#!", repo: "#!" },
    seo: { description: "Product Admin Dashboard case study", ogImage: "/src/assets/images/portfolio/card-1.png" },
  },
  {
    id: "portfolio-website",
    slug: "portfolio-website",
    title: "Portfolio Website",
    short: "Personal portfolio built with React and Tailwind.",
    role: "Designer & Developer",
    year: 2025,
    duration: "2 months",
    heroImage: "/src/assets/images/portfolio/card-3.png",
    gallery: ["/src/assets/images/portfolio/card-3.png", "/src/assets/images/portfolio/card-4.png"],
    tools: ["React", "Vite", "Tailwind"],
    skills: ["UI/UX", "React", "Performance"],
    challenge: "Create a performance-first portfolio showcasing projects with a clean UX.",
    approach: "Design system, component library, accessibility-focused UI.",
    solution: "Implemented responsive design, optimized assets, and accessible components.",
    impact: [{ metric: "Load time", before: "2.6s", after: "1.1s" }],
    links: { live: "#!", repo: "#!" },
    seo: { description: "Portfolio website case study", ogImage: "/src/assets/images/portfolio/card-3.png" },
  },
];

export default projects;
