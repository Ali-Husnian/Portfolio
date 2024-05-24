import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import { AiFillGithub } from "react-icons/ai";

const projects = [
  {
    img: project1,
    title: "Project 1",
    description: "UI forn frontend development using React.",
    links: {
      github: "https://github.com/Ali-Husnian/Trillo",
      site: "https://trillo-steel.vercel.app/",
    },
  },
  {
    img: project2,
    title: "Project 2",
    description: "UI forn frontend development using React.",
    links: {
      github: "https://github.com/Ali-Husnian/Portfolio",
      site: "https://portfolio-seven-omega-24.vercel.app/",
    },
  },
  {
    img: project3,
    title: "Project 3",
    description: "UI forn frontend development using React.",
    links: {
      github: "https://github.com/Ali-Husnian/Nexter",
      site: "https://nexter-inky.vercel.app/",
    },
  },
  {
    img: project4,
    title: "Project 4",
    description: "UI forn frontend development using React.",
    links: {
      github: "https://github.com/Ali-Husnian/Natours",
      site: "https://natours-five-blush.vercel.app/",
    },
  },
  {
    img: project5,
    title: "Project 5",
    description: "UI forn frontend development using React.",
    links: {
      github: "https://github.com/Ali-Husnian/trybase",
      site: "https://trybase-52b342eb6ac0.herokuapp.com/",
    },
  },
  {
    img: project6,
    title: "Project 6",
    description: "UI forn frontend development using React.",
    links: {
      github: "https://github.com/Ali-Husnian/Job_frontend_mern",
      site: "https://job-frontend-mern-1.onrender.com/jobs",
    },
  },
];

const Projects = () => {
  return (
    <div className="flex flex-wrap justify-center items-center my-6">
      {projects.map((project, index) => {
        return (
          <>
            <div
              key={index}
              className="relative max-w-[800px] m-[20px] md:my-[20px] flex flex-col md:flex-row"
              id="protfolio"
            >
              <div className="z-10 glass p-6 w-full border-2 max-w-[600px]">
                <div className="w-full h-80 ">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg mb-4"
                  />
                </div>
                <p className="text-gray-200 my-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.links.site}
                    className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                  >
                    View Site
                  </a>
                  <a
                    href={project.links.github}
                    className="px-4 py-3 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-600 transition duration-300"
                  >
                    <AiFillGithub />
                  </a>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default Projects;
