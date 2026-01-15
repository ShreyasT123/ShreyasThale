"use client"

import Image from "next/image"
import { useState } from "react"
import { useMotionPreference } from "@/lib/use-motion-preference"

const CAROUSEL_ITEMS = [
  {
    image: "/cinematic-ai-landscape.png",
    name: "PyTorch",
    category: "Deep Learning"
  },
  {
    image: "/abstract-neural-network-flow.png",
    name: "JAX",
    category: "High Performance ML"
  },
  {
    image: "/digital-monolith-architecture.png",
    name: "FastAPI",
    category: "Backend Systems"
  },
  {
    image: "/futuristic-black-machine-learning-architecture.png",
    name: "Django",
    category: "Web Framework"
  },
  {
    image: "/cinematic-ai-landscape.png",
    name: "Ray",
    category: "Distributed Computing"
  },
  {
    image: "/abstract-neural-network-flow.png",
    name: "Kafka",
    category: "Event Streaming"
  },
  {
    image: "/digital-monolith-architecture.png",
    name: "PostgreSQL",
    category: "Database"
  },
  {
    image: "/futuristic-black-machine-learning-architecture.png",
    name: "Docker & K8s",
    category: "DevOps"
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
        <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-bold">Technologies & Domains</h2>
      </div>

      <div
        className="flex group/carousel overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`flex shrink-0 ${prefersReducedMotion
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
                  aria-label={`View technology: ${item.name}`}
                  className={`relative flex-none w-[300px] md:w-[450px] aspect-[4/5] rounded-2xl overflow-hidden group/card cursor-pointer ${prefersReducedMotion
                      ? "opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-background"
                      : `transition-all duration-500 hover:scale-[1.02] group-hover/carousel:blur-sm hover:!blur-none opacity-100 group-hover/carousel:opacity-40 hover:!opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-background focus:scale-[1.02] focus:!blur-none focus:!opacity-100`
                    }`}
                  onFocus={() => handleCardFocus(cardId)}
                  onBlur={handleCardBlur}
                  onKeyDown={(e) => handleKeyDown(e, cardId)}
                >
                  <Image src={item.image || "/placeholder.svg"} alt={`${item.name} technology card`} fill className="object-cover" />
                  <div className={`absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent ${prefersReducedMotion
                      ? "translate-y-0" // Always visible when motion is reduced
                      : `translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ease-out ${isCardFocused ? 'translate-y-0' : ''}`
                    }`}>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1">{item.category}</div>
                    <p className="text-2xl text-white font-sans font-medium leading-tight">{item.name}</p>
                  </div>
                  <div className={`absolute top-4 left-4 flex gap-2 ${prefersReducedMotion
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
                  aria-label={`View technology: ${item.name}`}
                  className={`relative flex-none w-[300px] md:w-[450px] aspect-[4/5] rounded-2xl overflow-hidden group/card cursor-pointer ${prefersReducedMotion
                      ? "opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-background"
                      : `transition-all duration-500 hover:scale-[1.02] group-hover/carousel:blur-sm hover:!blur-none opacity-100 group-hover/carousel:opacity-40 hover:!opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-background focus:scale-[1.02] focus:!blur-none focus:!opacity-100`
                    }`}
                  onFocus={() => handleCardFocus(cardId)}
                  onBlur={handleCardBlur}
                  onKeyDown={(e) => handleKeyDown(e, cardId)}
                >
                  <Image src={item.image || "/placeholder.svg"} alt={`${item.name} technology card`} fill className="object-cover" />
                  <div className={`absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent ${prefersReducedMotion
                      ? "translate-y-0" // Always visible when motion is reduced
                      : `translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ease-out ${isCardFocused ? 'translate-y-0' : ''}`
                    }`}>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1">{item.category}</div>
                    <p className="text-2xl text-white font-sans font-medium leading-tight">{item.name}</p>
                  </div>
                  <div className={`absolute top-4 left-4 flex gap-2 ${prefersReducedMotion
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
