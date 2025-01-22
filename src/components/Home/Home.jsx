// import pranavImage from "/assets/Name1.png";
import resume from "/assets/Pranav's_Resume.pdf";
// Components
import Socials from "../Socials";
import { BiSolidMouse } from "react-icons/bi";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";

const Home = () => {
  const introTitleInitial = { opacity: 0, y: -20 };
  const introTitleAnimate = { opacity: 1, y: 0 };
  const introTitleTransition = { duration: 1, ease: "circInOut" };

  const introSubTitleInitial = { opacity: 0, y: 20 };
  const introSubTitleAnimate = { opacity: 1, y: 0 };
  const introSubTitleTransition = { duration: 1, ease: "circInOut" };

  // const introNameInitial = { opacity: 0 };
  // const introNameAnimate = { opacity: 1 };
  // const introNameTransition = { duration: 1, ease: "circInOut" };

  const introScrollIconInitial = { opacity: 0, top: -100 };
  const introScrollIconAnimate = { opacity: 1, top: 0 };
  const introScrollIconTransition = { duration: 1, ease: "circInOut" };

  const nameHoverCursorType = {
    type: "hover",
    width: "100px",
    height: "100px",
    className: "border-gray-500 backdrop-blur-none bg-gray-800/10",
  };

  const roleAndTechHoverCursorType = {
    type: "hover",
    width: "50px",
    height: "50px",
    className: "border-gray-400 backdrop-blur-none bg-gray-800/10",
  };

  const buttonHoverCursorType = {
    type: "hover",
    width: "17px",
    height: "10px",
    className: "border-gray-200",
  };

  return (
    <section
      id="home"
      className="h-dvh flex items-center justify-center md:gap-10 lg:gap-0 md:justify-evenly flex-wrap md:flex- bg-gray-200/30 text-gray-900 dark:bg-gray-900 dark:text-gray-200"
    >
      <div className="w-[200px] h-[200px] rounded-full bg-primary -z-10 absolute top-10 left-0 blur-3xl opacity-90"></div>
      <div className="w-[150px] h-[150px] rounded-full bg-primary -z-10 absolute bottom-20 right-0 blur-3xl opacity-50"></div>
      <div className="w-full max-w-7xl">
        <motion.div
          initial={introScrollIconInitial}
          animate={introScrollIconAnimate}
          transition={introScrollIconTransition}
          className="hidden absolute right-10 z-10 lg:flex lg:items-center lg:justify-center lg:flex-col lg:gap-1"
        >
          <div className="w-[1px] h-5 bg-gray-400 dark:bg-gray-400"></div>
          <BiSolidMouse className="text-xl text-gray-700 dark:text-gray-100" />
          <div className="w-[1px] h-8 bg-gray-400 dark:bg-gray-400"></div>
        </motion.div>
        {/* <motion.div
          initial={introNameInitial}
          animate={introNameAnimate}
          transition={introNameTransition}
          className="hidden sm:block sm:w-48 overflow-hidden absolute z-10 bottom-3 left-0 sm:left-10 hover:scale-90 transition-all duration-150"
        >
          <img
            className="w-[100%] h-[100%] backdrop-filter drop-shadow-lg"
            src={pranavImage}
            alt=""
          />
        </motion.div> */}
        <div className="w-full h-full flex items-center justify-center p-3 md:p-0">
          <div className="flex items-center justify-center flex-col flex-wrap text-center lg:text-start gap-2 sm:gap-1 lg:w-3/4">
            <motion.h1
              initial={introTitleInitial}
              animate={introTitleAnimate}
              transition={introTitleTransition}
              className="text-4xl font-semibold text-gray-800 dark:text-gray-200 md:text-6xl lg:text-7xl"
            >
              Hi, I'm{" "}
              <span
                className="font-black text-primary text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                data-cursor={JSON.stringify(nameHoverCursorType)}
              >
                Pranav Rao
              </span>
              .
            </motion.h1>

            <motion.div
              initial={introSubTitleInitial}
              animate={introSubTitleAnimate}
              transition={introSubTitleTransition}
              className="flex flex-col items-center justify-center"
            >
              <p className="text-center text-lg font-semibold mt-1">
                Passionate{" "}
                <span
                  className="font-bold text-primary text-xl"
                  data-cursor={JSON.stringify(roleAndTechHoverCursorType)}
                >
                  Frontend Developer
                </span>{" "}
                started my carrier in Web Dev. I specialize in using{" "}
                <span
                  className="font-bold text-primary text-xl"
                  data-cursor={JSON.stringify(roleAndTechHoverCursorType)}
                >
                  React.js
                </span>{" "}
                to build modern, dynamic and efficient websites.
              </p>
              <a
                href={resume}
                target="_blank"
                className="bg-gray-700 dark:bg-gray-700 hover:bg-primary dark:hover:bg-primary text-white font-bold py-2 px-4 rounded mt-5 transition-all duration-50 flex items-center justify-center gap-1 shadow-md max-w-fit active:scale-95 mb-5"
                data-cursor={JSON.stringify(buttonHoverCursorType)}
              >
                <MdOutlineFileDownload className="text-xl" />
                <span className="tracking-wide">Download CV</span>
              </a>
              <Socials />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
