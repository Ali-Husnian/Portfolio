import project1 from "../assets/project1.png";
import project2 from "../assets/project3.png";
import project3 from "../assets/project3.png";

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
} from "react-icons/di";

const About = () => {
  return (
    <div
      className="max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center"
      id="about"
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center">
        <DiJavascript1 className="text-yellow-500" />
        <DiReact className="text-blue-600" />
        <DiNodejsSmall className="text-green-600" />
        <DiHtml5 className="text-blue-600" />
        <DiCss3 className="text-orange-600" />
        <DiSass className="text-pink-600" />
        <DiBootstrap className="text-purple-600" />
        <DiMongodb className="text-green-600" />
        <DiGithubBadge className="text-y" />
      </div>
    </div>
  );
};

export default About;
