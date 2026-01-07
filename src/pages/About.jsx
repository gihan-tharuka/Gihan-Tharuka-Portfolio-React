import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faHand, faRocket, faUsers, faBuilding, faWrench, faGlobe, faCog, faHandshake, faCode, faLightbulb, faCheckCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import person from "../assets/images/cv/gihan.jpg";
import gymImage from "../assets/images/projects/gym.jpg";
import garageImage from "../assets/images/projects/garage.jpg";
import studentBlogImage from "../assets/images/projects/student blog.jpg";
import portfolioImage from "../assets/images/projects/portfolio.jpg";

const About = () => {
  return (
    <div className="relative">
      {/* Hero Section with Profile Image */}
      <div className="introduction-profile-background">
        <div className="content px-4 sm:px-6 md:px-12 lg:px-20 py-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={person}
                alt="Gihan Tharuka"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="section-title mb-4">About Me</h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
                Passionate Software Engineer & SaaS Builder
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Separator */}
      <div className="bg-gradient-to-r from-picto-primary to-orange-400 h-1"></div>

      {/* Hi, I'm Gihan */}
      <div className="bg-soft-white">
        <div className="content px-4 sm:px-6 md:px-12 lg:px-20 py-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 flex items-center gap-3">
            <FontAwesomeIcon icon={faHand} className="text-picto-primary" />
            Hi, I'm Gihan 👋
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            I'm a <strong>Software Engineer and SaaS builder</strong> who enjoys turning real-world problems into clean, reliable, and scalable software. I focus on <strong>end-to-end ownership</strong> — from understanding business needs to designing, building, and deploying production-ready applications.
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            I'm particularly interested in <strong>remote-first roles</strong>, product-driven teams, and environments where engineering decisions are closely aligned with real user impact.
          </p>
        </div>
      </div>

      {/* My Journey */}
      <div className="introduction-profile-background">
        <div className="content px-4 sm:px-6 md:px-12 lg:px-20 py-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 flex items-center gap-3 justify-center">
            <FontAwesomeIcon icon={faRocket} className="text-picto-primary" />
            My Journey
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-picto-primary h-full hidden md:block"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {/* Degree Completion */}
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-picto-primary">
                    <h3 className="text-xl font-semibold text-picto-primary mb-2">September 2025</h3>
                    <h4 className="text-lg font-medium mb-3">Degree Completion</h4>
                    <p className="text-gray-600">
                      Completed Software Engineering degree. Instead of rushing into the job market, I focused on building real products and gaining practical experience.
                    </p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-picto-primary rounded-full border-4 border-white shadow-lg mx-auto md:mx-0"></div>
                <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0"></div>
              </div>

              {/* Hands-on Experience */}
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-8 mt-4 md:mt-0"></div>
                <div className="w-4 h-4 bg-picto-primary rounded-full border-4 border-white shadow-lg mx-auto md:mx-0"></div>
                <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-picto-primary">
                    <h3 className="text-xl font-semibold text-picto-primary mb-2">2024 - Present</h3>
                    <h4 className="text-lg font-medium mb-3">Hands-on Experience & Growth</h4>
                    <p className="text-gray-600">
                      Worked in Agile teams, co-founded SaaS products, and delivered systems for real businesses locally and internationally. This shifted my mindset from "writing code" to "solving business problems with software."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Working in Agile & Cross-Functional Teams */}
      <div className="bg-soft-white">
        <div className="content px-4 sm:px-6 md:px-12 lg:px-20 py-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 flex items-center gap-3">
            <FontAwesomeIcon icon={faUsers} className="text-picto-primary" />
            Working in Agile & Cross-Functional Teams
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            During my coursework, I worked in a <strong>Scrum-based Agile environment</strong> on a university student portal project delivered across multiple sprints. What made this experience unique was rotating through different responsibilities within the same project.
          </p>

          {/* APIIT University Portal Project Card */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={studentBlogImage}
                  alt="APIIT University Portal"
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-2xl font-semibold mb-3 text-picto-primary">APIIT University Portal</h3>
                <p className="text-gray-600 mb-4">
                  A <strong>comprehensive student portal system</strong> developed in an Agile Scrum environment with rotating team responsibilities across multiple sprints.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faLightbulb} className="text-picto-primary" />
                    Key Achievements & Exposure
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm" />
                      <span className="text-sm">Requirements gathering and stakeholder communication</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm" />
                      <span className="text-sm">User stories, acceptance criteria, and documentation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm" />
                      <span className="text-sm">Sprint planning, reviews, retrospectives, and daily stand-ups</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm" />
                      <span className="text-sm">Collaboration between development, QA, and business roles</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm italic">
                  This experience taught me not only *how* software is built, but *why* communication, planning, and feedback loops are critical to successful delivery in cross-functional teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SaaS, Business & Product Thinking */}
      <div className="introduction-profile-background">
        <div className="content px-4 sm:px-6 md:px-12 lg:px-20 py-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 flex items-center gap-3">
            <FontAwesomeIcon icon={faBuilding} className="text-picto-primary" />
            SaaS, Business & Product Thinking
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            While studying, I co-founded a small startup with a university colleague. We initially explored freelancing and later shifted our focus toward building scalable products.
          </p>

          {/* FlexiFit Project Card */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={gymImage}
                  alt="FlexiFit - Fitness Center Management SaaS"
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-2xl font-semibold mb-3 text-picto-primary">FlexiFit – Fitness Center Management SaaS</h3>
                <p className="text-gray-600 mb-4">
                  A <strong>cloud-based fitness center management system</strong> designed to solve day-to-day operational challenges faced by gym owners and members.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faLightbulb} className="text-picto-primary" />
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm" />
                      <span className="text-sm">Product ideation and market research</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm" />
                      <span className="text-sm">Requirement analysis and backlog management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm" />
                      <span className="text-sm">Daily stand-ups and task planning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm" />
                      <span className="text-sm">Development, testing, and iterative improvement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm" />
                      <span className="text-sm">Pricing, positioning, and basic product marketing</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm italic">
                  This project introduced me to thinking beyond features—considering usability, scalability, and long-term maintainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Ownership: From Idea to Deployment */}
      <div className="bg-soft-white">
        <div className="content px-4 sm:px-6 md:px-12 lg:px-20 py-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 flex items-center gap-3">
            <FontAwesomeIcon icon={faWrench} className="text-picto-primary" />
            Full Ownership: From Idea to Deployment
          </h2>

          {/* AutoMate Project Card */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={garageImage}
                  alt="AutoMate - Automobile Service Center Management System"
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-2xl font-semibold mb-3 text-picto-primary">AutoMate – Automobile Service Center Management System</h3>
                <p className="text-gray-600 mb-4">
                  A <strong>cloud-based automobile service center management system</strong> developed for a newly opened service center. Unlike FlexiFit, this project was <strong>designed, built, and deployed entirely by me</strong>.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faCode} className="text-picto-primary" />
                    Tech Stack & Responsibilities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm" />
                      <span className="text-sm">Direct requirement gathering from the business owner</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm" />
                      <span className="text-sm">System design and architecture decisions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm" />
                      <span className="text-sm">Backend and frontend development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm" />
                      <span className="text-sm">Testing, bug fixing, and performance considerations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm" />
                      <span className="text-sm">Deployment and hosting setup</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Technology:</strong> Latest Laravel and Filament stack
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Deployment:</strong> Railway for cost efficiency and scalability
                  </p>
                  <p className="text-gray-600 text-sm italic">
                    The product is currently evolving based on feedback from additional automobile service centers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Working with International Clients */}
      <div className="introduction-profile-background">
        <div className="content px-4 sm:px-6 md:px-12 lg:px-20 py-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 flex items-center gap-3">
            <FontAwesomeIcon icon={faGlobe} className="text-picto-primary" />
            Working with International Clients
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            I've worked with <strong>international clients</strong>, delivering high-quality solutions despite geographical and timezone challenges.
          </p>

          {/* Hevinly Portfolio Website Project Card */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={portfolioImage}
                  alt="Hevinly Portfolio Website"
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-2xl font-semibold mb-3 text-picto-primary">Hevinly - Portfolio Website</h3>
                <p className="text-gray-600 mb-4">
                  A <strong>professional portfolio website</strong> developed for a photography and videography business based in <strong>Japan</strong>, showcasing their work with an elegant, responsive design.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faLightbulb} className="text-picto-primary" />
                    Remote Collaboration Achievements
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm" />
                      <span className="text-sm">Clear milestone-based delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm" />
                      <span className="text-sm">Asynchronous communication</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm" />
                      <span className="text-sm">Regular updates and feedback loops</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm" />
                      <span className="text-sm">Timezone difference management</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm italic">
                  This international project experience strengthened my ability to communicate clearly, manage expectations, and deliver quality work in remote settings across different cultures and timezones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How I Work */}
      <div className="bg-soft-white">
        <div className="content px-4 sm:px-6 md:px-12 lg:px-20 py-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 flex items-center gap-3">
            <FontAwesomeIcon icon={faCog} className="text-picto-primary" />
            How I Work
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            These principles guide how I approach my work:
          </p>

          {/* Principles Badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-picto-primary">
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon icon={faStar} className="text-picto-primary text-xl" />
                <h3 className="text-lg font-semibold text-picto-primary">Ownership</h3>
              </div>
              <p className="text-gray-600 text-sm">I take full responsibility from idea to delivery, ensuring end-to-end quality and accountability.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-picto-primary">
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon icon={faLightbulb} className="text-picto-primary text-xl" />
                <h3 className="text-lg font-semibold text-picto-primary">Clarity</h3>
              </div>
              <p className="text-gray-600 text-sm">I prefer clear requirements, comprehensive documentation, and transparent communication throughout the process.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-picto-primary">
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon icon={faRocket} className="text-picto-primary text-xl" />
                <h3 className="text-lg font-semibold text-picto-primary">Continuous Learning</h3>
              </div>
              <p className="text-gray-600 text-sm">I actively improve my skills through real projects, staying updated with the latest technologies and best practices.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-picto-primary">
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon icon={faCode} className="text-picto-primary text-xl" />
                <h3 className="text-lg font-semibold text-picto-primary">Practical Engineering</h3>
              </div>
              <p className="text-gray-600 text-sm">I focus on building maintainable and scalable solutions that stand the test of time.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-picto-primary md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon icon={faCheckCircle} className="text-picto-primary text-xl" />
                <h3 className="text-lg font-semibold text-picto-primary">Calm Execution</h3>
              </div>
              <p className="text-gray-600 text-sm">I value steady progress over rushed output, maintaining quality and reliability in all deliverables.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Let's Connect */}
      <div className="introduction-profile-background">
        <div className="content px-4 sm:px-6 md:px-12 lg:px-20 py-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 flex items-center gap-3">
            <FontAwesomeIcon icon={faHandshake} className="text-picto-primary" />
            Let's Connect
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            If you'd like to learn more about my work or discuss potential opportunities, feel free to explore my projects or reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="btn btn-lg px-6 py-3 btn-primary text-base"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
              Portfolio
            </a>
            <a
              href="https://github.com/gihan-tharuka"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg px-6 py-3 bg-gray-800 text-white hover:bg-gray-700 text-base"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gihan-tharuka-7b592b296"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg px-6 py-3 bg-blue-600 text-white hover:bg-blue-500 text-base"
            >
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
              LinkedIn
            </a>
          </div>
          <p className="text-base md:text-lg text-gray-600 mt-8 text-center">
            Thanks for taking the time to read my story.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
