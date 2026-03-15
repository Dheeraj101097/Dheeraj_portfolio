import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useDarkMode } from "./LiquidGlassCard";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const isDark = useDarkMode();

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificate", href: "#certificate" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -66% 0px",
      threshold: 0,
    };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    ["hero", "experience", "skills", "projects", "certificate", "education", "contact"].forEach(
      (id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }
    );
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  // Scrolled glass nav shadow
  const navShadow = isDark
    ? [
        "inset 0px 1px 1px rgba(255,255,255,0.14)",
        "inset 0px 0px 0px 1px rgba(255,255,255,0.05)",
        "0px 8px 32px rgba(0,0,0,0.45)",
      ].join(", ")
    : [
        "inset 0px 1.5px 2px rgba(255,255,255,0.90)",
        "inset 0px 0px 0px 1px rgba(255,255,255,0.55)",
        "0px 4px 20px rgba(0,0,0,0.07)",
      ].join(", ");

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 right-0 z-[70] transition-all duration-500"
      style={
        isScrolled
          ? {
              backdropFilter: "blur(28px) saturate(180%)",
              WebkitBackdropFilter: "blur(28px) saturate(180%)",
              background: isDark ? "rgba(45,45,42,0.72)" : "rgba(245,246,244,0.72)",
              boxShadow: navShadow,
              borderBottom: isDark
                ? "1px solid rgba(255,255,255,0.06)"
                : "1px solid rgba(255,255,255,0.6)",
            }
          : {
              background: "transparent",
              boxShadow: "none",
              border: "none",
            }
      }
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent cursor-pointer select-none"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Portfolio
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <motion.button
                  key={item.name}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07 }}
                  className="relative transition-all duration-300 font-medium text-sm"
                  style={{
                    color: isActive
                      ? isDark ? "#20fc8f" : "#0d8a4d"
                      : isDark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.6)",
                  }}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                      style={{
                        background: isDark
                          ? "linear-gradient(90deg, #20fc8f, #14b8a6)"
                          : "linear-gradient(90deg, #0d8a4d, #0f766e)",
                        boxShadow: isDark ? "0 0 6px rgba(32,252,143,0.6)" : "none",
                      }}
                    />
                  )}
                </motion.button>
              );
            })}

            {/* Theme toggle — glass pill */}
            <motion.button
              type="button"
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              className="p-2.5 rounded-full backdrop-blur-sm transition-all duration-300"
              style={{
                background: isDark ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.55)",
                border: isDark
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "1px solid rgba(255,255,255,0.7)",
                boxShadow: isDark
                  ? "inset 0 1px 1px rgba(255,255,255,0.1), 0 4px 12px rgba(0,0,0,0.3)"
                  : "inset 0 1.5px 2px rgba(255,255,255,0.9), 0 2px 8px rgba(0,0,0,0.07)",
                color: isDark ? "#20fc8f" : "#0d8a4d",
              }}
            >
              <motion.div
                animate={{ rotate: darkMode ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile — theme toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <motion.button
              type="button"
              onClick={toggleDarkMode}
              whileTap={{ scale: 0.92 }}
              className="p-2.5 rounded-full backdrop-blur-sm"
              style={{
                background: isDark ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.55)",
                border: isDark
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "1px solid rgba(255,255,255,0.7)",
                boxShadow: isDark
                  ? "inset 0 1px 1px rgba(255,255,255,0.1)"
                  : "inset 0 1.5px 2px rgba(255,255,255,0.9)",
                color: isDark ? "#20fc8f" : "#0d8a4d",
              }}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="md:hidden mt-3 rounded-[1.5rem] overflow-hidden"
              style={{
                backdropFilter: "blur(28px) saturate(180%)",
                WebkitBackdropFilter: "blur(28px) saturate(180%)",
                background: isDark ? "rgba(45,45,42,0.80)" : "rgba(245,246,244,0.82)",
                boxShadow: isDark
                  ? "inset 0 1px 1px rgba(255,255,255,0.12), inset 0 0 0 1px rgba(255,255,255,0.06), 0 16px 40px rgba(0,0,0,0.5)"
                  : "inset 0 2px 3px rgba(255,255,255,0.92), inset 0 0 0 1px rgba(255,255,255,0.55), 0 8px 24px rgba(0,0,0,0.08)",
              }}
            >
              <div className="p-3 space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left px-4 py-3 rounded-2xl transition-all duration-200 text-sm font-medium"
                      style={{
                        background: isActive
                          ? isDark ? "rgba(32,252,143,0.1)" : "rgba(13,138,77,0.08)"
                          : "transparent",
                        color: isActive
                          ? isDark ? "#20fc8f" : "#0d8a4d"
                          : isDark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.6)",
                      }}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
