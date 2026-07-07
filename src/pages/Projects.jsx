import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBriefcase,
  faEye,
  faLayerGroup,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ProjectCard from "../components/portfolio/Projects";
import projects from "../data/projects";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [animate, setAnimate] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const [filtering, setFiltering] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (event) => setReducedMotion(event.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const sortedProjects = useMemo(
    () => [...projects].sort((a, b) => (a.order || 0) - (b.order || 0)),
    []
  );

  const projectTypes = useMemo(() => {
    const types = sortedProjects.map((project) => project.filtertag).filter(Boolean);
    return ["All", ...Array.from(new Set(types))];
  }, [sortedProjects]);

  const filteredProjects = useMemo(
    () =>
      selectedFilter === "All"
        ? sortedProjects
        : sortedProjects.filter((project) => project.filtertag === selectedFilter),
    [selectedFilter, sortedProjects]
  );

  useEffect(() => {
    setFiltering(true);
    setVisibleCards([]);
    const timer = setTimeout(() => {
      setVisibleCards(filteredProjects.map((project) => project.id));
      setFiltering(false);
    }, 50);
    return () => clearTimeout(timer);
  }, [filteredProjects]);

  return (
    <section
      className="relative min-h-screen py-16 md:py-24 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black"
      id="projects"
      aria-label="All Projects"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-60 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-picto-primary/12 via-orange-500/8 to-transparent rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-picto-primary/8 via-purple-500/5 to-transparent rounded-full blur-3xl animate-blob animation-delay-4"></div>
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-gradient-to-r from-orange-300/8 to-picto-primary/5 rounded-full blur-3xl animate-blob animation-delay-8"></div>

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,122,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,0,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        ></div>

        <div className="hidden lg:block">
          <div className="absolute top-32 right-[20%] w-2 h-2 bg-picto-primary/25 rounded-full animate-float"></div>
          <div className="absolute bottom-48 left-[15%] w-3 h-3 border border-picto-primary/20 rounded-full animate-float animation-delay-3"></div>
          <div className="absolute top-[40%] right-[8%] w-1.5 h-1.5 bg-orange-300/30 rounded-full animate-float animation-delay-6"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 lg:mb-20 transition-all duration-700 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-6 flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-picto-primary transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
              Back Home
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-picto-primary/20 via-picto-primary/10 to-transparent backdrop-blur-md rounded-full border border-picto-primary/25 mb-6">
            <div className="w-2 h-2 bg-picto-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-picto-primary">
              Project Archive
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white/80 bg-clip-text text-transparent">
              All Projects &
            </span>
            <br />
            <span className="bg-gradient-to-r from-picto-primary via-orange-500 to-picto-primary bg-clip-text text-transparent">
              Case Studies
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Browse the complete project collection, from full stack business
            systems and production-style platforms to mobile apps, AI tools,
            and portfolio websites.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06]">
              <FontAwesomeIcon icon={faBriefcase} className="text-picto-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-picto-primary to-orange-400 bg-clip-text text-transparent">
                {projects.length}
              </span>
              <span className="text-gray-500">Projects</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06]">
              <FontAwesomeIcon icon={faLayerGroup} className="text-picto-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-picto-primary to-orange-400 bg-clip-text text-transparent">
                {projectTypes.length - 1}
              </span>
              <span className="text-gray-500">Categories</span>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {projectTypes.map((type, index) => {
            const isActive = selectedFilter === type;
            const projectCount =
              type === "All"
                ? sortedProjects.length
                : sortedProjects.filter((project) => project.filtertag === type).length;

            return (
              <button
                key={type}
                type="button"
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

                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
                )}
              </button>
            );
          })}
        </div>

        <div
          className={`transition-all duration-500 ${
            filtering ? "opacity-50 scale-[0.98]" : "opacity-100 scale-100"
          }`}
        >
          {filteredProjects.length > 0 ? (
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-6 lg:gap-8">
              {filteredProjects.map((project, index) => {
                const isVisible = visibleCards.includes(project.id);
                return (
                  <div
                    key={project.id}
                    className={`transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-12 scale-95"
                    }`}
                    style={{
                      transitionDelay: reducedMotion ? "0ms" : `${index * 100}ms`,
                    }}
                  >
                    <ProjectCard
                      data={{
                        image: project.heroImage,
                        skills: project.skills || [],
                        title: project.title,
                        description: project.short,
                        link: `/projects/${project.slug}`,
                        visibility: project.visibility,
                        filtertag: project.filtertag,
                        links: project.links,
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
              <h2 className="text-2xl font-bold text-gray-300 mb-2">
                No projects found
              </h2>
              <p className="text-gray-500">
                No projects match the "{selectedFilter}" filter. Try selecting
                a different category.
              </p>
            </div>
          )}
        </div>

        <div
          className={`text-center mt-16 lg:mt-20 transition-all duration-1000 delay-700 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-picto-primary/40 to-transparent"></div>
            <FontAwesomeIcon icon={faRocket} className="text-picto-primary text-xl" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-picto-primary/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
