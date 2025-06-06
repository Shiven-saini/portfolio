'use client'

import { motion } from 'framer-motion'
import { Mail, Github } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

const Contact = () => {
  const { theme } = useTheme()
  
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
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
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
                  className={`group flex flex-col items-center text-center space-y-4 p-8 rounded-xl transition-all duration-300 ${
                    theme === 'dark'
                      ? 'border border-gray-700/50 bg-gray-800/20 backdrop-blur-sm hover:border-gray-600 hover:bg-gray-800/40'
                      : 'border border-gray-200/50 bg-white/60 backdrop-blur-sm hover:border-gray-300 hover:bg-white/80 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className={`p-4 rounded-lg transition-colors duration-300 ${
                    item.color === 'accent-orange'
                      ? theme === 'dark' 
                        ? 'bg-orange-500/10 group-hover:bg-orange-500/20'
                        : 'bg-accent-primary/10 group-hover:bg-accent-primary/20'
                      : 'bg-gray-400/10 group-hover:bg-gray-400/20'
                  }`}>
                    <Icon className={`w-8 h-8 group-hover:scale-110 transition-transform duration-300 ${
                      item.color === 'accent-orange' 
                        ? theme === 'dark' 
                          ? 'text-orange-500' 
                          : 'text-accent-primary'
                        : 'text-gray-400'
                    }`} />
                  </div>
                  <span className={`text-lg font-medium transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'text-gray-300 group-hover:text-white' 
                      : 'text-gray-600 group-hover:text-gray-900'
                  }`}>
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