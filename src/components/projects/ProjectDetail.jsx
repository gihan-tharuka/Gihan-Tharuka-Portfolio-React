import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faChevronDown, faChevronUp, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projects from "../../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [languagesOpen, setLanguagesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [conceptsOpen, setConceptsOpen] = useState(false);

  // On first mount, open collapsible sections by default for desktop
  // and keep them closed for mobile. This sets only the initial state
  // so manual toggles by the user aren't overridden on resize.
  useEffect(() => {
    try {
      const isDesktop = window.matchMedia && window.matchMedia("(min-width: 1024px)").matches;
      if (isDesktop) {
        setFeaturesOpen(true);
        setLanguagesOpen(true);
        setServicesOpen(true);
        setConceptsOpen(true);
      }
    } catch (e) {
      // ignore in non-browser environments
    }
  }, []);

  if (!project) {
    return (
      <div className="content px-4 sm:px-6 md:px-12 lg:px-20 py-12">
        <p>Project not found.</p>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      {/** resolve hero and gallery paths that live under /src so Vite can serve them */}
      {(() => {
        const fallback = new URL("../assets/images/portfolio-images/card-3.png", import.meta.url).href;
        const resolvePath = (raw) => {
          if (!raw) return fallback;
          try {
            // If path begins with /src/ (repo-relative), convert to a relative module path
            if (raw.startsWith("/src/")) {
              const relative = raw.replace(/^\/src\//, "../");
              return new URL(relative, import.meta.url).href;
            }
            // If it looks like an asset path but doesn't start with /src, strip leading slash and resolve
            if (raw.includes("/assets/")) {
              const stripped = raw.replace(/^\//, "");
              return new URL(stripped, import.meta.url).href;
            }
            return raw;
          } catch (e) {
            return fallback;
          }
        };

        // If the project already provides an imported URL (starts with '/' or 'http'), use it
        const heroSrc = (typeof project.heroImage === 'string' && (project.heroImage.startsWith('/') || project.heroImage.startsWith('http')))
          ? project.heroImage
          : resolvePath(project.heroImage);

        return (
          <div
            className="relative h-[40vh] md:h-[55vh] lg:h-[65vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${heroSrc})` }}
            aria-hidden={false}
          >
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/95 to-transparent" />
            <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 md:px-12 lg:px-20 flex items-end pb-12">
              <div className="max-w-3xl">
                <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-semibold text-picto-primary/80 mb-4">
                  Project Overview
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  {project.title}
                </h1>
              </div>
            </div>
          </div>
        );
      })()}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_40px_120px_-60px_rgba(255,122,0,0.35)]">
              <div className="flex flex-col gap-3">
                <p className="text-sm uppercase tracking-[0.35em] text-picto-primary/80 font-semibold">
                  Project Summary
                </p>
                <h2 className="text-3xl font-bold">{project.title}</h2>
                <p className="text-gray-300 leading-relaxed">{project.short}</p>
                {project.duration && (
                  <div className="inline-flex items-center gap-2 text-sm text-gray-400">
                    <span className="rounded-full bg-white/[0.05] px-3 py-1">Duration</span>
                    <span>{project.duration}</span>
                  </div>
                )}
              </div>
            </section>

            <section className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold">Features</h2>
                {project.features && project.features.length > 0 && (
                  <button
                    type="button"
                    aria-expanded={featuresOpen}
                    aria-controls="features-list"
                    onClick={() => setFeaturesOpen((s) => !s)}
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-picto-primary transition-colors duration-200"
                  >
                    <span>{project.features.length} items</span>
                    <FontAwesomeIcon icon={featuresOpen ? faChevronUp : faChevronDown} />
                  </button>
                )}
              </div>

              {featuresOpen && project.features && project.features.length > 0 && (
                <div id="features-list" className="mt-6 grid gap-3">
                  {project.features.map((f, i) => (
                    <div key={i} className="rounded-3xl bg-white/5 border border-white/10 px-5 py-4 flex items-start gap-3">
                      <span className="text-picto-primary flex-shrink-0 mt-0.5">
                        <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm text-gray-200"><span className="font-semibold text-white">{f.name}</span> <span className="text-gray-400">— {f.description}</span></p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold">Concepts used</h2>
                {project.conceptsUsed && project.conceptsUsed.length > 0 && (
                  <button
                    type="button"
                    aria-expanded={conceptsOpen}
                    aria-controls="concepts-list"
                    onClick={() => setConceptsOpen((s) => !s)}
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-picto-primary transition-colors duration-200"
                  >
                    <span>{project.conceptsUsed.length} items</span>
                    <FontAwesomeIcon icon={conceptsOpen ? faChevronUp : faChevronDown} />
                  </button>
                )}
              </div>

              {conceptsOpen && project.conceptsUsed && project.conceptsUsed.length > 0 && (
                <div id="concepts-list" className="flex flex-wrap gap-2 mt-6">
                  {project.conceptsUsed.map((c, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 bg-white/5 text-gray-200 border border-white/10 rounded-full">{c}</span>
                  ))}
                </div>
              )}
            </section>

            {/*
            <section>
              <h2 className="text-xl font-semibold mb-4">Gallery</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.gallery.map((g, i) => {
                  let src = g;
                  try {
                    if (typeof g === 'string' && (g.startsWith('/') || g.startsWith('http'))) {
                      // already resolved from static import
                      src = g;
                    } else if (g && g.startsWith("/src/")) {
                      const relative = g.replace(/^\/src\//, "../");
                      src = new URL(relative, import.meta.url).href;
                    } else if (g && g.includes("/assets/")) {
                      const stripped = g.replace(/^\//, "");
                      src = new URL(stripped, import.meta.url).href;
                    }
                  } catch (e) {
                    src = g;
                  }
                  return (
                    <img key={i} src={src} alt={`${project.title} gallery ${i + 1}`} className="w-full object-cover rounded" loading="lazy" />
                  );
                })}
              </div>
            </section>
            */}
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-28 bg-white/5 border border-white/10 rounded-3xl p-6 shadow-[0_20px_80px_-40px_rgba(255,122,0,0.35)]">
              {/* Role removed as requested */}

              <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-semibold text-white">Languages & frameworks</p>
                    {project.tools && project.tools.length > 0 && (
                      <button
                        type="button"
                        aria-expanded={languagesOpen}
                        onClick={() => setLanguagesOpen((s) => !s)}
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-picto-primary transition-colors duration-200"
                      >
                        <span>{project.tools.length} items</span>
                        <FontAwesomeIcon icon={languagesOpen ? faChevronUp : faChevronDown} />
                      </button>
                    )}
                  </div>

                    {languagesOpen && project.tools && project.tools.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tools.map((t) => (
                        <span key={t} className="text-xs px-3 py-1 bg-white/5 text-gray-200 border border-white/10 rounded-full">{t}</span>
                      ))}
                    </div>
                  )}

                  {project.otherServices && project.otherServices.length > 0 && (
                    <div className="mt-4">
                      <div className="flex items-center justify-between">
                        <p className="text-xl font-semibold text-white">Other services</p>
                        <button
                          type="button"
                          aria-expanded={servicesOpen}
                          onClick={() => setServicesOpen((s) => !s)}
                          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-picto-primary transition-colors duration-200"
                        >
                          <span>{project.otherServices.length} items</span>
                          <FontAwesomeIcon icon={servicesOpen ? faChevronUp : faChevronDown} />
                        </button>
                      </div>

                      {servicesOpen && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {project.otherServices.map((s) => (
                            <span key={s} className="text-xs px-3 py-1 bg-white/5 text-gray-200 border border-white/10 rounded-full">{s}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
              </div>

              <div className="mt-6 grid gap-3">
                {project.links && project.links.live && project.links.live !== "#!" && (
                  <a href={project.links.live} className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-picto-primary to-orange-400 text-white font-semibold text-sm px-4 py-3 rounded-2xl shadow-lg shadow-picto-primary/20 hover:-translate-y-0.5 transition-transform duration-200" target="_blank" rel="noreferrer">Live</a>
                )}
                {project.links && project.links.repo && (
                  project.visibility === "private" ? (
                    <button
                      onClick={() => {
                        const subject = encodeURIComponent(`Code Access Request for ${project.title}`);
                        const body = encodeURIComponent(`Hi,\n\nI'm interested in viewing the code for ${project.title}.\n\nMy GitHub username is: [please provide your GitHub username]\n\nCould you please grant me access to the repository?\n\nThank you!`);
                        window.location.href = `mailto:gihantharuka2499@gmail.com?subject=${subject}&body=${body}`;
                      }}
                      className="inline-flex items-center gap-2 justify-center bg-white/5 text-white border border-white/10 hover:bg-white/10 px-4 py-3 rounded-2xl transition-all duration-200"
                      title="This repository is private. Click to request access via email."
                    >
                      <FontAwesomeIcon icon={faLock} className="w-4 h-4" />
                      Request Code Access
                    </button>
                  ) : (
                    <a href={project.links.repo} className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-3 rounded-2xl hover:bg-white/10 transition-all duration-200" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                      View Repository
                    </a>
                  )
                )}
              </div>

              <div className="mt-6">
                <Link to="/projects" className="text-sm text-picto-primary">Back to projects</Link>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
