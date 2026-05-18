import {
  faArrowRight,
  faLock,
  faCode,
  faExternalLinkAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Projects = ({ data }) => {
  return (
    <div className="group relative h-full rounded-2xl overflow-hidden bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50/80 shadow-lg hover:shadow-2xl hover:shadow-picto-primary/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 hover:border-picto-primary/20">
      {/* ===== HOVER BACKGROUND EFFECTS ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-picto-primary/[0.03] via-transparent to-orange-100/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <div className="absolute -inset-1 bg-gradient-to-r from-picto-primary/5 via-transparent to-orange-300/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"></div>

      {/* ===== IMAGE SECTION ===== */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-picto-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

        {/* Image */}
        <img
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
          src={data?.image}
          alt={`${data?.title} project screenshot`}
          loading="lazy"
        />

        {/* ===== TOP ACTIONS BAR (appears on hover) ===== */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
          {/* Skill tag */}
          {data?.skills?.[0] && (
            <span className="px-3 py-1.5 bg-white/95 backdrop-blur-md text-picto-primary text-xs font-bold rounded-full shadow-lg border border-white/50">
              {data.skills[0]}
            </span>
          )}

          {/* Visibility badge */}
          {data?.visibility === "private" && (
            <span className="px-3 py-1.5 bg-amber-500/90 backdrop-blur-md text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1.5">
              <FontAwesomeIcon icon={faLock} className="w-3 h-3" />
              Private
            </span>
          )}
        </div>

        {/* ===== BOTTOM INFO OVERLAY (appears on hover) ===== */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 z-20">
          <div className="flex items-center gap-4 text-white/80 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
              View Project
            </span>
            {data?.filtertag && (
              <span className="flex items-center gap-1.5">
                <FontAwesomeIcon icon={faCode} className="w-3 h-3" />
                {data.filtertag}
              </span>
            )}
          </div>
        </div>

        {/* ===== DECORATIVE CORNER ACCENT ===== */}
        <div className="absolute top-3 right-3 w-10 h-10 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform scale-0 group-hover:scale-100 z-10">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-picto-primary/30 to-orange-300/30 flex items-center justify-center backdrop-blur-sm border border-white/20">
            <div className="w-2.5 h-2.5 bg-picto-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* ===== CONTENT SECTION ===== */}
      <div className="relative p-6 lg:p-7">
        {/* ===== SKILL BADGES ===== */}
        {data?.skills && data.skills.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {data.skills.slice(0, 3).map((s, i) => (
              <span
                key={i}
                className="text-[11px] bg-gradient-to-r from-picto-primary/8 to-orange-100/15 text-picto-primary font-semibold px-2.5 py-1 rounded-full border border-picto-primary/15 hover:border-picto-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-sm"
                style={{ animationDelay: `${i * 80}ms` }}
                title={s}
              >
                {s}
              </span>
            ))}
            {data.skills.length > 3 && (
              <span className="text-[11px] text-gray-400 font-medium px-2 py-1">
                +{data.skills.length - 3}
              </span>
            )}
          </div>
        )}

        {/* ===== TITLE ===== */}
        <h3 className="text-gray-900 text-lg font-bold mb-3 leading-snug group-hover:text-picto-primary transition-colors duration-300 line-clamp-2">
          {data?.title}
        </h3>

        {/* ===== DESCRIPTION ===== */}
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 min-h-[3.9rem]">
          {data?.description?.length > 140
            ? `${data.description.substring(0, 140)}...`
            : data?.description}
        </p>

        {/* ===== ACTION BUTTON ===== */}
        <div className="mt-5 pt-4 border-t border-gray-100/80">
          <Link
            to={data?.link}
            className="group/btn relative inline-flex items-center gap-2.5 bg-gradient-to-r from-picto-primary to-orange-400 hover:from-orange-400 hover:to-picto-primary text-white font-semibold text-sm py-3 px-5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-picto-primary/25 transform hover:scale-[1.02] active:scale-95 overflow-hidden w-full justify-center"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="text-[10px]"
              />
              Project Details
              <FontAwesomeIcon
                icon={faArrowRight}
                className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1 text-xs"
              />
            </span>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-picto-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            {/* Shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 -skew-x-12 translate-x-full group-hover/btn:translate-x-0"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;