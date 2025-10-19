// logo image removed; using inline 'G' badge instead

/* Footer nabLinks */
const navItems = [
  { id: 1, name: "Home", url: "Home" },
  { id: 2, name: "About", url: "About" },
  { id: 3, name: "Process", url: "Process" },
  { id: 4, name: "Portfolio", url: "Portfolio" },
  { id: 5, name: "Blog", url: "Blog" },
  { id: 6, name: "Services", url: "Services" },
  { id: 7, name: "Contact", url: "Contact" },
];
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="pt-25 md:pt-40 content max-2xl:px-3">
      <div className="flex flex-col md:flex-row justify-between mx-0 items-center h-full w-full text-neutral-200">
        <a href="#" className="flex items-center border-0 mb-4 md:mb-0">
          <div className="flex items-center justify-center h-8 w-8 sm:h-14 sm:w-14 rounded-full bg-picto-primary text-white font-semibold text-lg sm:text-2xl">
            G
          </div>
          <p className="text-3xl sm:text-[32px] my-auto ms-[12px] font-semibold">
            Gihan Tharuka
          </p>
        </a>
        <div className="mx-7 my-4 md:my-0 text-center w-full md:w-auto">
          {navItems.map((item) => (
            <a
              key={item.id}
              className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px]"
              href={`#${item.url.toLowerCase()}`}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
        <p className="text-[12px] sm:text-[16px] mt-4 md:mt-0">
          Copyright &copy; {copyrightYear} Gihan.
        </p>
      </div>
      <p className="text-[#2A374A] text-center max-xs:text-[12px] max-md:text-[14px] w-full py-10">
        Developed withby{" "}
        <a
          href="https://www.themewagon.com"
          className="underline font-bold"
          target="_blank"
        >
          ThemeWagon
        </a>
      </p>
    </div>
  );
};

export default Footer;
