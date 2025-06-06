import type { Metadata, Viewport } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shiven Saini - Developer Portfolio',
  description: 'Robotics Enthusiast • GPU & AI Engg. • Android Developer',
  keywords: ['Shiven Saini', 'Robotics', 'GPU Programming', 'AI Engineering', 'Android Developer'],
  authors: [{ name: 'Shiven Saini' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}