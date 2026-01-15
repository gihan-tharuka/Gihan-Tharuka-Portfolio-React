import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faServer,
  faCode,
  faRocket,
  faCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  server: faServer,
  code: faCode,
  rocket: faRocket,
};

const Roles = ({ role, animate, delay }) => {
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      className={`group relative bg-white/80 backdrop-blur-sm hover:bg-white rounded-2xl p-6 hover:shadow-2xl hover:shadow-picto-primary/10 transition-all duration-500 transform hover:-translate-y-1 border border-gray-100/50 hover:border-picto-primary/20 overflow-hidden ${
        animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: animate ? `${delay}ms` : '0ms'
      }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-picto-primary/5 via-transparent to-orange-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Animated accent line */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-picto-primary to-orange-400 transition-all duration-500 ${
          mouseHover ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundColor: role.color }}
      ></div>

      {/* Decorative corner elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-picto-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
      <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-orange-300/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>

      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-4">
          {/* Icon container */}
          <div className="relative flex-shrink-0">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
              style={{ backgroundColor: role.color }}
            >
              <FontAwesomeIcon
                icon={iconMap[role.icon]}
                className="text-white text-lg"
              />
            </div>
            {/* Glow effect */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-md"
              style={{ backgroundColor: role.color }}
            ></div>
          </div>

          {/* Title and description */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-picto-primary transition-colors duration-300 mb-2">
              {role?.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              {role?.description}
            </p>
          </div>
        </div>

        {/* Features list */}
        <div className="flex flex-wrap gap-2">
          {role.features.map((feature, index) => (
            <span
              key={feature}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 hover:bg-picto-primary/5 text-gray-700 hover:text-picto-primary text-xs font-medium rounded-full border border-gray-200 hover:border-picto-primary/20 transition-all duration-300 group-hover:scale-105"
              style={{
                transitionDelay: animate ? `${delay + (index * 100)}ms` : '0ms'
              }}
            >
              <FontAwesomeIcon icon={faCheck} className="text-picto-primary" />
              {feature}
            </span>
          ))}
        </div>

        {/* Learn more link */}
        <div className="mt-4 flex justify-end">
          <button className="group/link inline-flex items-center gap-2 text-picto-primary hover:text-orange-500 font-semibold text-sm transition-all duration-300">
            <span>Learn More</span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="transition-transform duration-300 group-hover/link:translate-x-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Roles;
