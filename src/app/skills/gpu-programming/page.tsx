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
    // {
    //   id: 'gpu-optimization',
    //   title: 'GPU Performance Optimization',
    //   issuer: 'NVIDIA',
    //   date: 'May 2024',
    //   pdfPath: '/certificates/gpu-programming/gpu-optimization.pdf',
    //   thumbnail: '/images/certificates/gpu-optimization-thumb.svg'
    // },
    // {
    //   id: 'parallel-computing',
    //   title: 'Parallel Computing with CUDA',
    //   issuer: 'Coursera',
    //   date: 'April 2024',
    //   pdfPath: '/certificates/gpu-programming/parallel-computing-cuda.pdf',
    //   thumbnail: '/images/certificates/parallel-computing-thumb.svg'
    // }
  ]

  const projects = [
    {
      id: 'cuSplit-Kernel',
      title: 'cuSplit-Kernel - GPU Accelerated RGB Channel Separation Engine',
      description: 'High-performance CUDA-based image processing application that leverages GPU parallel computing to extract RGB channels from batch image datasets. Built with custom CUDA kernels, OpenCV integration, and automated build pipeline for efficient large-scale image analysis workflows.',
      technologies: ['CUDA', 'C++', 'GPU Computing', 'Performance Optimization'],
      githubUrl: 'https://github.com/shivensaini/cuda-matrix-multiplication',
      image: '/images/projects/cuSplit-Kernel.png',
      demoUrl: ''
    },
    {
      id: 'cuSplit-Kernel',
      title: 'GPU-Accelerated Ray Tracer',
      description: 'Real-time ray tracing engine implemented in CUDA for rendering realistic lighting and reflections with parallel processing on GPU. Supports dynamic scenes and interactive camera controls.',
      technologies: ['CUDA', 'OpenGL', 'Ray Tracing', 'Computer Graphics'],
      githubUrl: 'https://github.com/shivensaini/gpu-raytracer',
      image: '/images/projects/raytracer.svg'
    },
    {
      id: 'image-processing',
      title: 'CUDA Image Processing Suite',
      description: 'Collection of GPU-accelerated image processing algorithms including convolution, edge detection, and noise reduction with significant speedup over CPU. Includes real-time video processing capabilities.',
      technologies: ['CUDA', 'OpenCV', 'Image Processing', 'Computer Vision'],
      githubUrl: 'https://github.com/shivensaini/cuda-image-processing',
      image: '/images/projects/image-processing.svg'
    },
    {
      id: 'molecular-dynamics',
      title: 'GPU Molecular Dynamics Simulation',
      description: 'N-body simulation for molecular dynamics using CUDA to simulate particle interactions in real-time with thousands of particles. Features adaptive time-stepping and visualization.',
      technologies: ['CUDA', 'Scientific Computing', 'Simulation', 'Physics'],
      githubUrl: 'https://github.com/shivensaini/gpu-molecular-dynamics',
      image: '/images/projects/molecular-dynamics.svg'
    }
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
