import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCalendarAlt,
  faClock,
  faExternalLinkAlt,
  faLayerGroup,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import BlogContent from "../components/blog/BlogContent";
import blogPosts from "../data/blog";
import projects from "../data/projects";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);
  const relatedProject = post?.relatedProjectSlug
    ? projects.find((project) => project.slug === post.relatedProjectSlug)
    : null;

  if (!post) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-4">
        <div className="max-w-xl text-center rounded-3xl bg-white/5 border border-white/10 p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-picto-primary/80 font-semibold mb-4">
            Writing
          </p>
          <h1 className="text-3xl font-bold mb-4">Article not found</h1>
          <p className="text-gray-400 mb-6">
            The article you are looking for may have been moved or removed.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-picto-primary font-semibold hover:text-orange-300"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
            Back to writing
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <div className="relative min-h-[52vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-picto-primary/15 via-gray-950 to-black"></div>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,122,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,0,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        ></div>
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/95 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-20 pb-12 pt-28">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-picto-primary transition-colors duration-300 mb-8"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
            Back to writing
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-picto-primary/15 text-picto-primary text-xs font-bold rounded-full border border-picto-primary/20">
              <FontAwesomeIcon icon={faPenNib} className="text-[10px]" />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.07] text-gray-300 text-xs font-semibold rounded-full border border-white/[0.1]">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-[10px]" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.07] text-gray-300 text-xs font-semibold rounded-full border border-white/[0.1]">
              <FontAwesomeIcon icon={faClock} className="text-[10px]" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="max-w-4xl text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            {post.title}
          </h1>
          <p className="max-w-3xl text-base sm:text-lg text-gray-300 leading-relaxed">
            {post.description}
          </p>
        </div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 shadow-[0_40px_120px_-60px_rgba(255,122,0,0.35)]">
            <BlogContent content={post.content} />
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-5 rounded-3xl bg-white/5 border border-white/10 p-6 shadow-[0_20px_80px_-40px_rgba(255,122,0,0.35)]">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-picto-primary/80 font-semibold mb-3">
                  Article Info
                </p>
                <div className="space-y-3 text-sm text-gray-300">
                  <p className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faLayerGroup} className="text-picto-primary" />
                    {post.category}
                  </p>
                  <p className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-picto-primary" />
                    {post.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faClock} className="text-picto-primary" />
                    {post.readingTime}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-white/5 text-gray-200 border border-white/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {relatedProject && (
                <Link
                  to={`/projects/${relatedProject.slug}`}
                  className="inline-flex w-full items-center justify-center gap-2 bg-gradient-to-r from-picto-primary to-orange-400 text-white font-semibold text-sm px-4 py-3 rounded-2xl shadow-lg shadow-picto-primary/20 hover:-translate-y-0.5 transition-transform duration-200"
                >
                  Related Project
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                </Link>
              )}

              {post.links?.live && post.links.live !== "#!" && (
                <a
                  href={post.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-3 rounded-2xl hover:bg-white/10 transition-all duration-200"
                >
                  Live Project
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                </a>
              )}

              {post.links?.github && (
                <a
                  href={post.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-3 rounded-2xl hover:bg-white/10 transition-all duration-200"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-sm" />
                  Repository
                </a>
              )}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default BlogDetail;
