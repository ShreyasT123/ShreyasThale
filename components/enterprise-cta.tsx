"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"

// 1. Define the props interface
// 1. Define the props interface
interface EnterpriseCTAProps {
    scrollContainerRef: React.RefObject<HTMLDivElement | null>
}

// 2. Accept the prop
export function EnterpriseCTA({ scrollContainerRef }: EnterpriseCTAProps) {
    const targetRef = useRef<HTMLDivElement>(null)

    // 3. Configure useScroll to watch the passed container
    const { scrollYProgress } = useScroll({
        target: targetRef,
        container: scrollContainerRef, // <--- THIS IS THE FIX
        offset: ["start end", "end start"]
    })

    // Map the transition to finish by the time the section reaches the center (0.5)
    const filter = useTransform(
        scrollYProgress,
        [0.1, 0.45],
        ["grayscale(100%)", "grayscale(0%)"]
    )
    const opacity = useTransform(scrollYProgress, [0.1, 0.45], [0.4, 1])

    return (
        <section ref={targetRef} className="py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="relative w-full h-[500px] group">
                    {/* Background Image Area */}
                    <div className="absolute top-0 left-0 w-full h-full rounded-[2.5rem] overflow-hidden">
                        <motion.img
                            src="/digital-monolith-architecture.png"
                            alt="Futuristic digital monolith architecture"
                            className="w-full h-full object-cover"
                            style={{
                                filter: filter,
                                opacity: opacity
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
                    </div>

                    {/* Floating White Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{
                            root: scrollContainerRef, // Make viewport animations work too
                            once: true
                        }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute bottom-6 right-6 left-6 lg:left-auto lg:bottom-0 lg:right-0 lg:w-[85%] bg-zinc-900/90 backdrop-blur-md rounded-[2rem] p-8 md:p-14 text-white shadow-2xl flex flex-col md:flex-row justify-between items-end md:items-center gap-8 lg:translate-y-4"
                    >
                        <div className="flex-1 space-y-6">
                            <h2 className="text-4xl md:text-6xl font-sans font-medium tracking-tighter leading-[1.1] text-white">
                                Let’s Build <br /> Something Serious.
                            </h2>
                            <p className="text-lg text-white/60 max-w-md">
                                Open to research, engineering roles, and ambitious collaborations.
                            </p>
                        </div>

                        <div className="flex-1 max-w-lg space-y-10 flex flex-col items-end md:items-start">
                            <div className="flex flex-col sm:flex-row gap-4 w-full justify-end md:justify-start">
                                <Link
                                    href="mailto:contact@example.com"
                                    className="bg-white text-black hover:bg-white/90 px-10 py-4 rounded-xl text-sm font-bold tracking-tight transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm text-center"
                                >
                                    Contact Me
                                </Link>
                                <Link
                                    href="#"
                                    className="bg-white/10 border border-white/20 hover:bg-white/20 text-white px-10 py-4 rounded-xl text-sm font-bold tracking-tight transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm text-center"
                                >
                                    Resume
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}