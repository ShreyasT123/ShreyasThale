"use client"

import { ArrowRight, ChevronDown, Github, Globe } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { Announcements } from "@/components/announcements"
import { InfiniteCarousel } from "@/components/infinite-carousel"
import { ParallaxServices } from "@/components/parallax-services"
import { Footer } from "@/components/footer"
import { FeaturedModels } from "@/components/featured-models"
import { EnterpriseCTA } from "@/components/enterprise-cta"

export default function HeliusLanding() {
  // --- STATE ---
  const [isVideoSection, setIsVideoSection] = useState(true)
  const [isHeroLocked, setIsHeroLocked] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [navbarVisible, setNavbarVisible] = useState(true)

  // --- REFS ---
  const containerRef = useRef<HTMLDivElement>(null)
  const lastScrollTop = useRef(0)
  const lastTransitionTime = useRef(0)

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

  // --- 2. WHEEL CONTROLLER (Locking Logic) ---
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      if (isTransitioning) {
        e.preventDefault()
        e.stopPropagation()
        return
      }

      if (Date.now() - lastTransitionTime.current < 300) {
        e.preventDefault()
        return
      }

      // CASE A: VIDEO SECTION
      if (isVideoSection) {
        e.preventDefault()
        if (e.deltaY > 10) {
          triggerTransitionToMain()
        }
        return
      }

      // CASE B: HERO LOCKED
      if (isHeroLocked) {
        e.preventDefault()
        if (e.deltaY > 20) {
          setIsHeroLocked(false)
        } else if (e.deltaY < -20) {
          triggerTransitionToVideo()
        }
        return
      }

      // CASE C: UNLOCKED (Re-lock check)
      if (container.scrollTop <= 0 && e.deltaY < -5) {
        e.preventDefault()
        setIsHeroLocked(true)
        lastTransitionTime.current = Date.now()
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [isVideoSection, isHeroLocked, isTransitioning])

  // --- TRANSITION HANDLERS ---
  const triggerTransitionToMain = () => {
    setIsTransitioning(true)
    setIsVideoSection(false)
    setIsHeroLocked(true)
    setTimeout(() => {
      setIsTransitioning(false)
      if (containerRef.current) containerRef.current.scrollTop = 0
      lastTransitionTime.current = Date.now()
    }, 800)
  }

  const triggerTransitionToVideo = () => {
    setIsTransitioning(true)
    setIsVideoSection(true)
    setIsHeroLocked(false)
    setTimeout(() => {
      setIsTransitioning(false)
      if (containerRef.current) containerRef.current.scrollTop = 0
      lastTransitionTime.current = Date.now()
    }, 800)
  }

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsVideoSection(false)
    setIsHeroLocked(false)
    setTimeout(() => {
      const element = document.getElementById("services")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 50)
  }

  const isLocked = isVideoSection || isHeroLocked || isTransitioning

  return (
    <div
      ref={containerRef}
      className={`
        relative w-full h-screen font-sans bg-black text-white overscroll-none
        ${isLocked ? 'overflow-hidden' : 'overflow-y-auto overflow-x-hidden'}
        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']
      `}
    >

      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${isVideoSection
          ? 'bg-transparent border-transparent'
          : 'bg-black/40 backdrop-blur-md border-b border-white/5'
        } 
        ${navbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-serif tracking-tight">Helius</div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Models</a>
            <a href="#" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Research</a>
            <a href="#" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Documentation</a>
            <a href="#" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Pricing</a>
          </div>

          <button className={`px-6 py-2 text-sm font-medium transition-all rounded-sm ${isVideoSection
            ? 'bg-white/10 border border-white/20 hover:bg-white/20'
            : 'bg-white text-black hover:bg-white/90 shadow-[0_0_15px_rgba(255,255,255,0.3)]'
            }`}>
            Get Started
          </button>
        </div>
      </nav>

      {/* --- HOVER DETECTION ZONE (The Fix) --- */}
      {/* This invisible layer sits at the top. When mouse enters, Navbar shows. */}
      <div
        className="fixed top-0 left-0 right-0 h-32 z-40 bg-transparent"
        onMouseEnter={() => setNavbarVisible(true)}
      />

      {/* Video Hero Section */}
      <section className="fixed inset-0 w-full h-screen z-10 pointer-events-none">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className={`relative z-10 text-center px-6 space-y-8 transition-opacity duration-500 ${isVideoSection ? 'opacity-100' : 'opacity-0'}`}>
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-xs uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Live Demo: Helius.1 in Action
            </div> */}
            <h1 className="text-7xl md:text-9xl font-serif leading-none">See It First</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light">
              Experience the future of autonomous machine learning
            </p>
            <button onClick={triggerTransitionToMain} className="mt-8 animate-bounce pointer-events-auto cursor-pointer">
              <ChevronDown className="w-8 h-8 text-white/60" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className={`relative z-20 bg-black transition-transform duration-800 ease-in-out ${isVideoSection ? 'translate-y-[100vh]' : 'translate-y-0'
        }`}>

        {/* Helius Image Hero Section */}
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
              alt="Helius core architecture"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>

          <div className="relative z-10 w-full h-full flex flex-col px-6 pt-24 pb-6">

            <div className="flex-1" />

            <div className="shrink-0 flex flex-col items-center text-center space-y-6 md:space-y-8">

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-[10px] uppercase tracking-widest text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Laying the foundations for visual intelligence
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] text-balance tracking-tight drop-shadow-2xl">
                Building autonomous machine learning systems.
              </h1>

              <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
                Using novel SOTA deep learning models to redefine the frontier of visual and cognitive intelligence.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a href="#services" onClick={scrollToServices} className="w-full sm:w-auto bg-white text-black px-8 py-3 font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-opacity cursor-pointer rounded-sm shadow-lg shadow-white/10">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
                <button className="w-full sm:w-auto border border-white/20 bg-black/40 backdrop-blur-sm px-8 py-3 font-medium hover:bg-white/10 transition-colors rounded-sm">
                  Try Helius.1
                </button>
              </div>

            </div>

            <div className="flex-1" />

            <div className="shrink-0 flex flex-col items-center justify-end">
              <div className="flex items-center justify-center gap-8 opacity-60 grayscale filter hover:grayscale-0 transition-all mb-6">
                <a href="#" className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-white drop-shadow-md">
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a href="#" className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-white drop-shadow-md">
                  <Globe className="w-4 h-4" /> Hugging Face
                </a>
              </div>

              <div className={`transition-opacity duration-500 ${isHeroLocked ? 'opacity-100' : 'opacity-0'}`}>
                <ChevronDown className="w-6 h-6 text-white animate-bounce drop-shadow-md" />
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
        <EnterpriseCTA scrollContainerRef={containerRef} />
        <Footer />
      </div>
    </div>
  )
}