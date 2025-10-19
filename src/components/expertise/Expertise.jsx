import { useEffect, useRef, useState } from "react";
import skills from "../../data/skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPalette,
  faCubes,
  faMobileAlt,
  faFeather,
  faWrench,
  faServer,
  faDatabase,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import { faJs, faReact, faPython, faPhp, faHtml5, faCss3, faAws } from "@fortawesome/free-brands-svg-icons";

const iconMap = {
  code: faCode,
  palette: faPalette,
  cubes: faCubes,
  mobile: faMobileAlt,
  feather: faFeather,
  wrench: faWrench,
  server: faServer,
  database: faDatabase,
  cloud: faCloud,
  // brand icons
  js: faJs,
  react: faReact,
  python: faPython,
  php: faPhp,
  html5: faHtml5,
  css3: faCss3,
  aws: faAws,
};

const SkillCard = ({ skill, animate }) => {
  return (
    <div className="bg-white rounded-lg p-3 hover:shadow-md transition-all expertise-card">
      <div className="flex items-center gap-3">
        <div
          className="h-9 w-9 rounded-full flex items-center justify-center"
          style={{ backgroundColor: skill.color }}
        >
          {/* render icon if available */}
          {skill.brandIcon ? (
            <FontAwesomeIcon icon={iconMap[skill.brandIcon]} className="text-white" />
          ) : skill.icon ? (
            <FontAwesomeIcon icon={iconMap[skill.icon]} className="text-white" />
          ) : (
            <span className="text-white font-bold text-sm">{skill.name[0]}</span>
          )}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-base">{skill.name}</p>
        </div>

        <div className="flex items-center gap-1" aria-label={`${skill.name} rating`}>
          {Array.from({ length: 5 }).map((_, i) => {
            const starIndex = i + 1;
            const filledStars = Math.max(0, Math.min(5, Math.round((skill.level || 0) / 20)));
            const filled = starIndex <= filledStars;
            return (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-3 h-3 ${filled ? 'text-picto-primary' : 'text-gray-300'} transition-colors`}
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.495 2.62c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.508 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
            );
          })}
        </div>
      </div>
      {/* Stars represent expertise level (1-5) calculated from numeric level */}
    </div>
  );
};

const Expertise = () => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="expertise" className="content px-4 sm:px-6 md:px-12 lg:px-20 py-12">
      <div className="text-center mb-8">
        <p className="section-title">Expertise</p>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Languages, frameworks and tools I use regularly. Proficiency shown as a 1–5 star rating.</p>
      </div>

      <div ref={ref} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <SkillCard key={s.id} skill={s} animate={animate} />
        ))}
      </div>
    </section>
  );
};

export default Expertise;
