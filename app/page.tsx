"use client"

import { ArrowRight, ChevronDown, Github, Globe } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { Announcements } from "@/components/announcements"
import { InfiniteCarousel } from "@/components/infinite-carousel"
import { ParallaxServices } from "@/components/parallax-services"
import { Footer } from "@/components/footer"
import { FeaturedModels } from "@/components/featured-models"
import { EnterpriseCTA } from "@/components/enterprise-cta"

export default function PortfolioLanding() {
  // --- STATE ---
  const [navbarVisible, setNavbarVisible] = useState(true)

  // --- REFS ---
  const containerRef = useRef<HTMLDivElement>(null)
  const lastScrollTop = useRef(0)

  // Scroll Restoration Logic
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  // --- 1. SCROLL LISTENER (Navbar Visibility) ---
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const currentScroll = container.scrollTop

      // Auto-hide navbar on scroll down, show on scroll up
      if (currentScroll > lastScrollTop.current + 5) {
        setNavbarVisible(false)
      } else if (currentScroll < lastScrollTop.current - 5) {
        setNavbarVisible(true)
      }
      lastScrollTop.current = currentScroll
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault()
    setTimeout(() => {
      const element = document.getElementById("services")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 50)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen font-sans bg-black text-white overscroll-none overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
    >

      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black/40 backdrop-blur-md border-b border-white/5 ${navbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-serif tracking-tight font-bold italic">SHREYAS</div>

          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Home</a>
            <a href="/projects" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Projects</a>
            <a href="/writing" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Writing</a>
            <a href="/resume" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Resume</a>
          </div>

          <a href="mailto:shreyasthale54@gmail.com" className="px-6 py-2 text-sm font-medium transition-all rounded-sm bg-white text-black hover:bg-white/90 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Contact
          </a>
        </div>
      </nav>

      {/* --- HOVER DETECTION ZONE --- */}
      <div
        className="fixed top-0 left-0 right-0 h-32 z-40 bg-transparent pointer-events-none"
        onMouseEnter={() => setNavbarVisible(true)}
      />

      {/* Main Content Container */}
      <div className="relative z-20 bg-black">

        {/* Hero Section */}
        <section className="relative h-[100dvh] w-full overflow-hidden">

          <div className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full md:w-[98%] h-[85vh] max-w-7xl opacity-40 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl pointer-events-none">
            <img
              src="/futuristic-black-machine-learning-architecture.png"
              alt="Autonomous ML Systems Architecture"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>

          <div className="relative z-10 w-full h-full flex flex-col px-6 pt-24 pb-6">

            <div className="flex-1" />

            <div className="shrink-0 flex flex-col items-center text-center space-y-6 md:space-y-8">

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-[10px] uppercase tracking-widest text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                ML Intern @ IIT Bombay · Software Engineer Intern @ InfinityPool
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] text-balance tracking-tight drop-shadow-2xl">
                Designing autonomous machine learning systems.
              </h1>

              <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
                Research-driven AI, distributed systems, and full-stack engineering. <br />
                Bridging theory, infrastructure, and real-world deployment.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a href="#services" onClick={scrollToServices} className="w-full sm:w-auto bg-white text-black px-8 py-3 font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-opacity cursor-pointer rounded-sm shadow-lg shadow-white/10">
                  My Work <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/resume" className="w-full sm:w-auto border border-white/20 bg-black/40 backdrop-blur-sm px-8 py-3 font-medium hover:bg-white/10 transition-colors rounded-sm text-center">
                  Resume
                </a>
              </div>

            </div>

            <div className="flex-1" />

            <div className="shrink-0 flex flex-col items-center justify-end">
              <div className="flex items-center justify-center gap-8 opacity-60 grayscale filter hover:grayscale-0 transition-all mb-6">
                <a href="https://github.com/ShreyasT123" className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-white drop-shadow-md">
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/shreyas-thale/" className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-white drop-shadow-md">
                  <Globe className="w-4 h-4" /> LinkedIn
                </a>
              </div>

              <div className="animate-bounce">
                <ChevronDown className="w-6 h-6 text-white drop-shadow-md" />
              </div>
            </div>

          </div>
        </section>

        <Announcements />
        <InfiniteCarousel />

        {/* PASS THE CONTAINER REF TO PARALLAX */}
        <div id="services">
          <ParallaxServices scrollContainerRef={containerRef} />
        </div>

        <FeaturedModels />
        {/* Removed EnterpriseCTA as it is likely corporate */}
        <Footer />
      </div>
    </div>
  )
}