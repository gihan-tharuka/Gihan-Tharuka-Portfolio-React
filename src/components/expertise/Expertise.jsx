import { useEffect, useRef, useState } from "react";
import skills from "../../data/skills";

const SkillCard = ({ skill, animate }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-gray-300 p-6 hover:shadow-2xl transition-all">
      <div className="flex items-center gap-4">
        <div
          className="h-12 w-12 rounded-full flex items-center justify-center"
          style={{ backgroundColor: skill.color }}
        >
          <span className="text-white font-bold">{skill.name[0]}</span>
        </div>
        <div>
          <p className="font-semibold text-lg">{skill.name}</p>
          <p className="text-xs text-gray-400">{skill.type} · {skill.years} yrs</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="h-2 w-full bg-[#F3F3F3] rounded-full overflow-hidden">
          <div
            className="h-full bg-picto-primary rounded-full"
            style={{ width: animate ? `${skill.level}%` : `0%`, transition: 'width 1200ms ease' }}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={skill.level}
            aria-label={`${skill.name} proficiency`}
          ></div>
        </div>
        <div className="mt-2 text-xs text-gray-500">{skill.level}%</div>
      </div>
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
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Languages, frameworks and tools I use regularly. Proficiency indicated by percentage and years of experience.</p>
      </div>

      <div ref={ref} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <SkillCard key={s.id} skill={s} animate={animate} />
        ))}
      </div>
    </section>
  );
};

export default Expertise;
