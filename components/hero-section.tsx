"use client";

import { motion, type Easing, type MotionProps } from "framer-motion";
import { FiDownload, FiShield, FiUsers, FiStar, FiPlay } from "react-icons/fi";
import type { IconType } from "react-icons";
import { AnimatedButton } from "./animated-button";
import { HeroSvg } from "../svgs/heroSvg";

interface Stat {
  icon: IconType;
  value: string;
  label: string;
}

export function HeroSection() {
  const stats: Stat[] = [
    { icon: FiUsers, value: "10,000+", label: "Women Served" },
    { icon: FiShield, value: "100%", label: "Safe Rides" },
    { icon: FiStar, value: "4.9", label: "Rating" },
  ];

  const animation = (
    delay = 0,
    translateX = 0
  ): Pick<MotionProps, "initial" | "animate" | "transition"> => ({
    initial: { opacity: 0, x: translateX, y: translateX ? 0 : 20 },
    animate: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 0.8, delay, ease: "easeOut" as Easing },
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-pink-50/20 to-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 bg-pink-100 rounded-full opacity-20 blur-2xl sm:blur-3xl animate-pulse" />
        <div className="absolute top-40 right-10 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-pink-200 rounded-full opacity-15 blur-xl sm:blur-2xl" />
        <div className="absolute bottom-20 left-1/4 w-28 sm:w-36 lg:w-48 h-28 sm:h-36 lg:h-48 bg-pink-50 rounded-full opacity-30 blur-2xl sm:blur-3xl hidden sm:block" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            {...animation(0, -50)}
            className="text-center lg:text-left"
          >
            <motion.div
              {...animation(0.2)}
              className="inline-flex items-center gap-2 bg-pink-50 text-pink-600 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 border border-pink-200 shadow-sm"
              role="status"
            >
              <FiShield className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
              Pakistan's First Women-to-Women Service
            </motion.div>

            <motion.h1
              {...animation(0.3)}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              Your Journey, Your Way –{" "}
              <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                Safe, Affordable,
              </span>{" "}
              <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                Women-Driven
              </span>
            </motion.h1>

            <motion.p
              {...animation(0.5)}
              className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0"
            >
              NisaDrive offers safe, affordable, and culturally respectful
              transport for women across Pakistan, powered by technology.
            </motion.p>

            <motion.div
              {...animation(0.7)}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start"
            >
              <AnimatedButton
                size="sm"
                className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
              >
                <FiDownload
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  aria-hidden="true"
                />
                Download NisaDrive App
              </AnimatedButton>
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:border-pink-200 hover:text-pink-600 shadow-sm"
              >
                <FiPlay
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  aria-hidden="true"
                />
                Watch Demo
              </motion.button>
            </motion.div>

            <motion.div
              {...animation(0.9)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8"
              role="list"
            >
              {[
                "Background Verified Drivers",
                "24/7 Emergency Support",
                "Real-time GPS Tracking",
                "Transparent Pricing",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2"
                  role="listitem"
                >
                  <div
                    className="w-2 h-2 bg-pink-500 rounded-full"
                    aria-hidden="true"
                  />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              {...animation(1.1)}
              className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8"
            >
              {stats.map(({ icon: Icon, value, label }, i) => (
                <div key={i} className="text-center min-w-[80px]">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <Icon
                        className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                      {value}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <HeroSvg />
        </div>
      </div>
    </section>
  );
}
