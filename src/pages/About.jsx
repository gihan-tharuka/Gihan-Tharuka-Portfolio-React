import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faHand, faRocket, faUsers, faBuilding, faWrench, faGlobe, faCog, faHandshake, faCode, faLightbulb, faCheckCircle, faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
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
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  src={person}
                  alt="Gihan Tharuka"
                  className="w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover shadow-2xl border-4 border-white"
                />
                <div className="absolute -bottom-2 -right-2 bg-picto-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Full Stack Developer
                </div>
              </div>
            </div>

            {/* Introduction Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Explore<span className="text-picto-primary ml-4">My Journey</span>
              </h1>
             

              {/* Interactive Navigation Journey */}
              <div className="mt-8">
                

                {/* Journey Roadmap Layout */}
                <div className="relative mt-2">
                  {/* Connection Lines - Desktop */}
                  <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-picto-primary/30 via-picto-primary/50 to-picto-primary/30 -translate-y-1/2 z-0"></div>

                  {/* Journey Steps */}
                  <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2">
                    {/* Step 1: Agile Teams */}
                    <div className="flex flex-col items-center group">
                      <div className="w-3 h-3 bg-picto-primary rounded-full mb-2 hidden lg:block"></div>
                      <ScrollLink
                        to="agile-teams"
                        smooth={true}
                        duration={800}
                        offset={-100}
                        className="cursor-pointer transform transition-all duration-300 hover:scale-105"
                      >
                        <div className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-xl p-4 hover:border-picto-primary hover:shadow-xl transition-all duration-300 min-w-[160px] text-center">
                          <div className="w-12 h-12 bg-picto-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-picto-primary/20 transition-colors">
                            <FontAwesomeIcon icon={faUsers} className="text-picto-primary text-xl" />
                          </div>
                          <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-picto-primary transition-colors">Agile Teams</h4>
                          <p className="text-xs text-gray-600">Scrum & Collaboration</p>
                        </div>
                      </ScrollLink>
                      {/* Arrow for mobile */}
                      {/* <FontAwesomeIcon icon={faArrowRight} className="text-picto-primary/60 text-lg mt-2 lg:hidden rotate-90" /> */}
                    </div>

                    {/* Connecting Arrow - Desktop */}
                    {/* <FontAwesomeIcon icon={faArrowRight} className="text-picto-primary/60 text-xl hidden lg:block" /> */}

                    {/* Step 2: Product Thinking */}
                    <div className="flex flex-col items-center group">
                      <div className="w-3 h-3 bg-picto-primary rounded-full mb-2 hidden lg:block"></div>
                      <ScrollLink
                        to="product-thinking"
                        smooth={true}
                        duration={800}
                        offset={-100}
                        className="cursor-pointer transform transition-all duration-300 hover:scale-105"
                      >
                        <div className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-xl p-4 hover:border-picto-primary hover:shadow-xl transition-all duration-300 min-w-[160px] text-center">
                          <div className="w-12 h-12 bg-picto-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-picto-primary/20 transition-colors">
                            <FontAwesomeIcon icon={faBuilding} className="text-picto-primary text-xl" />
                          </div>
                          <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-picto-primary transition-colors">Product Thinking</h4>
                          <p className="text-xs text-gray-600">SaaS & Business</p>
                        </div>
                      </ScrollLink>
                      {/* Arrow for mobile */}
                      {/* <FontAwesomeIcon icon={faArrowRight} className="text-picto-primary/60 text-lg mt-2 lg:hidden rotate-90" /> */}
                    </div>

                    {/* Connecting Arrow - Desktop */}
                    {/* <FontAwesomeIcon icon={faArrowRight} className="text-picto-primary/60 text-xl hidden lg:block" /> */}

                    {/* Step 3: Full Ownership */}
                    <div className="flex flex-col items-center group">
                      <div className="w-3 h-3 bg-picto-primary rounded-full mb-2 hidden lg:block"></div>
                      <ScrollLink
                        to="full-ownership"
                        smooth={true}
                        duration={800}
                        offset={-100}
                        className="cursor-pointer transform transition-all duration-300 hover:scale-105"
                      >
                        <div className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-xl p-4 hover:border-picto-primary hover:shadow-xl transition-all duration-300 min-w-[160px] text-center">
                          <div className="w-12 h-12 bg-picto-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-picto-primary/20 transition-colors">
                            <FontAwesomeIcon icon={faWrench} className="text-picto-primary text-xl" />
                          </div>
                          <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-picto-primary transition-colors">Full Ownership</h4>
                          <p className="text-xs text-gray-600">End-to-End Development</p>
                        </div>
                      </ScrollLink>
                      {/* Arrow for mobile */}
                      {/* <FontAwesomeIcon icon={faArrowRight} className="text-picto-primary/60 text-lg mt-2 lg:hidden rotate-90" /> */}
                    </div>

                    {/* Connecting Arrow - Desktop */}
                    {/* <FontAwesomeIcon icon={faArrowRight} className="text-picto-primary/60 text-xl hidden lg:block" /> */}

                    {/* Step 4: International Work */}
                    <div className="flex flex-col items-center group">
                      <div className="w-3 h-3 bg-picto-primary rounded-full mb-2 hidden lg:block"></div>
                      <ScrollLink
                        to="international-work"
                        smooth={true}
                        duration={800}
                        offset={-100}
                        className="cursor-pointer transform transition-all duration-300 hover:scale-105"
                      >
                        <div className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-xl p-4 hover:border-picto-primary hover:shadow-xl transition-all duration-300 min-w-[160px] text-center">
                          <div className="w-12 h-12 bg-picto-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-picto-primary/20 transition-colors">
                            <FontAwesomeIcon icon={faGlobe} className="text-picto-primary text-xl" />
                          </div>
                          <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-picto-primary transition-colors">International Work</h4>
                          <p className="text-xs text-gray-600">Global Collaboration</p>
                        </div>
                      </ScrollLink>
                    </div>
                  </div>
                </div>

                {/* Journey Description */}
                <p className="text-sm text-gray-600 mt-6 text-center max-w-2xl mx-auto">
                  Click on each milestone to explore my professional growth journey, from learning agile methodologies
                  to delivering solutions for international clients across the globe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Working in Agile & Cross-Functional Teams */}
      <div id="agile-teams" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-picto-primary/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-24 h-24 bg-orange-300/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-picto-primary/30 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-orange-400/20 rounded-full"></div>
          <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-picto-primary/50 rounded-full"></div>
        </div>

        <div className="relative z-10 content px-4 sm:px-6 md:px-12 lg:px-20">
          {/* Header section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-picto-primary/10 text-picto-primary font-semibold text-sm rounded-full border border-picto-primary/20">
                <FontAwesomeIcon icon={faUsers} />
                Agile Teams
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Working in Agile &
              </span>
              <br />
              <span className="bg-gradient-to-r from-picto-primary via-orange-500 to-picto-primary bg-clip-text text-transparent">
                Cross-Functional Teams
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              During my coursework, I worked in a <strong>Scrum-based Agile environment</strong> on a university student portal project delivered across multiple sprints. What made this experience unique was rotating through different responsibilities within the same project.
            </p>
          </div>

          {/* APIIT University Portal Project Card */}
          <div className="group relative max-w-5xl mx-auto bg-white/80 backdrop-blur-sm hover:bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl hover:shadow-picto-primary/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 hover:border-picto-primary/20">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-picto-primary/5 via-transparent to-orange-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 md:flex">
              <div className="md:w-2/5 relative overflow-hidden">
                <div className="aspect-[4/3] md:aspect-auto md:h-full">
                  <img
                    src={studentBlogImage}
                    alt="APIIT University Portal"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="md:w-3/5 p-8 lg:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 group-hover:text-picto-primary transition-colors duration-300">APIIT University Portal</h3>
                    <p className="text-picto-primary font-semibold text-sm uppercase tracking-wide">Agile Scrum Project</p>
                  </div>
                  <Link to="/projects/apiit-students-blog" className="group/btn relative inline-flex items-center gap-3 bg-gradient-to-r from-picto-primary to-orange-400 hover:from-orange-400 hover:to-picto-primary text-white font-bold text-lg px-6 py-3 rounded-xl shadow-2xl shadow-picto-primary/25 hover:shadow-3xl hover:shadow-picto-primary/40 transform hover:scale-105 transition-all duration-300 overflow-hidden shrink-0">
                    <span className="relative z-10">View Project</span>
                    <FontAwesomeIcon icon={faArrowRight} className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-full group-hover/btn:translate-x-0"></div>
                  </Link>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-base">
                  A <strong>comprehensive student portal system</strong> developed in an Agile Scrum environment with rotating team responsibilities across multiple sprints.
                </p>

                <div className="mb-6">
                  <h4 className="font-bold mb-4 flex items-center gap-3 text-lg">
                    <div className="w-8 h-8 bg-picto-primary/10 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faLightbulb} className="text-picto-primary" />
                    </div>
                    Key Achievements & Exposure
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-3 p-3 bg-picto-primary/5 rounded-lg">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Requirements gathering and stakeholder communication</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">User stories, acceptance criteria, and documentation</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-picto-primary/5 rounded-lg">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Sprint planning, reviews, retrospectives, and daily stand-ups</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Collaboration between development, QA, and business roles</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-picto-primary/5 to-orange-50 p-4 rounded-xl border-l-4 border-picto-primary">
                  <p className="text-gray-700 text-sm italic">
                    This experience taught me not only <em>how</em> software is built, but <em>why</em> communication, planning, and feedback loops are critical to successful delivery in cross-functional teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SaaS, Business & Product Thinking */}
      <div id="product-thinking" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-picto-primary/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-24 h-24 bg-orange-300/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-picto-primary/30 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-orange-400/20 rounded-full"></div>
          <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-picto-primary/50 rounded-full"></div>
        </div>

        <div className="relative z-10 content px-4 sm:px-6 md:px-12 lg:px-20">
          {/* Header section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-picto-primary/10 text-picto-primary font-semibold text-sm rounded-full border border-picto-primary/20">
                <FontAwesomeIcon icon={faBuilding} />
                Product Thinking
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                SaaS, Business &
              </span>
              <br />
              <span className="bg-gradient-to-r from-picto-primary via-orange-500 to-picto-primary bg-clip-text text-transparent">
                Product Thinking
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              While studying, I co-founded a small startup with a university colleague. We initially explored freelancing and later shifted our focus toward building scalable products.
            </p>
          </div>

          {/* FlexiFit Project Card */}
          <div className="group relative max-w-5xl mx-auto bg-white/80 backdrop-blur-sm hover:bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl hover:shadow-picto-primary/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 hover:border-picto-primary/20">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-picto-primary/5 via-transparent to-orange-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 md:flex">
              <div className="md:w-2/5 relative overflow-hidden">
                <div className="aspect-[4/3] md:aspect-auto md:h-full">
                  <img
                    src={gymImage}
                    alt="FlexiFit - Fitness Center Management SaaS"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="md:w-3/5 p-8 lg:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 group-hover:text-picto-primary transition-colors duration-300">FlexiFit – Fitness Center Management SaaS</h3>
                    <p className="text-picto-primary font-semibold text-sm uppercase tracking-wide">Cloud-Based Business Solution</p>
                  </div>
                  <Link to="/projects/flexi-fit" className="group/btn relative inline-flex items-center gap-3 bg-gradient-to-r from-picto-primary to-orange-400 hover:from-orange-400 hover:to-picto-primary text-white font-bold text-lg px-6 py-3 rounded-xl shadow-2xl shadow-picto-primary/25 hover:shadow-3xl hover:shadow-picto-primary/40 transform hover:scale-105 transition-all duration-300 overflow-hidden shrink-0">
                    <span className="relative z-10">View Project</span>
                    <FontAwesomeIcon icon={faArrowRight} className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-full group-hover/btn:translate-x-0"></div>
                  </Link>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-base">
                  A <strong>cloud-based fitness center management system</strong> designed to solve day-to-day operational challenges faced by gym owners and members.
                </p>

                <div className="mb-6">
                  <h4 className="font-bold mb-4 flex items-center gap-3 text-lg">
                    <div className="w-8 h-8 bg-picto-primary/10 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faLightbulb} className="text-picto-primary" />
                    </div>
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-3 p-3 bg-picto-primary/5 rounded-lg">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Product ideation and market research</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Requirement analysis and backlog management</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-picto-primary/5 rounded-lg">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Daily stand-ups and task planning</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Development, testing, and iterative improvement</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-picto-primary/5 rounded-lg md:col-span-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Pricing, positioning, and basic product marketing</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-picto-primary/5 to-orange-50 p-4 rounded-xl border-l-4 border-picto-primary">
                  <p className="text-gray-700 text-sm italic">
                    This project introduced me to thinking beyond features—considering usability, scalability, and long-term maintainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Ownership: From Idea to Deployment */}
      <div id="full-ownership" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-picto-primary/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-24 h-24 bg-orange-300/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-picto-primary/30 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-orange-400/20 rounded-full"></div>
          <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-picto-primary/50 rounded-full"></div>
        </div>

        <div className="relative z-10 content px-4 sm:px-6 md:px-12 lg:px-20">
          {/* Header section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-picto-primary/10 text-picto-primary font-semibold text-sm rounded-full border border-picto-primary/20">
                <FontAwesomeIcon icon={faWrench} />
                Full Ownership
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Full Ownership:
              </span>
              <br />
              <span className="bg-gradient-to-r from-picto-primary via-orange-500 to-picto-primary bg-clip-text text-transparent">
                From Idea to Deployment
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Taking complete responsibility for every aspect of development, from initial concept to final deployment and ongoing maintenance.
            </p>
          </div>

          {/* AutoMate Project Card */}
          <div className="group relative max-w-5xl mx-auto bg-white/80 backdrop-blur-sm hover:bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl hover:shadow-picto-primary/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 hover:border-picto-primary/20">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-picto-primary/5 via-transparent to-orange-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 md:flex">
              <div className="md:w-2/5 relative overflow-hidden">
                <div className="aspect-[4/3] md:aspect-auto md:h-full">
                  <img
                    src={garageImage}
                    alt="AutoMate - Automobile Service Center Management System"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="md:w-3/5 p-8 lg:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 group-hover:text-picto-primary transition-colors duration-300">AutoMate – Automobile Service Center Management System</h3>
                    <p className="text-picto-primary font-semibold text-sm uppercase tracking-wide">End-to-End Development</p>
                  </div>
                  <Link to="/projects/automate-service-system" className="group/btn relative inline-flex items-center gap-3 bg-gradient-to-r from-picto-primary to-orange-400 hover:from-orange-400 hover:to-picto-primary text-white font-bold text-lg px-6 py-3 rounded-xl shadow-2xl shadow-picto-primary/25 hover:shadow-3xl hover:shadow-picto-primary/40 transform hover:scale-105 transition-all duration-300 overflow-hidden shrink-0">
                    <span className="relative z-10">View Project</span>
                    <FontAwesomeIcon icon={faArrowRight} className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-full group-hover/btn:translate-x-0"></div>
                  </Link>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-base">
                  A <strong>cloud-based automobile service center management system</strong> developed for a newly opened service center. Unlike FlexiFit, this project was <strong>designed, built, and deployed entirely by me</strong>.
                </p>

                <div className="mb-6">
                  <h4 className="font-bold mb-4 flex items-center gap-3 text-lg">
                    <div className="w-8 h-8 bg-picto-primary/10 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faCode} className="text-picto-primary" />
                    </div>
                    Tech Stack & Responsibilities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-3 p-3 bg-picto-primary/5 rounded-lg">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Direct requirement gathering from the business owner</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">System design and architecture decisions</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-picto-primary/5 rounded-lg">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Backend and frontend development</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Testing, bug fixing, and performance considerations</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-picto-primary/5 rounded-lg md:col-span-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Deployment and hosting setup</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-picto-primary/5 to-picto-primary/10 p-4 rounded-xl border-l-4 border-picto-primary">
                    <p className="text-gray-700 text-sm font-semibold mb-1">Technology</p>
                    <p className="text-gray-600 text-sm">Latest Laravel and Filament stack</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-xl border-l-4 border-orange-400">
                    <p className="text-gray-700 text-sm font-semibold mb-1">Deployment</p>
                    <p className="text-gray-600 text-sm">Railway for cost efficiency and scalability</p>
                  </div>
                </div>

                <div className="mt-4 bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl border-l-4 border-gray-400">
                  <p className="text-gray-700 text-sm italic">
                    The product is currently evolving based on feedback from additional automobile service centers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Working with International Clients */}
      <div id="international-work" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-picto-primary/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-24 h-24 bg-orange-300/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-picto-primary/30 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-orange-400/20 rounded-full"></div>
          <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-picto-primary/50 rounded-full"></div>
        </div>

        <div className="relative z-10 content px-4 sm:px-6 md:px-12 lg:px-20">
          {/* Header section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-picto-primary/10 text-picto-primary font-semibold text-sm rounded-full border border-picto-primary/20">
                <FontAwesomeIcon icon={faGlobe} />
                International Work
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Working with
              </span>
              <br />
              <span className="bg-gradient-to-r from-picto-primary via-orange-500 to-picto-primary bg-clip-text text-transparent">
                International Clients
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I've worked with <strong>international clients</strong>, delivering high-quality solutions despite geographical and timezone challenges.
            </p>
          </div>

          {/* Hevinly Portfolio Website Project Card */}
          <div className="group relative max-w-5xl mx-auto bg-white/80 backdrop-blur-sm hover:bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl hover:shadow-picto-primary/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 hover:border-picto-primary/20">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-picto-primary/5 via-transparent to-orange-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 md:flex">
              <div className="md:w-2/5 relative overflow-hidden">
                <div className="aspect-[4/3] md:aspect-auto md:h-full">
                  <img
                    src={portfolioImage}
                    alt="Hevinly Portfolio Website"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="md:w-3/5 p-8 lg:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 group-hover:text-picto-primary transition-colors duration-300">Hevinly - Portfolio Website</h3>
                    <p className="text-picto-primary font-semibold text-sm uppercase tracking-wide">International Collaboration</p>
                  </div>
                  <Link to="/projects/hevin-portfolio-website" className="group/btn relative inline-flex items-center gap-3 bg-gradient-to-r from-picto-primary to-orange-400 hover:from-orange-400 hover:to-picto-primary text-white font-bold text-lg px-6 py-3 rounded-xl shadow-2xl shadow-picto-primary/25 hover:shadow-3xl hover:shadow-picto-primary/40 transform hover:scale-105 transition-all duration-300 overflow-hidden shrink-0">
                    <span className="relative z-10">View Project</span>
                    <FontAwesomeIcon icon={faArrowRight} className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-full group-hover/btn:translate-x-0"></div>
                  </Link>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-base">
                  A <strong>professional portfolio website</strong> developed for a photography and videography business based in <strong>Japan</strong>, showcasing their work with an elegant, responsive design.
                </p>

                <div className="mb-6">
                  <h4 className="font-bold mb-4 flex items-center gap-3 text-lg">
                    <div className="w-8 h-8 bg-picto-primary/10 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faLightbulb} className="text-picto-primary" />
                    </div>
                    Remote Collaboration Achievements
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-3 p-3 bg-picto-primary/5 rounded-lg">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Clear milestone-based delivery</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Asynchronous communication</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-picto-primary/5 rounded-lg">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Regular updates and feedback loops</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Timezone difference management</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-picto-primary/5 to-orange-50 p-4 rounded-xl border-l-4 border-picto-primary">
                  <p className="text-gray-700 text-sm italic">
                    This international project experience strengthened my ability to communicate clearly, manage expectations, and deliver quality work in remote settings across different cultures and timezones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How I Work */}
      <div id="work-philosophy" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-picto-primary/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-24 h-24 bg-orange-300/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-picto-primary/30 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-orange-400/20 rounded-full"></div>
          <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-picto-primary/50 rounded-full"></div>
        </div>

        <div className="relative z-10 content px-4 sm:px-6 md:px-12 lg:px-20">
          {/* Header section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-picto-primary/10 text-picto-primary font-semibold text-sm rounded-full border border-picto-primary/20">
                <FontAwesomeIcon icon={faCog} />
                Work Philosophy
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                How I
              </span>
              <br />
              <span className="bg-gradient-to-r from-picto-primary via-orange-500 to-picto-primary bg-clip-text text-transparent">
                Work
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These principles guide how I approach my work, ensuring consistent quality and professional excellence in every project.
            </p>
          </div>

          {/* Principles Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="group relative bg-white/80 backdrop-blur-sm hover:bg-white rounded-2xl p-8 hover:shadow-2xl hover:shadow-picto-primary/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 hover:border-picto-primary/20">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-picto-primary/5 via-transparent to-orange-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-picto-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-picto-primary/20 transition-colors duration-300">
                    <FontAwesomeIcon icon={faStar} className="text-picto-primary text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-picto-primary transition-colors duration-300">Ownership</h3>
                    <div className="w-8 h-1 bg-picto-primary rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">I take full responsibility from idea to delivery, ensuring end-to-end quality and accountability in every project I undertake.</p>
              </div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-sm hover:bg-white rounded-2xl p-8 hover:shadow-2xl hover:shadow-picto-primary/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 hover:border-picto-primary/20">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-picto-primary/5 via-transparent to-orange-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-picto-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-picto-primary/20 transition-colors duration-300">
                    <FontAwesomeIcon icon={faLightbulb} className="text-picto-primary text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-picto-primary transition-colors duration-300">Clarity</h3>
                    <div className="w-8 h-1 bg-picto-primary rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">I prefer clear requirements, comprehensive documentation, and transparent communication throughout the entire development process.</p>
              </div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-sm hover:bg-white rounded-2xl p-8 hover:shadow-2xl hover:shadow-picto-primary/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 hover:border-picto-primary/20">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-picto-primary/5 via-transparent to-orange-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-picto-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-picto-primary/20 transition-colors duration-300">
                    <FontAwesomeIcon icon={faRocket} className="text-picto-primary text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-picto-primary transition-colors duration-300">Continuous Learning</h3>
                    <div className="w-8 h-1 bg-picto-primary rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">I actively improve my skills through real projects, staying updated with the latest technologies and best practices in the industry.</p>
              </div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-sm hover:bg-white rounded-2xl p-8 hover:shadow-2xl hover:shadow-picto-primary/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 hover:border-picto-primary/20">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-picto-primary/5 via-transparent to-orange-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-picto-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-picto-primary/20 transition-colors duration-300">
                    <FontAwesomeIcon icon={faCode} className="text-picto-primary text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-picto-primary transition-colors duration-300">Practical Engineering</h3>
                    <div className="w-8 h-1 bg-picto-primary rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">I focus on building maintainable and scalable solutions that stand the test of time, following industry best practices and standards.</p>
              </div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-sm hover:bg-white rounded-2xl p-8 hover:shadow-2xl hover:shadow-picto-primary/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 hover:border-picto-primary/20 md:col-span-2 lg:col-span-1">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-picto-primary/5 via-transparent to-orange-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-picto-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-picto-primary/20 transition-colors duration-300">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-picto-primary text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-picto-primary transition-colors duration-300">Calm Execution</h3>
                    <div className="w-8 h-1 bg-picto-primary rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">I value steady progress over rushed output, maintaining quality and reliability in all deliverables while managing expectations effectively.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Let's Connect */}
      <div className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-picto-primary/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-24 h-24 bg-orange-300/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-picto-primary/30 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-orange-400/20 rounded-full"></div>
          <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-picto-primary/50 rounded-full"></div>
        </div>

        <div className="relative z-10 content px-4 sm:px-6 md:px-12 lg:px-20">
          {/* Header section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-picto-primary/10 text-picto-primary font-semibold text-sm rounded-full border border-picto-primary/20">
                <FontAwesomeIcon icon={faHandshake} />
                Let's Connect
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Let's
              </span>
              <br />
              <span className="bg-gradient-to-r from-picto-primary via-orange-500 to-picto-primary bg-clip-text text-transparent">
                Connect
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              If you'd like to learn more about my work or discuss potential opportunities, feel free to explore my projects or reach out through any of the channels below.
            </p>
          </div>

          {/* Social Links Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <a
              href="/"
              className="group relative bg-white/80 backdrop-blur-sm hover:bg-white rounded-2xl p-8 hover:shadow-2xl hover:shadow-picto-primary/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 hover:border-picto-primary/20 text-center"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-picto-primary/5 via-transparent to-orange-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-picto-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-picto-primary/20 transition-colors duration-300">
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-picto-primary text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-picto-primary transition-colors duration-300">Portfolio</h3>
                <p className="text-gray-600 text-sm">Explore my complete work</p>
              </div>
            </a>

            <a
              href="https://github.com/gihan-tharuka"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/80 backdrop-blur-sm hover:bg-white rounded-2xl p-8 hover:shadow-2xl hover:shadow-gray-900/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 hover:border-gray-800/20 text-center"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 via-transparent to-gray-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-gray-900/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-900/20 transition-colors duration-300">
                  <FontAwesomeIcon icon={faGithub} className="text-gray-900 text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-900 transition-colors duration-300">GitHub</h3>
                <p className="text-gray-600 text-sm">View my code repositories</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/gihan-tharuka-7b592b296"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/80 backdrop-blur-sm hover:bg-white rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 hover:border-blue-600/20 text-center"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/20 transition-colors duration-300">
                  <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">LinkedIn</h3>
                <p className="text-gray-600 text-sm">Connect professionally</p>
              </div>
            </a>
          </div>

          {/* Thank you message */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-picto-primary/10 to-orange-50 p-6 rounded-2xl border border-picto-primary/20">
              <p className="text-lg text-gray-700 font-medium">
                Thanks for taking the time to read my story.
              </p>
              <div className="w-16 h-1 bg-picto-primary rounded-full mx-auto mt-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
