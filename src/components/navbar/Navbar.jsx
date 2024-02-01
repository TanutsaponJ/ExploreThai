import { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaEnvelope } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import navItem from "./NavItem";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-500">
      <div className="container mx-auto flex flex-wrap item-center justify-between px-6 max-w-screen-2xl">
        <div className="w-full static mx-auto top-0 flex justify-between lg:w-auto lg:static lg:justify-start h-[10vh] items-center ">
          <Link to="/" className="flex items-center">
            <h1 className="font-medium cursor-pointer text-lg">Explore</h1>
            <span className="font-bold text-orange-800 text-xl">Thai.</span>
          </Link>

          <div className="flex items-center">
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
              <Link
                to={nav.path}
                key={index}
                className="py-2 flex text-white uppercase font-medium items-center leading-snug hover:text-orange-600 transition-all duration-150 ease-in-out"
              >
                {nav.title}
              </Link>
            ))}
            <Link
              to="/"
              className="py-2 flex text-white items-center gap-2 bg-slate-600 rounded-md px-4 font-medium hover:translate-y-[-5px] duration-300 hover:text-orange-600"
            >
              <FaEnvelope className="h-6 w-6" />
              <p>Anakin112333@gmail.com</p>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
