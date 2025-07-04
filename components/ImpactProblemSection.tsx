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

export const ProblemSection = () => (
  <section className="m-4 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-pink-50/30">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            The Problem{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              We're Solving
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            In Pakistan,{" "}
            <strong className="text-gray-900">70%+ of women</strong> report
            facing mobility challenges due to harassment, high cost, or lack of
            female-friendly transport (UN Women & World Bank, 2022). Public
            transport is unsafe, culturally daunting, and often unreliable. This
            lack of mobility contributes to the gender gap in education,
            healthcare, and economic participation.
          </p>
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
              NisaDrive's Solution
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              NisaDrive addresses this issue by creating a tech-enabled,
              women-exclusive transport network built for cultural fit,
              affordability, and safety.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-6"
        >
          {problemStats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/90 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gapādi4">
                <div
                  className={`text-xl sm:text-2xl md:text-3xl font-bold text-${item.color}-500`}
                >
                  {item.stat}
                </div>
                <div className="text-sm sm:text-base text-gray-700 font-medium">
                  {item.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);
