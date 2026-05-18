import { useEffect, useRef, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faServer,
  faCode,
  faRocket,
  faCheck,
  faArrowRight,
  faCircle,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  server: faServer,
  code: faCode,
  rocket: faRocket,
};

const Roles = ({ role, animate, index, reducedMotion }) => {
  const [mouseHover, setMouseHover] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cardVisible, setCardVisible] = useState(false);
  const [progressAnimate, setProgressAnimate] = useState(false);
  const cardRef = useRef(null);

  // Animated entrance
  useEffect(() => {
    if (!animate) return;
    const timer = setTimeout(() => {
      setCardVisible(true);
      setTimeout(() => setProgressAnimate(true), 400);
    }, 200 + index * 200);
    return () => clearTimeout(timer);
  }, [animate, index]);

  // 3D hover tilt
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
    <div
      ref={cardRef}
      onMouseEnter={() => setMouseHover(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative bg-white/70 backdrop-blur-xl hover:bg-white/95 rounded-2xl p-6 lg:p-7 hover:shadow-2xl hover:shadow-picto-primary/10 transition-all duration-500 border border-gray-100/50 hover:border-picto-primary/20 overflow-hidden ${
        cardVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
      style={{
        transitionDelay: reducedMotion ? "0ms" : `${index * 150}ms`,
        transitionDuration: "700ms",
        transform: reducedMotion
          ? "none"
          : `perspective(1000px) rotateY(${mousePos.x * 5}deg) rotateX(${-mousePos.y * 5}deg)`,
      }}
    >
      {/* ===== HOVER EFFECTS ===== */}
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-picto-primary/[0.03] via-transparent to-orange-100/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Animated border glow */}
      <div
        className={`absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none ${
          mouseHover ? "opacity-100" : "opacity-0"
        }`}
        style={{
          boxShadow: mouseHover
            ? `inset 0 0 30px ${role.color}15, 0 0 25px ${role.color}10`
            : "none",
        }}
      ></div>

      {/* Left accent bar */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b transition-all duration-500 ${
          mouseHover ? "opacity-100 scale-y-100" : "opacity-30 scale-y-0"
        } origin-top`}
        style={{ backgroundColor: role.color }}
      ></div>

      {/* Top-right corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none">
        <div
          className="w-full h-full rounded-bl-full"
          style={{
            background: `linear-gradient(225deg, ${role.color}20, transparent)`,
          }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* ===== HEADER: ICON + TITLE ===== */}
        <div className="flex items-start gap-4 mb-4">
          {/* Icon with animated ring */}
          <div className="relative flex-shrink-0">
            {/* Pulse ring */}
            <div
              className={`absolute -inset-2 rounded-2xl border-2 transition-all duration-700 ${
                mouseHover ? "opacity-30 scale-100" : "opacity-0 scale-50"
              }`}
              style={{ borderColor: role.color }}
            ></div>

            {/* Glow behind icon */}
            <div
              className={`absolute inset-0 rounded-2xl transition-all duration-500 blur-lg ${
                mouseHover ? "opacity-40 scale-125" : "opacity-0 scale-100"
              }`}
              style={{ backgroundColor: role.color }}
            ></div>

            {/* Icon container */}
            <div
              className="relative w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
              style={{ backgroundColor: role.color }}
            >
              <FontAwesomeIcon
                icon={iconMap[role.icon]}
                className="text-white text-lg"
              />
            </div>
          </div>

          {/* Title + description */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-picto-primary transition-colors duration-300 mb-2">
              {role?.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
              {role?.description}
            </p>
          </div>
        </div>

        {/* ===== TECH COUNT INDICATOR ===== */}
        {role.techCount && (
          <div className="ml-16 mb-4">
            <div className="flex items-center gap-2">
              <div
                className={`h-1.5 flex-1 rounded-full bg-gray-100 overflow-hidden transition-all duration-1000 ${
                  progressAnimate ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: progressAnimate
                      ? `${Math.min(100, role.techCount * 10)}%`
                      : "0%",
                    background: `linear-gradient(90deg, ${role.color}, ${role.color}88)`,
                    boxShadow: `0 0 6px ${role.color}44`,
                  }}
                ></div>
              </div>
              <span className="text-xs font-semibold text-gray-400 flex-shrink-0">
                {role.techCount} technologies
              </span>
            </div>
          </div>
        )}

        {/* ===== FEATURES LIST ===== */}
        <div className="flex flex-wrap gap-2 ml-16">
          {role.features.map((feature, index) => (
            <span
              key={feature}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 hover:bg-picto-primary/5 text-gray-600 hover:text-picto-primary text-xs font-semibold rounded-full border border-gray-200 hover:border-picto-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-sm ${
                cardVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: reducedMotion
                  ? "0ms"
                  : `${300 + index * 80}ms`,
                transitionDuration: "500ms",
              }}
            >
              <FontAwesomeIcon
                icon={faCircle}
                className="text-[6px]"
                style={{ color: role.color }}
              />
              {feature}
            </span>
          ))}
        </div>

        {/* ===== CTA BUTTON ===== */}
        <div className="mt-5 ml-16">
          <button className="group/link relative inline-flex items-center gap-2 text-picto-primary hover:text-orange-500 font-semibold text-sm transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Learn More</span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="relative z-10 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5"
            />
            {/* Underline effect */}
            <span
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-picto-primary to-orange-400 transition-all duration-300"
              style={{
                width: mouseHover ? "100%" : "0%",
              }}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Roles;