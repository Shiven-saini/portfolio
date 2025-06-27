'use client'

import { Terminal } from 'lucide-react'
import SkillsDetailPage from '@/components/SkillsDetailPage'

const LinuxDevelopmentPage = () => {
  const certificates = [
    // No certificates for Linux Development yet
  ]

  const projects = [
    {
      id: 'custom-linux-distro',
      title: 'Developer-Focused Linux Distribution',
      description: 'Custom Linux distribution optimized for developers with pre-configured development environments, tools, and streamlined workflow.',
      technologies: ['Linux Kernel', 'Package Management', 'System Administration', 'Shell Scripting'],
      githubUrl: 'https://github.com/yourusername/dev-linux-distro',
      image: '/images/projects/linux-distro.svg'
    },
    {
      id: 'system-monitor',
      title: 'Real-time System Monitor',
      description: 'Advanced system monitoring tool for Linux with real-time resource tracking, process management, and performance analytics.',
      technologies: ['C', 'Linux APIs', 'System Programming', 'GTK'],
      githubUrl: 'https://github.com/yourusername/linux-system-monitor',
      image: '/images/projects/system-monitor.svg'
    },
    {
      id: 'kernel-module',
      title: 'Custom Kernel Module',
      description: 'Linux kernel module for hardware abstraction and driver development with focus on performance and reliability.',
      technologies: ['C', 'Linux Kernel', 'Driver Development', 'Hardware Programming'],
      githubUrl: 'https://github.com/yourusername/custom-kernel-module',
      image: '/images/projects/kernel-module.svg'
    }
  ]

  return (
    <SkillsDetailPage
      skillTitle="Linux Development"
      skillDescription="System-level programming and Linux distribution maintenance"
      skillIcon={Terminal}
      certificates={certificates}
      projects={projects}
      backUrl="/"
    />
  )
}

export default LinuxDevelopmentPage
