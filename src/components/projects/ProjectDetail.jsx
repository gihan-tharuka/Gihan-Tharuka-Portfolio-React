import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import projects from "../../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  if (!project) {
    return (
      <div className="content px-4 sm:px-6 md:px-12 lg:px-20 py-12">
        <p>Project not found.</p>
      </div>
    );
  }

  return (
    <div>
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
            <div className="absolute inset-0 bg-black/30" />
            <div className="content absolute inset-0 flex items-end">
              <div className="w-full flex justify-start ">
                <div className="bg-black/70 text-white p-2 ">
                  <h1 className="text-2xl md:text-5xl font-semibold">{project.title}</h1>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
      

      <main className="content px-4 sm:px-6 md:px-12 lg:px-20 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <section className="mb-6">
              <h2 className="text-xl font-semibold">Summary</h2>
              <p className="text-gray-600 mt-2">{project.short}</p>
            </section>

            <section className="mb-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Features</h2>
                {project.features && project.features.length > 0 && (
                  <button
                    type="button"
                    aria-expanded={featuresOpen}
                    aria-controls="features-list"
                    onClick={() => setFeaturesOpen((s) => !s)}
                    className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-picto-primary"
                  >
                    <span>{project.features.length} items</span>
                    <FontAwesomeIcon icon={featuresOpen ? faChevronUp : faChevronDown} />
                  </button>
                )}
              </div>

              {featuresOpen && project.features && project.features.length > 0 && (
                <div id="features-list" className="mt-3 flex flex-col gap-2">
                  {project.features.map((f, i) => (
                    <div key={i} className="py-1 flex items-start gap-3">
                      <span className="text-picto-primary flex-shrink-0 mt-0.5">
                        <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm text-gray-700"><span className="font-semibold">{f.name}</span> - <span className="text-gray-600">{f.description}</span></p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold">Concepts used</h2>
              {project.conceptsUsed && project.conceptsUsed.length > 0 ? (
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.conceptsUsed.map((c, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 bg-gray-100 border rounded-full">{c}</span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 mt-2">No architectural concepts listed.</p>
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
            <div className="sticky top-28 bg-white border rounded-lg p-4 shadow-sm">
              {/* Role removed as requested */}

              <div className="mt-4">
                <p className="text-sm text-gray-500">Languages & frameworks</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tools.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded">{t}</span>
                  ))}
                </div>
                {project.otherServices && project.otherServices.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">Other services</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.otherServices.map((s) => (
                        <span key={s} className="text-xs px-2 py-1 bg-gray-50 border rounded">{s}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-semibold">{project.duration}</p>
              </div>

              <div className="mt-6 flex gap-2">
                {project.links && project.links.live && project.links.live !== "#!" && (
                  <a href={project.links.live} className="btn btn-primary" target="_blank" rel="noreferrer">Live</a>
                )}
                {project.links && project.links.repo && (
                  <a href={project.links.repo} className="btn" target="_blank" rel="noreferrer">Repo</a>
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
