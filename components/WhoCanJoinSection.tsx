"use client";

import { AnimatedButton } from "components/animated-button";
import { equalOpportunityGroups, whoCanJoin } from "data/data";
import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import PinkCard from "./PinkCard";

// Who Can Join Section Component
export const WhoCanJoinSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Who Can Become a{" "}
          <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
            NisaDrive Rider
          </span>
          ?
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We believe in creating opportunities for all women, regardless of
          background or circumstances
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-15 rounded-full translate-y-12 -translate-x-12" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                We welcome:
              </h3>
              <div className="space-y-6">
                {whoCanJoin.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-sm flex-shrink-0">
                      {item.icon}
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed pt-2">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-15 rounded-full translate-y-12 -translate-x-12" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FiHeart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Equal Opportunity
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We especially encourage women from rural or peri-urban areas,
                single mothers, and students to join us as part of our Equal
                Opportunity Employment Policy.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                {equalOpportunityGroups.map((group, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-sm"
                  >
                    <div className="text-2xl mb-2">{group.icon}</div>
                    <div className="text-sm font-semibold text-gray-700">
                      {group.label}
                    </div>
                  </div>
                ))}
              </div>
              <motion.div className="mt-8">
                <AnimatedButton
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold"
                >
                  Apply Today
                </AnimatedButton>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    <div className="pt-12">
      <PinkCard
        heading="Ready to Start Your Journey?"
        description="Join thousands of women who have found financial independence and professional growth with NisaDrive"
        buttonText="Start Application"
      />
    </div>
  </section>
);
