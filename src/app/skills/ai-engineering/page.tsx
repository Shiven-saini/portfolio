'use client'

import { Brain } from 'lucide-react'
import SkillsDetailPage from '@/components/SkillsDetailPage'

const AIEngineeringPage = () => {
  const certificates = [
    {
      id: 'langchain-certification',
      title: 'LangChain Development Certification',
      issuer: 'LangChain Academy',
      date: 'May 2024',
      pdfPath: '/certificates/ai-engineering/langchain-certification.pdf',
      thumbnail: '/images/certificates/langchain-certification-thumb.svg'
    },
    {
      id: 'vllm-optimization',
      title: 'vLLM Performance Optimization',
      issuer: 'Berkeley SkyLab',
      date: 'April 2024',
      pdfPath: '/certificates/ai-engineering/vllm-optimization.pdf',
      thumbnail: '/images/certificates/vllm-optimization-thumb.svg'
    },
    {
      id: 'rag-systems',
      title: 'Advanced RAG Systems Design',
      issuer: 'AI Infrastructure Institute',
      date: 'March 2024',
      pdfPath: '/certificates/ai-engineering/rag-systems.pdf',
      thumbnail: '/images/certificates/rag-systems-thumb.svg'
    },
    {
      id: 'ml-deployment',
      title: 'ML Model Deployment at Scale',
      issuer: 'MLOps Academy',
      date: 'February 2024',
      pdfPath: '/certificates/ai-engineering/ml-deployment.pdf',
      thumbnail: '/images/certificates/ml-deployment-thumb.svg'
    }
  ]

  const projects = [
    {
      id: 'vllm-inference-engine',
      title: 'High-Performance LLM Inference Engine',
      description: 'Scalable inference engine built with vLLM for serving large language models with optimized batching, quantization, and distributed serving capabilities. Achieves 3x throughput improvement over standard implementations.',
      technologies: ['vLLM', 'Python', 'FastAPI', 'Docker', 'Kubernetes'],
      githubUrl: 'https://github.com/shivensaini/vllm-inference-engine',
      image: '/images/projects/vllm-inference.svg',
      demoUrl: 'https://vllm-demo.yoursite.com'
    },
    {
      id: 'langchain-rag-system',
      title: 'Enterprise RAG System with LangChain',
      description: 'Production-ready Retrieval-Augmented Generation system using LangChain with vector databases, document chunking strategies, and advanced prompt engineering for enterprise knowledge management.',
      technologies: ['LangChain', 'Pinecone', 'OpenAI', 'Python', 'PostgreSQL'],
      githubUrl: 'https://github.com/shivensaini/enterprise-rag',
      image: '/images/projects/langchain-rag.svg'
    },
    {
      id: 'ml-pipeline-automation',
      title: 'MLOps Pipeline with Auto-Scaling',
      description: 'End-to-end ML pipeline automation with model versioning, A/B testing, monitoring, and auto-scaling capabilities. Includes experiment tracking and automated model deployment workflows.',
      technologies: ['MLflow', 'Kubeflow', 'TensorFlow', 'PyTorch', 'Apache Airflow'],
      githubUrl: 'https://github.com/shivensaini/mlops-pipeline',
      image: '/images/projects/mlops-pipeline.svg'
    },
    {
      id: 'multimodal-ai-system',
      title: 'Multimodal AI Processing System',
      description: 'Advanced AI system for processing text, images, and audio inputs using transformer architectures. Features cross-modal understanding, attention mechanisms, and unified embedding space.',
      technologies: ['Transformers', 'PyTorch', 'Hugging Face', 'CLIP', 'Whisper'],
      githubUrl: 'https://github.com/shivensaini/multimodal-ai',
      image: '/images/projects/multimodal-ai.svg'
    }
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
