import { useEffect, useRef, useState } from "react";
import skills from "../../data/skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPalette,
  faCubes,
  faMobileAlt,
  faFeather,
  faWrench,
  faServer,
  faDatabase,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import { faJs, faReact, faPython, faPhp, faHtml5, faCss3, faAws } from "@fortawesome/free-brands-svg-icons";

const iconMap = {
  code: faCode,
  palette: faPalette,
  cubes: faCubes,
  mobile: faMobileAlt,
  feather: faFeather,
  wrench: faWrench,
  server: faServer,
  database: faDatabase,
  cloud: faCloud,
  // brand icons
  js: faJs,
  react: faReact,
  python: faPython,
  php: faPhp,
  html5: faHtml5,
  css3: faCss3,
  aws: faAws,
};

const SkillCard = ({ skill, animate }) => {
  return (
    <div className="group bg-white/90 backdrop-blur-sm rounded-xl p-3 hover:bg-white hover:shadow-lg hover:shadow-picto-primary/10 transition-all duration-300 border-2 border-gray-100/50 hover:border-picto-primary hover:border-opacity-60 transform hover:scale-[1.02] expertise-card">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div
            className="h-9 w-9 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110"
            style={{ backgroundColor: skill.color }}
          >
            {/* render icon if available */}
            {skill.brandIcon ? (
              <FontAwesomeIcon icon={iconMap[skill.brandIcon]} className="text-white text-sm" />
            ) : skill.icon ? (
              <FontAwesomeIcon icon={iconMap[skill.icon]} className="text-white text-sm" />
            ) : (
              <span className="text-white font-bold text-sm">{skill.name[0]}</span>
            )}
          </div>
          {/* Subtle glow effect */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-sm"
            style={{ backgroundColor: skill.color }}
          ></div>
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-semibold text-base text-gray-900 group-hover:text-picto-primary transition-colors duration-300 truncate">
            {skill.name}
          </p>
        </div>

        <div className="flex items-center gap-1 flex-shrink-0" aria-label={`${skill.name} rating`}>
          {Array.from({ length: 5 }).map((_, i) => {
            const starIndex = i + 1;
            const filledStars = Math.max(0, Math.min(5, Math.round(skill.level || 0)));
            const filled = starIndex <= filledStars;
            return (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-3 h-3 transition-all duration-300 ${
                  filled
                    ? 'text-picto-primary group-hover:scale-110'
                    : 'text-gray-300 group-hover:text-gray-400'
                }`}
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.495 2.62c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.508 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
            );
          })}
        </div>
      </div>
      {/* Stars represent expertise level (1-5) calculated from numeric level */}
    </div>
  );
};

const Expertise = () => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Get unique skill types from skills array
  const skillTypes = ["All", "Language", "Framework", "Cloud", "Database", "Tool", "Styling"];

  // Sort skills by order field
  const sortedSkills = [...skills].sort((a, b) => a.order - b.order);

  // Filter skills based on selected type
  const filteredSkills = selectedFilter === "All"
    ? sortedSkills
    : sortedSkills.filter((skill) => skill.type === selectedFilter);

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
    <section id="expertise" className="content px-4 sm:px-6 md:px-12 lg:px-20 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-picto-primary/5 via-transparent to-orange-100/5 pointer-events-none"></div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-picto-primary/10 rounded-full blur-xl opacity-50 animate-pulse"></div>
      <div className="absolute top-32 right-16 w-16 h-16 bg-orange-300/15 rounded-full blur-lg opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-picto-primary/8 rounded-full blur-md opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-12 w-24 h-24 bg-orange-200/12 rounded-full blur-2xl opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

      <div className="relative z-10 text-center mb-12">
        <div className="inline-block mb-4">
          <span className="inline-block px-4 py-2 bg-picto-primary/10 text-picto-primary font-semibold text-sm rounded-full border border-picto-primary/20">
            Technical Skills
          </span>
        </div>
        <h2 className="section-title mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
          Expertise & Proficiency
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          A comprehensive showcase of my technical expertise across various domains.
          Each skill displays proficiency levels with interactive progress indicators and experience metrics.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {skillTypes.map((type, index) => {
          const isActive = selectedFilter === type;
          const skillCount = type === "All"
            ? sortedSkills.length
            : sortedSkills.filter(skill => skill.type === type).length;

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
                  {skillCount}
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

      <div ref={ref} className="grid gap-6 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
        {filteredSkills.map((s) => (
          <SkillCard key={s.id} skill={s} animate={animate} />
        ))}
      </div>
    </section>
  );
};

export default Expertise;
