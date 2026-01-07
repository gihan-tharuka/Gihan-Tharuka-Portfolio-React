import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="relative">
      {/* About Me Header */}
      <div className="introduction-profile-background">
        <div className="content px-4 sm:px-6 md:px-12 lg:px-20 py-16">
          <h1 className="section-title text-center mb-12">About Me</h1>
        </div>
      </div>

      {/* Hi, I'm Gihan */}
      <div className="bg-soft-white">
        <div className="content px-4 sm:px-6 md:px-12 lg:px-20 py-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Hi, I'm Gihan 👋</h2>
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
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">My Journey</h2>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            I completed my Software Engineering degree in <strong>September 2025</strong>. Instead of immediately rushing into the job market, I spent time building real products, working with clients, and understanding what kind of engineer—and life—I want to build.
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            During my degree and after graduation, I deliberately chose hands-on experience over theory alone. I worked in Agile team environments, co-founded and built SaaS products, and delivered systems for real businesses, both locally and internationally. These experiences shaped my mindset from *"writing code"* to *"solving business problems with software."*
          </p>
        </div>
      </div>

      {/* Working in Agile & Cross-Functional Teams */}
      <div className="bg-soft-white">
        <div className="content px-4 sm:px-6 md:px-12 lg:px-20 py-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Working in Agile & Cross-Functional Teams</h2>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            During my coursework, I worked in a <strong>Scrum-based Agile environment</strong> on a university student portal project delivered across multiple sprints. What made this experience unique was rotating through different responsibilities within the same project.
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            I gained practical exposure to:
          </p>
          <ul className="list-disc list-inside text-base md:text-lg text-gray-600 mb-6 ml-6">
            <li>Requirements gathering and stakeholder communication</li>
            <li>User stories, acceptance criteria, and documentation</li>
            <li>Sprint planning, reviews, retrospectives, and daily stand-ups</li>
            <li>Collaboration between development, QA, and business roles</li>
          </ul>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            This helped me understand not only *how* software is built, but *why* communication, planning, and feedback loops are critical to successful delivery.
          </p>
        </div>
      </div>

      {/* SaaS, Business & Product Thinking */}
      <div className="introduction-profile-background">
        <div className="content px-4 sm:px-6 md:px-12 lg:px-20 py-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">SaaS, Business & Product Thinking</h2>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            While studying, I co-founded a small startup with a university colleague. We initially explored freelancing and later shifted our focus toward building scalable products.
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">FlexiFit – Fitness Center Management SaaS</h3>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            FlexiFit is a <strong>cloud-based fitness center management system</strong> designed to solve day-to-day operational challenges faced by gym owners and members. Through this project, I gained hands-on experience with:
          </p>
          <ul className="list-disc list-inside text-base md:text-lg text-gray-600 mb-6 ml-6">
            <li>Product ideation and market research</li>
            <li>Requirement analysis and backlog management</li>
            <li>Daily stand-ups and task planning</li>
            <li>Development, testing, and iterative improvement</li>
            <li>Pricing, positioning, and basic product marketing</li>
          </ul>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            This project introduced me to thinking beyond features—considering usability, scalability, and long-term maintainability.
          </p>
        </div>
      </div>

      {/* Full Ownership: From Idea to Deployment */}
      <div className="bg-soft-white">
        <div className="content px-4 sm:px-6 md:px-12 lg:px-20 py-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Full Ownership: From Idea to Deployment</h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">AutoMate – Automobile Service Center Management System</h3>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            AutoMate is a <strong>cloud-based automobile service center management system</strong> developed for a newly opened service center. Unlike FlexiFit, this project was <strong>designed, built, and deployed entirely by me</strong>.
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            I handled:
          </p>
          <ul className="list-disc list-inside text-base md:text-lg text-gray-600 mb-6 ml-6">
            <li>Direct requirement gathering from the business owner</li>
            <li>System design and architecture decisions</li>
            <li>Backend and frontend development</li>
            <li>Testing, bug fixing, and performance considerations</li>
            <li>Deployment and hosting setup</li>
          </ul>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            I intentionally rebuilt this system from scratch using the <strong>latest Laravel and Filament stack</strong>, without reusing previous code, to strengthen my understanding of the full lifecycle. After evaluating multiple deployment options, I chose <strong>Railway</strong> for its Laravel-friendly setup, cost efficiency, and scalability.
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            The product is currently evolving based on feedback from additional automobile service centers.
          </p>
        </div>
      </div>

      {/* Working with International Clients */}
      <div className="introduction-profile-background">
        <div className="content px-4 sm:px-6 md:px-12 lg:px-20 py-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Working with International Clients (Remote Experience)</h2>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            I've also worked with <strong>international clients</strong>, including delivering a portfolio website for a photography and videography business based in <strong>Japan</strong>.
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Despite the time zone difference, I ensured smooth collaboration through:
          </p>
          <ul className="list-disc list-inside text-base md:text-lg text-gray-600 mb-6 ml-6">
            <li>Clear milestone-based delivery</li>
            <li>Asynchronous communication</li>
            <li>Regular updates and feedback loops</li>
          </ul>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            This experience strengthened my ability to communicate clearly, manage expectations, and deliver quality work in remote settings.
          </p>
        </div>
      </div>

      {/* How I Work */}
      <div className="bg-soft-white">
        <div className="content px-4 sm:px-6 md:px-12 lg:px-20 py-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">How I Work</h2>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            These principles guide how I approach my work:
          </p>
          <ul className="list-disc list-inside text-base md:text-lg text-gray-600 mb-6 ml-6">
            <li><strong>Ownership:</strong> I take responsibility from idea to delivery</li>
            <li><strong>Clarity:</strong> I prefer clear requirements, documentation, and communication</li>
            <li><strong>Continuous Learning:</strong> I actively improve my skills through real projects</li>
            <li><strong>Practical Engineering:</strong> I focus on solutions that are maintainable and scalable</li>
            <li><strong>Calm & Consistent Execution:</strong> I value steady progress over rushed output</li>
          </ul>
        </div>
      </div>

      {/* Let's Connect */}
      <div className="introduction-profile-background">
        <div className="content px-4 sm:px-6 md:px-12 lg:px-20 py-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Let's Connect</h2>
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
