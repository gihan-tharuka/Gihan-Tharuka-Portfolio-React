import { useEffect, useRef, useState } from "react";
import { faEnvelope, faHeart, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* Footer navLinks */
const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "Portfolio", url: "portfolio" },
  { id: 3, name: "Expertise", url: "expertise" },
  { id: 4, name: "Services", url: "services" },
  { id: 5, name: "Contact", url: "contact" },
];

const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    icon: faGithub,
    url: "https://github.com/gihan-tharuka",
    color: "#333333"
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/gihan-tharuka-7b592b296",
    color: "#0077B5"
  },
  {
    id: 3,
    name: "Email",
    icon: faEnvelope,
    url: "mailto:gihantharuka2499@gmail.com",
    color: "#FF6B35"
  },
];

const copyrightYear = new Date().getFullYear();

const Footer = () => {
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
      { threshold: 0.1 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={ref} className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-picto-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-orange-300/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-picto-primary/30 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-orange-400/20 rounded-full"></div>
      </div>

      <div className="relative z-10 pt-20 pb-12 content max-2xl:px-3">
        <div className="max-w-7xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand section */}
            <div className={`space-y-6 transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a href="#" className="group flex items-center border-0">
                <div className="relative flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-picto-primary to-orange-400 text-white font-bold text-xl sm:text-3xl shadow-lg shadow-picto-primary/30 group-hover:shadow-xl group-hover:shadow-picto-primary/40 transition-all duration-300 group-hover:scale-105">
                  G
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400 to-picto-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="ml-4">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent group-hover:from-picto-primary group-hover:via-orange-500 group-hover:to-picto-primary transition-all duration-300">
                    Gihan Tharuka
                  </p>
                  <div className="h-0.5 w-0 bg-gradient-to-r from-picto-primary to-orange-400 group-hover:w-full transition-all duration-500 ease-out"></div>
                </div>
              </a>

              <p className="text-gray-400 leading-relaxed max-w-sm">
                Full Stack Developer passionate about creating innovative solutions
                and bringing ideas to life through clean, efficient code.
              </p>

              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{
                      backgroundColor: social.color + '20',
                      border: `1px solid ${social.color}40`
                    }}
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="text-white group-hover:scale-110 transition-transform duration-300"
                    />
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"
                      style={{ backgroundColor: social.color }}
                    ></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation section */}
            <div className={`space-y-6 transition-all duration-700 delay-200 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
              <div className="grid grid-cols-2 gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    className="group relative text-gray-400 hover:text-white transition-colors duration-300"
                    href={`#${item.url.toLowerCase()}`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-picto-primary group-hover:w-full transition-all duration-300 ease-out"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact & CTA section */}
            <div className={`space-y-6 transition-all duration-700 delay-400 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-xl font-bold text-white">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed">
                Ready to bring your ideas to life? Let's discuss your next project.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-picto-primary to-orange-400 hover:from-orange-400 hover:to-picto-primary text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-picto-primary/25 hover:shadow-xl hover:shadow-picto-primary/40 transform hover:scale-105 transition-all duration-300"
                >
                  <span>Get In Touch</span>
                  <FontAwesomeIcon icon={faEnvelope} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <button
                  onClick={scrollToTop}
                  className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Back to Top</span>
                  <FontAwesomeIcon icon={faArrowUp} className="transition-transform duration-300 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className={`border-t border-gray-800 pt-8 transition-all duration-700 delay-600 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                Copyright &copy; {copyrightYear} Gihan Tharuka. All rights reserved.
              </p>

              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Made with</span>
                <FontAwesomeIcon icon={faHeart} className="text-red-500 animate-pulse" />
                <span>by Gihan Tharuka</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
