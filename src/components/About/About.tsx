import { useState } from "react";
import Socials from "../../components/Socials/Socials";
import {
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiGit,
  SiC,
  SiCplusplus,
  SiMysql,
} from "react-icons/si";
import { GoCopy } from "react-icons/go";
import { IoCheckmarkDone } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const WORKINGON = [
  {
    domain: "Frontend",
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
  },
  {
    domain: "Backend",
    technologies: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
    ],
  },
  {
    domain: "Database",
    technologies: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PSQL", icon: <SiPostgresql /> },
    ],
  },
];

const SKILLS = [
  { name: "React", icon: <SiReact /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "CSS 3", icon: <SiCss3 /> },
  { name: "HTML 5", icon: <SiHtml5 /> },
  { name: "Git", icon: <SiGit /> },
  { name: "C / C++", icon: <SiC />, alternateIcon: <SiCplusplus /> },
  { name: "SQL", icon: <SiMysql /> },
];

const EDUCATION = [
  {
    degree: "Bachelors of Technology [B. Tech]",
    college: "Sharad Institute of Technology College of Engineering",
    major: "Computer Science and Engineering",
    passingout: "2023-24",
  },
  {
    degree: "Diploma [Computer Science]",
    college: "Maharashtra State Board of Technical Education",
    major: "Computer Science and Engineering",
    passingout: "2020-21",
  },
];

const About = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = "pranavrao541@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setEmailCopied(true);
        setTimeout(() => {
          setEmailCopied(false);
        }, 3000);
      })
      .catch(err => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-12 px-5 py-16 bg-background text-foreground relative"
    >
      <h2 className="text-5xl font-bold mb-8 text-center text-primary">
        <span className="text-muted-foreground">About</span> Me
      </h2>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Working on */}
        <div className="p-5 rounded-lg border border-border hover:border-primary bg-background flex flex-col items-start gap-6 md:col-span-2 lg:col-span-2">
          <h3 className="text-2xl font-semibold text-primary">Currently Working On</h3>
          <div className="flex flex-row items-center justify-center flex-wrap gap-10">
            {WORKINGON.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-evenly flex-wrap gap-3 border border-border p-2 rounded-lg"
              >
                <h4 className="w-full text-start text-lg font-medium">{category.domain}</h4>
                <div className="flex gap-3 flex-wrap">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="flex items-center gap-2 bg-muted px-4 py-2 rounded-md font-medium text-sm hover:bg-primary hover:text-background transition-all duration-200 ease-in-out cursor-progress"
                    >
                      {tech.icon} {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="p-5 rounded-lg border border-border hover:border-primary bg-background flex flex-col items-start gap-6 md:col-span-1 lg:col-span-1">
          <h3 className="text-2xl font-semibold text-primary">Skills</h3>
          <div className="flex  items-center justify-center gap-4 flex-wrap">
            {SKILLS.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="flex items-center gap-2 border border-border px-4 py-2 rounded-md text-sm font-medium hover:border-primary hover:text-primary hover:bg-muted transition-all duration-200 ease-in-out cursor-crosshair"
              >
                {skill.icon} {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="p-5 rounded-lg border border-border hover:border-primary bg-background flex flex-row items-center justify-evenly flex-wrap gap-6 md:col-span-1 lg:col-span-3">
          <h3 className="text-2xl font-semibold text-primary">Contact</h3>
          <Button variant="default" className="cursor-pointer" onClick={handleCopyEmail}>
            {emailCopied ? <IoCheckmarkDone className="text-xl" /> : <GoCopy className="text-xl" />}
            <span className="tracking-wide">{emailCopied ? "Email Copied" : "Copy Email"}</span>
          </Button>
          <Socials />
        </div>

        {/* Education */}
        <div className="p-5 rounded-lg border border-border hover:border-primary bg-background flex flex-col items-start gap-6 md:col-span-2 lg:col-span-3">
          <h3 className="text-2xl font-semibold text-primary">Education</h3>
          <div className="flex flex-row items-center justify-center gap-4">
            {EDUCATION.map((education, index) => (
              <div key={index} className="flex flex-col gap-2 border border-border p-2 rounded-lg">
                <p className="text-lg font-semibold">
                  <span className="text-primary">{education.degree}</span> at{" "}
                  <span className="">{education.college}</span>
                </p>
                <p className="text-sm">
                  Major: {education.major} | Passing Year: {education.passingout}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
