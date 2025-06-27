"use client";

import { motion } from "framer-motion";
import { services } from "data/data";
import CourierIllustration from "svgs/CourierIllustration";
import PersonalIllustration from "svgs/PersonalIllustration";
import ProfessionalIllustration from "svgs/ProfessionalIllustration";
import StudentIllustration from "svgs/StudentIllustration";
import { AnimatedButton } from "./animated-button";

const illustrations = [
  StudentIllustration,
  ProfessionalIllustration,
  PersonalIllustration,
  CourierIllustration,
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-pink-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-pink-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering Pakistani women with tailored transportation solutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Illustration = illustrations[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-xl p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-200 group-hover:border-pink-300">
                  <div className="flex flex-col items-center text-center h-full">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`rounded-full p-3 mb-4 bg-gradient-to-br ${service.color} w-14 h-14 flex items-center justify-center`}
                    >
                      <div className="text-white">
                        <Illustration />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    <a
                      href="#"
                      className="mt-4 text-sm font-medium text-pink-500 hover:text-pink-700 hover:underline transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mx-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12 max-w-2xl mx-auto shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Explore Our Services?
            </h3>
            <p className="text-gray-600 mb-6">
              Download NisaDrive and access safe, women-centric transportation
              with ease.
            </p>
            <div className="flex justify-center">
              <AnimatedButton
                size="sm"
                className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
              >
                Get Started Today
              </AnimatedButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
