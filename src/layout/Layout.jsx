import Header from "../components/Header/Header";
import Mode from "../components/Mode/Mode";
// Sections
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import LittleInfo from "../components/LittleInfo/LittleInfo";
// Footer
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="w-full h-full">
        <Mode />
        <Home />
        <About />
        <Projects />
        <LittleInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
