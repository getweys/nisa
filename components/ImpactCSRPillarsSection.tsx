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
import { useLanguage } from "contexts/language-context";

const iconMap: { [key: string]: IconType } = {
  FiUsers,
  FiShield,
  FiTrendingUp,
  FiStar,
  FiGlobe,
  FiHeart,
};

export const CSRPillarsSection = () => {
  const { t } = useLanguage();
  
  return (
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
            {t("impact.csr.title")}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-2">
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent font-semibold">
              {t("impact.csr.subtitle")}
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {csrPillars.map((pillar, index) => (
            <motion.div
              key={pillar.titleKey}
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
                    {t(pillar.pillarKey)}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {t(pillar.titleKey)}
                  </h3>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                {t(pillar.descriptionKey)}
              </p>
              <div
                className={`bg-gradient-to-r from-${pillar.color}-100 to-${pillar.color}-200 rounded-xl p-3 sm:p-4`}
              >
                <p
                  className={`text-xs sm:text-sm text-${pillar.color}-700 font-semibold`}
                >
                  {t(pillar.metricKey)}
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
            {t("impact.csr.globalStandards.title")}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {t("impact.csr.globalStandards.description")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
