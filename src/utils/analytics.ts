/**
 * Analytics utility functions for tracking custom events
 * Uses Vercel Analytics for comprehensive user behavior tracking
 */

import { track } from '@vercel/analytics'

// Certificate download tracking
export const trackCertificateDownload = (certificateTitle: string, skillDomain: string) => {
  track('certificate_download', {
    certificate: certificateTitle,
    domain: skillDomain,
    timestamp: new Date().toISOString()
  })
}

// Project link clicks tracking
export const trackProjectView = (projectTitle: string, skillDomain: string, linkType: 'github' | 'demo') => {
  track('project_view', {
    project: projectTitle,
    domain: skillDomain,
    linkType,
    timestamp: new Date().toISOString()
  })
}

// Skill page visits tracking
export const trackSkillPageView = (skillDomain: string) => {
  track('skill_page_view', {
    domain: skillDomain,
    timestamp: new Date().toISOString()
  })
}

// Navigation tracking
export const trackNavigation = (section: string, source: string = 'unknown') => {
  track('navigation', {
    section,
    source,
    timestamp: new Date().toISOString()
  })
}

// Contact form interactions
export const trackContactInteraction = (action: 'email_click' | 'linkedin_click' | 'github_click' | 'twitter_click' | 'phone_click') => {
  track('contact_interaction', {
    action,
    timestamp: new Date().toISOString()
  })
}

// Theme toggle tracking
export const trackThemeToggle = (newTheme: 'light' | 'dark') => {
  track('theme_toggle', {
    theme: newTheme,
    timestamp: new Date().toISOString()
  })
}

// Share functionality tracking
export const trackShare = (skillDomain: string, shareMethod: string) => {
  track('content_share', {
    domain: skillDomain,
    method: shareMethod,
    timestamp: new Date().toISOString()
  })
}
