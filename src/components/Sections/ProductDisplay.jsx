import React from "react";
import { motion } from "framer-motion";
import Card from "../common/Card";
import product1 from "../../assets/images/product1.jpg";

export default function ProductDisplay() {
  const products = [
    { img: product1, title: "Driver Wellness Device", desc: "Monitors alcohol, pulse, and stress levels." },
    // Add more product objects as needed
  ];

  return (
    <section id="product" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-green mb-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our Product
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Card key={index} className="text-center">
            <motion.img
              src={product.img}
              alt={product.title}
              className="rounded-lg shadow-lg mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            />
            <h3 className="text-2xl font-semibold text-orange mb-2">{product.title}</h3>
            <p className="text-gray-600">{product.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
