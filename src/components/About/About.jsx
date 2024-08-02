import { useState } from "react";
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  CopyIcon,
  TickIcon,
} from "../../assets/constants";

const WORKINGON = [
  { domain: "Frontend", technologies: ["Next.js", "Redux", "TypeScript"] },
  { domain: "Backend", technologies: ["Node.js", "Express.js"] },
  { domain: "Database", technologies: ["MongoDB", "PSQL"] },
];

const SKILLS = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Bootstrap",
  "CSS 3",
  "HTML 5",
  "Git",
  "C / C++",
  "SQL",
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
    <section id="about" className="flex flex-col items-center justify-center px-5 py-16 gap-5">
      <h2 className="text-6xl font-bold text-gray-800 mb-5">
        <span className="text-blue-500">About</span> Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Working on */}
        <div className="p-4 rounded-lg shadow-md bg-white md:col-span-2 lg:col-span-2 hover:scale-105 border-2 border-gray-500 hover:border-blue-500 transition-all duration-200 ease-in-out flex flex-col flex-wrap items-start justify-center gap-3">
          <h3 className="text-2xl font-black mb-2 text-blue-500">Working On</h3>
          <div className="w-full flex items-center justify-center flex-col gap-5 sm:flex-row sm:justify-around">
            {WORKINGON.map((workingon, index) => (
              <div
                key={`${workingon.domain}-${index}`}
                className="flex flex-col bg-gray-100 p-2 rounded-lg gap-1.5 shadow hover:-translate-y-2 transition-all duration-200 ease-in-out"
              >
                <h1 className="text-xl font-medium">{workingon.domain}</h1>
                <div className="flex gap-2 items-center justify-center flex-wrap">
                  {workingon.technologies.map((tech, techIndex) => (
                    <span
                      key={`${workingon.domain}-${tech}-${techIndex}`}
                      className="bg-gray-900 text-gray-100 p-2 rounded-md hover:bg-blue-500 transition-all duration-200 ease-in-out cursor-progress"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <h1 className="text-lg font-medium">
            I am working on the these technologies. Aim - to become a Fullstack Developer.
          </h1>
        </div>

        {/* Skills */}
        <div className="p-4 rounded-lg shadow-md bg-white md:col-span-2 lg:col-span-1 hover:scale-105 border-2 border-gray-500 hover:border-blue-500 transition-all duration-200 ease-in-out flex items-start justify-center flex-col gap-1">
          <h3 className="text-2xl font-black mb-2 text-blue-500">Skills</h3>
          <div className="flex items-center justify-center flex-wrap gap-3">
            {SKILLS.map((skill, skillIndex) => (
              <span
                key={`${skill}-${skillIndex}`}
                className="bg-gray-800 text-gray-100 p-2 rounded-md hover:bg-blue-500 transition-all duration-200 ease-in-out cursor-crosshair"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="p-4 rounded-lg shadow-md bg-white md:col-span-2 lg:col-span-3 hover:scale-105 border-2 border-gray-500 hover:border-blue-500 transition-all duration-200 ease-in-out">
          <h3 className="text-2xl font-black mb-2 text-blue-500">Education</h3>
          <div className="flex items-start justify-center flex-col gap-5 sm:flex-row sm:justify-around">
            {EDUCATION.map((education, index) => (
              <div
                key={`${education.degree}-${index}`}
                className="bg-gray-100 p-2 md:p-3 rounded-lg shadow hover:-translate-y-2 transition-all duration-200 ease-in-out"
              >
                <p className="text-xl text-blue-700 font-semibold">
                  Degree:{" "}
                  <span className="text-lg text-gray-900 font-medium">{education.degree}</span>
                </p>
                <p className="text-xl text-blue-700 font-semibold">
                  College:{" "}
                  <span className="text-lg text-gray-900 font-medium">{education.college}</span>
                </p>
                <p className="text-xl text-blue-700 font-semibold">
                  Major:{" "}
                  <span className="text-lg text-gray-900 font-medium">{education.major}</span>
                </p>
                <p className="text-xl text-blue-700 font-semibold">
                  Passing Year:
                  <span className="text-lg text-gray-900 font-medium">{education.passingout}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="p-4 rounded-lg shadow-md bg-white md:col-span-2 lg:col-span-3 hover:scale-105 border-2 border-gray-500 hover:border-blue-500 transition-all duration-200 ease-in-out flex items-center justify-evenly flex-wrap gap-5 sm:justify-around">
          <h3 className="text-2xl font-black text-blue-500">Contact</h3>
          <button
            className="bg-gray-900 hover:bg-blue-700 focus:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-50 flex items-center justify-center gap-1 shadow-md max-w-fit cursor-pointer"
            onClick={handleCopyEmail}
          >
            {emailCopied ? <TickIcon /> : <CopyIcon />}{" "}
            <span>{emailCopied ? "Copied!" : "Copy Email"}</span>
          </button>
          <div className="flex gap-5 items-center justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com/in/pranav-rao-09a79b231/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 focus:text-blue-700"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/Ray541"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 focus:text-blue-700"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.facebook.com/pranav.rao.338"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 focus:text-blue-700"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/pranav_rao0504"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 focus:text-blue-700"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
