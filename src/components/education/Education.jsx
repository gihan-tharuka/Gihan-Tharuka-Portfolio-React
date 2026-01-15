import { useEffect, useRef, useState } from "react";
import education from "../../data/education";
import { faGraduationCap, faCertificate, faAward, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getEducationIcon = (degree) => {
  if (degree.includes("BEng") || degree.includes("Bachelor")) return faGraduationCap;
  if (degree.includes("Certificate")) return faCertificate;
  if (degree.includes("GCE")) return faAward;
  return faBookOpen;
};

const getEducationColor = (degree) => {
  if (degree.includes("BEng") || degree.includes("Bachelor")) return "#FF6B35";
  if (degree.includes("Certificate")) return "#10B981";
  if (degree.includes("GCE")) return "#007ACC";
  return "#8B5CF6";
};

const EducationCard = ({ education: edu, animate, delay }) => {
  const icon = getEducationIcon(edu.degree);
  const color = getEducationColor(edu.degree);

  return (
    <div className={`group relative transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
      transitionDelay: animate ? `${delay}ms` : '0ms'
    }}>
      <div className="flex items-start md:items-center">
        {/* Timeline dot with icon */}
        <div className="flex-shrink-0 z-10 ml-4 md:ml-0">
          <div
            className="relative h-12 w-12 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border-4 border-white"
            style={{ backgroundColor: color }}
          >
            <FontAwesomeIcon
              icon={icon}
              className="text-white text-lg"
            />
            {/* Pulsing ring */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg"
              style={{ backgroundColor: color }}
            ></div>
          </div>
        </div>

        {/* Card content */}
        <div className="ml-6 flex-1">
          <div className="relative bg-white/80 backdrop-blur-sm hover:bg-white rounded-2xl p-6 hover:shadow-2xl hover:shadow-picto-primary/10 transition-all duration-500 transform hover:-translate-y-1 border border-gray-100/50 hover:border-picto-primary/20 overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-picto-primary/5 via-transparent to-orange-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: color }}
                    ></div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-picto-primary transition-colors duration-300">
                      {edu.institution}
                    </h3>
                  </div>

                  <h4 className="text-base font-semibold text-gray-700 mb-2 leading-tight">
                    {edu.degree}
                  </h4>

                  {edu.details && (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>

                <div className="flex-shrink-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-picto-primary/10 text-picto-primary font-semibold text-sm rounded-full border border-picto-primary/20">
                    <FontAwesomeIcon icon={faBookOpen} className="text-xs" />
                    {edu.period}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
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
    <section ref={ref} className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50" id="education">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-picto-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-orange-300/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-picto-primary/30 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-orange-400/20 rounded-full"></div>
        <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-picto-primary/50 rounded-full"></div>
      </div>

      <div className="relative z-10 content px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Header section */}
          <div className={`text-center mb-16 transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-picto-primary/10 text-picto-primary font-semibold text-sm rounded-full border border-picto-primary/20">
                <FontAwesomeIcon icon={faGraduationCap} />
                Academic Journey
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Education &
              </span>
              <br />
              <span className="bg-gradient-to-r from-picto-primary via-orange-500 to-picto-primary bg-clip-text text-transparent">
                Qualifications
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              My academic foundation and continuous learning journey that have shaped my expertise
              in software engineering and technology.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-picto-primary via-orange-400 to-picto-primary opacity-30"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <EducationCard
                  key={edu.id}
                  education={edu}
                  animate={animate}
                  delay={index * 200}
                />
              ))}
            </div>
          </div>

          {/* Bottom decorative element */}
          <div className={`flex justify-center mt-16 transition-all duration-1000 delay-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-4 px-6 py-3 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl">
              <FontAwesomeIcon icon={faGraduationCap} className="text-picto-primary" />
              <span className="text-gray-600 font-medium">Continuous Learning Journey</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
