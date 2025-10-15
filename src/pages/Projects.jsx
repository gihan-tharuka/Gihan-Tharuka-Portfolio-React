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
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              data={{
                image: p.gallery?.[0] || p.heroImage,
                category: p.skills?.[0] || "Project",
                title: p.title,
                description: p.short,
                link: `/projects/${p.slug}`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
