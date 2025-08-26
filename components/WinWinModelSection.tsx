"use client";

import { motion } from "framer-motion";
import { FiTrendingUp, FiAward, FiDollarSign } from "react-icons/fi";
import { useLanguage } from "contexts/language-context";

export default function WinWinModelSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white m-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            {t("business.page.winWinModel.title.part1")}
            <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
              {t("business.page.winWinModel.title.winWin")}
            </span>
            {t("business.page.winWinModel.title.part2")}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t("business.page.winWinModel.description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white opacity-20 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16" />
              <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-white opacity-15 rounded-full translate-y-10 sm:translate-y-12 -translate-x-10 sm:-translate-x-12" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <FiDollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {t("business.page.winWinModel.revenueBreakdown.title")}
                  </h3>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex justify-between items-center p-3 sm:p-4 bg-white/60 rounded-xl border border-pink-200">
                    <span className="font-semibold text-gray-700 text-sm sm:text-base">
                      {t("business.page.winWinModel.revenueBreakdown.averageFare")}
                    </span>
                    <span className="text-base sm:text-xl font-bold text-pink-600">
                      PKR 150
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 -mt-1 sm:-mt-2 ml-4">
                    (5 km × PKR 30/km)
                  </div>

                  <div className="flex justify-between items-center p-3 sm:p-4 bg-white/60 rounded-xl border border-pink-200">
                    <span className="font-semibold text-gray-700 text-sm sm:text-base">
                      {t("business.page.winWinModel.revenueBreakdown.avgRidesPerDay")}
                    </span>
                    <span className="text-base sm:text-xl font-bold text-pink-600">
                      10 per affiliate
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-3 sm:p-4 bg-white/60 rounded-xl border border-pink-200">
                    <span className="font-semibold text-gray-700 text-sm sm:text-base">
                      {t("business.page.winWinModel.revenueBreakdown.monthlyIncome")}
                    </span>
                    <span className="text-base sm:text-xl font-bold text-pink-600">
                      PKR 39,000
                    </span>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-pink-200">
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-4">
                    {t("business.page.winWinModel.revenueBreakdown.revenueSplit.title")}
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full"></div>
                        <span className="font-medium text-gray-700 text-sm sm:text-base">
                          {t("business.page.winWinModel.revenueBreakdown.revenueSplit.affiliateShare")}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600 text-sm sm:text-base">
                          85%
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500">
                          PKR 33,150
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-pink-500 rounded-full"></div>
                        <span className="font-medium text-gray-700 text-sm sm:text-base">
                          {t("business.page.winWinModel.revenueBreakdown.revenueSplit.platformShare")}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-pink-600 text-sm sm:text-base">
                          15%
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500">
                          PKR 5,850
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 relative femminine">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white opacity-20 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16" />
              <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-white opacity-15 rounded-full translate-y-10 sm:translate-y-12 -translate-x-10 sm:-translate-x-12" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <FiTrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {t("business.page.winWinModel.platformGrowth.title")}
                  </h3>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-blue-200">
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                        PKR 35.1M
                      </div>
                      <div className="text-base sm:text-lg font-semibold text-gray-700">
                        {t("business.page.winWinModel.platformGrowth.year1Revenue")}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 mt-2">
                        {t("business.page.winWinModel.platformGrowth.projectedAnnualRevenue")}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-blue-200">
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                        900
                      </div>
                      <div className="text-base sm:text-lg font-semibold text-gray-700">
                        {t("business.page.winWinModel.platformGrowth.activeRiders")}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 mt-2">
                        {t("business.page.winWinModel.platformGrowth.breakEvenPoint")}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 sm:p-4 bg-white/60 rounded-xl border border-blue-200 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">
                        85%
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-gray-700">
                        {t("business.page.winWinModel.platformGrowth.driverRetention")}
                      </div>
                    </div>
                    <div className="p-3 sm:p-4 bg-white/60 rounded-xl border border-blue-200 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">
                        4.9★
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-gray-700">
                        {t("business.page.winWinModel.platformGrowth.avgRating")}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-white text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <FiAward className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-bold text-sm sm:text-base">
                      {t("business.page.winWinModel.platformGrowth.sustainableGrowth.title")}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm opacity-90">
                    {t("business.page.winWinModel.platformGrowth.sustainableGrowth.description")}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
