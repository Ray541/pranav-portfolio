// import pranavImage from "../../assets/pranav.jpg";
// import resume from "../../assets/Pranav's_Resume.pdf";
// import { LinkedInIcon, GitHubIcon, FacebookIcon, InstagramIcon } from "../../assets/constants";
// import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="flex flex-col items-center justify-center p-5">
      {/* <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="p-4 border rounded-lg shadow-md bg-whit md:col-span-2 lg:col-span-2 hover:scale-105 border-2 border-gray-500 hover:border-gray-800 transition-all duration-200 ease-in-out">
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <div>
            <p>Bachelor of Technology in Computer Science</p>
            <p>University Name</p>
            <p>Graduation Year</p>
          </div>
        </div>
        <div className="p-4 border rounded-lg shadow-md bg-white md:col-span-2 lg:col-span-1 hover:scale-105 border-2 border-gray-500 hover:border-gray-800 transition-all duration-200 ease-in-out">
          <h3 className="text-xl font-semibold mb-2">Skills</h3>
          <div className="flex items-center justify-center flex-wrap gap-3">
            <span className="bg-gray-800 text-gray-100 p-2 rounded-md">React</span>
            <span className="bg-gray-800 text-gray-100 p-2 rounded-md">JavaScript</span>
            <span className="bg-gray-800 text-gray-100 p-2 rounded-md">TypeScript</span>
            <span className="bg-gray-800 text-gray-100 p-2 rounded-md">Tailwind CSS</span>
            <span className="bg-gray-800 text-gray-100 p-2 rounded-md">Bootstrap</span>
            <span className="bg-gray-800 text-gray-100 p-2 rounded-md">CSS 3</span>
            <span className="bg-gray-800 text-gray-100 p-2 rounded-md">HTML 5</span>
          </div>
        </div>
        <div className="p-4 border rounded-lg shadow-md bg-white md:col-span-2 lg:col-span-3 hover:scale-105 border-2 border-gray-500 hover:border-gray-800 transition-all duration-200 ease-in-out">
          <h3 className="text-xl font-semibold mb-2">Working On</h3>
          <ul className="list-disc list-inside">
            <li>Personal Portfolio Website</li>
            <li>Open Source Contributions</li>
            <li>Learning Next.js</li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg shadow-md bg-white col-span-1 md:col-span-2 lg:col-span-3 hover:scale-105 border-2 border-gray-500 hover:border-gray-800 transition-all duration-200 ease-in-out">
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <p>
            If you want to reach out to me, feel free to send an email to{" "}
            <a href="mailto:pranavrao541@gmail.com" className="text-blue-500 underline">
              pranavrao541@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
