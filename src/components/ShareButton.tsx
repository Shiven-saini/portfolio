'use client'

import { useState } from 'react'
import { Share2, Check, Copy } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { trackShare } from '@/utils/analytics'

interface ShareButtonProps {
  url: string
  title: string
  domain?: string
}

const ShareButton = ({ url, title, domain = 'unknown' }: ShareButtonProps) => {
  const { theme } = useTheme()
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url
        })
        // Track successful native share
        trackShare(domain, 'native_share')
      } catch (error) {
        // Fallback to copy to clipboard
        copyToClipboard()
      }
    } else {
      copyToClipboard()
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      // Track clipboard copy
      trackShare(domain, 'clipboard_copy')
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  return (
    <button
      onClick={handleShare}
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-300 ${
        theme === 'dark'
          ? 'border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300'
          : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-700'
      }`}
      title="Share this page"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-green-500" />
          <span className="text-sm text-green-500">Copied!</span>
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4" />
          <span className="text-sm">Share</span>
        </>
      )}
    </button>
  )
}

export default ShareButton
