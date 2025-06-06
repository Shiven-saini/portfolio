'use client'

import { motion } from 'framer-motion'
import { Mail, Github } from 'lucide-react'

const Contact = () => {
  const contactItems = [
    {
      icon: Mail,
      label: 'shiven.career@proton.me',
      href: 'mailto:shiven.career@proton.me',
      color: 'accent-orange',
    },
    {
      icon: Github,
      label: 'Shiven-saini',
      href: 'https://github.com/Shiven-saini',
      color: 'gray-400',
    },
  ]

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-gray-400">
              Ready to collaborate on innovative projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {contactItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group flex flex-col items-center text-center space-y-4 p-8 rounded-xl border border-gray-700/50 bg-gray-800/20 backdrop-blur-sm hover:border-gray-600 hover:bg-gray-800/40 transition-all duration-300"
                >
                  <div className={`p-4 rounded-lg bg-${item.color}/10 group-hover:bg-${item.color}/20 transition-colors duration-300`}>
                    <Icon className={`w-8 h-8 text-${item.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item.label}
                  </span>
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact