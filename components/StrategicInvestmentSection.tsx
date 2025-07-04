"use client";

import { AnimatedButton } from "components/animated-button";
import { investmentCards, iconMap } from "data/data";
import { motion } from "framer-motion";
import { FiTarget } from "react-icons/fi";

export default function StrategicInvestmentSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Strategic{" "}
            <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
              Investment Pathways
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We offer three tailored tracks for participation based on your
            interest and expertise
          </p>
        </motion.div>

        {/* Investment Cards */}
        {investmentCards.map((card, index) => {
          const IconComponent = iconMap[card.icon];
          const AdditionalLinkIcon = card.additionalLink
            ? iconMap[card.additionalLink.icon]
            : null;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="w-full mt-8 sm:mt-10 lg:mt-12"
            >
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
                {/* Decorative Circles */}
                <div
                  className={`absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-${card.borderColor}-100 rounded-full opacity-20 -translate-y-16 sm:-translate-y-20 translate-x-16 sm:translate-x-20`}
                />
                <div
                  className={`absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-${card.borderColor}-50 rounded-full opacity-30 translate-y-12 sm:translate-y-16 -translate-x-12 sm:-translate-x-16`}
                />

                <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12">
                  {/* Card Header */}
                  <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`size-16 bg-gradient-to-r ${card.color} rounded-3xl flex items-center justify-center shadow-xl`}
                    >
                      <IconComponent className="size-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl sm:text-3xl  font-bold text-gray-900">
                        {card.title}
                      </h3>
                      <p
                        className={`text-base text-${card.borderColor}-600 font-semibold`}
                      >
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Card Description */}
                  <div className="mb-6 sm:mb-8 lg:mb-10">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Benefits Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 lg:mb-10">
                    {card.benefits.map((benefit, benefitIndex) => (
                      <motion.div
                        key={benefitIndex}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: benefitIndex * 0.1,
                        }}
                        className="group"
                      >
                        <div
                          className={`bg-gray-50 hover:bg-white rounded-2xl p-4 sm:p-6 h-full transition-all duration-300 hover:shadow-lg border border-gray-100 group-hover:border-${card.borderColor}`}
                        >
                          <div className="flex items-start gap-3 sm:gap-4">
                            <div
                              className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center text-lg sm:text-xl shadow-sm flex-shrink-0`}
                            >
                              {benefit.icon}
                            </div>
                            <div className="flex-1">
                              <h4
                                className={`font-bold text-gray-900 mb-2 group-hover:text-${card.borderColor}-600 transition-colors text-sm sm:text-base`}
                              >
                                {benefit.title}
                              </h4>
                              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                {benefit.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Target Audience Section */}
                  <div
                    className={`bg-gradient-to-r from-${card.borderColor}-50 to-${card.borderColor}-100 rounded-2xl p-4 sm:p-6 md:p-8 border border-${card.borderColor} mb-6 sm:mb-8`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <FiTarget
                        className={`w-5 h-5 sm:w-6 sm:h-6 text-${card.borderColor}-600`}
                      />
                      <h4 className="text-base sm:text-xl font-bold text-gray-900">
                        Ideal For:
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                      {card.targetAudience.map((audience, audienceIndex) => (
                        <div key={audienceIndex} className="text-center">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-lg sm:text-xl mb-2 sm:mb-3 mx-auto shadow-sm">
                            {audience.icon}
                          </div>
                          <h5 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                            {audience.title}
                          </h5>
                          <p className="text-xs sm:text-sm text-gray-600">
                            {audience.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Link */}
                  {card.additionalLink && AdditionalLinkIcon && (
                    <div className="flex items-center gap-3 mb-6 sm:mb-8">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <AdditionalLinkIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">
                          {card.additionalLink.title}
                        </div>
                        <button
                          className={`text-xs sm:text-sm text-${
                            card.additionalLink.color
                          } hover:text-${card.additionalLink.color.replace(
                            "600",
                            "700"
                          )} font-medium hover:underline transition-colors`}
                        >
                          {card.additionalLink.text}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Call-to-Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
                    <AnimatedButton size="md">
                      {card.cta.primary}
                    </AnimatedButton>
                    <AnimatedButton size="md" variant="outline">
                      {card.cta.secondary}
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
