"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { AnimatedButton } from "components/animated-button";
import { featuredServices } from "data/data";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 bg-gradient-to-br from-white via-pink-50/30 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-100 rounded-full opacity-20 blur-2xl" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-pink-200 rounded-full opacity-15 blur-xl" />
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-50 rounded-full opacity-25 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-4xl sm:text-6xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>

            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-xl md:text-3xl font-semibold text-gray-800 mb-6">
                NisaDrive – Designed for Women, Driven by Purpose
              </h2>
              <p className="text-md sm:text-lg text-gray-500 leading-relaxed">
                At NisaDrive, we go beyond ride-hailing. We offer safe,
                culturally-sensitive, and tech-enabled mobility services,
                created exclusively for women by women – empowering riders,
                drivers, and communities across Pakistan. Our services are
                tailored for convenience, dignity, and peace of mind.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`${service.bgColor} rounded-3xl p-8 md:p-12 relative overflow-hidden`}
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-15 rounded-full translate-y-12 -translate-x-12" />

                <div className="relative z-10">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-2 mb-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`inline-flex items-center justify-center size-14 sm:size-16 bg-gradient-to-r ${service.color} rounded-2xl shadow-lg`}
                        >
                          <service.icon className="size-7 sm:size-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl md:text-4xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-sm sm:text-lg text-gray-500 mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">
                          {service.subtitle || "Features:"}
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {service.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center gap-3"
                            >
                              <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="text-gray-500 font-medium text-sm sm:text-base">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col gap-4">
                        <p className="text-sm sm:text-lg font-semibold text-gray-800 italic">
                          {service.cta}
                        </p>
                        {service.specialCta && (
                          <p className="text-xl font-bold text-pink-600 italic">
                            {service.specialCta}
                          </p>
                        )}
                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                          <AnimatedButton
                            size="lg"
                            className={`bg-gradient-to-r ${service.color} hover:shadow-lg text-white font-semibold px-8 py-3`}
                          >
                            Get Started
                          </AnimatedButton>
                        </div>
                      </div>
                    </div>

                    {/* Illustration */}
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative"
                      >
                        <div className="w-full h-80 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center">
                          <div className="text-center">
                            <motion.div
                              animate={{ y: [-10, 10, -10] }}
                              transition={{
                                duration: 4,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              }}
                              className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r ${service.color} rounded-full mb-4 shadow-xl`}
                            >
                              <service.icon className="w-12 h-12 text-white" />
                            </motion.div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2 px-2">
                              {service.title}
                            </h4>
                            <p className="text-gray-600">
                              Safe • Reliable • Professional
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-12 max-w-4xl mx-auto text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full translate-y-12 -translate-x-12" />

              <motion.h2
                className="text-xl sm:text-4xl  font-bold mb-6 lg:mb-8 relative z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Not Just A Service —{" "}
                <span className="text-pink-100">A Social Shift</span>
              </motion.h2>

              <motion.p
                className="text-sm sm:text-base mb-6 sm:mb-8 lg:mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Each ride with NisaDrive is a step toward economic
                participation, digital inclusion, and gender-equity in public
                spaces. Whether you're a student, mom, entrepreneur, teacher, or
                health worker — we're here to move you.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex gap-4 sm:gap-6 justify-center flex-col sm:flex-row"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-pink-600 font-bold px-4 sm:px-8 py-4 text-base rounded-xl shadow-lg hover:shadow-xl transition-all relative z-10"
                >
                  Join the Movement
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-pink-600 font-bold px-4 sm:px-8 py-4 text-base rounded-xl shadow-lg hover:shadow-xl transition-all relative z-10"
                >
                  Download NisaDrive
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
