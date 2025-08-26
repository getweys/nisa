"use client";

import { motion } from "framer-motion";
import {
  FiShield,
  FiMapPin,
  FiUsers,
  FiCheckCircle,
  FiEye,
  FiAlertTriangle,
  FiClock,
  FiStar,
} from "react-icons/fi";
import { AnimatedCard } from "components/animated-card";
import { geoFeatures, verificationSteps } from "data/data";
import { useLanguage } from "contexts/language-context";

export default function SafetyPage() {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen bg-white">
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mb-8"
            >
              <FiShield className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {t("safety.page.hero.title.part1")}
              <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                {t("safety.page.hero.title.part2")}
              </span>
            </motion.h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-pink-600 mb-6">
              {t("safety.page.hero.subtitle")}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t("safety.page.hero.description")}
            </p>
          </motion.div>

          {/* Verified Female Drivers Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mb-6">
                  <FiUsers className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t("safety.page.verifiedDrivers.title")}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {t("safety.page.verifiedDrivers.description")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {verificationSteps.map((step, index) => (
                  <AnimatedCard key={index} delay={index * 0.1}>
                    <div className="text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg mb-4"
                      >
                        <step.icon className="w-7 h-7 text-pink-500" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {t(step.titleKey)}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {t(step.descriptionKey)}
                      </p>
                    </div>
                  </AnimatedCard>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-100"
              >
                <p className="text-gray-700 text-center">
                  <strong>{t("safety.page.verifiedDrivers.additionalMeasures")}</strong>
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Geo-Fenced Operational Zones Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-6">
                  <FiMapPin className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t("safety.page.geoFencing.title")}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {t("safety.page.geoFencing.description")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {geoFeatures.map((feature, index) => (
                  <AnimatedCard key={index} delay={index * 0.15}>
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center"
                      >
                        <feature.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {t(feature.titleKey)}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {t(feature.descriptionKey)}
                        </p>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-blue-100"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {t("safety.page.geoFencing.designatedSafe.title")}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t("safety.page.geoFencing.designatedSafe.description")}
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {t("safety.page.geoFencing.designatedSafe.schools")}
                    </li>
                    <li className="flex items-center">
                      <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {t("safety.page.geoFencing.designatedSafe.offices")}
                    </li>
                    <li className="flex items-center">
                      <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {t("safety.page.geoFencing.designatedSafe.hospitals")}
                    </li>
                    <li className="flex items-center">
                      <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {t("safety.page.geoFencing.designatedSafe.shopping")}
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-blue-100"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {t("safety.page.geoFencing.futureSafe.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("safety.page.geoFencing.futureSafe.description")}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* In-App Safety Features Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-6">
                  <FiShield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t("safety.page.inAppFeatures.title")}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {t("safety.page.inAppFeatures.description")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnimatedCard delay={0}>
                  <div className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg mb-4"
                    >
                      <FiMapPin className="w-7 h-7 text-purple-500" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {t("safety.page.inAppFeatures.liveTracking.title")}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t("safety.page.inAppFeatures.liveTracking.description")}
                    </p>
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.1}>
                  <div className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg mb-4"
                    >
                      <FiEye className="w-7 h-7 text-purple-500" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {t("safety.page.inAppFeatures.realTimeLocation.title")}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t("safety.page.inAppFeatures.realTimeLocation.description")}
                    </p>
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.2}>
                  <div className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg mb-4"
                    >
                      <FiAlertTriangle className="w-7 h-7 text-red-500" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {t("safety.page.inAppFeatures.emergencySOS.title")}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t("safety.page.inAppFeatures.emergencySOS.description")}
                    </p>
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.3}>
                  <div className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg mb-4"
                    >
                      <FiUsers className="w-7 h-7 text-purple-500" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {t("safety.page.inAppFeatures.biometricVerification.title")}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t("safety.page.inAppFeatures.biometricVerification.description")}
                    </p>
                  </div>
                </AnimatedCard>
              </div>
            </div>
          </motion.section>

          {/* Mandatory Safety Training Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6">
                  <FiUsers className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t("safety.page.mandatoryTraining.title")}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {t("safety.page.mandatoryTraining.description")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <AnimatedCard delay={0}>
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
                    >
                      <FiCheckCircle className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {t("safety.page.mandatoryTraining.bootcamps.title")}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t("safety.page.mandatoryTraining.bootcamps.description")}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.1}>
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
                    >
                      <FiShield className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {t("safety.page.mandatoryTraining.selfDefense.title")}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t("safety.page.mandatoryTraining.selfDefense.description")}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.2}>
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
                    >
                      <FiAlertTriangle className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {t("safety.page.mandatoryTraining.emergencyResponse.title")}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t("safety.page.mandatoryTraining.emergencyResponse.description")}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.3}>
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
                    >
                      <FiStar className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {t("safety.page.mandatoryTraining.womensRights.title")}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t("safety.page.mandatoryTraining.womensRights.description")}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-green-100"
              >
                <p className="text-gray-700 text-center">
                  <strong>{t("safety.page.mandatoryTraining.certification")}</strong>
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Ride Insurance Coverage Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mb-6">
                  <FiShield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t("safety.page.insurance.title")}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {t("safety.page.insurance.description")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <AnimatedCard delay={0}>
                  <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-orange-100">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-4">
                      <FiAlertTriangle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {t("safety.page.insurance.accidentalDeath.amount")}
                    </h3>
                    <p className="text-lg font-semibold text-gray-700 mb-2">
                      {t("safety.page.insurance.accidentalDeath.title")}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {t("safety.page.insurance.accidentalDeath.description")}
                    </p>
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.1}>
                  <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-orange-100">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4">
                      <FiShield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {t("safety.page.insurance.majorInjury.amount")}
                    </h3>
                    <p className="text-lg font-semibold text-gray-700 mb-2">
                      {t("safety.page.insurance.majorInjury.title")}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {t("safety.page.insurance.majorInjury.description")}
                    </p>
                  </div>
                </AnimatedCard>
              </div>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-orange-100"
                >
                  <div className="flex items-center mb-3">
                    <FiCheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-900">
                      {t("safety.page.insurance.coverageActive.title")}
                    </h4>
                  </div>
                  <p className="text-gray-600">
                    {t("safety.page.insurance.coverageActive.description")}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-orange-100"
                >
                  <div className="flex items-start">
                    <FiAlertTriangle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {t("safety.page.insurance.importantNote.title")}
                      </h4>
                      <p className="text-gray-600 mb-3">
                        {t("safety.page.insurance.importantNote.description")}
                      </p>
                      <div className="flex items-center">
                        <span className="text-gray-700 mr-2">{t("safety.page.insurance.importantNote.see")}</span>
                        <button className="text-orange-600 hover:text-orange-700 font-medium underline transition-colors">
                          {t("safety.page.insurance.importantNote.policy")}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Monitoring & Quality Control Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mb-6">
                  <FiEye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t("safety.page.monitoring.title")}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {t("safety.page.monitoring.description")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <AnimatedCard delay={0}>
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center"
                    >
                      <FiCheckCircle className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {t("safety.page.monitoring.safetyAudits.title")}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t("safety.page.monitoring.safetyAudits.description")}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.1}>
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center"
                    >
                      <FiEye className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {t("safety.page.monitoring.behaviorAnalysis.title")}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t("safety.page.monitoring.behaviorAnalysis.description")}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.2}>
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center"
                    >
                      <FiAlertTriangle className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {t("safety.page.monitoring.aiAlerts.title")}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t("safety.page.monitoring.aiAlerts.description")}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.3}>
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center"
                    >
                      <FiStar className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {t("safety.page.monitoring.communityFeedback.title")}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t("safety.page.monitoring.communityFeedback.description")}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-teal-100"
              >
                <p className="text-gray-700 text-center">
                  <strong>{t("safety.page.monitoring.transparency")}</strong>
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Community-Driven Protection Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mb-6">
                  <FiUsers className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t("safety.page.community.title")}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {t("safety.page.community.description")}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <AnimatedCard delay={0}>
                  <div className="text-center p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4"
                    >
                      <FiShield className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {t("safety.page.community.trafficPolice.title")}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t("safety.page.community.trafficPolice.description")}
                    </p>
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.1}>
                  <div className="text-center p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mb-4"
                    >
                      <FiUsers className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {t("safety.page.community.womensShelters.title")}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t("safety.page.community.womensShelters.description")}
                    </p>
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.2}>
                  <div className="text-center p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4"
                    >
                      <FiMapPin className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {t("safety.page.community.localCommittees.title")}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t("safety.page.community.localCommittees.description")}
                    </p>
                  </div>
                </AnimatedCard>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-violet-100 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mb-4">
                  <FiClock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t("safety.page.community.support.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("safety.page.community.support.description")}
                </p>
              </motion.div>

              {/* Coming Soon Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t("safety.page.community.comingSoon.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("safety.page.community.comingSoon.description")}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-violet-100 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mb-3">
                      <FiStar className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t("safety.page.community.comingSoon.safetyBadges.title")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t("safety.page.community.comingSoon.safetyBadges.description")}
                    </p>
                  </div>

                  <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-violet-100 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mb-3">
                      <FiCheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t("safety.page.community.comingSoon.safetyRankings.title")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t("safety.page.community.comingSoon.safetyRankings.description")}
                    </p>
                  </div>

                  <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-violet-100 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mb-3">
                      <FiEye className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t("safety.page.community.comingSoon.watchGroups.title")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t("safety.page.community.comingSoon.watchGroups.description")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Trust Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl p-8 md:p-12 text-white"
          >
            <FiShield className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t("safety.page.trust.title")}
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              {t("safety.page.trust.description")}
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
