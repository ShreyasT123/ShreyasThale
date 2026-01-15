"use client"

import React, { useState, useRef, useEffect } from "react"
import { Play, Pause } from "lucide-react"

interface MediaControlsProps {
  autoPlay?: boolean
  showControls?: boolean
  respectMotionPreference?: boolean
  className?: string
  children: React.ReactNode
}

export function MediaControls({ 
  autoPlay = true, 
  showControls = true, 
  respectMotionPreference = true,
  className = "",
  children 
}: MediaControlsProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Check for prefers-reduced-motion preference
    if (respectMotionPreference && typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      setPrefersReducedMotion(mediaQuery.matches)
      
      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches)
      }
      
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [respectMotionPreference])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Set initial playing state based on autoplay and motion preferences
    const shouldAutoplay = autoPlay && (!respectMotionPreference || !prefersReducedMotion)
    
    if (shouldAutoplay) {
      video.play().then(() => {
        setIsPlaying(true)
      }).catch(() => {
        // Autoplay failed, user interaction required
        setIsPlaying(false)
      })
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }, [autoPlay, prefersReducedMotion, respectMotionPreference])

  const togglePlayPause = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
      setIsPlaying(false)
    } else {
      video.play().then(() => {
        setIsPlaying(true)
      }).catch(() => {
        // Play failed
        setIsPlaying(false)
      })
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      togglePlayPause()
    }
  }

  // Clone the video element and add ref
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === 'video') {
      return React.cloneElement(child as React.ReactElement<any>, {
        ref: videoRef,
        autoPlay: false, // We handle autoplay manually
        onPlay: () => setIsPlaying(true),
        onPause: () => setIsPlaying(false),
      })
    }
    return child
  })

  return (
    <div className={`relative group ${className}`}>
      {enhancedChildren}
      
      {showControls && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
          <button
            onClick={togglePlayPause}
            onKeyDown={handleKeyDown}
            className="bg-black/50 hover:bg-black/70 text-white rounded-full p-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label={isPlaying ? "Pause video" : "Play video"}
            tabIndex={0}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6 ml-1" />
            )}
          </button>
        </div>
      )}
      
      {/* Reduced motion indicator */}
      {prefersReducedMotion && respectMotionPreference && (
        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          Motion Reduced
        </div>
      )}
    </div>
  )
}