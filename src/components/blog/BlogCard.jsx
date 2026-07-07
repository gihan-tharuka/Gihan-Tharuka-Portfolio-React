import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCalendarAlt,
  faClock,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";

const BlogCard = ({ post, compact = false }) => {
  return (
    <article className="group relative h-full rounded-2xl overflow-hidden bg-white/[0.04] backdrop-blur-md hover:bg-white/[0.08] shadow-lg hover:shadow-2xl hover:shadow-picto-primary/10 transition-all duration-500 transform hover:-translate-y-2 border border-white/[0.06] hover:border-picto-primary/20">
      <div className="absolute inset-0 bg-gradient-to-br from-picto-primary/[0.03] via-transparent to-orange-100/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <div className="absolute -inset-1 bg-gradient-to-r from-picto-primary/5 via-transparent to-orange-300/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"></div>

      <div className="relative p-6 lg:p-7 h-full flex flex-col">
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-picto-primary/15 text-picto-primary text-xs font-bold rounded-full border border-picto-primary/20">
            <FontAwesomeIcon icon={faPenNib} className="text-[10px]" />
            {post.category}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.05] text-gray-400 text-xs font-semibold rounded-full border border-white/[0.08]">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-[10px]" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.05] text-gray-400 text-xs font-semibold rounded-full border border-white/[0.08]">
            <FontAwesomeIcon icon={faClock} className="text-[10px]" />
            {post.readingTime}
          </span>
        </div>

        <h3 className="text-white text-xl font-bold mb-3 leading-snug group-hover:text-picto-primary transition-colors duration-300">
          {post.title}
        </h3>

        <p className={`text-gray-400 text-sm leading-relaxed ${compact ? "line-clamp-3" : "line-clamp-4"} flex-1`}>
          {post.description}
        </p>

        {post.tags?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {post.tags.slice(0, compact ? 3 : 5).map((tag) => (
              <span
                key={tag}
                className="text-[11px] bg-gradient-to-r from-picto-primary/15 to-orange-100/10 text-picto-primary font-semibold px-2.5 py-1 rounded-full border border-picto-primary/20"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > (compact ? 3 : 5) && (
              <span className="text-[11px] text-gray-500 font-medium px-2 py-1">
                +{post.tags.length - (compact ? 3 : 5)}
              </span>
            )}
          </div>
        )}

        <div className="mt-6 pt-5 border-t border-white/[0.06]">
          <Link
            to={`/blog/${post.slug}`}
            className="group/btn relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-picto-primary to-orange-400 hover:from-orange-400 hover:to-picto-primary text-white font-semibold text-sm py-3 px-5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-picto-primary/25 transform hover:scale-[1.02] active:scale-95 overflow-hidden w-full"
          >
            <span className="relative z-10 flex items-center gap-2">
              Read Article
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 -skew-x-12 translate-x-full group-hover/btn:translate-x-0"></div>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
