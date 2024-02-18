import { useState } from "react";

import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaEnvelope } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import navItem from "./NavItem";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-500 max-w-screen-2xl mx-auto container">
      <div className="container mx-auto flex flex-wrap item-center justify-between px-6 max-w-screen-2xl">
        <div className="w-full static mx-auto top-0 flex justify-between lg:w-auto lg:static lg:justify-start h-[10vh] items-center ">
          <div>
            <ScrollLink onClick={scrollToTop} className="flex items-center">
              <h1 className="font-medium cursor-pointer text-lg">Explore</h1>
              <span className="font-bold text-orange-800 text-xl">Thai.</span>
            </ScrollLink>
          </div>

          <div className="flex items-centers">
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 h-[3rem] block lg:hidden outline-none focus:outline-none"
              onClick={() => setOpenMenu(!openMenu)}
            >
              {openMenu ? <AiOutlineClose /> : <FaBars />}
            </button>
          </div>
        </div>

        <div
          className={`lg:flex flex-grow items-center lg:h-auto h-screen justify-center ${
            openMenu ? "flex" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-x-4 list-none lg:ml-auto lg:transform-none lg:translate-y-[-50%] lg:gap-y-0 gap-y-8">
            {navItem.map((nav, index) => (
              <ScrollLink
                activeClass="nav-Active"
                to={nav.path}
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                key={index}
                className="py-2 flex text-sm  text-white uppercase font-semibold items-center hover:text-orange-600 transition-all duration-150 ease-in-out cursor-pointer"
              >
                {nav.title}
              </ScrollLink>
            ))}
            <ScrollLink
              to="/"
              className="py-2 flex text-white items-center gap-2 bg-slate-600 rounded-md px-4 font-medium hover:translate-y-[-5px] duration-300 hover:text-orange-600"
            >
              <FaEnvelope className="h-6 w-6" />
              <p>Anakin112333@gmail.com</p>
            </ScrollLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
