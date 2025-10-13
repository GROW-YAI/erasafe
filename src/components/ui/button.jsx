import React from "react";
import { motion } from "framer-motion";

export default function Button({ children, onClick, type = "button", className }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      type={type}
      className={`bg-green text-white font-bold py-3 px-6 rounded shadow hover:bg-orange transition-colors ${className}`}
    >
      {children}
    </motion.button>
  );
}
