import { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import ShinyEffect from "./ShinyEffect";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects);
        console.log(data.projects[0]);
        setCurrentProject(data.projects[0]); // Set the first project as the default selected project
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const projectLimit = projects.slice(0, 6);

  return (
    <div
      className="relative max-w-[800px] mx-auto p-6 md:my-20 flex flex-col md:flex-row"
      id="portfolio"
    >
      {currentProject && (
        <div className="z-10 glass p-6 w-full border-2 max-w-[600px]">
          <div className="w-full h-80">
            <img
              src={currentProject.img}
              alt={currentProject.title}
              className="w-full h-full object-cover rounded-lg mb-4"
            />
          </div>
          <p className="text-gray-200 my-4">{currentProject.description}</p>
          <div className="flex space-x-4">
            <a
              href={currentProject.links.site}
              target="_blank"
              className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
            >
              View Site
            </a>
            <a
              target="_blank"
              href={currentProject.links.github}
              className="px-4 py-3 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-600 transition duration-300"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
      )}
      <div className="absolute inset-0">
        <div className="hidden md:block">
          <ShinyEffect left={100} top={0} size={900} />
        </div>
      </div>
      <ul className="z-10 ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1">
        {projectLimit.map((project, index) => (
          <li
            key={index}
            onClick={() => setCurrentProject(projects[index])}
            className={`cursor-pointer text-gray-300 bg-slate-700 rounded-lg p-2 max-w-[100px] hover:bg-slate-800 transition duration-300 ${
              currentProject === projects[index] ? "bg-slate-900" : ""
            }`}
          >
            {project.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
