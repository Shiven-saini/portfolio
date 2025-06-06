'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, ArrowRight } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Shiven Saini'
  const { theme } = useTheme()

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24">
      {/* Background gradient */}
      <div className={`absolute inset-0 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-black via-gray-900/20 to-black' 
          : 'bg-gradient-to-br from-gray-50 via-white/20 to-gray-100'
      }`} />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              theme === 'dark' ? 'bg-accent-orange/30' : 'bg-accent-orange/20'
            }`}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              delay: i * 1.5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Name with typing effect */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">{displayText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className={theme === 'dark' ? 'text-accent-orange' : 'text-accent-primary'}
              >
                |
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className={`text-xl md:text-2xl font-light ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Robotics Enthusiast • GPU & AI Engg. • Android Developer
            </motion.p>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className={`text-lg max-w-2xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            Passionate about building innovative solutions with cutting-edge technologies, 
            from robotics and AI to high-performance mobile applications
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative px-8 py-4 font-semibold rounded-full overflow-hidden transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-accent-orange to-accent-yellow text-black hover:shadow-lg hover:shadow-accent-orange/25'
                  : 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white hover:shadow-lg hover:shadow-accent-primary/25'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get In Touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <div className="flex gap-4">
              <motion.a
                href="https://github.com/Shiven-saini"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-4 border rounded-full transition-all duration-300 ${
                  theme === 'dark'
                    ? 'border-gray-700 hover:border-accent-orange text-gray-300 hover:text-white hover:bg-gray-800/50'
                    : 'border-gray-300 hover:border-accent-primary text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                <Github size={20} />
                GitHub
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-1 h-3 rounded-full mt-2 ${
              theme === 'dark' 
                ? 'bg-gradient-to-b from-accent-orange to-accent-yellow'
                : 'bg-gradient-to-b from-accent-primary to-accent-secondary'
            }`}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero