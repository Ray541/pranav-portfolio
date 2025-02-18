import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-10 origin-left bg-primary"
      style={{
        scaleX: scrollYProgress,
      }}
    ></motion.div>
  );
};

export default ScrollProgress;
