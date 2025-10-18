import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  return (
    <div className="max-w-106 rounded-lg outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200">
      <div className="h-48 overflow-hidden bg-gray-50">
        <img className="w-full h-full object-cover" src={data?.image} alt={`${data?.title} image`} />
      </div>
      <div className="p-4 xs:p-8">
        {/* render all skill badges if present */}
        {data?.skills && data.skills.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {data.skills.map((s, i) => (
              <span
                key={i}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full border border-gray-200"
                title={s}
              >
                {s}
              </span>
            ))}
          </div>
        )}
        <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
          {data?.title}
        </p>
        <p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className="text-gray-600 text-xs xxs:text-[14px] text-wrap"
        >
          {data?.description}
        </p>
        <a
          href={data?.link}
          className="btn hover:border-picto-primary hover:text-picto-primary bg-white text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 mt-5 xs:py-5.75 px-6 max-sm:w-full"
        >
          Project Details
          <span className="ms-1 xs:ms-3">
            <FontAwesomeIcon icon={faArrowRight} size="l" className="" />
          </span>
        </a>
        {/* </p> */}
      </div>
    </div>
  );
};

export default Projects;
