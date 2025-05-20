import Section from "../Section/Section";
import { HiExternalLink } from "react-icons/hi";
import { RxLink2 } from "react-icons/rx";
import { Button } from "../ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";

const PROJECTS = [
  {
    projectName: "Pollify",
    projectDesc:
      "A full-stack real-time polling web application where users can effortlessly create polls, vote on them, and manage their existing polls. Built with React for a dynamic UI, Tailwind CSS for responsive styling, and Firebase for real-time database and authentication.",
    projectTechnologies: "React + Tailwind CSS + Firebase",
    projectLink: "https://pollify-sable.vercel.app/",
    projectGitLink: "https://github.com/Ray541/pollify",
    highlights: [
      "Real-time vote updates using Firebase Realtime Database",
      "User authentication with protected routes",
      "Poll creation and result tracking",
      "Tailwind-based responsive and mobile-first design",
    ],
  },
  {
    projectName: "Instagram Clone",
    projectDesc:
      "A feature-rich clone of Instagram focused on replicating essential social media functionality. Built with React, Chakra UI for accessible and composable UI components, and Firebase for storage, authentication, and Firestore.",
    projectTechnologies: "React + Chakra UI + Firebase",
    projectLink: "https://social-app-clone-jade-kappa.vercel.app/",
    projectGitLink: "https://github.com/Ray541/instagram-clone",
    highlights: [
      "User authentication and account management",
      "Image uploads with preview and Firebase storage",
      "Follow system, post likes, and real-time comments",
      "Dark/light mode toggle with Chakra UI theming",
    ],
  },
  {
    projectName: "WhatsApp POC",
    projectDesc:
      "A proof-of-concept for a messaging platform featuring an admin panel and chat interface, simulating WhatsApp-like functionality. Developed using React, Styled Components for scoped styling, and Firebase for real-time chat support and data handling.",
    projectTechnologies: "React + Styled Components + Firebase",
    projectLink: "https://poc-lemon-three.vercel.app/",
    projectGitLink: "https://github.com/Ray541/poc",
    highlights: [
      "Admin panel for user and message management",
      "Real-time chat messaging Firebase Firestore",
      "Styled Components for scoped, theme-based styles",
      "Clean and modular component architecture",
    ],
  },
  {
    projectName: "Weather App",
    projectDesc:
      "A clean and functional weather application that allows users to search for the current weather in any city using the OpenWeatherMap API. Designed with HTML, CSS, Bootstrap, and JavaScript, this project demonstrates API integration and responsive UI without any frameworks.",
    projectTechnologies: "HTML + CSS + Bootstrap + JavaScript",
    projectLink: "https://weather-app-seven-zeta-88.vercel.app/",
    projectGitLink: "https://github.com/Ray541/weather-app",
    highlights: [
      "Search-based weather results using OpenWeatherMap API",
      "Responsive UI built with Bootstrap",
      "Simple, lightweight and framework-free implementation",
      "Graceful error handling for invalid city queries",
    ],
  },
];

const Projects = () => {
  return (
    <Section sectionName="project" className="py-20 px-3 h-full">
      <h2 className="text-6xl font-bold text-center mb-10">
        My <span className="text-muted">Work</span>
      </h2>

      <Accordion type="single" collapsible className="w-full space-y-5">
        {PROJECTS.map((project, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="overflow-hidden">
            <AccordionTrigger className="text-2xl font-black rounded-none px-4 py-3 hover:bg-accent active:bg-accent focus:bg-accent">
              {project.projectName}
            </AccordionTrigger>
            <AccordionContent className="bg-muted/10 px-5 py-4 space-y-3">
              <p className="text-lg">{project.projectDesc}</p>

              {project.highlights?.length > 0 && (
                <ul className="list-disc list-inside text-md mt-2 space-y-1 text-muted-foreground">
                  {project.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}

              <div className="text-xs inline-block bg-foreground text-background px-3 py-1 rounded-md border border-primary">
                {project.projectTechnologies}
              </div>

              <div className="flex gap-4 mt-2">
                <Button asChild variant="ghost" className="text-sm">
                  <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                    View Project <HiExternalLink className="ml-1 inline" />
                  </a>
                </Button>

                <Button asChild variant="link" className="text-sm">
                  <a href={project.projectGitLink} target="_blank" rel="noopener noreferrer">
                    View Repo <RxLink2 className="ml-1 inline" />
                  </a>
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};

export default Projects;
