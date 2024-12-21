// import pranavImage from "../../assets/pranav.jpg";
import resume from "../../assets/Pranav's_Resume.pdf";
import { SiLinkedin, SiGithub, SiFacebook, SiInstagram } from "react-icons/si";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";

const Home = () => {
  const introTitleInitial = { opacity: 0, y: -20 };
  const introTitleAnimate = { opacity: 1, y: 0 };
  const introTitleTransition = { duration: 1, ease: "circInOut" };

  const introSubTitleInitial = { opacity: 0, y: 20 };
  const introSubTitleAnimate = { opacity: 1, y: 0 };
  const introSubTitleTransition = { duration: 1, ease: "circInOut" };

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center md:gap-10 lg:gap-0 md:justify-evenly flex-wrap p-3 md:flex- bg-gray-200/30 text-gray-900 dark:bg-gray-900 dark:text-gray-200"
    >
      <div className="flex items-center justify-center flex-col flex-wrap text-center lg:text-start gap-2 sm:gap-1 lg:w-3/4">
        <motion.h1
          initial={introTitleInitial}
          animate={introTitleAnimate}
          transition={introTitleTransition}
          className="text-4xl font-semibold text-gray-800 dark:text-gray-200 md:text-6xl lg:text-7xl"
        >
          Hi, I'm{" "}
          <span className="font-black text-blue-600 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Pranav Rao
          </span>
          .
        </motion.h1>
        {/* <h2 className="text-2xl font-semibold text-gray-700 md:text-3xl lg:text-4xl">
          I am a <span className="text-5xl font-bold text-blue-600">Frontend Web Developer</span>
        </h2> */}

        <motion.div
          initial={introSubTitleInitial}
          animate={introSubTitleAnimate}
          transition={introSubTitleTransition}
          className="flex flex-col items-center justify-center"
        >
          <p className="text-center text-lg font-semibold mt-1">
            Passionate <span className="font-bold text-blue-600 text-xl">Frontend Developer</span>{" "}
            started my carrier in Web Dev. I specialize in using{" "}
            <span className="font-bold text-blue-600 text-xl">React.js</span> to build modern,
            dynamic and efficient websites.
          </p>
          <div className="flex items-center justify-center lg:block">
            <a
              href={resume}
              target="_blank"
              className="bg-gray-700 dark:bg-gray-700 hover:bg-blue-700 dark:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 transition-all duration-50 flex items-center justify-center gap-1 shadow-md max-w-fit cursor-pointe active:scale-95r"
            >
              <MdOutlineFileDownload className="text-xl" />
              <span className="tracking-wide">Download CV</span>
            </a>
          </div>
          <div className="mt-5 flex gap-6 items-center justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com/in/pranav-rao-09a79b231/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700"
            >
              <SiLinkedin className="text-xl" />
            </a>
            <a
              href="https://github.com/Ray541"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700"
            >
              <SiGithub className="text-xl" />
            </a>
            <a
              href="https://www.facebook.com/pranav.rao.338"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700"
            >
              <SiFacebook className="text-xl" />
            </a>
            <a
              href="https://www.instagram.com/pranav_rao0504"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700"
            >
              <SiInstagram className="text-xl" />
            </a>
          </div>
        </motion.div>
      </div>
      {/* <motion.div
        className="hidden md:block w-[300px] lg:w-[450px] overflow-hidden"
        animate={{ y: [5, -5, 5], x: [5, -5, 0, -5, 5] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <img className="w-full h-full" src={pranavImage} alt="Pranav" />
      </motion.div> */}
    </section>
  );
};

export default Home;
