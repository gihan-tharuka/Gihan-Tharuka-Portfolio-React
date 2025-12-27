import person from "../../assets/images/cv/gihan.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import pdf from "../../data/Gihan-Tharuka-Resume.pdf";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -mt-14 lg:-mt-20 z-10 rounded-2xl drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4 introduction-profile-background`}
      id="profile"
    >
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
        {/* Profile image */}
        <div className="w-full md:w-auto md:max-w-[26rem] h-auto xxl:max-h-126 group">
          <div className="w-full h-auto object-fill overflow-hidden rounded-xl shadow-2xl shadow-gray-200/50 hover:shadow-3xl hover:shadow-gray-300/70 transition-all duration-500 group-hover:scale-[1.02] border-4 border-white/80 hover:border-picto-primary/30">
            <img
              className="w-full h-auto bg-soft-white object-cover transition-transform duration-500 group-hover:scale-105"
              src={person}
              alt="Gihan Tharuka profile"
            />
          </div>
          {/* Social media section */}
          <div className="relative bottom-9 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white/95 backdrop-blur-sm rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white border border-gray-100/50 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-300">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

  <div className="w-full md:w-[33rem] animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-picto-primary/10 text-picto-primary font-medium text-sm rounded-full mb-4 border border-picto-primary/20">
              Full Stack Developer
            </span>
          </div>
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] text-[min(24px,48px)] max-md:text-center font-bold mb-6 leading-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent`}
          >
            Crafting Digital
            <span className="block text-picto-primary">Experiences</span>
          </h2>
          <div
            className={`text-sm xs:text-base lg:text-lg font-normal max-md:text-center text-gray-600 leading-relaxed space-y-4`}
          >
            <p className="animate-slide-up animation-delay-200">
              I build reliable, scalable full-stack applications, crafting clean APIs,
              efficient backends, and polished user interfaces that deliver exceptional
              user experiences.
            </p>
            <p className="animate-slide-up animation-delay-400">
              My expertise spans server-side development, databases, cloud services, and
              frontend engineering. I prioritize clean architecture, automated testing, and
              continuous delivery to maintain high quality while moving fast.
            </p>
          </div>
          <div className="mt-10 flex max-md:justify-center gap-4 animate-slide-up animation-delay-600">
            <a
              className="group relative btn xxs:btn-lg px-8 py-4 btn-primary text-sm xxs:text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              href="#portfolio"
            >
              <span className="relative z-10">My Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-picto-primary to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              className="group btn xxs:btn-lg px-8 py-4 bg-white border-2 border-gray-200 hover:border-picto-primary text-gray-700 hover:text-picto-primary text-sm xxs:text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              href={pdf}
              download="Gihan-Tharuka-Resume.pdf"
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2 group-hover:animate-bounce" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
