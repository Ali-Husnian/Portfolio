import { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import useAuthRedirect from "./useAuthRedirect";

const ProjectManagement = () => {
  useAuthRedirect();
  const [projects, setProjects] = useState([]);

  const [image, setImage] = useState("");

  const [form, setForm] = useState({
    img: "",
    title: "",
    description: "",
    links: {
      github: "",
      site: "",
    },
  });
  const [editIndex, setEditIndex] = useState(null);

  // Fetch projects from backend
  useEffect(() => {
    fetch("https://portfolio-server-theta-liart.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const loader = () => {
    fetch("https://portfolio-server-theta-liart.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => data.projects)
      .catch((error) => console.error("Error fetching projects:", error));
  };
  loader();

  const handleChange = (e) => {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "portfolio");
      formData.append("cloud_name", "ali4841534-cloud");

      fetch("https://api.cloudinary.com/v1_1/ali4841534-cloud/image/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setImage(data.secure_url);
          setForm((prevForm) => ({
            ...prevForm,
            img: data.secure_url,
          }));
        })
        .catch((error) => console.error("Error uploading file:", error));
    } else {
      const { name, value } = e.target;
      if (name.includes("links.")) {
        const [, linkType] = name.split(".");
        setForm((prevForm) => ({
          ...prevForm,
          links: {
            ...prevForm.links,
            [linkType]: value,
          },
        }));
      } else {
        setForm((prevForm) => ({
          ...prevForm,
          [name]: value,
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editIndex !== null) {
        // Update existing project
        const response = await fetch(
          `/api/projects/${projects[editIndex]._id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }
        );
        if (!response.ok) throw new Error("Failed to update project");
        const updatedProject = await response.json();
        const updatedProjects = projects.map((project, index) =>
          index === editIndex ? updatedProject : project
        );
        setProjects(updatedProjects);
        setEditIndex(null);
        location.reload();
      } else {
        // Add new project
        const response = await fetch(
          "https://portfolio-server-theta-liart.vercel.app/projects",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }
        );
        if (!response.ok) throw new Error("Failed to add project");
        const newProject = await response.json();
        setProjects([...projects, newProject]);
      }
      // Reset form after submission
      setForm({
        img: "",
        title: "",
        description: "",
        links: {
          github: "",
          site: "",
        },
      });
      setImage("");
      location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setForm(projects[index]);
    setImage(projects[index].img);
  };

  const handleDelete = async (index) => {
    try {
      const projectId = projects[index]._id;
      const response = await fetch(
        `https://portfolio-server-theta-liart.vercel.app/projects/${projectId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) throw new Error("Failed to delete project");
      const updatedProjects = projects.filter((_, i) => i !== index);
      setProjects(updatedProjects);
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <div className="px-10  grid grid-cols-1 items-center justify-center">
      <h1 className="text-2xl font-bold text-white text-center tracking-wide pt-10 mb-4">
        Project Management
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mb-4 w-full mx-auto border border-gray-700 rounded-lg shadow-lg p-5 text-gray-100"
      >
        <label className="block text--600">Image</label>
        <div className="mb-2 flex gap-1 justify-between">
          <div style={{ width: "90%" }}>
            <input
              type="file"
              name="img"
              onChange={handleChange}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
          </div>
          <div style={{ width: "10%" }}>
            <img src={image} alt="" width="100px" className="rounded-md" />
          </div>
        </div>
        <div className="mb-2">
          <label className="block text--600">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Project title..."
            required
            className="-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-2">
          <label className="block text--600">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Project description..."
            required
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
        <div className="mb-2">
          <label className="block text--600">GitHub Link</label>
          <input
            type="text"
            name="links.github"
            value={form.links.github}
            onChange={handleChange}
            placeholder="Paste project github link..."
            required
            className="-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-2">
          <label className="block text--600">Site Link</label>
          <input
            type="text"
            name="links.site"
            value={form.links.site}
            onChange={handleChange}
            placeholder="Paste project site link..."
            required
            className="-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {editIndex !== null ? "Update Project" : "Add Project"}
        </button>
      </form>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <h1 className="text-2xl font-bold text-white text-center tracking-wide pt-10 mb-4">
          Project Listing
        </h1>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                GitHub
              </th>
              <th scope="col" className="px-6 py-3">
                Site
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr
                key={project._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-24 h-16 object-cover"
                  />
                </td>
                <td className="px-6 py-4">{project.title}</td>
                <td className="px-6 py-4">{project.description}</td>
                <td className="px-6 py-4">
                  <a
                    href={project.links?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub className="text-gray-200" />
                  </a>
                </td>
                <td className="px-6 py-4">
                  <a
                    href={project.links?.site}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TbWorld className="text-yellow-600" />
                  </a>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-blue-500 font-light tracking-wide "
                  >
                    <FaRegEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500"
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectManagement;
