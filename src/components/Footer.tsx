'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 border-t border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-500">
          © 2025 Shiven Saini. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer