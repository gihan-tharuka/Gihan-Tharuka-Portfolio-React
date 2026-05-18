import { useEffect, useRef, useState, useCallback } from "react";
import {
  faArrowRight,
  faRocket,
  faLightbulb,
  faHandshake,
  faStar,
  faBolt,
  faCode,
  faShareNodes,
  faCrown,
  faChevronRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const collaborationBenefits = [
  {
    icon: faLightbulb,
    title: "Innovation First",
    desc: "Cutting-edge solutions tailored to your vision",
  },
  {
    icon: faBolt,
    title: "Lightning Fast",
    desc: "Rapid development without compromising quality",
  },
  {
    icon: faHandshake,
    title: "Seamless Collab",
    desc: "Transparent communication every step of the way",
  },
  {
    icon: faCrown,
    title: "Premium Quality",
    desc: "Enterprise-grade code & pixel-perfect design",
  },
];

const statsData = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

const particles = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  size: Math.random() * 3 + 1,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 5,
  duration: Math.random() * 3 + 3,
}));

const WorkTogether = () => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

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
          setTimeout(() => setStatsVisible(true), 600);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  // Mouse parallax for the hero section
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
      id="work-together"
      aria-label="Let's Create Something Extraordinary"
      onMouseMove={handleMouseMove}
    >
      {/* ===== ANIMATED DARK BACKGROUND ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
        {/* Premium gradient mesh */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-picto-primary/20 via-picto-primary/5 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent"></div>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute -top-60 -right-60 w-[600px] h-[600px] bg-gradient-to-br from-picto-primary/15 via-orange-500/10 to-transparent rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-60 -left-60 w-[500px] h-[500px] bg-gradient-to-tr from-orange-400/10 via-purple-500/5 to-transparent rounded-full blur-3xl animate-blob animation-delay-4"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-picto-primary/5 via-orange-300/5 to-amber-200/5 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,122,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,0,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>

        {/* ===== PARTICLE SYSTEM ===== */}
        {!reducedMotion && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
              <div
                key={p.id}
                className="absolute rounded-full bg-picto-primary/30"
                style={{
                  width: p.size,
                  height: p.size,
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
                  opacity: 0.4,
                }}
              ></div>
            ))}
            {/* Connecting lines (limited) */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff7a00" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#ff7a00" stopOpacity="0" />
                </linearGradient>
              </defs>
              {particles.slice(0, 12).map((p, i) =>
                particles.slice(i + 1, i + 4).map((p2, j) => (
                  <line
                    key={`${p.id}-${j}`}
                    x1={`${p.x}%`}
                    y1={`${p.y}%`}
                    x2={`${p2.x}%`}
                    y2={`${p2.y}%`}
                    stroke="url(#lineGrad)"
                    strokeWidth="0.5"
                    className="animate-pulse-slow"
                    style={{ animationDelay: `${(i + j) * 0.3}s` }}
                  />
                ))
              )}
            </svg>
          </div>
        )}

        {/* Floating decorative shapes */}
        <div className="hidden lg:block" aria-hidden="true">
          <div
            className="absolute top-32 left-[15%] w-4 h-4 bg-picto-primary/30 rounded-full animate-float"
            style={{
              transform: reducedMotion
                ? "none"
                : `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
              transition: "transform 0.3s ease-out",
            }}
          ></div>
          <div
            className="absolute top-48 right-[20%] w-8 h-8 border-2 border-picto-primary/20 rounded-xl rotate-45 animate-float animation-delay-3"
            style={{
              transform: reducedMotion
                ? "none"
                : `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`,
              transition: "transform 0.3s ease-out",
            }}
          ></div>
          <div
            className="absolute bottom-48 left-[10%] w-3 h-3 bg-orange-300/30 rounded-full animate-float animation-delay-6"
            style={{
              transform: reducedMotion
                ? "none"
                : `translate(${mousePos.x * 20}px, ${mousePos.y * -15}px)`,
              transition: "transform 0.3s ease-out",
            }}
          ></div>
          <div
            className="absolute bottom-32 right-[15%] w-6 h-6 border-2 border-picto-primary/15 rounded-full animate-float animation-delay-2"
            style={{
              transform: reducedMotion
                ? "none"
                : `translate(${mousePos.x * -8}px, ${mousePos.y * 12}px)`,
              transition: "transform 0.3s ease-out",
            }}
          ></div>
        </div>

        {/* Scanline effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent animate-scanline pointer-events-none ${
            reducedMotion ? "opacity-0" : ""
          }`}
        ></div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== HEADER SECTION ===== */}
        <div className="text-center">
          {/* Animated badge */}
          <div
            className={`inline-block mb-8 transition-all duration-700 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-picto-primary/20 via-picto-primary/10 to-transparent backdrop-blur-md border border-picto-primary/25 rounded-full text-white/90 text-sm font-medium group hover:border-picto-primary/40 hover:shadow-lg hover:shadow-picto-primary/10 transition-all duration-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-picto-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-picto-primary"></span>
              </span>
              <FontAwesomeIcon icon={faRocket} className="text-picto-primary" />
              Ready to Build Something Amazing?
            </span>
          </div>

          {/* Main heading with glow */}
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight transition-all duration-700 delay-200 ${
              animate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-white/80 bg-clip-text text-transparent">
              Let's Create
            </span>
            <br />
            <span className="relative inline-block mt-1">
              <span className="bg-gradient-to-r from-picto-primary via-orange-400 to-picto-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                Something Extraordinary
              </span>
              {/* Text glow effect */}
              <span
                className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-picto-primary/20 via-orange-400/10 to-picto-primary/20 blur-2xl opacity-50 animate-pulse-slow pointer-events-none"
                aria-hidden="true"
              ></span>
            </span>
          </h2>

          {/* Description */}
          <p
            className={`text-base sm:text-lg text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-400 ${
              animate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            I'm passionate about bringing innovative ideas to life. Whether you
            have a groundbreaking project or need technical expertise, let's
            collaborate and turn your vision into reality.
          </p>

          {/* ===== STATS COUNTERS ===== */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-14 transition-all duration-700 delay-500 ${
              statsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="group relative px-5 py-3 bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl hover:bg-white/[0.08] hover:border-picto-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-picto-primary/5"
                style={{
                  transitionDelay: reducedMotion
                    ? "0ms"
                    : `${index * 100}ms`,
                }}
              >
                <div className="text-center">
                  <p className="text-2xl font-bold bg-gradient-to-r from-picto-primary to-orange-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== BENEFITS CARDS ===== */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14 transition-all duration-700 delay-700 ${
            animate
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {collaborationBenefits.map((benefit, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-2xl p-5 lg:p-6 hover:bg-white/[0.06] hover:border-picto-primary/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-picto-primary/5 overflow-hidden"
              onMouseEnter={() => setHoveredBenefit(index)}
              onMouseLeave={() => setHoveredBenefit(null)}
              style={{
                transitionDelay: reducedMotion
                  ? "0ms"
                  : `${index * 120}ms`,
              }}
            >
              {/* Hover gradient border effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-picto-primary/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              ></div>

              {/* Top corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-picto-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-picto-primary/20 to-orange-500/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:from-picto-primary/30 group-hover:to-orange-500/20 transition-all duration-300 border border-white/10 group-hover:border-picto-primary/30">
                  <FontAwesomeIcon
                    icon={benefit.icon}
                    className="text-picto-primary text-lg"
                  />
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-sm lg:text-base mb-1.5 group-hover:text-picto-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {benefit.desc}
                </p>
              </div>

              {/* Animated border glow */}
              <div
                className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                  hoveredBenefit === index
                    ? "opacity-100"
                    : "opacity-0"
                } pointer-events-none`}
                style={{
                  boxShadow:
                    hoveredBenefit === index
                      ? "inset 0 0 30px rgba(255,122,0,0.08), 0 0 20px rgba(255,122,0,0.05)"
                      : "none",
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* ===== CTA BUTTONS ===== */}
        <div
          className={`flex flex-col sm:flex-row gap-5 justify-center items-center transition-all duration-700 delay-[900ms] ${
            animate
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Primary CTA - Start a Conversation */}
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-picto-primary to-orange-400 hover:from-orange-400 hover:to-picto-primary text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl shadow-picto-primary/25 hover:shadow-3xl hover:shadow-picto-primary/40 transform hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 overflow-hidden"
          >
            {/* Button glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-picto-primary/40 to-orange-400/40 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <span className="relative z-10 flex items-center gap-2">
              Start a Conversation
              <FontAwesomeIcon
                icon={faArrowRight}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>

            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12 translate-x-full group-hover:translate-x-0"></div>

            {/* Ripple overlay on hover */}
            <span className="absolute inset-0 overflow-hidden rounded-2xl">
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
            </span>
          </a>

          {/* Secondary CTA - View My Work */}
          <a
            href="#portfolio"
            className="group relative inline-flex items-center gap-3 bg-white/[0.06] backdrop-blur-sm border border-white/[0.15] hover:border-picto-primary/40 text-white font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-white/[0.1] transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-sm transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-picto-primary/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* ===== BOTTOM DECORATIVE ELEMENT ===== */}
        <div
          className={`flex justify-center mt-16 transition-all duration-1000 delay-[1200ms] ${
            animate
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-5">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <span className="flex items-center gap-2 text-gray-600 text-sm font-medium">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-picto-primary/60"
              />
              Let's build the future together
            </span>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;