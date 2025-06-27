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

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-tr from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            {/* Badge */}
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

            {/* Main Headline */}
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

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-gray-500 max-w-3xl sm:max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed"
            >
              NisaDrive is not just about transportation — it's about
              transforming lives. We are building a women-led mobility
              revolution that breaks barriers to education, work, health, and
              dignity. By placing safe, affordable, and culturally inclusive
              transport in the hands of women, we're opening new roads to
              empowerment across Pakistan.
            </motion.p>

            {/* Impact Stats Preview */}
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

      {/* Decorative Section Divider */}
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

      {/* Headline Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
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

          {/* Stats Table */}
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

          {/* Testimonial */}
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
                "I used to depend on my brother for every market visit. Now I
                ride with NisaDrive on my own terms."
              </blockquote>
              <cite className="text-pink-600 font-semibold text-sm sm:text-base">
                — Yasmin, Rawalpindi
              </cite>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem We're Solving Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-pink-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Left Side - Content */}
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
                facing mobility challenges due to harassment, high cost, or lack
                of female-friendly transport (UN Women & World Bank, 2022).
                Public transport is unsafe, culturally daunting, and often
                unreliable. This lack of mobility contributes to the gender gap
                in education, healthcare, and economic participation.
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

            {/* Right Side - Problem Stats */}
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
                  <div className="flex items-center gap-3 sm:gap-4">
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

      {/* Real Women, Real Change Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real Women,{" "}
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Real Change
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
              Every ride tells a story of transformation and empowerment
            </p>
          </motion.div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {story.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {story.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {story.story}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-pink-600 font-medium">
                    {story.location}
                  </span>
                  <span className="text-xs sm:text-sm bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 px-2 sm:px-3 py-1 rounded-full">
                    {story.impact}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Pillars Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
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

          {/* Pillars Grid */}
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

          {/* SDG Alignment */}
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
              <strong className="text-blue-600">SDG 5 (Gender Equality)</strong>
              ,<strong className="text-green-600"> SDG 8 (Decent Work)</strong>,
              and CSR guidelines under
              <strong className="text-purple-600">
                {" "}
                SECP's Companies Act 2017
              </strong>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision for Growth Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Vision for Growth{" "}
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                (2025-2027)
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
              Expanding our impact across Pakistan and beyond
            </p>
          </motion.div>

          {/* Vision Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {visionItems.map((vision, index) => (
              <motion.div
                key={vision.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {vision.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {vision.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {vision.description}
                </p>
                <div
                  className={`mt-3 sm:mt-4 h-1 bg-gradient-to-r from-${vision.color}-400 to-${vision.color}-600 rounded-full`}
                ></div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 backdrop-blur-sm border border-pink-200/50 rounded-xl sm:rounded-2xl p-8 sm:p-12">
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Be Part of the{" "}
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  Revolution
                </span>
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto">
                Join us in creating a safer, more inclusive Pakistan where every
                woman can travel with dignity and independence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base">
                  Partner With Us
                </button>
                <button className="bg-white/80 backdrop-blur-sm border border-gray-200/50 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join the Movement Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-48 sm:w-80 h-48 sm:h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-48 sm:w-80 h-48 sm:h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Join the{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Movement
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-pink-100 max-w-2xl sm:max-w-4xl mx-auto leading-relaxed">
              Whether you're a policymaker, a tech investor, a gender rights
              champion, or simply a concerned citizen — you can be part of this
              mobility revolution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
          >
            {actionCards.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {action.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                  {action.title}
                </h3>
                <p className="text-sm sm:text-base text-pink-100 mb-4 sm:mb-6 leading-relaxed">
                  {action.description}
                </p>
                <button
                  className={`bg-gradient-to-r ${action.gradient} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-xl sm:max-w-2xl mx-auto"
          >
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
              Ready to Make an Impact?
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-pink-100">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-base sm:text-lg">📧</span>
                </div>
                <a
                  href="mailto:impact@nisadrive.com"
                  className="hover:text-white transition-colors duration-200 font-medium text-sm sm:text-base"
                >
                  impact@nisadrive.com
                </a>
              </div>
              <div className="hidden sm:block w-px h-6 sm:h-8 bg-white/30"></div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-base sm:text-lg">📞</span>
                </div>
                <a
                  href="tel:+925154304820"
                  className="hover:text-white transition-colors duration-200 font-medium text-sm sm:text-base"
                >
                  +92 51 543 0482
                </a>
              </div>
            </div>

            <div className="mt-6 sm:mt-8">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Contact Us Today
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <div
                  className="w-2 sm:w-3 h-2 sm:h-3 bg-orange-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 sm:w-3 h-2 sm:h-3 bg-pink-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
              <span className="text-white/80 font-medium text-sm sm:text-lg">
                Together, We Drive Change
              </span>
              <div className="flex items-center gap-2">
                <div
                  className="w-2 sm:w-3 h-2 sm:h-3 bg-pink-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.6s" }}
                ></div>
                <div
                  className="w-2 sm:w-3 h-2 sm:h-3 bg-orange-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.8s" }}
                ></div>
                <div
                  className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-400 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
