"use client";
import { motion } from "framer-motion";
import { actionCards } from "data/data";

export const JoinMovementSection = () => (
  <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-500 via-pink-500 to-pink-500 relative overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-48 sm:w-80 h-48 sm:h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-48 sm:w-80 h-48 sm:h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full blur-3xl"></div>
    </div>

    <div className="relative max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12 sm:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
          Join the Movement
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-pink-100 max-w-2xl sm:max-w-4xl mx-auto leading-relaxed">
          Whether you're a policymaker, a tech investor, a gender rights
          champion, or simply a concerned citizen — you can be part of this
          mobility revolution.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
      >
        {actionCards.map((action, index) => (
          <motion.div
            key={action.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
          >
            <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              {action.icon}
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
              {action.title}
            </h3>
            <p className="text-sm sm:text-base text-pink-100 mb-4 sm:mb-6 leading-relaxed">
              {action.description}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-pink-600 font-bold px-4 sm:px-8 py-3 text-sm rounded-xl shadow-lg hover:shadow-xl transition-all relative z-10"
            >
              Get Started
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-xl sm:max-w-2xl mx-auto"
      >
        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
          Ready to Make an Impact?
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-pink-100">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white text-base sm:text-lg">📧</span>
            </div>
            <a
              href="mailto:impact@nisadrive.com"
              className="hover:text-white transition-colors duration-200 font-medium text-sm sm:text-base"
            >
              nisadrivepk@gmail.com
            </a>
          </div>
          <div className="hidden sm:block w-px h-6 sm:h-8 bg-white/30"></div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white text-base sm:text-lg">📞</span>
            </div>
            <a
              href="tel:+925154304820"
              className="hover:text-white transition-colors duration-200 font-medium text-sm sm:text-base"
            >
              +92 323 5307093
            </a>
          </div>
        </div>

        <div className="mt-6 sm:mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-pink-600 font-bold px-4 sm:px-8 py-3 text-bass rounded-xl shadow-lg hover:shadow-xl transition-all relative z-10"
          >
            Contact Us Today
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="mt-12 sm:mt-16"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <div
              className="w-2 sm:w-3 h-2 sm:h-3 bg-orange-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 sm:w-3 h-2 sm:h-3 bg-pink-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
          <span className="text-white/80 font-medium text-sm sm:text-lg">
            Together, We Drive Change
          </span>
          <div className="flex items-center gap-2">
            <div
              className="w-2 sm:w-3 h-2 sm:h-3 bg-pink-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.6s" }}
            ></div>
            <div
              className="w-2 sm:w-3 h-2 sm:h-3 bg-orange-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.8s" }}
            ></div>
            <div
              className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-400 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
