"use client"

import { Github, Globe, Terminal, Play } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { useRef } from "react"
import { useMotionPreference } from "@/lib/use-motion-preference"

// Define Props Interface
interface ParallaxServicesProps {
  scrollContainerRef: React.RefObject<HTMLDivElement>
}

const services = [
  {
    title: "Open Weights",
    tags: ["FULL MODEL ACCESS", "DEPLOY ANYWHERE", "CUSTOMIZABLE"],
    description: "Run Helius models on your own infrastructure. Full control over deployment, fine-tuning, and customization.",
    icon: <Github className="w-6 h-6" />,
    link: "#",
    image: "/cinematic-ai-landscape.png",
  },
  {
    title: "API",
    tags: ["PREMIUM QUALITY", "EASE OF USE", "BUILT FOR SCALE"],
    description: "Simple-to-integrate API to access the latest and most powerful Helius models. Built to handle production workloads at any scale.",
    icon: <Terminal className="w-6 h-6" />,
    link: "#",
    image: "/futuristic-black-machine-learning-architecture.png",
  },
  {
    title: "Playground",
    tags: ["TRY INSTANTLY", "NO CODE REQUIRED", "EXPERIMENT"],
    description: "Test ideas and iterate on prompts in our browser environment. Zero setup required to start exploring visual intelligence.",
    icon: <Play className="w-6 h-6" />,
    link: "#",
    image: "/abstract-neural-network-flow.png",
  },
  {
    title: "Enterprise",
    tags: ["DEDICATED SUPPORT", "CUSTOM MODELS", "SLA GUARANTEES"],
    description: "Tailored solutions for scaling AI operations. Includes custom fine-tuning and priority access to research.",
    icon: <Globe className="w-6 h-6" />,
    link: "#",
    image: "/digital-monolith-architecture.png",
  },
]

// 1. Accept the prop here
export function ParallaxServices({ scrollContainerRef }: ParallaxServicesProps) {
  const targetRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useMotionPreference()

  // 2. Tell Framer Motion to watch the specific container, not the window
  const { scrollYProgress } = useScroll({
    target: targetRef,
    container: scrollContainerRef, // <--- CRITICAL FIX
    offset: ["start start", "end end"],
  })

  return (
    <section id="services" ref={targetRef} className="h-[400vh] relative bg-background border-t border-white/5">
      <div className="sticky top-0 h-screen flex flex-col lg:flex-row items-center overflow-hidden">

        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center h-full px-6 md:px-12 z-10 shrink-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              root: scrollContainerRef, // Make viewport detection work with container
              once: true
            }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.8
            }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl md:text-8xl font-sans leading-[0.9] tracking-tight text-white block">
                Built to fit.
              </h2>
              <h2 className="text-5xl md:text-8xl font-sans leading-[0.9] tracking-tight text-muted-foreground block">
                Ready to run.
              </h2>
            </div>
            <div className="space-y-6 max-w-md">
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Whether you're scaling through API, running open weights on your own infrastructure, or just
                experimenting – our models work wherever you do.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Cards */}
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center relative p-6 md:p-12">
          <div className="relative w-full max-w-xl h-[400px] md:h-[550px]">
            {services.map((service, i) => {
              const totalCards = services.length
              const targetScale = 1 - (totalCards - 1 - i) * 0.05

              return (
                <Card
                  key={i}
                  i={i}
                  progress={scrollYProgress}
                  targetScale={targetScale}
                  totalCards={totalCards}
                  service={service}
                  prefersReducedMotion={prefersReducedMotion}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// ... Card component remains exactly the same as your code ...
function Card({
  i,
  progress,
  targetScale,
  totalCards,
  service,
  prefersReducedMotion,
}: {
  i: number
  progress: MotionValue<number>
  targetScale: number
  totalCards: number
  service: any
  prefersReducedMotion: boolean
}) {
  const ranges = [
    [0, 0.30],
    [0.33, 0.63],
    [0.66, 0.96],
  ]
  const [start, end] = i === 0 ? [0, 0] : ranges[i - 1] || [0, 1]

  const y = useTransform(
    progress,
    [start, end],
    prefersReducedMotion ? ['0%', '0%']
      : i === 0 ? ['0%', '0%']
        : ['120%', '0%']
  )

  const scale = useTransform(
    progress,
    [end, Math.min(end + 0.15, 1)],
    prefersReducedMotion ? [1, 1]
      : [1, 0.97]
  )

  const stackTopOffset = i * 60
  return (
    <motion.div
      style={{
        y: y,
        scale: scale,
        zIndex: i,
        top: stackTopOffset,
      }}
      className="absolute inset-x-0 bottom-0 origin-top flex items-center justify-center p-2 md:p-4"
    >
      <div className="relative w-full h-full group">
        <div className={`absolute top-0 left-0 w-[95%] h-[90%] md:h-[95%] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden ${prefersReducedMotion
          ? ""
          : "transition-all duration-700"
          }`}>
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        </div>

        <div
          className="absolute bottom-3 md:bottom-4 right-0 md:-right-4 
             w-[92%] md:w-[85%]
             max-h-[85%]
             bg-zinc-900/90 backdrop-blur-md
             rounded-[1.2rem] md:rounded-[1.5rem]
             p-4 md:p-8
             flex flex-col justify-between
             text-white
             shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
        >
          <div className="flex flex-col justify-between h-full overflow-hidden">
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-sans font-medium tracking-tight">{service.title}</h3>
            <div className="p-2 md:p-3 bg-white/10 rounded-full flex-shrink-0 w-fit">{service.icon}</div>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 items-start md:items-end justify-between md:flex-row mt-4">
            <div className="flex flex-col gap-1 md:gap-2">
              {service.tags.map((tag: string) => (
                <span key={tag} className="text-[8px] md:text-[9px] font-bold tracking-[0.1em] text-white/40 uppercase">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex-1 max-w-full md:max-w-[280px]">
              <p className="text-xs md:text-sm lg:text-base leading-snug font-medium text-white/80 mb-4 md:mb-6">
                {service.description}
              </p>
              <div className="flex justify-start md:justify-end">
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-widest bg-white text-black hover:bg-white/90 px-6 md:px-8 py-2 md:py-3 rounded-xl transition-all shadow-sm"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}