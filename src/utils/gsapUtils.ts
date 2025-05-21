import gsap from "gsap";

const scaleCursor = (scale: number) => {
  gsap.to("#cursor", { scale, duration: 0.3 });
};

const handleCursorEnter = (scale: number) => scaleCursor(scale);
const handleCursorLeave = () => scaleCursor(1);

export { scaleCursor, handleCursorEnter, handleCursorLeave };
