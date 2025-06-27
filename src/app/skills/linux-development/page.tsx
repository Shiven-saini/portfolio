'use client'

import { Terminal } from 'lucide-react'
import SkillsDetailPage from '@/components/SkillsDetailPage'

const LinuxDevelopmentPage = () => {
  const certificates = [
    {
      id: 'linux-foundation',
      title: 'Open Source Software Development, Linux And Git',
      issuer: 'The Linux Foundation',
      date: 'June 2025',
      pdfPath: '/certificates/linux-development/The-Linux-Foundation.pdf',
      thumbnail: '/images/certificates/The-Linux-Foundation.jpg'
    },
    {
      id: 'google-cybersecurity',
      title: 'Google Cybersecurity Professional Certificate',
      issuer: 'Google',
      date: 'June 2025',
      pdfPath: '/certificates/linux-development/Google-Cybersecurity.pdf',
      thumbnail: '/images/certificates/Google-Cybersecurity.jpg'
    },

  ]

  const projects = [
    {
      id: 'pithuu-os',
      title: 'Pithuu OS : Developer-Focused Linux Distribution',
      description: 'Pithuu OS is a cutting-edge Linux distribution designed to elevate the developer experience through a rich collection of built-in utilities and innovative tools. As the flagship project of mine, this distro is meticulously optimized for both performance and security, and it features a custom package repository infrastructure that provides widely-used, prebuilt developer packages, making it not only enterprise-ready but also a robust platform for modern development needs.\n There are separate build available for AMD/Intel and Nvidia GPU on sourceforge. Download Now!',
      technologies: ['Linux Kernel', 'Arch Linux', 'C', 'Make', 'GRUB', 'x86_64 architecture', 'Gnome', 'PKGBUILD', 'Shell Scripting'],
      githubUrl: 'https://github.com/Shiven-saini/pithuu-iso',
      image: '/images/projects/pithuu-os.jpeg',
      demoUrl: 'https://github.com/Shiven-saini/pithuu-iso/releases/tag/release'
    },
    {
      id: 'pithuu-repo',
      title: 'Pithuu OS - Official Package Repository',
      description: 'Advanced fully automated package distribution repository for Pithuu OS, designed to streamline package management and distribution with a focus on security and performance. This repository supports automated builds, dependency management, and secure package signing, ensuring a reliable and efficient software ecosystem for developers using Pithuu OS.',
      technologies: ['Bash', 'PKGBUILD', 'x86_64 architecture', 'Pacman', 'Python', 'Shell Scripting'],
      githubUrl: 'https://github.com/shiven-saini/pithuu-repo',
      image: '/images/projects/pithuu-repo.png'
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
