"use client";

import { AnimatedButton } from "components/animated-button";
import { motion } from "framer-motion";
import { FiTrendingUp, FiHeart, FiMail, FiPhone } from "react-icons/fi";

export default function GrowthProjectionsSection() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Growth Projections &{" "}
            <span className="text-pink-600">Impact Forecast</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our 5-year roadmap to transform Pakistan's mobility landscape and
            empower thousands of women
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Growth Trajectory Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-pink-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border border-pink-200"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <FiTrendingUp className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                5-Year Growth Trajectory
              </h3>
            </div>

            <div className="space-y-4">
              {[
                { year: "1", riders: "500", revenue: "35.1 Million" },
                { year: "2", riders: "1,000", revenue: "70.2 Million" },
                { year: "3", riders: "1,500", revenue: "105.3 Million" },
                { year: "4", riders: "2,000", revenue: "140.4 Million" },
                { year: "5", riders: "2,500", revenue: "175.5 Million" },
              ].map((data, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-pink-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-pink-500 text-white rounded-lg flex items-center justify-center font-bold">
                      {data.year}
                    </div>
                    <div>
                      <div className="text-gray-900 font-semibold">
                        Year {data.year}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {data.riders} Active Riders
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-900 font-bold">
                      PKR {data.revenue}
                    </div>
                    <div className="text-gray-600 text-sm">
                      Cumulative Revenue
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border border-pink-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-900 font-semibold">
                  Revenue Growth
                </span>
                <span className="text-gray-600 text-sm">PKR (Millions)</span>
              </div>
              <div className="flex items-end gap-1 h-24">
                {[35.1, 70.2, 105.3, 140.4, 175.5].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${(value / 175.5) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    className="flex-1 bg-pink-500 rounded-t-md"
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-gray-600 text-xs">
                <span>Y1</span>
                <span>Y2</span>
                <span>Y3</span>
                <span>Y4</span>
                <span>Y5</span>
              </div>
            </div>
          </motion.div>

          {/* Impact Forecast Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-pink-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border border-pink-200"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <FiHeart className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Impact Forecast
              </h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: "👩",
                  metric: "10,000+",
                  label: "Women Empowered",
                  description: "Direct economic opportunities created",
                },
                {
                  icon: "🚗",
                  metric: "4.5M+",
                  label: "Safe Rides",
                  description: "Secure transportation journeys completed",
                },
                {
                  icon: "💰",
                  metric: "PKR 500M+",
                  label: "Ecosystem Value",
                  description: "Total economic impact generated",
                },
              ].map((impact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 bg-white rounded-lg shadow-sm hover:bg-pink-50 transition-colors border border-pink-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center text-xl">
                      {impact.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {impact.metric}
                      </div>
                      <div className="text-lg font-semibold text-gray-700">
                        {impact.label}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {impact.description}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-pink-100">
                <div className="text-xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600 text-sm">Cities Covered</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-pink-100">
                <div className="text-xl font-bold text-gray-900">95%</div>
                <div className="text-gray-600 text-sm">Safety Rating</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-pink-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-pink-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Join Pakistan's First{" "}
              <span className="text-pink-600">Women-Owned Ride Revolution</span>
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Be part of something historic. Franchise Licenses are limited —
              secure your territory and join our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                size="lg"
                className="bg-pink-600 text-white hover:bg-pink-700 font-semibold px-8 py-3 rounded-full"
                onClick={() =>
                  window.open(
                    "https://forms.google.com/franchise-application-placeholder",
                    "_blank"
                  )
                }
              >
                <span className="mr-2">🚀</span> Apply for Franchise
              </AnimatedButton>
              <AnimatedButton
                size="lg"
                variant="outline"
                className="border-2 border-pink-600 text-pink-600 hover:bg-pink-50 font-semibold px-8 py-3 rounded-full"
              >
                <span className="mr-2">📊</span> Download Business Plan
              </AnimatedButton>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center text-gray-600">
              <div className="flex items-center gap-2">
                <FiMail className="w-5 h-5" />
                <a
                  href="mailto:support@fairist.ai"
                  className="hover:text-pink-600 transition-colors"
                >
                  support@fairist.ai
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone className="w-5 h-5" />
                <a
                  href="tel:+925154304820"
                  className="hover:text-pink-600 transition-colors"
                >
                  +92 51 543 0482
                </a>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-pink-600">
              <div className="w-2 h-2 bg-pink-600 rounded-full animate-pulse" />
              <span className="font-semibold">
                Limited Franchise Territories Available
              </span>
              <div className="w-2 h-2 bg-pink-600 rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
