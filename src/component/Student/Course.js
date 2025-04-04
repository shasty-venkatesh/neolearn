import React, { useState } from "react";
import "../../style/course.css";

const topics = [
  {
    id: 1,
    title: "Topic 1",
    bookLink: "https://example.com/book1",
    driveLink: "https://drive.google.com/example1",
    youtubeLink: "https://youtube.com/example1",
  },
  {
    id: 2,
    title: "Topic 2",
    bookLink: "https://example.com/book2",
    driveLink: "https://drive.google.com/example2",
    youtubeLink: "https://youtube.com/example2",
  },
  {
    id: 3,
    title: "Topic 3",
    bookLink: "https://example.com/book3",
    driveLink: "https://drive.google.com/example3",
    youtubeLink: "https://youtube.com/example3",
  },
  {
    id: 4,
    title: "Topic 4",
    bookLink: "https://example.com/book4",
    driveLink: "https://drive.google.com/example4",
    youtubeLink: "https://youtube.com/example4",
  },
];

const Course = () => {
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [activeTab, setActiveTab] = useState("Course");

  const toggleTopic = (id) => {
    setExpandedTopic(expandedTopic === id ? null : id);
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="nav-item">Home</div>
        <div className="nav-item active">My Courses</div>
        <div className="nav-item">Add Project</div>
        <div className="nav-item">Online Class</div>
        <div className="nav-item">Feedback</div>
      </nav>

      <div className="content">
        <h1 className="greeting">Hi, SHASTY VENKATESH G! 👋</h1>
        <h1 className="course-title">U23AD482 ADB Big Data Analytics</h1>
        <p>
          Department of AIDS AY 2024-2025 EVEN SEMESTER (AIDS) SEMESTER IV (B)
        </p>
        <h2 className="subheading">Course overview</h2>
        <div className="course-box">
          <div className="course-nav">
            <div
              className={`course-nav-item ${
                activeTab === "Course" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Course")}
            >
              Course
            </div>
            <div
              className={`course-nav-item ${
                activeTab === "Score" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Score")}
            >
              Score
            </div>
            <div
              className={`course-nav-item ${
                activeTab === "Leaderboard" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Leaderboard")}
            >
              Leaderboard
            </div>
          </div>
        </div>
        {activeTab === "Course" && (
          <div className="topics-container">
            <h3 className="general">General</h3>
            <div className="announcements">📢 Announcements</div>
            {topics.map((topic) => (
              <div key={topic.id} className="topic">
                <div
                  className="topic-header"
                  onClick={() => toggleTopic(topic.id)}
                >
                  <span className="arrow">
                    {expandedTopic === topic.id ? "▼" : "▶"}
                  </span>
                  {topic.title}
                </div>
                {expandedTopic === topic.id && (
                  <div className="topic-content">
                    <p>
                      📖{" "}
                      <a
                        href={topic.bookLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Reference
                      </a>
                    </p>
                    <p>
                      📂{" "}
                      <a
                        href={topic.driveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learning Material (Drive)
                      </a>
                    </p>
                    <p>
                      📺{" "}
                      <a
                        href={topic.youtubeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        YouTube Link
                      </a>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {/* Score Content */}
        {activeTab === "Score" && (
          <div className="score-container">
            <div className="score-header">
              <div className="profile-pic">S</div>
              <h2 className="profile-name">SHASTY VENKATESH G.</h2>
            </div>
            <table className="score-table">
              <thead>
                <tr>
                  <th>Grade Item</th>
                  <th>Calculated Weight</th>
                  <th>Grade</th>
                  <th>Range</th>
                  <th>Percentage</th>
                  <th>Feedback</th>
                  <th>Contribution</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>U23AD482 ADB Big Data Analytics</td>
                  <td>-</td>
                  <td>-</td>
                  <td>0–0</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr className="total-row">
                  <td colSpan="7">Σ Course Total: -</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {activeTab === "Leaderboard" && (
          <div className="leaderboard-container">
            <h3>Leaderboard</h3>
            <div className="leaderboard-table">
              <div className="leaderboard-row header">
                <div>Name</div>
                <div>Role</div>
                <div>Group</div>
                <div>Last Active</div>
              </div>
              <div className="leaderboard-row">
                <div>Ram Dharsan E</div>
                <div>Student</div>
                <div>No groups</div>
                <div>Never</div>
              </div>
              <div className="leaderboard-row">
                <div>Sara Dawood S</div>
                <div>Student</div>
                <div>No groups</div>
                <div>Never</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Course;
