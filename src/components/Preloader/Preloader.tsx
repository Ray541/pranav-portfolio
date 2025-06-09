import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

type PreloaderProps = { onComplete: () => void };

const Preloader = ({ onComplete }: PreloaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [percentage, setPercentage] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useGSAP(() => {
    // Scroll To Top
    window.scrollTo({ top: 0, behavior: "smooth" });

    const percentageObj = { value: 0 };

    const timeline = gsap.timeline();
    timeline
      .to({}, { duration: 0.7 }) // Initial delay
      .to(percentageObj, {
        value: 100,
        duration: 1,
        onUpdate: () => setPercentage(Math.round(percentageObj.value)),
      })
      .add(() => {
        // Trigger fade out class Tailwind transition
        setFadeOut(true);
        // Wait for the CSS transition to finish, then unmount
        setTimeout(() => {
          setIsDone(true);
          onComplete();
        }, 700);
      });
  }, []);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className={cn(
        "preloader-bg-grid-line fixed w-full min-h-[100vh] lg:min-h-dvh z-10 flex items-center justify-center bg-background text-foreground transition-opacity duration-700",
        fadeOut && "opacity-0"
      )}
    >
      <span className="text-9xl font-black">{percentage}%</span>
    </div>
  );
};

export default Preloader;
