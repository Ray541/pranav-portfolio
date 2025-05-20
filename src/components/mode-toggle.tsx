import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useTheme } from "../hooks/use-theme";

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
      <Button variant="default" size="icon" className={className} onClick={toggleTheme}>
        {theme === "dark" ? <Sun className="" /> : <Moon className="" />}
      </Button>
    </>
  );
}
