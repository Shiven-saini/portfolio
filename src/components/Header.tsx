'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'
import { useTheme } from '@/contexts/ThemeContext'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#expertise', label: 'Expertise' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-4 right-4 z-50"
    >
      <motion.div
        className={`max-w-6xl mx-auto transition-all duration-500 rounded-2xl overflow-hidden ${
          theme === 'dark'
            ? isScrolled
              ? 'bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-xl border border-gray-700/50 shadow-2xl shadow-accent-orange/10'
              : 'bg-gradient-to-r from-gray-900/70 via-black/70 to-gray-900/70 backdrop-blur-md border border-gray-800/30 shadow-xl shadow-black/20'
            : isScrolled
              ? 'bg-gradient-to-r from-white/95 via-gray-50/95 to-white/95 backdrop-blur-xl border border-gray-200/50 shadow-2xl shadow-accent-orange/15'
              : 'bg-gradient-to-r from-white/70 via-gray-50/70 to-white/70 backdrop-blur-md border border-gray-300/30 shadow-xl shadow-gray-400/20'
        }`}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient overlay for amazing colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-orange/5 via-transparent to-accent-yellow/5 pointer-events-none" />
        
        <div className="relative px-6 sm:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex items-center space-x-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className={`relative px-4 py-2 transition-all duration-300 group rounded-lg hover:bg-gradient-to-r hover:from-accent-orange/10 hover:to-accent-yellow/10 ${
                      theme === 'dark' 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-accent-orange to-accent-yellow group-hover:w-3/4 transition-all duration-300 rounded-full" />
                  </motion.button>
                ))}
              </nav>
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 transition-colors rounded-lg hover:bg-gradient-to-r hover:from-accent-orange/10 hover:to-accent-yellow/10 ${
                  theme === 'dark' 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              height: isMobileMenuOpen ? 'auto' : 0,
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className={`py-4 space-y-1 mt-2 ${
              theme === 'dark' 
                ? 'border-t border-gray-700/30' 
                : 'border-t border-gray-200/30'
            }`}>
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-3 transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-accent-orange/10 hover:to-accent-yellow/10 ${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  )
}

export default Header