const EXPERIENCE = [
  {
    role: "Junior Frontend Web Developer",
    company: "Geopage Consultants (Bengaluru)",
    // description:
    //   "At Geopage Consultants, I focus on frontend development using (React.js, TypeScript, JavaScript, MUI, Tailwind CSS, etc.) and handle backend tasks with (Node.js and PGSQL). My role involves contributing to projects that integrate web development with civil engineering.",
    tech: ["React.js", "JavaScript", "MUI", "Tailwind CSS", "Bootstrap", "Node.js", "PostgreSQL"],
  },
  {
    role: "Frontend Web Developer Intern",
    company: "AntStack | Fullstack Serverless Consulting Company (Bengaluru)",
    // description:
    //   "During my internship at AntStack, I worked on frontend development with (React.js, TypeScript, and Tailwind CSS) and participated in [POC] and a major project. I also gained experience with Firebase and Supabase for backend and database management tasks.",
    tech: ["React.js", "JavaScript", "TypeScript", "Tailwind CSS", "Firebase", "Supabase", "Git"],
  },
  {
    role: "Full Stack Web Developer Intern",
    company: "techEnvision (Kolhapur)",
    // description:
    //   "At techEnvision, I worked on both frontend (HTML, CSS, Bootstrap-5) and backend (PHP, SQL) technologies. I contributed to three projects and enhanced my skills in advanced JavaScript and WordPress. It was a great learning experience.",
    tech: ["HTML", "CSS", "Bootstrap-5", "PHP", "SQL", "JavaScript", "WordPress"],
  },
  //   {
  //     role: "Web Developer Intern",
  //     company: "Aphron Software (Sangli)",
  //     description:
  //       "My role at Aphron Software involved frontend (HTML, CSS, JavaScript) development. I worked on two group projects, focusing on basic JavaScript and collaborative development.",
  //     tech: ["HTML", "CSS", "JavaScript"],
  //   },
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
              className="p-4 rounded-lg shadow-md bg-transparent dark:bg-gray-800 md:col-span-2 lg:col-span-1 hover:scale-105 border-2 border-gray-500 hover:border-blue-500 transition-all duration-200 ease-in-out flex flex-col flex-wrap items-start justify-center gap-3"
            >
              <h3 className="text-2xl font-semibold">
                Role: <span className="text-blue-500">{experience.role}</span>
              </h3>
              <p className="text-xl font-medium">
                Company: <span className="text-blue-500">{experience.company}</span>
              </p>
              {/* <p className="flex flex-col bg-gray-100 dark:bg-gray-900 p-2 rounded-lg gap-1.5 shadowt text-lg">
                  {experience.description}
                </p> */}
              <div className="flex gap-2 items-center justify-center flex-wrap">
                {experience.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-950 text-gray-100 p-2 rounded-md hover:bg-blue-500 transition-all duration-200 ease-in-out cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
