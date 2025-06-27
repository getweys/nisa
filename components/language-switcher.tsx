"use client";

import { useLanguage } from "contexts/language-context";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiCheck } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { languages } from "data/data";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (code: "en" | "ar") => {
    setLanguage(code);
    setIsOpen(false);
  };

  // Get current language label
  const currentLanguage =
    languages.find((lang) => lang.code === language) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all duration-200"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select language"
      >
        <span className="w-4 h-4 flex items-center justify-center text-xs font-bold">
          {currentLanguage.label}
        </span>
        <FiChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 w-32 bg-white shadow-lg rounded-lg border border-gray-200 z-50"
            role="listbox"
          >
            {languages.map((lang) => (
              <li
                key={lang.code}
                role="option"
                aria-selected={language === lang.code}
              >
                <button
                  onClick={() => handleSelect(lang.code)}
                  className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 focus:bg-pink-50 focus:text-pink-600 transition-all duration-200"
                >
                  <span>{lang.name}</span>
                  {language === lang.code && (
                    <FiCheck className="w-4 h-4 text-pink-500" />
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
