import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "Portfolio", url: "portfolio" },
  { id: 3, name: "Expertise", url: "expertise" },
  { id: 4, name: "Education", url: "education" },
  { id: 5, name: "Services", url: "services" },
  { id: 6, name: "About", url: "/about" },
  // { id: 7, name: "Projects", url: "/projects" },
  // { id: 8, name: "Contact", url: "contact" },
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
          className={`hover:text-picto-primary px-5 py-3 mx-1`}
          onClick={handleMenuClick}
        >
          {item.name}
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
            activeStyle={{
              backgroundColor: "#ff7a00",
              color: "white",
            }}
            className={`hover:text-picto-primary px-5 py-3 mx-1`}
          >
            {item.name}
          </ScrollLink>
        ) : (
          <RouterLink
            to={`/`}
            className={`hover:text-picto-primary px-5 py-3 mx-1`}
            onClick={handleMenuClick}
          >
            {item.name}
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
          ? "bg-soft-white border-b border-gray-300"
          : "bg-white border-white"
      } z-50 transition-all duration-1000`}
    >
      <div className="navbar flex justify-between mx-auto content">
        <div className="flex items-center justify-between">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className={`menu menu-lg dropdown-content rounded-box z-1 mt-3 w-lvw p-2 shadow font-semibold flex-nowrap bg-white text-black`}
            >
              {menu}
            </ul>
          </div>

          <RouterLink to={`/`} className="flex items-center border-0 lg:max-xxl:ps-5" onClick={handleMenuClick}>
            <div className="flex items-center justify-center h-8 w-8 sm:h-14 sm:w-14 rounded-full bg-picto-primary text-white font-semibold text-lg sm:text-2xl">
              G
            </div>
            <p className="text-2xl sm:text-[32px] my-auto ms-[12px] font-semibold">
              Gihan Tharuka
            </p>
          </RouterLink>
        </div>

        <div className="lg:flex items-center">
          <ul className="hidden lg:flex menu menu-horizontal text-[16px] font-medium md:shrink-0">
            {menu}
          </ul>
          <p className="">
            {inHome ? (
              <ScrollLink
                className="btn btn-sm xs:btn-md sm:btn-lg btn-primary"
                to={`contact`}
                smooth={true}
                duration={900}
                onClick={handleMenuClick}
              >
                Contact
              </ScrollLink>
            ) : (
              <RouterLink className="btn btn-sm xs:btn-md sm:btn-lg btn-primary" to={`/`} onClick={handleMenuClick}>
                Contact
              </RouterLink>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
