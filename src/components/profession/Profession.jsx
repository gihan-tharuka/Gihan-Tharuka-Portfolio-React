import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Back end development",
    description:
      "I build and maintain server-side logic, databases, and APIs to power applications — focusing on performance, security, and scalability.",
  },
  {
    id: 2,
    title: "Front end development",
    description:
      "I implement responsive, accessible, and high-performance user interfaces using modern frameworks and best practices.",
  },
  {
    id: 3,
    title: "Deployment",
    description:
      "I deploy applications reliably to production using CI/CD, cloud platforms, and automated build pipelines to ensure fast and safe releases.",
  },
];

const Profession = () => {
  return (
    <div
      className="content px-4 sm:px-6 md:px-12 lg:px-20 grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto px-0 md:px-0">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in designing user experiences, crafting engaging
            interfaces, and building robust web applications that deliver value
            and usability.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines creativity and technical expertise to deliver
            solutions that are both visually appealing and highly functional for
            users.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
