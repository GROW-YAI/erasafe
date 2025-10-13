import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import { Beer, HeartPulse, Zap } from "lucide-react";

/**
 * Features list: icon key replaced with Lucide component
 */
const features = [
  {
    key: "alcohol",
    Icon: Beer,
    title: "Alcohol Detection",
    desc: "Quick, accurate breath analysis that prevents impaired operation.",
  },
  {
    key: "pulse",
    Icon: HeartPulse,
    title: "Pulse Monitoring",
    desc: "Continuous heart-rate tracking to detect fatigue and health events.",
  },
  {
    key: "stress",
    Icon: Zap,
    title: "Stress Level",
    desc: "Real-time stress indicators to help avoid risky driving behavior.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 16 } },
};

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 max-w-6xl mx-auto bg-gray-50">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-green mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Key Features
      </motion.h2>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature) => {
          const Icon = feature.Icon;
          return (
            <motion.div key={feature.key} variants={itemVariants}>
              {/* Make the card keyboard-focusable with accessible focus ring */}
              <Card
                className="text-left hover:shadow-lg focus-within:ring-2 focus-within:ring-green focus-within:rounded-lg"
                // add tabindex to allow keyboard focus on the card container
              >
                <div
                  className="flex items-start gap-4"
                  // give the card an explicit tabIndex so keyboard users can focus it
                  tabIndex={0}
                >
                  {/* Icon circle */}
                  <div
                    className="flex-none rounded-full p-3 transition-colors duration-200"
                    // hover/focus effects target the icon color and background
                  >
                    <Icon
                      size={28}
                      className="text-orange transition-colors duration-200"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      <style >{`
        /* micro-interaction: change icon color on card hover/focus */
        /* Note: Tailwind can't easily target child SVG color from parent hover without extra classes,
           so we use a small CSS rule that applies when the parent card is hovered/focused. */
        .${"card-hover-target"}:hover svg,
        .${"card-hover-target"}:focus svg,
        .${"card-hover-target"}:focus-within svg {
          color: #f97316; /* orange */
        }
      `}</style>
    </section>
  );
}
