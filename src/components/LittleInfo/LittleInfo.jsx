import { motion } from "framer-motion";
const LittleInfo = () => {
  return (
    <section
      id="project"
      className="px-5 py-5 text-3xl cursor-none bg-gray-100 dark:bg-gray-900 dark:border-t-2 dark:border-b-2"
    >
      <motion.div
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex items-center justify-center gap-5"
      >
        <p className="drop-shadow-2xl">🏍️</p>
        <p className="drop-shadow-2xl">⚽</p>
        <p className="drop-shadow-2xl">🌆</p>
        <p className="drop-shadow-2xl">📸</p>
        <p className="drop-shadow-2xl">🎧</p>
      </motion.div>
    </section>
  );
};

export default LittleInfo;
