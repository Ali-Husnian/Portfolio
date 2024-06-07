import project1 from "../assets/project1.png";
import project2 from "../assets/project4.png"; // Ensure you have the correct image path
import project3 from "../assets/project3.png"; // Ensure you have the correct image path

import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiMongodb,
  DiGithubBadge,
  DiDocker,
  DiMysql,
} from "react-icons/di";

const About = () => {
  return (
    <div
      className="max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center "
      id="about"
    >
      <div className="md:hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center">
        <DiJavascript1 className="text-yellow-500" />
        <DiReact className="text-blue-600" />
        <DiNodejsSmall className="text-green-600" />
        <DiHtml5 className="text-blue-600" />
        <DiCss3 className="text-orange-600" />
        <DiSass className="text-pink-600" />
        <DiBootstrap className="text-purple-600" />
        <DiMongodb className="text-green-600" />
        <DiGithubBadge className="text-gray-600" />
      </div>

      <div className="relative group ">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg transition duration-300">
          <img
            src={project1}
            alt="project-1"
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb4">Skills</h2>
        <p className="text-gray-300 mb-4">
          As a passionate web front-end developer with over 1 year of exprience,
          I have a proven track record of creating visually syunning and
          responsivee websites.
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <DiJavascript1 className="text-yellow-500" />
          <DiReact className="text-blue-600" />
          <DiNodejsSmall className="text-green-600" />
          <DiHtml5 className="text-blue-600" />
          <DiCss3 className="text-orange-600" />
          <DiSass className="text-pink-600" />
          <DiBootstrap className="text-purple-600" />
          {/*<DiMongodb className="text-green-600" />*/}
          {/*<DiGithubBadge className="text-gray-600" />{/**/}
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb4">
          Frontend Exprience
        </h2>
        <p className="text-gray-300 mb-4">
          Exprienced in creating modern, responsive web applicatons using the
          latest frontend technologies.
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <DiJavascript1 className="text-yellow-500" />
          <DiReact className="text-blue-600" />
          <DiHtml5 className="text-blue-600" />
          <DiCss3 className="text-orange-600" />
          <DiSass className="text-pink-600" />
          <DiBootstrap className="text-purple-600" />
          {/*<DiMongodb className="text-green-600" />*/}
          {/*<DiGithubBadge className="text-gray-600" />{/**/}
        </div>
      </div>
      <div className="relative group ">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg transition duration-300">
          <img
            src={project2}
            alt="project-2"
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>

      <div className="relative group ">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg transition duration-300">
          <img
            src={project3}
            alt="project-3"
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb4">
          Full Stack Exprience
        </h2>
        <p className="text-gray-300 mb-4">
          Skilled in developing end-to-end solutions fullstack technologies.
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <DiReact className="text-blue-600" />
          <DiNodejsSmall className="text-green-600" />
          <DiMysql className="text-yellow-600" />
          <DiMongodb className="text-green-600" />
          <DiGithubBadge className="text-gray-600" />
          <DiDocker className="text-yellow-600" />
        </div>
      </div>
    </div>
  );
};

export default About;
