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

export const HeadlineStatsSection = () => (
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
          Headline Stats{" "}
          <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            (2025-2027)
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
          Our projected growth and impact over the next three years
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-12 sm:mb-16 overflow-x-auto"
      >
        <div className="min-w-[600px]">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 sm:py-4 px-4 sm:px-6 font-semibold text-gray-900 text-sm sm:text-base">
                  Impact Indicator
                </th>
                <th className="text-center py-3 sm:py-4 px-4 sm:px-6 font-semibold text-pink-600 text-sm sm:text-base">
                  Year 1
                </th>
                <th className="text-center py-3 sm:py-4 px-4 sm:px-6 font-semibold text-rose-600 text-sm sm:text-base">
                  Year 2
                </th>
                <th className="text-center py-3 sm:py-4 px-4 sm:px-6 font-semibold text-purple-600 text-sm sm:text-base">
                  Year 3
                </th>
              </tr>
            </thead>
            <tbody>
              {headlineStats.map((row, index) => (
                <motion.tr
                  key={row.indicator}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200"
                >
                  <td className="py-3 sm:py-4 px-4 sm:px-6 font-medium text-gray-900 text-sm sm:text-base">
                    {row.indicator}
                  </td>
                  <td className="py-3 sm:py-4 px-4 sm:px-6 text-center font-semibold text-pink-600 text-sm sm:text-base">
                    {row.year1}
                  </td>
                  <td className="py-3 sm:py-4 px-4 sm:px-6 text-center font-semibold text-rose-600 text-sm sm:text-base">
                    {row.year2}
                  </td>
                  <td className="py-3 sm:py-4 px-4 sm:px-6 text-center font-semibold text-purple-600 text-sm sm:text-base">
                    {row.year3}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 backdrop-blur-sm border border-pink-200/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center"
      >
        <div className="max-w-2xl sm:max-w-3xl mx-auto">
          <FiHeart className="w-6 sm:w-8 h-6 sm:h-8 text-pink-500 mx-auto mb-4 sm:mb-6" />
          <blockquote className="text-base sm:text-lg md:text-xl font-medium text-gray-900 mb-4 sm:mb-6 italic">
            "I used to depend on my brother for every market visit. Now I ride
            with NisaDrive on my own terms."
          </blockquote>
          <cite className="text-pink-600 font-semibold text-sm sm:text-base">
            — Yasmin, Rawalpindi
          </cite>
        </div>
      </motion.div>
    </div>
  </section>
);
