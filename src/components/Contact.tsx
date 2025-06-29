'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Phone } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { trackContactInteraction } from '@/utils/analytics'

// Custom X (formerly Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const Contact = () => {
  const { theme } = useTheme()
  
  const contactItems = [
    {
      icon: Mail,
      label: 'shiven.career@proton.me',
      href: 'mailto:shiven.career@proton.me',
      color: 'accent-orange',
      action: 'email_click' as const,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn Profile',
      href: 'https://www.linkedin.com/in/shiven-saini/',
      color: 'blue-600',
      action: 'linkedin_click' as const,
    },
    {
      icon: XIcon,
      label: '@rip_syntax',
      href: 'https://x.com/rip_syntax',
      color: 'blue-400',
      action: 'twitter_click' as const,
    },
    {
      icon: Github,
      label: 'Shiven-saini',
      href: 'https://github.com/Shiven-saini',
      color: 'gray-400',
      action: 'github_click' as const,
    },
    {
      icon: Phone,
      label: '+91 7404275751',
      href: 'tel:+917404275751',
      color: 'green-500',
      action: 'phone_click' as const,
    },
  ]

  const handleContactClick = (action: 'email_click' | 'linkedin_click' | 'github_click' | 'twitter_click' | 'phone_click') => {
    trackContactInteraction(action)
  }

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

          <div className="space-y-4 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:space-y-0 max-w-5xl mx-auto">
            {contactItems.map((item, index) => {
              const Icon = item.icon
              
              // Define color styles for each contact type
              const getColorStyles = (color: string) => {
                switch (color) {
                  case 'accent-orange':
                    return {
                      bg: theme === 'dark' ? 'bg-orange-500/10 group-hover:bg-orange-500/20' : 'bg-orange-50 group-hover:bg-orange-100',
                      text: theme === 'dark' ? 'text-orange-500' : 'text-orange-600'
                    }
                  case 'blue-600':
                    return {
                      bg: theme === 'dark' ? 'bg-blue-500/10 group-hover:bg-blue-500/20' : 'bg-blue-50 group-hover:bg-blue-100',
                      text: theme === 'dark' ? 'text-blue-500' : 'text-blue-600'
                    }
                  case 'blue-400':
                    return {
                      bg: theme === 'dark' ? 'bg-sky-400/10 group-hover:bg-sky-400/20' : 'bg-sky-50 group-hover:bg-sky-100',
                      text: theme === 'dark' ? 'text-sky-400' : 'text-sky-600'
                    }
                  case 'green-500':
                    return {
                      bg: theme === 'dark' ? 'bg-green-500/10 group-hover:bg-green-500/20' : 'bg-green-50 group-hover:bg-green-100',
                      text: theme === 'dark' ? 'text-green-500' : 'text-green-600'
                    }
                  default:
                    return {
                      bg: theme === 'dark' ? 'bg-gray-400/10 group-hover:bg-gray-400/20' : 'bg-gray-100 group-hover:bg-gray-200',
                      text: theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }
                }
              }
              
              const colorStyles = getColorStyles(item.color)
              
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleContactClick(item.action)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`group transition-all duration-300 rounded-xl ${
                    theme === 'dark'
                      ? 'border border-gray-700/50 bg-gray-800/20 backdrop-blur-sm hover:border-gray-600 hover:bg-gray-800/40'
                      : 'border border-gray-200 bg-white backdrop-blur-sm hover:border-gray-300 hover:bg-gray-50 shadow-md hover:shadow-lg'
                  } 
                  // Mobile: horizontal layout with compact design
                  flex sm:flex-col items-center sm:text-center p-4 sm:p-8 space-x-4 sm:space-x-0 sm:space-y-4`}
                >
                  {/* Icon container - smaller on mobile */}
                  <div className={`p-3 sm:p-4 rounded-lg transition-colors duration-300 flex-shrink-0 ${colorStyles.bg}`}>
                    <Icon className={`w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-300 ${colorStyles.text}`} />
                  </div>
                  
                  {/* Text content - left aligned on mobile, centered on desktop */}
                  <div className="flex-1 sm:flex-none text-left sm:text-center">
                    <span className={`text-base sm:text-lg font-medium transition-colors duration-300 break-all sm:break-normal ${
                      theme === 'dark' 
                        ? 'text-gray-300 group-hover:text-white' 
                        : 'text-gray-600 group-hover:text-gray-900'
                    }`}>
                      {item.label}
                    </span>
                  </div>
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