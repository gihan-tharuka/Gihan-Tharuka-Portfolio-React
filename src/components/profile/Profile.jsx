import { useEffect, useRef, useState, useCallback } from "react";
import person from "../../assets/images/cv/gihan.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faCode,
  faRocket,
  faStar,
  faLayerGroup,
  faUsers,
  faClock,
  faCheckCircle,
  faArrowRight,
  faCloud,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faNodeJs,
  faLaravel,
  faAws,
  faGitAlt,
  faPython,
  faJava,
  faPhp,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import pdf from "../../data/Gihan-Tharuka-Resume.pdf";

const roles = [
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Tech Innovator",
];

const techStack = [
  { icon: faReact, label: "React" },
   { icon: faLaravel, label: "Laravel" },
    { icon: faCode, label: "Next.js" },
    { icon: faPython, label: "Python" },
     { icon: faAws, label: "AWS" },
     { icon: faPhp, label: "PHP" },
      { icon: faJava, label: "Java" },
      { icon: faDatabase, label: "MySQL" },
       { icon: faCss3Alt, label: "Tailwind CSS" },
  { icon: faNodeJs, label: "Node.js" },
 
 
  { icon: faGitAlt, label: "Git" },
  
 
 
 
  
  { icon: faDatabase, label: "PostgreSQL" },
 
];

