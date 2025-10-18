import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faLinkedin, link: "https://www.linkedin.com/", title: "LinkedIn" },
  { icon: faGithub, link: "https://github.com/", title: "GitHub" },
  { icon: faEnvelope, link: "mailto:gihan@example.com", title: "Email" },
  { icon: faPhone, link: "tel:+947XXXXXXXX", title: "Phone" },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      title={item.title}
      aria-label={item.title}
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;
