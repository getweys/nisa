"use client";

import { businessLinks, legalLinks, quickLinks, socialLinks } from "data/data";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  ChevronRight,
  Heart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 via-pink-50 to-gray-50 border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-6 sm:mb-8"
              >
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <Image
                    src="/images/nisa-logo.png"
                    alt="Nisa Drive"
                    width={160}
                    height={48}
                    className="h-8 w-auto max-w-[140px] sm:h-10 sm:max-w-[160px]"
                    priority
                  />
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Nisa Drive
                    </h2>
                    <p className="text-xs sm:text-sm text-pink-600 font-medium">
                      Safe • Reliable • Affordable
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-pink-100 mb-6 sm:mb-8"
              >
                <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  Your trusted ride-sharing partner across Pakistan. Experience
                  safe, comfortable, and affordable transportation with women
                  drivers for women passengers.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex items-center text-gray-600 group"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-100 group-hover:bg-pink-200 rounded-full flex items-center justify-center mr-3 sm:mr-4 transition-colors">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Email us
                      </p>
                      <p className="text-sm sm:font-medium">
                        hello@nisadrive.com
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="flex items-center text-gray-600 group"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-100 group-hover:bg-pink-200 rounded-full flex items-center justify-center mr-3 sm:mr-4 transition-colors">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Call us
                      </p>
                      <p className="text-sm sm:font-medium">+92 300 1234567</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="flex items-start text-gray-600 group"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-100 group-hover:bg-pink-200 rounded-full flex items-center justify-center mr-3 sm:mr-4 transition-colors">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Available in
                      </p>
                      <p className="text-sm sm:font-medium">
                        Karachi, Lahore, Islamabad & Rawalpindi
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h4 className="text-gray-900 font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wide">
                  Connect With Us
                </h4>
                <div className="flex space-x-2 sm:space-x-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-pink-100 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm text-pink-500 border-2 border-pink-500 hover:bg-pink-500 hover:border-pink-600 group"
                      aria-label={social.label}
                    >
                      <social.icon
                        size={18}
                        className="group-hover:text-pink-100 transition-colors"
                      />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-gray-900 font-bold mb-4 sm:mb-6 text-base sm:text-lg relative">
                Quick Links
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-6 sm:w-8 h-1 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full"></div>
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <motion.li
                    key={link.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-pink-600 transition-all duration-200 text-sm sm:text-base flex items-center group hover:translate-x-1"
                    >
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all text-pink-500" />
                      <span className="group-hover:font-medium transition-all">
                        {link.title}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Business Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h3 className="text-gray-900 font-bold mb-4 sm:mb-6 text-base sm:text-lg relative">
                Business
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-6 sm:w-8 h-1 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full"></div>
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {businessLinks.map((link) => (
                  <motion.li
                    key={link.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-pink-600 transition-all duration-200 text-sm sm:text-base flex items-center group hover:translate-x-1"
                    >
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all text-pink-500" />
                      <span className="group-hover:font-medium transition-all">
                        {link.title}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* App Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <h3 className="text-gray-900 font-bold mb-4 sm:mb-6 text-base sm:text-lg relative">
                Get Our App
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-6 sm:w-8 h-1 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full"></div>
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center bg-white hover:bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-300 border border-gray-200 hover:border-pink-200 hover:shadow-md group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-105 transition-transform">
                    <Download className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 leading-tight">
                      Download on the
                    </div>
                    <div className="text-sm sm:text-base font-bold text-gray-900">
                      App Store
                    </div>
                  </div>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center bg-white hover:bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-300 border border-gray-200 hover:border-pink-200 hover:shadow-md group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-105 transition-transform">
                    <Download className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 leading-tight">
                      Get it on
                    </div>
                    <div className="text-sm sm:text-base font-bold text-gray-900">
                      Google Play
                    </div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-pink-200">
          <div className="py-4 sm:py-">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-gray-600 text-xs sm:text-sm text-center sm:text-left flex items-center flex-wrap justify-center sm:justify-start gap-1 sm:gap-2"
              >
                <span>
                  © {new Date().getFullYear()} Nisa Drive. All rights reserved.
                </span>
                <span className="text-pink-400">•</span>
                <span className="flex items-center">
                  Made with{" "}
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500 mx-1 fill-current" />{" "}
                  in Pakistan
                </span>
              </motion.div>
              <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-4 text-xs sm:text-sm">
                {legalLinks.map((link, index) => (
                  <motion.div
                    key={link.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-pink-600 transition-colors duration-200 hover:underline"
                    >
                      {link.title}
                    </Link>
                    {index < legalLinks.length - 1 && (
                      <span className="text-pink-300 mx-2 sm:mx-3">•</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
