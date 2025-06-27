"use client"

import { motion } from "framer-motion"
import { FiUsers, FiShield, FiDollarSign, FiClock } from "react-icons/fi"
import { Text } from "./text"
import { AnimatedCard } from "./animated-card"

export function FeaturesSection() {
  const features = [
    {
      icon: FiUsers,
      titleKey: "features.femaleDrivers.title",
      descriptionKey: "features.femaleDrivers.description",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: FiShield,
      titleKey: "features.safeRides.title",
      descriptionKey: "features.safeRides.description",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: FiDollarSign,
      titleKey: "features.affordable.title",
      descriptionKey: "features.affordable.description",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FiClock,
      titleKey: "features.reliable.title",
      descriptionKey: "features.reliable.description",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            <Text path="features.title" />
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <Text path="features.subtitle" />
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard key={index} delay={index * 0.2}>
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full mb-6`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  <Text path={feature.titleKey} />
                </h3>

                <p className="text-gray-600 leading-relaxed">
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
