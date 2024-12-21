import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="p-4 bg-gray-50/10 text-gray-900 dark:bg-gray-900 dark:text-gray-200">
      <div className="flex flex-col items-center md:flex-row justify-between gap-1">
        <p className="text-2xl flex items-center justify-center gap-1">
          Developed by <span className="text-blue-600">Pranav</span>
          <motion.span
            className="hover:scale-125 transition-all duration-150 ease-in-out"
            animate={{
              scale: [0.5, 1.25, 1],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              delay:0.5
            }}
          >
            ❤️
          </motion.span>
        </p>
        <p className="text-blue-500 font-semibold">{time.toLocaleTimeString()}</p>
        <p className="text-lg md:mt-0">Copyright &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
