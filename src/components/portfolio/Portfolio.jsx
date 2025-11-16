import { useState } from "react";
import Projects from "./Projects";
import { Link } from "react-router-dom";
import projects from "../../data/projects";

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Filter tags in specific order
  const projectTypes = ["All", "Laravel", "AWS", "Java", "C#", "Python", "Flutter"];

  // Filter projects based on selected type
  const filteredProjects = selectedFilter === "All" ? projects : projects.filter((p) => p.filtertag === selectedFilter);

  return (
    <div
      className="content px-4 sm:px-6 md:px-12 lg:px-20 mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {projectTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedFilter(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedFilter === type
                ? "bg-picto-primary text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
            style={{ border: '1px solid #9CA3AF' }}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="mx-auto flex justify-center px-2 sm:px-4 md:px-0">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {filteredProjects
            .slice()
            .sort((a, b) => (a.order || 0) - (b.order || 0))
            .map((p) => {
              const rawImage = p.gallery?.[0] || p.heroImage;
              let image = rawImage;
              try {
                if (rawImage && rawImage.startsWith("/src/")) {
                  const relative = rawImage.replace(/^\/src\//, "../");
                  image = new URL(relative, import.meta.url).href;
                } else if (rawImage && (rawImage.startsWith("http") || rawImage.startsWith("/"))) {
                  image = rawImage;
                } else if (rawImage && rawImage.includes("/assets/")) {
                  const stripped = rawImage.replace(/^\//, "");
                  image = new URL(stripped, import.meta.url).href;
                }
              } catch (err) {
                image = rawImage;
              }

              const repoBase = import.meta.env.VITE_REPO_NAME ? `/${import.meta.env.VITE_REPO_NAME}` : (import.meta.env.BASE_URL || '');
              return (
                <Projects
                  key={p.id}
                  data={{
                    image,
                    skills: p.skills || [],
                    title: p.title,
                    description: p.short,
                    // use a router-relative path (client-side) — router's basename handles repo base
                    link: `/projects/${p.slug}`,
                  }}
                />
              );
            })}
        </div>
      </div>
      <div className="text-center">
        <Link
          to="/projects"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
