import { motion } from "framer-motion";

export default function EarnHeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="relative max-w-lg mx-auto">
        <svg viewBox="0 0 400 400" className="w-full h-auto">
          <defs>
            <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#BE185D" />
            </linearGradient>
            <linearGradient id="lightPink" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FCE7F3" />
              <stop offset="100%" stopColor="#F3E8FF" />
            </linearGradient>
          </defs>

          {/* Background */}
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="url(#lightPink)"
            opacity="0.3"
          />

          {/* Central Phone */}
          <g transform="translate(170, 150)">
            <rect x="0" y="0" width="60" height="100" rx="12" fill="#1F2937" />
            <rect x="4" y="8" width="52" height="84" rx="8" fill="white" />
            <rect
              x="8"
              y="15"
              width="44"
              height="25"
              rx="4"
              fill="url(#pinkGrad)"
            />
            <text
              x="30"
              y="32"
              textAnchor="middle"
              fill="white"
              fontSize="10"
              fontWeight="bold"
            >
              ₨15,000
            </text>
            <rect
              x="12"
              y="50"
              width="36"
              height="4"
              rx="2"
              fill="url(#pinkGrad)"
            />
            <rect
              x="12"
              y="60"
              width="24"
              height="4"
              rx="2"
              fill="url(#pinkGrad)"
            />
            <rect
              x="12"
              y="70"
              width="30"
              height="4"
              rx="2"
              fill="url(#pinkGrad)"
            />
          </g>

          {/* Money Symbols */}
          <motion.g
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx="120" cy="120" r="20" fill="url(#pinkGrad)" />
            <text
              x="120"
              y="127"
              textAnchor="middle"
              fill="white"
              fontSize="16"
              fontWeight="bold"
            >
              ₨
            </text>
          </motion.g>

          <motion.g
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <circle cx="280" cy="130" r="18" fill="url(#pinkGrad)" />
            <text
              x="280"
              y="136"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontWeight="bold"
            >
              ₨
            </text>
          </motion.g>

          <motion.g
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <circle cx="100" cy="280" r="22" fill="url(#pinkGrad)" />
            <text
              x="100"
              y="287"
              textAnchor="middle"
              fill="white"
              fontSize="18"
              fontWeight="bold"
            >
              ₨
            </text>
          </motion.g>

          {/* Female Figure */}
          <g transform="translate(250, 220)">
            <circle cx="30" cy="30" r="25" fill="#FBBF24" />
            <path
              d="M15 20 Q30 10 45 20"
              stroke="url(#pinkGrad)"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="22" cy="28" r="2" fill="#374151" />
            <circle cx="38" cy="28" r="2" fill="#374151" />
            <path
              d="M20 40 Q30 48 40 40"
              stroke="#374151"
              strokeWidth="2"
              fill="none"
            />
            <rect
              x="10"
              y="55"
              width="40"
              height="50"
              rx="20"
              fill="url(#pinkGrad)"
            />
            <rect x="5" y="65" width="15" height="35" rx="7" fill="#FBBF24" />
            <rect x="40" y="65" width="15" height="35" rx="7" fill="#FBBF24" />
          </g>

          {/* Wallet */}
          <g transform="translate(120, 200)">
            <rect
              x="0"
              y="0"
              width="40"
              height="25"
              rx="5"
              fill="url(#pinkGrad)"
            />
            <rect x="5" y="5" width="30" height="15" rx="3" fill="white" />
            <rect
              x="8"
              y="8"
              width="24"
              height="3"
              rx="1"
              fill="url(#pinkGrad)"
            />
            <rect
              x="8"
              y="13"
              width="16"
              height="3"
              rx="1"
              fill="url(#pinkGrad)"
            />
          </g>

          {/* Stars */}
          <motion.g
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <path
              d="M320 100 L325 110 L335 110 L327 118 L330 128 L320 122 L310 128 L313 118 L305 110 L315 110 Z"
              fill="url(#pinkGrad)"
            />
          </motion.g>

          <motion.g
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <path
              d="M80 160 L83 167 L90 167 L85 172 L87 179 L80 175 L73 179 L75 172 L70 167 L77 167 Z"
              fill="url(#pinkGrad)"
            />
          </motion.g>
        </svg>

        {/* Floating Cards */}
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-8 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-pink-100 max-w-xs"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">₨25,000</div>
              <div className="text-xs text-gray-500">This Month</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-12 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-pink-100 max-w-xs"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">Flexible</div>
              <div className="text-xs text-gray-500">Work Hours</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
