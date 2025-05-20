import { Button } from "../ui/button";
import { MdArrowUpward } from "react-icons/md";

type ScrollToTopProps = {
  className?: string;
};

const ScrollToTop = ({ className }: ScrollToTopProps) => {
  const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <Button variant="default" size="icon" className={className} onClick={scrollToTop}>
      <MdArrowUpward />
    </Button>
  );
};

export default ScrollToTop;
