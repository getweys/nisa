"use client";

import { AnimatedButton } from "components/animated-button";
import { joinSteps, quickFacts } from "data/data";
import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";

// How to Join Section Component
export const HowToJoinSection = () => (
  <section className="py-16 sm:py-20 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 sm:mb-16 md:mb-20"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">
          <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
            How to Join?
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Getting started with NisaDrive is simple. Follow these four easy steps
          to begin your journey.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {joinSteps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              {index < 3 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gray-200 z-0">
                  <motion.div
                    className="h-full bg-gradient-to-r from-pink-500 to-pink-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: (index + 1) * 0.2,
                    }}
                  />
                </div>
              )}
              <div
                className={`${item.bgColor} rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 h-full hover:shadow-xl transition-all duration-300 border-2 ${item.borderColor} group-hover:border-pink-300 relative z-10`}
              >
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${item.color} rounded-xl text-white font-bold text-sm sm:text-base shadow-lg`}
                  >
                    {item.step}
                  </motion.div>
                  <div className="text-2xl sm:text-3xl">{item.icon}</div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-pink-600 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-gray-50 to-pink-50/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-pink-100 rounded-full opacity-20 -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16" />
            <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-pink-50 rounded-full opacity-25 translate-y-10 sm:translate-y-12 -translate-x-10 sm:-translate-x-12" />

            <div className="relative z-10">
              <motion.h3
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Ready to Start Your Application?
              </motion.h3>
              <motion.p
                className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Take the first step towards financial independence and join
                thousands of women who are already earning with NisaDrive.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <AnimatedButton
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold px-8 sm:px-10 py-4 text-base sm:text-lg shadow-xl hover:shadow-2xl"
                  onClick={() =>
                    window.open(
                      "https://forms.google.com/affiliate-signup-placeholder",
                      "_blank"
                    )
                  }
                >
                  <span className="mr-2">📝</span>
                  Fill Affiliate Signup Form
                </AnimatedButton>
                <AnimatedButton
                  size="lg"
                  variant="outline"
                  className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-bold px-8 sm:px-10 py-4 text-base sm:text-lg"
                >
                  <FiPhone className="w-5 h-5 mr-2" />
                  Contact Support
                </AnimatedButton>
              </motion.div>
              <motion.div
                className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-pink-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                  <span className="text-sm sm:text-base font-semibold text-gray-700">
                    Quick Facts
                  </span>
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                </div>
                <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 text-center">
                  {quickFacts.map((fact, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center gap-2"
                    >
                      <span className="text-lg">{fact.icon}</span>
                      <span className="text-xs sm:text-sm text-gray-600 font-medium">
                        {fact.text}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
