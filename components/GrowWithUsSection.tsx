"use client";

import { growthRoles } from "data/data";
import { motion } from "framer-motion";
import GrowthIllustration from "svgs/GrowthIllustration";

// Grow With Us Section Component
export const GrowWithUsSection = () => (
  <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-pink-50/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
            Grow With Us:
          </span>{" "}
          Not Just a Job, a Journey
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Your ride today could be your startup tomorrow. NisaDrive is more than
          a gig—it's a growth platform.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-pink-100 rounded-full opacity-20 -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16" />
            <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-pink-50 rounded-full opacity-25 translate-y-10 sm:translate-y-12 -translate-x-10 sm:-translate-x-12" />

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
                Through our internal training, riders can become:
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {growthRoles.map((role, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${role.color} rounded-xl flex items-center justify-center text-lg sm:text-xl shadow-sm flex-shrink-0`}
                      >
                        {role.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-pink-600 transition-colors">
                          {role.title}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {role.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl border border-pink-200"
          >
            <p className="text-sm sm:text-base font-semibold text-pink-700 text-center">
              As part of our Manpower Development Plan, we're building leaders,
              not just riders.
            </p>
          </motion.div>
        </motion.div>
        <GrowthIllustration />
      </div>
    </div>
  </section>
);
