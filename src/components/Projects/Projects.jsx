import { ExpandIcon, GitHubIcon } from "../../assets/constants";

const PROJECTS = [
  {
    projectName: "Pollify",
    projectType: "Modern Website",
    projectDesc:
      "User can Create, Vote, View Result and Delete Polls. Used Firebase Email System for Account activation. Used Tailwind CSS for better UI interface and user interaction. There are many future scope for this project like real-time chat window, group polls, etc.",
    projectTechnologies: "React, TypeScript, Tailwind CSS & Firebase",
    projectLink: "https://pollify-sable.vercel.app/",
    projectGitLink: "https://github.com/Ray541/pollify",
  },
  {
    projectName: "Instagram Clone",
    projectType: "Modern Website",
    projectDesc:
      "This is a Instagram Clone Website which will showcase all the major features of Instagram. Used Firebase Email System for Account activation. Explored Chakra UI for better UI interface and user interaction. Future scope like chat window, face time calls, etc.",
    projectTechnologies: "Vite React, JavaScript, Chakra UI & Firebase",
    projectLink: "https://social-app-clone-jade-kappa.vercel.app/",
    projectGitLink: "https://github.com/Ray541/instagram-clone",
  },
  {
    projectName: "What's App Messaging POC",
    projectType: "Modern Website",
    projectDesc:
      "This is a POC project which I developed in the internship tenure of AntSctack. It's What's App Messaging Module and Admin Panel for the Admin to view all users and handel them. CRUD operations with Firbase Firestore & Storage.",
    projectTechnologies: "Vite-React, JavaScript, Bootstrap-5 & Firebase",
    projectLink: "https://poc-lemon-three.vercel.app/",
    projectGitLink: "https://github.com/Ray541/poc",
  },
  {
    projectName: "Weather App",
    projectType: "Website",
    projectDesc:
      "This is a Weather App which shows the weather that is entered by the User. This project is built using HTML, CSS, and JavaScript. Used OpenWeatherMap API to get the weather of the user desired location from accross the world.",
    projectTechnologies: "HTML, CSS, JavaScript, Bootstrap 5",
    projectLink: "https://weather-app-seven-zeta-88.vercel.app/",
    projectGitLink: "https://github.com/Ray541/weather-app",
  },
];

const Projects = () => {
  return (
    <section id="project" className="flex flex-col items-center justify-center px-5 py-16 gap-5">
      <h2 className="text-6xl font-bold text-gray-800 mb-5">
        My <span className="text-blue-500">Work</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full lg:px-24">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg shadow-md hover:-translate-y-2 transition-all duration-100 ease-in-out border-2 border-gray-500 hover:border-blue-500 flex flex-col flex-wrap items-center justify-between"
          >
            <div>
              <p className="text-4xl font-bold text-blue-500">{project.projectName}</p>
              <p className="text-xl my-4">
                <span>Description</span>: <span className="text-lg">{project.projectDesc}</span>
              </p>
              <p className="text-lg">
                <span className="font-bold">Technologies:</span> {project.projectTechnologies}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-5 mt-5 md:mt-1 lg:mt-0">
              <a
                href={project.projectLink ? project.projectLink : `#`}
                target={project.projectLink ? `_blank` : ``}
                rel="noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-gray-900 transition-colors duration-200 ease-in-out flex items-center justify-center gap-1 font-medium flex items-center justify-center gap-0.5"
              >
                View Project
                <ExpandIcon />
              </a>
              <a
                href={project.projectGitLink ? project.projectGitLink : `#`}
                target={project.projectGitLink ? `_blank` : ``}
                rel="noreferrer"
                className="bg-gray-600 text-white px-4 py-2 rounded shadow hover:bg-gray-900 transition-colors duration-200 ease-in-out flex items-center justify-center gap-1 font-medium flex items-center justify-center gap-0.5"
              >
                <GitHubIcon />
                Git Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
