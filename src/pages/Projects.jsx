import { AiFillGithub } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]); // Initialize as an empty array

  useEffect(() => {
    fetch("/api/projects") // Fixed the IP address typo
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 mt-10">
        <Link to="/" className="text-blue-400 flex items-center justify-center">
          <IoMdArrowRoundBack /> Back
        </Link>
        <h2 className="text-gray-200 text-3xl font-bold text-center">
          All Projects
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center my-6">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div
              key={index}
              className="relative max-w-[800px] m-[20px] md:my-[20px] flex flex-col md:flex-row"
              id="portfolio"
            >
              <div className="z-10 glass p-6 w-full border-2 max-w-[600px]">
                <div className="w-full h-80">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg mb-4"
                  />
                </div>
                <p className="text-gray-200 my-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    target="_blank"
                    href={project.links.site}
                    className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                  >
                    View Site
                  </a>
                  <a
                    target="_blank"
                    href={project.links.github}
                    className="px-4 py-3 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-600 transition duration-300"
                  >
                    <AiFillGithub />
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-200">Loading projects...</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Projects;
