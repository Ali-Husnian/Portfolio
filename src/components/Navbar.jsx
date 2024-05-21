import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  //   const closeNav = () => {
  //     setNav(false);
  //   };

  return (
    <div className="flex text-2xl justify-between text-gray-200 items-center px-6 max-w-[1300px] h-24 mx-auto">
      <a href="">Ali Husnain</a>
      <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
        <li className="relative group">
          <Link to="about" smooth={true} offset={50} duration={500}>
            About
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </li>
        <li className="relative group">
          <Link to="protfolio" smooth={true} offset={50} duration={500}>
            Protfolio
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </li>
        <li className="relative group">
          <Link to="contact" smooth={true} offset={50} duration={500}>
            Contact
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
            <Link
              to="about"
              smooth={true}
              offset={50}
              duration={500}
              onClick={toggleNav}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="protfolio"
              smooth={true}
              offset={50}
              duration={500}
              onClick={toggleNav}
            >
              Protfolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={50}
              duration={500}
              onClick={toggleNav}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
