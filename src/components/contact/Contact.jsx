import { useEffect, useRef, useState, useCallback } from "react";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPaperPlane,
  faArrowRight,
  faCircle,
  faClock,
  faMessage,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const contacts = [
  {
    id: 1,
    label: "Email",
    value: "gihantharuka2499@gmail.com",
    href: "mailto:gihantharuka2499@gmail.com",
    icon: faEnvelope,
    color: "#FF6B35",
    gradient: "from-orange-500/20 to-amber-500/10",
    action: "Send Email",
    glow: "rgba(255,107,53,0.3)",
  },
  {
    id: 2,
    label: "GitHub",
    value: "github.com/gihan-tharuka",
    href: "https://github.com/gihan-tharuka",
    icon: faGithub,
    color: "#6e5494",
    gradient: "from-purple-500/20 to-violet-500/10",
    action: "View Profile",
    glow: "rgba(110,84,148,0.3)",
  },
  {
    id: 3,
    label: "LinkedIn",
    value: "linkedin.com/in/gihan-tharuka",
    href: "https://www.linkedin.com/in/gihan-tharuka-7b592b296",
    icon: faLinkedin,
    color: "#0077B5",
    gradient: "from-blue-500/20 to-cyan-500/10",
    action: "Connect",
    glow: "rgba(0,119,181,0.3)",
  },
  {
    id: 4,
    label: "Phone",
    value: "+94 72 270 1880",
    href: "tel:+94722701880",
    icon: faPhone,
    color: "#10B981",
    gradient: "from-emerald-500/20 to-teal-500/10",
    action: "Call Me",
    glow: "rgba(16,185,129,0.3)",
  },
];

const particles = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  size: Math.random() * 2.5 + 0.5,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 5,
  duration: Math.random() * 3 + 3,
}));

