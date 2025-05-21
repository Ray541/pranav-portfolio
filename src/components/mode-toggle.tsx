import { useTheme } from "../hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import gsap from "gsap";

type ModeToggleProps = {
  className?: string;
};

export function ModeToggle({ className }: ModeToggleProps) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Button
        variant="default"
        size="icon"
        className={className}
        onClick={toggleTheme}
        onMouseEnter={() => {
          gsap.to("#cursor", { scale: 2, duration: 0.3 });
        }}
        onMouseLeave={() => {
          gsap.to("#cursor", { scale: 1, duration: 0.3 });
        }}
      >
        {theme === "dark" ? <Sun className="" /> : <Moon className="" />}
      </Button>
    </>
  );
}
