import React, { useState } from "react";
import "../../style/addcourse.css";

const AddCourse = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Bergen International Film Festival",
      description:
        "Films from all over the world gather all film enthusiasts for unique moments at the Bergen International Film Festival.",
      github: "https://github.com/example1",
      status: "pending",
    },
    {
      id: 2,
      title: "Wool week",
      description:
        "ULLVEKA 2021 will be held for the eighth time in the period 22 - 31 October 2021, and will take place in the entire Bergen region.",
      github: "https://github.com/example2",
      status: "pending",
    },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    github: "",
    status: "pending",
  });

  const handleAddClick = () => setIsFormOpen(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = { id: projects.length + 1, ...formData };
    setProjects((prev) => [...prev, newProject]);
    setIsFormOpen(false);
    setFormData({ title: "", description: "", github: "", date: "", time: "" });
  };

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-item">Home</div>
        <div className="nav-item">My Courses</div>
        <div className="nav-item active">Add Project</div>
        <div className="nav-item">Online Class</div>
        <div className="nav-item">Feedback</div>
      </nav>

      {/* Content */}
      <div className="content">
        <h1 className="greeting">Hi, SHASTY VENKATESH G! 👋</h1>
        <h2 className="subheading">Project Overview</h2>
        <button className="add-project-btn" onClick={handleAddClick}>
          + List
        </button>

        <div className="project-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Link
                  </a>
                )}
              </div>
              <button className="add-to-calendar">
                {project.status === "pending" ? "Verifying" : " "}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay Form */}
      {isFormOpen && (
        <div className="overlay">
          <div className="form-container">
            <h2>Add New Project</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Project Title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="description"
                placeholder="Project Description"
                value={formData.description}
                onChange={handleInputChange}
                required
              ></textarea>
              <input
                type="text"
                name="github"
                placeholder="GitHub Repository Link"
                value={formData.github}
                onChange={handleInputChange}
              />

              <button type="submit">Add Project</button>
              <button
                type="button"
                className="close-btn"
                onClick={() => setIsFormOpen(false)}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCourse;
