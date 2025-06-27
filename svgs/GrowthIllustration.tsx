import { motion } from "framer-motion";

export default function GrowthIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="order-1 lg:order-2"
    >
      <div className="relative max-w-md mx-auto lg:max-w-lg">
        <svg viewBox="0 0 400 400" className="w-full h-auto drop-shadow-2xl">
          <defs>
            <linearGradient
              id="spiralGrad1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="50%" stopColor="#F472B6" />
              <stop offset="100%" stopColor="#FECDD3" />
            </linearGradient>
            <linearGradient
              id="spiralGrad2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FFF1F2" />
              <stop offset="100%" stopColor="#FEE2E2" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background */}
          <circle
            cx="200"
            cy="200"
            r="190"
            fill="url(#spiralGrad2)"
            opacity="0.4"
          />
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="url(#spiralGrad2)"
            opacity="0.2"
          />

          {/* Spiral Path */}
          <g transform="translate(200, 200)">
            <motion.path
              d="M0 100 C50 100 100 50 100 0 C100 -50 50 -100 0 -100 C-50 -100 -100 -50 -100 0 C-100 50 -50 100 0 100"
              fill="none"
              stroke="url(#spiralGrad1)"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              filter="url(#glow)"
            />

            {/* Nodes */}
            <motion.circle
              cx="0"
              cy="100"
              r="15"
              fill="#FBBF24"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              filter="url(#glow)"
            />
            <motion.circle
              cx="100"
              cy="0"
              r="15"
              fill="#FBBF24"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              filter="url(#glow)"
            />
            <motion.circle
              cx="0"
              cy="-100"
              r="15"
              fill="#8B5CF6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              filter="url(#glow)"
            />
            <motion.circle
              cx="-100"
              cy="0"
              r="15"
              fill="#8B5CF6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              filter="url(#glow)"
            />

            {/* Labels */}
            <text
              x="0"
              y="130"
              textAnchor="middle"
              fill="#1F2937"
              fontSize="12"
              fontWeight="600"
              fontFamily="Inter, sans-serif"
            >
              Rider
            </text>
            <text
              x="130"
              y="0"
              textAnchor="middle"
              fill="#1F2937"
              fontSize="12"
              fontWeight="600"
              fontFamily="Inter, sans-serif"
            >
              Mentor
            </text>
            <text
              x="0"
              y="-130"
              textAnchor="middle"
              fill="#1F2937"
              fontSize="12"
              fontWeight="600"
              fontFamily="Inter, sans-serif"
            >
              Captain
            </text>
            <text
              x="-130"
              y="0"
              textAnchor="middle"
              fill="#1F2937"
              fontSize="12"
              fontWeight="600"
              fontFamily="Inter, sans-serif"
            >
              Leader
            </text>
          </g>

          {/* Success Elements */}
          <g transform="translate(330, 90)">
            <motion.circle
              cx="20"
              cy="20"
              r="12"
              fill="white"
              stroke="url(#spiralGrad1)"
              strokeWidth="2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.1 }}
              filter="url(#glow)"
            />
            <path
              d="M14 20 L18 24 L26 16"
              stroke="url(#spiralGrad1)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          <g transform="translate(70, 70)">
            <motion.circle
              cx="15"
              cy="15"
              r="10"
              fill="white"
              stroke="url(#spiralGrad1)"
              strokeWidth="2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.3 }}
              filter="url(#glow)"
            />
            <text
              x="15"
              y="18"
              textAnchor="middle"
              fill="url(#spiralGrad1)"
              fontSize="8"
              fontWeight="bold"
            >
              ★
            </text>
          </g>
        </svg>

        {/* Floating Achievement Cards */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-4 sm:top-8 -right-2 sm:-right-6 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-4 border border-pink-200 max-w-[140px] sm:max-w-[180px]"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-full flex items-center justify-center text-sm sm:text-base shadow-sm">
              🏆
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-gray-900">
                Regional Leader
              </div>
              <div className="text-[10px] sm:text-xs text-gray-600">
                Strategic Role
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 sm:bottom-16 -left-2 sm:-left-6 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-4 border border-pink-200 max-w-[140px] sm:max-w-[180px]"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-200 to-purple-300 rounded-full flex items-center justify-center text-sm sm:text-base shadow-sm">
              🎓
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-gray-900">
                Master Trainer
              </div>
              <div className="text-[10px] sm:text-xs text-gray-600">
                Expert Mentor
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
