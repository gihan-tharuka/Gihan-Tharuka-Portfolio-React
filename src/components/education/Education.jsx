import { useEffect, useRef, useState } from "react";
import education from "../../data/education";
import {
  faGraduationCap,
  faCertificate,
  faAward,
  faBookOpen,
  faStar,
  faCalendarAlt,
  faMapPin,
  faTrophy,
  faArrowRight,
  faLightbulb,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getEducationMeta = (degree) => {
  if (degree.includes("BEng") || degree.includes("Bachelor"))
    return {
      icon: faGraduationCap,
      color: "#FF6B35",
      gradient: "from-orange-500/20 to-amber-500/10",
      type: "Degree",
      glow: "rgba(255,107,53,0.3)",
    };
  if (degree.includes("Certificate"))
    return {
      icon: faCertificate,
      color: "#10B981",
      gradient: "from-emerald-500/20 to-teal-500/10",
      type: "Certificate",
      glow: "rgba(16,185,129,0.3)",
    };
  if (degree.includes("GCE"))
    return {
      icon: faAward,
      color: "#007ACC",
      gradient: "from-blue-500/20 to-cyan-500/10",
      type: "Examination",
      glow: "rgba(0,122,204,0.3)",
    };
  return {
    icon: faBookOpen,
    color: "#8B5CF6",
    gradient: "from-purple-500/20 to-pink-500/10",
    type: "Other",
    glow: "rgba(139,92,246,0.3)",
  };
};

const EducationCard = ({ education: edu, index, animate, reducedMotion }) => {
  const meta = getEducationMeta(edu.degree);
  const [cardAnimate, setCardAnimate] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!animate) return;
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setCardAnimate(true), 100);
    }, 200 + index * 200);
    return () => clearTimeout(timer);
  }, [animate, index]);

  return (
    <div
      ref={cardRef}
      className={`group transition-all duration-1000 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
      style={{
        transitionDelay: reducedMotion ? "0ms" : `${index * 150}ms`,
      }}
    >
      <div className="flex items-start gap-5 md:gap-8">
        {/* ===== LEFT: TIMELINE NODE ===== */}
        <div className="relative flex flex-col items-center flex-shrink-0">
          {/* Timeline line (connecting) */}
          {index < education.length - 1 && (
            <div
              className={`absolute top-14 w-0.5 h-[calc(100%+2rem)] bg-gradient-to-b transition-all duration-1000 ${
                cardAnimate ? "opacity-30" : "opacity-0"
              }`}
              style={{
                background: `linear-gradient(to bottom, ${meta.color}, ${
                  index < education.length - 1
                    ? getEducationMeta(education[index + 1].degree).color
                    : meta.color
                })`,
              }}
            ></div>
          )}

          {/* Icon node */}
          <div className="relative z-10">
            {/* Outer glow ring */}
            <div
              className={`absolute inset-0 rounded-2xl transition-all duration-1000 blur-xl ${
                cardAnimate ? "opacity-60 scale-150" : "opacity-0 scale-100"
              }`}
              style={{ backgroundColor: meta.glow }}
            ></div>

            {/* Pulsing ring */}
            <div
              className={`absolute -inset-2 rounded-2xl border-2 transition-all duration-1000 ${
                cardAnimate
                  ? "opacity-20 scale-100"
                  : "opacity-0 scale-50"
              }`}
              style={{ borderColor: meta.color }}
            ></div>

            {/* Icon container */}
            <div
              className={`relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 ${
                cardAnimate ? "scale-100" : "scale-0"
              }`}
              style={{ backgroundColor: meta.color }}
            >
              <FontAwesomeIcon
                icon={meta.icon}
                className="text-white text-xl"
              />
            </div>
          </div>
        </div>

        {/* ===== RIGHT: CARD CONTENT ===== */}
        <div
          className={`flex-1 min-w-0 transition-all duration-700 ${
            cardAnimate
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-8"
          }`}
        >
          <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-6 lg:p-7 hover:bg-white/90 hover:shadow-2xl hover:shadow-picto-primary/10 transition-all duration-500 transform hover:-translate-y-1.5 border border-gray-100/50 hover:border-picto-primary/20 overflow-hidden">
            {/* Hover gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${meta.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
            ></div>

            {/* Top accent gradient line */}
            <div
              className="absolute top-0 left-0 right-0 h-1 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left"
              style={{
                background: `linear-gradient(90deg, ${meta.color}, ${meta.color}88, transparent)`,
              }}
            ></div>

            <div className="relative z-10">
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex-1">
                  {/* Institution with icon */}
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <FontAwesomeIcon
                      icon={faSchool}
                      className="text-gray-400 text-sm"
                    />
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-picto-primary transition-colors duration-300">
                      {edu.institution}
                    </h3>
                  </div>

                  {/* Degree */}
                  <h4 className="text-base font-semibold text-gray-700 leading-snug ml-7">
                    {edu.degree}
                  </h4>
                </div>

                {/* Period badge */}
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-picto-primary/10 to-orange-100/20 text-picto-primary font-semibold text-sm rounded-xl border border-picto-primary/20 group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="text-xs"
                    />
                    {edu.period}
                  </div>
                </div>
              </div>

              {/* Details */}
              {edu.details && (
                <div className="ml-7 mt-3 flex items-start gap-2.5">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: meta.color }}
                  ></div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              )}

              {/* Type badge at bottom */}
              {meta.type && (
                <div className="ml-7 mt-4">
                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full border transition-all duration-300 group-hover:shadow-sm"
                    style={{
                      color: meta.color,
                      backgroundColor: `${meta.color}15`,
                      borderColor: `${meta.color}30`,
                    }}
                  >
                    <FontAwesomeIcon icon={meta.icon} className="text-[10px]" />
                    {meta.type}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  // Check reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Intersection Observer for entrance
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          setTimeout(() => setStatsVisible(true), 300);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  // Calculate stats
  const totalQualifications = education.length;
  const totalYears = education.reduce((acc, edu) => {
    const years = edu.period.match(/\d{4}/g);
    if (years) {
      return acc + (parseInt(years[years.length - 1]) - parseInt(years[0]) + 1);
    }
    return acc + 1;
  }, 0);
  const degreeCount = education.filter(
    (e) => e.degree.includes("BEng") || e.degree.includes("Bachelor")
  ).length;
  const certificateCount = education.filter((e) =>
    e.degree.includes("Certificate")
  ).length;

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50"
      id="education"
      aria-label="Education & Qualifications"
    >
      {/* ===== ADVANCED BACKGROUND EFFECTS ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-bl from-picto-primary/10 via-orange-200/5 to-transparent rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-60 -left-40 w-[450px] h-[450px] bg-gradient-to-tr from-picto-primary/8 via-blue-200/5 to-transparent rounded-full blur-3xl animate-blob animation-delay-4"></div>
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-gradient-to-r from-amber-100/10 to-picto-primary/5 rounded-full blur-3xl animate-blob animation-delay-8"></div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,122,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,0,0.2) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        ></div>

        {/* Floating shapes */}
        <div className="hidden lg:block">
          <div className="absolute top-32 left-[12%] w-3 h-3 bg-picto-primary/20 rounded-full animate-float"></div>
          <div className="absolute top-1/4 right-[15%] w-5 h-5 border-2 border-picto-primary/15 rounded-lg rotate-45 animate-float animation-delay-3"></div>
          <div className="absolute bottom-1/3 left-[8%] w-2 h-2 bg-orange-300/30 rounded-full animate-float animation-delay-6"></div>
          <div className="absolute bottom-40 right-[20%] w-4 h-4 border border-picto-primary/20 rounded-full animate-float animation-delay-2"></div>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== SECTION HEADER ===== */}
        <div
          className={`text-center mb-16 lg:mb-20 transition-all duration-700 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-picto-primary/10 to-orange-100/20 rounded-full border border-picto-primary/20 mb-6">
            <div className="w-2 h-2 bg-picto-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-picto-primary">
              Academic Journey
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Education &
            </span>
            <br />
            <span className="bg-gradient-to-r from-picto-primary via-orange-500 to-picto-primary bg-clip-text text-transparent">
              Qualifications
            </span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            My academic foundation and continuous learning journey that have
            shaped my expertise in software engineering and technology.
          </p>

          {/* Stats bar */}
          <div
            className={`mt-8 flex flex-wrap items-center justify-center gap-6 text-sm transition-all duration-700 ${
              statsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100/60">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-picto-primary"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-picto-primary to-orange-400 bg-clip-text text-transparent">
                {totalQualifications}
              </span>
              <span className="text-gray-500">Qualifications</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100/60">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="text-picto-primary"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-picto-primary to-orange-400 bg-clip-text text-transparent">
                {totalYears}+
              </span>
              <span className="text-gray-500">Years Learning</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100/60">
              <FontAwesomeIcon
                icon={faTrophy}
                className="text-picto-primary"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-picto-primary to-orange-400 bg-clip-text text-transparent">
                {degreeCount}
              </span>
              <span className="text-gray-500">Degrees</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100/60">
              <FontAwesomeIcon
                icon={faLightbulb}
                className="text-picto-primary"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-picto-primary to-orange-400 bg-clip-text text-transparent">
                {certificateCount}
              </span>
              <span className="text-gray-500">Certificates</span>
            </div>
          </div>
        </div>

        {/* ===== TIMELINE ===== */}
        <div className="relative">
          {/* Vertical timeline line (desktop decorative) */}
          <div className="hidden md:block absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-picto-primary via-orange-400 to-blue-500 opacity-20"></div>

          <div className="space-y-12 lg:space-y-16">
            {education.map((edu, index) => (
              <EducationCard
                key={edu.id}
                education={edu}
                index={index}
                animate={animate}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>
        </div>

        {/* ===== BOTTOM FOOTER ===== */}
        <div
          className={`text-center mt-16 lg:mt-20 transition-all duration-1000 delay-1000 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-picto-primary/40 to-transparent"></div>
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="text-picto-primary text-xl"
            />
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-picto-primary/40 to-transparent"></div>
          </div>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-md border border-gray-100/60 rounded-2xl shadow-sm">
            <FontAwesomeIcon
              icon={faLightbulb}
              className="text-amber-400 text-sm"
            />
            <span className="text-gray-600 font-medium text-sm">
              Lifelong Learner — Always exploring new frontiers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;