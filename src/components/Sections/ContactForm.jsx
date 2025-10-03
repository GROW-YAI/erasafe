import React from "react";
import { motion } from "framer-motion";
import Input from "../common/Input";
import Button from "../common/button";

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 px-4 max-w-3xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-green mb-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h2>
      <motion.form
        className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Input placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <textarea
          placeholder="Your Message"
          className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-green"
          rows="5"
        ></textarea>
        <Button type="submit">Send Message</Button>
      </motion.form>
    </section>
  );
}
