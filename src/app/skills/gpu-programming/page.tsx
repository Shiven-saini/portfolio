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
      id: 'matrix-multiplication',
      title: 'CUDA Matrix Multiplication',
      description: 'High-performance matrix multiplication implementation using CUDA with various optimization techniques including shared memory, tiling, and memory coalescing. Achieves 10x speedup over CPU implementation.',
      technologies: ['CUDA', 'C++', 'GPU Computing', 'Performance Optimization'],
      githubUrl: 'https://github.com/shivensaini/cuda-matrix-multiplication',
      image: '/images/projects/matrix-multiplication.svg',
      demoUrl: ''
    },
    {
      id: 'raytracer',
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
