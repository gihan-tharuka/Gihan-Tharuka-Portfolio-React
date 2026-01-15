import { useEffect, useRef, useState } from "react";
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact.css";

const contacts = [
  {
    id: 1,
    label: "Email",
    value: "gihantharuka2499@gmail.com",
    href: "mailto:gihantharuka2499@gmail.com",
    icon: faEnvelope,
    color: "#FF6B35",
    description: "Send me an email anytime"
  },
  {
    id: 2,
    label: "GitHub",
    value: "github.com/gihan-tharuka",
    href: "https://github.com/gihan-tharuka",
    icon: faGithub,
    color: "#333333",
    description: "Check out my code"
  },
  {
    id: 3,
    label: "LinkedIn",
    value: "linkedin.com/in/gihan-tharuka",
    href: "https://www.linkedin.com/in/gihan-tharuka-7b592b296",
    icon: faLinkedin,
    color: "#0077B5",
    description: "Connect professionally"
  },
  {
    id: 4,
    label: "Phone",
    value: "+94 72 270 1880",
    href: "tel:+94722701880",
    icon: faPhone,
    color: "#10B981",
    description: "Call or text me"
  },
];

const ContactCard = ({ contact, animate, delay }) => {
  return (
    <a
      href={contact.href}
      target="_blank"
      rel="noreferrer"
      className={`group relative bg-white/80 backdrop-blur-sm hover:bg-white rounded-2xl p-6 hover:shadow-2xl hover:shadow-picto-primary/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 hover:border-picto-primary/20 overflow-hidden ${
        animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: animate ? `${delay}ms` : '0ms'
      }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-picto-primary/5 via-transparent to-orange-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-picto-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
      <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-orange-300/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>

      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-4">
          {/* Icon container */}
          <div className="relative flex-shrink-0">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
              style={{ backgroundColor: contact.color }}
            >
              <FontAwesomeIcon
                icon={contact.icon}
                className="text-white text-xl"
              />
            </div>
            {/* Glow effect */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-lg"
              style={{ backgroundColor: contact.color }}
            ></div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-picto-primary transition-colors duration-300 mb-1">
              {contact.label}
            </h3>
            <p className="text-sm text-gray-600 mb-2 leading-relaxed">
              {contact.description}
            </p>
            <p className="text-sm font-mono text-gray-500 break-words group-hover:text-gray-700 transition-colors duration-300">
              {contact.value}
            </p>
          </div>
        </div>

        {/* Action indicator */}
        <div className="flex justify-end">
          <div className="flex items-center gap-2 text-picto-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <span className="text-sm font-medium">Connect</span>
            <FontAwesomeIcon icon={faPaperPlane} className="text-sm" />
          </div>
        </div>
      </div>
    </a>
  );
};

const Contact = () => {
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
    <section ref={ref} className="relative py-20 md:py-12 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black" id="contact">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-picto-primary/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-300/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-picto-primary/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-orange-200/12 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>

        {/* Geometric patterns */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-picto-primary/30 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-orange-300/40 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-picto-primary/20 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-orange-400/25 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Animated badge */}
          <div className={`inline-block mb-6 transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium">
              <FontAwesomeIcon icon={faPaperPlane} className="text-picto-primary" />
              Let's Connect
            </span>
          </div>

          {/* Main heading */}
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight transition-all duration-700 delay-200 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Get In Touch
            </span>
            <br />
            <span className="bg-gradient-to-r from-picto-primary via-orange-400 to-picto-primary bg-clip-text text-transparent">
              Let's Build Something
            </span>
          </h2>

          {/* Description */}
          <p className={`text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-400 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            I'm always excited to discuss new opportunities, creative projects, or just have a friendly chat about technology and innovation.
            Don't hesitate to reach out through any of the channels below.
          </p>
        </div>

        {/* Contact cards grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-600 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {contacts.map((contact, index) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              animate={animate}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Additional CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-picto-primary" />
            <span className="text-white/80 font-medium">Based in Colombo, Sri Lanka</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
