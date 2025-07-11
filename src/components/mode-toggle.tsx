import { useTheme } from "../hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Laptop } from "lucide-react";
import { handleCursorEnter, handleCursorLeave } from "@/utils/gsapUtils";

type ModeToggleProps = {
  className?: string;
};

export function ModeToggle({ className }: ModeToggleProps) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("system");
    } else if (theme === "system") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    if (theme === "dark") return <Sun />;
    if (theme === "light") return <Moon />;
    return <Laptop />;
  };

  return (
    <Button
      variant="default"
      size="icon"
      className={className}
      onClick={toggleTheme}
      onMouseEnter={() => handleCursorEnter(2)}
      onMouseLeave={handleCursorLeave}
    >
      {getIcon()}
    </Button>
  );
}
