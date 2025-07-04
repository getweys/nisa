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

const iconMap: { [key: string]: IconType } = {
  FiUsers,
  FiShield,
  FiTrendingUp,
  FiStar,
  FiGlobe,
  FiHeart,
};

export const StoriesSection = () => (
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
          Real Women,{" "}
          <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            Real Change
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
          Every ride tells a story of transformation and empowerment
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {stories.map((story, index) => (
          <motion.div
            key={story.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
              {story.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              {story.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              {story.story}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm text-pink-600 font-medium">
                {story.location}
              </span>
              <span className="text-xs sm:text-sm bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 px-2 sm:px-3 py-1 rounded-full">
                {story.impact}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
