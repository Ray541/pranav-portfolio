import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="p-4">
      <div className="flex flex-col items-center md:flex-row justify-between gap-1">
        <p className="text-2xl flex items-center justify-center gap-1 font-black">
          Developed by <span className="text-blue-600">Ray</span>
          <motion.span
            className="hover:scale-125 transition-all duration-150 ease-in-out"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            ❤️
          </motion.span>
        </p>
        <p className="text-lg md:mt-0">Copyright &copy; {new Date().getFullYear()} Pranav</p>
      </div>
    </footer>
  );
};

export default Footer;
