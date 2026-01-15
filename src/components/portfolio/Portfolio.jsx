import { useState, useEffect, useRef } from "react";
import Projects from "./Projects";
import { Link } from "react-router-dom";
import projects from "../../data/projects";
import { faBriefcase, faFilter, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  // Filter tags in specific order
  const projectTypes = ["All", "Laravel", "AWS", "Java", "C#", "Python", "Flutter", "Web Development"];

  // Filter projects based on selected type
  const filteredProjects = selectedFilter === "All" ? projects : projects.filter((p) => p.filtertag === selectedFilter);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-8 md:py-12 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-slate-50" id="portfolio">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-picto-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-orange-300/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-picto-primary/30 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-orange-400/20 rounded-full"></div>
        <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-picto-primary/50 rounded-full"></div>
      </div>

      <div className="relative z-10 content px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Header section */}
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-picto-primary/10 text-picto-primary font-semibold text-sm rounded-full border border-picto-primary/20">
              <FontAwesomeIcon icon={faBriefcase} />
              Featured Work
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              My Portfolio &
            </span>
            <br />
            <span className="bg-gradient-to-r from-picto-primary via-orange-500 to-picto-primary bg-clip-text text-transparent">
              Recent Projects
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore my latest projects and see how I transform ideas into digital experiences.
            Each project represents a unique challenge and innovative solution.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 opacity-100 translate-y-0">
          {/* <div className="flex items-center gap-2 mb-2 mr-4">
            <FontAwesomeIcon icon={faFilter} className="text-picto-primary" />
            <span className="text-sm font-medium text-gray-600">Filter by Technology:</span>
          </div> */}
          {projectTypes.map((type, index) => {
            const isActive = selectedFilter === type;
            const projectCount = type === "All"
              ? projects.length
              : projects.filter(p => p.filtertag === type).length;

            return (
              <button
                key={type}
                onClick={() => setSelectedFilter(type)}
                className={`group relative px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? "bg-gradient-to-r from-picto-primary to-orange-400 text-white shadow-lg shadow-picto-primary/30"
                    : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:text-picto-primary border border-gray-200 hover:border-picto-primary/30 hover:shadow-md"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {type}
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-picto-primary/10 text-picto-primary group-hover:bg-picto-primary/20"
                  }`}>
                    {projectCount}
                  </span>
                </span>

                {/* Hover effect */}
                {!isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-picto-primary/5 to-orange-100/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}

                {/* Active state shimmer */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-picto-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="transition-all duration-700 delay-400 opacity-100 translate-y-0">
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-8">
            {filteredProjects
              .slice()
              .sort((a, b) => (a.order || 0) - (b.order || 0))
              .map((p, index) => {
                return (
                  <div
                    key={p.id}
                    className={`transition-all duration-700`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <Projects
                      data={{
                        image: p.heroImage,
                        skills: p.skills || [],
                        title: p.title,
                        description: p.short,
                        link: `/projects/${p.slug}`,
                      }}
                    />
                  </div>
                );
              })}
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16 transition-all duration-1000 delay-600 opacity-100 translate-y-0">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-picto-primary to-transparent"></div>
            <FontAwesomeIcon icon={faRocket} className="text-picto-primary" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-picto-primary to-transparent"></div>
          </div>

          <Link
            to="/projects"
            className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-picto-primary to-orange-400 hover:from-orange-400 hover:to-picto-primary text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl shadow-picto-primary/25 hover:shadow-3xl hover:shadow-picto-primary/40 transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">View All Projects</span>
            <FontAwesomeIcon icon={faRocket} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-full group-hover:translate-x-0"></div>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
