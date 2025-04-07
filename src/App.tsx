import { ThemeProvider } from "@/components/theme-provider";

function App({ children }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  );
}

export default App;
