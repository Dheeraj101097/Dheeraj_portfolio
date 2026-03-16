import React, { useState, useEffect } from "react";
import Header from "./components_g/Header";
import Hero from "./components_g/Hero";
import Education from "./components_g/Education";
import Skills from "./components_g/Skills";
import Projects from "./components_g/Projects";
import Experience from "./components_g/Experience";
import Contact from "./components_g/Contact";
import Footer from "./components_g/Footer";
import Certificate from "./components_g/Certificate";

function App() {
  // Default to dark mode; read localStorage only on client after mount
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="overflow-x-hidden">
        <section id="hero">
          <Hero />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certificate">
          <Certificate />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
