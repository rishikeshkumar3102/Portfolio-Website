import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home"
import About from "./components/about"
import Skills from "./components/skills";
import Project from "./components/project"
import Contact from "./components/contact"
import Aos from "aos";
import "aos/dist/aos.css"
import "./App.css";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>

    </>
  );
}

export default App
