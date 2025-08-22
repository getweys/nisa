"use client";

import { FiChevronDown, FiCheck } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "contexts/language-context";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", label: t("language.english") },
    { code: "ur", label: t("language.urdu") },
  ];

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

  const handleSelect = (code: "en" | "ur") => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full focus:outline-none transition-all duration-200"
      >
        <span className="w-4 h-4 flex items-center justify-center text-xs font-bold">
          {language.toUpperCase()}
        </span>
        <FiChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <ul className="absolute top-full mt-2 w-32 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => handleSelect(lang.code as "en" | "ur")}
                className={`w-full flex items-center justify-between px-4 py-2 text-sm transition-all duration-200 
                  ${
                    language === lang.code
                      ? "bg-pink-50 text-pink-600 font-medium"
                      : "text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                  }`}
              >
                {lang.label}
                {language === lang.code && (
                  <FiCheck className="w-4 h-4 text-pink-500" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
