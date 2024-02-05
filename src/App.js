import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Home, About, Internship, Project, Contact } from "./components/index";
import Top from "./components/Top";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Internship />
      <Contact />
      <Footer />
      <Top />
    </div>
  );
}

export default App;
