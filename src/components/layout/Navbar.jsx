import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // IDs must match your sections' actual ids in the page
  const sections = ["hero", "about", "product", "features", "innovator", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 50);

      const offsets = sections.map((sec) => {
        const el = document.getElementById(sec);
        return el ? { id: sec, offset: el.offsetTop } : { id: sec, offset: 0 };
      });

      const currentSection =
        offsets.reverse().find((s) => scrollPos + 200 >= s.offset) || { id: "hero" };

      setActive(currentSection.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setIsMobileOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("hero")}>
          <img src="/images/logo2.jpg" alt="ERA SAFEDRIVE" className="h-10 w-auto" />
          <span className="ml-2 font-bold text-green text-xl">ERA SAFEDRIVE</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700 relative">
          {sections.map((sec) => (
            <li key={sec} className="relative cursor-pointer" onClick={() => scrollToSection(sec)}>
              <motion.div whileHover={{ scale: 1.1 }} className="py-2">
                {sec === "hero" ? "Home" : sec.charAt(0).toUpperCase() + sec.slice(1)}
              </motion.div>
              {active === sec && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-orange rounded"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-gray-700"></span>
              <span className="block w-6 h-0.5 bg-gray-700"></span>
              <span className="block w-6 h-0.5 bg-gray-700"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-md flex flex-col items-center space-y-4 py-6 font-medium text-gray-700"
        >
          {sections.map((sec) => (
            <li
              key={sec}
              className={`cursor-pointer hover:text-orange transition-colors ${
                active === sec ? "text-orange font-semibold" : ""
              }`}
              onClick={() => scrollToSection(sec)}
            >
              {sec === "hero" ? "Home" : sec.charAt(0).toUpperCase() + sec.slice(1)}
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}
