import { useEffect, useRef, useState, useCallback } from "react";
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
  faStar,
  faLayerGroup,
  faTools,
  faBolt,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const typeBadgeColors = {
  Language: "bg-blue-500/20 text-blue-300 border-blue-400/30",
  Framework: "bg-purple-500/20 text-purple-300 border-purple-400/30",
  Cloud: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
  Database: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
  Tool: "bg-amber-500/20 text-amber-300 border-amber-400/30",
  Styling: "bg-pink-500/20 text-pink-300 border-pink-400/30",
};

const SkillCard = ({ skill, animate, index, reducedMotion }) => {
  const [progressAnimate, setProgressAnimate] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!animate) return;
    const timer = setTimeout(() => {
      setProgressAnimate(true);
    }, 200 + index * 80);
    return () => clearTimeout(timer);
  }, [animate, index]);

  const percentage = Math.round((skill.level / 5) * 100);

  return (
    <div
      ref={cardRef}
      className={`group relative bg-white/[0.04] backdrop-blur-sm rounded-2xl p-5 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-picto-primary/8 transition-all duration-500 border border-white/[0.06] hover:border-picto-primary/20 transform hover:-translate-y-1 ${
        animate
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: reducedMotion ? "0ms" : `${index * 60}ms`,
        transitionDuration: "700ms",
      }}
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-picto-primary/[0.02] via-transparent to-orange-100/[0.04] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="relative z-10 flex items-start gap-4">
        {/* ===== ICON ===== */}
        <div className="relative flex-shrink-0">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{ backgroundColor: skill.color }}
          >
            {skill.brandIcon ? (
              <FontAwesomeIcon
                icon={iconMap[skill.brandIcon]}
                className="text-white text-lg"
              />
            ) : skill.icon ? (
              <FontAwesomeIcon
                icon={iconMap[skill.icon]}
                className="text-white text-lg"
              />
            ) : (
              <span className="text-white font-bold text-sm">
                {skill.name[0]}
              </span>
            )}
          </div>
          {/* Glow effect */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md"
            style={{ backgroundColor: skill.color }}
          ></div>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="flex-1 min-w-0">
          {/* Name and type badge */}
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <h3 className="font-bold text-base text-white group-hover:text-picto-primary transition-colors duration-300 truncate">
              {skill.name}
            </h3>
            <span
              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${typeBadgeColors[skill.type] || "bg-gray-500/20 text-gray-300 border-gray-400/30"}`}
            >
              {skill.type}
            </span>
          </div>

          {/* Years of experience */}
          <p className="text-xs text-gray-400 mb-3">
            {skill.years} {skill.years === 1 ? "year" : "years"} experience
          </p>

          {/* ===== PROGRESS BAR ===== */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500">
                Proficiency
              </span>
              <span className="text-xs font-bold bg-gradient-to-r from-picto-primary to-orange-400 bg-clip-text text-transparent">
                {skill.level}/5
              </span>
            </div>
            <div className="relative h-2.5 bg-gray-800 rounded-full overflow-hidden group-hover:bg-gray-700/80 transition-colors">
              {/* Progress fill */}
              <div
                className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: progressAnimate ? `${percentage}%` : "0%",
                  background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                  boxShadow: `0 0 8px ${skill.color}66`,
                }}
              ></div>
              {/* Shimmer on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
            </div>
          </div>

          {/* ===== DOT INDICATORS (alternative visual) ===== */}
          <div className="mt-3 flex items-center gap-1" aria-label={`${skill.name} proficiency: ${skill.level} out of 5`}>
            {Array.from({ length: 5 }).map((_, i) => {
              const filled = i < skill.level;
              return (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    filled
                      ? "group-hover:scale-125"
                      : "opacity-30"
                  }`}
                  style={{
                    backgroundColor: filled ? skill.color : "#4b5563",
                    transitionDelay: `${i * 60}ms`,
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// Keep the import for icon map needed by SkillCard
import {
  faJs,
  faReact,
  faPython,
  faPhp,
  faHtml5,
  faCss3,
  faAws,
  faJava,
  faLaravel,
  faBootstrap,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

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

const Expertise = () => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [filtering, setFiltering] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);

  // Check reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Intersection Observer for entrance animations
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
      { threshold: 0.1 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  // Animate cards on filter change
  useEffect(() => {
    setFiltering(true);
    setVisibleCards([]);
    const timer = setTimeout(() => {
      setVisibleCards(filteredSkills.map((s) => s.id));
      setFiltering(false);
    }, 50);
    return () => clearTimeout(timer);
  }, [selectedFilter]);

  const skillTypes = [
    "All",
    "Language",
    "Framework",
    "Cloud",
    "Database",
    "Tool",
    "Styling",
  ];

  const sortedSkills = [...skills].sort((a, b) => a.order - b.order);

  const filteredSkills =
    selectedFilter === "All"
      ? sortedSkills
      : sortedSkills.filter((skill) => skill.type === selectedFilter);

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black"
      id="expertise"
      aria-label="Expertise & Proficiency"
    >
      {/* ===== ADVANCED BACKGROUND EFFECTS ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-gradient-to-br from-picto-primary/12 via-orange-500/8 to-transparent rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-gradient-to-tl from-picto-primary/8 via-purple-500/5 to-transparent rounded-full blur-3xl animate-blob animation-delay-4"></div>
        <div className="absolute top-1/2 right-1/4 w-[250px] h-[250px] bg-gradient-to-r from-cyan-300/8 to-picto-primary/5 rounded-full blur-3xl animate-blob animation-delay-8"></div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,122,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,0,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        ></div>

        {/* Floating shapes */}
        <div className="hidden lg:block">
          <div className="absolute top-24 left-[8%] w-3 h-3 bg-picto-primary/25 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-[12%] w-5 h-5 border-2 border-picto-primary/15 rounded-lg rotate-45 animate-float animation-delay-3"></div>
          <div className="absolute bottom-1/4 left-[20%] w-2 h-2 bg-orange-300/30 rounded-full animate-float animation-delay-6"></div>
          <div className="absolute bottom-32 right-[25%] w-4 h-4 border border-picto-primary/20 rounded-full animate-float animation-delay-2"></div>
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
              Technical Skills
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white/80 bg-clip-text text-transparent">
              Expertise &
            </span>
            <br />
            <span className="bg-gradient-to-r from-picto-primary via-orange-500 to-picto-primary bg-clip-text text-transparent">
              Proficiency
            </span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive showcase of my technical expertise across various
            domains. Each skill is rated by proficiency level with years of
            hands-on experience.
          </p>

          {/* Stats bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06]">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="text-picto-primary"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-picto-primary to-orange-400 bg-clip-text text-transparent">
                {skills.length}
              </span>
              <span className="text-gray-500">Skills</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06]">
              <FontAwesomeIcon
                icon={faTools}
                className="text-picto-primary"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-picto-primary to-orange-400 bg-clip-text text-transparent">
                {new Set(skills.map((s) => s.type)).size}
              </span>
              <span className="text-gray-500">Categories</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06]">
              <FontAwesomeIcon
                icon={faStar}
                className="text-picto-primary"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-picto-primary to-orange-400 bg-clip-text text-transparent">
                {Math.round(
                  skills.reduce((acc, s) => acc + s.level, 0) / skills.length
                )}
                .0
              </span>
              <span className="text-gray-500">Avg Level</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06]">
              <FontAwesomeIcon
                icon={faBolt}
                className="text-picto-primary"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-picto-primary to-orange-400 bg-clip-text text-transparent">
                {skills.filter((s) => s.level >= 4).length}
              </span>
              <span className="text-gray-500">Advanced</span>
            </div>
          </div>
        </div>

        {/* ===== FILTER BUTTONS ===== */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {skillTypes.map((type, index) => {
            const isActive = selectedFilter === type;
            const skillCount =
              type === "All"
                ? sortedSkills.length
                : sortedSkills.filter((skill) => skill.type === type).length;

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
                  transitionDelay: reducedMotion
                    ? "0ms"
                    : `${index * 60}ms`,
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
                    {skillCount}
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

        {/* ===== SKILLS GRID ===== */}
        <div
          className={`transition-all duration-500 ${
            filtering ? "opacity-50 scale-[0.98]" : "opacity-100 scale-100"
          }`}
        >
          {filteredSkills.length > 0 ? (
            <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredSkills.map((s, index) => {
                const isVisible = visibleCards.includes(s.id);
                return (
                  <div
                    key={s.id}
                    className={`transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-8 scale-95"
                    }`}
                    style={{
                      transitionDelay: reducedMotion
                        ? "0ms"
                        : `${index * 60}ms`,
                    }}
                  >
                    <SkillCard
                      skill={s}
                      animate={animate && isVisible}
                      index={index}
                      reducedMotion={reducedMotion}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-picto-primary/10 to-orange-100/10 rounded-2xl flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-3xl text-picto-primary/50"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-300 mb-2">
                No skills found
              </h3>
              <p className="text-gray-500">
                No skills match the "{selectedFilter}" filter. Try
                selecting a different category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Expertise;