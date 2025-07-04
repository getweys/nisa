"use client";

import { whyChooseReasons } from "data/data";
import { motion } from "framer-motion";

// Why Choose Section Component
export const WhyChooseSection = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Why Women Choose{" "}
          <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
            NisaDrive
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Join thousands of women who have found financial independence and
          professional growth with NisaDrive
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {whyChooseReasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`${reason.bgColor} rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:shadow-xl transition-all duration-300`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-15 rounded-full translate-y-12 -translate-x-12" />

            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${reason.color} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <reason.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl my-auto font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                  {reason.title}
                </h3>
              </div>
              <div className="flex-1 mt-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
