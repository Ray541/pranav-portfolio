import { useState } from "react";
// Components
import Socials from "../Socials";
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
import { GiGraduateCap } from "react-icons/gi";
import { motion } from "framer-motion";

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
    degree: "Bachelors of Technology",
    college: "Sharad Institute of Technology College of Engineering",
    major: "Computer Science and Engineering",
    passingout: "2023-24",
  },
  {
    degree: "Diploma",
    college: "Maharashtra State Board of Technical Education",
    major: "Computer Science and Engineering",
    passingout: "2020-21",
  },
];

const About = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const buttonHoverCursorType = {
    type: "hover",
    className: "border-4 border-gray-200 dark:border-gray-200 avtive:border backdrop-blur-none",
  };

  const handleCopyEmail = () => {
    const email = "pranavrao541@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        console.log("Email copied to clipboard successfully!");
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
      className="flex flex-col items-center justify-center gap-5 px-5 py-16 bg-gray-50/10 text-gray-900 dark:bg-gray-900 dark:text-gray-200 relative"
    >
      <h2 className="text-6xl font-bold mb-5">
        <span className="text-primary">About</span> Me
      </h2>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Working on */}
        <motion.div
          className="p-4 rounded-sm shadow-md bg-transparent dark:bg-gray-900 md:col-span-2 lg:col-span-2 border-2 border-gray-500 hover:border-primary transition-all duration-200 ease-in-out flex flex-col flex-wrap items-start justify-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-black mb-2 text-primary">Working On</h3>
          <div className="w-full flex items-center justify-center flex-col gap-5 sm:flex-row sm:justify-around">
            {WORKINGON.map((workingon, index) => (
              <motion.div
                key={`${workingon.domain}-${index}`}
                className="flex flex-col bg-transparent dark:bg-gray-800 border-2 border-gray-800/20 dark:border-gray-200/20 p-2 rounded-sm gap-1.5 shadow hover:shadow-lg"
                whileHover={{ translateY: -5 }}
              >
                <h1 className="text-lg font-medium dark:text-gray-100">{workingon.domain}</h1>
                <div className="flex gap-2 items-center justify-center flex-wrap">
                  {workingon.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={`${workingon.domain}-${tech.name}-${techIndex}`}
                      className="font-bold bg-gray-700 text-gray-100 p-2 rounded-sm hover:bg-primary transition-all duration-200 ease-in-out cursor-progress flex items-center gap-1.5"
                      whileHover={{ scale: 0.9 }}
                    >
                      {tech.icon} {tech.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <h1 className="text-lg font-medium">
            I am working on the these technologies. Aim - to become a Fullstack Developer.
          </h1>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="p-4 rounded-sm shadow-xl bg-transparent dark:bg-gray-900 md:col-span-1 lg:col-span-1 border-2 border-gray-500 hover:border-primary transition-all duration-200 ease-in-out flex items-start justify-center flex-col gap-1"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-black mb-2 text-primary">Skills</h3>
          <div className="flex items-center justify-center flex-wrap gap-3">
            {SKILLS.map((skill, skillIndex) => (
              <motion.span
                key={`${skill.name}-${skillIndex}`}
                className="font-bold bg-transparent border-2 border-primary hover:border-gray-800 dark:hover:border-gray-200 text-gray-800 hover:text-primary dark:text-gray-200 dark:hover:text-primary p-2 rounded-sm transition-all duration-200 ease-in-out cursor-crosshair flex items-center gap-1.5"
                whileHover={{ scale: 0.9 }}
              >
                {skill.icon} {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          className="p-4 rounded-sm shadow-xl bg-transparent dark:bg-gray-900 md:col-span-1 lg:col-span-3 border-2 border-gray-500 hover:border-primary transition-all duration-200 ease-in-out flex items-center justify-evenly flex-wrap gap-5 sm:justify-around"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-black text-primary">Contact</h3>
          <motion.button
            className="bg-gray-700 hover:bg-primary text-gray-200 font-semibold py-2 px-4 rounded-sm flex items-center justify-center gap-1 max-w-fit active:scale-95 cursor-none"
            onClick={handleCopyEmail}
            data-cursor={JSON.stringify(buttonHoverCursorType)}
            whileTap={{ scale: 0.95 }}
          >
            {emailCopied ? <IoCheckmarkDone className="text-xl" /> : <GoCopy className="text-xl" />}{" "}
            <span className="tracking-wide">{emailCopied ? "Email Copied" : "Copy Email"}</span>
          </motion.button>
          <Socials />
        </motion.div>

        {/* Education */}
        <motion.div
          className="p-4 rounded-sm shadow-md bg-transparent dark:bg-gray-900 md:col-span-2 lg:col-span-3 border-2 border-gray-500 hover:border-primary transition-all duration-200 ease-in-out flex flex-col gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-black mb-2 text-primary">Education</h3>
          <div className="flex items-start justify-center flex-col gap-5 sm:flex-row sm:justify-around">
            {EDUCATION.map((education, index) => (
              <motion.div
                key={`${education.degree}-${index}`}
                className="bg-gray-100/10 dark:bg-gray-800 border-2 border-gray-800/20 dark:border-gray-200/20 p-2 md:p-3 rounded-sm shadow hover:shadow-lg"
                whileHover={{ translateY: -5 }}
              >
                <p className="text-xl text-primary font-semibold flex gap-1">
                  Degree:{" "}
                  <span className="text-lg text-gray-900 dark:text-gray-100 font-medium">
                    {education.degree}
                  </span>
                  <GiGraduateCap className="text-2xl text-primary" />
                </p>
                <p className="text-xl text-primary font-semibold">
                  College:{" "}
                  <span className="text-lg text-gray-900 dark:text-gray-100 font-medium">
                    {education.college}
                  </span>
                </p>
                <p className="text-xl text-primary font-semibold">
                  Major:{" "}
                  <span className="text-lg text-gray-900 dark:text-gray-100 font-medium">
                    {education.major}
                  </span>
                </p>
                <p className="text-xl text-primary font-semibold">
                  Passing Year:{" "}
                  <span className="text-lg text-gray-900 dark:text-gray-100 font-medium">
                    {education.passingout}
                  </span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
