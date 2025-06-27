'use client'

import { motion } from 'framer-motion'
import { Bot, Cpu, Brain, Smartphone, Terminal, Code, ExternalLink } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import Link from 'next/link'

interface Domain {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  tags: string[]
  featured: boolean
  detailsUrl?: string
  hasCertificates?: boolean
  hasProjects?: boolean
}

const Expertise = () => {
  const { theme } = useTheme()
  
  const domains: Domain[] = [
    {
      icon: Bot,
      title: 'Robotics',
      description: 'Extensive hands-on experience with PID controllers, self-balancing vehicles, MATLAB, ROS2, and OpenCV for vision-driven robotics solutions',
      tags: ['ROS2', 'OpenCV', 'CoppeliaSim', 'Matlab', 'Fusion 360'],
      featured: true,
      detailsUrl: '/skills/robotics',
      hasCertificates: false,
      hasProjects: true,
    },
    {
      icon: Cpu,
      title: 'GPU & CUDA Programming',
      description: 'Currently investing time in CUDA programming and GPU computing for high-performance parallel processing applications',
      tags: ['CUDA', 'C++', 'Cmake', 'GPU Computing', 'Parallel Processing', 'Image Processing'],
      featured: true,
      detailsUrl: '/skills/gpu-programming',
      hasCertificates: true,
      hasProjects: true,
    },
    {
      icon: Brain,
      title: 'AI Engineering',
      description: 'Building AI infrastructure with vLLM, LangChain, RAGs, and ML/DL frameworks for scalable AI solutions',
      tags: ['llama.cpp', 'Hugging Face', 'RAGs', 'vLLM', 'ollama', 'Transformers', 'LangChain'],
      featured: true,
      detailsUrl: '/skills/ai-engineering',
      hasCertificates: true,
      hasProjects: true,
    },
    {
      icon: Smartphone,
      title: 'Android Development',
      description: 'Professional experience building scalable, high-performance Android applications with modern frameworks',
      tags: ['Kotlin', 'Jetpack Compose', 'Architecture'],
      featured: false,
      detailsUrl: '/skills/android-development',
      hasCertificates: true,
      hasProjects: true,
    },
    {
      icon: Terminal,
      title: 'Linux Development',
      description: 'Currently maintaining a Linux distro for developers and deep expertise in system administration',
      tags: ['Bash scripting', 'Kernel Development', 'x86_64', 'Cybersecurity', 'System Admin', 'DevOps'],
      featured: false,
      detailsUrl: '/skills/linux-development',
      hasCertificates: true,
      hasProjects: true,
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end web applications with modern frameworks and technologies',
      tags: ['Next.js', 'Node.js', 'Typescript', 'aws-ec2', 'Spring Boot - Kotlin'],
      featured: false,
      detailsUrl: '/skills/fullstack-development',
      hasCertificates: false,
      hasProjects: true,
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
                className={`group relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-500 h-full flex flex-col ${
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
                
                <div className="flex flex-col h-full">
                  <div className={`inline-flex p-3 rounded-xl mb-6 w-fit ${
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

                  <div className="flex-grow">
                    <h3 className={`text-xl font-semibold mb-3 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {domain.title}
                    </h3>
                    <p className={`leading-relaxed mb-6 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {domain.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
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

                  {(domain.hasCertificates || domain.hasProjects) && domain.detailsUrl && (
                    <div className="pt-4 border-t border-gray-200/20 mt-auto">
                      <Link
                        href={domain.detailsUrl}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                          domain.featured
                            ? 'border-accent-orange/50 text-accent-orange hover:border-accent-orange hover:bg-accent-orange/10'
                            : 'border-accent-blue/50 text-accent-blue hover:border-accent-blue hover:bg-accent-blue/10'
                        }`}
                      >
                        <span className="text-sm font-medium">
                          View {domain.hasCertificates && domain.hasProjects ? 'Certificates & Projects' : 
                                domain.hasCertificates ? 'Certificates' : 'Projects'}
                        </span>
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
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