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

export default function SafetyPage() {
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

            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Safety{" "}
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
                Features
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-pink-600 mb-6">
              Trust Rides with Us
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At NisaDrive, safety isn't a promise — it's a system. We've built
              a multi-layered safety infrastructure aligned with national law
              and international standards. From registration to destination,
              every ride is designed to protect, empower, and ensure peace of
              mind.
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
                  Verified Female Drivers
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Every NisaDrive affiliate undergoes comprehensive verification
                  and training
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
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
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
                  <strong>Additional Safety Measures:</strong> Drivers wear ID
                  badges, use designated gadgets, and are evaluated periodically
                  to maintain our high safety standards.
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
                  Geo-Fenced Operational Zones
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  NisaDrive operates only in pre-approved, secure zones for
                  maximum safety
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
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
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
                    Designated Safe Locations
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our operational zones are specifically designed for:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Schools and educational institutions
                    </li>
                    <li className="flex items-center">
                      <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Office complexes and business districts
                    </li>
                    <li className="flex items-center">
                      <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Hospitals and healthcare facilities
                    </li>
                    <li className="flex items-center">
                      <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Shopping centers and marketplaces
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
                    Future-Safe Initiatives
                  </h3>
                  <p className="text-gray-600">
                    Our geo-fencing system is future-ready for specialized
                    transport initiatives, including schoolgirl transport
                    programs linked with our Child & Vulnerable Persons
                    Protection Policy, ensuring the highest safety standards for
                    all passengers.
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
                  In-App Safety Features
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Your safety, digitized and decentralized through advanced
                  technology
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
                      Live Ride Tracking
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Real-time monitoring of your journey from start to finish
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
                      Real-Time Location
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Live driver and passenger location sharing for
                      transparency
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
                      Emergency SOS
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Instant alert to Control Center plus 3 emergency contacts
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
                      Biometric Verification
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Advanced liveness checks in phased rollout for enhanced
                      security
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
                  Mandatory Safety Training
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Comprehensive training programs ensuring every driver is
                  prepared for any situation
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
                        Onboarding Bootcamps
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Intensive training sessions covering all aspects of safe
                        driving and customer service
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
                        Self-Defense Simulations
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Practical self-defense training to handle challenging
                        situations confidently
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
                        Emergency Response
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        First aid and emergency response tutorials for medical
                        and safety emergencies
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
                        Women's Rights Awareness
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Comprehensive sessions on women's rights and respectful
                        interaction protocols
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
                  <strong>Certification & Compliance:</strong> Training is
                  certified, refreshed every 6 months, and aligned with PECA
                  2016 and workplace safety acts.
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
                  Ride Insurance Coverage
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Every NisaDrive ride comes with comprehensive insurance
                  protection
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <AnimatedCard delay={0}>
                  <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-orange-100">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-4">
                      <FiAlertTriangle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      PKR 300,000
                    </h3>
                    <p className="text-lg font-semibold text-gray-700 mb-2">
                      Accidental Death Coverage
                    </p>
                    <p className="text-gray-600 text-sm">
                      Comprehensive coverage for accidental death during your
                      ride
                    </p>
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.1}>
                  <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-orange-100">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4">
                      <FiShield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      PKR 150,000
                    </h3>
                    <p className="text-lg font-semibold text-gray-700 mb-2">
                      Major Injury Coverage
                    </p>
                    <p className="text-gray-600 text-sm">
                      Protection against major injuries sustained during your
                      journey
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
                      Coverage Active During Ride
                    </h4>
                  </div>
                  <p className="text-gray-600">
                    Insurance coverage is automatically active from the moment
                    your ride begins until you reach your destination safely.
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
                        Important Note
                      </h4>
                      <p className="text-gray-600 mb-3">
                        This policy does not cover vehicle damage or third-party
                        claims.
                      </p>
                      <div className="flex items-center">
                        <span className="text-gray-700 mr-2">See:</span>
                        <button className="text-orange-600 hover:text-orange-700 font-medium underline transition-colors">
                          Insurance Coverage Policy
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
                  Monitoring & Quality Control
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Advanced monitoring systems ensuring consistent safety and
                  quality standards
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
                        Periodic Safety Audits
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Regular comprehensive safety assessments to maintain the
                        highest standards
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
                        Automated Behavior Analysis
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Real-time analysis of ride patterns and driver behavior
                        for safety optimization
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
                        AI-Assisted Alert Systems
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Smart monitoring for speed violations, route deviations,
                        and unusual idle time
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
                        Community Feedback Scoring
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Community-led evaluation of drivers on punctuality,
                        hygiene, and conduct
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
                  <strong>Transparency & Accountability:</strong> Reports are
                  shared with oversight partners under our MEL Framework for
                  continuous improvement.
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
                  Community-Driven Protection
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Building a network of support through strategic partnerships
                  and community collaboration
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
                      Traffic Police & Legal Aid
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Direct partnerships with traffic authorities and legal aid
                      organizations for immediate support
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
                      Women's Shelters & NGOs
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Collaboration with women's support organizations for
                      comprehensive protection services
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
                      Local Safety Committees
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Active engagement with community safety committees for
                      localized protection strategies
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
                  24/7 Support Access
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Riders and Drivers can request legal or emotional support
                  through the app anytime, anywhere — 24/7 assistance
                  guaranteed.
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
                    Coming Soon
                  </h3>
                  <p className="text-gray-600">
                    Exciting new features to enhance community safety
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-violet-100 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mb-3">
                      <FiStar className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Safety Badges
                    </h4>
                    <p className="text-sm text-gray-600">
                      5-Star Verified Driver recognition system
                    </p>
                  </div>

                  <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-violet-100 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mb-3">
                      <FiCheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Safety Rankings
                    </h4>
                    <p className="text-sm text-gray-600">
                      Monthly Community Safety Rankings
                    </p>
                  </div>

                  <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-violet-100 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mb-3">
                      <FiEye className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Watch Groups
                    </h4>
                    <p className="text-sm text-gray-600">
                      Regional Watch Groups with Local Authorities
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
              Your Safety is Our Foundation
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Every policy, every feature, and every decision at NisaDrive is
              made with your safety as the top priority. We don't just transport
              you — we protect your journey.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
