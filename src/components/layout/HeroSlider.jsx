import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = ["/images/Hero1.jpg", "/images/Hero2.jpg"];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  };

  // helper for debugging broken image paths
  const handleImgError = (src) => {
    console.error(`HeroSlider: failed to load image: ${src}`);
  };

  return (
    <div className="bg-emerald-700 h-screen">
      <section
        id="hero"
        className="h-screen flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-0"
      >
        {/* Left Text Section */}
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left mb-10 md:mb-0 md:pr-8 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green mb-4 md:mb-6">
            Drive Safe with ERA SAFEDRIVE
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl mb-6">
            SafeDrive is an innovative driver wellness monitoring system. Monitor alcohol levels,
            pulse, and stress in real-time, ensuring drivers are fit for duty.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-orange text-white py-3 px-6 rounded w-max mx-auto md:mx-0 hover:bg-green transition-colors"
          >
            Learn More
          </button>
        </div>

        {/* Right Image Section - single image at a time */}
        <div className="md:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[500px] flex justify-center md:justify-end w-full relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={current} // important: key must change so AnimatePresence can animate
              src={slides[current]}
              alt={`Slide ${current + 1}`}
              onError={(e) => handleImgError(slides[current])}
              className="absolute inset-0 w-full h-full object-cover rounded-lg z-0"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1.0 }}
            />
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
