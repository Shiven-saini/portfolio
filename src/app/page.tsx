'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Expertise from '@/components/Expertise'
import Achievements from '@/components/Achievements'
import Learning from '@/components/Learning'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { useTheme } from '@/contexts/ThemeContext'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black' : 'bg-gray-50'
    }`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Achievements />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}