import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/images/logo2.jpg"; // example logo

export default function Footer() {
  return (
    <motion.footer
      className="bg-green text-white py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <img src={logo} alt="ERA SAFEDRIVE" className="w-20 h-20" />
        <p className="text-gray-200 text-sm">
          Enhancing driver safety and wellness through innovative technology.
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-orange">Facebook</a>
          <a href="#" className="hover:text-orange">Twitter</a>
          <a href="#" className="hover:text-orange">LinkedIn</a>
        </div>
      </div>
    </motion.footer>
  );
}
