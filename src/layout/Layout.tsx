import Header from "@/components/Header/Header";
import { ModeToggle } from "@/components/mode-toggle";
import { Main } from "./Main/Main";
import Home from "@/components/Home/Home";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import LittleInfo from "@/components/LittleInfo/LittleInfo";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

const Layout = () => {
  return (
    <>
      <Header />
      <ModeToggle className="fixed bottom-3 right-7 active:scale-90 cursor-pointer z-10" />
      <Main>
        <Home />
        <About />
        <Projects />
        <LittleInfo />
        <Experience />
        <Contact />
      </Main>
      <Footer />
      <ScrollToTop className="fixed bottom-14 right-7 active:scale-90 cursor-pointer z-10" />
    </>
  );
};

export default Layout;
