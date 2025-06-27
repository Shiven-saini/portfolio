'use client'

import { Code } from 'lucide-react'
import SkillsDetailPage from '@/components/SkillsDetailPage'

interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  pdfPath: string
  thumbnail?: string
}

const FullStackDevelopmentPage = () => {
  const certificates: Certificate[] = [
  ]

  const projects = [
    {
      id: 'dcanvas-web',
      title: 'Freelancing work : Dcanvas Web',
      description: 'During a freelancing engagement from February 2025 to today, I had the opportunity to develop an innovative website for Dcanvas—a dynamic new firm specializing in poster design, image branding, and packaging design. Tailwind CSS ensures a responsive design across all devices, reflecting modern aesthetic and functional standards. Additionally, I integrated Google APIs to directly store form submissions into a linked Google Sheets account, streamlining data management and enabling real-time insights.',
      technologies: ['Next.js', 'Tailwind CSS', 'Javascript', 'Framer-Motion', 'Google APIs'],
      githubUrl: 'https://github.com/Shiven-saini/dcanvas-web',
      demoUrl: 'https://dcanvas-web.vercel.app/',
      image: '/images/projects/dcanvas-web.gif'
    },
    {
      id: 'dcanvas-web',
      title: 'Ecell IPL Auction Manager',
      description: 'As the Tech Lead of the Entrepreneurship Cell at my university, I led the technical development of Chase The Bid – a real-time mock IPL auction simulation event designed to combine business strategy with engaging entertainment. The event, conducted as part of E-Cell’s annual activities, aimed to simulate high-stakes decision-making under pressure, much like real IPL franchise bidding. I developed a custom Auction Management System using socket programming to ensure seamless, real-time updates for all participants. The system allowed auctioneers and bidders to interact live with dynamic player listings and responsive bid tracking.',
      technologies: ['Node.js', 'Socket programming', 'socket.io', 'GSAP', 'Express.js'],
      githubUrl: 'https://github.com/E-Cell-DCRUSTM/ipl-auction-manager',
      image: '/images/projects/ecell-auction.gif'
    }
  ]

  return (
    <SkillsDetailPage
      skillTitle="Full Stack Development"
      skillDescription="End-to-end web applications with modern frameworks"
      skillIcon={Code}
      certificates={certificates}
      projects={projects}
      backUrl="/"
    />
  )
}

export default FullStackDevelopmentPage
