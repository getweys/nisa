"use client";

import { motion } from "framer-motion";
import {
  FiHeart,
  FiUsers,
  FiTrendingUp,
  FiStar,
  FiShield,
  FiGlobe,
} from "react-icons/fi";
import { IconType } from "react-icons";
import {
  impactStats,
  headlineStats,
  problemStats,
  stories,
  csrPillars,
  visionItems,
  actionCards,
} from "data/data";
import { AnimatedButton } from "./animated-button";

const iconMap: { [key: string]: IconType } = {
  FiUsers,
  FiShield,
  FiTrendingUp,
  FiStar,
  FiGlobe,
  FiHeart,
};

export const VisionSection = () => (
  <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Our Vision for Growth{" "}
          <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            (2025-2027)
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
          Expanding our impact across Pakistan and beyond
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {visionItems.map((vision, index) => (
          <motion.div
            key={vision.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
              {vision.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              {vision.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {vision.description}
            </p>
            <div
              className={`mt-3 sm:mt-4 h-1 bg-gradient-to-r from-${vision.color}-400 to-${vision.color}-600 rounded-full`}
            ></div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 sm:mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 backdrop-blur-sm border border-pink-200/50 rounded-xl sm:rounded-2xl p-8 sm:p-12">
          <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Be Part of the{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Revolution
            </span>
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto">
            Join us in creating a safer, more inclusive Pakistan where every
            woman can travel with dignity and independence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <AnimatedButton
              size="sm"
              className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
            >
              Partner With Us
            </AnimatedButton>
            <AnimatedButton
              size="sm"
              variant="outline"
              className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
            >
              Learn More
            </AnimatedButton>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
