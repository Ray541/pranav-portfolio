import About from "../components/About/About";
import Header from "../components/Header/Header";
// Sections
import Home from "../components/Home/Home";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="w-full h-full">
        <Home />
        <About />
      </main>
    </>
  );
};

export default Layout;
