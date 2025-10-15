import { useParams, Link } from "react-router-dom";
import projects from "../../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="content px-4 sm:px-6 md:px-12 lg:px-20 py-12">
        <p>Project not found.</p>
      </div>
    );
  }

  return (
    <div>
      <div
        className="relative h-[40vh] md:h-[55vh] lg:h-[65vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${project.heroImage})` }}
        aria-hidden={false}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="content absolute inset-0 flex items-end pb-8">
          <div className="text-white">
            <h1 className="text-3xl md:text-5xl font-semibold">{project.title}</h1>
            <p className="mt-2 text-gray-100">{project.short}</p>
          </div>
        </div>
      </div>

      <main className="content px-4 sm:px-6 md:px-12 lg:px-20 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <section className="mb-6">
              <h2 className="text-xl font-semibold">Summary</h2>
              <p className="text-gray-600 mt-2">{project.short}</p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold">Features</h2>
              {project.features && project.features.length > 0 ? (
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 mt-2">No features listed for this project.</p>
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

            <section>
              <h2 className="text-xl font-semibold mb-4">Gallery</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.gallery.map((g, i) => (
                  <img key={i} src={g} alt={`${project.title} gallery ${i + 1}`} className="w-full object-cover rounded" loading="lazy" />
                ))}
              </div>
            </section>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-28 bg-white border rounded-lg p-4 shadow-sm">
              <p className="text-sm text-gray-500">Role</p>
              <p className="font-semibold">{project.role}</p>

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
                <a href={project.links.live} className="btn btn-primary" target="_blank" rel="noreferrer">Live</a>
                <a href={project.links.repo} className="btn" target="_blank" rel="noreferrer">Repo</a>
              </div>

              <div className="mt-6">
                <Link to="/" className="text-sm text-picto-primary">Back to projects</Link>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
