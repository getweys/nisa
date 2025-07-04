"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PinkCard({
  heading = "Ready to Experience Safe & Empowering Travel?",
  description = "Join thousands of Pakistani women who trust NisaDrive for their daily transportation needs.",
  buttonText = "Download NisaDrive App",
}) {
  return (
    <div className="mx-2">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full translate-y-12 -translate-x-12" />

          <motion.h3
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {heading}
          </motion.h3>
          <motion.p
            className="text-sm sm:text-lg mb-8 opacity-90 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {description}
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-pink-600 font-bold px-4 sm:px-8 py-4 text-base rounded-xl shadow-lg hover:shadow-xl transition-all relative z-10"
          >
            {buttonText}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
