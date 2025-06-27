'use client'

import { Brain } from 'lucide-react'
import SkillsDetailPage from '@/components/SkillsDetailPage'

const AIEngineeringPage = () => {
  const certificates = [
    {
      id: 'google-ai-essentials',
      title: 'Google AI Essentials',
      issuer: 'Google',
      date: 'June 2025',
      pdfPath: '/certificates/ai-engineering/Google-AI-Essentials.pdf',
      thumbnail: '/images/certificates/Google-AI-Essentials.jpg'
    },
    {
      id: 'nvidia-ai-operations',
      title: 'AI Infrastructure and Operations Fundamentals',
      issuer: 'Nvidia',
      date: 'June 2025',
      pdfPath: '/certificates/ai-engineering/Nvidia-AI-Operations.pdf',
      thumbnail: '/images/certificates/Nvidia-AI-Operations.jpg'
    },
    {
      id: 'llmops',
      title: 'Large Language Model Operations',
      issuer: 'Duke University',
      date: 'June 2025',
      pdfPath: '/certificates/ai-engineering/LLMops.pdf',
      thumbnail: '/images/certificates/LLMops.jpg'
    },
    {
      id: 'ibm-agentic-ai',
      title: 'IBM RAG and Agentic AI (Ongoing)',
      issuer: 'IBM',
      date: 'Expected August 2025',
      pdfPath: '/certificates/ai-engineering/fundamentals-agent.pdf',
      thumbnail: '/images/certificates/fundamentals-agent.jpg'
    }
  ]

  const projects = [
    {
      id: 'ymir-app',
      title: 'YMIR: Yet Another Mock Interview and Revision Assistant',
      description: 'I developed Ymir, a cutting-edge mock interview and revision assistant designed to revolutionize the way candidates prepare for technical interviews. Ymir generates tailored mock interview questions on any topic and evaluates the technical accuracy of responses using a Deepseek API. Additionally, the app leverages real-time webcam capture with the YOLOv8n ONNX model to ensure proper interview conditions by detecting if multiple people or smartphones are present in the frame.',
      technologies: ['onnx','Python', 'Deepseek API', 'Yolov8', 'Next.js'],
      githubUrl: 'https://github.com/Shiven-saini/ymir-app',
      image: '/images/projects/ymir-app.png'
    },
    {
      id: 'sana-comfyui',
      title: 'Optimized Comfy UI Fork for Local Diffusion Image Generation with Nvidia Sana',
      description: 'I have forked the original Nvidia Sana model repository and developed a custom version that generates diffusion images locally. This custom implementation is optimized to work with systems having only 7GB VRAM, reducing the original requirement of 9GB without compromising quality. The project demonstrates expertise in GPU resource optimization, custom node development, and advanced diffusion model techniques.',
      technologies: ['comfyui','sana', 'gemma2', 'Q4_K_M', 'Diffusion', 'Ksampler'],
      githubUrl: 'https://github.com/Shiven-saini/sana-comfyui',
      image: '/images/projects/sana-comfyui.png'
    },

  ]

  return (
    <SkillsDetailPage
      skillTitle="AI Engineering"
      skillDescription="Building scalable AI infrastructure and ML/DL solutions"
      skillIcon={Brain}
      certificates={certificates}
      projects={projects}
      backUrl="/"
    />
  )
}

export default AIEngineeringPage
