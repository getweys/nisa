"use client";

import { AnimatedButton } from "components/animated-button";
import { csrInitiatives } from "data/data";
import { motion } from "framer-motion";

// CSR Spotlight Section Component
export const CSRSpotlightSection = () => (
  <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-pink-500 via-pink-600 to-pink-700 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 sm:mb-16 md:mb-20"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
          CSR Spotlight: <span className="text-pink-100">Beyond the Road</span>
        </h2>
        <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
          NisaDrive believes in uplifting not only our riders but also their
          families.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
        {csrInitiatives.map((initiative, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 h-full hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${initiative.color} rounded-xl sm:rounded-2xl mb-4 sm:mb-6 text-xl sm:text-2xl shadow-lg`}
                >
                  {initiative.icon}
                </motion.div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-pink-100 transition-colors">
                  {initiative.title}
                </h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  {initiative.description}
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
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto border border-white/20">
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Because mobility isn't just about movement,{" "}
            <span className="text-pink-100">it's about transformation.</span>
          </motion.h3>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-6 sm:mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
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
              Learn About Our CSR
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
              Join Our Mission
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);
