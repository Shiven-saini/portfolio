'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { trackThemeToggle } from '@/utils/analytics'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  const handleToggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    trackThemeToggle(newTheme)
    toggleTheme()
  }

  return (
    <motion.button
      onClick={handleToggleTheme}
      className={`relative p-2 rounded-full transition-all duration-300 group ${
        theme === 'dark'
          ? 'bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-yellow-400/30'
          : 'bg-white/50 hover:bg-gray-100/50 border border-gray-200/50 hover:border-indigo-300/50'
      } backdrop-blur-sm shadow-lg hover:shadow-xl`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, rotate: -90 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: 180 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
        ) : (
          <Moon className="w-5 h-5 text-indigo-600 group-hover:text-indigo-500 transition-colors" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
