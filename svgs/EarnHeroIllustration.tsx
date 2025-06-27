import { motion } from "framer-motion";
import { FiDollarSign, FiStar } from "react-icons/fi";

export default function EarnHeroIllustration() {
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
            <linearGradient id="earnGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F7547F" />
              <stop offset="100%" stopColor="#FF8FA3" />
            </linearGradient>
            <linearGradient id="earnGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF7F8" />
              <stop offset="100%" stopColor="#FCE7F3" />
            </linearGradient>
          </defs>

          {/* Background Circle */}
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="url(#earnGrad2)"
            opacity="0.4"
          />
          <circle
            cx="200"
            cy="200"
            r="140"
            fill="url(#earnGrad2)"
            opacity="0.2"
          />

          {/* Car with Female Driver */}
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
            fill="url(#earnGrad1)"
          />
          <rect
            x="130"
            y="230"
            width="140"
            height="50"
            rx="25"
            fill="#FFFFFF"
          />

          {/* Car Details */}
          <rect x="145" y="245" width="50" height="35" rx="17" fill="#DBEAFE" />
          <rect x="225" y="245" width="50" height="35" rx="17" fill="#DBEAFE" />
          <circle cx="160" cy="320" r="22" fill="#374151" />
          <circle cx="240" cy="320" r="22" fill="#374151" />

          {/* Female Driver */}
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

          {/* Money/Earnings Elements */}
          <g transform="translate(320, 100)">
            <circle
              cx="25"
              cy="25"
              r="30"
              fill="white"
              stroke="url(#earnGrad1)"
              strokeWidth="3"
            />
            <text
              x="25"
              y="30"
              textAnchor="middle"
              fill="url(#earnGrad1)"
              fontSize="16"
              fontWeight="bold"
            >
              ₨
            </text>
          </g>

          <g transform="translate(60, 80)">
            <circle
              cx="20"
              cy="20"
              r="25"
              fill="white"
              stroke="url(#earnGrad1)"
              strokeWidth="3"
            />
            <path
              d="M12 20 L16 24 L28 12"
              stroke="url(#earnGrad1)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* Phone with App */}
          <g transform="translate(50, 120)">
            <rect x="0" y="0" width="50" height="85" rx="12" fill="#212121" />
            <rect x="4" y="10" width="42" height="60" rx="6" fill="#F8FAFC" />
            <circle cx="25" cy="78" r="4" fill="#374151" />
            <rect
              x="8"
              y="15"
              width="34"
              height="4"
              rx="2"
              fill="url(#earnGrad1)"
            />
            <rect
              x="8"
              y="25"
              width="34"
              height="15"
              rx="3"
              fill="url(#earnGrad2)"
            />
            <text
              x="25"
              y="35"
              textAnchor="middle"
              fill="url(#earnGrad1)"
              fontSize="8"
              fontWeight="bold"
            >
              EARN
            </text>
          </g>
        </svg>

        {/* Floating Earning Cards */}
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
              <FiDollarSign className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">
                ₨45,000/month
              </div>
              <div className="text-xs text-gray-500">Top Earner</div>
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
              <FiStar className="w-6 h-6 text-pink-600" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">
                Flexible Hours
              </div>
              <div className="text-xs text-gray-500">Work on Your Terms</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
