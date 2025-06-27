"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { LanguageSwitcher } from "./language-switcher";
import { AnimatedButton } from "./animated-button";
import { useLanguage } from "contexts/language-context";
import { Text } from "./text";
import { navigationItems } from "data/data";

export function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { isRTL } = useLanguage();
  const pathname = usePathname(); // Get current pathname

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Desktop Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:flex"
            >
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/nisa-logo.png"
                  alt="Nisa Drive Logo"
                  width={1000}
                  height={1000}
                  className="size-20 transition-transform hover:scale-105 duration-300"
                />
              </Link>
            </motion.div>

            {/* Mobile Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex lg:hidden justify-center flex-1"
            >
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/nisa-logo.png"
                  alt="Nisa Drive Logo"
                  width={1000}
                  height={1000}
                  className="size-16"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.labelKey}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      pathname === item.href
                        ? "text-pink-500 bg-pink-100/50"
                        : "text-gray-800 hover:text-pink-500 hover:bg-pink-100/50"
                    }`}
                  >
                    <Text path={item.labelKey} />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Desktop Actions */}
            <motion.div
              className="hidden lg:flex items-center space-x-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className={isRTL ? "ml-3" : "mr-3"}>
                <LanguageSwitcher />
              </div>
              <AnimatedButton className="flex items-center px-5 py-2 text-sm font-semibold rounded-full bg-pink-500 text-white hover:bg-pink-600">
                <Text path="navigation.downloadApp" />
                <FiArrowRight
                  className={isRTL ? "mr-2 w-4 h-4" : "ml-2 w-4 h-4"}
                />
              </AnimatedButton>
            </motion.div>

            {/* Mobile Menu Button and Language Switcher */}
            <div className="lg:hidden flex items-center justify-between w-full absolute top-1/2 -translate-y-1/2 px-4">
              <div className={isRTL ? "ml-2 order-2" : "mr-2 order-1"}>
                <LanguageSwitcher />
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full text-gray-800 hover:bg-gray-100"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              initial={{ x: isRTL ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? "-100%" : "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-full bg-white z-50 lg:hidden"
              role="dialog"
              aria-label="Mobile menu"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <Image
                    src="/images/nisa-logo.png"
                    alt="Nisa Drive Logo"
                    width={120}
                    height={36}
                    className="h-9 w-auto"
                  />
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full text-gray-800 hover:bg-gray-100"
                    aria-label="Close menu"
                  >
                    <FiX size={28} />
                  </motion.button>
                </div>

                {/* Mobile Navigation */}
                <div className="flex-1 overflow-y-auto py-8 px-6">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.labelKey}
                      initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block py-4 text-lg font-semibold transition-colors duration-200 ${
                          pathname === item.href
                            ? "text-pink-500"
                            : "text-gray-800 hover:text-pink-500"
                        }`}
                      >
                        <Text path={item.labelKey} />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Footer */}
                <div className="p-6 bg-gray-50">
                  <AnimatedButton className="w-full flex justify-center px-6 py-4 rounded-full bg-pink-600 text-white hover:bg-pink-700 text-base font-semibold shadow-md">
                    <Text path="navigation.downloadApp" />
                    <FiArrowRight
                      className={isRTL ? "mr-2 w-5 h-5" : "ml-2 w-5 h-5"}
                    />
                  </AnimatedButton>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
