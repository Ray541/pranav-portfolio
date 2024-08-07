import pranavImage from "../../assets/pranav.jpg";
import resume from "../../assets/Pranav's_Resume.pdf";
import { LinkedInIcon, GitHubIcon, FacebookIcon, InstagramIcon } from "../../assets/constants";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center md:gap-10 lg:gap-0 md:justify-evenly flex-wrap p-3 md:flex-row"
    >
      <div className="flex justify-center flex-col flex-wrap text-center lg:text-start gap-2 sm:gap-1">
        <h1 className="text-4xl font-semibold md:text-6xl lg:text-7xl">
          Hi, I'm{" "}
          <span className="font-black text-blue-600 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Pranav Rao
          </span>
          .
        </h1>
        <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
          I am a <span className="font-bold text-blue-600">Frontend Web Developer !!</span>
        </h2>
        <p className="text-lg mt-1">Passionate frontend developer started my carrier in Web Dev.</p>
        <p className="text-lg">
          I specialize in using <span className="font-bold text-blue-600 text-xl">React.js</span> to
          build modern, dynamic and efficient websites.
        </p>
        <div className="flex items-center justify-center lg:block">
          <a
            href={resume}
            target="_blank"
            className="bg-gray-900 dark:bg-gray-950 hover:bg-blue-700 dark:hover:bg-blue-700 focus:bg-blue-700 dark:focus:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 transition-all duration-50 flex items-center justify-center gap-1 shadow-md hover:translate-y-1 max-w-fit cursor-pointer"
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span className="tracking-wide">Download CV</span>
          </a>
        </div>
        <div className="mt-5 flex gap-5 items-center justify-center lg:justify-start">
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
      <motion.div
        className="hidden sm:block w-[300px] lg:w-[450px] overflow-hidden"
        animate={{ y: [0, -5, 0], x: [5, -5, 0, -5, 5] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <img className="w-full h-full" src={pranavImage} alt="Pranav" />
      </motion.div>
    </section>
  );
};

export default Home;
