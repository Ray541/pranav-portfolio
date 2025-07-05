import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const move = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 12 / 2,
        y: e.clientY - 12 / 2,
        duration: 0.3, // Mouse lerp effect
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      id="cursor"
      className="hidden lg:block lg:fixed top-0 left-0 w-3 h-3 z-10 bg-background dark:bg-foreground rounded-full pointer-events-none mix-blend-difference"
    />
  );
};

export default CustomCursor;
