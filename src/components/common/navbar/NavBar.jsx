import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "Portfolio", url: "portfolio" },
  { id: 3, name: "Expertise", url: "expertise" },
  { id: 4, name: "Education", url: "education" },
  { id: 5, name: "Services", url: "services" },
  // { id: 6, name: "Projects", url: "/projects" },
  // { id: 7, name: "Contact", url: "contact" },
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const repoBase = import.meta.env.VITE_REPO_NAME ? `/${import.meta.env.VITE_REPO_NAME}` : (import.meta.env.BASE_URL || '');

// menu will be created inside the NavBar component so we can access router location

const NavBar = () => {
  const [position, setPosition] = useState(0);
  const location = useLocation();

  const inHome = location.pathname === '/' || location.pathname === repoBase + '/';

  const menu = navItems.map((item) => (
    <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
      {item.url && item.url.startsWith("/") ? (
        // For absolute routes (like /projects), use router navigation so SPA routing works and basename is handled
        <RouterLink
          to={`${item.url}`}
          className="group relative px-4 py-2 mx-1 rounded-xl text-gray-700 hover:text-picto-primary font-medium transition-all duration-300 hover:bg-picto-primary/5"
          onClick={handleMenuClick}
        >
          <span className="relative z-10">{item.name}</span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-picto-primary to-orange-400 group-hover:w-full transition-all duration-300 ease-out"></div>
        </RouterLink>
      ) : (
        // For in-page sections, use react-scroll when on home page; otherwise navigate to home route
        inHome ? (
          <ScrollLink
            onClick={handleMenuClick}
            to={item.url.toLowerCase()}
            smooth={true}
            duration={1000}
            spy={true}
            offset={-140}
            className="group relative px-4 py-2 mx-1 rounded-xl text-gray-700 hover:text-picto-primary font-medium transition-all duration-300 hover:bg-picto-primary/5"
          >
            <span className="relative z-10">{item.name}</span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-picto-primary to-orange-400 group-hover:w-full transition-all duration-300 ease-out"></div>
          </ScrollLink>
        ) : (
          <RouterLink
            to={`/`}
            className="group relative px-4 py-2 mx-1 rounded-xl text-gray-700 hover:text-picto-primary font-medium transition-all duration-300 hover:bg-picto-primary/5"
            onClick={handleMenuClick}
          >
            <span className="relative z-10">{item.name}</span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-picto-primary to-orange-400 group-hover:w-full transition-all duration-300 ease-out"></div>
          </RouterLink>
        )
      )}
    </li>
  ));

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 ${
        position > 50
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-lg shadow-gray-100/50"
          : "bg-white/80 backdrop-blur-sm border-b border-white/50"
      } z-50 transition-all duration-500`}
    >
      <div className="navbar flex justify-between mx-auto content py-2">
        <div className="flex items-center justify-between">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-picto-primary/10 rounded-xl transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700 group-hover:text-picto-primary transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content rounded-2xl z-10 mt-4 w-64 p-4 shadow-2xl shadow-gray-200/50 bg-white/95 backdrop-blur-md border border-gray-100/50 font-medium"
            >
              {menu}
            </ul>
          </div>

          <RouterLink to={`/`} className="group flex items-center border-0 lg:max-xxl:ps-5 transition-all duration-300" onClick={handleMenuClick}>
            <div className="relative flex items-center justify-center h-10 w-10 sm:h-14 sm:w-14 rounded-2xl bg-gradient-to-br from-picto-primary to-orange-400 text-white font-bold text-lg sm:text-2xl shadow-lg shadow-picto-primary/30 group-hover:shadow-xl group-hover:shadow-picto-primary/40 transition-all duration-300 group-hover:scale-105">
              G
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400 to-picto-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="ml-3 sm:ml-4">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent group-hover:from-picto-primary group-hover:via-orange-500 group-hover:to-picto-primary transition-all duration-300">
                Gihan Tharuka
              </p>
              <div className="h-0.5 w-0 bg-gradient-to-r from-picto-primary to-orange-400 group-hover:w-full transition-all duration-500 ease-out"></div>
            </div>
          </RouterLink>
        </div>

        <div className="lg:flex items-center">
          <ul className="hidden lg:flex menu menu-horizontal text-[16px] font-medium md:shrink-0">
            {menu}
          </ul>
          <div className="ml-6">
            {inHome ? (
              <ScrollLink
                className="group relative btn btn-sm xs:btn-md sm:btn-lg btn-primary overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                to={`contact`}
                smooth={true}
                duration={900}
                onClick={handleMenuClick}
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-picto-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </ScrollLink>
            ) : (
              <RouterLink
                className="group relative btn btn-sm xs:btn-md sm:btn-lg btn-primary overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                to={`/`}
                onClick={handleMenuClick}
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-picto-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </RouterLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
