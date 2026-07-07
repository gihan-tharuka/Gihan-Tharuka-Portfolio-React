import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPenNib, faRocket } from "@fortawesome/free-solid-svg-icons";
import BlogCard from "./BlogCard";
import blogPosts from "../../data/blog";

const LatestWriting = () => {
  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black"
      id="writing"
      aria-label="Latest Writing"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-52 -left-40 w-[520px] h-[520px] bg-gradient-to-br from-picto-primary/10 via-orange-500/6 to-transparent rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-52 -right-40 w-[460px] h-[460px] bg-gradient-to-tl from-picto-primary/8 via-purple-500/5 to-transparent rounded-full blur-3xl animate-blob animation-delay-4"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,122,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,0,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-picto-primary/20 via-picto-primary/10 to-transparent backdrop-blur-md rounded-full border border-picto-primary/25 mb-6">
            <div className="w-2 h-2 bg-picto-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-picto-primary">
              Latest Writing
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white/80 bg-clip-text text-transparent">
              Engineering Notes &
            </span>
            <br />
            <span className="bg-gradient-to-r from-picto-primary via-orange-500 to-picto-primary bg-clip-text text-transparent">
              Project Breakdowns
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Practical notes from building production-style full-stack projects,
            improving quality, and thinking through real software workflows.
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} compact />
          ))}
        </div>

        <div className="text-center mt-14 lg:mt-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-picto-primary/40 to-transparent"></div>
            <FontAwesomeIcon icon={faRocket} className="text-picto-primary text-xl" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-picto-primary/40 to-transparent"></div>
          </div>

          <Link
            to="/blog"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-picto-primary to-orange-400 hover:from-orange-400 hover:to-picto-primary text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl shadow-picto-primary/25 hover:shadow-3xl hover:shadow-picto-primary/40 transform hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FontAwesomeIcon icon={faPenNib} className="text-sm" />
              View All Writing
              <FontAwesomeIcon
                icon={faArrowRight}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12 translate-x-full group-hover:translate-x-0"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestWriting;
