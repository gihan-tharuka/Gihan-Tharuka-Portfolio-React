import { useState, useEffect, useRef } from "react";
import Projects from "./Projects";
import { Link } from "react-router-dom";
import projects from "../../data/projects";
import {
  faBriefcase,
  faRocket,
  faLock,
  faArrowRight,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [animate, setAnimate] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [filtering, setFiltering] = useState(false);

  // Check reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Trigger entrance animations
  useEffect(() => {
    setAnimate(true);
  }, []);

  // Animate cards in on filter change
  useEffect(() => {
    setFiltering(true);
    setVisibleCards([]);
    const timer = setTimeout(() => {
      setVisibleCards(filteredProjects.map((p) => p.id));
      setFiltering(false);
    }, 50);
    return () => clearTimeout(timer);
  }, [selectedFilter]);

  const projectTypes = [
    "All",
    "Laravel",
    "React",
    "Java",
    "C#",
    "Python",
    "Flutter",
    "Web Development",
  ];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.filtertag === selectedFilter);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black"
      id="portfolio"
      aria-label="Portfolio"
    >
      {/* ===== ADVANCED BACKGROUND EFFECTS ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Gradient orbs */}
        <div className="absolute -top-60 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-picto-primary/12 via-orange-500/8 to-transparent rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-picto-primary/8 via-purple-500/5 to-transparent rounded-full blur-3xl animate-blob animation-delay-4"></div>
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-gradient-to-r from-orange-300/8 to-picto-primary/5 rounded-full blur-3xl animate-blob animation-delay-8"></div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,122,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,0,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        ></div>

        {/* Subtle floating dots */}
        <div className="hidden lg:block">
          <div className="absolute top-32 right-[20%] w-2 h-2 bg-picto-primary/25 rounded-full animate-float"></div>
          <div className="absolute bottom-48 left-[15%] w-3 h-3 border border-picto-primary/20 rounded-full animate-float animation-delay-3"></div>
          <div className="absolute top-[40%] right-[8%] w-1.5 h-1.5 bg-orange-300/30 rounded-full animate-float animation-delay-6"></div>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== SECTION HEADER ===== */}
        <div
          className={`text-center mb-16 lg:mb-20 transition-all duration-700 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-picto-primary/20 via-picto-primary/10 to-transparent backdrop-blur-md rounded-full border border-picto-primary/25 mb-6">
            <div className="w-2 h-2 bg-picto-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-picto-primary">
              Featured Work
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white/80 bg-clip-text text-transparent">
              My Portfolio &
            </span>
            <br />
            <span className="bg-gradient-to-r from-picto-primary via-orange-500 to-picto-primary bg-clip-text text-transparent">
              Recent Projects
            </span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Explore my latest projects where code meets creativity. Each project
            represents a unique challenge solved with modern technologies and
            thoughtful architecture.
          </p>

        </div>

        {/* ===== FILTER BUTTONS ===== */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {projectTypes.map((type, index) => {
            const isActive = selectedFilter === type;
            const projectCount =
              type === "All"
                ? projects.length
                : projects.filter((p) => p.filtertag === type).length;

            return (
              <button
                key={type}
                onClick={() => setSelectedFilter(type)}
                className={`group relative px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden ${
                  isActive
                    ? "bg-gradient-to-r from-picto-primary to-orange-400 text-white shadow-lg shadow-picto-primary/25"
                    : "bg-white/[0.06] backdrop-blur-sm text-gray-400 hover:text-picto-primary border border-white/[0.1] hover:border-picto-primary/30 hover:shadow-md hover:bg-white/[0.08]"
                }`}
                style={{
                  transitionDelay: reducedMotion ? "0ms" : `${index * 60}ms`,
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {type}
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-picto-primary/10 text-picto-primary group-hover:bg-picto-primary/20"
                    }`}
                  >
                    {projectCount}
                  </span>
                </span>

                {/* Active shimmer */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* ===== PROJECTS GRID ===== */}
        <div
          className={`transition-all duration-500 ${
            filtering ? "opacity-50 scale-[0.98]" : "opacity-100 scale-100"
          }`}
        >
          {filteredProjects.length > 0 ? (
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-6 lg:gap-8">
              {filteredProjects
                .slice()
                .sort((a, b) => (a.order || 0) - (b.order || 0))
                .map((p, index) => {
                  const isVisible = visibleCards.includes(p.id);
                  return (
                    <div
                      key={p.id}
                      className={`transition-all duration-700 ${
                        isVisible
                          ? "opacity-100 translate-y-0 scale-100"
                          : "opacity-0 translate-y-12 scale-95"
                      }`}
                      style={{
                        transitionDelay: reducedMotion
                          ? "0ms"
                          : `${index * 100}ms`,
                      }}
                    >
                      <Projects
                        data={{
                          image: p.heroImage,
                          skills: p.skills || [],
                          title: p.title,
                          description: p.short,
                          link: `/projects/${p.slug}`,
                          visibility: p.visibility,
                          filtertag: p.filtertag,
                          links: p.links,
                        }}
                      />
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-picto-primary/10 to-orange-100/10 rounded-2xl flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-3xl text-picto-primary/50"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-300 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500">
                No projects match the "{selectedFilter}" filter. Try
                selecting a different category.
              </p>
            </div>
          )}
        </div>

        {/* ===== BOTTOM CTA ===== */}
        <div
          className={`text-center mt-16 lg:mt-20 transition-all duration-1000 delay-700 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-picto-primary/40 to-transparent"></div>
            <FontAwesomeIcon
              icon={faRocket}
              className="text-picto-primary text-xl"
            />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-picto-primary/40 to-transparent"></div>
          </div>

          <Link
            to="/projects"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-picto-primary to-orange-400 hover:from-orange-400 hover:to-picto-primary text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl shadow-picto-primary/25 hover:shadow-3xl hover:shadow-picto-primary/40 transform hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Projects
              <FontAwesomeIcon
                icon={faArrowRight}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12 translate-x-full group-hover:translate-x-0"></div>
            <span className="absolute inset-0 overflow-hidden rounded-2xl">
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;