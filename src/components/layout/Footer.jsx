import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-emerald-700 text-white py-12 px-6 md:px-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        
        {/* Logo and Brand Info */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/images/logo2.jpg"
            alt="ERA SAFEDRIVE"
            className="w-20 h-20 rounded-full mb-3"
          />
          <h2 className="text-xl font-semibold tracking-wide">ERA SAFEDRIVE</h2>
          <p className="text-gray-200 text-sm max-w-sm mt-2">
            Enhancing driver safety and wellness through innovative technology.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="font-semibold text-lg mb-2 text-orange">Quick Links</h3>
          <a href="#about" className="hover:text-orange transition">About</a>
          <a href="#features" className="hover:text-orange transition">Features</a>
          <a href="#products" className="hover:text-orange transition">Products</a>
          <a href="#contact" className="hover:text-orange transition">Contact</a>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="font-semibold text-lg mb-2 text-orange">Follow Us</h3>
          <a
            href="https://www.facebook.com/profile.php?id=61569882410180"
            className="hover:text-orange transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/era_safedrive?igsh=aXlmd29jcDlxMXMw"
            className="hover:text-orange transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/era-safedrive/"
            className="hover:text-orange transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="border-t border-gray-500 mt-10 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} ERA SAFEDRIVE. All rights reserved.
      </div>
    </motion.footer>
  );
}
