'use client'

import { motion } from 'framer-motion'
import { Box, Compass, Layers, Brain } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

const Learning = () => {
  const { theme } = useTheme()
  
  const learningItems = [
    { icon: Box, label: '3D Animation (Blender)' },
    { icon: Compass, label: 'CAD (Fusion 360)' },
    { icon: Layers, label: 'Multimodal LLMs (Gemma 3n)' },
    { icon: Brain, label: 'ML/DL Frameworks' },
  ]

  return (
    <section className="py-24 relative">
      <div className={`absolute inset-0 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-transparent via-accent-blue/5 to-transparent' 
          : 'bg-gradient-to-b from-transparent via-accent-blue/3 to-transparent'
      }`} />
      
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Currently Learning & Exploring
          </h2>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Always expanding my skillset with new technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`group p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 ${
                  theme === 'dark'
                    ? 'border-gray-700/50 bg-gray-800/20 hover:border-accent-blue/50 hover:bg-gray-800/40'
                    : 'border-gray-200/50 bg-white/60 hover:border-accent-blue/30 hover:bg-white/80 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'bg-accent-blue/10 group-hover:bg-accent-blue/20'
                      : 'bg-accent-blue/10 group-hover:bg-accent-blue/15'
                  }`}>
                    <Icon className="w-6 h-6 text-accent-blue" />
                  </div>
                  <span className={`font-medium transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'text-white group-hover:text-accent-blue'
                      : 'text-gray-900 group-hover:text-accent-blue'
                  }`}>
                    {item.label}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Learning