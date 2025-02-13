import pollifyProjectImage from "/assets/pollifyproject.jpg";
import instaCloneProjectImage from "/assets/instacloneproject.jpg";
import pocProjectImage from "/assets/pocproject.jpg";
import weatherProjectImage from "/assets/weatherproject.jpg";
import { FaUpRightFromSquare, FaGithub } from "react-icons/fa6";

const PROJECTS = [
  {
    projectName: "Pollify",
    projectImage: pollifyProjectImage,
    projectDesc:
      "User can Create, Vote, View Result and Delete Polls. Used Firebase Email System for Account activation. Used Tailwind CSS for better UI interface and user interaction. There are many future scope for this project like real-time chat window, group polls, etc.",
    projectTechnologies: "React, TypeScript, Tailwind CSS & Firebase",
    projectLink: "https://pollify-sable.vercel.app/",
    projectGitLink: "https://github.com/Ray541/pollify",
  },
  {
    projectName: "Weather App",
    projectImage: weatherProjectImage,
    projectDesc:
      "This is a Weather App which shows the weather that is entered by the User. This project is built using HTML, CSS, and JavaScript. Used OpenWeatherMap API to get the weather of the user desired location from accross the world.",
    projectTechnologies: "HTML, CSS, JavaScript, Bootstrap 5",
    projectLink: "https://weather-app-seven-zeta-88.vercel.app/",
    projectGitLink: "https://github.com/Ray541/weather-app",
  },
  {
    projectName: "What's App Messaging POC",
    projectImage: pocProjectImage,
    raisePoint: "-400px",
    projectDesc:
      "This is a POC project which I developed in the internship tenure of AntSctack. It's What's App Messaging Module and Admin Panel for the Admin to view all users and handel them. CRUD operations with Firbase Firestore & Storage.",
    projectTechnologies: "Vite-React, JavaScript, Bootstrap-5 & Firebase",
    projectLink: "https://poc-lemon-three.vercel.app/",
    projectGitLink: "https://github.com/Ray541/poc",
  },
  {
    projectName: "Instagram Clone",
    projectImage: instaCloneProjectImage,
    projectDesc:
      "This is a Instagram Clone Website which will showcase all the major features of Instagram. Used Firebase Email System for Account activation. Explored Chakra UI for better UI interface and user interaction. Future scope like chat window, face time calls, etc.",
    projectTechnologies: "Vite React, JavaScript, Chakra UI & Firebase",
    projectLink: "https://social-app-clone-jade-kappa.vercel.app/",
    projectGitLink: "https://github.com/Ray541/instagram-clone",
  },
];

const Projects = () => {
  const buttonHoverCursorType = {
    type: "hover",
    width: "17px",
    height: "10px",
    className: "border-gray-200",
  };

  return (
    <section
      id="project"
      className="flex flex-col items-center justify-center gap-5 px-5 py-16 bg-gray-100/50 text-gray-900 dark:bg-gray-900 dark:text-gray-200 relative"
    >
      <div className="w-[200px] h-[200px] rounded-full bg-primary -z-10 absolute top-20 right-20 blur-3xl opacity-90"></div>
      <div className="w-[200px] h-[200px] rounded-full bg-primary -z-10 absolute bottom-20 left-0 blur-3xl opacity-50"></div>
      <h2 className="text-6xl font-bold mb-5">
        My <span className="text-primary">Work</span>
      </h2>
      <div className="w-full max-w-7xl h-full flex items-center justify-center flex-col gap-5 backdrop-filter backdrop-blur-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-full sx:p-0">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100/10 dark:bg-gray-900 p-4 rounded-xl shadow-md hover:-translate-y-2 transition-all duration-100 ease-in-out border-2 border-gray-500 hover:border-primary flex flex-col flex-wrap items-center justify-between gap-3"
            >
              <p className="w-full text-4xl font-bold text-primary">{project.projectName}</p>
              <div>
                <div className="w-full h-[300px] overflow-hidden rounded-xl border groupForImage relative">
                  <img
                    src={project.projectImage}
                    alt=""
                    loading="lazy"
                    className="absolute top-0 left-0 w-full h-auto transition-transform duration-[5000ms]"
                  />
                </div>

                <p className="text-xl my-4">
                  <span className="text-xl font-bold text-primary">Description</span>:{" "}
                  <span className="text-lg font-normal">{project.projectDesc}</span>
                </p>
                <p className="text-xl">
                  <span className="font-bold text-primary">Technologies:</span>{" "}
                  <span className="text-lg font-normal">{project.projectTechnologies}</span>
                </p>
              </div>
              <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-5 mt-5 md:mt-1 lg:mt-0">
                <a
                  href={project.projectLink ? project.projectLink : `#`}
                  target={project.projectLink ? `_blank` : ``}
                  rel="noreferrer"
                  className="bg-primary hover:bg-gray-950 text-white px-4 py-2 rounded-sm shadow transition-all duration-200 ease-in-out font-medium flex items-center justify-center gap-1.5 active:scale-95"
                  data-cursor={JSON.stringify(buttonHoverCursorType)}
                >
                  View Project
                  <FaUpRightFromSquare className="text-md" />
                </a>
                <a
                  href={project.projectGitLink ? project.projectGitLink : `#`}
                  target={project.projectGitLink ? `_blank` : ``}
                  rel="noreferrer"
                  className="bg-gray-600 text-white px-4 py-2 rounded-sm shadow hover:bg-gray-950 transition-all duration-200 ease-in-out font-medium flex items-center justify-center gap-1.5 active:scale-95"
                  data-cursor={JSON.stringify(buttonHoverCursorType)}
                >
                  <FaGithub className="text-lg" />
                  Git Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
