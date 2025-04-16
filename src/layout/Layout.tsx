import Header from "@/components/Header/Header";
import { ModeToggle } from "@/components/mode-toggle";
import { Main } from "./Main/Main";
import Home from "@/components/Home/Home";
import About from "@/components/About/About";

const Layout = () => {
  return (
    <>
      <Header />
      <ModeToggle className="fixed bottom-10 right-10 rounded-full" />
      <Main>
        <Home />
        <About />
      </Main>
    </>
  );
};

export default Layout;
