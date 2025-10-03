import React from "react";
import { motion } from "framer-motion";
import inventorPhoto from "../../assets/images/innovator2.jpg";

export default function Innovator() {
  return (
    <section id="innovator" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={inventorPhoto}
          alt="Innovator"
          className="w-48 h-48 rounded-full shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-green mb-4">Meet the Innovator</h2>
          <p className="text-gray-700 text-lg">
            John Doe is the visionary behind ERA SAFEDRIVE. With years of experience
            in transportation safety and wellness technology, he developed the device
            to ensure drivers are safe, healthy, and responsible on the road.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
