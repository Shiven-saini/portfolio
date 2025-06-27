'use client'

import { Bot } from 'lucide-react'
import SkillsDetailPage from '@/components/SkillsDetailPage'

const RoboticsPage = () => {
  const certificates = [
    {
      id: 'ros2-fundamentals',
      title: 'ROS2 Fundamentals Certification',
      issuer: 'The Construct',
      date: 'March 2024',
      pdfPath: '/certificates/robotics/ros2-fundamentals.pdf',
      thumbnail: '/images/certificates/ros2-fundamentals-thumb.svg'
    },
    {
      id: 'opencv-computer-vision',
      title: 'Computer Vision with OpenCV',
      issuer: 'OpenCV University',
      date: 'February 2024',
      pdfPath: '/certificates/robotics/opencv-computer-vision.pdf',
      thumbnail: '/images/certificates/opencv-computer-vision-thumb.svg'
    },
    {
      id: 'matlab-robotics',
      title: 'MATLAB for Robotics and Control Systems',
      issuer: 'MathWorks',
      date: 'January 2024',
      pdfPath: '/certificates/robotics/matlab-robotics.pdf',
      thumbnail: '/images/certificates/matlab-robotics-thumb.svg'
    }
  ]

  const projects = [
    {
      id: 'self-balancing-robot',
      title: 'Self-Balancing Vehicle with PID Control',
      description: 'Autonomous self-balancing robot using PID controllers for stabilization. Features real-time sensor fusion, gyroscope and accelerometer integration, and adaptive control algorithms for dynamic balance maintenance.',
      technologies: ['PID Controllers', 'Arduino', 'IMU Sensors', 'C++'],
      githubUrl: 'https://github.com/shivensaini/self-balancing-robot',
      image: '/images/projects/self-balancing-robot.svg'
    },
    {
      id: 'ros2-navigation-stack',
      title: 'ROS2 Autonomous Navigation System',
      description: 'Complete autonomous navigation stack using ROS2 with SLAM, path planning, and obstacle avoidance. Includes sensor fusion from LiDAR and cameras for robust indoor and outdoor navigation.',
      technologies: ['ROS2', 'SLAM', 'Path Planning', 'Python'],
      githubUrl: 'https://github.com/shivensaini/ros2-navigation',
      image: '/images/projects/ros2-navigation.svg'
    },
    {
      id: 'opencv-object-tracking',
      title: 'Computer Vision Object Tracking',
      description: 'Real-time object detection and tracking system using OpenCV with multiple tracking algorithms. Features YOLO integration, Kalman filtering, and multi-object tracking capabilities.',
      technologies: ['OpenCV', 'YOLO', 'Python', 'Computer Vision'],
      githubUrl: 'https://github.com/shivensaini/opencv-tracking',
      image: '/images/projects/opencv-tracking.svg'
    },
    {
      id: 'matlab-control-system',
      title: 'MATLAB Robotic Arm Controller',
      description: 'Advanced control system for robotic arm manipulation using MATLAB Simulink. Implements inverse kinematics, trajectory planning, and force feedback control for precise manipulation tasks.',
      technologies: ['MATLAB', 'Simulink', 'Control Systems', 'Kinematics'],
      githubUrl: 'https://github.com/shivensaini/matlab-robotic-arm',
      image: '/images/projects/matlab-robotic-arm.svg'
    }
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
