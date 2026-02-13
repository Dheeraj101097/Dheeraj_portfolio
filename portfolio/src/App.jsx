import React, { useState, useEffect, lazy, Suspense } from "react";
import Header from "./components_g/Header";
import Hero from "./components_g/Hero";

// Lazy load components below the fold
const Education = lazy(() => import("./components_g/Education"));
const Skills = lazy(() => import("./components_g/Skills"));
const Projects = lazy(() => import("./components_g/Projects"));
const Experience = lazy(() => import("./components_g/Experience"));
const Contact = lazy(() => import("./components_g/Contact"));
const Footer = lazy(() => import("./components_g/Footer"));
const Certificate = lazy(() => import("./components_g/Certificate"));

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
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="overflow-x-hidden">
        <div id="hero">
          <Hero />
        </div>
        <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div></div>}>
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
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
