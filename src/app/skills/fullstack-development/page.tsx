'use client'

import { Code } from 'lucide-react'
import SkillsDetailPage from '@/components/SkillsDetailPage'

const FullStackDevelopmentPage = () => {
  const certificates = [
  ]

  const projects = [
    {
      id: 'saas-platform',
      title: 'Multi-Tenant SaaS Platform',
      description: 'Comprehensive SaaS platform built with Next.js 14, featuring multi-tenancy, subscription management, real-time collaboration, and advanced analytics. Includes payment processing, user management, and scalable architecture.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      githubUrl: 'https://github.com/shivensaini/saas-platform',
      image: '/images/projects/saas-platform.svg',
      demoUrl: 'https://saas-platform-demo.vercel.app'
    },
    {
      id: 'realtime-chat-app',
      title: 'Real-time Chat Application',
      description: 'Modern chat application with real-time messaging, file sharing, video calls, and group management. Features end-to-end encryption, message reactions, and cross-platform synchronization.',
      technologies: ['Next.js', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC'],
      githubUrl: 'https://github.com/shivensaini/realtime-chat',
      image: '/images/projects/chat-app.svg'
    },
    {
      id: 'ecommerce-dashboard',
      title: 'Advanced E-Commerce Dashboard',
      description: 'Comprehensive admin dashboard for e-commerce management with real-time analytics, inventory tracking, order management, and business intelligence features. Built with server-side rendering for optimal performance.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Chart.js', 'Redis'],
      githubUrl: 'https://github.com/shivensaini/ecommerce-dashboard',
      image: '/images/projects/ecommerce-dashboard.svg'
    },
    {
      id: 'api-management-platform',
      title: 'API Management & Documentation Platform',
      description: 'Complete API lifecycle management platform with automated documentation, testing, monitoring, and rate limiting. Features API versioning, webhook management, and developer portal.',
      technologies: ['Node.js', 'Express', 'TypeScript', 'Swagger', 'Docker'],
      githubUrl: 'https://github.com/shivensaini/api-management',
      image: '/images/projects/api-management.svg'
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
