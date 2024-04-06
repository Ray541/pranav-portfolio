import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../components/style.css";
import "../components/responsive.css";

const Project = () => {
  const projects = [
    {
      projectNum: "01",
      projectNumber: "Project 1",
      projectName: "Pollify",
      projectType: "Modern Website",
      projectDesc:
        "User can Create, Vote, View Result and Delete Polls. Used Firebase Email System for Account activation. Tech Stack being used to bulid this website are : Vite React, JavaScript, Tailwind CSS and Firebase. Fullstack Project.",
      projectEnv: "VS Code",
      projectTechnologies: "React, TypeScript, Tailwind CSS & Firebase",
      projectLink: "https://polling-application-alpha.vercel.app/",
      projectGitLink: "https://github.com/Ray541/pollify",
    },
    {
      projectNum: "02",
      projectNumber: "Project 2",
      projectName: "Instagram Clone",
      projectType: "Modern Website",
      projectDesc:
        "This is a Instagram Clone Website which will showcase all the major features of Instagram. Tech Stack being used to bulid this website are : Vite React, JavaScript, Chakra UI and Firebase. Fullstack Project.",
      projectEnv: "VS Code",
      projectTechnologies: "Vite React, JavaScript, Chakra UI & Firebase",
      projectLink: "https://social-app-clone-jade-kappa.vercel.app/",
      projectGitLink: "https://github.com/Ray541/instagram-clone",
    },
    {
      projectNum: "03",
      projectNumber: "Project 3",
      projectName: "What's App Messaging POC",
      projectType: "Modern Website",
      projectDesc:
        "This is a POC project which I developed in the internship tenure of AntSctack. It's What's App Messaging Module and Admin Panel for the Admin to view all users and handel them. CRUD operations with Firbase Firestore & Storage.",
      projectEnv: "VS Code",
      projectTechnologies: "Vite-React, JavaScript, Bootstrap-5 & Firebase",
      projectLink: "https://poc-lemon-three.vercel.app/",
      projectGitLink: "https://github.com/Ray541/poc",
    },
    {
      projectNum: "04",
      projectNumber: "Project 4",
      projectName: "Weather App",
      projectType: "Website",
      projectDesc:
        "This is a Weather App which shows the weather that is entered by the User. This project is built using HTML, CSS, and JavaScript. Used OpenWeatherMap API to get the weather of the user desired location from accross the world.",
      projectEnv: "VS Code",
      projectTechnologies: "HTML, CSS, JavaScript, Bootstrap 5",
      projectLink: "https://weather-app-seven-zeta-88.vercel.app/",
      projectGitLink: "https://github.com/Ray541/weather-app",
    },
  ];
  return (
    <section id="project-banner">
      <section id="project" className="container-fluid">
        <h1>Projects</h1>
      </section>
      <div className="card-holder">
        {projects.map((project, index) => (
          <div className="col-lg-4 col-md-10 project-card reveal" key={index}>
            <div className="project-card-title">
              <span className="projectnum">{project.projectNum}</span>
              <h3>
                {project.projectNumber}
                <i className="fa-sharp fa-solid fa-code"></i>
              </h3>
              <span className="card-action-message"></span>
            </div>
            <div className="project-card-text">
              <h5>{project.projectName}</h5>
              <p>
                <span>{project.projectType}</span>
              </p>
              <p>{project.projectDesc}</p>
              <p>
                <span>Environment:</span> {project.projectEnv}
              </p>
              <p>
                <span>Technologies:</span> {project.projectTechnologies}
              </p>
              <div className="project-button-holder">
                <a
                  href={project.projectLink ? project.projectLink : `#`}
                  target={project.projectLink ? `_blank` : ``}
                  rel="noreferrer"
                >
                  <button className="project-view-btn">
                    View Project
                    {project.projectLink ? (
                      <i className="ms-1 bi bi-box-arrow-up-right"></i>
                    ) : (
                      <i className="ms-1 bi bi-tools"></i>
                    )}
                  </button>
                </a>
                <a
                  href={project.projectGitLink ? project.projectGitLink : `#`}
                  target={project.projectGitLink ? `_blank` : ``}
                  rel="noreferrer"
                >
                  <button className="git-project-view-btn">
                    Git Project
                    {project.projectGitLink ? (
                      <i className="ms-1 bi bi-github"></i>
                    ) : (
                      <i className="ms-1 bi bi-tools"></i>
                    )}
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