const ContactCard = ({ contact, animate, index, reducedMotion }) => {
  const [mouseHover, setMouseHover] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cardVisible, setCardVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!animate) return;
    const timer = setTimeout(() => {
      setCardVisible(true);
    }, 300 + index * 150);
    return () => clearTimeout(timer);
  }, [animate, index]);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: 0, y: 0 });
    setMouseHover(false);
  }, []);

  return (
    <a
      ref={cardRef}
      href={contact.href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setMouseHover(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.08] rounded-2xl p-6 lg:p-7 hover:shadow-2xl hover:shadow-picto-primary/5 transition-all duration-500 border border-white/[0.06] hover:border-picto-primary/25 overflow-hidden ${
        cardVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: reducedMotion ? "0ms" : `${index * 120}ms`,
        transitionDuration: "700ms",
        transform: reducedMotion
          ? "none"
          : `perspective(1000px) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`,
      }}
    >
      {/* ===== HOVER EFFECTS ===== */}
      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      ></div>

      {/* Animated border glow */}
      <div
        className={`absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none ${
          mouseHover ? "opacity-100" : "opacity-0"
        }`}
        style={{
          boxShadow: mouseHover
            ? `inset 0 0 30px ${contact.glow}, 0 0 25px ${contact.glow}`
            : "none",
        }}
      ></div>

      {/* Top accent gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left"
        style={{
          background: `linear-gradient(90deg, ${contact.color}, ${contact.color}88, transparent)`,
        }}
      ></div>

      {/* Top-right corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-6 -translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none">
        <div
          className="w-full h-full rounded-bl-full"
          style={{
            background: `linear-gradient(225deg, ${contact.color}20, transparent)`,
          }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* ===== ICON + LABEL ===== */}
        <div className="flex items-start gap-4 mb-4">
          {/* Icon with animated ring */}
          <div className="relative flex-shrink-0">
            {/* Pulse ring */}
            <div
              className={`absolute -inset-2 rounded-2xl border-2 transition-all duration-700 ${
                mouseHover ? "opacity-25 scale-100" : "opacity-0 scale-50"
              }`}
              style={{ borderColor: contact.color }}
            ></div>

            {/* Glow behind icon */}
            <div
              className={`absolute inset-0 rounded-2xl transition-all duration-500 blur-lg ${
                mouseHover ? "opacity-50 scale-125" : "opacity-0 scale-100"
              }`}
              style={{ backgroundColor: contact.color }}
            ></div>

            {/* Icon container */}
            <div
              className="relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
              style={{ backgroundColor: contact.color }}
            >
              <FontAwesomeIcon
                icon={contact.icon}
                className="text-white text-xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white group-hover:text-picto-primary transition-colors duration-300 mb-1">
              {contact.label}
            </h3>
            <p className="text-sm text-white/50 leading-relaxed line-clamp-1">
              {contact.value}
            </p>
          </div>
        </div>

        {/* ===== HOVER ACTION ===== */}
        <div className="flex items-center justify-between">
          <span
            className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full border transition-all duration-300 ${
              mouseHover
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
            style={{
              color: contact.color,
              backgroundColor: `${contact.color}15`,
              borderColor: `${contact.color}30`,
            }}
          >
            <FontAwesomeIcon icon={contact.icon} className="text-[10px]" />
            {contact.action}
          </span>

          <span
            className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
              mouseHover
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4"
            }`}
            style={{ color: contact.color }}
          >
            Connect
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xs transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </a>
  );
};

const Contact = () => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Check reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Intersection Observer
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          setTimeout(() => setStatsVisible(true), 500);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  // Mouse parallax
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden"
      id="contact"
      aria-label="Get In Touch"
      onMouseMove={handleMouseMove}
    >
      {/* ===== ANIMATED DARK BACKGROUND ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
        {/* Gradient mesh */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-picto-primary/15 via-picto-primary/5 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-orange-500/8 via-transparent to-transparent"></div>
        </div>

        {/* Gradient orbs */}
        <div className="absolute -top-60 -right-60 w-[600px] h-[600px] bg-gradient-to-br from-picto-primary/12 via-orange-500/8 to-transparent rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-60 -left-60 w-[500px] h-[500px] bg-gradient-to-tr from-orange-400/8 via-purple-500/5 to-transparent rounded-full blur-3xl animate-blob animation-delay-4"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-picto-primary/5 via-orange-300/5 to-amber-200/5 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,122,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,0,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>

        {/* Particles */}
        {!reducedMotion && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
              <div
                key={p.id}
                className="absolute rounded-full bg-picto-primary/20"
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

        {/* Floating shapes with mouse parallax */}
        <div className="hidden lg:block" aria-hidden="true">
          <div
            className="absolute top-32 left-[12%] w-4 h-4 bg-picto-primary/25 rounded-full animate-float"
            style={{
              transform: reducedMotion
                ? "none"
                : `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
              transition: "transform 0.3s ease-out",
            }}
          ></div>
          <div
            className="absolute top-48 right-[18%] w-6 h-6 border-2 border-picto-primary/15 rounded-xl rotate-45 animate-float animation-delay-3"
            style={{
              transform: reducedMotion
                ? "none"
                : `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`,
              transition: "transform 0.3s ease-out",
            }}
          ></div>
          <div
            className="absolute bottom-48 left-[8%] w-3 h-3 bg-orange-300/25 rounded-full animate-float animation-delay-6"
            style={{
              transform: reducedMotion
                ? "none"
                : `translate(${mousePos.x * 20}px, ${mousePos.y * -15}px)`,
              transition: "transform 0.3s ease-out",
            }}
          ></div>
          <div
            className="absolute bottom-32 right-[12%] w-5 h-5 border border-picto-primary/15 rounded-full animate-float animation-delay-2"
            style={{
              transform: reducedMotion
                ? "none"
                : `translate(${mousePos.x * -8}px, ${mousePos.y * 12}px)`,
              transition: "transform 0.3s ease-out",
            }}
          ></div>
        </div>

        {/* Scanline */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent animate-scanline pointer-events-none ${
            reducedMotion ? "opacity-0" : ""
          }`}
        ></div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== HEADER ===== */}
        <div className="text-center mb-14 lg:mb-16">
          {/* Badge */}
          <div
            className={`inline-block mb-6 transition-all duration-700 ${
              animate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-picto-primary/20 via-picto-primary/10 to-transparent backdrop-blur-md border border-picto-primary/25 rounded-full text-white/90 text-sm font-medium group hover:border-picto-primary/40 hover:shadow-lg hover:shadow-picto-primary/10 transition-all duration-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-picto-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-picto-primary"></span>
              </span>
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="text-picto-primary"
              />
              Let's Connect
            </span>
          </div>

          {/* Heading with glow */}
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-700 delay-200 ${
              animate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-white/80 bg-clip-text text-transparent">
              Get In Touch
            </span>
            <br />
            <span className="relative inline-block mt-1">
              <span className="bg-gradient-to-r from-picto-primary via-orange-400 to-picto-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                Let's Build Something
              </span>
              <span
                className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-picto-primary/20 via-orange-400/10 to-picto-primary/20 blur-2xl opacity-50 animate-pulse-slow pointer-events-none"
                aria-hidden="true"
              ></span>
            </span>
          </h2>

          {/* Description */}
          <p
            className={`text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-400 ${
              animate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            I'm always excited to discuss new opportunities, creative projects,
            or just have a friendly chat about technology and innovation. Don't
            hesitate to reach out through any of the channels below.
          </p>

          {/* Stats bar */}
          <div
            className={`mt-8 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-500 ${
              statsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06]">
              <FontAwesomeIcon
                icon={faMessage}
                className="text-picto-primary"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-picto-primary to-orange-400 bg-clip-text text-transparent">
                {contacts.length}
              </span>
              <span className="text-gray-500">Ways to Connect</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06]">
              <FontAwesomeIcon
                icon={faClock}
                className="text-picto-primary"
              />
              <span className="text-sm font-bold text-white/80">
                Reply within 24h
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
              </span>
              <span className="text-sm font-bold text-white/80">
                Available for work
              </span>
            </div>
          </div>
        </div>

        {/* ===== CONTACT CARDS GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {contacts.map((contact, index) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              animate={animate}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>

        {/* ===== LOCATION FOOTER ===== */}
        <div
          className={`text-center mt-14 lg:mt-16 transition-all duration-1000 delay-[1000ms] ${
            animate
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-5 px-8 py-4 bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-2xl hover:bg-white/[0.06] hover:border-picto-primary/20 transition-all duration-300">
            <div className="relative">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-picto-primary text-xl"
              />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping opacity-75"></span>
            </div>
            <div className="text-left">
              <p className="text-white/90 font-medium text-sm">
                Based in Colombo, Sri Lanka
              </p>
              <p className="text-white/40 text-xs mt-0.5">
                Open to remote opportunities worldwide
              </p>
            </div>
            <div className="h-8 w-px bg-white/[0.08]"></div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faUserPlus}
                className="text-picto-primary text-sm"
              />
              <span className="text-picto-primary font-semibold text-sm">
                Let's Talk
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;