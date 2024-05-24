import { useState } from "react";
import logo from "../assets/logo-1.png";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { MdLogin } from "react-icons/md";

import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex text-2xl justify-between text-gray-200 items-center px-6 max-w-[1300px] h-24 mx-auto">
      <a href="/">
        <img src={logo} alt="logo" width="100px" className="cursor-pointer" />
      </a>
      <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
        <li className="relative group">
          <ScrollLink to="about" smooth={true} offset={50} duration={500}>
            About
          </ScrollLink>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </li>
        <li className="relative group">
          <ScrollLink to="protfolio" smooth={true} offset={50} duration={500}>
            Protfolio
          </ScrollLink>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </li>
        <li className="relative group">
          <ScrollLink to="contact" smooth={true} offset={50} duration={500}>
            Contact
          </ScrollLink>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </li>
        <li className="relative pl-3 pr-3 pt-1 text-gray-200 rounded bg-gradient-to-t from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4]">
          <Link to="login">
            <MdLogin />
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </li>
      </ul>

      <div onClick={toggleNav} className="md:hidden z-30">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={
          nav
            ? "text-center z-20 fixed h-full w-full left-0 top-0 bg-[#232323]"
            : "fixed left-[-100%]"
        }
      >
        <ul className="font-semibold text-4xl space-y-8 mt-24">
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              offset={50}
              duration={500}
              onClick={toggleNav}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="protfolio"
              smooth={true}
              offset={50}
              duration={500}
              onClick={toggleNav}
            >
              Protfolio
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              offset={50}
              duration={500}
              onClick={toggleNav}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
