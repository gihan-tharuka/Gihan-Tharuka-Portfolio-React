import { useEffect, useRef, useState } from "react";
import Roles from "./Roles";
import { faArrowRight, faCode, faPalette, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const rolesData = [
  {
    id: 1,
    title: "Backend Development",
    description:
      "I build and maintain server-side logic, databases, and APIs to power applications — focusing on performance, security, and scalability.",
    icon: "server",
    color: "#FF6B35",
    features: ["API Development", "Database Design", "Security", "Performance"]
  },
  {
    id: 2,
    title: "Frontend Development",
    description:
      "I implement responsive, accessible, and high-performance user interfaces using modern frameworks and best practices.",
    icon: "code",
    color: "#007ACC",
    features: ["Responsive Design", "Modern Frameworks", "UI/UX", "Performance"]
  },
  {
    id: 3,
    title: "Deployment & DevOps",
    description:
      "I deploy applications reliably to production using CI/CD, cloud platforms, and automated build pipelines to ensure fast and safe releases.",
    icon: "rocket",
    color: "#10B981",
    features: ["CI/CD", "Cloud Platforms", "Automation", "Monitoring"]
  },
];

const Profession = () => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

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
    <section ref={ref} className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50" id="services">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-picto-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-orange-300/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-picto-primary/40 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-orange-400/30 rounded-full"></div>
        <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-picto-primary/50 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-700 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Badge */}
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-picto-primary/10 text-picto-primary font-semibold text-sm rounded-full border border-picto-primary/20">
                <FontAwesomeIcon icon={faCode} />
                Full Stack Services
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  What I Do
                </span>
                <br />
                <span className="bg-gradient-to-r from-picto-primary via-orange-500 to-picto-primary bg-clip-text text-transparent">
                  Best
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed max-w-lg">
              <p>
                I specialize in crafting end-to-end digital solutions that combine technical excellence
                with exceptional user experiences. From concept to deployment, I bring ideas to life
                with precision and passion.
              </p>
              <p>
                My expertise spans the entire development lifecycle, ensuring that every project
                is built with scalability, security, and user satisfaction in mind.
              </p>
            </div>

            {/* CTA Button */}
            <div className={`transition-all duration-700 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-picto-primary to-orange-400 hover:from-orange-400 hover:to-picto-primary text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg shadow-picto-primary/25 hover:shadow-xl hover:shadow-picto-primary/40 transform hover:scale-105 transition-all duration-300"
              >
                <span>Start Your Project</span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Right Content - Role Cards */}
          <div className={`space-y-6 transition-all duration-700 delay-500 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {rolesData.map((role, index) => (
              <Roles
                role={role}
                key={role.id}
                animate={animate}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profession;
