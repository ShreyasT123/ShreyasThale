"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface NavbarProps {
  className?: string
  variant?: 'default' | 'transparent'
}

export function Navbar({ className = "", variant = "default" }: NavbarProps) {
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [isHoveringTop, setIsHoveringTop] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < 50) {
        setIsNavVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setIsNavVisible(false)
      } else {
        // Optional: show on scroll up
        // setIsNavVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const baseClasses = "fixed top-0 w-full z-50 flex items-center justify-between px-6 py-6 border-b border-white/5"
  const variantClasses = variant === 'transparent' 
    ? "bg-background/80 backdrop-blur-md" 
    : "bg-background/80 backdrop-blur-md"

  return (
    <>
      {/* Navbar Hover Detector */}
      <div
        onMouseEnter={() => setIsHoveringTop(true)}
        onMouseLeave={() => setIsHoveringTop(false)}
        className="fixed top-0 left-0 w-full h-8 z-[60] pointer-events-auto"
      />

      {/* Navigation */}
      <motion.nav
        onMouseEnter={() => setIsHoveringTop(true)}
        onMouseLeave={() => setIsHoveringTop(false)}
        initial={{ y: 0 }}
        animate={{ y: isNavVisible || isHoveringTop ? 0 : -100 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className={`${baseClasses} ${variantClasses} ${className}`}
      >
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold tracking-tighter uppercase italic">
            HELIUS
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/models" className="hover:text-foreground transition-colors">
              Models
            </Link>
            <Link href="/docs" className="hover:text-foreground transition-colors">
              Research
            </Link>
            <Link href="/dashboard" className="hover:text-foreground transition-colors">
              API
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="https://github.com/ShreyasT123/ai_"
            className="text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest text-[10px]"
          >
            GitHub
          </Link>
          <Link href="/dashboard" className="bg-foreground text-background px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity">
            Try Helius
          </Link>
        </div>
      </motion.nav>
    </>
  )
}