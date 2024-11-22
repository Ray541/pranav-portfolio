import {
  SiReact,
  SiJavascript,
  SiMui,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiPostgresql,
  SiTypescript,
  SiFirebase,
  SiSupabase,
  SiGit,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiMysql,
  SiWordpress,
} from "react-icons/si";

const EXPERIENCE = [
  {
    role: "Junior Frontend Web Developer",
    company: "Geopage Consultants (Bengaluru)",
    tech: [
      { icon: <SiReact />, name: "React.js" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiMui />, name: "MUI" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiBootstrap />, name: "Bootstrap" },
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
    ],
  },
  {
    role: "Frontend Web Developer Intern",
    company: "AntStack | Fullstack Serverless Consulting Company (Bengaluru)",
    tech: [
      { icon: <SiReact />, name: "React.js" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiFirebase />, name: "Firebase" },
      { icon: <SiSupabase />, name: "Supabase" },
      { icon: <SiGit />, name: "Git" },
    ],
  },
  {
    role: "Full Stack Web Developer Intern",
    company: "techEnvision (Kolhapur)",
    tech: [
      { icon: <SiHtml5 />, name: "HTML" },
      { icon: <SiCss3 />, name: "CSS" },
      { icon: <SiBootstrap />, name: "Bootstrap-5" },
      { icon: <SiPhp />, name: "PHP" },
      { icon: <SiMysql />, name: "SQL" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiWordpress />, name: "WordPress" },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="flex flex-col items-center justify-center px-5 py-16 gap-5">
      <h2 className="text-6xl font-bold mb-5">
        My <span className="text-blue-500">Experience</span>
      </h2>
      <div className="max-w-5xl mx-auto">
        <p className="text-xl mb-5 text-center">
          With a passion for crafting exceptional digital experiences, I have honed my skills in web
          and frontend development through hands-on experience and continuous learning. Below is a
          snapshot of my journey in creating dynamic, user-centric web solutions.
        </p>
        <div className="grid place-content-center grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-8">
          {EXPERIENCE.map((experience, index) => (
            <div
              key={index}
              className="p-4 rounded-lg shadow-md bg-transparent dark:bg-gray-900 md:col-span-2 lg:col-span-1 hover:scale-105 border-2 border-gray-500 hover:border-blue-500 transition-all duration-200 ease-in-out flex flex-col flex-wrap items-start justify-center gap-3"
            >
              <h3 className="text-2xl font-semibold">
                Role: <span className="text-blue-500">{experience.role}</span>
              </h3>
              <p className="text-xl font-medium">
                Company: <span className="text-blue-500">{experience.company}</span>
              </p>
              <div className="bg-gray-200 dark:bg-gray-900 border border-gray-800/20 dark:border-gray-200/20 p-2 rounded-md hover:-translate-y-2 transition-all duration-200 ease-in-out mt-3">
                <h4 className="text-xl font-medium">Tech Stack: </h4>
                <div className="flex gap-2 items-center justify-center flex-wrap">
                  {experience.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-gray-100 p-2 rounded-md hover:bg-blue-500 transition-all duration-200 ease-in-out cursor-default flex items-center content-center gap-1.5"
                    >
                      {tech.icon} {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
