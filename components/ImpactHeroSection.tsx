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

export const ImpactHeroSection = () => (
  <section className="relative pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-tr from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
    </div>

    <div className="relative max-w-7xl mx-auto">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/10 to-rose-500/10 backdrop-blur-sm border border-pink-200/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
        >
          <FiHeart className="w-4 sm:w-5 h-4 sm:h-5 text-pink-500" />
          <span className="text-pink-700 font-medium text-sm sm:text-base">
            IMPACT
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight"
        >
          Driving Change,{" "}
          <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            One Woman at a Time
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-gray-500 max-w-3xl sm:max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed"
        >
          NisaDrive is not just about transportation — it's about transforming
          lives. We are building a women-led mobility revolution that breaks
          barriers to education, work, health, and dignity. By placing safe,
          affordable, and culturally inclusive transport in the hands of women,
          we're opening new roads to empowerment across Pakistan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto"
        >
          {impactStats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-200 mb-3 sm:mb-4`}
                >
                  <IconComponent
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-${stat.color}-600`}
                  />
                </div>
                <div
                  className={`text-xl sm:text-2xl md:text-3xl font-bold text-${stat.color}-600 mb-2`}
                >
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  </section>
);
