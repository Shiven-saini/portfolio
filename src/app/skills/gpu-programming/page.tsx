'use client'

import { Cpu } from 'lucide-react'
import SkillsDetailPage from '@/components/SkillsDetailPage'

const GPUProgrammingPage = () => {
  const certificates = [
    {
      id: 'hopkins-gpu-programming',
      title: 'GPU Programming Specialization',
      issuer: 'John Hopkins University',
      date: 'June 2025',
      pdfPath: '/certificates/gpu-programming/GPU-Programming.pdf',
      thumbnail: '/images/certificates/GPU-Programming.jpg'
    },
  ]

  const projects = [
    {
      id: 'cuSplit-Kernel',
      title: 'cuSplit-Kernel : GPU Accelerated RGB Channel Separation Engine',
      description: 'High-performance CUDA-based image processing application that leverages GPU parallel computing to extract RGB channels from batch image datasets. Built with custom CUDA kernels, OpenCV integration, and automated build pipeline for efficient large-scale image analysis workflows.',
      technologies: ['CUDA', 'C++', 'Cmake', 'OpenCV', 'GPU Computing'],
      githubUrl: 'https://github.com/Shiven-saini/cuSplit-Kernel',
      image: '/images/projects/cuSplit-Kernel.png',
      demoUrl: ''
    },
    {
      id: 'cuRay-Tracer',
      title: 'cuRay-Tracer : Real-Time GPU Accelerated Ray Tracing Engine',
      description: 'Advanced real-time ray tracing engine built with CUDA and OpenGL, featuring interactive 3D rendering, dynamic lighting controls, and cross-platform compatibility. Demonstrates expertise in GPU parallel computing, computer graphics algorithms, and high-performance real-time rendering pipelines.',
      technologies: ['CUDA', 'OpenGL', 'Ray Tracing', 'Computer Graphics'],
      githubUrl: 'https://github.com/Shiven-saini/cuRay-Tracer',
      image: '/images/projects/cuRay-Tracer.gif'
    },
  ]

  return (
    <SkillsDetailPage
      skillTitle="GPU & CUDA Programming"
      skillDescription="High-performance parallel processing and GPU computing solutions"
      skillIcon={Cpu}
      certificates={certificates}
      projects={projects}
      backUrl="/"
    />
  )
}

export default GPUProgrammingPage
