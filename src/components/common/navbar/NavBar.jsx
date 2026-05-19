import { useEffect, useState, useCallback } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faCode,
  faGraduationCap,
  faCog,
  faEnvelope,
  faBars,
  faXmark,
  faDotCircle,
} from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { id: 1, name: "Home", url: "introduction", icon: faHome },
  { id: 2, name: "Experience", url: "/about", icon: faUser },
  { id: 3, name: "Portfolio", url: "portfolio", icon: faBriefcase },
  { id: 4, name: "Expertise", url: "expertise", icon: faCode },
  { id: 5, name: "Education", url: "education", icon: faGraduationCap },
  { id: 6, name: "Services", url: "services", icon: faCog },
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const repoBase = import.meta.env.VITE_REPO_NAME
  ? `/${import.meta.env.VITE_REPO_NAME}`
  : import.meta.env.BASE_URL || "";

const NavBar = () => {
  const [position, setPosition] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const inHome =
    location.pathname === "/" || location.pathname === repoBase + "/";

  const isScrolled = position > 50;

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setPosition(scrolled);
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        documentHeight > 0 ? (scrolled / documentHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const renderNavLink = (item) => {
    const linkClasses =
      "group relative px-4 py-2.5 mx-0.5 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/[0.06] flex items-center gap-2.5";
    const activeLinkClasses = `${linkClasses} text-picto-primary bg-white/[0.06]`;
    const inactiveLinkClasses = `${linkClasses} text-gray-400 hover:text-picto-primary`;

    const underline = (
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-picto-primary to-orange-400 group-hover:w-full transition-all duration-300 ease-out rounded-full"></span>
    );

    if (item.url && item.url.startsWith("/")) {
      return (
        <RouterLink
          to={item.url}
          className={inactiveLinkClasses}
          onClick={handleMenuClick}
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="text-xs text-picto-primary/50 group-hover:text-picto-primary transition-colors duration-300"
          />
          <span className="relative z-10">{item.name}</span>
          {underline}
        </RouterLink>
      );
    }

    if (inHome) {
      return (
        <ScrollLink
          onClick={handleMenuClick}
          to={item.url.toLowerCase()}
          smooth={true}
          duration={1000}
          spy={true}
          offset={-100}
          activeClass="active-nav-item"
          className={inactiveLinkClasses}
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="text-xs text-picto-primary/50 group-hover:text-picto-primary transition-colors duration-300"
          />
          <span className="relative z-10">{item.name}</span>
          {underline}
        </ScrollLink>
      );
    }

    return (
      <RouterLink
        to="/"
        className={inactiveLinkClasses}
        onClick={handleMenuClick}
      >
        <FontAwesomeIcon
          icon={item.icon}
          className="text-xs text-picto-primary/50 group-hover:text-picto-primary transition-colors duration-300"
        />
        <span className="relative z-10">{item.name}</span>
        {underline}
      </RouterLink>
    );
  };

  const renderMobileNavLink = (item) => {
    const baseClasses =
      "group flex items-center gap-3.5 px-5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-white/[0.06]";
    const inactiveClasses = `${baseClasses} text-gray-300 hover:text-picto-primary hover:translate-x-1`;

    const content = (
      <>
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-picto-primary/20 to-orange-100/10 flex items-center justify-center group-hover:from-picto-primary/30 group-hover:scale-110 transition-all duration-300">
          <FontAwesomeIcon
            icon={item.icon}
            className="text-picto-primary text-sm"
          />
        </div>
        <span>{item.name}</span>
      </>
    );

    if (item.url && item.url.startsWith("/")) {
      return (
        <li key={item.id}>
          <RouterLink
            to={item.url}
            className={inactiveClasses}
            onClick={() => {
              handleMenuClick();
              setMobileOpen(false);
            }}
          >
            {content}
          </RouterLink>
        </li>
      );
    }

    if (inHome) {
      return (
        <li key={item.id}>
          <ScrollLink
            onClick={() => {
              handleMenuClick();
              setMobileOpen(false);
            }}
            to={item.url.toLowerCase()}
            smooth={true}
            duration={1000}
            spy={true}
            offset={-100}
            activeClass="active-nav-item"
            className={inactiveClasses}
          >
            {content}
          </ScrollLink>
        </li>
      );
    }

    return (
      <li key={item.id}>
        <RouterLink
          to="/"
          className={inactiveClasses}
          onClick={() => {
            handleMenuClick();
            setMobileOpen(false);
          }}
        >
          {content}
        </RouterLink>
      </li>
    );
  };

  return (
    <>
      {/* ===== SCROLL PROGRESS BAR ===== */}
      <div className="fixed top-0 left-0 w-full z-50 h-1">
        <div
          className="h-full bg-gradient-to-r from-picto-primary via-orange-400 to-picto-primary transition-all duration-300 ease-out rounded-full"
          style={{
            width: `${scrollProgress}%`,
            boxShadow: scrollProgress > 0 ? "0 0 10px rgba(255,122,0,0.5)" : "none",
          }}
        ></div>
      </div>

      {/* ===== NAVBAR ===== */}
      <div
        className={`sticky top-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-gray-950/90 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
            : "bg-gray-950/70 backdrop-blur-sm border-b border-white/[0.04]"
        }`}
      >
        <div className="navbar flex justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 lg:py-0">
          {/* ===== LEFT: LOGO + MOBILE TOGGLE ===== */}
          <div className="flex items-center gap-3">
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden btn btn-ghost btn-circle hover:bg-white/[0.06] transition-all duration-300"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <span
                  className={`absolute block h-0.5 w-5 bg-gray-400 rounded-full transition-all duration-300 ${
                    mobileOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                ></span>
                <span
                  className={`absolute block h-0.5 bg-gray-400 rounded-full transition-all duration-300 ${
                    mobileOpen ? "w-0 opacity-0" : "w-5"
                  }`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-5 bg-gray-400 rounded-full transition-all duration-300 ${
                    mobileOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                ></span>
              </div>
            </button>

            {/* Logo */}
            <RouterLink
              to="/"
              className="group flex items-center gap-3 border-0 transition-all duration-300"
              onClick={handleMenuClick}
            >
              <div className="relative">
                <div
                  className={`relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-picto-primary to-orange-400 text-white font-bold shadow-lg shadow-picto-primary/20 group-hover:shadow-xl group-hover:shadow-picto-primary/30 transition-all duration-300 group-hover:scale-105 group-hover:rotate-2 ${
                    isScrolled ? "h-9 w-9 text-base" : "h-11 w-11 sm:h-12 sm:w-12 text-lg sm:text-xl"
                  }`}
                >
                  G
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400 to-picto-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                {/* Logo glow ring */}
                <div className="absolute -inset-2 rounded-2xl bg-picto-primary/15 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>
              <div className="text-left">
                <p
                  className={`font-bold bg-gradient-to-r from-white via-gray-100 to-white/80 bg-clip-text text-transparent group-hover:from-picto-primary group-hover:via-orange-400 group-hover:to-picto-primary transition-all duration-500 ${
                    isScrolled ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
                  }`}
                >
                  Gihan Tharuka
                </p>
                <div className="h-0.5 bg-gradient-to-r from-picto-primary to-orange-400 transition-all duration-500 ease-out w-0 group-hover:w-full rounded-full"></div>
              </div>
            </RouterLink>
          </div>

          {/* ===== RIGHT: DESKTOP NAV + CTA ===== */}
          <div className="hidden lg:flex items-center gap-1">
            <ul className="menu menu-horizontal text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
                  {renderNavLink(item)}
                </li>
              ))}
            </ul>

            {/* Desktop Contact CTA */}
            <div className="ml-3">
              {inHome ? (
                <ScrollLink
                  className="group relative btn btn-sm px-5 py-2.5 bg-gradient-to-r from-picto-primary to-orange-400 hover:from-orange-400 hover:to-picto-primary text-white font-semibold rounded-xl border-0 shadow-lg shadow-picto-primary/20 hover:shadow-xl hover:shadow-picto-primary/30 transform hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
                  to="contact"
                  smooth={true}
                  duration={900}
                  onClick={handleMenuClick}
                >
                  {/* Glow ring */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-picto-primary/30 to-orange-400/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                    </span>
                    Contact
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12 translate-x-full group-hover:translate-x-0"></div>
                </ScrollLink>
              ) : (
                <RouterLink
                  className="group relative btn btn-sm px-5 py-2.5 bg-gradient-to-r from-picto-primary to-orange-400 hover:from-orange-400 hover:to-picto-primary text-white font-semibold rounded-xl border-0 shadow-lg shadow-picto-primary/20 hover:shadow-xl hover:shadow-picto-primary/30 transform hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
                  to="/"
                  onClick={handleMenuClick}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-picto-primary/30 to-orange-400/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                    </span>
                    Contact
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12 translate-x-full group-hover:translate-x-0"></div>
                </RouterLink>
              )}
            </div>
          </div>
        </div>

        {/* ===== MOBILE OVERLAY ===== */}
        {mobileOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setMobileOpen(false)}
          ></div>
        )}

        {/* ===== MOBILE DRAWER ===== */}
        <div
          className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-gray-900/95 backdrop-blur-2xl border-l border-white/[0.06] shadow-2xl z-40 lg:hidden transition-all duration-500 ${
            reducedMotion
              ? mobileOpen
                ? "translate-x-0"
                : "translate-x-full"
              : mobileOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          {/* Mobile drawer header */}
          <div className="flex items-center justify-between p-5 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-picto-primary to-orange-400 flex items-center justify-center text-white font-bold shadow-lg">
                G
              </div>
              <div>
                <p className="text-sm font-bold text-white">Gihan Tharuka</p>
                <p className="text-[10px] text-gray-400">Full Stack Developer</p>
              </div>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="btn btn-ghost btn-circle btn-sm hover:bg-white/[0.06] transition-all duration-300"
              aria-label="Close menu"
            >
              <FontAwesomeIcon
                icon={faXmark}
                className="text-gray-400 text-lg"
              />
            </button>
          </div>

          {/* Mobile nav items */}
          <ul
            className={`p-4 space-y-1 ${
              reducedMotion ? "" : "animate-fade-in"
            }`}
          >
            {navItems.map((item, index) => (
              <div
                key={item.id}
                style={{
                  transitionDelay: reducedMotion
                    ? "0ms"
                    : `${index * 60}ms`,
                  transitionDuration: "500ms",
                }}
              >
                {renderMobileNavLink(item)}
              </div>
            ))}

            {/* Mobile Contact CTA */}
            <li className="pt-3 border-t border-white/[0.06] mt-3">
              {inHome ? (
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={900}
                  onClick={() => {
                    handleMenuClick();
                    setMobileOpen(false);
                  }}
                  className="group flex items-center gap-3.5 px-5 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-picto-primary to-orange-400 text-white hover:from-orange-400 hover:to-picto-primary transition-all duration-300 shadow-lg shadow-picto-primary/20"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-sm"
                  />
                  <span>Get In Touch</span>
                </ScrollLink>
              ) : (
                <RouterLink
                  to="/"
                  onClick={() => {
                    handleMenuClick();
                    setMobileOpen(false);
                  }}
                  className="group flex items-center gap-3.5 px-5 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-picto-primary to-orange-400 text-white hover:from-orange-400 hover:to-picto-primary transition-all duration-300 shadow-lg shadow-picto-primary/20"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-sm"
                  />
                  <span>Get In Touch</span>
                </RouterLink>
              )}
            </li>
          </ul>

          {/* Mobile drawer footer */}
          <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-white/[0.06]">
            <p className="text-[11px] text-gray-500 text-center">
              Available for opportunities
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;