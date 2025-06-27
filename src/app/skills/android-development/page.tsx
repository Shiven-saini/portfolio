'use client'

import { Smartphone } from 'lucide-react'
import SkillsDetailPage from '@/components/SkillsDetailPage'

const AndroidDevelopmentPage = () => {
  const certificates = [
    {
      id: 'android-developer-certification',
      title: 'Associate Android Developer Certification',
      issuer: 'Google',
      date: 'June 2024',
      pdfPath: '/certificates/android-development/android-developer-certification.pdf',
      thumbnail: '/images/certificates/android-developer-certification-thumb.svg'
    },
    {
      id: 'jetpack-compose-certification',
      title: 'Jetpack Compose UI Development',
      issuer: 'Android Developers',
      date: 'May 2024',
      pdfPath: '/certificates/android-development/jetpack-compose-certification.pdf',
      thumbnail: '/images/certificates/jetpack-compose-certification-thumb.svg'
    },
    {
      id: 'kotlin-certification',
      title: 'Kotlin for Android Development',
      issuer: 'JetBrains',
      date: 'April 2024',
      pdfPath: '/certificates/android-development/kotlin-certification.pdf',
      thumbnail: '/images/certificates/kotlin-certification-thumb.svg'
    }
  ]

  const projects = [
    {
      id: 'e-commerce-android-app',
      title: 'Modern E-Commerce Android App',
      description: 'Full-featured e-commerce application built with Jetpack Compose, implementing clean architecture, MVVM pattern, and modern Android development practices. Features include payment integration, real-time notifications, and offline support.',
      technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'Retrofit', 'Hilt'],
      githubUrl: 'https://github.com/shivensaini/ecommerce-android',
      image: '/images/projects/ecommerce-android.svg',
      demoUrl: 'https://play.google.com/store/apps/details?id=com.yourapp'
    },
    {
      id: 'fitness-tracker-app',
      title: 'AI-Powered Fitness Tracker',
      description: 'Comprehensive fitness tracking application with AI-powered workout recommendations, health metrics monitoring, and social features. Integrates with wearable devices and provides personalized fitness insights.',
      technologies: ['Kotlin', 'TensorFlow Lite', 'HealthConnect', 'Coroutines'],
      githubUrl: 'https://github.com/shivensaini/fitness-tracker',
      image: '/images/projects/fitness-tracker.svg'
    },
    {
      id: 'task-management-app',
      title: 'Collaborative Task Management',
      description: 'Professional task management application with real-time collaboration, project tracking, and team productivity analytics. Features modern Material Design 3 UI and smooth animations.',
      technologies: ['Kotlin', 'Firebase', 'Material Design 3', 'WorkManager'],
      githubUrl: 'https://github.com/shivensaini/task-manager-android',
      image: '/images/projects/task-manager.svg'
    },
    {
      id: 'camera-ml-app',
      title: 'Real-time Camera ML Processing',
      description: 'Camera application with real-time machine learning processing for object detection, text recognition, and image enhancement. Utilizes CameraX and ML Kit for optimal performance.',
      technologies: ['CameraX', 'ML Kit', 'TensorFlow Lite', 'OpenCV'],
      githubUrl: 'https://github.com/shivensaini/camera-ml-app',
      image: '/images/projects/camera-ml.svg'
    }
  ]

  return (
    <SkillsDetailPage
      skillTitle="Android Development"
      skillDescription="High-performance mobile applications with modern frameworks"
      skillIcon={Smartphone}
      certificates={certificates}
      projects={projects}
      backUrl="/"
    />
  )
}

export default AndroidDevelopmentPage