const Profile = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Intersection Observer for entrance animations
  useEffect(() => {
    setAnimate(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Typing animation for roles
  useEffect(() => {
    if (reducedMotion) {
      setDisplayText(roles[0]);
      return;
    }
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2500);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, reducedMotion]);

  // Parallax mouse movement on image
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-12 md:py-20 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black"
      id="profile"
      aria-label="Profile"
    >
      {/* ===== ADVANCED BACKGROUND EFFECTS ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Main gradient orb - top left */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-picto-primary/15 via-orange-300/10 to-transparent rounded-full blur-3xl animate-blob"></div>
        {/* Secondary orb - bottom right */}
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-gradient-to-tl from-picto-primary/10 via-purple-300/5 to-transparent rounded-full blur-3xl animate-blob animation-delay-4"></div>
        {/* Subtle accent orb - center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-200/5 via-picto-primary/5 to-amber-200/5 rounded-full blur-3xl animate-blob animation-delay-8"></div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,122,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,0,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>

        {/* Floating geometric shapes */}
        <div className="hidden lg:block">
          <div className="absolute top-20 left-[15%] w-4 h-4 bg-picto-primary/30 rounded-full animate-float"></div>
          <div className="absolute top-40 right-[20%] w-6 h-6 border-2 border-picto-primary/20 rounded-lg rotate-45 animate-float animation-delay-2"></div>
          <div className="absolute bottom-40 left-[10%] w-3 h-3 bg-orange-300/40 rounded-full animate-float animation-delay-4"></div>
          <div className="absolute top-[60%] right-[10%] w-5 h-5 border-2 border-picto-primary/15 rounded-full animate-float animation-delay-6"></div>
          <div className="absolute bottom-20 right-[30%] w-4 h-4 bg-picto-primary/20 rotate-12 animate-float animation-delay-3"></div>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center min-h-[calc(100vh-8rem)]">
          {/* ===== LEFT: PROFILE IMAGE SECTION ===== */}
          <div className="relative order-2 lg:order-1">
            {/* Image container with tilt effect */}
            <div
              className="relative w-full max-w-xs mx-auto perspective-1000"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
            >
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-picto-primary/30 via-orange-300/20 to-picto-primary/30 blur-2xl animate-pulse-slow"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Main image card */}
              <div
                className="relative rounded-full overflow-hidden bg-gradient-to-br from-picto-primary/10 to-orange-100/10 border border-white/10 shadow-2xl shadow-picto-primary/10"
                style={{
                  transform: reducedMotion
                    ? "none"
                    : `perspective(1000px) rotateY(${mousePos.x * 8}deg) rotateX(${-mousePos.y * 8}deg)`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                {/* Image */}
                <div className="aspect-square relative overflow-hidden">
                  <img
                    className={`w-full h-full object-cover ${
                      reducedMotion ? "" : "hover:scale-105"
                    } transition-transform duration-700`}
                    src={person}
                    alt="Gihan Tharuka"
                    loading="eager"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-full"></div>
                </div>

              </div>
            </div>

            {/* Social media bar below image */}
            <div
              className={`mt-6 text-center transition-all duration-700 delay-700 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="inline-flex items-center gap-1 px-6 py-3 bg-white/[0.06] backdrop-blur-md rounded-full shadow-lg border border-white/[0.08] ring-1 ring-white/10">
                <span className="text-xs text-gray-400 mr-2 font-medium uppercase tracking-wider">
                  Connect
                </span>
                <SocialMedia />
              </div>
            </div>
          </div>

          {/* ===== RIGHT: TEXT CONTENT ===== */}
          <div className="relative order-1 lg:order-2">
            {/* Role badge */}
            <div
              className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-picto-primary/20 via-picto-primary/10 to-transparent rounded-full border border-picto-primary/25 mb-6 transition-all duration-700 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-picto-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-picto-primary"></span>
              </span>
              <span className="text-sm font-semibold text-picto-primary">
                {displayText}
                {!reducedMotion && (
                  <span className="inline-block w-[3px] h-4 bg-picto-primary ml-0.5 animate-blink align-middle"></span>
                )}
              </span>
            </div>

            {/* Main heading */}
            <div
              className={`space-y-3 transition-all duration-700 delay-200 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white/80 bg-clip-text text-transparent">
                  Hi, I'm
                </span>
                <br />
                <span className="bg-gradient-to-r from-picto-primary via-orange-400 to-picto-primary bg-clip-text text-transparent inline-block mt-1">
                  Gihan Tharuka
                </span>
              </h1>
            </div>

            {/* Description */}
            <div
              className={`mt-6 space-y-4 transition-all duration-700 delay-300 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl">
                I'm a passionate Full Stack Developer who transforms ideas into
                powerful digital experiences. I craft scalable applications with
                clean, maintainable code that makes a real difference.
              </p>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl">
                Driven by curiosity and a relentless pursuit of excellence — I
                build solutions that people love to use.
              </p>
            </div>

            {/* Key highlights / badges */}
            <div
              className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 delay-400 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="group flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06] hover:border-picto-primary/30 hover:bg-white/[0.06] shadow-sm hover:shadow-md transition-all duration-300 cursor-default">
                <div className="w-8 h-8 bg-gradient-to-br from-picto-primary/20 to-orange-100/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="text-picto-primary text-sm"
                  />
                </div>
                <span className="text-sm font-semibold text-gray-300">
                  Clean Code
                </span>
              </div>
              <div className="group flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06] hover:border-orange-300/30 hover:bg-white/[0.06] shadow-sm hover:shadow-md transition-all duration-300 cursor-default">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-100/20 to-amber-100/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon
                    icon={faRocket}
                    className="text-orange-500 text-sm"
                  />
                </div>
                <span className="text-sm font-semibold text-gray-300">
                  Performance
                </span>
              </div>
              <div className="group flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06] hover:border-green-300/30 hover:bg-white/[0.06] shadow-sm hover:shadow-md transition-all duration-300 cursor-default">
                <div className="w-8 h-8 bg-gradient-to-br from-green-100/20 to-emerald-100/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-600 text-sm"
                  />
                </div>
                <span className="text-sm font-semibold text-gray-300">
                  Quality
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-600 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-picto-primary via-orange-400 to-picto-primary text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl shadow-picto-primary/25 hover:shadow-3xl hover:shadow-picto-primary/40 transform hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Work Together
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12 translate-x-full group-hover:translate-x-0"></div>
                {/* Ripple effect on hover */}
                <span className="absolute inset-0 overflow-hidden rounded-2xl">
                  <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                </span>
              </a>

              <a
                href={pdf}
                download="Gihan-Tharuka-Resume.pdf"
                className="group relative inline-flex items-center justify-center gap-3 bg-white/[0.06] backdrop-blur-sm border-2 border-white/[0.15] hover:border-picto-primary text-white hover:text-picto-primary font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-white/[0.1] transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] shadow-lg hover:shadow-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5"
                  />
                  Download CV
                </span>
                <span className="absolute inset-0 bg-picto-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
              </a>
            </div>
          </div>
        </div>

        {/* ===== TECH STACK MARQUEE ===== */}
        <div
          className={`mt-16 lg:mt-20 transition-all duration-1000 delay-800 ${
            animate
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-center text-xs text-gray-500 uppercase tracking-[0.2em] font-semibold mb-4">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none"></div>

            <div
              className={`flex gap-12 items-center ${
                reducedMotion ? "" : "animate-marquee"
              }`}
            >
              {/* Duplicate for seamless loop */}
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-3 bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06] shadow-sm hover:shadow-md hover:border-picto-primary/20 transition-all duration-300 group flex-shrink-0"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-picto-primary/10 to-gray-800 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:from-picto-primary/20 transition-all duration-300">
                    <FontAwesomeIcon
                      icon={tech.icon}
                      className="text-gray-400 group-hover:text-picto-primary transition-colors duration-300 text-xl"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Profile;