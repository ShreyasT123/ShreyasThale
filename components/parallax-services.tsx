"use client"

import { Github, Globe, Terminal, Play, Cpu, Layers, Server, Code } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { useRef } from "react"
import { useMotionPreference } from "@/lib/use-motion-preference"

interface ParallaxServicesProps {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>
}

const services = [
  {
    title: "AI & ML Research",
    tags: ["PYTORCH", "PINNS", "PROBABILISTIC MODELING"],
    description: "Deep Learning research focusing on Physics-Informed Neural Networks and statistical signal processing. Validated models for fault detection and predictive maintenance.",
    icon: <Cpu className="w-6 h-6" />,
    link: "/writing",
    image: "/futuristic-black-machine-learning-architecture.png",
  },
  {
    title: "ML Systems & Agentic AI",
    tags: ["LLM ORCHESTRATION", "MULTI-AGENT SYSTEMS", "COMPILER ML"],
    description: "Building autonomous agentic systems and optimizing model inference. Experience with compiler-aware benchmarking (XLA, Triton, TensorRT) and distributed training.",
    icon: <Layers className="w-6 h-6" />,
    link: "/projects",
    image: "/cinematic-ai-landscape.png",
  },
  {
    title: "Systems & Backend",
    tags: ["FASTAPI", "DISTRIBUTED SYSTEMS", "SCALABILITY"],
    description: "Designing scalable backend architectures for ML systems. Expertise in async services, API design, and high-performance data processing pipelines.",
    icon: <Server className="w-6 h-6" />,
    link: "https://github.com/ShreyasT123",
    image: "/digital-monolith-architecture.png",
  },
  {
    title: "Full-Stack & DevOps",
    tags: ["REACT/NEXT.JS", "DOCKER", "RUST"],
    description: "End-to-end application development with a focus on system-level performance. Building product-focused UIs for technical tools and research demos.",
    icon: <Code className="w-6 h-6" />,
    link: "https://github.com/ShreyasT123",
    image: "/abstract-neural-network-flow.png",
  },
]

export function ParallaxServices({ scrollContainerRef }: ParallaxServicesProps) {
  const targetRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useMotionPreference()

  const { scrollYProgress } = useScroll({
    target: targetRef,
    container: scrollContainerRef,
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
              root: scrollContainerRef,
              once: true
            }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.8
            }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl md:text-8xl font-sans leading-[0.9] tracking-tight text-[#fefefe] block">
                Capabilities.
              </h2>
              <h2 className="text-5xl md:text-8xl font-sans leading-[0.9] tracking-tight text-muted-foreground block">
                End-to-end.
              </h2>
            </div>
            <div className="space-y-6 max-w-md">
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                From research and simulation to distributed systems and production deployment.
                Building the infrastructure that powers intelligent systems.
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
             text-[#fefefe]
             shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
        >
          <div className="flex flex-col justify-between h-full overflow-hidden">
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-sans font-medium tracking-tight">{service.title}</h3>
            <div className="p-2 md:p-3 bg-white/10 rounded-full flex-shrink-0 w-fit">{service.icon}</div>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 items-start md:items-end justify-between md:flex-row mt-4">
            <div className="flex flex-col gap-1 md:gap-2">
              {service.tags.map((tag: string) => (
                <span key={tag} className="text-[8px] md:text-[9px] font-bold tracking-[0.1em] text-[#fefefe]/40 uppercase">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex-1 max-w-full md:max-w-[280px]">
              <p className="text-xs md:text-sm lg:text-base leading-snug font-medium text-[#fefefe]/80 mb-4 md:mb-6">
                {service.description}
              </p>
              <div className="flex justify-start md:justify-end">
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-widest bg-white text-black hover:bg-white/90 px-6 md:px-8 py-2 md:py-3 rounded-xl transition-all shadow-sm"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}