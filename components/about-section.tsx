"use client"

import { motion } from "framer-motion"
import { FiTarget, FiUsers, FiAward } from "react-icons/fi"
import { Text } from "./text"
import { AnimatedCard } from "./animated-card"

export function AboutSection() {
  const features = [
    { icon: FiUsers, titleKey: "about.section.features.expertTeam.title", descriptionKey: "about.section.features.expertTeam.description" },
    { icon: FiTarget, titleKey: "about.section.features.focusedApproach.title", descriptionKey: "about.section.features.focusedApproach.description" },
    { icon: FiAward, titleKey: "about.section.features.qualityResults.title", descriptionKey: "about.section.features.qualityResults.description" },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <Text path="about.section.title" />
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            <Text path="about.section.description" />
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              <Text path="about.section.mission" />
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              <Text path="about.section.missionText" />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg"></div>
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard key={index} delay={index * 0.2}>
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4"
                >
                  <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  <Text path={feature.titleKey} />
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  <Text path={feature.descriptionKey} />
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
