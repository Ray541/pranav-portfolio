import { useState } from "react";
import Preloader from "@/components/Preloader/Preloader";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Header from "@/components/Header/Header";
import { Main } from "./Main/Main";
import Home from "@/components/Home/Home";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import LittleInfo from "@/components/LittleInfo/LittleInfo";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import { ModeToggle } from "@/components/mode-toggle";

const Layout = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded ? (
        <Preloader onComplete={() => setIsLoaded(true)} />
      ) : (
        <>
          <ProgressBar />
          <CustomCursor />
          <Header />
          <ModeToggle className="fixed bottom-3 right-7 active:scale-90 z-5" />
          <Main>
            <Home />
            <About />
            <Projects />
            <LittleInfo />
            <Experience />
            <Contact />
          </Main>
          <Footer />
          <ScrollToTop className="fixed bottom-14 right-7 active:scale-90 z-5" />
        </>
      )}
    </>
  );
};

export default Layout;
