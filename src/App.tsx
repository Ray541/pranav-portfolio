import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { useLenisScroll } from "./hooks/useLenisScroll";

type AppProps = {
  children: ReactNode;
};

function App({ children }: AppProps) {
  useLenisScroll();

  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      {children}
    </ThemeProvider>
  );
}

export default App;
