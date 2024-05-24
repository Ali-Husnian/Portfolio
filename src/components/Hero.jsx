import profiepic from "../assets/Aliprofile.png";
import resume from "../assets/alihusnain.pdf";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-14 px-4 md:px-0">
      <div className="max-w-[800px] text-center md:text-left">
        <p className="text-gray-200 w-full md:w-[700px] md:text-6xl text-3xl tracking-tight">
          HEY, I AM <br />
          <span className="block mb-10">ALI HUSNAIN</span>
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "Full Stack Developer",
              1000,
              "Web Developer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold italic text-[#50a7c7]"
          />
        </p>
        <h2 className="text-gray-300 mt-4 md:mt-0">
          with 1+ years of experience
        </h2>

        <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-0 mt-6 items-center justify-center md:justify-start">
          <a
            href={resume}
            className="transform transition-transform hover:scale-105 hover:shadow-lg text-center
          z-10 cursor-pointer font-bold text-gray-200 w-full md:w-1/2 p-2 bg-gradient-to-t from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] rounded-xl"
          >
            Download CV
          </a>
          <Link
            to="/view-work"
            className="transform transition-transform hover:scale-105 hover:shadow-lg text-center
          z-10 cursor-pointer font-bold text-gray-200 w-full md:w-1/2 p-2 border border-gray-400 rounded-xl"
          >
            View work
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden md:overflow-visible">
        <div className="hidden md:block">
          <ShinyEffect left={100} top={200} size={1400} />
        </div>
        <ShinyEffect left={-100} top={0} size={1200} />
      </div>

      <img
        className="w-[200px] md:w-[500px] mt-6 md:mt-0"
        src={profiepic}
        alt="profile image"
      />
    </div>
  );
};

export default Hero;
