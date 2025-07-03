import { motion } from "framer-motion";
import { FiHeart, FiTrendingUp } from "react-icons/fi";

export function HeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full max-w-2xl mx-auto"
    >
      {/* Central Icon with Gradient Background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="relative flex justify-center items-center w-48 h-48 mx-auto bg-gradient-to-br from-pink-400 to-pink-600 rounded-full shadow-lg"
      >
        <FiHeart className="text-white w-20 h-20" />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 bg-white rounded-xl p-4 shadow-md border border-pink-200"
      >
        <div className="flex items-center gap-2">
          <FiTrendingUp className="text-pink-500 w-6 h-6" />
          <div>
            <div className="text-sm font-semibold text-gray-800">Growth</div>
            <div className="text-xs text-gray-500">Steady Rise</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 bg-white rounded-xl p-4 shadow-md border border-pink-200"
      >
        <div className="flex items-center gap-2">
          <FiHeart className="text-pink-500 w-6 h-6" />
          <div>
            <div className="text-sm font-semibold text-gray-800">Community</div>
            <div className="text-xs text-gray-500">Strong Bonds</div>
          </div>
        </div>
      </motion.div>

      {/* Subtle Background Circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 bg-pink-100 rounded-full opacity-30 blur-xl" />
        <div className="w-96 h-96 bg-pink-200 rounded-full opacity-20 blur-2xl -z-10" />
      </div>
    </motion.div>
  );
}
