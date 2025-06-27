import { motion } from "framer-motion";
import { FiHeart, FiTrendingUp } from "react-icons/fi";

export function HeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative"
    >
      <div className="relative max-w-lg mx-auto">
        <svg viewBox="0 0 400 400" className="w-full h-auto drop-shadow-2xl">
          <defs>
            <linearGradient
              id="businessGrad1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#F7547F" />
              <stop offset="100%" stopColor="#FF8FA3" />
            </linearGradient>
            <linearGradient
              id="businessGrad2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FEF7F8" />
              <stop offset="100%" stopColor="#FCE7F3" />
            </linearGradient>
          </defs>

          {/* Background Circle */}
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="url(#businessGrad2)"
            opacity="0.4"
          />
          <circle
            cx="200"
            cy="200"
            r="140"
            fill="url(#businessGrad2)"
            opacity="0.2"
          />

          {/* Central Business Hub */}
          <g transform="translate(150, 150)">
            <circle cx="50" cy="50" r="40" fill="url(#businessGrad1)" />
            <circle cx="50" cy="50" r="30" fill="white" opacity="0.3" />
            <text
              x="50"
              y="55"
              textAnchor="middle"
              fill="white"
              fontSize="16"
              fontWeight="bold"
            >
              NISA
            </text>
          </g>

          {/* Connected Elements */}
          <g transform="translate(80, 80)">
            <circle
              cx="20"
              cy="20"
              r="15"
              fill="white"
              stroke="url(#businessGrad1)"
              strokeWidth="3"
            />
            <text
              x="20"
              y="24"
              textAnchor="middle"
              fill="url(#businessGrad1)"
              fontSize="12"
              fontWeight="bold"
            >
              👩
            </text>
          </g>

          <g transform="translate(300, 100)">
            <circle
              cx="20"
              cy="20"
              r="15"
              fill="white"
              stroke="url(#businessGrad1)"
              strokeWidth="3"
            />
            <text
              x="20"
              y="24"
              textAnchor="middle"
              fill="url(#businessGrad1)"
              fontSize="12"
              fontWeight="bold"
            >
              💻
            </text>
          </g>

          <g transform="translate(320, 280)">
            <circle
              cx="20"
              cy="20"
              r="15"
              fill="white"
              stroke="url(#businessGrad1)"
              strokeWidth="3"
            />
            <text
              x="20"
              y="24"
              textAnchor="middle"
              fill="url(#businessGrad1)"
              fontSize="12"
              fontWeight="bold"
            >
              🚗
            </text>
          </g>

          <g transform="translate(60, 300)">
            <circle
              cx="20"
              cy="20"
              r="15"
              fill="white"
              stroke="url(#businessGrad1)"
              strokeWidth="3"
            />
            <text
              x="20"
              y="24"
              textAnchor="middle"
              fill="url(#businessGrad1)"
              fontSize="12"
              fontWeight="bold"
            >
              💰
            </text>
          </g>

          {/* Connection Lines */}
          <g
            stroke="url(#businessGrad1)"
            strokeWidth="2"
            opacity="0.4"
            strokeDasharray="4,4"
          >
            <line x1="100" y1="100" x2="170" y2="170" />
            <line x1="320" y1="120" x2="230" y2="180" />
            <line x1="340" y1="300" x2="230" y2="220" />
            <line x1="80" y1="320" x2="170" y2="230" />
          </g>

          {/* Growth Arrow */}
          <g transform="translate(350, 50)">
            <path
              d="M0 20 L20 0 L15 5 L25 5 L25 15 L15 15 L20 20 Z"
              fill="url(#businessGrad1)"
            />
          </g>

          {/* Floating Business Cards */}
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-8 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-pink-100 max-w-xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center">
                <FiTrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">
                  Scaling Impact
                </div>
                <div className="text-xs text-gray-500">Sustainable Growth</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [15, -15, 15] }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute bottom-16 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-pink-100 max-w-xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full flex items-center justify-center">
                <FiHeart className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">
                  Purpose-Driven
                </div>
                <div className="text-xs text-gray-500">Women Empowerment</div>
              </div>
            </div>
          </motion.div>
        </svg>
      </div>
    </motion.div>
  );
}
