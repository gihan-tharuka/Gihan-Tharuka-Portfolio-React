import { useEffect, useRef, useState, useCallback } from "react";
import {
  faEnvelope,
  faHeart,
  faArrowUp,
  faCircle,
  faCode,
  faServer,
  faPalette,
  faRocket,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "Portfolio", url: "portfolio" },
  { id: 3, name: "Expertise", url: "expertise" },
  { id: 4, name: "Services", url: "services" },
  { id: 5, name: "Contact", url: "contact" },
];

const servicesData = [
  {
    name: "Backend",
    icon: faServer,
    desc: "APIs & Databases",
    color: "#FF6B35",
  },
  {
    name: "Frontend",
    icon: faCode,
    desc: "Responsive UI",
    color: "#007ACC",
  },
  {
    name: "DevOps",
    icon: faRocket,
    desc: "Cloud & CI/CD",
    color: "#10B981",
  },
];

const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    icon: faGithub,
    url: "https://github.com/gihan-tharuka",
    color: "#6e5494",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/gihan-tharuka-7b592b296",
    color: "#0077B5",
  },
  {
    id: 3,
    name: "Email",
    icon: faEnvelope,
    url: "mailto:gihantharuka2499@gmail.com",
    color: "#FF6B35",
  },
];

const techBadges = ["React", "Laravel", "Node.js", "AWS", "Flutter"];

const copyrightYear = new Date().getFullYear();

const particles = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  size: Math.random() * 2 + 0.5,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 5,
  duration: Math.random() * 3 + 3,
}));

