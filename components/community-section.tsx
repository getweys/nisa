"use client";

import { roles } from "data/data";
import { motion } from "framer-motion";
import Link from "next/link";
import DriverIllustration from "svgs/DriverIllustration";
import PartnerIllustration from "svgs/PartnerIllustration";
import RiderIllustration from "svgs/RiderIllustration";
import PinkCard from "./PinkCard";

const illustrations = [
  RiderIllustration,
  DriverIllustration,
  PartnerIllustration,
];

export function CommunitySection() {
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
            Join the <span className="text-pink-600">NisaDrive Community</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Be part of Pakistan's first women-to-women mobility platform,
            whether as a rider, driver, or partner.
          </p>
        </motion.div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {roles.map((role, index) => {
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
                    {/* Illustration */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-full h-32 mb-4"
                    >
                      <Illustration />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed flex-grow">
                      {role.description}
                    </p>

                    {role.link && (
                      <Link
                        className="mt-4 text-sm font-medium text-pink-500 hover:text-pink-700 hover:underline transition-colors"
                        href={role.link}
                      >
                        Join as {role.title}
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <PinkCard
        heading="Ready to Be Part of the Change?"
        description="Download the NisaDrive app today and join thousands of women creating a safer, more empowered Pakistan."
        buttonText="Download NisaDrive App"
      />
    </section>
  );
}
