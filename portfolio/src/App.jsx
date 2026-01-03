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
  // Initialize state lazily to read localStorage BEFORE first render
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    // Fallback to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Apply dark mode class to HTML element whenever state changes
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
      // CHANGED HERE: dark:bg-gray-850 -> dark:bg-gray-950
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="overflow-x-hidden">
        {/* Added IDs to all sections for ScrollSpy to work */}
        <div id="hero">
          <Hero />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="certificate">
          <Certificate />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
