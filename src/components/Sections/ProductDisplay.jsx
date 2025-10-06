import React from "react";
import { motion } from "framer-motion";
import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";

export default function ProductDisplay() {
  const images = [product1, product2, product3];

  return (
    <section id="product" className="py-20 px-4 max-w-6xl mx-auto">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-green mb-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Product Gallery
      </motion.h2>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-lg group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={img}
              alt={`Driver Wellness Device ${index + 1}`}
              className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-white text-lg font-medium">
                Driver Wellness Device
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Optional caption */}
      <p className="text-center text-gray-600 mt-10 max-w-3xl mx-auto leading-relaxed">
        A cutting-edge Driver Wellness Device designed to monitor and enhance driver safety through innovative sensor technology and ergonomic design.
      </p>
    </section>
  );
}
