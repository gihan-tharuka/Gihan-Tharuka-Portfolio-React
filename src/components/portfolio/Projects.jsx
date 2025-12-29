import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Projects = ({ data }) => {
  return (
    <div className="group relative max-w-106 rounded-2xl overflow-hidden bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 shadow-lg hover:shadow-2xl hover:shadow-picto-primary/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 hover:border-picto-primary/20 backdrop-blur-sm">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-picto-primary/5 via-transparent to-orange-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Image container with enhanced effects */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        <img
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-105 filter"
          src={data?.image}
          alt={`${data?.title} image`}
          loading="lazy"
        />

        {/* Floating corner accent */}
        <div className="absolute top-3 right-3 w-8 h-8 bg-picto-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform scale-0 group-hover:scale-100">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-3 h-3 bg-picto-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="relative p-6 xs:p-8">
        {/* Enhanced skill badges */}
        {data?.skills && data.skills.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {data.skills.map((s, i) => (
              <span
                key={i}
                className="text-xs bg-gradient-to-r from-picto-primary/10 to-orange-100/20 text-picto-primary font-medium px-3 py-1.5 rounded-full border border-picto-primary/20 hover:border-picto-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-sm skill-badge animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
                title={s}
              >
                {s}
              </span>
            ))}
          </div>
        )}

        {/* Enhanced title */}
        <h3 className="text-gray-900 text-lg xxs:text-xl font-bold mb-3 leading-tight group-hover:text-picto-primary transition-colors duration-300">
          {data?.title}
        </h3>

        {/* Enhanced description */}
        <p
          style={{ lineHeight: "1.6", letterSpacing: "0%" }}
          className="text-gray-600 text-sm xxs:text-base text-wrap leading-relaxed line-clamp-3"
        >
          {data?.description?.length > 120
            ? `${data.description.substring(0, 120)}...`
            : data?.description
          }
        </p>

        {/* Modernized button */}
        <Link
          to={data?.link}
          className="group/btn relative inline-flex items-center gap-3 bg-gradient-to-r from-picto-primary to-orange-400 hover:from-orange-400 hover:to-picto-primary text-white font-semibold text-sm xs:text-base py-3 px-6 rounded-xl transition-all duration-300 mt-6 hover:shadow-lg hover:shadow-picto-primary/25 transform hover:scale-105 overflow-hidden"
        >
          <span className="relative z-10">Project Details</span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1"
          />

          {/* Button hover effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-picto-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
