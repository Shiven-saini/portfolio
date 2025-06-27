'use client'

import { Smartphone } from 'lucide-react'
import SkillsDetailPage from '@/components/SkillsDetailPage'

const AndroidDevelopmentPage = () => {
  const certificates = [
    {
      id: 'meta-advanced-kotlin',
      title: 'Advanced Kotlin Programming',
      issuer: 'Meta',
      date: 'April 2025',
      pdfPath: '/certificates/android-development/meta-advanced-kotlin.pdf',
      thumbnail: '/images/certificates/meta-advanced-kotlin.jpg'
    },
  ]

  const projects = [
    {
      id: 'alarmee-app',
      title: 'Alarmee : An Alarm App on Steroids',
      description: 'Alarmee is an over-engineered Android alarm application built using Kotlin, Jetpack Compose, and the AlarmManager API, designed to ensure effective wakefulness through interactive dismissal challenges such as grid-based puzzles, NFC tag scans, and QR code recognition. It adheres to Material 3 design guidelines for a modern and consistent UI, leverages ML Kit for QR code detection, and uses the Accompanist library for efficient permission handling. The app emphasizes reliability, modularity, and reboot resilience, making it a robust and extensible solution for advanced alarm functionality.',
      technologies: ['Kotlin', 'Jetpack Compose', 'Gradle', 'Material 3', 'Hilt', 'Room', 'NFC', 'QR Code'],
      githubUrl: 'https://github.com/shiven-saini/alarmee',
      image: '/images/projects/alarmee-app.png',
      demoUrl: 'https://github.com/Shiven-saini/Alarmee/releases/tag/hotfix-2'
    },
    {
      id:'ecell-app',
      title: 'Ecell App : Entrepreneurship Cell DCRUSTM (WIP)',
      description: "As the lead developer, I am building the official Android app for our university's Entrepreneurship Cell to streamline internal operations and enhance communication within the society. The app features robust authentication and role-based authorization, enabling admins to manage user privileges and assign roles efficiently. It also includes a dynamic event gallery that highlights the society’s legacy and activities. Developed using native Android technologies such as Kotlin, Jetpack Compose, and Ktor for networking, the app is currently powered by a Spring Boot backend deployed on AWS EC2. Future plans include exploring migration to Supabase for improved scalability and maintenance. The project reflects a strong emphasis on clean architecture, user-centric design, and backend integration.",
      technologies: ['Kotlin', 'Jetpack Compose', 'Gradle', 'Material 3', 'Hilt', 'Ktor', 'Credential Manager', 'AWS EC2'],
      githubUrl: 'https://github.com/E-Cell-DCRUSTM/Ecell-Android/',
      image: '/images/projects/ecell-app.png',
    },
  ]

  return (
    <SkillsDetailPage
      skillTitle="Android Development"
      skillDescription="High-performance mobile applications with native kotlin and Jetpack Compose"
      skillIcon={Smartphone}
      certificates={certificates}
      projects={projects}
      backUrl="/"
    />
  )
}

export default AndroidDevelopmentPage
