import { useEffect, useRef, useState, useCallback } from "react";
import Roles from "./Roles";
import {
  faArrowRight,
  faCode,
  faPalette,
  faRocket,
  faLayerGroup,
  faTools,
  faStar,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const rolesData = [
  {
    id: 1,
    title: "Backend Development",
    description:
      "I build and maintain server-side logic, databases, and APIs to power applications — focusing on performance, security, and scalability.",
    icon: "server",
    color: "#FF6B35",
    features: ["API Development", "Database Design", "Security", "Performance"],
    techCount: 8,
  },
  {
    id: 2,
    title: "Frontend Development",
    description:
      "I implement responsive, accessible, and high-performance user interfaces using modern frameworks and best practices.",
    icon: "code",
    color: "#007ACC",
    features: [
      "Responsive Design",
      "Modern Frameworks",
      "UI/UX",
      "Performance",
    ],
    techCount: 6,
  },
  {
    id: 3,
    title: "Deployment & DevOps",
    description:
      "I deploy applications reliably to production using CI/CD, cloud platforms, and automated build pipelines to ensure fast and safe releases.",
    icon: "rocket",
    color: "#10B981",
    features: ["CI/CD", "Cloud Platforms", "Automation", "Monitoring"],
    techCount: 9,
  },
];

const Profesion = () => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

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
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const totalSkills = rolesData.reduce((acc, r) => acc + r.features.length, 0);
  const totalTech = rolesData.reduce((acc, r) => acc + r.techCount, 0);

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black"
      id="services"
      aria-label="What I Do Best"
    >
      {/* ===== ADVANCED BACKGROUND EFFECTS ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-gradient-to-br from-picto-primary/12 via-orange-500/8 to-transparent rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-gradient-to-tl from-picto-primary/8 via-blue-500/5 to-transparent rounded-full blur-3xl animate-blob animation-delay-4"></div>
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-gradient-to-r from-amber-200/8 to-picto-primary/5 rounded-full blur-3xl animate-blob animation-delay-8"></div>

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
          <div className="absolute bottom-1/3 left-[20%] w-2 h-2 bg-orange-300/30 rounded-full animate-float animation-delay-6"></div>
          <div className="absolute bottom-40 right-[25%] w-4 h-4 border border-picto-primary/20 rounded-full animate-float animation-delay-2"></div>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* ===== LEFT: TEXT CONTENT ===== */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              animate
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-picto-primary/20 via-picto-primary/10 to-transparent backdrop-blur-md rounded-full border border-picto-primary/25">
              <div className="w-2 h-2 bg-picto-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-picto-primary">
                Full Stack Services
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-3">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white/80 bg-clip-text text-transparent">
                  What I Do
                </span>
                <br />
                <span className="bg-gradient-to-r from-picto-primary via-orange-500 to-picto-primary bg-clip-text text-transparent">
                  Best
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4 max-w-lg">
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                I specialize in crafting end-to-end digital solutions that
                combine technical excellence with exceptional user experiences.
                From concept to deployment, I bring ideas to life with precision
                and passion.
              </p>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
                My expertise spans the entire development lifecycle, ensuring
                that every project is built with scalability, security, and user
                satisfaction in mind.
              </p>
            </div>

            {/* Stats bar */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06]">
                <FontAwesomeIcon
                  icon={faLayerGroup}
                  className="text-picto-primary"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-picto-primary to-orange-400 bg-clip-text text-transparent">
                  {rolesData.length}
                </span>
                <span className="text-gray-500">Core Services</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06]">
                <FontAwesomeIcon
                  icon={faTools}
                  className="text-picto-primary"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-picto-primary to-orange-400 bg-clip-text text-transparent">
                  {totalTech}+
                </span>
                <span className="text-gray-500">Technologies</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06]">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-picto-primary"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-picto-primary to-orange-400 bg-clip-text text-transparent">
                  {totalSkills}
                </span>
                <span className="text-gray-500">Capabilities</span>
              </div>
            </div>

            {/* CTA Button */}
            <div
              className={`transition-all duration-700 delay-300 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-picto-primary to-orange-400 hover:from-orange-400 hover:to-picto-primary text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl shadow-picto-primary/25 hover:shadow-3xl hover:shadow-picto-primary/40 transform hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 overflow-hidden"
              >
                {/* Button glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-picto-primary/40 to-orange-400/40 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12 translate-x-full group-hover:translate-x-0"></div>

                {/* Ripple overlay */}
                <span className="absolute inset-0 overflow-hidden rounded-2xl">
                  <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                </span>
              </a>
            </div>
          </div>

          {/* ===== RIGHT: ROLE CARDS ===== */}
          <div
            className={`space-y-6 lg:space-y-8 transition-all duration-700 delay-500 ${
              animate
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            {rolesData.map((role, index) => (
              <Roles
                role={role}
                key={role.id}
                animate={animate}
                index={index}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profesion;