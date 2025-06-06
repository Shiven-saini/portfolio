'use client'

import { motion } from 'framer-motion'
import { Trophy, Scale, Server } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'E-Yantra Competition',
      description: 'Two-time participant and team leader in India\'s biggest robotics competition, E-Yantra, demonstrating leadership and advanced robotics skills',
    },
    {
      icon: Scale,
      title: 'Self-Balancing Systems',
      description: 'Developed self-balancing vehicles including bikes and inverted pendulums using advanced PID control systems',
    },
    {
      icon: Server,
      title: 'Linux Distro Maintainer',
      description: 'Currently maintaining a specialized Linux distribution designed specifically for developers',
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
          <p className="text-xl text-gray-400">
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
                className="group p-8 rounded-2xl border border-gray-700/50 bg-gray-800/20 backdrop-blur-sm hover:border-accent-blue/50 hover:bg-gray-800/40 transition-all duration-500"
              >
                <div className="text-center space-y-6">
                  <div className="inline-flex p-4 rounded-xl bg-accent-blue/10 group-hover:bg-accent-blue/20 transition-colors duration-300">
                    <Icon className="w-10 h-10 text-accent-blue" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
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