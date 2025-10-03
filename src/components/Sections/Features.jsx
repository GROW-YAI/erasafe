import React from "react";
import { motion } from "framer-motion";
import Card from "../common/Card";

const features = [
  { title: "Alcohol Detection", desc: "Monitor driver alcohol levels in real-time." },
  { title: "Pulse Monitoring", desc: "Track heart rate to prevent fatigue." },
  { title: "Stress Level", desc: "Detect stress for safer driving." },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 max-w-6xl mx-auto bg-gray-50">
      <motion.h2
        className="text-4xl font-bold text-green mb-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Key Features
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="text-center">
            <motion.h3
              className="text-2xl font-semibold text-orange mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {feature.title}
            </motion.h3>
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              {feature.desc}
            </motion.p>
          </Card>
        ))}
      </div>
    </section>
  );
}
