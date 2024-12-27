// Header
import Header from "../components/Header/Header";
// Main
import Main from "./Main";
// Sections
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import LittleInfo from "../components/LittleInfo/LittleInfo";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
// Footer
import Footer from "../components/Footer/Footer";
// Components
import Mode from "../components/Mode/Mode";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import CursorFollower from "../components/CursorFollower/CursorFollower";
import useLenis from "../hooks/useLenis";

const Layout = () => {
  useLenis();

  return (
    <div className="duration-300 overflow-hidden">
      <CursorFollower />
      <Header />
      <Main className="w-full h-full">
        <Home />
        <About />
        <Projects />
        <LittleInfo />
        <Experience />
        <Contact />
      </Main>
      <Mode />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Layout;
