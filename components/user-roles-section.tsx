"use client"

import { motion } from "framer-motion"
import { FiSmartphone, FiCar, FiUsers, FiArrowRight, FiShield, FiDollarSign, FiTrendingUp } from "react-icons/fi"

export function UserRolesSection() {
  const roles = [
    {
      id: "rider",
      title: "Rider",
      subtitle: "Safe & Reliable",
      description:
        "Experience safe, reliable transportation with verified female drivers. Book rides, track your journey, and travel with confidence across Pakistan.",
      features: ["Verified female drivers", "Real-time tracking", "24/7 safety support", "Flexible booking"],
      icon: FiSmartphone,
      gradient: "from-blue-500 to-blue-600",
      lightGradient: "from-blue-50 to-blue-100",
      buttonText: "Join as Rider",
      illustration: (
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl rotate-3 opacity-20"></div>
          <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 shadow-lg">
            <FiSmartphone className="w-16 h-16 text-white mx-auto" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <FiShield className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "driver",
      title: "Driver",
      subtitle: "Earn & Empower",
      description:
        "Empower yourself with flexible earning opportunities. Join our network of verified female drivers and build your independent business while serving your community.",
      features: ["Flexible working hours", "Competitive earnings", "Safety training provided", "Community support"],
      icon: FiCar,
      gradient: "from-pink-500 to-pink-600",
      lightGradient: "from-pink-50 to-pink-100",
      buttonText: "Join as Driver",
      illustration: (
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl rotate-3 opacity-20"></div>
          <div className="relative bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-4 shadow-lg">
            <FiCar className="w-16 h-16 text-white mx-auto" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
              <FiDollarSign className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "partner",
      title: "Partner",
      subtitle: "Collaborate & Grow",
      description:
        "Collaborate with NisaDrive to expand women-centric services. From businesses to organizations, join us in creating safer mobility solutions for Pakistani women.",
      features: ["Business partnerships", "Custom solutions", "Shared growth model", "Community impact"],
      icon: FiUsers,
      gradient: "from-purple-500 to-purple-600",
      lightGradient: "from-purple-50 to-purple-100",
      buttonText: "Join as Partner",
      illustration: (
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl rotate-3 opacity-20"></div>
          <div className="relative bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 shadow-lg">
            <FiUsers className="w-16 h-16 text-white mx-auto" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <FiTrendingUp className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-pink-500">Journey</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of women who are already part of Pakistan's safest transportation network
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div
                    className={`w-full h-full bg-gradient-to-br ${role.gradient} rounded-full transform translate-x-8 -translate-y-8`}
                  ></div>
                </div>

                {/* Illustration */}
                <motion.div whileHover={{ scale: 1.05, rotate: 2 }} transition={{ duration: 0.3 }}>
                  {role.illustration}
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Title & Subtitle */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{role.title}</h3>
                    <p
                      className={`text-sm font-semibold bg-gradient-to-r ${role.gradient} bg-clip-text text-transparent uppercase tracking-wider`}
                    >
                      {role.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">{role.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {role.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.2 + featureIndex * 0.1 + 0.3,
                        }}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${role.gradient} rounded-full mr-3 flex-shrink-0`}
                        ></div>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${role.gradient} hover:shadow-lg text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 group-hover:shadow-xl flex items-center justify-center space-x-2`}
                  >
                    <span>{role.buttonText}</span>
                    <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                      <FiArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${role.lightGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Download the NisaDrive app and join Pakistan's safest transportation network today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:shadow-lg text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Download App</span>
              <FiArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
