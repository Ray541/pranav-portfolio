import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.01,
      duration: 1.7,
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up on component unmount
    };
  }, []); // Run once on component mount
};

export default useLenis;
