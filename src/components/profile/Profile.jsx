import { useEffect, useRef, useState } from "react";
import person from "../../assets/images/cv/gihan.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faDownload, faCode, faRocket, faStar } from "@fortawesome/free-solid-svg-icons";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import pdf from "../../data/Gihan-Tharuka-Resume.pdf";

const Profile = () => {
  const [animate, setAnimate] = useState(true);

  return (
    <section className="relative py-8 md:py-8 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50" id="profile">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-picto-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-orange-300/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-picto-primary/30 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-orange-400/20 rounded-full"></div>
        <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-picto-primary/50 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content - Profile Image */}
          <div className={`relative transition-all duration-700 delay-300 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Full Stack Developer badge - moved above image */}
            <div className={`text-center mb-6 transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-picto-primary/10 text-picto-primary font-semibold text-sm rounded-full border border-picto-primary/20">
                <FontAwesomeIcon icon={faStar} className="animate-pulse" />
                Full Stack Developer
              </span>
            </div>

            {/* Creative profile image container */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative background shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Floating geometric shapes */}
                <div className="absolute top-8 left-8 w-12 h-12 bg-picto-primary/20 rounded-lg rotate-45 opacity-60 animate-pulse"></div>
                <div className="absolute top-16 right-12 w-8 h-8 bg-orange-300/30 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 left-16 w-6 h-6 bg-picto-primary/25 rotate-12 opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-12 right-20 w-10 h-10 bg-orange-200/40 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

                {/* Hexagonal frame */}
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-72 h-72 opacity-20">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <defs>
                        <linearGradient id="profileHexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ff7a00" stopOpacity="0.1" />
                          <stop offset="100%" stopColor="#ff7a00" stopOpacity="0.05" />
                        </linearGradient>
                      </defs>
                      <polygon
                        points="100,10 170,50 170,130 100,170 30,130 30,50"
                        fill="url(#profileHexGradient)"
                        stroke="#ff7a00"
                        strokeWidth="1"
                        strokeOpacity="0.3"
                        className="drop-shadow-lg"
                      />
                    </svg>
                  </div>
                </div> */}
              </div>

              {/* Main image container - circular shape */}
              <div className="relative z-10 w-72 h-72 md:w-80 md:h-80 mx-auto">
                <div className="w-full h-full relative overflow-hidden ">
                  {/* Circular image */}
                  <div className="w-full h-full relative rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover filter"
                      src={person}
                      alt="Gihan Tharuka profile"
                      
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced social media section - now below the image */}
            <div className="mt-6 text-center opacity-100 transition-all duration-500 delay-300">
              <div className="inline-block px-8 py-2 bg-white/95 backdrop-blur-md rounded-2xl  border border-gray-100/60 ring-1 ring-white/20">
                <SocialMedia />
              </div>
            </div>

            {/* CTA buttons - moved below social media */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center opacity-100 transition-all duration-500 delay-500">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-picto-primary to-orange-400 hover:from-orange-400 hover:to-picto-primary text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl shadow-picto-primary/25 hover:shadow-3xl hover:shadow-picto-primary/40 transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Let's Work Together</span>
                <FontAwesomeIcon icon={faRocket} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-full group-hover:translate-x-0"></div>
              </a>

              <a
                href={pdf}
                download="Gihan-Tharuka-Resume.pdf"
                className="group inline-flex items-center gap-3 bg-white border-2 border-gray-200 hover:border-picto-primary text-gray-700 hover:text-picto-primary font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-picto-primary/5 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FontAwesomeIcon icon={faDownload} className="transition-transform duration-300 group-hover:animate-bounce" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Right Content - Text Content */}
          <div className={`space-y-8 transition-all duration-700 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Hi, I'm
                </span>
                <br />
                <span className="bg-gradient-to-r from-picto-primary via-orange-400 to-picto-primary bg-clip-text text-transparent">
                  Gihan Tharuka
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed max-w-lg">
              <p>
                I'm a passionate Full Stack Developer who transforms ideas into digital experiences.
                With expertise in modern web technologies, I create scalable applications that make a difference.
              </p>
              <p>
                My journey is driven by curiosity, innovation, and the relentless pursuit of excellence
                in everything I build.
              </p>
            </div>

            {/* Key highlights */}
            <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-picto-primary/10 to-orange-100/20 rounded-full border border-picto-primary/20">
                <FontAwesomeIcon icon={faCode} className="text-picto-primary" />
                <span className="text-sm font-medium text-gray-700">Clean Code</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100/20 to-picto-primary/10 rounded-full border border-orange-300/30">
                <FontAwesomeIcon icon={faRocket} className="text-orange-500" />
                <span className="text-sm font-medium text-gray-700">Performance</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100/20 to-picto-primary/10 rounded-full border border-green-300/30">
                <FontAwesomeIcon icon={faShieldAlt} className="text-green-600" />
                <span className="text-sm font-medium text-gray-700">Security</span>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
