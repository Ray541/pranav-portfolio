import Header from "@/components/Header/Header";
import { ModeToggle } from "@/components/mode-toggle";
import { Main } from "./Main/Main";
import Home from "@/components/Home/Home";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import LittleInfo from "@/components/LittleInfo/LittleInfo";

const Layout = () => {
  return (
    <>
      <Header />
      <ModeToggle className="fixed bottom-7 right-7 active:scale-90 cursor-pointer" />
      <Main>
        <Home />
        <About />
        <Projects />
        <LittleInfo />
      </Main>
    </>
  );
};

export default Layout;
