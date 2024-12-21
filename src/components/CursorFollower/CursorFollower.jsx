import { useEffect, useState } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;

    const updateMousePosition = e => {
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Remove `position` from dependencies

  return (
    <div
      className={`hidden lg:block fixed w-[15px] h-[15px] rounded-full bg-blue-500/10 dark:bg-gray-200/10 border border-gray-500 dark:border-gray-200 pointer-events-none z-[999] transition-transform duration-75`}
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  );
};

export default CursorFollower;
