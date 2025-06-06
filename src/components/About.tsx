'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

const About = () => {
  const { theme } = useTheme()
  
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            About
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`text-xl leading-relaxed max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            I&apos;m a passionate learner with a strong foundation in robotics, android development
            and modern GPU programming. I thrive on building robust mobile apps, experimenting with 
            cutting-edge AI, and creating innovative robotics solutions. Currently investing my time 
            in CUDA programming, GPU computing, and the fascinating world of AI engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative max-w-2xl mx-auto mt-12"
          >
            <div className={`rounded-2xl p-8 ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50' 
                : 'bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm border border-gray-200/50 shadow-lg'
            }`}>
              <Quote className="text-accent-orange mb-4 mx-auto" size={32} />
              <p className={`text-xl font-medium italic ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}>
                &ldquo;Learning never exhausts the mind!&rdquo;
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About