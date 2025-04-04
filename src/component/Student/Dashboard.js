import React from "react";
import "../../style/studentDashboard.css";

const courses = [
  {
    id: 1,
    code: "U23AD482 ADB",
    name: "Big Data Analytics",
    semester: "IV (B)",
    color: "blue",
  },
  {
    id: 2,
    code: "U23AD482 ADBP",
    name: "Big Data Analytics (P)",
    semester: "IV (B)",
    color: "gray",
  },
  {
    id: 3,
    code: "U23AD483 ADB",
    name: "Artificial Intelligence",
    semester: "IV (B)",
    color: "yellow",
  },
  {
    id: 4,
    code: "U23AD483 ADB",
    name: "Artificial Intelligence",
    semester: "IV (B)",
    color: "pink",
  },
  {
    id: 5,
    code: "U23AD483 ADB",
    name: "Artificial Intelligence",
    semester: "IV (B)",
    color: "purple",
  },
  {
    id: 6,
    code: "U23AD483 ADB",
    name: "Artificial Intelligence",
    semester: "IV (B)",
    color: "gold",
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="nav-item active">Home</div>
        <div className="nav-item">My Courses</div>
        <div className="nav-item">Add Project</div>
        <div className="nav-item">Online Class</div>
        <div className="nav-item">Feedback</div>
      </nav>

      <div className="content">
        <h1 className="greeting">Hi, Student 👋</h1>
        <h2 className="subheading">Course overview</h2>
        <div className="filters">
          <select className="filter-item">
            <option>All</option>
          </select>
          <input type="text" placeholder="Search" className="filter-item" />
          <select className="filter-item">
            <option>Sort by short name</option>
          </select>
        </div>
        <div className="course-grid">
          {courses.map((course) => (
            <div key={course.id} className={`course-card ${course.color}`}>
              <p className="course-code">{course.code}</p>
              <p className="course-name">{course.name}</p>
              <p className="course-semester">{course.semester}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
