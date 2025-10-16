import ProjectCard from "../components/portfolio/Projects";
import projects from "../data/projects";

const Projects = () => {
  return (
    <div className="content px-4 sm:px-6 md:px-12 lg:px-20 py-12" id="projects">
      <div className="text-center mb-8">
        <p className="section-title">Projects</p>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">A selection of projects — click any card to view the case study.</p>
      </div>

      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projects.map((p) => {
            const rawImage = p.gallery?.[0] || p.heroImage;
            let image = rawImage;
            try {
              // If path begins with /src (repo-relative), convert to a relative path
              // that `new URL(..., import.meta.url)` can resolve from this module.
              if (rawImage && rawImage.startsWith("/src/")) {
                const relative = rawImage.replace(/^\/src\//, "../");
                image = new URL(relative, import.meta.url).href;
              } else if (rawImage && rawImage.includes("/assets/")) {
                // For any asset-looking path that doesn't start with /src, try resolving by
                // stripping a leading slash so it's relative to the module.
                const stripped = rawImage.replace(/^\//, "");
                image = new URL(stripped, import.meta.url).href;
              }
            } catch (err) {
              // fallback to rawImage if resolution fails
              image = rawImage;
            }
            const repoBase = import.meta.env.VITE_REPO_NAME ? `/${import.meta.env.VITE_REPO_NAME}` : (import.meta.env.BASE_URL || '');
            return (
              <ProjectCard
                key={p.id}
                data={{
                  image,
                  category: p.skills?.[0] || "Project",
                  title: p.title,
                  description: p.short,
                  link: `${repoBase}/projects/${p.slug}`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
