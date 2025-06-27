"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
  className?: string
  hover?: boolean
}

export function AnimatedCard({ children, delay = 0, className = "", hover = true }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={`bg-white rounded-xl shadow-lg border border-gray-100 p-6 ${className}`}
    >
      {children}
    </motion.div>
  )
}
