import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../components/style.css";
import "../components/responsive.css";
import aboutimg from "../components/images/me2new.jpg";

const About = () => {
  const [activeKey, setActiveKey] = useState(null);

  const education = [
    {
      degree: "Bachelors of Technology",
      board: "Dr.Babasaheb Ambedkar Technological University",
      college: "Sharad Institute of Technology College of Engineering",
      major: "B.Tech in Computer Science and Engineering",
      marks: "8.64 [CGPA]",
      passingYear: "2023-24",
    },
    {
      degree: "Diploma",
      board: "Maharashtra State Board of Technical Education",
      college: "Sanjay Bhokare Groups of Institute",
      major: "Diploma in Computer Engineering",
      marks: "89.94% [Avg.]",
      passingYear: "2020-21",
    },
    {
      degree: "Schooling",
      board:
        "Maharashtra state Board of Secondary and Higher Secondary Education Pune",
      college: "Alphonsa School Miraj",
      major: "X",
      marks: "77%",
      passingYear: "2017-18",
    },
  ];
  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Tailwind",
    "Bootstrap",
    "HTML5",
    "CSS",
    "Jquery",
    "C",
    "C++",
    "Java",
    "SQL",
    "Firebase",
    "Supabase",
    "Git",
  ];
  return (
    <section id="about">
      <div className="container about-content">
        <div className="section-title text-center col-md-12 mb-3">
          <h1>About Me</h1>
        </div>
        <div className="row about-first-row">
          <div className="about-img col-lg-6">
            <img src={aboutimg} className="img-fluid" alt="" />
          </div>
          <div className="about-text col-lg-6">
            <p>
              I'm Pranav Rao, a Computer Science Engineer <b>💻</b> with a
              passion for <span>Frontend Web Development</span>.
            </p>
            <p>
              I am an <span>Anime Adict</span> <b>🎌</b>. I like to{" "}
              <span>Travel</span> and Listen<span> Musics and Songs 🎧.</span>{" "}
              <span>Football</span> Enthusiastic <b>⚽</b>. A{" "}
              <span>
                Evening Person <b>🌆</b>
              </span>
              . <span>Bike</span> Enthusiastic <strong>1N23456</strong>{" "}
              <b>🏍️</b>. An{" "}
              <span>
                Introvert <b>😊</b>.
              </span>{" "}
              Like to <span>Capture</span> the <span>Time</span> through{" "}
              <span>
                Photos <b>📸</b>
              </span>
              .
            </p>
            <p>
              As you explore my portfolio, you will find examples of my Work,
              including some of the <span>Projects</span>
              <b>📝</b> and the
              <span> Internships</span> <b>🖥️</b>.
            </p>
            <p style={{ marginBottom: 0 }}>
              <span>
                <b>👍</b> Looking forward for connecting with you! <b>✌️</b>
              </span>
            </p>
          </div>
        </div>
        <div className="row reveal">
          <div className="education col-lg-12 p-0">
            <h3>Education</h3>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              {education.map((edu, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`flush-heading${index}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse${index}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapse${index}`}
                      onClick={() => setActiveKey(index)}
                    >
                      {edu.degree}
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse${index}`}
                    className={`accordion-collapse collapse ${
                      activeKey === index ? "show" : ""
                    }`}
                    aria-labelledby={`flush-heading${index}`}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          <span>College</span> : {edu.college}{" "}
                          <i className="bi bi-mortarboard-fill card-icon"></i>
                        </li>
                        <li>
                          <span>Board</span> : {edu.board}
                        </li>
                        <li>
                          <span>Major</span> : {edu.major}
                        </li>
                        <li>
                          <span>Marks Scored</span> : {edu.marks}
                        </li>
                        <li>
                          <span>Passing Year</span> : {edu.passingYear}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row text-center reveal">
          <h3 className="skills-title">Skills</h3>
          <div className="skill-tab">
            {skills.map((skill, index) => (
              <span className="skill" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
