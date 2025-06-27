"use client";

import { coreValues } from "data/data";
import { motion } from "framer-motion";
export default function CoreValuesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
              Core Values
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The principles that guide every decision and drive our mission to
            transform mobility in Pakistan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div
                className={`${value.bgColor} rounded-3xl p-8 md:p-12 h-full hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-pink-200 relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-15 rounded-full translate-y-12 -translate-x-12" />

                <div className="relative z-10 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${value.color} rounded-3xl mb-8 shadow-xl`}
                  >
                    <value.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 group-hover:text-pink-600 transition-colors">
                    {value.title}
                  </h3>

                  <p className="text-base text-gray-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
