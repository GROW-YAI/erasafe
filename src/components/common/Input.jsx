import React from "react";
import { motion } from "framer-motion";

export default function Input({ type = "text", placeholder, className, ...props }) {
  return (
    <motion.input
      whileFocus={{ scale: 1.02 }}
      type={type}
      placeholder={placeholder}
      className={`border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-green ${className}`}
      {...props}
    />
  );
}
