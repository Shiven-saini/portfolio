'use client'

import { motion } from 'framer-motion'
import { Download, ExternalLink, ArrowLeft, FileText, Github, ArrowUp } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import ShareButton from './ShareButton'
import { trackCertificateDownload, trackProjectView, trackSkillPageView } from '@/utils/analytics'

interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  pdfPath: string
  thumbnail?: string
}

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  image: string
  demoUrl?: string
}

interface SkillsDetailPageProps {
  skillTitle: string
  skillDescription: string
  skillIcon: React.ComponentType<{ className?: string }>
  certificates: Certificate[]
  projects: Project[]
  backUrl?: string
}

const SkillsDetailPage = ({
  skillTitle,
  skillDescription,
  skillIcon: SkillIcon,
  certificates,
  projects,
  backUrl = '/'
}: SkillsDetailPageProps) => {
  const { theme } = useTheme()
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    
    // Track skill page view
    trackSkillPageView(skillTitle)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [skillTitle])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDownloadCertificate = async (pdfPath: string, title: string) => {
    try {
      // Track the download attempt
      trackCertificateDownload(title, skillTitle)
      
      const response = await fetch(pdfPath)
      if (!response.ok) {
        alert('Certificate file not found. Please check if the file exists.')
        return
      }
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `${title.replace(/\s+/g, '_')}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download failed:', error)
      alert('Download failed. Please try again.')
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-8">
            <Link
              href={backUrl}
              className={`inline-flex items-center gap-2 text-accent-orange hover:text-accent-yellow transition-colors`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
            
            <ShareButton 
              url={typeof window !== 'undefined' ? window.location.href : ''}
              title={`${skillTitle} - Skills & Expertise`}
              domain="Skills"
            />
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-accent-orange/20 to-accent-yellow/20">
              <SkillIcon className="w-10 h-10 text-accent-orange" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {skillTitle}
              </h1>
              <p className={`text-xl ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {skillDescription}
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-6 mt-8">
            {certificates.length > 0 && (
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                theme === 'dark'
                  ? 'border-gray-700/50 bg-gray-800/20'
                  : 'border-gray-200/50 bg-white/60'
              }`}>
                <FileText className="w-4 h-4 text-accent-orange" />
                <span className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {certificates.length} Certificate{certificates.length !== 1 ? 's' : ''}
                </span>
              </div>
            )}
            {projects.length > 0 && (
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                theme === 'dark'
                  ? 'border-gray-700/50 bg-gray-800/20'
                  : 'border-gray-200/50 bg-white/60'
              }`}>
                <Github className="w-4 h-4 text-accent-blue" />
                <span className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {projects.length} Project{projects.length !== 1 ? 's' : ''}
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Certificates Section */}
        {certificates.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-6 h-6 text-accent-orange" />
              <h2 className="text-3xl font-bold gradient-text">Certificates</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((certificate, index) => (
                <motion.div
                  key={certificate.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`group relative p-4 rounded-2xl border backdrop-blur-sm transition-all duration-500 h-full flex flex-col ${
                    theme === 'dark'
                      ? 'border-accent-orange/50 bg-gradient-to-br from-accent-orange/5 to-accent-yellow/5 hover:border-accent-orange hover:shadow-2xl hover:shadow-accent-orange/20'
                      : 'border-accent-orange/30 bg-gradient-to-br from-accent-orange/5 to-accent-yellow/5 hover:border-accent-orange hover:shadow-2xl hover:shadow-accent-orange/15'
                  }`}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-orange to-accent-yellow rounded-t-2xl" />
                  
                  {certificate.thumbnail && (
                    <div className="mb-3 rounded-lg overflow-hidden">
                      <Image
                        src={certificate.thumbnail}
                        alt={`${certificate.title} thumbnail`}
                        width={400}
                        height={350}
                        className="w-full h-56 object-cover object-top"
                      />
                    </div>
                  )}
                  
                  <div className="flex flex-col h-full">
                    <div>
                      <h3 className={`text-lg font-semibold mb-1 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {certificate.title}
                      </h3>
                      <p className={`text-sm mb-1 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {certificate.issuer}
                      </p>
                      <p className="text-sm text-accent-orange mb-3">
                        {certificate.date}
                      </p>
                    </div>
                    
                    <div className="flex gap-2 mt-auto">
                      <button
                        onClick={() => handleDownloadCertificate(certificate.pdfPath, certificate.title)}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent-orange text-white rounded-lg hover:bg-accent-orange/90 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                      <a
                        href={certificate.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-2 border border-accent-orange text-accent-orange rounded-lg hover:bg-accent-orange/10 transition-colors ${
                          theme === 'dark' ? 'hover:bg-accent-orange/20' : ''
                        }`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Projects Section */}
        {projects.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Github className="w-6 h-6 text-accent-orange" />
              <h2 className="text-3xl font-bold gradient-text">Projects</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`group relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-500 h-full flex flex-col ${
                    theme === 'dark'
                      ? 'border-gray-700/50 bg-gray-800/20 hover:border-gray-600 hover:bg-gray-800/40'
                      : 'border-gray-200/50 bg-white/60 hover:border-gray-300 hover:bg-white/80 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="flex flex-col h-full">
                    <div className="rounded-lg overflow-hidden mb-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className={`text-xl font-semibold mb-3 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {project.title}
                      </h3>
                      <p className={`leading-relaxed mb-4 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full border bg-accent-blue/10 border-accent-blue/30 text-accent-blue"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3 mt-auto">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackProjectView(project.title, skillTitle, 'github')}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent-orange text-white rounded-lg hover:bg-accent-orange/90 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackProjectView(project.title, skillTitle, 'demo')}
                          className={`px-4 py-2 border border-accent-orange text-accent-orange rounded-lg hover:bg-accent-orange/10 transition-colors ${
                            theme === 'dark' ? 'hover:bg-accent-orange/20' : ''
                          }`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all duration-300 z-50 ${
            theme === 'dark'
              ? 'bg-accent-orange text-white hover:bg-accent-orange/90'
              : 'bg-accent-orange text-white hover:bg-accent-orange/90'
          }`}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  )
}

export default SkillsDetailPage
