import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBookOpen,
  faLayerGroup,
  faPenNib,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import BlogCard from "../components/blog/BlogCard";
import blogPosts from "../data/blog";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const sortedPosts = useMemo(
    () =>
      [...blogPosts].sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1;
        return new Date(b.date) - new Date(a.date);
      }),
    []
  );

  const categories = useMemo(() => {
    const values = sortedPosts.map((post) => post.category).filter(Boolean);
    return ["All", ...Array.from(new Set(values))];
  }, [sortedPosts]);

  const filteredPosts =
    selectedCategory === "All"
      ? sortedPosts
      : sortedPosts.filter((post) => post.category === selectedCategory);

  return (
    <section
      className="relative min-h-screen py-16 md:py-24 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black"
      id="blog"
      aria-label="Writing"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-60 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-picto-primary/12 via-orange-500/8 to-transparent rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-picto-primary/8 via-purple-500/5 to-transparent rounded-full blur-3xl animate-blob animation-delay-4"></div>
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
        <div
          className={`text-center mb-16 lg:mb-20 transition-all duration-700 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-6 flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-picto-primary transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
              Back Home
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-picto-primary/20 via-picto-primary/10 to-transparent backdrop-blur-md rounded-full border border-picto-primary/25 mb-6">
            <div className="w-2 h-2 bg-picto-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-picto-primary">
              Writing
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white/80 bg-clip-text text-transparent">
              Writing
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Project breakdowns, engineering lessons, and notes from building
            production-style full-stack applications.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06]">
              <FontAwesomeIcon icon={faBookOpen} className="text-picto-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-picto-primary to-orange-400 bg-clip-text text-transparent">
                {blogPosts.length}
              </span>
              <span className="text-gray-500">Articles</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06]">
              <FontAwesomeIcon icon={faLayerGroup} className="text-picto-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-picto-primary to-orange-400 bg-clip-text text-transparent">
                {categories.length - 1}
              </span>
              <span className="text-gray-500">Categories</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            const count =
              category === "All"
                ? blogPosts.length
                : blogPosts.filter((post) => post.category === category).length;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`group relative px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden ${
                  isActive
                    ? "bg-gradient-to-r from-picto-primary to-orange-400 text-white shadow-lg shadow-picto-primary/25"
                    : "bg-white/[0.06] backdrop-blur-sm text-gray-400 hover:text-picto-primary border border-white/[0.1] hover:border-picto-primary/30 hover:shadow-md hover:bg-white/[0.08]"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {category}
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-picto-primary/10 text-picto-primary group-hover:bg-picto-primary/20"
                    }`}
                  >
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-16 lg:mt-20">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-picto-primary/40 to-transparent"></div>
            <FontAwesomeIcon icon={faRocket} className="text-picto-primary text-xl" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-picto-primary/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
