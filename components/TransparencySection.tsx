"use client";
import { destinyFacts, policies } from "data/data";
import { motion } from "framer-motion";
import { AnimatedButton } from "./animated-button";

// Transparency Section Component
export const TransparencySection = () => (
  <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-pink-50/20">
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
            Transparency & Trust
          </span>{" "}
          Matter
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We operate with clear policies and legal protections. You can preview:
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
        {policies.map((policy, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open(policy.url, "_blank")}
              className={`w-full ${policy.bgColor} rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 h-full hover:shadow-xl transition-all duration-300 border-2 ${policy.borderColor} group-hover:border-pink-300 text-left`}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${policy.color} rounded-xl sm:rounded-2xl text-xl sm:text-2xl shadow-lg flex-shrink-0`}
                >
                  {policy.icon}
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors leading-tight">
                  {policy.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                {policy.description}
              </p>
              <div className="flex items-center gap-2 text-pink-600 font-semibold text-sm sm:text-base group-hover:text-pink-700 transition-colors">
                <span>View Document</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.div>
              </div>
            </motion.button>
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
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16 max-w-5xl mx-auto text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-white opacity-10 rounded-full -translate-y-16 sm:-translate-y-24 translate-x-16 sm:translate-x-24" />
          <div className="absolute bottom-0 left-0 w-24 sm:w-36 h-24 sm:h-36 bg-white opacity-10 rounded-full translate-y-12 sm:translate-y-18 -translate-x-12 sm:-translate-x-18" />
          <div className="absolute top-1/2 left-1/2 w-20 sm:w-28 h-20 sm:h-28 bg-white opacity-5 rounded-full -translate-x-10 sm:-translate-x-14 -translate-y-10 sm:-translate-y-14" />

          <div className="relative z-10">
            <motion.h3
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Ready to Drive Your <span className="text-pink-100">Destiny</span>
              ?
            </motion.h3>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 md:mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Sign up today and become part of Pakistan's first tech-enabled
              ride platform built exclusively for women—by women, for women.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-pink-600 font-bold px-8 py-3 rounded-xl text-md shadow-lg hover:shadow-xl transition-all relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="mr-2">🚗</span>
                Become a Rider Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-pink-600 font-bold px-8 py-3 rounded-xl text-md shadow-lg hover:shadow-xl transition-all relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="mr-2">📱</span>
                Download the App
              </motion.button>
            </motion.div>
            <motion.div
              className="mt-8 sm:mt-10 p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                {destinyFacts.map((fact, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center text-lg sm:text-xl">
                      {fact.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-medium opacity-90">
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
  </section>
);
