'use client'

import { motion } from 'framer-motion'
import { Trophy, Briefcase, Server } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

const Achievements = () => {
  const { theme } = useTheme()
  
  const achievements = [
    {
      icon: Trophy,
      title: 'E-Yantra Competition',
      description: 'Two-time participant and team leader in India\'s biggest robotics competition, E-Yantra, demonstrating leadership and advanced robotics skills',
    },
    {
      icon: Briefcase,
      title: 'Freelancing Feb 2025 - Present',
      description: 'Delivering freelance projects in full stack and android projects, showcasing expertise in real-world applications',
    },
    {
      icon: Server,
      title: 'Linux Distro Maintainer',
      description: 'Currently maintaining a specialized Linux distribution Pithuu OS designed specifically for developers and active in a lot of OSS Projects.',
    },
  ]

  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Achievements & Experience
          </h2>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Notable accomplishments and projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`group p-8 rounded-2xl border backdrop-blur-sm transition-all duration-500 ${
                  theme === 'dark'
                    ? 'border-gray-700/50 bg-gray-800/20 hover:border-accent-blue/50 hover:bg-gray-800/40'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50 shadow-md hover:shadow-lg'
                }`}
              >
                <div className="text-center space-y-6">
                  <div className={`inline-flex p-4 rounded-xl transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'bg-accent-blue/10 group-hover:bg-accent-blue/20'
                      : 'bg-blue-50 group-hover:bg-blue-100'
                  }`}>
                    <Icon className={`w-10 h-10 ${
                      theme === 'dark' ? 'text-accent-blue' : 'text-blue-600'
                    }`} />
                  </div>
                  
                  <div>
                    <h3 className={`text-xl font-semibold mb-4 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {achievement.title}
                    </h3>
                    <p className={`leading-relaxed ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Achievements