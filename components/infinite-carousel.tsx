"use client"

import Image from "next/image"
import { useState } from "react"
import { useMotionPreference } from "@/lib/use-motion-preference"

const CAROUSEL_ITEMS = [

  {
    image: "/cinematic-ai-landscape.png",
    prompt: "a cinematic landscape of a futuristic AI city at dusk, hyperrealistic",
  },
  {
    image: "/abstract-neural-network-flow.png",
    prompt: "a neural network flowing with energy, blue and white glowing nodes",
  },
  {
    image: "/digital-monolith-architecture.png",
    prompt: "a massive digital monolith standing in a desert, black stone with glowing data lines",
  },
  {
    image: "/futuristic-black-machine-learning-architecture.png",
    prompt: "intricate black machine learning hardware, high tech obsidian finish",
  },
]

export function InfiniteCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  const [focusedCard, setFocusedCard] = useState<string | null>(null)
  const prefersReducedMotion = useMotionPreference()

  const handleCardFocus = (cardId: string) => {
    setFocusedCard(cardId)
    setIsPaused(true)
  }

  const handleCardBlur = () => {
    setFocusedCard(null)
    setIsPaused(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent, cardId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      // Toggle focus state for keyboard interaction
      if (focusedCard === cardId) {
        handleCardBlur()
      } else {
        handleCardFocus(cardId)
      }
    }
  }

  return (
    <section className="py-24 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-bold">Research Showcase</h2>
      </div>

      <div
        className="flex group/carousel overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`flex shrink-0 ${
          prefersReducedMotion 
            ? "" // No animation when motion is reduced
            : `animate-infinite-scroll ${isPaused ? "pause-animation" : ""}`
        }`}>
          {/* First Set */}
          <div className="flex gap-6 px-3">
            {CAROUSEL_ITEMS.map((item, idx) => {
              const cardId = `set1-${idx}`
              const isCardFocused = focusedCard === cardId
              const isCardHovered = !prefersReducedMotion
              
              return (
                <div
                  key={cardId}
                  tabIndex={0}
                  role="button"
                  aria-label={`View AI artwork: ${item.prompt}`}
                  className={`relative flex-none w-[300px] md:w-[450px] aspect-[4/5] rounded-2xl overflow-hidden group/card cursor-pointer ${
                    prefersReducedMotion 
                      ? "opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-background" 
                      : `transition-all duration-500 hover:scale-[1.02] group-hover/carousel:blur-sm hover:!blur-none opacity-100 group-hover/carousel:opacity-40 hover:!opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-background focus:scale-[1.02] focus:!blur-none focus:!opacity-100`
                  }`}
                  onFocus={() => handleCardFocus(cardId)}
                  onBlur={handleCardBlur}
                  onKeyDown={(e) => handleKeyDown(e, cardId)}
                >
                  <Image src={item.image || "/placeholder.svg"} alt={`AI generated artwork: ${item.prompt}`} fill className="object-cover" />
                  <div className={`absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent ${
                    prefersReducedMotion 
                      ? "translate-y-0" // Always visible when motion is reduced
                      : `translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ease-out ${isCardFocused ? 'translate-y-0' : ''}`
                  }`}>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1">Prompt</div>
                    <p className="text-sm text-white font-medium leading-tight">{item.prompt}</p>
                  </div>
                  <div className={`absolute top-4 left-4 flex gap-2 ${
                    prefersReducedMotion 
                      ? "opacity-100" // Always visible when motion is reduced
                      : `opacity-0 group-hover/card:opacity-100 transition-opacity ${isCardFocused ? 'opacity-100' : ''}`
                  }`}>
                    <div className="w-10 h-10 border border-white/40 bg-black/40 backdrop-blur-sm rounded-md p-1">
                      <div className="w-full h-full bg-white/10 rounded-sm" />
                    </div>
                    <div className="w-10 h-10 border border-white/20 bg-black/20 backdrop-blur-sm rounded-md p-1">
                      <div className="w-full h-full bg-white/5 rounded-sm" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          {/* Second Set (Identical) */}
          <div className="flex gap-6 px-3">
            {CAROUSEL_ITEMS.map((item, idx) => {
              const cardId = `set2-${idx}`
              const isCardFocused = focusedCard === cardId
              
              return (
                <div
                  key={cardId}
                  tabIndex={0}
                  role="button"
                  aria-label={`View AI artwork: ${item.prompt}`}
                  className={`relative flex-none w-[300px] md:w-[450px] aspect-[4/5] rounded-2xl overflow-hidden group/card cursor-pointer ${
                    prefersReducedMotion 
                      ? "opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-background" 
                      : `transition-all duration-500 hover:scale-[1.02] group-hover/carousel:blur-sm hover:!blur-none opacity-100 group-hover/carousel:opacity-40 hover:!opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-background focus:scale-[1.02] focus:!blur-none focus:!opacity-100`
                  }`}
                  onFocus={() => handleCardFocus(cardId)}
                  onBlur={handleCardBlur}
                  onKeyDown={(e) => handleKeyDown(e, cardId)}
                >
                  <Image src={item.image || "/placeholder.svg"} alt={`AI generated artwork: ${item.prompt}`} fill className="object-cover" />
                  <div className={`absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent ${
                    prefersReducedMotion 
                      ? "translate-y-0" // Always visible when motion is reduced
                      : `translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ease-out ${isCardFocused ? 'translate-y-0' : ''}`
                  }`}>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1">Prompt</div>
                    <p className="text-sm text-white font-medium leading-tight">{item.prompt}</p>
                  </div>
                  <div className={`absolute top-4 left-4 flex gap-2 ${
                    prefersReducedMotion 
                      ? "opacity-100" // Always visible when motion is reduced
                      : `opacity-0 group-hover/card:opacity-100 transition-opacity ${isCardFocused ? 'opacity-100' : ''}`
                  }`}>
                    <div className="w-10 h-10 border border-white/40 bg-black/40 backdrop-blur-sm rounded-md p-1">
                      <div className="w-full h-full bg-white/10 rounded-sm" />
                    </div>
                    <div className="w-10 h-10 border border-white/20 bg-black/20 backdrop-blur-sm rounded-md p-1">
                      <div className="w-full h-full bg-white/5 rounded-sm" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
