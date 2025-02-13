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
    <section
      id="experience"
      className="flex flex-col items-center justify-center gap-5 px-5 py-16 bg-gray-50/10 text-gray-900 dark:bg-gray-900 dark:text-gray-200 relative"
    >
      <div className="w-[500px] h-[500px] bg-primary -z-10 absolute blur-3xl opacity-15"></div>
      <h2 className="text-6xl font-bold mb-5">
        My <span className="text-primary">Experience</span>
      </h2>
      <div className="w-full h-full flex items-center justify-center flex-col backdrop-filter backdrop-blur-3xl">
        <div className="max-w-5xl mx-auto">
          <p className="text-xl font-normal mb-5 text-center">
            With a passion for crafting exceptional digital experiences, I have honed my skills in
            web and frontend development through hands-on experience and continuous learning. Below
            is a snapshot of my journey in creating dynamic, user-centric web solutions.
          </p>
          <div className="grid place-content-center grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-8">
            {EXPERIENCE.map((experience, index) => (
              <div
                key={index}
                className="p-4 rounded-xl shadow-md bg-transparent md:col-span-2 lg:col-span-1 hover:scale-105 border-2 border-gray-500 hover:border-primary transition-all duration-200 ease-in-out flex flex-col flex-wrap items-start justify-center gap-1"
              >
                <h3 className="text-2xl font-bold">
                  Role: <span className="text-primary">{experience.role}</span>
                </h3>
                <p className="text-lg font-semibold">
                  Company: <span className="text-primary">{experience.company}</span>
                </p>
                <div className="bg-gray-100/10 dark:bg-gray-900 border-2 border-gray-800/20 dark:border-gray-200/20 p-2 rounded-xl hover:-translate-y-2 transition-all duration-200 ease-in-out mt-3">
                  <h4 className="text-lg font-medium">Tech Stack: </h4>
                  <div className="flex gap-2 items-center justify-center flex-wrap">
                    {experience.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="font-bold bg-transparent border-2 border-gray-800 dark:border-gray-200 hover:border-primary dark:hover:border-primary text-gray-800 dark:text-gray-200 p-2 rounded-sm hover:rounded-md transition-all duration-200 ease-in-out cursor-none flex items-center content-center gap-1.5 hover:scale-95"
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
      </div>
    </section>
  );
};

export default Experience;
