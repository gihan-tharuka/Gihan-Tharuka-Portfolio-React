import person from "../../assets/images/cv/gihan.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import pdf from "../../data/Gihan-Tharuka-Resume.pdf";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -mt-14 lg:-mt-20 z-10 rounded-2xl drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Profile image */}
        <div className="w-full md:w-auto md:max-w-[26rem] h-auto xxl:max-h-126">
          <div className="w-full h-auto object-fill overflow-hidden rounded-xl">
            <img
              className="w-full h-auto bg-soft-white object-cover"
              src={person}
              alt="Gihan Tharuka profile"
            />
          </div>
          {/* Social media section */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

  <div className="w-full md:w-[33rem]">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
          >
            I am a Full Stack Developer
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
          >
            <p className={``}>
              I build reliable, scalable full-stack applications
              crafting clean APIs, efficient backends, and polished user
              interfaces. I focus on delivering reliable systems that solve
              real problems and provide great user experiences.
            </p>
            <p className="mt-3">
              My stack spans server-side development, databases, and frontend
              engineering. I value clean architecture, security, and
              performance to move fast without sacrificing quality.
            </p>
          </div>
          <div className="mt-8 flex max-md:justify-center">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="#portfolio"
            >
              My Projects
            </a>
            <a
              className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary  ms-4 text-xs xxs:text-[14px] sm:text-[16px]`}
              href={pdf}
              download="Gihan-Tharuka-Resume.pdf"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
