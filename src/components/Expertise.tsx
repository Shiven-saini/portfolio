'use client'

import { motion } from 'framer-motion'
import { Bot, Cpu, Brain, Smartphone, Terminal, Code } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

const Expertise = () => {
  const { theme } = useTheme()
  
  const domains = [
    {
      icon: Bot,
      title: 'Robotics',
      description: 'Extensive hands-on experience with PID controllers, self-balancing vehicles, MATLAB, ROS2, and OpenCV for vision-driven robotics solutions',
      tags: ['PID Controllers', 'ROS2', 'OpenCV', 'MATLAB'],
      featured: true,
    },
    {
      icon: Cpu,
      title: 'GPU & CUDA Programming',
      description: 'Currently investing time in CUDA programming and GPU computing for high-performance parallel processing applications',
      tags: ['CUDA', 'GPU Computing', 'Parallel Processing'],
      featured: true,
    },
    {
      icon: Brain,
      title: 'AI Engineering',
      description: 'Building AI infrastructure with vLLM, LangChain, RAGs, and ML/DL frameworks for scalable AI solutions',
      tags: ['vLLM', 'LangChain', 'RAGs', 'ML/DL'],
      featured: true,
    },
    {
      icon: Smartphone,
      title: 'Android Development',
      description: 'Professional experience building scalable, high-performance Android applications with modern frameworks',
      tags: ['Kotlin', 'Jetpack Compose', 'Architecture'],
      featured: false,
    },
    {
      icon: Terminal,
      title: 'Linux Development',
      description: 'Currently maintaining a Linux distro for developers and deep expertise in system administration',
      tags: ['Linux Distros', 'System Admin', 'DevOps'],
      featured: false,
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end web applications with modern frameworks and technologies',
      tags: ['Next.js', 'Node.js', 'TypeScript'],
      featured: false,
    },
  ]

  return (
    <section id="expertise" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Expertise
          </h2>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Technologies and domains I&apos;m passionate about
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => {
            const Icon = domain.icon
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`group relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-500 ${
                  domain.featured
                    ? theme === 'dark'
                      ? 'border-accent-orange/50 bg-gradient-to-br from-accent-orange/5 to-accent-yellow/5 hover:border-accent-orange hover:shadow-2xl hover:shadow-accent-orange/20'
                      : 'border-accent-orange/30 bg-gradient-to-br from-accent-orange/5 to-accent-yellow/5 hover:border-accent-orange hover:shadow-2xl hover:shadow-accent-orange/15'
                    : theme === 'dark'
                      ? 'border-gray-700/50 bg-gray-800/20 hover:border-gray-600 hover:bg-gray-800/40'
                      : 'border-gray-200/50 bg-white/60 hover:border-gray-300 hover:bg-white/80 shadow-lg hover:shadow-xl'
                }`}
              >
                {domain.featured && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-orange to-accent-yellow rounded-t-2xl" />
                )}
                
                <div className="space-y-6">
                  <div className={`inline-flex p-3 rounded-xl ${
                    domain.featured 
                      ? 'bg-gradient-to-br from-accent-orange/20 to-accent-yellow/20' 
                      : theme === 'dark'
                        ? 'bg-gray-700/50'
                        : 'bg-gray-100/80'
                  }`}>
                    <Icon className={`w-8 h-8 ${
                      domain.featured ? 'text-accent-orange' : 'text-accent-blue'
                    }`} />
                  </div>

                  <div>
                    <h3 className={`text-xl font-semibold mb-3 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {domain.title}
                    </h3>
                    <p className={`leading-relaxed mb-4 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {domain.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {domain.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-sm rounded-full border ${
                          domain.featured
                            ? 'bg-accent-orange/10 border-accent-orange/30 text-accent-orange'
                            : 'bg-accent-blue/10 border-accent-blue/30 text-accent-blue'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
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

export default Expertise