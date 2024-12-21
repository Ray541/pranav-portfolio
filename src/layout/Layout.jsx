import Header from "../components/Header/Header";
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

const Layout = () => {
  return (
    <div className="duration-300">
      <CursorFollower />
      <Header />
      <main className="w-full h-full">
        <Home />
        <About />
        <Projects />
        <LittleInfo />
        <Experience />
        <Contact />
      </main>
      <Mode />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Layout;
