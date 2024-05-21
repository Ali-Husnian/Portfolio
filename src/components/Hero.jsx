import profiepic from "../assets/profilepic.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-14">
      <div className="max-w-[800px]">
        <p className="text-gray-200 w-[700px] md:text-6xl text-3xl tracking-tight">
          HEY,I AM <br />
          <span className="">ALI HUSNAIN</span> <br />
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
            className="font-bold italic"
          />
        </p>
        <h2 className="text-gray-300">with 1+ years of experience</h2>

        <div className="flex flex-row gap-4 mb-4 md:mb-0 ">
          <button
            className="transform transition-transform hover:scale-105 hover:shadow-lg
          z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 bg-gradient-to-t from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] rounded-xl"
          >
            Download CV
          </button>
          <button
            className="transform transition-transform hover:scale-105 hover:shadow-lg
          z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 border border-gray-400 rounded-xl"
          >
            View work
          </button>
        </div>
      </div>

      <img
        className="w-[300px] md:w-[500px]"
        src={profiepic}
        alt="profile image"
      />
    </div>
  );
};

export default Hero;
