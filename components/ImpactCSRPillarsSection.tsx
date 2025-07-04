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
export const CSRPillarsSection = () => (
  <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          CSR PILLARS under NisaDrive
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-2">
          <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent font-semibold">
            Women-Led Impact Beyond the Ride
          </span>
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
        {csrPillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white/90 transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="text-2xl sm:text-3xl">{pillar.icon}</div>
              <div>
                <div
                  className={`text-xs sm:text-sm font-semibold text-${pillar.color}-600 mb-1`}
                >
                  {pillar.pillar}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {pillar.title}
                </h3>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
              {pillar.description}
            </p>
            <div
              className={`bg-gradient-to-r from-${pillar.color}-100 to-${pillar.color}-200 rounded-xl p-3 sm:p-4`}
            >
              <p
                className={`text-xs sm:text-sm text-${pillar.color}-700 font-semibold`}
              >
                {pillar.metric}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center"
      >
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
          Global Standards Alignment
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          All initiatives are aligned with{" "}
          <strong className="text-blue-600">SDG 5 (Gender Equality)</strong>,
          <strong className="text-green-600"> SDG 8 (Decent Work)</strong>, and
          CSR guidelines under
          <strong className="text-purple-600">
            {" "}
            SECP's Companies Act 2017
          </strong>
          .
        </p>
      </motion.div>
    </div>
  </section>
);
