'use client'

import { Bot } from 'lucide-react'
import SkillsDetailPage from '@/components/SkillsDetailPage'

interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  pdfPath: string
  thumbnail?: string
}

const RoboticsPage = () => {
  const certificates: Certificate[] = [

  ]

  const projects = [
    {
      id: 'lunar-scout',
      title: 'E-Yantra 2023: Lunar Scout - Self-Balancing Bike',
      description: 'Designed and built an omni‑wheeled, self‑balancing scout robot intended for lunar surface exploration. Developed a virtual prototype in CoppeliaSim and implemented control algorithms in GNU Octave. Employed PID and LQR controllers for stability and smooth operation, integrating sensor fusion for accurate motion control.',
      technologies: ['Gnu Octave', 'MATLAB', 'Python', 'CoppeliaSim', 'Fusion 360', 'Control Systems'],
      githubUrl: 'https://github.com/Shiven-saini/eyrc23_ls_1593',
      image: '/images/projects/eyrc-2023.png'
    },
    {
      id: 'warehouse-drone',
      title: 'E-Yantra 2024: Warehouse Drone - Autonomous Navigation',
      description: 'Developed an autonomous drone system to navigate a simulated warehouse environment using ROS2 and Gazebo. Implemented real-time object detection to identify and scan target packages using OpenCV. Utilized Rviz2 for visualization and debugging of sensor data and drone trajectories. Focused on modular ROS node development and simulation-to-hardware transition readiness.',
      technologies: ['ROS2', 'SLAM', 'Path Planning', 'Python'],
      githubUrl: 'https://github.com/Shiven-saini/eYRC-2421',
      image: '/images/projects/eyrc-2024.gif'
    },
    {
      id: 'opencv-samples',
      title: 'OpenCV Learn along code samples',
      description: 'I built the OpenCV-Samples repository to document my journey in learning and applying computer vision concepts using OpenCV. It features a collection of projects demonstrating key techniques like image processing, object tracking, and feature detection. The code, written in Python and/or C++, is well-documented, showcasing my ability to solve problems effectively and adapt to advanced computer vision challenges.',
      technologies: ['OpenCV', 'Canny Edge', 'Affine Transformation', 'Python', 'C++'],
      githubUrl: 'https://github.com/Shiven-saini/OpenCV-Samples',
      image: '/images/projects/opencv-samples.png'
    },
  ]

  return (
    <SkillsDetailPage
      skillTitle="Robotics"
      skillDescription="Autonomous systems and vision-driven robotics solutions"
      skillIcon={Bot}
      certificates={certificates}
      projects={projects}
      backUrl="/"
    />
  )
}

export default RoboticsPage
