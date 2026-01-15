import { useEffect, useRef, useState } from "react";
import { faArrowRight, faRocket, faLightbulb, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkTogether = () => {
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
    <section ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-picto-primary/10 via-transparent to-orange-200/10"></div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-picto-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-300/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-picto-primary/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-orange-200/12 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>

        {/* Geometric patterns */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-picto-primary/30 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-orange-300/40 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-picto-primary/20 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-orange-400/25 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Animated badge */}
          <div className={`inline-block mb-8 transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium">
              <FontAwesomeIcon icon={faRocket} className="text-picto-primary" />
              Ready to Build Something Amazing?
            </span>
          </div>

          {/* Main heading with gradient text */}
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight transition-all duration-700 delay-200 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Let's Create
            </span>
            <br />
            <span className="bg-gradient-to-r from-picto-primary via-orange-400 to-picto-primary bg-clip-text text-transparent animate-gradient">
              Something Extraordinary
            </span>
          </h2>

          {/* Description with enhanced styling */}
          <p className={`text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-400 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            I'm passionate about bringing innovative ideas to life. Whether you have a groundbreaking project
            or need technical expertise, let's collaborate and turn your vision into reality.
          </p>

          {/* Feature highlights */}
          <div className={`flex flex-wrap justify-center gap-6 mb-12 transition-all duration-700 delay-600 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 hover:bg-white/10 transition-all duration-300">
              <FontAwesomeIcon icon={faLightbulb} className="text-picto-primary text-xl" />
              <span className="text-white/90 font-medium">Innovation</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 hover:bg-white/10 transition-all duration-300">
              <FontAwesomeIcon icon={faRocket} className="text-orange-400 text-xl" />
              <span className="text-white/90 font-medium">Speed</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 hover:bg-white/10 transition-all duration-300">
              <FontAwesomeIcon icon={faHandshake} className="text-picto-primary text-xl" />
              <span className="text-white/90 font-medium">Collaboration</span>
            </div>
          </div>

          {/* Enhanced CTA buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-800 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-picto-primary to-orange-400 hover:from-orange-400 hover:to-picto-primary text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl shadow-picto-primary/25 hover:shadow-3xl hover:shadow-picto-primary/40 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Start a Conversation</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-full group-hover:translate-x-0"></div>
            </a>

            <a
              href="#portfolio"
              className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 text-white font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <span>View My Work</span>
              <FontAwesomeIcon icon={faArrowRight} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className={`flex justify-center mt-16 transition-all duration-1000 delay-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-8 text-white/60">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            <span className="text-sm font-medium">Let's build the future together</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
