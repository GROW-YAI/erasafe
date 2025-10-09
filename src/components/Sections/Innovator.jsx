import React from "react";
import { motion } from "framer-motion";
import inventorPhoto from "../../assets/images/innovator2.jpg";

export default function Innovator() {
  return (
    <section id="innovator" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
      >
        {/* Photo */}
        <div className="flex-shrink-0">
          <img
            src={inventorPhoto}
            alt="Eluzai Dorm Demakpor — Innovator, ERA SAFEDRIVE"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover ring-4 ring-white/20 shadow-xl"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-green">Eluzai Dorm Demakpor</h3>
              <p className="text-sm text-gray-600 mt-1">Electrical & Electronic Engineering • Founder of ERA SAFEDRIVE</p>
            </div>

            <div className="flex items-center gap-4">
              {/* small badges / quick stats */}
              <div className="bg-white/10 px-3 py-1 rounded-full text-sm font-medium">Student Innovator</div>
              <div className="bg-white/10 px-3 py-1 rounded-full text-sm font-medium">Road Safety Advocate</div>
            </div>
          </div>

          <p className="mt-6 text-gray-700 leading-relaxed text-base md:text-lg">
            I’m a university student with a passion for using technology to solve real-world transportation safety problems.
            SafeDrive was born from witnessing a preventable road incident — I wanted a practical way to detect when drivers are impaired, exhausted, or stressed and stop small problems from becoming tragedies.
          </p>

          {/* Quote block */}
          <blockquote className="mt-6 border-l-4 border-green pl-4 italic text-gray-800 bg-white/5 rounded-md py-4">
            “After seeing a near-accident caused by driver fatigue and stress, I knew we needed a real-time solution. SafeDrive gives drivers and fleets the tools to prevent these incidents before they happen.”
          </blockquote>

          {/* Actions + social */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block bg-orange text-white px-5 py-3 rounded-md font-semibold hover:bg-green transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange/50"
            >
              Contact Eluzai
            </a>

            
          </div>
        </div>
      </motion.div>
    </section>
  );
}
