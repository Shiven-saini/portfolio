'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const About = () => {
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
            className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
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
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <Quote className="text-accent-orange mb-4 mx-auto" size={32} />
              <p className="text-xl font-medium text-gray-200 italic">
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