"use client";

import { AnimatedButton } from "components/animated-button";
import CoreValuesSection from "components/CoreValuesSection";
import GrowthProjectionsSection from "components/GrowthProjectionsSection";
import StrategicInvestmentSection from "components/StrategicInvestmentSection";
import WinWinModelSection from "components/WinWinModelSection";
import { motion } from "framer-motion";
import { FiTrendingUp, FiBarChart } from "react-icons/fi";
import { HeroIllustration } from "svgs/HeroIllustration";
import { useLanguage } from "contexts/language-context";

export default function BusinessPage() {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen bg-white m-5">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-pink-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-40 h-40 bg-pink-100 rounded-full opacity-20 blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-32 h-32 bg-pink-200 rounded-full opacity-15 blur-2xl" />
          <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-pink-50 rounded-full opacity-25 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-36 h-36 bg-pink-100 rounded-full opacity-20 blur-2xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-50 to-pink-100 text-pink-600 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-pink-200 shadow-sm"
              >
                <FiTrendingUp className="w-4 h-4" />
                {t("business.page.hero.tagline")}
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
              </motion.div>
              <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-tight">
                {t("business.page.hero.title.part1")}
                <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                  {t("business.page.hero.title.empoweringWomen")}
                </span>{" "}
                <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                  {t("business.page.hero.title.scalingImpact")}
                </span>
              </motion.h1>

              <motion.p
                className="text-sm sm:text-base lg:text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {t("business.page.hero.description")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
              >
                <AnimatedButton size="md">
                  <FiBarChart className="w-5 h-5" />
                  {t("business.page.hero.cta.viewImpact")}
                </AnimatedButton>

                <AnimatedButton size="md" variant="outline">
                  {t("business.page.hero.cta.partnerWithUs")}
                </AnimatedButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="grid grid-cols-3 gap-8 text-center lg:text-left"
              >
                <div>
                  <div className="text-3xl font-bold text-pink-500 mb-2">
                    10K+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {t("business.page.hero.stats.womenEmpowered")}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-500 mb-2">
                    15+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {t("business.page.hero.stats.citiesServed")}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-500 mb-2">
                    ₨175M+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {t("business.page.hero.stats.incomeGenerated")}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <HeroIllustration />
          </div>
        </div>
      </section>

      <WinWinModelSection />
      <StrategicInvestmentSection />
      <CoreValuesSection />
      <GrowthProjectionsSection />
    </main>
  );
}
