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

export const DividerSection = () => (
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-purple-500/10"></div>
    <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-6 sm:px-8 py-3 sm:py-4">
          <div className="flex items-center gap-2">
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-pink-500 rounded-full animate-pulse"></div>
            <div
              className="w-2 sm:w-3 h-2 sm:h-3 bg-rose-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 sm:w-3 h-2 sm:h-3 bg-purple-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
          <span className="text-gray-700 font-medium text-sm sm:text-base">
            Transforming Pakistan, One Journey at a Time
          </span>
          <div className="flex items-center gap-2">
            <div
              className="w-2 sm:w-3 h-2 sm:h-3 bg-purple-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.6s" }}
            ></div>
            <div
              className="w-2 sm:w-3 h-2 sm:h-3 bg-rose-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.8s" }}
            ></div>
            <div
              className="w-2 sm:w-3 h-2 sm:h-3 bg-pink-500 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);
