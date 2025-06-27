"use client";

import { features } from "data/data";
import { motion } from "framer-motion";
import HomeExperienceCard from "./homeExperienceCard";
import Feature1Illustration from "svgs/feature1Illustration";
import Feature2Illustration from "svgs/feature2Illustration";
import Feature3Illustration from "svgs/feature3Illustration";
import Feature4Illustration from "svgs/feature4Illustration";
import Feature5Illustration from "svgs/feature5Illustration";

const illustrations = [
  Feature1Illustration,
  Feature2Illustration,
  Feature3Illustration,
  Feature4Illustration,
  Feature5Illustration,
];

export function WhyChooseSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-pink-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
              NisaDrive
            </span>
            ?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the difference with Pakistan's most trusted
            women-to-women transportation service
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Illustration = illustrations[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-pink-200 h-full">
                  <div className="text-center">
                    {/* Illustration */}
                    <motion.div
                      className="w-24 h-24 mx-auto mb-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Illustration />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <HomeExperienceCard />
    </section>
  );
}