const Footer = () => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

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
      { threshold: 0.1 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  }, []);

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden"
      id="footer"
      onMouseMove={handleMouseMove}
    >
      {/* ===== ANIMATED DARK BACKGROUND ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-black">
        {/* Gradient mesh */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-picto-primary/10 via-picto-primary/3 to-transparent"></div>
        </div>

        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-picto-primary/10 via-orange-500/5 to-transparent rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-gradient-to-tr from-orange-400/8 via-purple-500/3 to-transparent rounded-full blur-3xl animate-blob animation-delay-4"></div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,122,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,0,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>

        {/* Particles */}
        {!reducedMotion && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
              <div
                key={p.id}
                className="absolute rounded-full bg-picto-primary/15"
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
          </div>
        )}

        {/* Floating shapes with parallax */}
        <div className="hidden lg:block" aria-hidden="true">
          <div
            className="absolute top-32 left-[10%] w-3 h-3 bg-picto-primary/20 rounded-full animate-float"
            style={{
              transform: reducedMotion
                ? "none"
                : `translate(${mousePos.x * 12}px, ${mousePos.y * 12}px)`,
              transition: "transform 0.3s ease-out",
            }}
          ></div>
          <div
            className="absolute bottom-48 right-[15%] w-5 h-5 border border-picto-primary/15 rounded-xl rotate-45 animate-float animation-delay-3"
            style={{
              transform: reducedMotion
                ? "none"
                : `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)`,
              transition: "transform 0.3s ease-out",
            }}
          ></div>
          <div
            className="absolute top-[60%] left-[5%] w-2 h-2 bg-orange-300/20 rounded-full animate-float animation-delay-6"
            style={{
              transform: reducedMotion
                ? "none"
                : `translate(${mousePos.x * 15}px, ${mousePos.y * -10}px)`,
              transition: "transform 0.3s ease-out",
            }}
          ></div>
        </div>

        {/* Scanline */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.008] to-transparent animate-scanline pointer-events-none ${
            reducedMotion ? "opacity-0" : ""
          }`}
        ></div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* ===== TOP ROW: 4 COLUMN GRID ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
            {/* ===== COL 1: BRAND ===== */}
            <div
              className={`space-y-6 transition-all duration-700 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Logo */}
              <a href="#" className="group inline-flex items-center gap-3 border-0">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-picto-primary to-orange-400 flex items-center justify-center shadow-lg shadow-picto-primary/30 group-hover:shadow-xl group-hover:shadow-picto-primary/40 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <span className="text-white font-bold text-2xl">G</span>
                  </div>
                  {/* Glow ring */}
                  <div className="absolute -inset-2 rounded-2xl bg-picto-primary/20 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                </div>
                <div className="text-left">
                  <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-gray-100 to-white/80 bg-clip-text text-transparent group-hover:from-picto-primary group-hover:via-orange-400 group-hover:to-picto-primary transition-all duration-500">
                    Gihan Tharuka
                  </p>
                  <div className="h-0.5 bg-gradient-to-r from-picto-primary to-orange-400 transition-all duration-500 ease-out w-0 group-hover:w-full"></div>
                </div>
              </a>

              {/* Availability status */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
                </span>
                <span className="text-gray-400 text-sm font-medium">
                  Available for opportunities
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                Full Stack Developer passionate about creating innovative
                solutions and bringing ideas to life through clean, efficient
                code.
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {techBadges.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-semibold px-2.5 py-1 bg-white/[0.04] border border-white/[0.06] text-gray-400 rounded-full hover:bg-picto-primary/10 hover:border-picto-primary/30 hover:text-picto-primary transition-all duration-300 hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
                    style={{
                      backgroundColor: `${social.color}15`,
                      border: `1px solid ${social.color}30`,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="text-white/80 group-hover:text-white transition-colors duration-300"
                    />
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-md"
                      style={{ backgroundColor: social.color }}
                    ></div>
                    {/* Pulse ring on hover */}
                    <div
                      className="absolute -inset-1.5 rounded-xl border opacity-0 group-hover:opacity-30 transition-all duration-500 scale-75 group-hover:scale-100"
                      style={{ borderColor: social.color }}
                    ></div>
                  </a>
                ))}
              </div>
            </div>

            {/* ===== COL 2: QUICK LINKS ===== */}
            <div
              className={`space-y-6 transition-all duration-700 delay-200 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-picto-primary rounded-full"></span>
                Quick Links
              </h3>
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <a
                    key={item.id}
                    className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                    href={`#${item.url.toLowerCase()}`}
                    style={{
                      transitionDelay: reducedMotion
                        ? "0ms"
                        : `${index * 60}ms`,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-[8px] text-picto-primary/50 group-hover:text-picto-primary transition-colors duration-300"
                    />
                    <span className="relative">
                      {item.name}
                      <span className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-picto-primary to-orange-400 transition-all duration-300 w-0 group-hover:w-full"></span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* ===== COL 3: SERVICES ===== */}
            <div
              className={`space-y-6 transition-all duration-700 delay-400 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-picto-primary rounded-full"></span>
                What I Offer
              </h3>
              <div className="space-y-3">
                {servicesData.map((service, index) => (
                  <a
                    key={service.name}
                    href="#services"
                    className="group flex items-center gap-3 px-4 py-3 bg-white/[0.02] border border-white/[0.04] rounded-xl hover:bg-white/[0.05] hover:border-picto-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-picto-primary/5"
                    style={{
                      transitionDelay: reducedMotion
                        ? "0ms"
                        : `${index * 80}ms`,
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <FontAwesomeIcon
                        icon={service.icon}
                        className="text-sm"
                        style={{ color: service.color }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                        {service.name}
                      </p>
                      <p className="text-[11px] text-gray-500">
                        {service.desc}
                      </p>
                    </div>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-[10px] text-gray-600 group-hover:text-picto-primary transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* ===== COL 4: GET IN TOUCH ===== */}
            <div
              className={`space-y-6 transition-all duration-700 delay-600 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-picto-primary rounded-full"></span>
                Let's Connect
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ready to bring your ideas to life? Let's discuss your next
                project and create something extraordinary together.
              </p>

              <div className="space-y-3">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-picto-primary to-orange-400 hover:from-orange-400 hover:to-picto-primary text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-picto-primary/25 hover:shadow-xl hover:shadow-picto-primary/40 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden w-full justify-center"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-picto-primary/40 to-orange-400/40 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    Get In Touch
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12 translate-x-full group-hover:translate-x-0"></div>
                </a>

                <button
                  onClick={scrollToTop}
                  className="group relative inline-flex items-center gap-3 bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] hover:border-white/30 text-white/80 hover:text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/[0.1] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] overflow-hidden w-full justify-center"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Back to Top
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      className="transition-all duration-300 group-hover:-translate-y-1"
                    />
                  </span>
                  {/* Ring effect on hover */}
                  <div className="absolute inset-0 rounded-xl border border-picto-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100"></div>
                </button>
              </div>
            </div>
          </div>

          {/* ===== BOTTOM BAR ===== */}
          <div
            className={`border-t border-white/[0.06] pt-8 transition-all duration-700 delay-800 ${
              animate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <p className="text-gray-500 text-sm">
                Copyright &copy; {copyrightYear}{" "}
                <span className="text-gray-400 hover:text-picto-primary transition-colors duration-300">
                  Gihan Tharuka
                </span>
                . All rights reserved.
              </p>

              {/* Made with love */}
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span>by Gihan Tharuka</span>
                <span>made with React and Tailwind</span>
              </div>

              {/* Version badge */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-gray-600 bg-white/[0.03] px-2.5 py-1 rounded-full border border-white/[0.05]">
                  v3.0
                </span>
                <span className="text-[11px] font-mono text-gray-600 bg-white/[0.03] px-2.5 py-1 rounded-full border border-white/[0.05]">
                  Est. 2022
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;