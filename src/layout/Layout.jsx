import About from "../components/About/About";
import Header from "../components/Header/Header";
// Sections
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="w-full h-full">
        <Home />
        <About />
        <Projects />
      </main>
    </>
  );
};

export default Layout;
