import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact.css";

const contacts = [
  {
    id: 1,
    label: "Email",
    value: "gihan@example.com",
    href: "mailto:gihan@example.com",
    icon: faEnvelope,
  },
  {
    id: 2,
    label: "GitHub",
    value: "github.com/gihan-tharuka",
    href: "https://github.com/gihan-tharuka",
    icon: faGithub,
  },
  {
    id: 3,
    label: "LinkedIn",
    value: "linkedin.com/in/gihan-tharuka",
    href: "https://www.linkedin.com/",
    icon: faLinkedin,
  },
  {
    id: 4,
    label: "Mobile",
    value: "+94 7XX XXX XXX",
    href: "tel:+947XXXXXXXX",
    icon: faPhone,
  },
];

const Contact = () => {
  return (
    <div className="content px-4 sm:px-6 md:px-12 lg:px-20 py-12" id="contact">
      <div className="max-w-5xl mx-auto text-center">
        <p className="section-title">Contact</p>
        <p className="text-xs sm:text-lg font-normal text-gray-400 mt-4 mb-6">
          Feel free to reach out — I'm open for new opportunities and collaborations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {contacts.map((c) => (
            <a
              key={c.id}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="contact-card rounded-lg p-4 flex flex-col items-start transition-transform transition-colors duration-150"
            >
              <div className="flex items-center gap-3">
                <span className="icon-wrapper text-picto-primary">
                  <FontAwesomeIcon icon={c.icon} className="text-2xl" />
                </span>
                <div className="text-left">
                  <p className="text-sm text-gray-300 font-semibold">{c.label}</p>
                  <p className="text-xs text-gray-400 mt-1 break-words">{c.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
