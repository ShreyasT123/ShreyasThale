"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

interface NavbarProps {
  className?: string
  variant?: 'default' | 'transparent'
}

export function Navbar({ className = "", variant = "default" }: NavbarProps) {
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [isHoveringTop, setIsHoveringTop] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Debug logging
  useEffect(() => {
    console.log('Menu state changed:', isMenuOpen);
  }, [isMenuOpen])

  const baseClasses = "fixed top-0 w-full z-50 flex items-center justify-between px-6 py-6 border-b border-white/5"
  const variantClasses = variant === 'transparent'
    ? "bg-background/80 backdrop-blur-md"
    : "bg-background/80 backdrop-blur-md"

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/models", label: "Models" },
    { href: "/docs", label: "Research" },
    { href: "/dashboard", label: "API" },
    { href: "https://github.com/ShreyasT123/ai_", label: "GitHub" },
    { href: "/dashboard", label: "Try Helius" },
  ]

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
            className="hidden md:block text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest text-[10px]"
          >
            GitHub
          </Link>
          <Link href="/dashboard" className="hidden md:block bg-foreground text-background px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity">
            Try Helius
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => {
              console.log('Menu clicked! Current state:', isMenuOpen);
              setIsMenuOpen(!isMenuOpen);
            }}
            className="relative w-8 h-8 flex items-center justify-center z-[101]"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 8 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="w-full h-[2px] bg-foreground origin-center block"
              />
              <motion.span
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="w-full h-[2px] bg-foreground block"
              />
              <motion.span
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -8 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="w-full h-[2px] bg-foreground origin-center block"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-2xl"
            style={{
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-white/[0.02]" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative h-full flex items-center justify-end px-16"
            >
              <nav className="flex flex-col items-end gap-8">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + index * 0.05,
                      ease: [0.23, 1, 0.32, 1]
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#fefefe]/90 hover:text-[#fefefe] transition-all duration-300 tracking-tight leading-none block"
                      style={{
                        textShadow: '0 0 40px rgba(255,255,255,0.1)',
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>

            {/* Close area - click outside to close */}
            <div
              className="absolute inset-0 -z-10"
              onClick={() => setIsMenuOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}