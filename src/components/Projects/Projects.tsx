import Section from "../Section/Section";
import { Button } from "../ui/button";

const PROJECTS = [
  {
    projectName: "Pollify",
    projectDesc: "Create, vote & manage polls.",
    projectTechnologies: "React + Tailwind CSS + Firebase",
    projectLink: "https://pollify-sable.vercel.app/",
    projectGitLink: "https://github.com/Ray541/pollify",
  },
  {
    projectName: "Weather App",
    projectDesc: "Weather search via OpenWeatherMap API.",
    projectTechnologies: "HTML + CSS + JS + Bootstrap",
    projectLink: "https://weather-app-seven-zeta-88.vercel.app/",
    projectGitLink: "https://github.com/Ray541/weather-app",
  },
  {
    projectName: "WhatsApp POC",
    projectDesc: "Admin panel + chat module.",
    projectTechnologies: "React + Firebase",
    projectLink: "https://poc-lemon-three.vercel.app/",
    projectGitLink: "https://github.com/Ray541/poc",
  },
  {
    projectName: "Instagram Clone",
    projectDesc: "Clone with account features.",
    projectTechnologies: "React + Chakra UI + Firebase",
    projectLink: "https://social-app-clone-jade-kappa.vercel.app/",
    projectGitLink: "https://github.com/Ray541/instagram-clone",
  },
];

const Projects = () => {
  return (
    <Section sectionName="project" className="py-20 px-3 h-full">
      <h2 className="text-6xl font-bold text-center mb-10">
        My <span className="text-muted">Work</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full overflow-hidden">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            tabIndex={0}
            className="relative group bg-background border border-secondary rounded-xl h-72 w-full transition-all shadow-lg hover:shadow-xl hover:bg-accent/20 focus-within:shadow-xl"
          >
            <Button
              asChild
              variant="default"
              className="absolute top-5 left-5 text-sm opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 group-active:opacity-100 transition-opacity duration-300 z-10"
            >
              <a
                href={project.projectLink}
                aria-label={`View ${project.projectName} project`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </Button>

            <Button
              asChild
              variant="link"
              className="absolute bottom-5 right-5 text-sm opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 group-active:opacity-100 transition-opacity duration-300 z-10"
            >
              <a
                href={project.projectGitLink}
                aria-label={`View ${project.projectName} GitHub repository`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repo
              </a>
            </Button>

            <div className="absolute bottom-3 left-3 px-3 py-2 bg-foreground text-background border border-primary text-xs rounded-md z-10">
              {project.projectTechnologies}
            </div>

            <div className="flex h-full items-center justify-center">
              <h3 className="text-2xl md:text-4xl font-black text-primary tracking-wider">
                {project.projectName}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
