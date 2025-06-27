"use client";

import { motion, type Easing, type MotionProps } from "framer-motion";
import { FiShield } from "react-icons/fi";

const animation = (
  delay = 0,
  translateX = 0
): Pick<MotionProps, "initial" | "animate" | "transition"> => ({
  initial: { opacity: 0, x: translateX, y: translateX ? 0 : 20 },
  animate: { opacity: 1, x: 0, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" as Easing },
});

export function HeroSvg() {
  return (
    <motion.div
      {...animation(0.4, 50)}
      className="relative max-w-xs sm:max-w-md lg:max-w-lg mx-auto w-full"
    >
      <svg
        viewBox="0 0 400 400"
        className="w-full h-auto drop-shadow-2xl"
        role="img"
        aria-label="Illustration of a car driven by a woman with a mobile app"
      >
        <defs>
          <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F7547F" />
            <stop offset="100%" stopColor="#FF8FA3" />
          </linearGradient>
          <linearGradient id="heroGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF7F8" />
            <stop offset="100%" stopColor="#FCE7F3" />
          </linearGradient>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="10"
              floodColor="#F7547F"
              floodOpacity="0.1"
            />
          </filter>
        </defs>
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="url(#heroGrad2)"
          opacity="0.4"
        />
        <circle
          cx="200"
          cy="200"
          r="140"
          fill="url(#heroGrad2)"
          opacity="0.2"
        />
        <ellipse
          cx="200"
          cy="320"
          rx="90"
          ry="18"
          fill="#E5E7EB"
          opacity="0.4"
        />
        <rect
          x="110"
          y="250"
          width="180"
          height="70"
          rx="35"
          fill="url(#heroGrad1)"
          filter="url(#shadow)"
        />
        <rect x="130" y="230" width="140" height="50" rx="25" fill="#FFFFFF" />
        <rect x="145" y="245" width="50" height="35" rx="17" fill="#DBEAFE" />
        <rect x="225" y="245" width="50" height="35" rx="17" fill="#DBEAFE" />
        <circle cx="160" cy="320" r="22" fill="#374151" />
        <circle cx="240" cy="320" r="22" fill="#374151" />
        <circle cx="160" cy="320" r="12" fill="#6B7280" />
        <circle cx="240" cy="320" r="12" fill="#6B7280" />
        <g transform="translate(165, 250)">
          <circle cx="15" cy="15" r="12" fill="#FBBF24" />
          <path
            d="M8 8 Q15 2 22 8"
            stroke="#8B5CF6"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="11" cy="12" r="1.5" fill="#374151" />
          <circle cx="19" cy="12" r="1.5" fill="#374151" />
          <path
            d="M11 18 Q15 22 19 18"
            stroke="#374151"
            strokeWidth="1.5"
            fill="none"
          />
        </g>
        <g transform="translate(320, 120)">
          <circle
            cx="25"
            cy="25"
            r="30"
            fill="url(#heroGrad1)"
            opacity="0.15"
          />
          <circle cx="25" cy="25" r="20" fill="white" />
          <path
            d="M15 25 L20 30 L35 15"
            stroke="url(#heroGrad1)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </g>
        <g transform="translate(60, 100)">
          <rect
            x="0"
            y="0"
            width="50"
            height="85"
            rx="12"
            fill="#212121"
            filter="url(#shadow)"
          />
          <rect x="4" y="10" width="42" height="60" rx="6" fill="#F8FAFC" />
          <circle cx="25" cy="78" r="4" fill="#374151" />
          <rect
            x="8"
            y="15"
            width="34"
            height="4"
            rx="2"
            fill="url(#heroGrad1)"
          />
          <circle cx="12" cy="25" r="3" fill="url(#heroGrad1)" />
          <circle cx="38" cy="25" r="3" fill="url(#heroGrad1)" />
          <rect
            x="8"
            y="35"
            width="34"
            height="15"
            rx="3"
            fill="url(#heroGrad2)"
          />
          <rect
            x="10"
            y="37"
            width="15"
            height="2"
            rx="1"
            fill="url(#heroGrad1)"
          />
          <rect x="10" y="41" width="20" height="2" rx="1" fill="#9CA3AF" />
          <rect x="10" y="45" width="18" height="2" rx="1" fill="#9CA3AF" />
        </g>
        <g transform="translate(330, 60)">
          <circle
            cx="20"
            cy="20"
            r="18"
            fill="white"
            stroke="url(#heroGrad1)"
            strokeWidth="3"
            filter="url(#shadow)"
          />
          <text
            x="20"
            y="24"
            textAnchor="middle"
            fill="url(#heroGrad1)"
            fontSize="12"
            fontWeight="bold"
          >
            ₨
          </text>
        </g>
        <g transform="translate(40, 60)">
          <circle
            cx="20"
            cy="20"
            r="18"
            fill="white"
            stroke="url(#heroGrad1)"
            strokeWidth="3"
            filter="url(#shadow)"
          />
          <path
            d="M12 20 L16 24 L28 12"
            stroke="url(#heroGrad1)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </svg>

      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 -right-4 sm:top-8 sm:-right-6 bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-pink-100 max-w-[200px] sm:max-w-[240px]"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-100 rounded-full flex items-center justify-center">
            <FiShield
              className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500"
              aria-hidden="true"
            />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-gray-900">
              100% Safe Rides
            </div>
            <div className="text-[10px] sm:text-xs text-gray-500">
              Verified Female Drivers
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
