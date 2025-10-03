import React from "react";
import { motion } from "framer-motion";
import hero2 from "../../assets/images/hero2.jpg"; // Replace with an appropriate image for About

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Image */}
        <motion.div
          className="md:w-1/2"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={hero2}
            alt="SafeDrive system"
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="md:w-1/2 flex flex-col justify-center text-center md:text-left"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-green mb-4">
            About ERA SAFEDRIVE
          </h2>
          <p className="text-gray-700 mb-6 text-base sm:text-lg md:text-lg">
            SafeDrive is an innovative driver wellness monitoring system designed to enhance safety and efficiency in transportation. It integrates advanced sensors to assess alcohol levels, pulse rate, and stress levels, processed in real-time by a microcontroller.
          </p>
          <p className="text-gray-700 mb-6 text-base sm:text-lg md:text-lg">
            The system features a GPS tracker and a management interface to monitor driver safety, sending alerts if a driver is unfit for duty. SafeDrive promotes proactive health management and responsible driving habits for safer roads.
          </p>
          <button className="bg-orange text-white py-3 px-6 rounded shadow hover:bg-green transition-colors w-max mx-auto md:mx-0">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
