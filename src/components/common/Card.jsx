import React from "react";
import { motion } from "framer-motion";

export default function Card({ children, className }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
      className={`bg-white p-6 rounded-lg shadow-md transition-all ${className}`}
    >
      {children}
    </motion.div>
  );
}
