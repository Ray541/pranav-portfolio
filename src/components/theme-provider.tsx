import { createContext, useEffect, useState } from "react";

export type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("system");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const savedTheme = (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (savedTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      setTheme("system");
    } else {
      root.classList.add(savedTheme);
      setTheme(savedTheme);
    }

    setHydrated(true); // Now ready to render
  }, [defaultTheme, storageKey]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");

      if (newTheme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
        root.classList.add(systemTheme);
      } else {
        root.classList.add(newTheme);
      }

      setTheme(newTheme);
    },
  };

  // Don't render children until theme is set
  if (!hydrated) {
    return null; // Or a splash screen, loader, etc.
  }

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>;
}

export { ThemeProviderContext };
